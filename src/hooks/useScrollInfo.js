import { useCallback, useRef, useState } from 'react';

import useResizeObserver from './useResizeObserver';

// For MS Edge support
const IS_EDGE =
  typeof navigator !== 'undefined' &&
  /Edge\/d./i.test(window.navigator.userAgent);

const throttle = (func, wait) => {
  let context, args, result;
  let timeout = null;
  let previous = 0;

  const later = () => {
    timeout = null;
    result = func.apply(context, args);
    if (!timeout) {
      context = args = null;
    }
  };

  return function () {
    const now = Date().now;
    const rem = wait - now + previous;
    context = this;
    args = arguments;

    if (rem <= 0 || rem > wait) {
      if (timeout) {
        clearTimeout(timeout);
        timeout = null;
      }

      previous = now;
      result = func.apply(context, args);
      if (!timeout) {
        context = args = null;
      }
    } else if (!timeout) {
      timeout = setTimeout(later, rem);
    }

    return result;
  };
};

/**
 *
 * @param {Number} throttleTime throttle time for performance issue. Default number is 50(ms).
 * @returns {Object} [scroll, setRef, ref]
 *
 * scroll : Scroll information object
 *
 * setRef : Dispatcher of referenced object. Reference element using 'ref' attribute to bind.
 *
 * ref : referenced element itself. Mostly not useful.
 */
const useScrollInfo = (throttleTime = 50) => {
  const [scroll, setScroll] = useState({ x: {}, y: {} });
  const ref = useRef(null);
  const previousScroll = useRef(null);

  const updateObserver = () => {
    const element = ref.current;
    let maxX = element.scrollWidth - element.clientWidth;
    let maxY = element.scrollHeight - element.clientHeight;

    if (IS_EDGE && maxY === 1 && element.scrollTop === 0) {
      maxY = 0;
    }

    const xRatio = maxX !== 0 ? element.scrollLeft / maxX : null;
    const yRatio = maxY !== 0 ? element.scrollTop / maxY : null;

    const previous = previousScroll.current;

    const scrollInfo = {
      x: {
        percentage: xRatio,
        value: element.scrollLeft,
        total: maxX,
        delta: previous ? Math.sign(element.scrollLeft - previous.x.value) : 0,
      },
      y: {
        percentage: yRatio,
        value: element.scrollTop,
        total: maxY,
        delta: previous ? Math.sign(element.scrollTop - previous.y.value) : 0,
      },
    };

    previousScroll.current = scrollInfo;
    setScroll(scrollInfo);
  };

  useResizeObserver(ref, () => {
    updateObserver();
  });

  const throttleUpdate = throttle(updateObserver, throttleTime);

  const setRef = useCallback((node) => {
    if (node) {
      node.addEventListener('scroll', throttleUpdate);
      if (!window.ResizeObserver) {
        window.addEventListener('resize', throttleUpdate);
      }

      ref.current = node;
      throttleUpdate(); // throttling initialization
    } else if (ref.current) {
      ref.current.removeEventListener('scroll', throttleUpdate);
      if (!window.ResizeObserver) {
        window.removeEventListener('resize', throttleUpdate);
      }
    }
  }, []);

  return [scroll, setRef, ref];
};

export default useScrollInfo;

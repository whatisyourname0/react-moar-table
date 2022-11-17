import { useEffect } from 'react';

const useResizeObserver = (ref, cb) => {
  useEffect(() => {
    if (typeof window !== 'undefined' && window.ResizeObserver) {
      const observer = new ResizeObserver((entries) => {
        window.requestAnimationFrame(() => {
          if (!(Array.isArray(entries) && entries.length)) {
            return;
          }

          cb(entries[0].contentRect);
        });
      });

      observer.observe(ref.current);

      return () => {
        observer.disconnect();
      };
    }
  }, [ref]);
};

export default useResizeObserver;

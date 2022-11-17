import { css } from 'styled-components';

const scrollbar = css`
  &::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  &::-webkit-scrollbar-track {
    background-color: transparent;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 3px;
    background-color: rgb(180, 180, 180);
    :hover {
      background-color: rgb(150, 150, 150);
    }

    :active {
      background-color: rgb(120, 120, 120);
    }
  }

  &::-webkit-scrollbar-button {
    width: 0;
    height: 0;
  }
`;

export default scrollbar;

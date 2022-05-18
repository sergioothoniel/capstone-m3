import styled from 'styled-components';

export const Container = styled.div`
  .draw-path {
    path {
      stroke-dasharray: 11000;
      stroke-dashoffset: 11000;
      stroke: #000;
      animation: draw 18s alternate forwards;
    }
  }

  @keyframes draw {
    to {
      stroke-dashoffset: 0;
    }
  }
`;

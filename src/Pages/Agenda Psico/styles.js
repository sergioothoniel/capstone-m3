import styled from 'styled-components';

export const Container = styled.div`
  @media (min-width: 801px) {
    .disable {
      display: none;
    }
  }
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FaixaTitulo = styled.div`
  display: flex;
  background-color: #3d5a80;
  height: 70px;
  width: 100vw;
  align-items: center;
  justify-content: center;
  color: white;

  /* font-family: Inter; */
  font-size: 22px;
  font-weight: 500;
  line-height: 28px;
  letter-spacing: 0em;
  text-align: left;
`;

export const BtnVoltar = styled.div``;

export const Cards = styled.div``;

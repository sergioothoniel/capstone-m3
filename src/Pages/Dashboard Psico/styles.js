import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .faixaTitulo {
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
  }

  .calendario {
    margin-top: 100px;
  }
`;

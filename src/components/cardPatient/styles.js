import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;


  .card {
    display: flex;
    align-items: center;
    justify-content: space-around;
    border: 1px solid #98c1d9;
    border-radius: 10px;
    width: 300px;
    height: 153px;
    background-color: #f8f8ff;  

    img {
      height: 96px;
      width: 96px;
      left: 15px;
      top: 29px;
      border-radius: 9999px;
    }
  }

  .card_right_side {
    display: flex;
    flex-direction: column;

    span {
      /* font-family: Inter; */
      font-size: 20px;
      font-weight: 600;
      line-height: 20px;
      letter-spacing: 0em;
      text-align: center;
      margin-bottom: 10px;
    }

    button {
      height: 35px;
      width: 177px;
      left: 126px;
      top: 77px;
      border-radius: 6px;
      padding: 10px, 24px, 10px, 24px;

      background-color: #ee6c4d;
      color: white;
    }
  }
`;

import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 30px auto 0;
  padding: 10px 10px;
  background: rgba(1, 2, 3, 0.8);
  box-shadow: 0 2px 7px rgba(1, 2, 3, 0.8);

  border-radius: 4px;

  .header {
    display: flex;
    flex-direction: row;
    justify-content: center;

    h1 {
      flex: 1;
      font-size: 20px;
      font-weight: bold;
      text-align: center;
      color: #fff;
      margin-bottom: 20px;
      margin-right: 70px;
    }

    button {
      flex: 2;
      border: 0;
      width: 50px;
      height: 44px;
      text-align: center;
      align-self: center;
      font-size: 14px;
      font-weight: bold;
      color: #fff;
      background: #333;
      border-radius: 4px;
      margin-right: 4px;
    

      &:hover {
        background: #444;
        transform: translateY(-2px);
      }

      &:active {
        background: #333;
        transform: translateY(0);
      }
    }
  }

  h1 {
    font-size: 20px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
    margin-right: 90px;

  }
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  img {
    width: 160px;
    height: 160px;
    margin-right: 15px;
    border-radius: 100%;
  }

  p {
    align-self: center;
    font-size: 18px;
    color: #fff;
  }
`;

export const Divider = styled.hr`
  border: 0;
  height: 1px;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  margin: 10px 0 10px;
`;

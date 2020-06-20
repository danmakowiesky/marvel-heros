import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  h2 {
    color: #fff;
    size: 20px;
  }

  div.series {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    div.serie {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      height: 200px;
      width: 200px;
      max-height: 200px;
      max-width: 200px;
      background: rgba(255, 255, 255, 0.1);
      margin: 10px 13px;
      padding: 5px 10px;
      overflow: hidden;
      border-radius: 5px 0 5px 0;
      box-shadow: 0 2px 7px rgba(1, 2, 3, 0.8);

      &:hover {
        background: rgba(255, 255, 255, 0.4);
        transform: translateX(4px);
        box-shadow: 0 2px 7px rgba(255, 255, 255, 0.2);
        transition: transform 0.4s;
        cursor: pointer;
      }

      &:active {
        transform: translateY(1px);
        box-shadow: 0 1px 7px rgba(255, 255, 255, 0.3);
      }
    }
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 10px;
  border-radius: 100%;
`;

export const Name = styled.p`
  font-size: 14px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

export const NoSeries = styled.div`
  display: ${props => (props.hide ? 'none' : 'flex')};
  justify-content: center;
  align-items: center;

  p {
    font-size: 30px;
    font-weight: bold;
    color: #fff;
  }
`;

export const PageHandler = styled.div`
  display: ${props => (props.hide ? 'flex' : 'none')};
  justify-content: space-around;
  align-items: center;
  width: 250px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  padding: 5px 15px;

  button {
    background: #222;
    width: 40px;
    height: 40px;
    border: 0;
    border-radius: 4px;

    &:disabled {
      background: #ccc;
    }

    &:hover {
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0px);
    }
  }

  span {
    text-align: center;
    vertical-align: baseline;
    font-size: 25px;
    font-weight: bold;
    color: #fff;
  }
`;

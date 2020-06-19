import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
  height: 230px;
  width: 400px;
  max-height: 230px;
  max-width: 400px;
  background: rgba(1, 2, 3, 0.8);
  margin: 2px 5px;
  border-radius: 5px 0 5px 0;
  box-shadow: 0 2px 7px rgba(1, 2, 3, 0.8);



    &:hover {
      transform: translateX(8px);
      transition: transform 0.4s;
      box-shadow: 0 2px 7px rgba(255, 0, 0, 0.6);

    }

    & + a {
      margin-top: 14px;
      margin-left: 14px;
    }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 7px rgba(255, 255, 255, 0.3);
  }
`;

export const Image = styled.img`
  width: 120px;
  height: 120px;
  margin-bottom: 14px;
  border-radius: 50%;
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  color: #fff;
`;

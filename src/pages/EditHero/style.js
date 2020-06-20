import styled from 'styled-components';
import { Form, Input } from '@rocketseat/unform';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 700px;
  margin: 30px auto 0;
  padding: 10px 10px;
  background: rgba(1, 2, 3, 0.8);
  box-shadow: 0 2px 7px rgba(1, 2, 3, 0.8);
  margin-bottom: 33px;

  border-radius: 4px;
`;

export const Header = styled.header`
  h1 {
    font-size: 50px;
    font-weight: bold;
    text-align: center;
    color: #fff;
    margin-bottom: 20px;
  }
  
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;

  img {
    width: 190px;
    height: 190px;
    margin-right: 15px;
    border-radius: 100%;
  }

  h1 {
    display: flex;
    align-items: flex-start;
    font-size: 19px;
    color: #fff;
    margin-bottom: 5px;
  }

  span {
    color: #000;
    align-self: flex-start;
    margin: 0 0 10px;
    font-weight: bold;
    font-size: 20px;
  }
`;

export const FormEdit = styled(Form)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  width: 100%;

  textarea {
    width: 100%;
    height: 200px;
    padding: 15px;
    resize: none;
    font-size: 20px;
    font-weight: normal;
  }

  button {
    display: flex;
    align-items: flex-start;
    flex-direction: row;
    border: 0;
    padding: 0 14px;
    width: 115px;
    height: 44px;
    text-align: center;
    font-size: 30px;
    font-weight: bold;
    color: #fff;
    background: #333;
    border-radius: 4px;
    padding-top: 5px;

    svg {
      margin-right: 5px;
    }

    &:hover {
      background: #444;
      transform: translateY(-2px);
    }

    &:active {
      background: #333;
      transform: translateY(0);
    }
  }
`;

export const InputText = styled(Input)`
  background: rgba(255, 255, 255, 0.2);
  border: 0;
  border-radius: 4px;
  height: 44px;
  width: 100%;
  min-width: 167px;
  padding: 0 10px;
  color: #fff;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 10px;
  margin-right: 5px;
`;

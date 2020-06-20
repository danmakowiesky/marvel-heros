import styled from 'styled-components';

export const SideMenu = styled.aside`
  
  width: 490px;
  margin-top:10px;
  margin-left: 10px;
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #3f3f4d;
  border-radius: 5px 0 5px;

  h1 {
    font-weight: bold;
    font-size: 30px;
    color: #fff;
    margin-bottom: 10px;
  }

  input {
    background: rgba(255, 255, 255, 0.2);
    border: 1px;
    border-radius: 5px 5px 5px 5px;
    height: 44px;
    width: 85%;
    min-width: 167px;
    padding: 0 10px;
    color: #fff;
    font-size: 16px;
    margin-bottom: 10px;
    margin-right: 5px;

    &::placeholder {
      color: rgba(255, 255, 255, 0.4);
    }
  }

`;

export const Hero = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 55px;
  max-height: 55px;
  padding: 5px 15px 5px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  overflow: hidden;

  & + div {
    margin-top: 5px;
  }

  &:hover {
    background: rgba(0, 0, 0, 0.5);
    transform: translateX(-2px);
    box-shadow: 0 2px 7px rgba(255, 0, 0, 0.6);
  }

  &:active {
    transform: translateY(0);
    box-shadow: 0 1px 7px rgba(255, 0, 0, 0.6);
  }

  img {
    width: 55px;
    height: 55px;
    border-radius: 100%;
  }

  p {
    font-weight: bold;
    font-size: 16px;
    color: #fff;
  }
`;
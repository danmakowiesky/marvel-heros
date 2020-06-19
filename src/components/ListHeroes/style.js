import styled from 'styled-components';

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column;
  align-items: center;
  padding: 20px 10px 10px;

  div {
    flex: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  font-weight: bold;
  text-align: center;
  color: #000;
  margin-bottom: 20px;
`;

export const Character = styled.div``;

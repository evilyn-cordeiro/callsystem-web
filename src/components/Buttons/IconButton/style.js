import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: ease-in-out 0.4s;

  :hover{
    background-color: #121212;
  }
`;

export const BoxCenterStyle = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
`;

export const IconStyle = styled.div`
  width: max-content;
  display: flex;
  margin-left: 15px;
  margin-right: 20;
  align-items: center;
  justify-content: center;
`;

export const LabelStyle = styled.div`
  width: 250px;
  height: 39px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  margin-left: 15px;
  margin-right:120px;
  color: #fff;
`;

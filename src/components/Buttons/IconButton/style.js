import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.5s;

  :hover{
    background-color: aqua;
  }
`;

export const BoxCenterStyle = styled.div`
    width: 300px;
    height: 50px;
    display: flex;
    justify-content: space-between;
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
  width: 140px;
  height: 39px;
  display: flex;
  align-items: center;
  font-size: 20px;
  font-weight: 300;
  margin-left: 15px;
  margin-right:120px;
  color: #fff;
`;

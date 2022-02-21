import { Link } from 'react-router-dom';
import styled from 'styled-components';
// components

export const Container = styled.div`
  width: 100%;
`;

export const HeaderStyle = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
`;

export const ContentStyle = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 300;
  font-size: 1.2em;
`;

export const SpanStyle = styled.span`
  width: 960px;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #f8f8f8;
  border-radius: 5px;
`;

export const LinkStyled = styled(Link)`
  width: 150px;
  float:right;
  margin-bottom: 1.5em;
  background-color: #83bf02;
  color: #FFF;
  border:0;
  padding: .5em;
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-weight: 600;
  font-size: 1.1em;
  text-decoration: none;
  border-radius: 6px;
  transition: ease-in 0.2s;
  margin-top: 15px;

  :hover{
    background-color: #5fd204;
    transform: scale(1.1);
  }
`;

import styled from 'styled-components';
// components
import { IconButton } from '../../components';

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

export const IconBtnStyle = styled(IconButton)`
  width: 120px;
  height: 40px;
  background-color: #83bf02;
  color: #FFF;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 300;
  font-size: 15px;
  border-radius: 6px;
  transition: ease-in 0.2s;
  margin-top: 10px;

  :hover{
    background-color: #5fd204;
    transform: scale(1.1);
  }
`;

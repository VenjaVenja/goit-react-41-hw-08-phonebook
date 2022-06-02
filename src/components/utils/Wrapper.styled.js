import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const HomePageLink = styled(Link)`
  background-color: #fbeee0;
  border: 2px solid #422800;
  border-radius: 30px;
  box-shadow: #422800 4px 4px 0 0;
  color: #422800;
  cursor: pointer;
  display: inline-block;
  font-weight: 600;
  font-size: 18px;
  padding: 0 18px;
  line-height: 50px;
  text-align: center;
  text-decoration: none;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;

  &:hover {
    background-color: #fff;
  }

  &:active {
    box-shadow: #422800 2px 2px 0 0;
    transform: translate(2px, 2px);
  }

  /* @media (min-width: 768px) {
    min-width: 110px;
    display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 10px;
} */
`;

export const GreetingsText = styled.p`
  font-weight: bold;
  font-size: 2em;
`;

export const GreetingsBlock = styled.div`
  /* display:flex;
align-items:center;
justify-content:center; */
`;

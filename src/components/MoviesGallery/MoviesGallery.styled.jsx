import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const List = styled.ul`
  display: flex;
  flex-wrap: wrap;
  // justify-content: space-between;
  gap: 20px;
  margin: 0 auto;
  padding: 0;
  list-style: none;
`;

export const StyledLink = styled(Link)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 150px;
  border-radius: 2px;
  background-color: #e1e0de;
  text-align: center;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.2),
    0px 1px 1px 0px rgba(0, 0, 0, 0.14), 0px 2px 1px -1px rgba(0, 0, 0, 0.12);
`;

export const Img = styled.img`
  width: 142px;
  margin: 4px;
  margin-bottom: 0;
`;

export const Title = styled.p`
  margin: 10px 0;
  font-size: 18px;
`;

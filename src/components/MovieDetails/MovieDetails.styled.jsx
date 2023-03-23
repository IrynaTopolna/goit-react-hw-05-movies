import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { IoArrowUndoSharp } from 'react-icons/io5';

export const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  width: 130px;
  border: 1px solid orange;
  border-radius: 4px;
  padding: 8px 16px;
  cursor: pointer;
  font-weight: bold;
  &:hover,
  &:focus {
    color: white;
    background-color: orange;
  }
`;

export const Img = styled.img`
  width: 200px;
  margin-top: 20px;
`;

export const ArrowStyled = styled(IoArrowUndoSharp)`
  margin-right: 12px;
  width: 24px;
  fill: currentColor;
`;

export const MovieInfo = styled.div`
  display: flex;
  gap: 16px;
`;

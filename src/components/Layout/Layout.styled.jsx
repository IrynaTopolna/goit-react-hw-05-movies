import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LayoutContainer = styled.div`
  padding: 20px 40px 20px 20px;
`;

export const List = styled.ul`
  display: flex;
  gap: 20px;
  // padding-bottom: 20px;
  border-bottom: 2px solid orange;
  padding: 0;
  padding-bottom: 20px;
  margin: 4px 0 20px 0;
`;

export const StyledNavLink = styled(NavLink)`
  &.active {
    padding: 8px 16px;
    color: white;
    background-color: orange;
    border-radius: 4px;
  }
`;

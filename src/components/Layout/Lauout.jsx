import { Suspense } from 'react';
import { LayoutContainer, List, StyledNavLink } from './Layout.styled';

const Layout = ({ children }) => {
  return (
    <LayoutContainer>
      <header>
        <List>
          <li>
            <StyledNavLink to="/">Home</StyledNavLink>
          </li>
          <li>
            <StyledNavLink to="/movies">Movies</StyledNavLink>
          </li>
        </List>
      </header>

      <main>
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
      </main>
    </LayoutContainer>
  );
};

export default Layout;

import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { Container } from '../theme/container';

const NavWrapper = styled.nav`
background-color: ${({ theme }) => theme.primary};
`

const Row = styled.div`
display: flex;
justify-content: space-between;
padding: 1rem 0;
`

const Logo = styled(Link)`
color: white;
font-size: 1.5rem;
font-weight: bold;
text-transform: uppercase;
`

const StyledLink = styled(NavLink)`
color: white;
font-size: 1.125rem;
line-height: 2;
margin-left: 3rem;
`

export class NavBar extends React.Component<{}, {}> {
    public render() {
        return <NavWrapper>
            <Container>
                <Row>
                    <Logo to={'/'}>Ski Hotel</Logo>
                    <div>
                        <StyledLink to={'/register'}>Register</StyledLink>
                        <StyledLink to={'/log-in'}>Log in</StyledLink>
                    </div>
                </Row>
            </Container>
        </NavWrapper>
    }
}

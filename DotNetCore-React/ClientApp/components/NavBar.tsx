import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Bar = styled.nav`
background-color: ${({ theme }) => theme.primary};
display: flex;
justify-content: space-between;
padding: 1rem 3rem;

> a {
color: white;
font-size: 1.5rem;
font-weight: bold;
text-transform: uppercase;
    }
`;

const PullToRight = styled.div`
> a {
color: white;
font-size: 1.25rem;
font-weight: bold;
margin-left: 4rem;
}
`;

export class NavBar extends React.Component<{}, {}> {
    public render() {
        return <Bar>
            <Link to={'/'}>Ski Hotel</Link>
            <PullToRight>
                <NavLink to={'/register'}>Register</NavLink>
                <NavLink to={'/log-in'}>Log in</NavLink>
            </PullToRight>
            </Bar>
           ;
    }
}

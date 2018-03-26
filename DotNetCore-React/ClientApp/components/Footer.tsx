import * as React from 'react';
import { Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.footer`
background-color: ${({ theme }) => theme.primary};
color: white;
padding: 0.75rem 3rem 0;
text-align: center;

> p {
font-size: 0.75rem;
margin: 0;
}
`;

const FirstRow = styled.div`
display: flex;
justify-content: center;
padding-bottom: 0.75rem;

> a {
color: white;
font-size: 1.125rem;
font-weight: bold;
margin: 0 1rem;
    }
`;

export class Footer extends React.Component<{}, {}> {
    public render() {
        const date = new Date();
        const year = date.getFullYear();

        return <Wrapper>
            <FirstRow>
                <Link to={'/'}>About</Link>
                <Link to={'/'}>Contact</Link>
                <Link to={'/'}>Faq</Link>
            </FirstRow>
            <p>&copy; Ski Hotel {year}</p>
        </Wrapper>
            ;
    }
}


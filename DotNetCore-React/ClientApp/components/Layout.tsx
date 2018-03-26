import * as React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';
import { Footer } from './Footer';
import { Container } from '../theme/container';

export interface LayoutProps {
    children?: React.ReactNode;
}

const AppWrapper = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;

> nav {
flex-shrink: 0
}

${Container} {
flex: 1 0 auto;
}

> footer {
flex-shrink: 0;
}
`;

// children can be found in routes.tsx
export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <AppWrapper>
            <NavBar />
            {this.props.children}
            <Footer />
        </AppWrapper>;
    }
}

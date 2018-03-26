import * as React from 'react';
import styled from 'styled-components';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export interface LayoutProps {
    children?: React.ReactNode;
}

const Page = styled.div`
display: flex;
flex-direction: column;
min-height: 100vh;

> nav {
flex-shrink: 0
}

> section {
flex: 1 0 auto;
}

> footer {
flex-shrink: 0;
}
`;

// children can be found in routes.tsx
export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <Page>
            <NavBar />
            {this.props.children}
            <Footer />
        </Page>;
    }
}

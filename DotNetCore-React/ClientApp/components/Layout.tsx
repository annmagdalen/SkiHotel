import * as React from 'react';
import { NavBar } from './NavBar';
import { Footer } from './Footer';

export interface LayoutProps {
    children?: React.ReactNode;
}

export class Layout extends React.Component<LayoutProps, {}> {
    public render() {
        return <div>
                <NavBar />
                {this.props.children}
                <Footer />
        </div>;
    }
}

import * as React from 'react';
import { Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { Reserve } from './components/Reserve';
import { Reservations } from './components/Reservations';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Faq } from './components/Faq';
import './theme/global';
import { Container } from './theme/container';

export const routes = (
    <ThemeProvider theme={theme}>
        <Layout>
            <Container>
                <Route exact path='/' component={Home} />
                <Route path='/reserve' component={Reserve} />
                <Route path='/reservations' component={Reservations} />
                <Route path='/about' component={ About } />
                <Route path='/contact' component={Contact} />
                <Route path='/faq' component={Faq} />
            </Container>
        </Layout>
    </ThemeProvider>
);

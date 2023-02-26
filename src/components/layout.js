import React, { Component } from 'react';
import { Container } from 'react-bootstrap';
import Header from './header/header';
import Footer from './footer/footer';

export class Layout extends Component {
    static displayName = Layout.name;
     
    render () {
        return (
            <div>
                <Header />
                <Container>
                    {this.props.children}
                </Container>
                <Footer />
            </div>
        );
    }
}

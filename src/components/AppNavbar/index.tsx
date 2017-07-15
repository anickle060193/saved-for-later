import * as React from 'react';
import * as Bootstrap from 'react-bootstrap';
import * as ReactRouter from 'react-router-dom';
import * as ReactRouterBootstrap from 'react-router-bootstrap';

import './styles.css';

export default class AppNavbar extends React.Component<{}, {}>
{
    render()
    {
        return (
            <Bootstrap.Navbar inverse={false} fluid={true} collapseOnSelect={true}>
                <Bootstrap.Navbar.Header>
                    <Bootstrap.Navbar.Brand>
                        <ReactRouter.Link to="/">Save for Later</ReactRouter.Link>
                    </Bootstrap.Navbar.Brand>
                    <Bootstrap.Navbar.Toggle />
                </Bootstrap.Navbar.Header>
                <Bootstrap.Navbar.Collapse>
                    <Bootstrap.Nav pullRight={true}>
                        <ReactRouterBootstrap.LinkContainer exact={true} to="/">
                            <Bootstrap.NavItem >New Save</Bootstrap.NavItem>
                        </ReactRouterBootstrap.LinkContainer>
                    </Bootstrap.Nav>
                </Bootstrap.Navbar.Collapse>
            </Bootstrap.Navbar>
        );
    }
}
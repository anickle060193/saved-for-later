import * as React from 'react';
import * as Bootstrap from 'react-bootstrap';

import './styles.css';

export default class AppNavbar extends React.Component<{}, {}>
{
    render()
    {
        return (
            <Bootstrap.Navbar inverse={false} fluid={true} collapseOnSelect={true}>
                <Bootstrap.Navbar.Header>
                    <Bootstrap.Navbar.Brand>
                        <a href="/">Save for Later</a>
                    </Bootstrap.Navbar.Brand>
                    <Bootstrap.Navbar.Toggle />
                </Bootstrap.Navbar.Header>
                <Bootstrap.Navbar.Collapse>
                    <Bootstrap.Nav pullRight={true}>
                        <Bootstrap.NavItem href="/">New Save</Bootstrap.NavItem>
                        <Bootstrap.NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <Bootstrap.MenuItem >Action</Bootstrap.MenuItem>
                            <Bootstrap.MenuItem divider={true} />
                            <Bootstrap.MenuItem>Separated Action</Bootstrap.MenuItem>
                        </Bootstrap.NavDropdown>
                    </Bootstrap.Nav>
                </Bootstrap.Navbar.Collapse>
            </Bootstrap.Navbar>
        );
    }
}
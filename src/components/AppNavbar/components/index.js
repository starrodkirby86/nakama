import React from 'react';
import {Nav, Navbar} from 'react-bootstrap';
import AppNavbarItem from "./AppNavbarItem/components/index";

class AppNavbar extends React.Component {
    render() {
        var navbarItems = [];
        this.props.navbarItems.forEach(function (item) {
            navbarItems.push(<AppNavbarItem
                name={item.name}
                key={item.name}
            />);
        });
        return (
            <Navbar>
                <Navbar.Header>
                    <Navbar.Brand>
                        なかま
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        {navbarItems}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default AppNavbar;
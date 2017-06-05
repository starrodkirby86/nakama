import React from 'react';
import {NavItem} from 'react-bootstrap';

class AppNavbarItem extends React.Component {

    handleSelect(event) {

    }

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <NavItem
                eventKey={this.props.name}
                href="#"
                //onSelect={this.handleSelect}
            >
                {this.props.name}
            </NavItem>
        );
    }
}

export default AppNavbarItem;
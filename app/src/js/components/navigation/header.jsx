var React = require('react');

var ReactBootstrap = require('react-bootstrap')
    , Nav = ReactBootstrap.Nav
    , NavItem = ReactBootstrap.NavItem
    , Navbar = ReactBootstrap.Navbar
    , Glyphicon = ReactBootstrap.Glyphicon;


var Header =  React.createClass({
    render: function() {
        return (
            <Navbar>
                <Nav>
                    <NavItem
                        className="navbar-header"
                        href="#">
                        <Glyphicon glyph="tree-deciduous"/>&nbsp;qDrive
                    </NavItem>
                    <NavItem
                        href="#">
                        Prospects
                    </NavItem>
                    <NavItem
                        href="#">
                        Active Deals
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
});

module.exports = Header;


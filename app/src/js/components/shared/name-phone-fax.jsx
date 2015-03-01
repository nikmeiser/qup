var React = require('react/addons');
var States = require('./states');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Phone = require('./phone');

var NamePhoneFax = React.createClass({
    render: function() {

        var fax = this.props.showFax && (
            <Col sm={2}>
                <Phone label="Fax"/>
            </Col>);

        var email = this.props.showEmail && (
            <Col sm={2}>
                <Input type="email" label="Email"/>
            </Col>);

        return (
            <Row>
                <Col sm={3}>
                    <Input name={this.props.nameName} type="text" label={this.props.nameLabel || "Contact Person"}/>
                </Col>
                <Col sm={2}>
                    <Phone label="Phone"/>
                </Col>
                {fax}
                {email}
            </Row>
        );
    }
});

module.exports = NamePhoneFax;
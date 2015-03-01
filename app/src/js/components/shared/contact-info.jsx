/**
 * Created by levushka on 1/28/15.
 */
var ReactBootstrap = require('react-bootstrap')
    , Grid = ReactBootstrap.Grid
    , Input = ReactBootstrap.Input
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Phone = require("./phone")

var ContactInfo = React.createClass({
    render: function() {
        return (
                <Row>
                    <Col sm={3}>
                        <Phone label="Phone" name={this.props.phoneName}/>
                    </Col>
                    <Col sm={3}>
                        <Input label="Email" type="email" name={this.props.emailName}/>
                    </Col>
                </Row>
        );
    }
});

module.exports = ContactInfo;
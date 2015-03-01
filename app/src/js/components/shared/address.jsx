var React = require('react/addons');
var States = require('./states');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Address = React.createClass({
    render: function() {
        return (
                <Row>
                    <Col sm={3}>
                        <Input type="text" label={this.props.addressLabel || 'Street Address'} name={this.props.addressName}/>
                    </Col>
                    <Col sm={2}>
                        <Input id="city" type="text" label="City" name={this.props.cityName}/>
                    </Col>
                    <Col sm={2}>
                        <States label="State" name={this.props.stateName}/>
                    </Col>
                    <Col sm={1}>
                        <Input type="text" label="Zip Code" name={this.props.zipName} pattern="^[0-9]{1,5}$"/>
                    </Col>
                </Row>
        );
    }
});

module.exports = Address;
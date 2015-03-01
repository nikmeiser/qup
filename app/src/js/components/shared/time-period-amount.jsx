/**
 * Created by levushka on 1/28/15.
 */
var ReactBootstrap = require('react-bootstrap')
    , Grid = ReactBootstrap.Grid
    , Input = ReactBootstrap.Input
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var TimePeriodAmount = React.createClass({
    render: function() {
        return (
            <Row>
                <Col sm={3}>
                    <Input type="tel" label="Phone" name={this.props.phoneName}/>
                </Col>
                <Col sm={3}>
                    <Input label="Email" type="email" name={this.props.emailName}/>
                </Col>
            </Row>
        );
    }
});

module.exports = TimePeriodAmount;
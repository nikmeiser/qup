var React = require('react/addons');

var ReactBootstrap = require('react-bootstrap')
    , TabPane = ReactBootstrap.TabPane
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid;

var Address = require("../../shared/address");
var ContactInfo = require("../../shared/contact-info");
var SaveNext = require("../../shared/save-next");

var ContactInfoTabContent = React.createClass({
    render: function() {
        return (
            <form onSubmit={this.onSubmit}>
                <h4>Contact Information</h4>
                <hr/>
                <Grid>
                    <Row>
                        <Col sm={3}>
                            <Input type="text" label="Name" name="contactName"/>
                        </Col>
                    </Row>
                    <Address/>
                    <ContactInfo/>
                </Grid>
                <SaveNext/>
            </form>
        );
    }
});

module.exports = ContactInfoTabContent;
var React = require('react/addons');
var TableForm = require('../../shared/table-form');
var ContactInfo = require('../../shared/contact-info');


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;



var BuyerReferences = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Row>
                        <Col sm={3}>
                            <Input type="text" name="companyName" label="Company Name" />
                        </Col>
                        <Col sm={3}>
                            <Input type="text" name="contactName" label="Contact Name" />
                        </Col>
                    </Row>
                    <ContactInfo/>
                </Row>
            </Grid>

        )
        return (
            <TableForm
                formId="bla"
                title=""
                formContent={form}
                addItem={this.props.addItem}
                removeItem={this.props.removeItem}
                data={this.props.data}
                columns={[
                    {key: 'deleteButton', label: ''},
                    {key: 'companyName', label: 'Company Name'},
                    {key: 'contactName', label: 'Contact Name'}
                ]}
            />
        );
    }
});

module.exports = BuyerReferences;
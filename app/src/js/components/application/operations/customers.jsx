var React = require('react/addons');
var TableForm = require('../../shared/table-form');
var States = require('../../shared/states');
var NamePhoneFax = require('../../shared/name-phone-fax')


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Customers = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <Input name="name" type="text" label="Company Name"/>
                    </Col>
                    <Col sm={2}>
                        <Input name="termsOfPayment" type="text" label="Terms of Payment"/>
                    </Col>
                    <Col sm={2}>
                        <Input name="peakExposure" type="text" label="Peak Exposure"/>
                    </Col>
                </Row>
                <NamePhoneFax nameLabel="Contact Name" showEmail={true}/>

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
                    {key: 'termsOfPayment', label: 'Terms of Payments'},
                    {key: 'peakExposure', label: 'Peak Exposure'},
                ]}
            />
        );
    }
});

module.exports = Customers;
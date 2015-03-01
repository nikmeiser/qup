var React = require('react/addons');
var TableForm = require('../../shared/table-form');
var Select = require('react-select');


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Affiliates = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <label>Type of Tax</label>
                        <Select
                            name="typeOfEntity"
                            options={[
                                {label:"Federal Payroll", value:"Federal Payroll"},
                                {label:"State Payroll", value:"State Payroll"},
                                {label:"Federal Income", value:"Federal Income"},
                                {label:"State Income", value:"State Income"},
                                {label:"State Sales", value:"State Sales"},
                                {label:"Local Sales", value:"Local Sales"}
                            ]}
                        />
                    </Col>
                    <Col sm={2}>
                        <Input name="timePeriod" type="text" label="Time Period" defaultValue="" />
                    </Col>
                    <Col sm={2}>
                        <Input name="amount" type="text" label="Amount" defaultValue="" />
                    </Col>
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
                    {key: 'timePriod', label: 'Time Period'},
                    {key: 'amount', label: 'Ammount'}
                ]}
            />
        );
    }
});

module.exports = Affiliates;
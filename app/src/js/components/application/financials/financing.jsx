var React = require('react/addons');
var TableForm = require('../../shared/table-form');
var Address = require('../../shared/address');
var NamePhoneFax = require('../../shared/name-phone-fax')

var Select = require('react-select');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;



var Financing = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <Input name="nameOfInstitution" type="text" label="Name of Institution"/>
                    </Col>
                </Row>
                 <Address/>
                <NamePhoneFax nameLabel="Name of the Relationship Manager" showEmail={true} showFax={true}/>
                <Row>
                    <Col sm={2}>
                        <label>Type of Financing</label>
                        <Select
                            name="typeOfAccount"
                            options={[
                                {label:"Checking", value:"Checking"},
                                {label:"Savings", value:"Savings"},
                                {label:"Other", value:"Other"}
                            ]}
                        />
                    </Col>
                    <Col sm={2}>
                        <Input type="text" name="amountOutstanding" label="Amount Outstanding"/>
                    </Col>
                    <Col sm={2}>
                        <label>Years with Institution</label>
                        <Select
                            name="numberOfYears"
                            options={[
                                {label:"1", value:"Checking"},
                                {label:"2", value:"Savings"},
                                {label:"4", value:"Other"},
                                {label:"4", value:"Other"},
                                {label:">5", value:"Other"}
                            ]}
                        />
                    </Col>
                    <Col sm={3}>
                        <label>Collateral</label>
                        <Select
                            name="numberOfYears"
                            options={[
                                {label: "All Assets", value:"0"},
                                {label:"Receivables", value:"1"},
                                {label: "Inventory", value:"2"},
                                {label: "Equipment", value:"3"},
                                {label: "Real Estate", value:"4"},
                                {label: "IP", value:"5"},
                                {label: "Property", value:"6"},
                                {label: "Other", value:"7"},
                            ]}
                            multi={true}
                        />
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
                    {key: 'eqHolderName', label: 'Name'},
                    {key: 'eqHolderPrc', label: '%'},
                ]}
            />
        );
    }
});

module.exports = Financing;
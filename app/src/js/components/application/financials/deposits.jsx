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



var Deposits = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <Input name="nameOfBank" type="text" label="Name of Bank"/>
                    </Col>
                </Row>
                <Address addressLabel="Address of Branch of Account"/>
                <NamePhoneFax nameLabel="Name of the Officer" showEmail={true} showFax={true}/>
                <Row>
                    <Col sm={2}>
                        <label>Type of Account</label>
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
                        <Input type="text" name="accountNumber" label="Account Number"/>
                    </Col>
                    <Col sm={2}>
                        <label>Years with the Bank</label>
                        <Select
                            name="typeOfAccount"
                            options={[
                                {label:"less than 1", value:"1"},
                                {label:"2", value:"2"},
                                {label:"4", value:"3"},
                                {label:"4", value:"4"},
                                {label:"more than 5", value:"5"}
                            ]}
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

module.exports = Deposits;
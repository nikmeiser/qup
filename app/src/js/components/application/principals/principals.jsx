var React = require('react/addons');

var TableForm = require('../../shared/table-form')
    , States = require('../../shared/states')
    , Address = require('../../shared/address')


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Select = require('react-select');

var Phone = require("../../shared/phone");

var Principals = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <Input name="principalName" type="text" label="Name"/>
                    </Col>
                    <Col sm={2}>
                        <Input name="principalSSN" type="text" label="Social Security Number"/>
                    </Col>

                    <Col sm={3}>
                        <label>Relationship to the Company</label>
                        <Select
                            options={this.props.relationshipOptions}
                            placeHolder=''
                            name="principalRelationship"
                        />
                    </Col>
                </Row>
                <Address
                    addressName = "principalAddress"
                    cityName = "principalCity"
                    stateName = "principalState"
                    zipName = "principalZip"
                />
                <Row>
                    <Col sm={3}>
                        <label>Own/Rent</label>
                        <Select
                            options={[
                                {label:'Own',value:'Own'},
                                {label:'Rent', value:'Rent'}
                            ]}
                            name="principalOwnRent"
                        />
                    </Col>
                </Row>
                <Row>
                    <Col sm={2}>
                        <Phone label="Office Phone" name="principalPhone"/>
                    </Col>
                    <Col sm={2}>
                        <Phone label="Cell. Phone" name="principalCellPhone"/>
                    </Col>
                </Row>
                <Row>
                    <Col sm={1}>
                        <Input type="text" label="Years with the Company" name="principalYearsWithCompany"/>
                    </Col>
                    <Col sm={1}>
                        <Input type="text" label="Years in the Industry" name="principalYearsWithIndustry"/>
                    </Col>
                </Row>
            </Grid>

        );

        return (
            <TableForm
                formId="subsForm"
                title=""
                formContent={form}
                addItem={this.props.addItem}
                removeItem={this.props.removeItem}
                data={this.props.data}
                columns={[
                    {key: 'deleteButton', label: ''},
                    {key: 'principalName', label: 'Name'},
                    {key: 'principalRelationship', label: 'Relationship'},
                    {key: 'principalAddress', label: 'Address'},
                    {key: 'principalCity', label: 'City'},
                    {key: 'principalState', label: 'State'},
                    {key: 'principalZip', label: 'Zip'}
                ]}
            />
        );
    }
});

module.exports = Principals;
var React = require('react/addons');
var TableForm = require('../../shared/table-form');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Select = require('react-select');

var FinancialsFrequency = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={2}>
                        <label>Frequency</label>
                        <Select
                            name="frequency"
                            options={[
                                {label:"Monthly", value:"Monthly"},
                                {label:"Quarterly", value:"Quarterly"},
                                {label:"Biannually", value:"Biannually"},
                                {label:"Annually", value:"Annually"},
                                {label:"Other", value:"Other"}
                            ]}
                        />
                    </Col>
                    <Col sm={2}>
                        <label>Preparation</label>
                        <Select
                            name="preparation"
                            options={[
                                {label:"Internally Prepared", value:"Internally Prepared"},
                                {label:"Compiled", value:"Compiled"},
                                {label:"Reviewed", value:"Reviewed"},
                                {label:"Audited", value:"Audited"},
                                {label:"Other", value:"Other"}
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
                    {key: 'frequency', label: 'Time Period'},
                    {key: 'timePriod', label: 'Time Period'},
                    {key: 'amount', label: 'Ammount'}
                ]}
            />
        );
    }
});

module.exports = FinancialsFrequency;

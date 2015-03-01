var React = require('react/addons');
var TableForm = require('../../shared/table-form');
var Percentage = require('../../shared/percentage');


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var EquityHolders = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <Input name="eqHolderName" type="text" label="Name" defaultValue="" />
                    </Col>
                    <Col sm={2}>
                        <Percentage name="eqHolderPrc" simple></Percentage>
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

module.exports = EquityHolders;
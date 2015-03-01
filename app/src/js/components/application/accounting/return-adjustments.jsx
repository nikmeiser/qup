var React = require('react/addons');
var TableForm = require('../../shared/table-form');


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var States = require('../../shared/states');


var Affiliates = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={2}>
                        <Input name="timePeriod" type="text" label="Time Period" defaultValue="" />
                    </Col>
                    <Col sm={2}>
                        <States addBefore={[{label: "Federal", value: "Federal"}]} label="Taxing Authority" />
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

module.exports = Affiliates;/**
 * Created by levushka on 2/1/15.
 */

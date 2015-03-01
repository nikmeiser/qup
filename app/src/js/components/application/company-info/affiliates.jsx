var React = require('react/addons');
var TableForm = require('../../shared/table-form');
var States = require('../../shared/states');

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
                        <Input name="subsName" type="text" label="Name" defaultValue="" />
                    </Col>
                    <Col sm={2}>
                        <States label="State of Organization" name="subsState"/>
                    </Col>
                </Row>
            </Grid>

        );
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
                    {key: 'subsName', label: 'Name'},
                    {key: 'subsState', label: 'State'},
                ]}
            />
        );
    }
});

module.exports = Affiliates;
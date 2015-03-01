var React = require('react/addons');
var TableForm = require('../../shared/table-form');


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Judgements = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={1}>
                        <Input type="text" name="amount" label="Amount" defaultValue="" />
                    </Col>
                    <Col sm={3}>
                        <Input type="text" name="against" label="Against" defaultValue="" />
                    </Col>
                    <Col sm={3}>
                        <Input type="text" name="court" label="Court" defaultValue="" />
                    </Col>
                    <Col sm={2}>
                        <Input type="date" name="date" label="Approximate Date"></Input>
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
                    {key: 'amount', label: 'Amount'},
                    {key: 'against', label: 'Against'},
                    {key: 'court', label: 'Court'},
                    {key: 'date', label: 'Date'}
                ]}
            />
        );
    }
});

module.exports = Judgements;

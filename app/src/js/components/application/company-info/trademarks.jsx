var React = require('react/addons');
var TableForm = require('../../shared/table-form');
var States = require('../../shared/states');


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Trademarks = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <Input name="trademarkName" type="text" label="Name, Style or Mark" defaultValue="" />
                    </Col>
                    <Col sm={2}>
                        <States
                            addBefore = {[
                                {label:'Not Registered', value:'Not Registered'},
                                {label:'USPTO', value:'USPTO'},
                                {label:'Other', value:'Other'}
                            ]}
                            label="Registered with"
                            name="trademarkState"/>
                    </Col>
                    <Col sm={2}>
                        <Input name="trademarkRegNumber" type="text" label="Registration No." defaultValue="" />
                    </Col>
                </Row>
            </Grid>

        )
        return (
            <TableForm
                formId="trademarkForm"
                title=""
                formContent={form}
                addItem={this.props.addItem}
                removeItem={this.props.removeItem}
                data={this.props.data}
                columns={[
                    {key: 'deleteButton', label: ''},
                    {key: 'trademarkName', label: 'Name'},
                    {key: 'trademarkState', label: 'Registered'},
                ]}
            />
        );
    }
});

module.exports = Trademarks;
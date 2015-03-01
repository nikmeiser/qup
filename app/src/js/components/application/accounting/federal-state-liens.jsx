var React = require('react/addons');
var TableForm = require('../../shared/table-form');


var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var FederalStateLiens = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={2}>
                        <Input name="notice" type="file" label="Copy of Notice of Lien" defaultValue="" />
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
                    {key: 'notice', label: 'Notice of Lien'}
                ]}
            />
        );
    }
});

module.exports = FederalStateLiens;
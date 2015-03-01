var React = require('react/addons');
var TableForm = require('../../shared/table-form');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var ProductLicenseAgreements = React.createClass({
    render: function () {
        var form = (
            <Grid>
                <Row>
                    <Col sm={3}>
                        <Input type="text" label="Consignee" name="consignee"/>
                    </Col>
                    <Col sm={3}>
                        <Input type="text" label="Product Consigned" name="productConsigned"/>
                    </Col>
                    <Col sm={3}>
                        <Input type="text" label="Average Anual Volume" name="product"/>
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
                    {key: 'consignee', label: 'Consignee'},
                    {key: 'productConsigned', label: 'Product Consigned'},
                    {key: 'product', label: 'Product'}
                ]}
            />
        );
    }
});

module.exports = ProductLicenseAgreements;
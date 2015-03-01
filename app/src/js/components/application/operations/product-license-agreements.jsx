var React = require('react/addons');
var TableForm = require('../../shared/table-form');
var States = require('../../shared/states');

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
                        <Input type="text" label="Licensor" name="licensor"/>
                    </Col>
                    <Col sm={3}>
                        <Input type="text" label="Mark" name="mark"/>
                    </Col>
                    <Col sm={3}>
                        <Input type="text" label="Product" name="product"/>
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
                    {key: 'licensor', label: 'Licensor'},
                    {key: 'mark', label: 'Mark'},
                    {key: 'product', label: 'Product'},
                    {key: 'uploadLicenseAgreement', label: 'Upload License Agreement'}
                ]}
            />
        );
    }
});

module.exports = ProductLicenseAgreements;
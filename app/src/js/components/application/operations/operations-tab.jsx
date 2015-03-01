var React = require('react/addons')
    , reactUtils = require('../../shared/react-utils');

var ReactBootstrap = require('react-bootstrap')
    , Grid = ReactBootstrap.Grid
    , Input = ReactBootstrap.Input
    , Button = ReactBootstrap.Button
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Customers = require('./customers')
    , TradeReferences = require('./trade-references')
    , ProductLicenseAgreements = require('./product-license-agreements')
    , BuyerReferences = require('./buyer-references')
    , ConsignmentSales = require('./consignment-sales')
    , Hidable = require('../../shared/hidable')
    , SaveNext = require("../../shared/save-next");

var Select = require('react-select');



var OperationsTabContent = React.createClass({

    getInitialState: function(){
        return({
            customers: [],
            tradeReferences: [],
            buyerReferences: [],
            productLicenseAgreements: [],
            consignmentSales: [],
            showProductLicenseAgreements: false,
            showConsignmentSales: false

        });
    },

    addCustomer: function(item){
        this.setState({customers: this.state.customers.concat(item)})
    },

    removeCustomer: function(index){
        this.setState({customers: reactUtils.removeItemAtIndex(this.state.customers, index)})
    },

    addTradeReference: function(item){
        this.setState({tradeReferences: this.state.tradeReferences.concat(item)})
    },

    removeTradeReference: function(index){
        this.setState({tradeReferences: reactUtils.removeItemAtIndex(this.state.tradeReferences, index)})
    },
    addBuyerReference: function(item){
        this.setState({buyerReferences: this.state.buyerReferences.concat(item)})
    },

    removeBuyerReference: function(index){
        this.setState({buyerReferences: reactUtils.removeItemAtIndex(this.state.buyerReferences, index)})
    },
    addProductLicenseAgrement: function(item){
        this.setState({productLicenseAgrements: this.state.productLicenseAgrements.concat(item)})
    },

    removeProductLicenseAgrement: function(index){
        this.setState({productLicenseAgrements: reactUtils.removeItemAtIndex(this.state.productLicenseAgrements, index)})
    },
    addConsignmentSale: function(item){
        this.setState({consignmentSales: this.state.consignmentSales.concat(item)})
    },

    removeConsignmentSale: function(index){
        this.setState({consignmentSales: reactUtils.removeItemAtIndex(this.state.consignmentSales, index)})
    },

    render: function() {
        return (
            <div>
                <h4>Operations</h4>
                <hr/>
               <Grid>
                        <form>
                            <Row>
                                <Col sm={2}>
                                    <Input name="outstandingAR" type="text" label="Outstanding A/R" defaultValue=""/>
                                </Col>
                                <Col sm={2}>
                                    <Input name="averageMonthlySales" type="text" label="Average Monthly Sales" defaultValue=""/>
                                </Col>
                                <Col sm={3}>
                                    <Input name="averageNumberOfActiveCustomers" type="text" label="Average Number of Active Customers" defaultValue=""/>
                                </Col>
                           </Row>
                            <Row>
                                <Col sm={3}>
                                    <Input type="text" label="Total A/R You Intend to Factor on a Monthly Basis."/>
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={7}>
                                    <Input type="textarea" label="Usual Terms of Sale"/>
                                </Col>
                            </Row>
                        </form>
                    <Row>
                        <Col sm={10}>
                            <h4>Main Customers</h4>
                            <Customers
                                addItem={this.addCustomer}
                                removeItem={this.removeCustomer}
                                data={this.state.customers}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <h4>3 Trade References</h4>
                            <TradeReferences
                                addItem={this.addTradeReference}
                                removeItem={this.removeTradeReference}
                                data={this.state.tradeReferences}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <h4>3 Buyer References</h4>
                            <BuyerReferences
                                addItem={this.addBuyerReference}
                                removeItem={this.removeBuyerReference}
                                data={this.state.buyerReferences}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <Hidable heading="Do You Have Product License Agreements">
                                <ProductLicenseAgreements
                                    addItem={this.addProductLicenseAgrement}
                                    removeItem={this.removeProductLicenseAgrement}
                                    data={this.state.productLicenseAgreements}
                                />
                            </Hidable>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <Hidable heading="Do You Have Consignment Sales?">
                                <ConsignmentSales
                                    addItem={this.addConsignmentSale}
                                    removeItem={this.removeConsignmentSale}
                                    data={this.state.consignmentSales}
                                />
                            </Hidable>
                        </Col>
                    </Row>
                </Grid>
                <SaveNext/>
            </div>
        );
    }
});

module.exports = OperationsTabContent;

/**
 * Created by levushka on 1/28/15.
 */

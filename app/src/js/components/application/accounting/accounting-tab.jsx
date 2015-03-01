var React = require('react/addons')
    , reactUtils = require('../../shared/react-utils');


var ReactBootstrap = require('react-bootstrap')
    , TabPane = ReactBootstrap.TabPane
    , Grid = ReactBootstrap.Grid
    , Input = ReactBootstrap.Input
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var States = require('../../shared/states')
    , FinancialsFrequency = require('./financials-frequency')
    , PastDueTaxes = require('./past-due-taxes')
    , FederalStateLiens = require('./federal-state-liens')
    , ReturnAdjustments = require('./return-adjustments')
    , Hidable = require('../../shared/hidable')
    , SaveNext = require("../../shared/save-next");

var Select = require('react-select');
var Address = require("../../shared/address");
var NamePhoneFax = require("../../shared/name-phone-fax");

var OperationsTabContent = React.createClass({

    getInitialState: function(){
        return({
            financials: [],
            taxes: [],
            statePayrollTaxes: [],
            federalIncomeTaxes: [],
            stateIncomeTaxes: [],
            stateSalesTaxes: [],
            localSalesTaxes: [],
            liens: [],
            adjustments: []
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
                <h4>Accounting and Tax</h4>
                <hr/>
                <Grid>
                    <form>
                        <Row>
                            <Col sm={2}>
                                <Input name="cpaName" type="text" label="Name of Company CPA" defaultValue=""/>
                            </Col>
                        </Row>
                        <Address/>
                        <NamePhoneFax showEmail={true}/>
                        <Row>
                            <Col sm={2}>
                                <Input type="text" label="Number of Years Using Service"/>
                            </Col>
                            <Col sm={2}>
                                <br/>
                                <Input type="text" name="fye" label="Company's FYE"/>
                            </Col>
                            <Col sm={2}>
                                <br/>
                                <Input name="noEmployees" type="text" label="Number of Employees" />
                            </Col>
                            <Col sm={2}>
                                <label>How often do you pay payroll taxes</label>
                                <Select
                                    name="frequency"
                                    options={[
                                        {label:"Weekly", value:"weekly"},
                                        {label:"Monthly", value:"Monthly"},
                                        {label:"Quarterly", value:"Quarterly"}
                                    ]}
                                />
                            </Col>
                        </Row>
                    </form>
                    <Row>
                        <Col sm={8}>
                            <h4>How Often are Financials Generated</h4>
                            <FinancialsFrequency
                                addItem={this.addEqHolder}
                                removeItem={this.removeEqHolder}
                                data={this.state.financials}
                            />
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>
                            <Hidable heading="Do You Have Past Due Taxes?">
                                <PastDueTaxes
                                    addItem={this.addSubs}
                                    removeItem={this.removeSubs}
                                    data={this.state.taxes}
                                />
                            </Hidable>
                        </Col>
                    </Row>

                    <Row>
                        <Col sm={8}>
                            <Hidable heading="Do You Have Prior Year Tax Return Adjustments?">
                                <ReturnAdjustments
                                    addItem={this.addSubs}
                                    removeItem={this.removeSubs}
                                    data={this.state.adjustments}
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

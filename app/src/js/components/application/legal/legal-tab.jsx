var React = require('react/addons')
    , reactUtils = require('../../shared/react-utils');


var ReactBootstrap = require('react-bootstrap')
    , Grid = ReactBootstrap.Grid
    , Input = ReactBootstrap.Input
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Judgements = require('./judgements')
    , Litigations = require('./litigations')
    , Bankrupcies = require('./bankrupcies')
    , Hidable = require('../../shared/hidable')
    , SaveNext = require('../../shared/save-next');

var Select = require('react-select');
var Address = require("../../shared/address");
var NamePhoneFax = require("../../shared/name-phone-fax");

var OperationsTabContent = React.createClass({

    getInitialState: function(){
        return({
            judgements: [],
            litigations: [],
            bankrupcies: []
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
                <h4>Legal</h4>
                <hr/>
                <Grid>
                    <form>
                        <Row>
                            <Col sm={3}>
                                <Input name="nameOfAttorney" type="text" label="Name of Attorney"/>
                            </Col>
                        </Row>
                        <Address/>
                        <NamePhoneFax showEmail={true}/>
                    </form>
                    <Row>
                        <Col sm={10}>
                            <Hidable heading="Are there Outstanding Judgments?">
                                <Judgements
                                    addItem={this.addEqHolder}
                                    removeItem={this.removeEqHolder}
                                    data={this.state.judgements}
                                />
                            </Hidable>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <Hidable heading="Are there Litigations Pending against the Company or any of its Principals?">
                                <Litigations
                                    addItem={this.addSubs}
                                    removeItem={this.removeSubs}
                                    data={this.state.litigations}
                                />
                            </Hidable>

                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <Hidable heading="Are there Bankruptcy or Insolvency proceeding by Company or principles (voluntary or involuntary)?">
                                <Bankrupcies
                                    addItem={this.addSubs}
                                    removeItem={this.removeSubs}
                                    data={this.state.bankrupcies}
                                />
                            </Hidable>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <hr/>
                        <p>
                            The undersigned certifies that all of the above information is true and correct, that the Company's financial statements are true and correct and accurately present the financial condition of the Company, and that the undersigned's personal financial statement is true and correct and  accurately presents the  financial condition of the undersigned. The undersigned understands that [INSERT NAME OF LENDER/FACTOR] intends to rely thereon in determining whether to offer financing to the Company.
                        </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Input type="text" label="Name"/>
                        </Col>
                        <Col sm={3}>
                            <Input type="date" label="Date"/>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <p>
                                The undersigned hereby authorizes [INSERT NAME OF LENDER/FACTOR] to gather and use, from time to time, without the undersigned's knowledge, any and all financial and/or credit information relating to the Company that can be obtained from any source whatsoever, including but not limited to banks, trade associates and creditors. The undersigned also hereby authorizes [INSERT NAME OF LENDER/FACTOR] to investigate the personal credit history of the Company and the undersigned and obtain credit bureau reports on the Company and the undersigned from time to time at the sole discretion of [INSERT NAME OF LENDER/FACTOR]. The undersigned hereby authorizes its suppliers, customers, accountants,  attorneys and employees and any person or consumer reporting agency to give [INSERT NAME OF LENDER/FACTOR] any information it may have on the Company or the undersigned. In addition, the undersigned authorizes [INSERT NAME OF LENDER/FACTOR] to answer questions about its credit experience with the Company. This serves as the undersigned's permission to release any information regarding this application for purposes of credit investigation to [INSERT NAME OF LENDER/FACTOR]
                            </p>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={3}>
                            <Input type="text" label="Name"/>
                        </Col>
                        <Col sm={3}>
                            <Input type="date" label="Date"/>
                        </Col>
                    </Row>

                </Grid>
                <SaveNext/>
            </div>
        );
    }
});

module.exports = OperationsTabContent;

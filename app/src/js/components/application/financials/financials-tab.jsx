var React = require('react/addons')
    , reactUtils = require('../../shared/react-utils');


var ReactBootstrap = require('react-bootstrap')
    , Grid = ReactBootstrap.Grid
    , Input = ReactBootstrap.Input
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Deposits = require('./deposits')
    , Financing = require('./financing')
    , SaveNext = require("../../shared/save-next");

var Select = require('react-select');

var FinancialsTabContent = React.createClass({

    getInitialState: function(){
        return({
            deposits: [],
            financing: []
        });
    },

    addDeposit: function(item){
        this.setState({deposits: this.state.deposits.concat(item)});
    },

    removeDeposit: function(index){
        this.setState({deposits: reactUtils.removeItemAtIndex(this.state.deposits, index)});
    },

    addFinancing: function(item){
        this.setState({financing: this.state.financing.concat(item)});
    },

    removeFinancing: function(index){
        this.setState({financing: reactUtils.removeItemAtIndex(this.state.financing, index)});
    },

    render: function() {
        return (
            <div>
                <h4>Banking</h4>
                <hr/>
                <Grid>
                    <Row>
                        <Col sm={10}>
                            <h4>Deposits</h4>
                            <hr/>
                            <Deposits
                                addItem={this.addDeposit}
                                removeItem={this.removeDeposit}
                                data={this.state.deposits}
                            ></Deposits>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={10}>
                            <h4>Financing</h4>
                            <Financing
                                addItem={this.addFinancing}
                                removeItem={this.removeFinancing}
                                data={this.state.financing}
                            ></Financing>
                        </Col>
                    </Row>
                </Grid>
                <form>
                    <SaveNext/>
                </form>
            </div>
        );
    }
});

module.exports = FinancialsTabContent;

/**
 * Created by levushka on 1/28/15.
 */

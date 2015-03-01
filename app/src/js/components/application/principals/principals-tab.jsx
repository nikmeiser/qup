var React = require('react/addons')
    , reactUtils = require('../../shared/react-utils');


var ReactBootstrap = require('react-bootstrap')
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Principals = require('./principals')
    , SaveNext = require("../../shared/save-next");

var PrincipalsTabContent = React.createClass({

    getInitialState: function(){
        return({
            eqHolders: [],
            subs: [],
            affiliates: [],
            trademarks: [],
            principals: []
        });
    },

    addPrincipal: function(item){
        this.setState({principals: this.state.principals.concat(item)})
    },

    removePrincipal: function(index){
        this.setState({principals: reactUtils.removeItemAtIndex(this.state.principals, index)})
    },

    render: function() {
        return (
            <div>
                <h4>Principals Information</h4>
                <hr/>
                <Grid>
                    <Row>
                        <Col sm={10}>

                            <h4>Principals</h4>

                            <Principals
                                addItem={this.addPrincipal}
                                removeItem={this.removePrincipal}
                                data={this.state.principals}
                                relationshipOptions={[]}
                            ></Principals>
                        </Col>
                    </Row>
                </Grid>
                <form id="principalsForm">
                    <SaveNext form="principalsForm"/>
                </form>
            </div>
        );
    }
});

module.exports = PrincipalsTabContent;

/**
 * Created by levushka on 1/28/15.
 */

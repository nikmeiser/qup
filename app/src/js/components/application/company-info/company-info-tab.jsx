var React = require('react/addons')
    , reactUtils = require('../../shared/react-utils');

var Reflux = require('reflux');
var actions = require('../../../actions/actions');
var applicationStore = require('../../../stores/applicationStore');
var SearchResultsTable = require('./search-results-table.jsx');
var Table = require('reactable').Table;

var ReactBootstrap = require('react-bootstrap')
    , TabPane = ReactBootstrap.TabPane
    , Grid = ReactBootstrap.Grid
    , Input = ReactBootstrap.Input
    , Row = ReactBootstrap.Row
    , Label = ReactBootstrap.Label
    , Col = ReactBootstrap.Col
    , Button = ReactBootstrap.Button;

var States = require('../../shared/states')
    , EquityHolders = require('./equity-holders')
    , Subsidiaries = require('./subsidiaries')
    , Affiliates = require('./affiliates')
    , Trademarks = require('./trademarks')
    , SaveNext = require('../../shared/save-next');

var Select = require('react-select');

var CompanyInfoTabContent = React.createClass({

    mixins: [Reflux.connectFilter(applicationStore, 'corpEntities', function(corpEntities) {
        var searchTerm = this.refs.companyName.getValue().toLowerCase();
        return corpEntities.filter(function(ce) {
            return ce.current_entity_name.toLowerCase().indexOf(searchTerm) > -1;
        }.bind(this));
    })],

    getInitialState: function(){
        var applicationData = applicationStore.getDefaultData();
        return({
            loading: true,
            corpEntities: applicationData.corpEntities,
            eqHolders: applicationData.eqHolders,
            subs: applicationData.subs,
            affiliates: applicationData.affiliates,
            trademarks: applicationData.trademarks,
            principals: applicationData.principals
        });
    },

    addEqHolder: function(item){
        this.setState({eqHolders: this.state.eqHolders.concat(item)})
    },

    removeEqHolder: function(index){
        this.setState({eqHolders: reactUtils.removeItemAtIndex(this.state.eqHolders, index)})
    },

    addSubs: function(item){
        this.setState({subs: this.state.subs.concat(item)})
    },

    removeSubs: function(index){
        this.setState({subs: reactUtils.removeItemAtIndex(this.state.subs, index)})
    },

    addAff: function(item){
        this.setState({affiliates: this.state.affiliates.concat(item)})
    },

    removeAff: function(index){
        this.setState({affiliates: reactUtils.removeItemAtIndex(this.state.affiliates, index)})
    },
    addTrademark: function(item){
        this.setState({trademarks: this.state.trademarks.concat(item)})
    },

    removeTrademark: function(index){
        this.setState({trademarks: reactUtils.removeItemAtIndex(this.state.trademarks, index)})
    },

    checkCorporation: function() {
        console.log(this.refs.companyName.getValue());
        actions.findCorporation(this.refs.companyName.getValue());
    },

    render: function() {
        var searchResults = this.state.corpEntities;
        var searchResultsTable = <SearchResultsTable data={searchResults}/>;

        return (
            <div>
                <h4>Company Information</h4>
                <hr/>
                <Grid>
                        <form id="companyInfoForm">
                            <Row>
                                <Col sm={3}>
                                    <Input ref="companyName" type="text" label="Name" defaultValue=""/>
                                    <Button bsStyle="primary" onClick={this.checkCorporation}>Check Name</Button>
                                </Col>
                                <Col sm={2}>
                                    <label>Type of entity</label>
                                    <Select
                                        name="typeOfEntity"
                                        options={[
                                            {label:"Corp", value:"Corp"},
                                            {label:"LLC", value:"LLC"},
                                            {label:"LP", value:"LP"},
                                            {label:"GP", value:"GP"},
                                            {label:"Sole Proprietorship", value:"Sole Proprietorship"},
                                            {label:"Other", value:"Other"}
                                        ]}
                                    />
                                </Col>
                                <Col sm={2}>
                                    <Input type="text" label="Tax ID No." pattern="\d{2}[\-]\d{7}"/>
                                </Col>
                                <Col sm={2}>
                                    <States label="State of Organization" ref="state" simple></States>
                                </Col>
                            </Row>
                            <Row>
                                { searchResults.length > 0 ? searchResultsTable : "" }
                            </Row>
                            <Row>
                                <Col sm={6}>
                                    <Input type="textarea" ref="companyBusiness" label="Describe company's business" defaultValue="" />
                                </Col>
                            </Row>
                        </form>
                    <Row>
                        <Col sm={8}>

                            <h4>List equity holders and their percentage ownership</h4>

                            <EquityHolders
                                addItem={this.addEqHolder}
                                removeItem={this.removeEqHolder}
                                data={this.state.eqHolders}
                            ></EquityHolders>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>

                            <h4>List all subsidiaries</h4>
                            <Subsidiaries
                                addItem={this.addSubs}
                                removeItem={this.removeSubs}
                                data={this.state.subs}
                            ></Subsidiaries>
                        </Col>
                    </Row>
                    <Row>

                        <Col sm={8}>

                            <h4>List all affiliates (companies whose equity is at least 50% owned by any combination of the Company's principals)
                            </h4>

                            <Affiliates
                                addItem={this.addAff}
                                removeItem={this.removeAff}
                                data={this.state.affiliates}
                            ></Affiliates>
                        </Col>
                    </Row>
                    <Row>
                        <Col sm={8}>

                            <h4>Tradenames, tradestyles and trademarks (if any)</h4>

                            <Trademarks
                                addItem={this.addTrademark}
                                removeItem={this.removeTrademark}
                                data={this.state.trademarks}
                            ></Trademarks>
                        </Col>
                    </Row>
                </Grid>
                <SaveNext form="companyInfoForm"/>
            </div>
        );
    }
});

module.exports = CompanyInfoTabContent;

/**
 * Created by levushka on 1/28/15.
 */

var React = require('react/addons')
    , reactUtils = require('../shared/react-utils');

var Router = require('react-router')
    , Link = Router.Link;

var ReactRouterBootstrap = require('react-router-bootstrap')
    , NavItemLink = ReactRouterBootstrap.NavItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink;

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Panel = ReactBootstrap.Panel
    , Modal = ReactBootstrap.Modal
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Label = ReactBootstrap.Label
    , TabbedArea = ReactBootstrap.TabbedArea
    , TabPane = ReactBootstrap.TabPane
    , Glyphicon = ReactBootstrap.Glyphicon
    , Button = ReactBootstrap.Button;


var ContactInfoTabContent =  require('./contact-info/contact-info-tab')
    , CompanyInfoTabContent =  require('./company-info/company-info-tab')
    , PrincipalsTabContent =  require('./principals/principals-tab')
    , FinancialsTabContent =  require('./financials/financials-tab')
    , OperationsTabContent =  require('./operations/operations-tab')
    , AccountingTabContent =  require('./accounting/accounting-tab')
    , LegalTabContent =  require('./legal/legal-tab');


var ApplicationForm = React.createClass({

    getInitialState: function(){
        return({
            items: []
        });
    },

    addItem: function(item){
        this.setState({items: this.state.items.concat(item)})
    },

    removeItem: function(index){
        this.setState({items: reactUtils.removeItemAtIndex(this.state.items, index)})
    },

    render: function () {
        return (
            <Panel>
                <ol className="breadcrumb">
                    <li><Link to="prospects">Prospects</Link></li>
                    <li><Link to="applicationList">Application Checklist</Link></li>
                    <li className="active">Application</li>
                </ol>
                <h3>
                    <ButtonLink bsStyle="primary" to="applicationList">
                        <Glyphicon glyph="chevron-left"/> Back
                    </ButtonLink>
                    &nbsp;Application&nbsp;
                </h3>

                <TabbedArea>
                    <TabPane eventKey={1} tab="Contact Info">
                        <ContactInfoTabContent/>
                    </TabPane>
                    <TabPane eventKey={2} tab="Company">
                        <CompanyInfoTabContent/>
                    </TabPane>
                    <TabPane eventKey={3} tab="Principals">
                        <PrincipalsTabContent/>
                    </TabPane>
                    <TabPane eventKey={4} tab="Banking">
                        <FinancialsTabContent/>
                    </TabPane>
                    <TabPane eventKey={5} tab="Operations">
                        <OperationsTabContent/>
                    </TabPane>
                    <TabPane eventKey={6} tab="Accounting & Tax">
                        <AccountingTabContent/>
                    </TabPane>
                    <TabPane eventKey={7} tab="Legal">
                        <LegalTabContent/>
                    </TabPane>
                    <TabPane eventKey={8} tab="Supporting Documents">
                        <LegalTabContent/>
                    </TabPane>

                </TabbedArea>
            </Panel>
        );
    }
});

module.exports = ApplicationForm;
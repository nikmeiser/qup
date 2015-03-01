var React = require('react');

var Router = require('react-router')
    , Link = Router.Link;

var ReactBootstrap = require('react-bootstrap')
    , Well = ReactBootstrap.Well
    , Nav = ReactBootstrap.Nav
    , NavItem = ReactBootstrap.NavItem
    , Navbar = ReactBootstrap.Navbar
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Button = ReactBootstrap.Button
    , Panel = ReactBootstrap.Panel
    , TabbedArea = ReactBootstrap.TabbedArea
    , TabPane = ReactBootstrap.TabPane
    , Glyphicon = ReactBootstrap.Glyphicon
    , ModalTrigger = ReactBootstrap.ModalTrigger;

var Table = require('reactable').Table
    , Tr = require('reactable').Tr
    , Td = require('reactable').Td;

var ReactRouterBootstrap = require('react-router-bootstrap')
    , NavItemLink = ReactRouterBootstrap.NavItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink;

var EmailModal = require("./email-edit");

// var Applications = require("./applications");

var ApplicationModal = require("./application-edit.jsx");



var ApplicationList = React.createClass({
    getInitialState: function () {
        return {
            //applications: new Applications(),
            showDialog: false
        };
    },

    getApplicationData: function (applicationData) {
        return [{
            item: 'Intro Email',
            status: (<span style={{color: 'red', fontWeight:'bold'}}>Not Sent</span>),
            action: (
                <Button name="email" bsStyle="primary" onClick={this.showDialog}>
                    Send
                </Button>
            )
        },{
            item: 'Application',
            status: (<span style={{color: 'darkorange', fontWeight:'bold'}}>In Progress</span>),
            action: (
                <ButtonToolbar>
                    <ButtonLink bsStyle="primary" to="application">
                        View
                    </ButtonLink>
                    <Button bsStyle="primary" onClick={this.editApplication}>
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'Corp. Status',
            status: (<span style={{color: 'green', fontWeight:'bold'}}>Complete</span>),
            action: (
                <ButtonToolbar>
                    <Button
                        name="corpStatus"
                        bsStyle="primary"
                        onClick={this.openWindowFunc(
                            "http://appext20.dos.ny.gov/corp_public/CORPSEARCH.ENTITY_INFORMATION?p_nameid=3380218&p_corpid=3363176&p_entity_name=Talent%20Sciences&p_name_type=A&p_search_type=BEGINS&p_srch_results_page=0"
                        )}
                    >
                        View
                    </Button>
                    <Button bsStyle="primary">
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'Lean Search',
            status: (<span style={{color: 'green', fontWeight:'bold'}}>Complete</span>),
            action: (

                <ButtonToolbar>
                    <Button name="lean"
                        bsStyle="primary"
                        onClick={this.openWindowFunc(
                            "mocks/ucc.html"
                        )}
                    >
                        View
                    </Button>
                    <Button bsStyle="primary" onClick={this.editApplication}>
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'OFAC Search',
            status: (<span style={{color: 'green', fontWeight:'bold'}}>No Records Found</span>),
            action: (
                <ButtonToolbar>
                    <Button name="lean"
                        bsStyle="primary"
                    >
                        View
                    </Button>
                    <Button bsStyle="primary" onClick={this.editApplication}>
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'Trademark Search',
            status: (<span style={{color: 'green', fontWeight:'bold'}}>5 Records Found</span>),
            action: (
                <ButtonToolbar>
                    <Button name="lean"
                        bsStyle="primary"
                    >
                        View
                    </Button>
                    <Button bsStyle="primary" onClick={this.editApplication}>
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'Tax Returns',
            status: (<span style={{color: 'green', fontWeight:'bold'}}>Uploaded</span>),
            action: (
                <ButtonToolbar>
                    <Button bsStyle="primary">
                        View
                    </Button>
                    <Button bsStyle="primary">
                        Upload
                    </Button>
                    <Button bsStyle="primary">
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'Organization Docs',
            status: (<span style={{color: 'green', fontWeight:'bold'}}>Uploaded</span>),
            action: (
                <ButtonToolbar>
                    <Button bsStyle="primary">
                        View
                    </Button>
                    <Button bsStyle="primary">
                        Upload
                    </Button>
                    <Button bsStyle="primary">
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'Personal Financial Statements',
            status: (<span style={{color: 'darkorange', fontWeight:'bold'}}>2 of 3 Uploaded</span>),
            action: (
                <ButtonToolbar>
                    <Button bsStyle="primary">
                        View
                    </Button>
                    <Button bsStyle="primary">
                        Upload
                    </Button>
                    <Button bsStyle="primary">
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'Sample Customer Transaction Doc',
            status: (<span style={{color: 'red', fontWeight:'bold'}}>Not Uploaded</span>),
            action: (
                <ButtonToolbar>
                    <Button bsStyle="primary">
                        View
                    </Button>
                    <Button bsStyle="primary">
                        Upload
                    </Button>
                    <Button bsStyle="primary">
                        Print
                    </Button>
                </ButtonToolbar>
            )
        },{
            item: 'Product License Agreements',
            status: (<span style={{color: 'red', fontWeight:'bold'}}>Not Uploaded</span>),
            action: (
                <ButtonToolbar>
                    <Button bsStyle="primary">
                        View
                    </Button>
                    <Button bsStyle="primary">
                        Upload
                    </Button>
                    <Button bsStyle="primary">
                        Print
                    </Button>
                </ButtonToolbar>
            )
        }];
    },

    showDialog: function (event){
        this.setState({showDialog:event.target.name});
    },

    hideDialog: function(){
        this.setState({showDialog:false});
    },

    openWindowFunc: function(url){

        return function(){
            window.open(url);
        }
    },
    render: function () {

        var modal;

        switch(this.state.showDialog){
            case "email":
                modal =
                    (<EmailModal
                        onRequestHide={this.hideDialog}
                    />);
                break;
        };

        return (
            <Well>
                <Panel>
                    <ol className="breadcrumb">
                        <li><Link to="prospects">Prospects</Link></li>
                        <li className="active">Application Checklist</li>
                    </ol>
                    <h3>
                        <ButtonLink bsStyle="primary" to="prospects">
                            <Glyphicon glyph="chevron-left"/> Back
                        </ButtonLink>
                    &nbsp;Application Checklist</h3>
                </Panel>
                <Table className="table table-striped table-condensed"
                    columns={[
                        { key: "item", label: "Item"},
                        { key: "status", label: "Status"},
                        { key: "action", label: "Action"}
                    ]}
                    sortable={true}
                    data={this.getApplicationData(this.state.applications)}/>
                        {modal}
            </Well>
        );
    }
});

module.exports = ApplicationList;

/**
 * Created by levushka on 2/11/15.
 */

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

// var Prospect = require("./prospect");

// var Prospects = require("./prospects");

var ProspectModal = require("./prospect-edit.jsx");

var ProspectList = React.createClass({
    getInitialState: function () {
        return {
            //prospects: new Prospects(),
            prospects: [
                {name: "Advance Accelerator S.A.", a:0, b:0, c:0},
                {name: "Augusto Therapeutics, Inc.", a:1, b:0, c:0},
                {name: "Avolon Ltd.", a:2, b:0, c:0},
                {name: "Azure SA", a:3, b:0, c:0},
                {name: "Bellicum Inc.", a:3, b:1, c:0},
                {name: "CB Group Corp.", a:3, b:2, c:0},
                {name: "Connections Inc.", a:3, b:3, c:3},
                {name: "Hortonks, Inc.", a:0, b:0, c:0},
                {name: "James Ocean Ltd.", a:2, b:0, c:0}
            ],
            archive: [
                {name: "Smart Piper Partners LP"}
            ],
            showModal: false,
            //prospect: new Prospect()
            prospect: {}
        };
    },

    showNewModal: function () {
        this.setState({showModal: 'new'})
    },

    getProspectData: function (prospectData) {

        return prospectData.map(function (p, i) {

            var images = [
                'images/circle-empty.gif',
                'images/circle-quarter-full-red.gif',
                'images/circle-half-full-yellow.gif',
                'images/circle-full-green.gif'
            ];
            return {
                name: (
                    <span style={{cursor: "pointer"}} onClick={this.editAccount} data-index={i}>{p.name}</span>
                ),
                application: (
                    <Link to="applicationList">
                        <img src={images[p.a]} title="Click for details"/>
                    </Link>

                ),
                documentation: (
                    <img src={images[p.b]}/>
                ),

                active: (
                    <img src={images[p.c]}/>
                ),

                archiveButton: (
                    <Button bsStyle="warning" value={i} onClick={this.archiveAccount} data-toggle="tooltip" data-placement="bottom" title="Click for details">
                        Archive
                    </Button>
                )
            };
        }.bind(this));
    },

    getArchiveData: function (data) {

        return data.map(function (p, i) {

            return {
                name: (
                    <span style={{cursor: "pointer"}} onClick={this.editAccount} data-index={i}>{p.name}</span>
                ),
                documents: (
                    <img src='images/circle-full-green.gif'/>
                ),

                deleteButton: (
                    <Button bsStyle="warning" value={i} onClick={this.deleteAccount} data-toggle="tooltip" data-placement="bottom" title="Delete from Archive">
                        Delete
                    </Button>
                )
            };
        }.bind(this));
    },

    archiveAccount: function (event){
        this.setState({
            showModal: "edit",
            prospect: this.state.prospects.get(event.target.value || event.target.parentElement.value)
        });
    },

    editAccount: function (event){
        this.setState({
            showModal: true
        });
    },

    hideModal: function(){
        //this.getData();
        this.setState({showModal: false})
    },
    render: function () {

        var modal = this.state.showModal &&
            (<ProspectModal
                onRequestHide={this.hideModal}
                prospect={this.state.prospect}
                title={this.state.showModal == "new" ? "New Account" : "Edit Account"}
            />);

        return (
            <Well>
                <Panel>
                    <ButtonToolbar>
                        <h3>Accounts&nbsp;
                            <Button bsStyle="primary" onClick={this.showNewModal}>Add Account</Button></h3>
                    </ButtonToolbar>
                </Panel>
                <TabbedArea defaultActiveKey={1}>
                    <TabPane eventKey={1} tab="Active">
                        <Table className="table table-striped table-condensed"
                            columns={[
                                { key: "archiveButton", label: ""},
                                { key: "name", label: "Name"},
                                { key: "application", label: "Due Diligence Stage"},
                                { key: "documentation", label: "Documentation Stage"},
                                { key: "active", label: "Active"}
                            ]}
                            sortable={true}
                            itemsPerPage={20}
                            data={this.getProspectData(this.state.prospects)}/>
                        {modal}
                    </TabPane>
                    <TabPane eventKey={2} tab="Archive">
                        <Table className="table table-striped table-condensed"
                            columns={[
                                { key: "deleteButton", label: ""},
                                { key: "name", label: "Name"},
                                { key: "documents", label: "Documents"}
                            ]}
                            sortable={true}
                            itemsPerPage={20}
                            data={this.getArchiveData(this.state.archive)}/>
                        {modal}
                    </TabPane>
                </TabbedArea>
            </Well>
        );
    }
});

module.exports = ProspectList;

/**
 * Created by levushka on 2/11/15.
 */

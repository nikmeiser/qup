var React = require('react/addons');
window.React = React;
var TransitionGroup = require('react/lib/ReactCSSTransitionGroup');

var Router = require('react-router')
    , RouteHandler = Router.RouteHandler
    , DefaultRoute = Router.DefaultRoute
    , Route = Router.Route;

var ReactBootstrap = require('react-bootstrap')
    , Nav = ReactBootstrap.Nav
    , Navbar = ReactBootstrap.Navbar
    , Grid = ReactBootstrap.Grid
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col
    , Glyphicon = ReactBootstrap.Glyphicon;

var ReactRouterBootstrap = require('react-router-bootstrap')
    , NavItemLink = ReactRouterBootstrap.NavItemLink
    , ButtonLink = ReactRouterBootstrap.ButtonLink;


var Header = require("./components/navigation/header");

var ApplicationForm = require('./components/application/application-edit');
var ApplicationList = require('./components/application/application-list');
var ProspectsList = require('./components/prospects/prospect-list');
var Dashboard = require('./components/dashboard/dashboard');

//React.render(<ApplicationForm/>, document.body);


var App = React.createClass({
    mixins: [ Router.State ],
    render: function() {

        var name = this.getRoutes().reverse()[0].name;

        return (
            <div class="container-fluid">
                <div class="page-header">
                    <h3><Glyphicon glyph="off"/>&nbsp;qDrive</h3>
                </div>
                <TransitionGroup component="div" transitionName="example">
                    <RouteHandler />
                </TransitionGroup>
                <p className="text-center text-muted">© 2015 qDrive Solutions. All Rights Reserved.</p>
            </div>

        );
    }
});


var routes = (
    <Route handler={App} path="/">
        <DefaultRoute handler={ProspectsList}/>
        <Route name="home" path="home" handler={ProspectsList}/>
        <Route name="dashboard" path="dashboard" handler={Dashboard}/>
        <Route name="prospects" path="prospects" handler={ProspectsList}/>
        <Route name="applicationList" path="prospects/application-list" handler={ApplicationList}/>
        <Route name="application" path="prospects/application" handler={ApplicationForm}/>
        <Route name="activeDeals" path="active-deals" handler={ProspectsList}/>
    </Route>
);

Router.run(routes, function (Handler) {
    React.render(<Handler/>, document.body);
});
var React = require('react/addons')
    , formUtils = require('../shared/form-utils');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
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

//var Parse = require('parse').Parse;

var Table = require('reactable').Table
    , Tr = require('reactable').Tr
    , Td = require('reactable').Td;

var ProspectModal = React.createClass({
    getInitialState: function() {
        return {
        };
    },

    save: function(event){
        event.preventDefault();

    },

    render: function() {
        return (
            <Modal {...this.props} bsSize="large">
                <div className="modal-body">
                    <form id="prospectForm" onSubmit={this.save}>
                        <Grid>
                            <Row>
                                <Col sm={4}>
                                    <Input
                                        form="prospectForm"
                                        type="text"
                                        name="name"
                                        label='Name'
                                        placeholder="Name" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <Input
                                        form="prospectForm"
                                        type="email"
                                        name="name"
                                        label='Email'
                                        placeholder="Email" />
                                </Col>
                            </Row>
                        </Grid>
                    </form>
                </div>
                <div className="modal-footer">
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit" form="prospectForm" name="saveButton" value="Save">Save</Button>
                        <Button bsStyle="danger" onClick={this.props.onRequestHide} name="Cancel">Cancel</Button>
                    </ButtonToolbar>
                </div>
            </Modal>);
    }
});

module.exports = ProspectModal;
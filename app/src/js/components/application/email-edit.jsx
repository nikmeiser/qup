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

var EmailModal = React.createClass({
    getInitialState: function() {
        return {
        };
    },

    save: function(event){
        event.preventDefault();

    },

    render: function() {
        var title = "New Prospect";

        return (
            <Modal {...this.props} title={title} bsSize="large">
                <div className="modal-body">
                    <form id="prospectEmail" onSubmit={this.save}>
                        <Grid>
                            <Row>
                                <Col sm={4}>
                                    <Input
                                        type="text"
                                        name="name"
                                        label='Address'
                                        defaultValue='prospect@company.com'
                                        placeholder="Name" />
                                </Col>
                            </Row>
                            <Row>
                                <Col sm={4}>
                                    <Input
                                        cols="300"
                                        rows="20"
                                        type="textarea"
                                        name="name"
                                        label='Message'
                                        defaultValue = {
                                            'Dear Prospect\n\n' +
                                            'Please follow the following link...\n\n' +
                                            'The username is prospect1234\n' +
                                            'The password is asd78%^987\n\n' +
                                            'You do not have to complete the whole application at once, ' +
                                            'a partially completed application can be saved... \n\n' +
                                            'Sincerely, ...'
                                            }
                                    />
                                </Col>
                            </Row>
                        </Grid>
                    </form>
                </div>
                <div className="modal-footer">
                    <ButtonToolbar>
                        <Button bsStyle="primary" type="submit" form="prospectForm" name="saveButton" value="Save">Send</Button>
                        <Button bsStyle="danger" onClick={this.props.onRequestHide} name="Cancel">Cancel</Button>
                    </ButtonToolbar>
                </div>
            </Modal>);
    }
});

module.exports = EmailModal;
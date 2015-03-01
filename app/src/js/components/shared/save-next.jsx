var React = require('react/addons');

var ReactBootstrap = require('react-bootstrap')
    , ButtonToolbar = ReactBootstrap.ButtonToolbar
    , Button = ReactBootstrap.Button;


var CancelSaveButtons = React.createClass({
    render: function () {
        return (

        <div className="modal-footer">
            <ButtonToolbar>
                <Button bsStyle="primary" className="btn-spaced" onClick={this.props.onSave} {...this.props}>Save</Button>
                <Button bsStyle="primary" onClick={this.props.next} {...this.props}>Next</Button>
            </ButtonToolbar>
        </div>

        );
    }
});

module.exports = CancelSaveButtons;
/**
 * Created by levushka on 1/28/15.
 */

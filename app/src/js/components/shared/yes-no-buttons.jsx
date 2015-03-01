var React = require('react/addons');

var ReactBootstrap = require('react-bootstrap')
    , Button = ReactBootstrap.Button;

var YesNoButtons = React.createClass ({
    render: function() {
        return (
            <span>
                &nbsp;&nbsp;
                <Button onClick={this.props.onClickYes}>Yes</Button>
                <Button onClick={this.props.onClickNo}>No</Button>
            </span>
        );
    }
});

module.exports = YesNoButtons;

/**
 * Created by levushka on 1/28/15.
 */

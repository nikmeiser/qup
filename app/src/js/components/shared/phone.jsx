var React = require('react/addons');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input
    , Row = ReactBootstrap.Row
    , Col = ReactBootstrap.Col;

var Phone = React.createClass ({
    render: function() {
        return (
            <Input
                type="tel"
                pattern="\d{3}[\-]\d{3}[\-]\d{4}"
                {...this.props}
            />
        );
    }
});

module.exports = Phone;

/**
 * Created by levushka on 1/28/15.
 */

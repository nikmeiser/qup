var React = require('react/addons');

var ReactBootstrap = require('react-bootstrap')
    , Input = ReactBootstrap.Input;

var Percentage = React.createClass({
    render: function() {
        return (
            <Input type="text" label="%" pattern="^[0-9]{1,2}$" />
        );
    }
});

module.exports=Percentage;

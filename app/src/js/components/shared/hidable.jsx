var React = require('react/addons');
var YesNoButtons = require('./yes-no-buttons');

var Hidable = React.createClass ({

    getInitialState: function() {
        return {showContent: false};
    },

    show: function() {
        this.setState({showContent: true});
    },

    hide: function() {
        this.setState({showContent: false});
    },

    render: function() {
        return (
            <div>
                <h4>{this.props.heading}
                    <YesNoButtons onClickYes={this.show} onClickNo={this.hide}/>
                </h4>


                <div style={{display: this.state.showContent ? 'inline':'none'}}>
                    {this.props.children}
                </div>
            </div>
        );
    }
});

module.exports = Hidable;
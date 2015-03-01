var React = require('react/addons')
    , formUtils = require('../shared/form-utils');

var ReactBootstrap = require('react-bootstrap')
    , Panel = ReactBootstrap.Panel
    , Glyphicon = ReactBootstrap.Glyphicon
    , Button = ReactBootstrap.Button;


var Table = require('reactable').Table;

var TableForm = React.createClass({

    addItem: function(event){
        event.preventDefault();

        var row = formUtils.toNameValCollection(event.target);

        row.deleteButton = (
            <Button bsStyle="danger" value={this.props.data.length} onClick={this.removeItem}>
                <Glyphicon glyph="remove" />
            </Button>);

        this.props.addItem(row);
    },

    removeItem: function(event){
        this.props.removeItem(event.target.value);
    },

    render: function() {
        //TODO: Doesn't work
        return (
            <Panel>
                <h4>{this.props.title}</h4>
                <form id={this.props.formId} onSubmit={this.addItem}>
                    {this.props.formContent}
                    <Button bsStyle="primary" type="submit">+</Button>
                </form>
                    <Table
                        style={this.props.data.length ? {} : {display: 'none'}}
                        className="table table-striped table-condensed"
                        columns={this.props.columns}
                        data={this.props.data}/>
            </Panel>
        )
    }
});

module.exports = TableForm;
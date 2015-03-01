var React = require('react/addons')
    , formUtils = require('../../shared/form-utils');

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
        return (
        <div className="searchResults">
            <Table
                className="table table-striped table-condensed"
                columns = {[
                    { key: 'current_entity_name', label: 'Name' },
                    { key: 'jurisdiction', label: 'Jurisdiction' },
                    { key: 'entity_type', label: 'Entity Type' },
                    { key: 'dos_id', label: 'ID' }
                ]}
                data={this.props.data}/>
        </div>
        )
    }
});

module.exports = TableForm;
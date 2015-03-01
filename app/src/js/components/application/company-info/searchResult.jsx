'use strict';

var actions = require('../../../actions/actions');


var SearchResult = React.createClass({


    render: function () {
        var company = this.props.company;

        return (
            <div className="searchItem">
                {company.dos_process_name}
                <span className="searchItemDetail">
                    {company.jurisdiction}
                </span>
                <span className="searchItemDetail">
                    {company.dos_entity_type}
                </span>
                <span className="searchItemDetail">
                    {company.dos_id}
                </span>
                    {company.initial_dos_filing_date}
            </div>
        );
    }

});

module.exports = SearchResult;
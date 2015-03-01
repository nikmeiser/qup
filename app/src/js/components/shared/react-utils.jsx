React = require('react/addons');

var reactUtils = {

    removeItemAtIndex: function(arr, index){
        return React.addons.update(
            arr,
            {$splice: [[index, 1]]}
        );
    }

};

module.exports = reactUtils;

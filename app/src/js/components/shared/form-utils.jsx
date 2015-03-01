var _ = require('lodash')._;
var formUtils = {};

formUtils.toNameValCollection = function(form){
    var o = {};
    _.forEach(form, function(input){
            if(input.name && input.name.indexOf("Button") == -1) {
                o[input.name] = input.value;
            }
        });
    return o;
}

module.exports = formUtils;/**
 * Created by levushka on 1/18/15.
 */

'use strict';

var Reflux = require('reflux');
var actions = require('../actions/actions');
var $ = require('jquery');
var corpNyEndpoint = 'https://data.ny.gov/resource/n9v6-gdp6.json?$q=';

var applicationStore = Reflux.createStore({

    listenables: actions,

    init: function() {
        this.corpEntities = [];
        this.eqHolders = [];
        this.subs = [];
        this.affiliates = [];
        this.trademarks = [];
        this.principals = [];
    },

    findCorporation: function (corpName) {
        $.ajax({
            url: corpNyEndpoint + corpName,
            async: false,
            dataType: 'json',
            success: function (corpEnitiesData) {
                this.corpEntities = corpEnitiesData;
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(url, status, err.toString());
            }.bind(this)
        });
        this.trigger(this.corpEntities);
    },

    getDefaultData: function() {
        return {
            corpEntities: this.corpEntities,
            eqHolders: this.eqHolders,
            subs: this.subs,
            affiliates: this.affiliates,
            trademarks: this.trademarks,
            principals: this.principals
        };
    }

});

module.exports = applicationStore;
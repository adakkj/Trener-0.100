/**
 * Created by akraszewski on 2016-07-18.
 */
//"use strict";

function TreningEntryRouteConfig(app) {
    this.app = app;
    this.routeTable = [];
    this.init();

};

TreningEntryRouteConfig.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();
};

TreningEntryRouteConfig.prototype.processRoutes = function () {
    var self = this;
    self.routeTable.forEach(function (route) {
        if (route.requestType == 'get') {
            self.app.get(route.requestUrl, route.callbackFunction);
        }
        else if (route.requestType == 'post') {

            var bodyParser = require('body-parser');
            self.app.use(bodyParser.urlencoded({
                extended: true
            }));

            /**bodyParser.json(options)
             * Parses the text as JSON and exposes the resulting object on req.body.
             */

            self.app.post(route.requestUrl,bodyParser.json(), route.callbackFunction);
        }
        else if (route.requestType == 'delete') {

        }
    })
};

TreningEntryRouteConfig.prototype.addRoutes = function () {
    var self = this;

    self.routeTable.push({
            requestType: 'get',
            requestUrl: '/TreningEntryMainView',
            callbackFunction: function (request, response) {

                console.log('request');
                console.log(request.url);

                var treningEntryDA = require('./../../../Server/DALayer/TreningEntryDA.js');
                treningEntryDA.TreningEntryDA.getTreningEntries(function (TreningEntries) {
                    console.log(TreningEntries);
                    response.json(TreningEntries);
                });
            }
        }
    );

    self.routeTable.push({
            requestType: 'get',
            requestUrl: '/GetTreningEntryByID/:TreningEntryID',
            callbackFunction: function (request, response) {

                console.log('request');
                console.log(request.url);

                var treningEntryDA = require('./../../../Server/DALayer/TreningEntryDA.js');
                treningEntryDA.TreningEntryDA.getTreningEntryByID(request.params.TreningEntryID, function (TreningEntries) {
                    console.log(TreningEntries);
                    response.json(TreningEntries);
                });
            }
        }
    )
};


module.exports = TreningEntryRouteConfig;
/**
 * Created by akraszewski on 2016-07-18.
 */
//"use strict";

function DayEntryRouteConfig(app) {
    this.app = app;
    this.routeTable = [];
    this.init();

};

DayEntryRouteConfig.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();
};

DayEntryRouteConfig.prototype.processRoutes = function () {
    var self = this;
    self.routeTable.forEach(function (route) {
        if (route.requestType == 'get') {
            // rób standardowy express.strict
            //    self.app.get(route.requestUrl, route.callbackFunction());

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

DayEntryRouteConfig.prototype.addRoutes = function () {
    var self = this;

    self.routeTable.push({
            requestType: 'post',
            requestUrl: '/abc',
            callbackFunction: function (request, response) {

                console.log('request');
                console.log(request.body);

                var dayEntryDA = require('./../../../Server/DALayer/DayEntryDA.js');
                dayEntryDA.DayEntryDA.createDayEntry(request.body, function (status) {
                    response.json(status);
                    console.log(status);
                });
            }
        }
    )
};

module.exports = DayEntryRouteConfig;
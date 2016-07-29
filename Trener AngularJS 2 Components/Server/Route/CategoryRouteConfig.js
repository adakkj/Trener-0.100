/**
 * Created by akraszewski on 2016-07-18.
 */
//"use strict";

function CategoryRouteConfig(app) {
    this.app = app;
    this.routeTable = [];
    this.init();

};

CategoryRouteConfig.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();
};

CategoryRouteConfig.prototype.processRoutes = function () {
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

CategoryRouteConfig.prototype.addRoutes = function () {
    var self = this;


    self.routeTable.push({
            requestType: 'get',
            requestUrl: '/Category',
            callbackFunction: function (request, response) {

                console.log('request');
                console.log(request.url);

                var categoryDA = require('../DataBase/DALayer/CategoryDA.js');
                categoryDA.CategoryDA.getCategories(function (Categories) {
                    console.log(Categories);
                    response.json(Categories);
                });
            }
        }
    )
};

module.exports = CategoryRouteConfig;
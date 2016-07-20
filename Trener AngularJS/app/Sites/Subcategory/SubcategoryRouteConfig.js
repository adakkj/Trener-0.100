/**
 * Created by akraszewski on 2016-07-18.
 */
//"use strict";

function SubcategoryRouteConfig(app) {
    this.app = app;
    this.routeTable = [];
    this.init();

};

SubcategoryRouteConfig.prototype.init = function () {
    var self = this;
    this.addRoutes();
    this.processRoutes();
};

SubcategoryRouteConfig.prototype.processRoutes = function () {
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

SubcategoryRouteConfig.prototype.addRoutes = function () {
    var self = this;



    self.routeTable.push({
            requestType: 'get',
            requestUrl: '/Subcategory',
            callbackFunction: function (request, response) {

                console.log('request');
                console.log(request.url);

                var subcategoryDA = require('./../../../Server/DALayer/SubcategoryDA.js');
                subcategoryDA.SubcategoryDA.getSubcategories(function (Subcategories) {
                    console.log(Subcategories);
                    response.json( Subcategories);
                });
            }
        }
    )
};

module.exports = SubcategoryRouteConfig;
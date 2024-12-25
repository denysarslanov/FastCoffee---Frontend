"use strict";
exports.__esModule = true;
exports.handleGetCoffeeByUrl = exports.handleGetRandomCoffee = exports.handleGetCoffeeByGroupName = exports.handleGetAllCoffee = exports.handleGetCustomization = void 0;
var axios_1 = require("axios");
var config_1 = require("./config");
var apiUrl = config_1["default"].apiUrl;
var instance = axios_1["default"].create({
    baseURL: config_1["default"].apiUrl.baseApiUrl
});
// instance.get(`${config.apiUrl.getCustomization}/${url}`)
exports.handleGetCustomization = function (url) { return new Promise(function (resolve, reject) {
    try {
        var response = instance.get("/" + apiUrl.getCustomization + url);
        resolve(response);
    }
    catch (e) {
        console.log({ e: e }, 'In api handler -> handleGetCustomization');
        reject(e);
    }
}); };
exports.handleGetAllCoffee = function (_a) {
    var isGroups = _a.isGroups;
    return new Promise(function (resolve, reject) {
        var data = undefined;
        if (isGroups)
            data = instance.get("" + apiUrl.groups);
        else
            data = instance.get(apiUrl.baseApiUrl);
        resolve(data);
    });
};
exports.handleGetCoffeeByGroupName = function (_a) {
    var groupName = _a.groupName;
    return new Promise(function (resolve, reject) {
        try {
            var result = instance.get(apiUrl.baseApiUrl + "/" + apiUrl.groups + "/" + groupName);
            resolve(result);
        }
        catch (e) {
            console.log('In handleGetCoffeeByGroupName', { e: e });
            reject(e);
        }
    });
};
exports.handleGetRandomCoffee = function () { return new Promise(function (resolve, reject) {
    try {
        var result = instance.get("" + apiUrl.randomCoffee);
        resolve(result);
    }
    catch (e) {
        console.log({ e: e }, 'In api handlers -> handleGetRandomCoffee');
    }
}); };
exports.handleGetCoffeeByUrl = function (url) { return new Promise(function (resolve, reject) {
    try {
        var response = instance.get("" + apiUrl.coffeeByUrl + url);
        resolve(response);
    }
    catch (e) {
        console.log({ e: e }, 'In api handler -> handleGetCoffeeByUrl');
    }
}); };

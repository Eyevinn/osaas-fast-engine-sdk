"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ObjectDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var ObjectDefaultApi = (function () {
    function ObjectDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    ObjectDefaultApi.prototype.channelGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.channelGetWithHttpInfo(options).toPromise();
    };
    ObjectDefaultApi.prototype.channelGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.channelGet(options).toPromise();
    };
    ObjectDefaultApi.prototype.channelIdDeleteWithHttpInfo = function (param, options) {
        return this.api.channelIdDeleteWithHttpInfo(param.id, options).toPromise();
    };
    ObjectDefaultApi.prototype.channelIdDelete = function (param, options) {
        return this.api.channelIdDelete(param.id, options).toPromise();
    };
    ObjectDefaultApi.prototype.channelIdGetWithHttpInfo = function (param, options) {
        return this.api.channelIdGetWithHttpInfo(param.id, options).toPromise();
    };
    ObjectDefaultApi.prototype.channelIdGet = function (param, options) {
        return this.api.channelIdGet(param.id, options).toPromise();
    };
    ObjectDefaultApi.prototype.channelPostWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.channelPostWithHttpInfo(param.body, options).toPromise();
    };
    ObjectDefaultApi.prototype.channelPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.channelPost(param.body, options).toPromise();
    };
    ObjectDefaultApi.prototype.rootGetWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.rootGetWithHttpInfo(options).toPromise();
    };
    ObjectDefaultApi.prototype.rootGet = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.rootGet(options).toPromise();
    };
    ObjectDefaultApi.prototype.tokenPostWithHttpInfo = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.tokenPostWithHttpInfo(param.body, options).toPromise();
    };
    ObjectDefaultApi.prototype.tokenPost = function (param, options) {
        if (param === void 0) { param = {}; }
        return this.api.tokenPost(param.body, options).toPromise();
    };
    return ObjectDefaultApi;
}());
exports.ObjectDefaultApi = ObjectDefaultApi;
//# sourceMappingURL=ObjectParamAPI.js.map
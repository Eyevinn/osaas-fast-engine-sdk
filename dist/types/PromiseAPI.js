"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PromiseDefaultApi = void 0;
var ObservableAPI_1 = require("./ObservableAPI");
var PromiseDefaultApi = (function () {
    function PromiseDefaultApi(configuration, requestFactory, responseProcessor) {
        this.api = new ObservableAPI_1.ObservableDefaultApi(configuration, requestFactory, responseProcessor);
    }
    PromiseDefaultApi.prototype.channelGetWithHttpInfo = function (_options) {
        var result = this.api.channelGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.channelGet = function (_options) {
        var result = this.api.channelGet(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.channelIdDeleteWithHttpInfo = function (id, _options) {
        var result = this.api.channelIdDeleteWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.channelIdDelete = function (id, _options) {
        var result = this.api.channelIdDelete(id, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.channelIdGetWithHttpInfo = function (id, _options) {
        var result = this.api.channelIdGetWithHttpInfo(id, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.channelIdGet = function (id, _options) {
        var result = this.api.channelIdGet(id, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.channelPostWithHttpInfo = function (body, _options) {
        var result = this.api.channelPostWithHttpInfo(body, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.channelPost = function (body, _options) {
        var result = this.api.channelPost(body, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.rootGetWithHttpInfo = function (_options) {
        var result = this.api.rootGetWithHttpInfo(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.rootGet = function (_options) {
        var result = this.api.rootGet(_options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.tokenPostWithHttpInfo = function (body, _options) {
        var result = this.api.tokenPostWithHttpInfo(body, _options);
        return result.toPromise();
    };
    PromiseDefaultApi.prototype.tokenPost = function (body, _options) {
        var result = this.api.tokenPost(body, _options);
        return result.toPromise();
    };
    return PromiseDefaultApi;
}());
exports.PromiseDefaultApi = PromiseDefaultApi;
//# sourceMappingURL=PromiseAPI.js.map
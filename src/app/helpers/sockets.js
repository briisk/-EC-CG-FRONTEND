"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var Rx_1 = require('rxjs/Rx');
function createSocket(url) {
    var ws = new WebSocket(url);
    var observable = Rx_1.Observable.create(function (obs) {
        ws.onopen = function () {
            console.log("WEBSOCKET: Connected to " + url);
        };
        ws.onmessage = obs.next.bind(obs);
        ws.onerror = obs.error.bind(obs);
        ws.onclose = obs.complete.bind(obs);
        return ws.close.bind(ws);
    });
    var observer = {
        next: function (data) {
            if (ws.readyState === WebSocket.OPEN) {
                ws.send(JSON.stringify(data));
            }
        },
    };
    return Rx_1.Subject.create(observer, observable);
}
exports.createSocket = createSocket;
// import { Socket } from 'phoenix';
var Socket = require('phoenix').Socket;
var PhoenixChannel = (function () {
    function PhoenixChannel(socket, topic, options) {
        if (options === void 0) { options = {}; }
        this.socket = socket;
        this.topic = topic;
        this.channel = this.socket.channel(topic, options);
    }
    PhoenixChannel.prototype.join = function (options) {
        if (options === void 0) { options = {}; }
        var joined = this.channel.join(options);
        return new Rx_1.Observable(function (observer) {
            joined
                .receive("ok", function (resp) {
                console.log("connected", resp);
                observer.next(resp);
            })
                .receive("error", function (resp) { observer.error(resp); });
        });
    };
    PhoenixChannel.prototype.send = function (event, payload) {
        this.channel.push(event, payload);
    };
    PhoenixChannel.prototype.observeMessage = function (message) {
        var _this = this;
        return new Rx_1.Observable(function (observer) {
            _this.channel.on(message, function (resp) {
                console.log(message, resp);
                observer.next(resp);
            });
        });
    };
    PhoenixChannel = __decorate([
        core_1.Injectable()
    ], PhoenixChannel);
    return PhoenixChannel;
}());
exports.PhoenixChannel = PhoenixChannel;
var PhoenixChannels = (function () {
    function PhoenixChannels(socketUrl) {
        this.socket = new Socket(socketUrl);
        this.socket.connect();
    }
    PhoenixChannels.prototype.channel = function (topic) {
        return new PhoenixChannel(this.socket, topic);
    };
    PhoenixChannels = __decorate([
        core_1.Injectable()
    ], PhoenixChannels);
    return PhoenixChannels;
}());
exports.PhoenixChannels = PhoenixChannels;

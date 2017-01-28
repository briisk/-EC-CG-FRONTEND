"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var effects_1 = require('@ngrx/effects');
var auth_actions_1 = require('./auth.actions');
var Observable_1 = require('rxjs/Observable');
var AuthEffects = (function () {
    function AuthEffects(http, actions$, phoenixChannels) {
        var _this = this;
        this.http = http;
        this.actions$ = actions$;
        this.loginUser$ = this.actions$
            .ofType(auth_actions_1.LOGIN_USER)
            .map(function (action) { return JSON.stringify(action.payload); })
            .switchMap(function (payload) { return _this.gameChannel.join()
            .map(function (res) { return auth_actions_1.setCurrentUser(res); })
            .catch(function () { return Observable_1.Observable.of(auth_actions_1.connectionFail()); }); });
        this.gameChannel = phoenixChannels.channel('game:lobby');
        this.gameChannel.join();
        var phoenixObservable = this.gameChannel.observeMessage('new_msg');
    }
    __decorate([
        effects_1.Effect()
    ], AuthEffects.prototype, "loginUser$", void 0);
    AuthEffects = __decorate([
        core_1.Injectable()
    ], AuthEffects);
    return AuthEffects;
}());
exports.AuthEffects = AuthEffects;

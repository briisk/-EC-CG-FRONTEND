"use strict";
exports.LOGIN_USER = 'LOGIN_USER';
exports.SET_CURRENT_USER = 'SET_CURRENT_USER';
exports.CONNECTION_FAIL = 'CONNECTION_FAIL';
function newAction(type) {
    return function (payload) {
        return ({ payload: payload, type: type });
    };
}
exports.newAction = newAction;
exports.loginUser = newAction('LOGIN_USER');
exports.setCurrentUser = newAction('SET_CURRENT_USER');
exports.connectionFail = newAction('CONNECTION_FAIL');

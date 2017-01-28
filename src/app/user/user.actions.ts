export const FETCH_ACTIVE_USERS = 'FETCH_ACTIVE_USERS';
export const FETCH_ACTIVE_USERS_PENDING = 'FETCH_ACTIVE_USERS_PENDING';
export const FETCH_ACTIVE_USERS_SUCCESS = 'FETCH_ACTIVE_USERS_SUCCESS';
export const FETCH_ACTIVE_USERS_FAILED = 'FETCH_ACTIVE_USERS_FAILED';

export function newAction(type) {
  return (payload?) => ({ payload, type });
}

export const fetchActiveUsers = newAction('FETCH_ACTIVE_USERS');
export const fetchActiveUsersPending = newAction('FETCH_ACTIVE_USERS_PENDING');
export const fetchActiveUsersSuccess = newAction('FETCH_ACTIVE_USERS_SUCCESS');
export const fetchActiveUsersFailed = newAction('FETCH_ACTIVE_USERS_FAILED');
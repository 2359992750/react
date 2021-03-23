import store from "store";

const USER_KEY = "user_key";

//保存用户信息
export function saveUser(value) {
  store.set(USER_KEY, value);
}

//获取用户信息
export function getUser() {
  return store.get(USER_KEY);
}

//删除用户信息
export function removeUser() {
  store.remove(USER_KEY);
}

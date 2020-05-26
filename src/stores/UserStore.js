import { extendObservable } from 'mobx';

class UserStore {
  constructor() {
    extendObservable (this, {
      userId: "",
      username: "",
      avatarUrl: "",
      loading: true,
      isLoggedIn: false
    })
  }
}

export default new UserStore();
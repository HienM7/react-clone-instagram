import { extendObservable } from 'mobx';

class PostStore {
  constructor() {
    extendObservable (this, {
      posts: []
    })
  }
}

export default new PostStore();
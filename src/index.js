import { version } from '../package.json';

class Plugin {
  constructor() {
    this.version = version;
  }

  init([a, b]) {
    return { a, b };
  }
}

export default Plugin;

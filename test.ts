/// <reference path="bundle.d.ts" />

import Strategy = require('passport-strategy');

class CustomStrategy1 extends Strategy {

  authenticate (this: CustomStrategy1 & Strategy.AugmentedStrategy, req: Strategy.Request, options: any) {
    this.redirect('/test');
  }

}

class CustomStrategy2 extends Strategy.Strategy {

  authenticate (this: CustomStrategy2 & Strategy.AugmentedStrategy, req: Strategy.Request, options: any) {
    this.success({}, {});
  }

}

# Typed Passport Strategy

The type definition for [`passport-strategy`](https://github.com/jaredhanson/passport-strategy).

## Usage

```ts
import Strategy = require('passport-strategy');

class CustomStrategy extends Strategy {

  authenticate (this: CustomStrategy & Strategy.AugmentedStrategy, req: Strategy.Request, options: any) {
    this.redirect('/test');
  }

}
```

## License

MIT

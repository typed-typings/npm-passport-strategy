declare abstract class Strategy {
  /**
   * Implement `autheticate()`, performing the necessary operations required by
   * the authentication scheme or protocol being implemented.
   */
  abstract authenticate (this: Strategy.AugmentedStrategy, req: Strategy.Request, options?: any): void;
}

declare namespace Strategy {
  export interface Request {
    url: string;
    method: string;
    headers: {};
  }

  export class AugmentedStrategy implements Strategy {
    authenticate (req: Strategy.Request, options?: any): void;

    /**
     * Authenticate `user`, with optional `info`.
     *
     * Strategies should call this function to successfully authenticate a
     * user.  `user` should be an object supplied by the application after it
     * has been given an opportunity to verify credentials.  `info` is an
     * optional argument containing additional user information.  This is
     * useful for third-party authentication strategies to pass profile
     * details.
     */
    success (user: any, info: any): void;

    /**
     * Fail authentication, with optional `challenge` and `status`, defaulting
     * to 401.
     *
     * Strategies should call this function to fail an authentication attempt.
     */
    fail (challenge: string, status: number): void;
    fail (status: number): void;

    /**
     * Redirect to `url` with optional `status`, defaulting to 302.
     *
     * Strategies should call this function to redirect the user (via their user
     * agent) to a third-party website for authentication.
     */
    redirect (url: string, status?: number): void;

    /**
     * Pass without making a success or fail decision.
     *
     * Under most circumstances, Strategies should not need to call this
     * function.  It exists primarily to allow previous authentication state
     * to be restored, for example from an HTTP session.
     */
    pass (): void;

    /**
     * Internal error while performing authentication.
     *
     * Strategies should call this function when an internal error occurs
     * during the process of performing authentication; for example, if the
     * user directory is not available.
     */
    error (err: Error): void;
  }
}

export = Strategy;

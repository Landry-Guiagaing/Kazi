
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model TalentProfile
 * 
 */
export type TalentProfile = $Result.DefaultSelection<Prisma.$TalentProfilePayload>
/**
 * Model Skill
 * 
 */
export type Skill = $Result.DefaultSelection<Prisma.$SkillPayload>
/**
 * Model PortfolioItem
 * 
 */
export type PortfolioItem = $Result.DefaultSelection<Prisma.$PortfolioItemPayload>
/**
 * Model CompanyProfile
 * 
 */
export type CompanyProfile = $Result.DefaultSelection<Prisma.$CompanyProfilePayload>
/**
 * Model Collaboration
 * 
 */
export type Collaboration = $Result.DefaultSelection<Prisma.$CollaborationPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.PrismaClientConstructorArgs<ClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.talentProfile`: Exposes CRUD operations for the **TalentProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TalentProfiles
    * const talentProfiles = await prisma.talentProfile.findMany()
    * ```
    */
  get talentProfile(): Prisma.TalentProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.skill`: Exposes CRUD operations for the **Skill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Skills
    * const skills = await prisma.skill.findMany()
    * ```
    */
  get skill(): Prisma.SkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.portfolioItem`: Exposes CRUD operations for the **PortfolioItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PortfolioItems
    * const portfolioItems = await prisma.portfolioItem.findMany()
    * ```
    */
  get portfolioItem(): Prisma.PortfolioItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.companyProfile`: Exposes CRUD operations for the **CompanyProfile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompanyProfiles
    * const companyProfiles = await prisma.companyProfile.findMany()
    * ```
    */
  get companyProfile(): Prisma.CompanyProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.collaboration`: Exposes CRUD operations for the **Collaboration** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Collaborations
    * const collaborations = await prisma.collaboration.findMany()
    * ```
    */
  get collaboration(): Prisma.CollaborationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.10.1
   * Query Engine version: d1b3f377ca835d73fd50954a5e22128b9ebdd6b8
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * Resolved type of the argument passed to the `PrismaClient` constructor.
   *
   * When called without a narrower options type (the common case), this resolves
   * to `PrismaClientOptions` directly, which produces a clear TypeScript error
   * message (`not assignable to parameter of type 'PrismaClientOptions'`) when
   * the argument is missing or incomplete. When the user supplies a narrower
   * options type (e.g. via a literal), it falls back to `Subset` to keep
   * filtering out unknown properties.
   */
  export type PrismaClientConstructorArgs<Options extends PrismaClientOptions> =
    [PrismaClientOptions] extends [Options] ? PrismaClientOptions : Subset<Options, PrismaClientOptions>;

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      ((Without<T, U> & U) | (Without<U, T> & T)) & object
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    TalentProfile: 'TalentProfile',
    Skill: 'Skill',
    PortfolioItem: 'PortfolioItem',
    CompanyProfile: 'CompanyProfile',
    Collaboration: 'Collaboration',
    Account: 'Account',
    Session: 'Session',
    VerificationToken: 'VerificationToken'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "talentProfile" | "skill" | "portfolioItem" | "companyProfile" | "collaboration" | "account" | "session" | "verificationToken"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      TalentProfile: {
        payload: Prisma.$TalentProfilePayload<ExtArgs>
        fields: Prisma.TalentProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TalentProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TalentProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>
          }
          findFirst: {
            args: Prisma.TalentProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TalentProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>
          }
          findMany: {
            args: Prisma.TalentProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>[]
          }
          create: {
            args: Prisma.TalentProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>
          }
          createMany: {
            args: Prisma.TalentProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TalentProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>[]
          }
          delete: {
            args: Prisma.TalentProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>
          }
          update: {
            args: Prisma.TalentProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>
          }
          deleteMany: {
            args: Prisma.TalentProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TalentProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TalentProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>[]
          }
          upsert: {
            args: Prisma.TalentProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TalentProfilePayload>
          }
          aggregate: {
            args: Prisma.TalentProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTalentProfile>
          }
          groupBy: {
            args: Prisma.TalentProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<TalentProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.TalentProfileCountArgs<ExtArgs>
            result: $Utils.Optional<TalentProfileCountAggregateOutputType> | number
          }
        }
      }
      Skill: {
        payload: Prisma.$SkillPayload<ExtArgs>
        fields: Prisma.SkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findFirst: {
            args: Prisma.SkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          findMany: {
            args: Prisma.SkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          create: {
            args: Prisma.SkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          createMany: {
            args: Prisma.SkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          delete: {
            args: Prisma.SkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          update: {
            args: Prisma.SkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          deleteMany: {
            args: Prisma.SkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>[]
          }
          upsert: {
            args: Prisma.SkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SkillPayload>
          }
          aggregate: {
            args: Prisma.SkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSkill>
          }
          groupBy: {
            args: Prisma.SkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<SkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.SkillCountArgs<ExtArgs>
            result: $Utils.Optional<SkillCountAggregateOutputType> | number
          }
        }
      }
      PortfolioItem: {
        payload: Prisma.$PortfolioItemPayload<ExtArgs>
        fields: Prisma.PortfolioItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.PortfolioItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.PortfolioItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          findFirst: {
            args: Prisma.PortfolioItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.PortfolioItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          findMany: {
            args: Prisma.PortfolioItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          create: {
            args: Prisma.PortfolioItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          createMany: {
            args: Prisma.PortfolioItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.PortfolioItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          delete: {
            args: Prisma.PortfolioItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          update: {
            args: Prisma.PortfolioItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          deleteMany: {
            args: Prisma.PortfolioItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.PortfolioItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.PortfolioItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>[]
          }
          upsert: {
            args: Prisma.PortfolioItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$PortfolioItemPayload>
          }
          aggregate: {
            args: Prisma.PortfolioItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregatePortfolioItem>
          }
          groupBy: {
            args: Prisma.PortfolioItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<PortfolioItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.PortfolioItemCountArgs<ExtArgs>
            result: $Utils.Optional<PortfolioItemCountAggregateOutputType> | number
          }
        }
      }
      CompanyProfile: {
        payload: Prisma.$CompanyProfilePayload<ExtArgs>
        fields: Prisma.CompanyProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompanyProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompanyProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          findFirst: {
            args: Prisma.CompanyProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompanyProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          findMany: {
            args: Prisma.CompanyProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          create: {
            args: Prisma.CompanyProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          createMany: {
            args: Prisma.CompanyProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompanyProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          delete: {
            args: Prisma.CompanyProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          update: {
            args: Prisma.CompanyProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          deleteMany: {
            args: Prisma.CompanyProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompanyProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompanyProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>[]
          }
          upsert: {
            args: Prisma.CompanyProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompanyProfilePayload>
          }
          aggregate: {
            args: Prisma.CompanyProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompanyProfile>
          }
          groupBy: {
            args: Prisma.CompanyProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompanyProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompanyProfileCountArgs<ExtArgs>
            result: $Utils.Optional<CompanyProfileCountAggregateOutputType> | number
          }
        }
      }
      Collaboration: {
        payload: Prisma.$CollaborationPayload<ExtArgs>
        fields: Prisma.CollaborationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CollaborationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CollaborationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          findFirst: {
            args: Prisma.CollaborationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CollaborationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          findMany: {
            args: Prisma.CollaborationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>[]
          }
          create: {
            args: Prisma.CollaborationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          createMany: {
            args: Prisma.CollaborationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CollaborationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>[]
          }
          delete: {
            args: Prisma.CollaborationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          update: {
            args: Prisma.CollaborationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          deleteMany: {
            args: Prisma.CollaborationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CollaborationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CollaborationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>[]
          }
          upsert: {
            args: Prisma.CollaborationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CollaborationPayload>
          }
          aggregate: {
            args: Prisma.CollaborationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCollaboration>
          }
          groupBy: {
            args: Prisma.CollaborationGroupByArgs<ExtArgs>
            result: $Utils.Optional<CollaborationGroupByOutputType>[]
          }
          count: {
            args: Prisma.CollaborationCountArgs<ExtArgs>
            result: $Utils.Optional<CollaborationCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AccountCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AccountUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VerificationTokenCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VerificationTokenUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * A driver adapter that PrismaClient uses to connect to your database, such as the ones provided by `@prisma/adapter-pg`, `@prisma/adapter-libsql`, `@prisma/adapter-planetscale`, etc.
     * 
     * A driver adapter is **required** unless you connect to your database through Prisma Accelerate (in which case use `accelerateUrl` instead).
     * 
     * Learn more: https://pris.ly/d/driver-adapters
     * 
     * @example
     * ```ts
     * import { PrismaPg } from '@prisma/adapter-pg'
     * import { PrismaClient } from './generated/prisma/client'
     * 
     * const adapter = new PrismaPg({ connectionString: process.env.DATABASE_URL })
     * const prisma = new PrismaClient({ adapter })
     * ```
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * The Prisma Accelerate connection URL. Use this option to connect to your database through Prisma Accelerate instead of using a driver adapter to connect directly.
     * 
     * Learn more: https://pris.ly/d/accelerate
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    talentProfile?: TalentProfileOmit
    skill?: SkillOmit
    portfolioItem?: PortfolioItemOmit
    companyProfile?: CompanyProfileOmit
    collaboration?: CollaborationOmit
    account?: AccountOmit
    session?: SessionOmit
    verificationToken?: VerificationTokenOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * Count Type TalentProfileCountOutputType
   */

  export type TalentProfileCountOutputType = {
    skills: number
    portfolio: number
    collaborations: number
  }

  export type TalentProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | TalentProfileCountOutputTypeCountSkillsArgs
    portfolio?: boolean | TalentProfileCountOutputTypeCountPortfolioArgs
    collaborations?: boolean | TalentProfileCountOutputTypeCountCollaborationsArgs
  }

  // Custom InputTypes
  /**
   * TalentProfileCountOutputType without action
   */
  export type TalentProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfileCountOutputType
     */
    select?: TalentProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * TalentProfileCountOutputType without action
   */
  export type TalentProfileCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
  }

  /**
   * TalentProfileCountOutputType without action
   */
  export type TalentProfileCountOutputTypeCountPortfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioItemWhereInput
  }

  /**
   * TalentProfileCountOutputType without action
   */
  export type TalentProfileCountOutputTypeCountCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationWhereInput
  }


  /**
   * Count Type CompanyProfileCountOutputType
   */

  export type CompanyProfileCountOutputType = {
    collaborations: number
  }

  export type CompanyProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    collaborations?: boolean | CompanyProfileCountOutputTypeCountCollaborationsArgs
  }

  // Custom InputTypes
  /**
   * CompanyProfileCountOutputType without action
   */
  export type CompanyProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfileCountOutputType
     */
    select?: CompanyProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompanyProfileCountOutputType without action
   */
  export type CompanyProfileCountOutputTypeCountCollaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    password: number
    role: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    password?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string
    emailVerified: Date | null
    image: string | null
    password: string | null
    role: string
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    talentProfile?: boolean | User$talentProfileArgs<ExtArgs>
    companyProfile?: boolean | User$companyProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    password?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "emailVerified" | "image" | "password" | "role" | "createdAt" | "updatedAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    talentProfile?: boolean | User$talentProfileArgs<ExtArgs>
    companyProfile?: boolean | User$companyProfileArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      talentProfile: Prisma.$TalentProfilePayload<ExtArgs> | null
      companyProfile: Prisma.$CompanyProfilePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string | null
      email: string
      emailVerified: Date | null
      image: string | null
      password: string | null
      role: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    talentProfile<T extends User$talentProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$talentProfileArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    companyProfile<T extends User$companyProfileArgs<ExtArgs> = {}>(args?: Subset<T, User$companyProfileArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * User.talentProfile
   */
  export type User$talentProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    where?: TalentProfileWhereInput
  }

  /**
   * User.companyProfile
   */
  export type User$companyProfileArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    where?: CompanyProfileWhereInput
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model TalentProfile
   */

  export type AggregateTalentProfile = {
    _count: TalentProfileCountAggregateOutputType | null
    _min: TalentProfileMinAggregateOutputType | null
    _max: TalentProfileMaxAggregateOutputType | null
  }

  export type TalentProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    title: string | null
    location: string | null
    website: string | null
    linkedin: string | null
    github: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TalentProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    bio: string | null
    title: string | null
    location: string | null
    website: string | null
    linkedin: string | null
    github: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type TalentProfileCountAggregateOutputType = {
    id: number
    userId: number
    bio: number
    title: number
    location: number
    website: number
    linkedin: number
    github: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type TalentProfileMinAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    title?: true
    location?: true
    website?: true
    linkedin?: true
    github?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TalentProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    title?: true
    location?: true
    website?: true
    linkedin?: true
    github?: true
    createdAt?: true
    updatedAt?: true
  }

  export type TalentProfileCountAggregateInputType = {
    id?: true
    userId?: true
    bio?: true
    title?: true
    location?: true
    website?: true
    linkedin?: true
    github?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type TalentProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TalentProfile to aggregate.
     */
    where?: TalentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TalentProfiles to fetch.
     */
    orderBy?: TalentProfileOrderByWithRelationInput | TalentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TalentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TalentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TalentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TalentProfiles
    **/
    _count?: true | TalentProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TalentProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TalentProfileMaxAggregateInputType
  }

  export type GetTalentProfileAggregateType<T extends TalentProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateTalentProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTalentProfile[P]>
      : GetScalarType<T[P], AggregateTalentProfile[P]>
  }




  export type TalentProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TalentProfileWhereInput
    orderBy?: TalentProfileOrderByWithAggregationInput | TalentProfileOrderByWithAggregationInput[]
    by: TalentProfileScalarFieldEnum[] | TalentProfileScalarFieldEnum
    having?: TalentProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TalentProfileCountAggregateInputType | true
    _min?: TalentProfileMinAggregateInputType
    _max?: TalentProfileMaxAggregateInputType
  }

  export type TalentProfileGroupByOutputType = {
    id: string
    userId: string
    bio: string | null
    title: string | null
    location: string | null
    website: string | null
    linkedin: string | null
    github: string | null
    createdAt: Date
    updatedAt: Date
    _count: TalentProfileCountAggregateOutputType | null
    _min: TalentProfileMinAggregateOutputType | null
    _max: TalentProfileMaxAggregateOutputType | null
  }

  type GetTalentProfileGroupByPayload<T extends TalentProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TalentProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TalentProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TalentProfileGroupByOutputType[P]>
            : GetScalarType<T[P], TalentProfileGroupByOutputType[P]>
        }
      >
    >


  export type TalentProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    title?: boolean
    location?: boolean
    website?: boolean
    linkedin?: boolean
    github?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    skills?: boolean | TalentProfile$skillsArgs<ExtArgs>
    portfolio?: boolean | TalentProfile$portfolioArgs<ExtArgs>
    collaborations?: boolean | TalentProfile$collaborationsArgs<ExtArgs>
    _count?: boolean | TalentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["talentProfile"]>

  export type TalentProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    title?: boolean
    location?: boolean
    website?: boolean
    linkedin?: boolean
    github?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["talentProfile"]>

  export type TalentProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    bio?: boolean
    title?: boolean
    location?: boolean
    website?: boolean
    linkedin?: boolean
    github?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["talentProfile"]>

  export type TalentProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    bio?: boolean
    title?: boolean
    location?: boolean
    website?: boolean
    linkedin?: boolean
    github?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type TalentProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "bio" | "title" | "location" | "website" | "linkedin" | "github" | "createdAt" | "updatedAt", ExtArgs["result"]["talentProfile"]>
  export type TalentProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    skills?: boolean | TalentProfile$skillsArgs<ExtArgs>
    portfolio?: boolean | TalentProfile$portfolioArgs<ExtArgs>
    collaborations?: boolean | TalentProfile$collaborationsArgs<ExtArgs>
    _count?: boolean | TalentProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type TalentProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type TalentProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $TalentProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "TalentProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      skills: Prisma.$SkillPayload<ExtArgs>[]
      portfolio: Prisma.$PortfolioItemPayload<ExtArgs>[]
      collaborations: Prisma.$CollaborationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      bio: string | null
      title: string | null
      location: string | null
      website: string | null
      linkedin: string | null
      github: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["talentProfile"]>
    composites: {}
  }

  type TalentProfileGetPayload<S extends boolean | null | undefined | TalentProfileDefaultArgs> = $Result.GetResult<Prisma.$TalentProfilePayload, S>

  type TalentProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TalentProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TalentProfileCountAggregateInputType | true
    }

  export interface TalentProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['TalentProfile'], meta: { name: 'TalentProfile' } }
    /**
     * Find zero or one TalentProfile that matches the filter.
     * @param {TalentProfileFindUniqueArgs} args - Arguments to find a TalentProfile
     * @example
     * // Get one TalentProfile
     * const talentProfile = await prisma.talentProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TalentProfileFindUniqueArgs>(args: SelectSubset<T, TalentProfileFindUniqueArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one TalentProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TalentProfileFindUniqueOrThrowArgs} args - Arguments to find a TalentProfile
     * @example
     * // Get one TalentProfile
     * const talentProfile = await prisma.talentProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TalentProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, TalentProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TalentProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileFindFirstArgs} args - Arguments to find a TalentProfile
     * @example
     * // Get one TalentProfile
     * const talentProfile = await prisma.talentProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TalentProfileFindFirstArgs>(args?: SelectSubset<T, TalentProfileFindFirstArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first TalentProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileFindFirstOrThrowArgs} args - Arguments to find a TalentProfile
     * @example
     * // Get one TalentProfile
     * const talentProfile = await prisma.talentProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TalentProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, TalentProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more TalentProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TalentProfiles
     * const talentProfiles = await prisma.talentProfile.findMany()
     * 
     * // Get first 10 TalentProfiles
     * const talentProfiles = await prisma.talentProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const talentProfileWithIdOnly = await prisma.talentProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TalentProfileFindManyArgs>(args?: SelectSubset<T, TalentProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a TalentProfile.
     * @param {TalentProfileCreateArgs} args - Arguments to create a TalentProfile.
     * @example
     * // Create one TalentProfile
     * const TalentProfile = await prisma.talentProfile.create({
     *   data: {
     *     // ... data to create a TalentProfile
     *   }
     * })
     * 
     */
    create<T extends TalentProfileCreateArgs>(args: SelectSubset<T, TalentProfileCreateArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many TalentProfiles.
     * @param {TalentProfileCreateManyArgs} args - Arguments to create many TalentProfiles.
     * @example
     * // Create many TalentProfiles
     * const talentProfile = await prisma.talentProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TalentProfileCreateManyArgs>(args?: SelectSubset<T, TalentProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many TalentProfiles and returns the data saved in the database.
     * @param {TalentProfileCreateManyAndReturnArgs} args - Arguments to create many TalentProfiles.
     * @example
     * // Create many TalentProfiles
     * const talentProfile = await prisma.talentProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many TalentProfiles and only return the `id`
     * const talentProfileWithIdOnly = await prisma.talentProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TalentProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, TalentProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a TalentProfile.
     * @param {TalentProfileDeleteArgs} args - Arguments to delete one TalentProfile.
     * @example
     * // Delete one TalentProfile
     * const TalentProfile = await prisma.talentProfile.delete({
     *   where: {
     *     // ... filter to delete one TalentProfile
     *   }
     * })
     * 
     */
    delete<T extends TalentProfileDeleteArgs>(args: SelectSubset<T, TalentProfileDeleteArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one TalentProfile.
     * @param {TalentProfileUpdateArgs} args - Arguments to update one TalentProfile.
     * @example
     * // Update one TalentProfile
     * const talentProfile = await prisma.talentProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TalentProfileUpdateArgs>(args: SelectSubset<T, TalentProfileUpdateArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more TalentProfiles.
     * @param {TalentProfileDeleteManyArgs} args - Arguments to filter TalentProfiles to delete.
     * @example
     * // Delete a few TalentProfiles
     * const { count } = await prisma.talentProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TalentProfileDeleteManyArgs>(args?: SelectSubset<T, TalentProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TalentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TalentProfiles
     * const talentProfile = await prisma.talentProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TalentProfileUpdateManyArgs>(args: SelectSubset<T, TalentProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TalentProfiles and returns the data updated in the database.
     * @param {TalentProfileUpdateManyAndReturnArgs} args - Arguments to update many TalentProfiles.
     * @example
     * // Update many TalentProfiles
     * const talentProfile = await prisma.talentProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more TalentProfiles and only return the `id`
     * const talentProfileWithIdOnly = await prisma.talentProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends TalentProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, TalentProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one TalentProfile.
     * @param {TalentProfileUpsertArgs} args - Arguments to update or create a TalentProfile.
     * @example
     * // Update or create a TalentProfile
     * const talentProfile = await prisma.talentProfile.upsert({
     *   create: {
     *     // ... data to create a TalentProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TalentProfile we want to update
     *   }
     * })
     */
    upsert<T extends TalentProfileUpsertArgs>(args: SelectSubset<T, TalentProfileUpsertArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of TalentProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileCountArgs} args - Arguments to filter TalentProfiles to count.
     * @example
     * // Count the number of TalentProfiles
     * const count = await prisma.talentProfile.count({
     *   where: {
     *     // ... the filter for the TalentProfiles we want to count
     *   }
     * })
    **/
    count<T extends TalentProfileCountArgs>(
      args?: Subset<T, TalentProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TalentProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TalentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TalentProfileAggregateArgs>(args: Subset<T, TalentProfileAggregateArgs>): Prisma.PrismaPromise<GetTalentProfileAggregateType<T>>

    /**
     * Group by TalentProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TalentProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TalentProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TalentProfileGroupByArgs['orderBy'] }
        : { orderBy?: TalentProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TalentProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTalentProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the TalentProfile model
   */
  readonly fields: TalentProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for TalentProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TalentProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skills<T extends TalentProfile$skillsArgs<ExtArgs> = {}>(args?: Subset<T, TalentProfile$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    portfolio<T extends TalentProfile$portfolioArgs<ExtArgs> = {}>(args?: Subset<T, TalentProfile$portfolioArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    collaborations<T extends TalentProfile$collaborationsArgs<ExtArgs> = {}>(args?: Subset<T, TalentProfile$collaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the TalentProfile model
   */
  interface TalentProfileFieldRefs {
    readonly id: FieldRef<"TalentProfile", 'String'>
    readonly userId: FieldRef<"TalentProfile", 'String'>
    readonly bio: FieldRef<"TalentProfile", 'String'>
    readonly title: FieldRef<"TalentProfile", 'String'>
    readonly location: FieldRef<"TalentProfile", 'String'>
    readonly website: FieldRef<"TalentProfile", 'String'>
    readonly linkedin: FieldRef<"TalentProfile", 'String'>
    readonly github: FieldRef<"TalentProfile", 'String'>
    readonly createdAt: FieldRef<"TalentProfile", 'DateTime'>
    readonly updatedAt: FieldRef<"TalentProfile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * TalentProfile findUnique
   */
  export type TalentProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * Filter, which TalentProfile to fetch.
     */
    where: TalentProfileWhereUniqueInput
  }

  /**
   * TalentProfile findUniqueOrThrow
   */
  export type TalentProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * Filter, which TalentProfile to fetch.
     */
    where: TalentProfileWhereUniqueInput
  }

  /**
   * TalentProfile findFirst
   */
  export type TalentProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * Filter, which TalentProfile to fetch.
     */
    where?: TalentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TalentProfiles to fetch.
     */
    orderBy?: TalentProfileOrderByWithRelationInput | TalentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TalentProfiles.
     */
    cursor?: TalentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TalentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TalentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TalentProfiles.
     */
    distinct?: TalentProfileScalarFieldEnum | TalentProfileScalarFieldEnum[]
  }

  /**
   * TalentProfile findFirstOrThrow
   */
  export type TalentProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * Filter, which TalentProfile to fetch.
     */
    where?: TalentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TalentProfiles to fetch.
     */
    orderBy?: TalentProfileOrderByWithRelationInput | TalentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TalentProfiles.
     */
    cursor?: TalentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TalentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TalentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TalentProfiles.
     */
    distinct?: TalentProfileScalarFieldEnum | TalentProfileScalarFieldEnum[]
  }

  /**
   * TalentProfile findMany
   */
  export type TalentProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * Filter, which TalentProfiles to fetch.
     */
    where?: TalentProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TalentProfiles to fetch.
     */
    orderBy?: TalentProfileOrderByWithRelationInput | TalentProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TalentProfiles.
     */
    cursor?: TalentProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TalentProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TalentProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TalentProfiles.
     */
    distinct?: TalentProfileScalarFieldEnum | TalentProfileScalarFieldEnum[]
  }

  /**
   * TalentProfile create
   */
  export type TalentProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a TalentProfile.
     */
    data: XOR<TalentProfileCreateInput, TalentProfileUncheckedCreateInput>
  }

  /**
   * TalentProfile createMany
   */
  export type TalentProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many TalentProfiles.
     */
    data: TalentProfileCreateManyInput | TalentProfileCreateManyInput[]
  }

  /**
   * TalentProfile createManyAndReturn
   */
  export type TalentProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * The data used to create many TalentProfiles.
     */
    data: TalentProfileCreateManyInput | TalentProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * TalentProfile update
   */
  export type TalentProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a TalentProfile.
     */
    data: XOR<TalentProfileUpdateInput, TalentProfileUncheckedUpdateInput>
    /**
     * Choose, which TalentProfile to update.
     */
    where: TalentProfileWhereUniqueInput
  }

  /**
   * TalentProfile updateMany
   */
  export type TalentProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update TalentProfiles.
     */
    data: XOR<TalentProfileUpdateManyMutationInput, TalentProfileUncheckedUpdateManyInput>
    /**
     * Filter which TalentProfiles to update
     */
    where?: TalentProfileWhereInput
    /**
     * Limit how many TalentProfiles to update.
     */
    limit?: number
  }

  /**
   * TalentProfile updateManyAndReturn
   */
  export type TalentProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * The data used to update TalentProfiles.
     */
    data: XOR<TalentProfileUpdateManyMutationInput, TalentProfileUncheckedUpdateManyInput>
    /**
     * Filter which TalentProfiles to update
     */
    where?: TalentProfileWhereInput
    /**
     * Limit how many TalentProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * TalentProfile upsert
   */
  export type TalentProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the TalentProfile to update in case it exists.
     */
    where: TalentProfileWhereUniqueInput
    /**
     * In case the TalentProfile found by the `where` argument doesn't exist, create a new TalentProfile with this data.
     */
    create: XOR<TalentProfileCreateInput, TalentProfileUncheckedCreateInput>
    /**
     * In case the TalentProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TalentProfileUpdateInput, TalentProfileUncheckedUpdateInput>
  }

  /**
   * TalentProfile delete
   */
  export type TalentProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
    /**
     * Filter which TalentProfile to delete.
     */
    where: TalentProfileWhereUniqueInput
  }

  /**
   * TalentProfile deleteMany
   */
  export type TalentProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which TalentProfiles to delete
     */
    where?: TalentProfileWhereInput
    /**
     * Limit how many TalentProfiles to delete.
     */
    limit?: number
  }

  /**
   * TalentProfile.skills
   */
  export type TalentProfile$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    cursor?: SkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * TalentProfile.portfolio
   */
  export type TalentProfile$portfolioArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    where?: PortfolioItemWhereInput
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    cursor?: PortfolioItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * TalentProfile.collaborations
   */
  export type TalentProfile$collaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    where?: CollaborationWhereInput
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    cursor?: CollaborationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[]
  }

  /**
   * TalentProfile without action
   */
  export type TalentProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the TalentProfile
     */
    select?: TalentProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the TalentProfile
     */
    omit?: TalentProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TalentProfileInclude<ExtArgs> | null
  }


  /**
   * Model Skill
   */

  export type AggregateSkill = {
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  export type SkillMinAggregateOutputType = {
    id: string | null
    name: string | null
    profileId: string | null
  }

  export type SkillMaxAggregateOutputType = {
    id: string | null
    name: string | null
    profileId: string | null
  }

  export type SkillCountAggregateOutputType = {
    id: number
    name: number
    profileId: number
    _all: number
  }


  export type SkillMinAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
  }

  export type SkillMaxAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
  }

  export type SkillCountAggregateInputType = {
    id?: true
    name?: true
    profileId?: true
    _all?: true
  }

  export type SkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skill to aggregate.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Skills
    **/
    _count?: true | SkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SkillMaxAggregateInputType
  }

  export type GetSkillAggregateType<T extends SkillAggregateArgs> = {
        [P in keyof T & keyof AggregateSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSkill[P]>
      : GetScalarType<T[P], AggregateSkill[P]>
  }




  export type SkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SkillWhereInput
    orderBy?: SkillOrderByWithAggregationInput | SkillOrderByWithAggregationInput[]
    by: SkillScalarFieldEnum[] | SkillScalarFieldEnum
    having?: SkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SkillCountAggregateInputType | true
    _min?: SkillMinAggregateInputType
    _max?: SkillMaxAggregateInputType
  }

  export type SkillGroupByOutputType = {
    id: string
    name: string
    profileId: string
    _count: SkillCountAggregateOutputType | null
    _min: SkillMinAggregateOutputType | null
    _max: SkillMaxAggregateOutputType | null
  }

  type GetSkillGroupByPayload<T extends SkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SkillGroupByOutputType[P]>
            : GetScalarType<T[P], SkillGroupByOutputType[P]>
        }
      >
    >


  export type SkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    profileId?: boolean
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["skill"]>

  export type SkillSelectScalar = {
    id?: boolean
    name?: boolean
    profileId?: boolean
  }

  export type SkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "profileId", ExtArgs["result"]["skill"]>
  export type SkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }
  export type SkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }
  export type SkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }

  export type $SkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Skill"
    objects: {
      profile: Prisma.$TalentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      profileId: string
    }, ExtArgs["result"]["skill"]>
    composites: {}
  }

  type SkillGetPayload<S extends boolean | null | undefined | SkillDefaultArgs> = $Result.GetResult<Prisma.$SkillPayload, S>

  type SkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SkillCountAggregateInputType | true
    }

  export interface SkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Skill'], meta: { name: 'Skill' } }
    /**
     * Find zero or one Skill that matches the filter.
     * @param {SkillFindUniqueArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SkillFindUniqueArgs>(args: SelectSubset<T, SkillFindUniqueArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Skill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SkillFindUniqueOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SkillFindUniqueOrThrowArgs>(args: SelectSubset<T, SkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SkillFindFirstArgs>(args?: SelectSubset<T, SkillFindFirstArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Skill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindFirstOrThrowArgs} args - Arguments to find a Skill
     * @example
     * // Get one Skill
     * const skill = await prisma.skill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SkillFindFirstOrThrowArgs>(args?: SelectSubset<T, SkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Skills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Skills
     * const skills = await prisma.skill.findMany()
     * 
     * // Get first 10 Skills
     * const skills = await prisma.skill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const skillWithIdOnly = await prisma.skill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SkillFindManyArgs>(args?: SelectSubset<T, SkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Skill.
     * @param {SkillCreateArgs} args - Arguments to create a Skill.
     * @example
     * // Create one Skill
     * const Skill = await prisma.skill.create({
     *   data: {
     *     // ... data to create a Skill
     *   }
     * })
     * 
     */
    create<T extends SkillCreateArgs>(args: SelectSubset<T, SkillCreateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Skills.
     * @param {SkillCreateManyArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SkillCreateManyArgs>(args?: SelectSubset<T, SkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Skills and returns the data saved in the database.
     * @param {SkillCreateManyAndReturnArgs} args - Arguments to create many Skills.
     * @example
     * // Create many Skills
     * const skill = await prisma.skill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SkillCreateManyAndReturnArgs>(args?: SelectSubset<T, SkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Skill.
     * @param {SkillDeleteArgs} args - Arguments to delete one Skill.
     * @example
     * // Delete one Skill
     * const Skill = await prisma.skill.delete({
     *   where: {
     *     // ... filter to delete one Skill
     *   }
     * })
     * 
     */
    delete<T extends SkillDeleteArgs>(args: SelectSubset<T, SkillDeleteArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Skill.
     * @param {SkillUpdateArgs} args - Arguments to update one Skill.
     * @example
     * // Update one Skill
     * const skill = await prisma.skill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SkillUpdateArgs>(args: SelectSubset<T, SkillUpdateArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Skills.
     * @param {SkillDeleteManyArgs} args - Arguments to filter Skills to delete.
     * @example
     * // Delete a few Skills
     * const { count } = await prisma.skill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SkillDeleteManyArgs>(args?: SelectSubset<T, SkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SkillUpdateManyArgs>(args: SelectSubset<T, SkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Skills and returns the data updated in the database.
     * @param {SkillUpdateManyAndReturnArgs} args - Arguments to update many Skills.
     * @example
     * // Update many Skills
     * const skill = await prisma.skill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Skills and only return the `id`
     * const skillWithIdOnly = await prisma.skill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SkillUpdateManyAndReturnArgs>(args: SelectSubset<T, SkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Skill.
     * @param {SkillUpsertArgs} args - Arguments to update or create a Skill.
     * @example
     * // Update or create a Skill
     * const skill = await prisma.skill.upsert({
     *   create: {
     *     // ... data to create a Skill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Skill we want to update
     *   }
     * })
     */
    upsert<T extends SkillUpsertArgs>(args: SelectSubset<T, SkillUpsertArgs<ExtArgs>>): Prisma__SkillClient<$Result.GetResult<Prisma.$SkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Skills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillCountArgs} args - Arguments to filter Skills to count.
     * @example
     * // Count the number of Skills
     * const count = await prisma.skill.count({
     *   where: {
     *     // ... the filter for the Skills we want to count
     *   }
     * })
    **/
    count<T extends SkillCountArgs>(
      args?: Subset<T, SkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SkillAggregateArgs>(args: Subset<T, SkillAggregateArgs>): Prisma.PrismaPromise<GetSkillAggregateType<T>>

    /**
     * Group by Skill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SkillGroupByArgs['orderBy'] }
        : { orderBy?: SkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Skill model
   */
  readonly fields: SkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Skill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends TalentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TalentProfileDefaultArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Skill model
   */
  interface SkillFieldRefs {
    readonly id: FieldRef<"Skill", 'String'>
    readonly name: FieldRef<"Skill", 'String'>
    readonly profileId: FieldRef<"Skill", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Skill findUnique
   */
  export type SkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findUniqueOrThrow
   */
  export type SkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill findFirst
   */
  export type SkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findFirstOrThrow
   */
  export type SkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skill to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill findMany
   */
  export type SkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter, which Skills to fetch.
     */
    where?: SkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Skills to fetch.
     */
    orderBy?: SkillOrderByWithRelationInput | SkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Skills.
     */
    cursor?: SkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Skills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Skills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Skills.
     */
    distinct?: SkillScalarFieldEnum | SkillScalarFieldEnum[]
  }

  /**
   * Skill create
   */
  export type SkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to create a Skill.
     */
    data: XOR<SkillCreateInput, SkillUncheckedCreateInput>
  }

  /**
   * Skill createMany
   */
  export type SkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
  }

  /**
   * Skill createManyAndReturn
   */
  export type SkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to create many Skills.
     */
    data: SkillCreateManyInput | SkillCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill update
   */
  export type SkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The data needed to update a Skill.
     */
    data: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
    /**
     * Choose, which Skill to update.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill updateMany
   */
  export type SkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
  }

  /**
   * Skill updateManyAndReturn
   */
  export type SkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * The data used to update Skills.
     */
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyInput>
    /**
     * Filter which Skills to update
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Skill upsert
   */
  export type SkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * The filter to search for the Skill to update in case it exists.
     */
    where: SkillWhereUniqueInput
    /**
     * In case the Skill found by the `where` argument doesn't exist, create a new Skill with this data.
     */
    create: XOR<SkillCreateInput, SkillUncheckedCreateInput>
    /**
     * In case the Skill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SkillUpdateInput, SkillUncheckedUpdateInput>
  }

  /**
   * Skill delete
   */
  export type SkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
    /**
     * Filter which Skill to delete.
     */
    where: SkillWhereUniqueInput
  }

  /**
   * Skill deleteMany
   */
  export type SkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Skills to delete
     */
    where?: SkillWhereInput
    /**
     * Limit how many Skills to delete.
     */
    limit?: number
  }

  /**
   * Skill without action
   */
  export type SkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Skill
     */
    select?: SkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Skill
     */
    omit?: SkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SkillInclude<ExtArgs> | null
  }


  /**
   * Model PortfolioItem
   */

  export type AggregatePortfolioItem = {
    _count: PortfolioItemCountAggregateOutputType | null
    _min: PortfolioItemMinAggregateOutputType | null
    _max: PortfolioItemMaxAggregateOutputType | null
  }

  export type PortfolioItemMinAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    images: string | null
    profileId: string | null
  }

  export type PortfolioItemMaxAggregateOutputType = {
    id: string | null
    title: string | null
    url: string | null
    images: string | null
    profileId: string | null
  }

  export type PortfolioItemCountAggregateOutputType = {
    id: number
    title: number
    url: number
    images: number
    profileId: number
    _all: number
  }


  export type PortfolioItemMinAggregateInputType = {
    id?: true
    title?: true
    url?: true
    images?: true
    profileId?: true
  }

  export type PortfolioItemMaxAggregateInputType = {
    id?: true
    title?: true
    url?: true
    images?: true
    profileId?: true
  }

  export type PortfolioItemCountAggregateInputType = {
    id?: true
    title?: true
    url?: true
    images?: true
    profileId?: true
    _all?: true
  }

  export type PortfolioItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioItem to aggregate.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PortfolioItems
    **/
    _count?: true | PortfolioItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PortfolioItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PortfolioItemMaxAggregateInputType
  }

  export type GetPortfolioItemAggregateType<T extends PortfolioItemAggregateArgs> = {
        [P in keyof T & keyof AggregatePortfolioItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePortfolioItem[P]>
      : GetScalarType<T[P], AggregatePortfolioItem[P]>
  }




  export type PortfolioItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: PortfolioItemWhereInput
    orderBy?: PortfolioItemOrderByWithAggregationInput | PortfolioItemOrderByWithAggregationInput[]
    by: PortfolioItemScalarFieldEnum[] | PortfolioItemScalarFieldEnum
    having?: PortfolioItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PortfolioItemCountAggregateInputType | true
    _min?: PortfolioItemMinAggregateInputType
    _max?: PortfolioItemMaxAggregateInputType
  }

  export type PortfolioItemGroupByOutputType = {
    id: string
    title: string
    url: string | null
    images: string | null
    profileId: string
    _count: PortfolioItemCountAggregateOutputType | null
    _min: PortfolioItemMinAggregateOutputType | null
    _max: PortfolioItemMaxAggregateOutputType | null
  }

  type GetPortfolioItemGroupByPayload<T extends PortfolioItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<PortfolioItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PortfolioItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PortfolioItemGroupByOutputType[P]>
            : GetScalarType<T[P], PortfolioItemGroupByOutputType[P]>
        }
      >
    >


  export type PortfolioItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    images?: boolean
    profileId?: boolean
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    images?: boolean
    profileId?: boolean
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    url?: boolean
    images?: boolean
    profileId?: boolean
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["portfolioItem"]>

  export type PortfolioItemSelectScalar = {
    id?: boolean
    title?: boolean
    url?: boolean
    images?: boolean
    profileId?: boolean
  }

  export type PortfolioItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "url" | "images" | "profileId", ExtArgs["result"]["portfolioItem"]>
  export type PortfolioItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }
  export type PortfolioItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }
  export type PortfolioItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | TalentProfileDefaultArgs<ExtArgs>
  }

  export type $PortfolioItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "PortfolioItem"
    objects: {
      profile: Prisma.$TalentProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      title: string
      url: string | null
      images: string | null
      profileId: string
    }, ExtArgs["result"]["portfolioItem"]>
    composites: {}
  }

  type PortfolioItemGetPayload<S extends boolean | null | undefined | PortfolioItemDefaultArgs> = $Result.GetResult<Prisma.$PortfolioItemPayload, S>

  type PortfolioItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<PortfolioItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: PortfolioItemCountAggregateInputType | true
    }

  export interface PortfolioItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['PortfolioItem'], meta: { name: 'PortfolioItem' } }
    /**
     * Find zero or one PortfolioItem that matches the filter.
     * @param {PortfolioItemFindUniqueArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends PortfolioItemFindUniqueArgs>(args: SelectSubset<T, PortfolioItemFindUniqueArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one PortfolioItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {PortfolioItemFindUniqueOrThrowArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends PortfolioItemFindUniqueOrThrowArgs>(args: SelectSubset<T, PortfolioItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindFirstArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends PortfolioItemFindFirstArgs>(args?: SelectSubset<T, PortfolioItemFindFirstArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first PortfolioItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindFirstOrThrowArgs} args - Arguments to find a PortfolioItem
     * @example
     * // Get one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends PortfolioItemFindFirstOrThrowArgs>(args?: SelectSubset<T, PortfolioItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more PortfolioItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PortfolioItems
     * const portfolioItems = await prisma.portfolioItem.findMany()
     * 
     * // Get first 10 PortfolioItems
     * const portfolioItems = await prisma.portfolioItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends PortfolioItemFindManyArgs>(args?: SelectSubset<T, PortfolioItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a PortfolioItem.
     * @param {PortfolioItemCreateArgs} args - Arguments to create a PortfolioItem.
     * @example
     * // Create one PortfolioItem
     * const PortfolioItem = await prisma.portfolioItem.create({
     *   data: {
     *     // ... data to create a PortfolioItem
     *   }
     * })
     * 
     */
    create<T extends PortfolioItemCreateArgs>(args: SelectSubset<T, PortfolioItemCreateArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many PortfolioItems.
     * @param {PortfolioItemCreateManyArgs} args - Arguments to create many PortfolioItems.
     * @example
     * // Create many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends PortfolioItemCreateManyArgs>(args?: SelectSubset<T, PortfolioItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many PortfolioItems and returns the data saved in the database.
     * @param {PortfolioItemCreateManyAndReturnArgs} args - Arguments to create many PortfolioItems.
     * @example
     * // Create many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many PortfolioItems and only return the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends PortfolioItemCreateManyAndReturnArgs>(args?: SelectSubset<T, PortfolioItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a PortfolioItem.
     * @param {PortfolioItemDeleteArgs} args - Arguments to delete one PortfolioItem.
     * @example
     * // Delete one PortfolioItem
     * const PortfolioItem = await prisma.portfolioItem.delete({
     *   where: {
     *     // ... filter to delete one PortfolioItem
     *   }
     * })
     * 
     */
    delete<T extends PortfolioItemDeleteArgs>(args: SelectSubset<T, PortfolioItemDeleteArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one PortfolioItem.
     * @param {PortfolioItemUpdateArgs} args - Arguments to update one PortfolioItem.
     * @example
     * // Update one PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends PortfolioItemUpdateArgs>(args: SelectSubset<T, PortfolioItemUpdateArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more PortfolioItems.
     * @param {PortfolioItemDeleteManyArgs} args - Arguments to filter PortfolioItems to delete.
     * @example
     * // Delete a few PortfolioItems
     * const { count } = await prisma.portfolioItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends PortfolioItemDeleteManyArgs>(args?: SelectSubset<T, PortfolioItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends PortfolioItemUpdateManyArgs>(args: SelectSubset<T, PortfolioItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PortfolioItems and returns the data updated in the database.
     * @param {PortfolioItemUpdateManyAndReturnArgs} args - Arguments to update many PortfolioItems.
     * @example
     * // Update many PortfolioItems
     * const portfolioItem = await prisma.portfolioItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more PortfolioItems and only return the `id`
     * const portfolioItemWithIdOnly = await prisma.portfolioItem.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends PortfolioItemUpdateManyAndReturnArgs>(args: SelectSubset<T, PortfolioItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one PortfolioItem.
     * @param {PortfolioItemUpsertArgs} args - Arguments to update or create a PortfolioItem.
     * @example
     * // Update or create a PortfolioItem
     * const portfolioItem = await prisma.portfolioItem.upsert({
     *   create: {
     *     // ... data to create a PortfolioItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PortfolioItem we want to update
     *   }
     * })
     */
    upsert<T extends PortfolioItemUpsertArgs>(args: SelectSubset<T, PortfolioItemUpsertArgs<ExtArgs>>): Prisma__PortfolioItemClient<$Result.GetResult<Prisma.$PortfolioItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of PortfolioItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemCountArgs} args - Arguments to filter PortfolioItems to count.
     * @example
     * // Count the number of PortfolioItems
     * const count = await prisma.portfolioItem.count({
     *   where: {
     *     // ... the filter for the PortfolioItems we want to count
     *   }
     * })
    **/
    count<T extends PortfolioItemCountArgs>(
      args?: Subset<T, PortfolioItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PortfolioItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PortfolioItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PortfolioItemAggregateArgs>(args: Subset<T, PortfolioItemAggregateArgs>): Prisma.PrismaPromise<GetPortfolioItemAggregateType<T>>

    /**
     * Group by PortfolioItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PortfolioItemGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PortfolioItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PortfolioItemGroupByArgs['orderBy'] }
        : { orderBy?: PortfolioItemGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PortfolioItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPortfolioItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the PortfolioItem model
   */
  readonly fields: PortfolioItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for PortfolioItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__PortfolioItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends TalentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TalentProfileDefaultArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the PortfolioItem model
   */
  interface PortfolioItemFieldRefs {
    readonly id: FieldRef<"PortfolioItem", 'String'>
    readonly title: FieldRef<"PortfolioItem", 'String'>
    readonly url: FieldRef<"PortfolioItem", 'String'>
    readonly images: FieldRef<"PortfolioItem", 'String'>
    readonly profileId: FieldRef<"PortfolioItem", 'String'>
  }
    

  // Custom InputTypes
  /**
   * PortfolioItem findUnique
   */
  export type PortfolioItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem findUniqueOrThrow
   */
  export type PortfolioItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem findFirst
   */
  export type PortfolioItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem findFirstOrThrow
   */
  export type PortfolioItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItem to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem findMany
   */
  export type PortfolioItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter, which PortfolioItems to fetch.
     */
    where?: PortfolioItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PortfolioItems to fetch.
     */
    orderBy?: PortfolioItemOrderByWithRelationInput | PortfolioItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PortfolioItems.
     */
    cursor?: PortfolioItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PortfolioItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PortfolioItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PortfolioItems.
     */
    distinct?: PortfolioItemScalarFieldEnum | PortfolioItemScalarFieldEnum[]
  }

  /**
   * PortfolioItem create
   */
  export type PortfolioItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The data needed to create a PortfolioItem.
     */
    data: XOR<PortfolioItemCreateInput, PortfolioItemUncheckedCreateInput>
  }

  /**
   * PortfolioItem createMany
   */
  export type PortfolioItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many PortfolioItems.
     */
    data: PortfolioItemCreateManyInput | PortfolioItemCreateManyInput[]
  }

  /**
   * PortfolioItem createManyAndReturn
   */
  export type PortfolioItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The data used to create many PortfolioItems.
     */
    data: PortfolioItemCreateManyInput | PortfolioItemCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioItem update
   */
  export type PortfolioItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The data needed to update a PortfolioItem.
     */
    data: XOR<PortfolioItemUpdateInput, PortfolioItemUncheckedUpdateInput>
    /**
     * Choose, which PortfolioItem to update.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem updateMany
   */
  export type PortfolioItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update PortfolioItems.
     */
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioItems to update
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to update.
     */
    limit?: number
  }

  /**
   * PortfolioItem updateManyAndReturn
   */
  export type PortfolioItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * The data used to update PortfolioItems.
     */
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyInput>
    /**
     * Filter which PortfolioItems to update
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * PortfolioItem upsert
   */
  export type PortfolioItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * The filter to search for the PortfolioItem to update in case it exists.
     */
    where: PortfolioItemWhereUniqueInput
    /**
     * In case the PortfolioItem found by the `where` argument doesn't exist, create a new PortfolioItem with this data.
     */
    create: XOR<PortfolioItemCreateInput, PortfolioItemUncheckedCreateInput>
    /**
     * In case the PortfolioItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PortfolioItemUpdateInput, PortfolioItemUncheckedUpdateInput>
  }

  /**
   * PortfolioItem delete
   */
  export type PortfolioItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
    /**
     * Filter which PortfolioItem to delete.
     */
    where: PortfolioItemWhereUniqueInput
  }

  /**
   * PortfolioItem deleteMany
   */
  export type PortfolioItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which PortfolioItems to delete
     */
    where?: PortfolioItemWhereInput
    /**
     * Limit how many PortfolioItems to delete.
     */
    limit?: number
  }

  /**
   * PortfolioItem without action
   */
  export type PortfolioItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the PortfolioItem
     */
    select?: PortfolioItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the PortfolioItem
     */
    omit?: PortfolioItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: PortfolioItemInclude<ExtArgs> | null
  }


  /**
   * Model CompanyProfile
   */

  export type AggregateCompanyProfile = {
    _count: CompanyProfileCountAggregateOutputType | null
    _min: CompanyProfileMinAggregateOutputType | null
    _max: CompanyProfileMaxAggregateOutputType | null
  }

  export type CompanyProfileMinAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    description: string | null
    website: string | null
    interests: string | null
  }

  export type CompanyProfileMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    companyName: string | null
    description: string | null
    website: string | null
    interests: string | null
  }

  export type CompanyProfileCountAggregateOutputType = {
    id: number
    userId: number
    companyName: number
    description: number
    website: number
    interests: number
    _all: number
  }


  export type CompanyProfileMinAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    website?: true
    interests?: true
  }

  export type CompanyProfileMaxAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    website?: true
    interests?: true
  }

  export type CompanyProfileCountAggregateInputType = {
    id?: true
    userId?: true
    companyName?: true
    description?: true
    website?: true
    interests?: true
    _all?: true
  }

  export type CompanyProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyProfile to aggregate.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompanyProfiles
    **/
    _count?: true | CompanyProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompanyProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompanyProfileMaxAggregateInputType
  }

  export type GetCompanyProfileAggregateType<T extends CompanyProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateCompanyProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompanyProfile[P]>
      : GetScalarType<T[P], AggregateCompanyProfile[P]>
  }




  export type CompanyProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompanyProfileWhereInput
    orderBy?: CompanyProfileOrderByWithAggregationInput | CompanyProfileOrderByWithAggregationInput[]
    by: CompanyProfileScalarFieldEnum[] | CompanyProfileScalarFieldEnum
    having?: CompanyProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompanyProfileCountAggregateInputType | true
    _min?: CompanyProfileMinAggregateInputType
    _max?: CompanyProfileMaxAggregateInputType
  }

  export type CompanyProfileGroupByOutputType = {
    id: string
    userId: string
    companyName: string | null
    description: string | null
    website: string | null
    interests: string | null
    _count: CompanyProfileCountAggregateOutputType | null
    _min: CompanyProfileMinAggregateOutputType | null
    _max: CompanyProfileMaxAggregateOutputType | null
  }

  type GetCompanyProfileGroupByPayload<T extends CompanyProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompanyProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompanyProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompanyProfileGroupByOutputType[P]>
            : GetScalarType<T[P], CompanyProfileGroupByOutputType[P]>
        }
      >
    >


  export type CompanyProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    website?: boolean
    interests?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    collaborations?: boolean | CompanyProfile$collaborationsArgs<ExtArgs>
    _count?: boolean | CompanyProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    website?: boolean
    interests?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    website?: boolean
    interests?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["companyProfile"]>

  export type CompanyProfileSelectScalar = {
    id?: boolean
    userId?: boolean
    companyName?: boolean
    description?: boolean
    website?: boolean
    interests?: boolean
  }

  export type CompanyProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "companyName" | "description" | "website" | "interests", ExtArgs["result"]["companyProfile"]>
  export type CompanyProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    collaborations?: boolean | CompanyProfile$collaborationsArgs<ExtArgs>
    _count?: boolean | CompanyProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompanyProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type CompanyProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $CompanyProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompanyProfile"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      collaborations: Prisma.$CollaborationPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      companyName: string | null
      description: string | null
      website: string | null
      interests: string | null
    }, ExtArgs["result"]["companyProfile"]>
    composites: {}
  }

  type CompanyProfileGetPayload<S extends boolean | null | undefined | CompanyProfileDefaultArgs> = $Result.GetResult<Prisma.$CompanyProfilePayload, S>

  type CompanyProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompanyProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompanyProfileCountAggregateInputType | true
    }

  export interface CompanyProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompanyProfile'], meta: { name: 'CompanyProfile' } }
    /**
     * Find zero or one CompanyProfile that matches the filter.
     * @param {CompanyProfileFindUniqueArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompanyProfileFindUniqueArgs>(args: SelectSubset<T, CompanyProfileFindUniqueArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompanyProfile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompanyProfileFindUniqueOrThrowArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompanyProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, CompanyProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyProfile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindFirstArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompanyProfileFindFirstArgs>(args?: SelectSubset<T, CompanyProfileFindFirstArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompanyProfile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindFirstOrThrowArgs} args - Arguments to find a CompanyProfile
     * @example
     * // Get one CompanyProfile
     * const companyProfile = await prisma.companyProfile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompanyProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, CompanyProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompanyProfiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompanyProfiles
     * const companyProfiles = await prisma.companyProfile.findMany()
     * 
     * // Get first 10 CompanyProfiles
     * const companyProfiles = await prisma.companyProfile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompanyProfileFindManyArgs>(args?: SelectSubset<T, CompanyProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompanyProfile.
     * @param {CompanyProfileCreateArgs} args - Arguments to create a CompanyProfile.
     * @example
     * // Create one CompanyProfile
     * const CompanyProfile = await prisma.companyProfile.create({
     *   data: {
     *     // ... data to create a CompanyProfile
     *   }
     * })
     * 
     */
    create<T extends CompanyProfileCreateArgs>(args: SelectSubset<T, CompanyProfileCreateArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompanyProfiles.
     * @param {CompanyProfileCreateManyArgs} args - Arguments to create many CompanyProfiles.
     * @example
     * // Create many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompanyProfileCreateManyArgs>(args?: SelectSubset<T, CompanyProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompanyProfiles and returns the data saved in the database.
     * @param {CompanyProfileCreateManyAndReturnArgs} args - Arguments to create many CompanyProfiles.
     * @example
     * // Create many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompanyProfiles and only return the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompanyProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, CompanyProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompanyProfile.
     * @param {CompanyProfileDeleteArgs} args - Arguments to delete one CompanyProfile.
     * @example
     * // Delete one CompanyProfile
     * const CompanyProfile = await prisma.companyProfile.delete({
     *   where: {
     *     // ... filter to delete one CompanyProfile
     *   }
     * })
     * 
     */
    delete<T extends CompanyProfileDeleteArgs>(args: SelectSubset<T, CompanyProfileDeleteArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompanyProfile.
     * @param {CompanyProfileUpdateArgs} args - Arguments to update one CompanyProfile.
     * @example
     * // Update one CompanyProfile
     * const companyProfile = await prisma.companyProfile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompanyProfileUpdateArgs>(args: SelectSubset<T, CompanyProfileUpdateArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompanyProfiles.
     * @param {CompanyProfileDeleteManyArgs} args - Arguments to filter CompanyProfiles to delete.
     * @example
     * // Delete a few CompanyProfiles
     * const { count } = await prisma.companyProfile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompanyProfileDeleteManyArgs>(args?: SelectSubset<T, CompanyProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompanyProfileUpdateManyArgs>(args: SelectSubset<T, CompanyProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompanyProfiles and returns the data updated in the database.
     * @param {CompanyProfileUpdateManyAndReturnArgs} args - Arguments to update many CompanyProfiles.
     * @example
     * // Update many CompanyProfiles
     * const companyProfile = await prisma.companyProfile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompanyProfiles and only return the `id`
     * const companyProfileWithIdOnly = await prisma.companyProfile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CompanyProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, CompanyProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompanyProfile.
     * @param {CompanyProfileUpsertArgs} args - Arguments to update or create a CompanyProfile.
     * @example
     * // Update or create a CompanyProfile
     * const companyProfile = await prisma.companyProfile.upsert({
     *   create: {
     *     // ... data to create a CompanyProfile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompanyProfile we want to update
     *   }
     * })
     */
    upsert<T extends CompanyProfileUpsertArgs>(args: SelectSubset<T, CompanyProfileUpsertArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompanyProfiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileCountArgs} args - Arguments to filter CompanyProfiles to count.
     * @example
     * // Count the number of CompanyProfiles
     * const count = await prisma.companyProfile.count({
     *   where: {
     *     // ... the filter for the CompanyProfiles we want to count
     *   }
     * })
    **/
    count<T extends CompanyProfileCountArgs>(
      args?: Subset<T, CompanyProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompanyProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompanyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CompanyProfileAggregateArgs>(args: Subset<T, CompanyProfileAggregateArgs>): Prisma.PrismaPromise<GetCompanyProfileAggregateType<T>>

    /**
     * Group by CompanyProfile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompanyProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CompanyProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompanyProfileGroupByArgs['orderBy'] }
        : { orderBy?: CompanyProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CompanyProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompanyProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompanyProfile model
   */
  readonly fields: CompanyProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompanyProfile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompanyProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    collaborations<T extends CompanyProfile$collaborationsArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfile$collaborationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the CompanyProfile model
   */
  interface CompanyProfileFieldRefs {
    readonly id: FieldRef<"CompanyProfile", 'String'>
    readonly userId: FieldRef<"CompanyProfile", 'String'>
    readonly companyName: FieldRef<"CompanyProfile", 'String'>
    readonly description: FieldRef<"CompanyProfile", 'String'>
    readonly website: FieldRef<"CompanyProfile", 'String'>
    readonly interests: FieldRef<"CompanyProfile", 'String'>
  }
    

  // Custom InputTypes
  /**
   * CompanyProfile findUnique
   */
  export type CompanyProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile findUniqueOrThrow
   */
  export type CompanyProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile findFirst
   */
  export type CompanyProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile findFirstOrThrow
   */
  export type CompanyProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfile to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile findMany
   */
  export type CompanyProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter, which CompanyProfiles to fetch.
     */
    where?: CompanyProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompanyProfiles to fetch.
     */
    orderBy?: CompanyProfileOrderByWithRelationInput | CompanyProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompanyProfiles.
     */
    cursor?: CompanyProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompanyProfiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompanyProfiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompanyProfiles.
     */
    distinct?: CompanyProfileScalarFieldEnum | CompanyProfileScalarFieldEnum[]
  }

  /**
   * CompanyProfile create
   */
  export type CompanyProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a CompanyProfile.
     */
    data: XOR<CompanyProfileCreateInput, CompanyProfileUncheckedCreateInput>
  }

  /**
   * CompanyProfile createMany
   */
  export type CompanyProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompanyProfiles.
     */
    data: CompanyProfileCreateManyInput | CompanyProfileCreateManyInput[]
  }

  /**
   * CompanyProfile createManyAndReturn
   */
  export type CompanyProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The data used to create many CompanyProfiles.
     */
    data: CompanyProfileCreateManyInput | CompanyProfileCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyProfile update
   */
  export type CompanyProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a CompanyProfile.
     */
    data: XOR<CompanyProfileUpdateInput, CompanyProfileUncheckedUpdateInput>
    /**
     * Choose, which CompanyProfile to update.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile updateMany
   */
  export type CompanyProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompanyProfiles.
     */
    data: XOR<CompanyProfileUpdateManyMutationInput, CompanyProfileUncheckedUpdateManyInput>
    /**
     * Filter which CompanyProfiles to update
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to update.
     */
    limit?: number
  }

  /**
   * CompanyProfile updateManyAndReturn
   */
  export type CompanyProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * The data used to update CompanyProfiles.
     */
    data: XOR<CompanyProfileUpdateManyMutationInput, CompanyProfileUncheckedUpdateManyInput>
    /**
     * Filter which CompanyProfiles to update
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompanyProfile upsert
   */
  export type CompanyProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the CompanyProfile to update in case it exists.
     */
    where: CompanyProfileWhereUniqueInput
    /**
     * In case the CompanyProfile found by the `where` argument doesn't exist, create a new CompanyProfile with this data.
     */
    create: XOR<CompanyProfileCreateInput, CompanyProfileUncheckedCreateInput>
    /**
     * In case the CompanyProfile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompanyProfileUpdateInput, CompanyProfileUncheckedUpdateInput>
  }

  /**
   * CompanyProfile delete
   */
  export type CompanyProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
    /**
     * Filter which CompanyProfile to delete.
     */
    where: CompanyProfileWhereUniqueInput
  }

  /**
   * CompanyProfile deleteMany
   */
  export type CompanyProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompanyProfiles to delete
     */
    where?: CompanyProfileWhereInput
    /**
     * Limit how many CompanyProfiles to delete.
     */
    limit?: number
  }

  /**
   * CompanyProfile.collaborations
   */
  export type CompanyProfile$collaborationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    where?: CollaborationWhereInput
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    cursor?: CollaborationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[]
  }

  /**
   * CompanyProfile without action
   */
  export type CompanyProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompanyProfile
     */
    select?: CompanyProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompanyProfile
     */
    omit?: CompanyProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompanyProfileInclude<ExtArgs> | null
  }


  /**
   * Model Collaboration
   */

  export type AggregateCollaboration = {
    _count: CollaborationCountAggregateOutputType | null
    _min: CollaborationMinAggregateOutputType | null
    _max: CollaborationMaxAggregateOutputType | null
  }

  export type CollaborationMinAggregateOutputType = {
    id: string | null
    talentId: string | null
    companyId: string | null
    jobTitle: string | null
    message: string | null
    salary: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaborationMaxAggregateOutputType = {
    id: string | null
    talentId: string | null
    companyId: string | null
    jobTitle: string | null
    message: string | null
    salary: string | null
    status: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CollaborationCountAggregateOutputType = {
    id: number
    talentId: number
    companyId: number
    jobTitle: number
    message: number
    salary: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CollaborationMinAggregateInputType = {
    id?: true
    talentId?: true
    companyId?: true
    jobTitle?: true
    message?: true
    salary?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaborationMaxAggregateInputType = {
    id?: true
    talentId?: true
    companyId?: true
    jobTitle?: true
    message?: true
    salary?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CollaborationCountAggregateInputType = {
    id?: true
    talentId?: true
    companyId?: true
    jobTitle?: true
    message?: true
    salary?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CollaborationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaboration to aggregate.
     */
    where?: CollaborationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CollaborationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Collaborations
    **/
    _count?: true | CollaborationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CollaborationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CollaborationMaxAggregateInputType
  }

  export type GetCollaborationAggregateType<T extends CollaborationAggregateArgs> = {
        [P in keyof T & keyof AggregateCollaboration]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCollaboration[P]>
      : GetScalarType<T[P], AggregateCollaboration[P]>
  }




  export type CollaborationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CollaborationWhereInput
    orderBy?: CollaborationOrderByWithAggregationInput | CollaborationOrderByWithAggregationInput[]
    by: CollaborationScalarFieldEnum[] | CollaborationScalarFieldEnum
    having?: CollaborationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CollaborationCountAggregateInputType | true
    _min?: CollaborationMinAggregateInputType
    _max?: CollaborationMaxAggregateInputType
  }

  export type CollaborationGroupByOutputType = {
    id: string
    talentId: string
    companyId: string
    jobTitle: string
    message: string
    salary: string | null
    status: string
    createdAt: Date
    updatedAt: Date
    _count: CollaborationCountAggregateOutputType | null
    _min: CollaborationMinAggregateOutputType | null
    _max: CollaborationMaxAggregateOutputType | null
  }

  type GetCollaborationGroupByPayload<T extends CollaborationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CollaborationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CollaborationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CollaborationGroupByOutputType[P]>
            : GetScalarType<T[P], CollaborationGroupByOutputType[P]>
        }
      >
    >


  export type CollaborationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    talentId?: boolean
    companyId?: boolean
    jobTitle?: boolean
    message?: boolean
    salary?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaboration"]>

  export type CollaborationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    talentId?: boolean
    companyId?: boolean
    jobTitle?: boolean
    message?: boolean
    salary?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaboration"]>

  export type CollaborationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    talentId?: boolean
    companyId?: boolean
    jobTitle?: boolean
    message?: boolean
    salary?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["collaboration"]>

  export type CollaborationSelectScalar = {
    id?: boolean
    talentId?: boolean
    companyId?: boolean
    jobTitle?: boolean
    message?: boolean
    salary?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CollaborationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "talentId" | "companyId" | "jobTitle" | "message" | "salary" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["collaboration"]>
  export type CollaborationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }
  export type CollaborationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }
  export type CollaborationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    talent?: boolean | TalentProfileDefaultArgs<ExtArgs>
    company?: boolean | CompanyProfileDefaultArgs<ExtArgs>
  }

  export type $CollaborationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Collaboration"
    objects: {
      talent: Prisma.$TalentProfilePayload<ExtArgs>
      company: Prisma.$CompanyProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      talentId: string
      companyId: string
      jobTitle: string
      message: string
      salary: string | null
      status: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["collaboration"]>
    composites: {}
  }

  type CollaborationGetPayload<S extends boolean | null | undefined | CollaborationDefaultArgs> = $Result.GetResult<Prisma.$CollaborationPayload, S>

  type CollaborationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CollaborationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CollaborationCountAggregateInputType | true
    }

  export interface CollaborationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Collaboration'], meta: { name: 'Collaboration' } }
    /**
     * Find zero or one Collaboration that matches the filter.
     * @param {CollaborationFindUniqueArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CollaborationFindUniqueArgs>(args: SelectSubset<T, CollaborationFindUniqueArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Collaboration that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CollaborationFindUniqueOrThrowArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CollaborationFindUniqueOrThrowArgs>(args: SelectSubset<T, CollaborationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaboration that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationFindFirstArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CollaborationFindFirstArgs>(args?: SelectSubset<T, CollaborationFindFirstArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Collaboration that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationFindFirstOrThrowArgs} args - Arguments to find a Collaboration
     * @example
     * // Get one Collaboration
     * const collaboration = await prisma.collaboration.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CollaborationFindFirstOrThrowArgs>(args?: SelectSubset<T, CollaborationFindFirstOrThrowArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Collaborations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Collaborations
     * const collaborations = await prisma.collaboration.findMany()
     * 
     * // Get first 10 Collaborations
     * const collaborations = await prisma.collaboration.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const collaborationWithIdOnly = await prisma.collaboration.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CollaborationFindManyArgs>(args?: SelectSubset<T, CollaborationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Collaboration.
     * @param {CollaborationCreateArgs} args - Arguments to create a Collaboration.
     * @example
     * // Create one Collaboration
     * const Collaboration = await prisma.collaboration.create({
     *   data: {
     *     // ... data to create a Collaboration
     *   }
     * })
     * 
     */
    create<T extends CollaborationCreateArgs>(args: SelectSubset<T, CollaborationCreateArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Collaborations.
     * @param {CollaborationCreateManyArgs} args - Arguments to create many Collaborations.
     * @example
     * // Create many Collaborations
     * const collaboration = await prisma.collaboration.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CollaborationCreateManyArgs>(args?: SelectSubset<T, CollaborationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Collaborations and returns the data saved in the database.
     * @param {CollaborationCreateManyAndReturnArgs} args - Arguments to create many Collaborations.
     * @example
     * // Create many Collaborations
     * const collaboration = await prisma.collaboration.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Collaborations and only return the `id`
     * const collaborationWithIdOnly = await prisma.collaboration.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CollaborationCreateManyAndReturnArgs>(args?: SelectSubset<T, CollaborationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Collaboration.
     * @param {CollaborationDeleteArgs} args - Arguments to delete one Collaboration.
     * @example
     * // Delete one Collaboration
     * const Collaboration = await prisma.collaboration.delete({
     *   where: {
     *     // ... filter to delete one Collaboration
     *   }
     * })
     * 
     */
    delete<T extends CollaborationDeleteArgs>(args: SelectSubset<T, CollaborationDeleteArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Collaboration.
     * @param {CollaborationUpdateArgs} args - Arguments to update one Collaboration.
     * @example
     * // Update one Collaboration
     * const collaboration = await prisma.collaboration.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CollaborationUpdateArgs>(args: SelectSubset<T, CollaborationUpdateArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Collaborations.
     * @param {CollaborationDeleteManyArgs} args - Arguments to filter Collaborations to delete.
     * @example
     * // Delete a few Collaborations
     * const { count } = await prisma.collaboration.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CollaborationDeleteManyArgs>(args?: SelectSubset<T, CollaborationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Collaborations
     * const collaboration = await prisma.collaboration.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CollaborationUpdateManyArgs>(args: SelectSubset<T, CollaborationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Collaborations and returns the data updated in the database.
     * @param {CollaborationUpdateManyAndReturnArgs} args - Arguments to update many Collaborations.
     * @example
     * // Update many Collaborations
     * const collaboration = await prisma.collaboration.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Collaborations and only return the `id`
     * const collaborationWithIdOnly = await prisma.collaboration.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CollaborationUpdateManyAndReturnArgs>(args: SelectSubset<T, CollaborationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Collaboration.
     * @param {CollaborationUpsertArgs} args - Arguments to update or create a Collaboration.
     * @example
     * // Update or create a Collaboration
     * const collaboration = await prisma.collaboration.upsert({
     *   create: {
     *     // ... data to create a Collaboration
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Collaboration we want to update
     *   }
     * })
     */
    upsert<T extends CollaborationUpsertArgs>(args: SelectSubset<T, CollaborationUpsertArgs<ExtArgs>>): Prisma__CollaborationClient<$Result.GetResult<Prisma.$CollaborationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Collaborations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationCountArgs} args - Arguments to filter Collaborations to count.
     * @example
     * // Count the number of Collaborations
     * const count = await prisma.collaboration.count({
     *   where: {
     *     // ... the filter for the Collaborations we want to count
     *   }
     * })
    **/
    count<T extends CollaborationCountArgs>(
      args?: Subset<T, CollaborationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CollaborationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Collaboration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CollaborationAggregateArgs>(args: Subset<T, CollaborationAggregateArgs>): Prisma.PrismaPromise<GetCollaborationAggregateType<T>>

    /**
     * Group by Collaboration.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CollaborationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CollaborationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CollaborationGroupByArgs['orderBy'] }
        : { orderBy?: CollaborationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CollaborationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCollaborationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Collaboration model
   */
  readonly fields: CollaborationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Collaboration.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CollaborationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    talent<T extends TalentProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TalentProfileDefaultArgs<ExtArgs>>): Prisma__TalentProfileClient<$Result.GetResult<Prisma.$TalentProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    company<T extends CompanyProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompanyProfileDefaultArgs<ExtArgs>>): Prisma__CompanyProfileClient<$Result.GetResult<Prisma.$CompanyProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Collaboration model
   */
  interface CollaborationFieldRefs {
    readonly id: FieldRef<"Collaboration", 'String'>
    readonly talentId: FieldRef<"Collaboration", 'String'>
    readonly companyId: FieldRef<"Collaboration", 'String'>
    readonly jobTitle: FieldRef<"Collaboration", 'String'>
    readonly message: FieldRef<"Collaboration", 'String'>
    readonly salary: FieldRef<"Collaboration", 'String'>
    readonly status: FieldRef<"Collaboration", 'String'>
    readonly createdAt: FieldRef<"Collaboration", 'DateTime'>
    readonly updatedAt: FieldRef<"Collaboration", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Collaboration findUnique
   */
  export type CollaborationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaboration to fetch.
     */
    where: CollaborationWhereUniqueInput
  }

  /**
   * Collaboration findUniqueOrThrow
   */
  export type CollaborationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaboration to fetch.
     */
    where: CollaborationWhereUniqueInput
  }

  /**
   * Collaboration findFirst
   */
  export type CollaborationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaboration to fetch.
     */
    where?: CollaborationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborations.
     */
    cursor?: CollaborationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborations.
     */
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[]
  }

  /**
   * Collaboration findFirstOrThrow
   */
  export type CollaborationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaboration to fetch.
     */
    where?: CollaborationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Collaborations.
     */
    cursor?: CollaborationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborations.
     */
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[]
  }

  /**
   * Collaboration findMany
   */
  export type CollaborationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter, which Collaborations to fetch.
     */
    where?: CollaborationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Collaborations to fetch.
     */
    orderBy?: CollaborationOrderByWithRelationInput | CollaborationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Collaborations.
     */
    cursor?: CollaborationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Collaborations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Collaborations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Collaborations.
     */
    distinct?: CollaborationScalarFieldEnum | CollaborationScalarFieldEnum[]
  }

  /**
   * Collaboration create
   */
  export type CollaborationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * The data needed to create a Collaboration.
     */
    data: XOR<CollaborationCreateInput, CollaborationUncheckedCreateInput>
  }

  /**
   * Collaboration createMany
   */
  export type CollaborationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Collaborations.
     */
    data: CollaborationCreateManyInput | CollaborationCreateManyInput[]
  }

  /**
   * Collaboration createManyAndReturn
   */
  export type CollaborationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * The data used to create many Collaborations.
     */
    data: CollaborationCreateManyInput | CollaborationCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaboration update
   */
  export type CollaborationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * The data needed to update a Collaboration.
     */
    data: XOR<CollaborationUpdateInput, CollaborationUncheckedUpdateInput>
    /**
     * Choose, which Collaboration to update.
     */
    where: CollaborationWhereUniqueInput
  }

  /**
   * Collaboration updateMany
   */
  export type CollaborationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Collaborations.
     */
    data: XOR<CollaborationUpdateManyMutationInput, CollaborationUncheckedUpdateManyInput>
    /**
     * Filter which Collaborations to update
     */
    where?: CollaborationWhereInput
    /**
     * Limit how many Collaborations to update.
     */
    limit?: number
  }

  /**
   * Collaboration updateManyAndReturn
   */
  export type CollaborationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * The data used to update Collaborations.
     */
    data: XOR<CollaborationUpdateManyMutationInput, CollaborationUncheckedUpdateManyInput>
    /**
     * Filter which Collaborations to update
     */
    where?: CollaborationWhereInput
    /**
     * Limit how many Collaborations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Collaboration upsert
   */
  export type CollaborationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * The filter to search for the Collaboration to update in case it exists.
     */
    where: CollaborationWhereUniqueInput
    /**
     * In case the Collaboration found by the `where` argument doesn't exist, create a new Collaboration with this data.
     */
    create: XOR<CollaborationCreateInput, CollaborationUncheckedCreateInput>
    /**
     * In case the Collaboration was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CollaborationUpdateInput, CollaborationUncheckedUpdateInput>
  }

  /**
   * Collaboration delete
   */
  export type CollaborationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
    /**
     * Filter which Collaboration to delete.
     */
    where: CollaborationWhereUniqueInput
  }

  /**
   * Collaboration deleteMany
   */
  export type CollaborationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Collaborations to delete
     */
    where?: CollaborationWhereInput
    /**
     * Limit how many Collaborations to delete.
     */
    limit?: number
  }

  /**
   * Collaboration without action
   */
  export type CollaborationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Collaboration
     */
    select?: CollaborationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Collaboration
     */
    omit?: CollaborationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CollaborationInclude<ExtArgs> | null
  }


  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    token_type: number
    scope: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    token_type?: true
    scope?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    token_type: string | null
    scope: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    token_type?: boolean
    scope?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "type" | "provider" | "providerAccountId" | "refresh_token" | "access_token" | "expires_at" | "token_type" | "scope" | "id_token" | "session_state", ExtArgs["result"]["account"]>
  export type AccountInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type AccountIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $AccountPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      type: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      token_type: string | null
      scope: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }

  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AccountFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AccountFindUniqueArgs>(args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Account that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs>(args: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AccountFindFirstArgs>(args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs>(args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AccountFindManyArgs>(args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
     */
    create<T extends AccountCreateArgs>(args: SelectSubset<T, AccountCreateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Accounts.
     * @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AccountCreateManyArgs>(args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Accounts and returns the data saved in the database.
     * @param {AccountCreateManyAndReturnArgs} args - Arguments to create many Accounts.
     * @example
     * // Create many Accounts
     * const account = await prisma.account.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AccountCreateManyAndReturnArgs>(args?: SelectSubset<T, AccountCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
     */
    delete<T extends AccountDeleteArgs>(args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AccountUpdateArgs>(args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AccountDeleteManyArgs>(args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AccountUpdateManyArgs>(args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts and returns the data updated in the database.
     * @param {AccountUpdateManyAndReturnArgs} args - Arguments to update many Accounts.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Accounts and only return the `id`
     * const accountWithIdOnly = await prisma.account.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AccountUpdateManyAndReturnArgs>(args: SelectSubset<T, AccountUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
     */
    upsert<T extends AccountUpsertArgs>(args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Account model
   */
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }

  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }

  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
  }

  /**
   * Account createManyAndReturn
   */
  export type AccountCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
  }

  /**
   * Account updateManyAndReturn
   */
  export type AccountUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }

  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }

  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
    /**
     * Limit how many Accounts to delete.
     */
    limit?: number
  }

  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Account
     */
    omit?: AccountOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AccountInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sessionToken" | "userId" | "expires", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }

  export type VerificationTokenOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"identifier" | "token" | "expires", ExtArgs["result"]["verificationToken"]>

  export type $VerificationTokenPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }

  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VerificationTokenFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VerificationTokenFindUniqueArgs>(args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VerificationToken that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs>(args: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VerificationTokenFindFirstArgs>(args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs>(args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
     */
    findMany<T extends VerificationTokenFindManyArgs>(args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
     */
    create<T extends VerificationTokenCreateArgs>(args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VerificationTokens.
     * @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VerificationTokenCreateManyArgs>(args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VerificationTokens and returns the data saved in the database.
     * @param {VerificationTokenCreateManyAndReturnArgs} args - Arguments to create many VerificationTokens.
     * @example
     * // Create many VerificationTokens
     * const verificationToken = await prisma.verificationToken.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.createManyAndReturn({
     *   select: { identifier: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VerificationTokenCreateManyAndReturnArgs>(args?: SelectSubset<T, VerificationTokenCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
     */
    delete<T extends VerificationTokenDeleteArgs>(args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VerificationTokenUpdateArgs>(args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VerificationTokenDeleteManyArgs>(args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VerificationTokenUpdateManyArgs>(args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens and returns the data updated in the database.
     * @param {VerificationTokenUpdateManyAndReturnArgs} args - Arguments to update many VerificationTokens.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VerificationTokens and only return the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.updateManyAndReturn({
     *   select: { identifier: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VerificationTokenUpdateManyAndReturnArgs>(args: SelectSubset<T, VerificationTokenUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
     */
    upsert<T extends VerificationTokenUpsertArgs>(args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VerificationToken model
   */
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }

  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }

  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken createManyAndReturn
   */
  export type VerificationTokenCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
  }

  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken updateManyAndReturn
   */
  export type VerificationTokenUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to update.
     */
    limit?: number
  }

  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }

  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }

  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
    /**
     * Limit how many VerificationTokens to delete.
     */
    limit?: number
  }

  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VerificationToken
     */
    omit?: VerificationTokenOmit<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    password: 'password',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const TalentProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    bio: 'bio',
    title: 'title',
    location: 'location',
    website: 'website',
    linkedin: 'linkedin',
    github: 'github',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type TalentProfileScalarFieldEnum = (typeof TalentProfileScalarFieldEnum)[keyof typeof TalentProfileScalarFieldEnum]


  export const SkillScalarFieldEnum: {
    id: 'id',
    name: 'name',
    profileId: 'profileId'
  };

  export type SkillScalarFieldEnum = (typeof SkillScalarFieldEnum)[keyof typeof SkillScalarFieldEnum]


  export const PortfolioItemScalarFieldEnum: {
    id: 'id',
    title: 'title',
    url: 'url',
    images: 'images',
    profileId: 'profileId'
  };

  export type PortfolioItemScalarFieldEnum = (typeof PortfolioItemScalarFieldEnum)[keyof typeof PortfolioItemScalarFieldEnum]


  export const CompanyProfileScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    companyName: 'companyName',
    description: 'description',
    website: 'website',
    interests: 'interests'
  };

  export type CompanyProfileScalarFieldEnum = (typeof CompanyProfileScalarFieldEnum)[keyof typeof CompanyProfileScalarFieldEnum]


  export const CollaborationScalarFieldEnum: {
    id: 'id',
    talentId: 'talentId',
    companyId: 'companyId',
    jobTitle: 'jobTitle',
    message: 'message',
    salary: 'salary',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CollaborationScalarFieldEnum = (typeof CollaborationScalarFieldEnum)[keyof typeof CollaborationScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    token_type: 'token_type',
    scope: 'scope',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    talentProfile?: XOR<TalentProfileNullableScalarRelationFilter, TalentProfileWhereInput> | null
    companyProfile?: XOR<CompanyProfileNullableScalarRelationFilter, CompanyProfileWhereInput> | null
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    talentProfile?: TalentProfileOrderByWithRelationInput
    companyProfile?: CompanyProfileOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    talentProfile?: XOR<TalentProfileNullableScalarRelationFilter, TalentProfileWhereInput> | null
    companyProfile?: XOR<CompanyProfileNullableScalarRelationFilter, CompanyProfileWhereInput> | null
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    password?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type TalentProfileWhereInput = {
    AND?: TalentProfileWhereInput | TalentProfileWhereInput[]
    OR?: TalentProfileWhereInput[]
    NOT?: TalentProfileWhereInput | TalentProfileWhereInput[]
    id?: StringFilter<"TalentProfile"> | string
    userId?: StringFilter<"TalentProfile"> | string
    bio?: StringNullableFilter<"TalentProfile"> | string | null
    title?: StringNullableFilter<"TalentProfile"> | string | null
    location?: StringNullableFilter<"TalentProfile"> | string | null
    website?: StringNullableFilter<"TalentProfile"> | string | null
    linkedin?: StringNullableFilter<"TalentProfile"> | string | null
    github?: StringNullableFilter<"TalentProfile"> | string | null
    createdAt?: DateTimeFilter<"TalentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TalentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skills?: SkillListRelationFilter
    portfolio?: PortfolioItemListRelationFilter
    collaborations?: CollaborationListRelationFilter
  }

  export type TalentProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    user?: UserOrderByWithRelationInput
    skills?: SkillOrderByRelationAggregateInput
    portfolio?: PortfolioItemOrderByRelationAggregateInput
    collaborations?: CollaborationOrderByRelationAggregateInput
  }

  export type TalentProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: TalentProfileWhereInput | TalentProfileWhereInput[]
    OR?: TalentProfileWhereInput[]
    NOT?: TalentProfileWhereInput | TalentProfileWhereInput[]
    bio?: StringNullableFilter<"TalentProfile"> | string | null
    title?: StringNullableFilter<"TalentProfile"> | string | null
    location?: StringNullableFilter<"TalentProfile"> | string | null
    website?: StringNullableFilter<"TalentProfile"> | string | null
    linkedin?: StringNullableFilter<"TalentProfile"> | string | null
    github?: StringNullableFilter<"TalentProfile"> | string | null
    createdAt?: DateTimeFilter<"TalentProfile"> | Date | string
    updatedAt?: DateTimeFilter<"TalentProfile"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    skills?: SkillListRelationFilter
    portfolio?: PortfolioItemListRelationFilter
    collaborations?: CollaborationListRelationFilter
  }, "id" | "userId">

  export type TalentProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrderInput | SortOrder
    title?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    linkedin?: SortOrderInput | SortOrder
    github?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: TalentProfileCountOrderByAggregateInput
    _max?: TalentProfileMaxOrderByAggregateInput
    _min?: TalentProfileMinOrderByAggregateInput
  }

  export type TalentProfileScalarWhereWithAggregatesInput = {
    AND?: TalentProfileScalarWhereWithAggregatesInput | TalentProfileScalarWhereWithAggregatesInput[]
    OR?: TalentProfileScalarWhereWithAggregatesInput[]
    NOT?: TalentProfileScalarWhereWithAggregatesInput | TalentProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"TalentProfile"> | string
    userId?: StringWithAggregatesFilter<"TalentProfile"> | string
    bio?: StringNullableWithAggregatesFilter<"TalentProfile"> | string | null
    title?: StringNullableWithAggregatesFilter<"TalentProfile"> | string | null
    location?: StringNullableWithAggregatesFilter<"TalentProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"TalentProfile"> | string | null
    linkedin?: StringNullableWithAggregatesFilter<"TalentProfile"> | string | null
    github?: StringNullableWithAggregatesFilter<"TalentProfile"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"TalentProfile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"TalentProfile"> | Date | string
  }

  export type SkillWhereInput = {
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    profileId?: StringFilter<"Skill"> | string
    profile?: XOR<TalentProfileScalarRelationFilter, TalentProfileWhereInput>
  }

  export type SkillOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    profile?: TalentProfileOrderByWithRelationInput
  }

  export type SkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SkillWhereInput | SkillWhereInput[]
    OR?: SkillWhereInput[]
    NOT?: SkillWhereInput | SkillWhereInput[]
    name?: StringFilter<"Skill"> | string
    profileId?: StringFilter<"Skill"> | string
    profile?: XOR<TalentProfileScalarRelationFilter, TalentProfileWhereInput>
  }, "id">

  export type SkillOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
    _count?: SkillCountOrderByAggregateInput
    _max?: SkillMaxOrderByAggregateInput
    _min?: SkillMinOrderByAggregateInput
  }

  export type SkillScalarWhereWithAggregatesInput = {
    AND?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    OR?: SkillScalarWhereWithAggregatesInput[]
    NOT?: SkillScalarWhereWithAggregatesInput | SkillScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Skill"> | string
    name?: StringWithAggregatesFilter<"Skill"> | string
    profileId?: StringWithAggregatesFilter<"Skill"> | string
  }

  export type PortfolioItemWhereInput = {
    AND?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    OR?: PortfolioItemWhereInput[]
    NOT?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    id?: StringFilter<"PortfolioItem"> | string
    title?: StringFilter<"PortfolioItem"> | string
    url?: StringNullableFilter<"PortfolioItem"> | string | null
    images?: StringNullableFilter<"PortfolioItem"> | string | null
    profileId?: StringFilter<"PortfolioItem"> | string
    profile?: XOR<TalentProfileScalarRelationFilter, TalentProfileWhereInput>
  }

  export type PortfolioItemOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    profileId?: SortOrder
    profile?: TalentProfileOrderByWithRelationInput
  }

  export type PortfolioItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    OR?: PortfolioItemWhereInput[]
    NOT?: PortfolioItemWhereInput | PortfolioItemWhereInput[]
    title?: StringFilter<"PortfolioItem"> | string
    url?: StringNullableFilter<"PortfolioItem"> | string | null
    images?: StringNullableFilter<"PortfolioItem"> | string | null
    profileId?: StringFilter<"PortfolioItem"> | string
    profile?: XOR<TalentProfileScalarRelationFilter, TalentProfileWhereInput>
  }, "id">

  export type PortfolioItemOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrderInput | SortOrder
    images?: SortOrderInput | SortOrder
    profileId?: SortOrder
    _count?: PortfolioItemCountOrderByAggregateInput
    _max?: PortfolioItemMaxOrderByAggregateInput
    _min?: PortfolioItemMinOrderByAggregateInput
  }

  export type PortfolioItemScalarWhereWithAggregatesInput = {
    AND?: PortfolioItemScalarWhereWithAggregatesInput | PortfolioItemScalarWhereWithAggregatesInput[]
    OR?: PortfolioItemScalarWhereWithAggregatesInput[]
    NOT?: PortfolioItemScalarWhereWithAggregatesInput | PortfolioItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"PortfolioItem"> | string
    title?: StringWithAggregatesFilter<"PortfolioItem"> | string
    url?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    images?: StringNullableWithAggregatesFilter<"PortfolioItem"> | string | null
    profileId?: StringWithAggregatesFilter<"PortfolioItem"> | string
  }

  export type CompanyProfileWhereInput = {
    AND?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    OR?: CompanyProfileWhereInput[]
    NOT?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    id?: StringFilter<"CompanyProfile"> | string
    userId?: StringFilter<"CompanyProfile"> | string
    companyName?: StringNullableFilter<"CompanyProfile"> | string | null
    description?: StringNullableFilter<"CompanyProfile"> | string | null
    website?: StringNullableFilter<"CompanyProfile"> | string | null
    interests?: StringNullableFilter<"CompanyProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    collaborations?: CollaborationListRelationFilter
  }

  export type CompanyProfileOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    collaborations?: CollaborationOrderByRelationAggregateInput
  }

  export type CompanyProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId?: string
    AND?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    OR?: CompanyProfileWhereInput[]
    NOT?: CompanyProfileWhereInput | CompanyProfileWhereInput[]
    companyName?: StringNullableFilter<"CompanyProfile"> | string | null
    description?: StringNullableFilter<"CompanyProfile"> | string | null
    website?: StringNullableFilter<"CompanyProfile"> | string | null
    interests?: StringNullableFilter<"CompanyProfile"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    collaborations?: CollaborationListRelationFilter
  }, "id" | "userId">

  export type CompanyProfileOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    interests?: SortOrderInput | SortOrder
    _count?: CompanyProfileCountOrderByAggregateInput
    _max?: CompanyProfileMaxOrderByAggregateInput
    _min?: CompanyProfileMinOrderByAggregateInput
  }

  export type CompanyProfileScalarWhereWithAggregatesInput = {
    AND?: CompanyProfileScalarWhereWithAggregatesInput | CompanyProfileScalarWhereWithAggregatesInput[]
    OR?: CompanyProfileScalarWhereWithAggregatesInput[]
    NOT?: CompanyProfileScalarWhereWithAggregatesInput | CompanyProfileScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CompanyProfile"> | string
    userId?: StringWithAggregatesFilter<"CompanyProfile"> | string
    companyName?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    description?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    website?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
    interests?: StringNullableWithAggregatesFilter<"CompanyProfile"> | string | null
  }

  export type CollaborationWhereInput = {
    AND?: CollaborationWhereInput | CollaborationWhereInput[]
    OR?: CollaborationWhereInput[]
    NOT?: CollaborationWhereInput | CollaborationWhereInput[]
    id?: StringFilter<"Collaboration"> | string
    talentId?: StringFilter<"Collaboration"> | string
    companyId?: StringFilter<"Collaboration"> | string
    jobTitle?: StringFilter<"Collaboration"> | string
    message?: StringFilter<"Collaboration"> | string
    salary?: StringNullableFilter<"Collaboration"> | string | null
    status?: StringFilter<"Collaboration"> | string
    createdAt?: DateTimeFilter<"Collaboration"> | Date | string
    updatedAt?: DateTimeFilter<"Collaboration"> | Date | string
    talent?: XOR<TalentProfileScalarRelationFilter, TalentProfileWhereInput>
    company?: XOR<CompanyProfileScalarRelationFilter, CompanyProfileWhereInput>
  }

  export type CollaborationOrderByWithRelationInput = {
    id?: SortOrder
    talentId?: SortOrder
    companyId?: SortOrder
    jobTitle?: SortOrder
    message?: SortOrder
    salary?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    talent?: TalentProfileOrderByWithRelationInput
    company?: CompanyProfileOrderByWithRelationInput
  }

  export type CollaborationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CollaborationWhereInput | CollaborationWhereInput[]
    OR?: CollaborationWhereInput[]
    NOT?: CollaborationWhereInput | CollaborationWhereInput[]
    talentId?: StringFilter<"Collaboration"> | string
    companyId?: StringFilter<"Collaboration"> | string
    jobTitle?: StringFilter<"Collaboration"> | string
    message?: StringFilter<"Collaboration"> | string
    salary?: StringNullableFilter<"Collaboration"> | string | null
    status?: StringFilter<"Collaboration"> | string
    createdAt?: DateTimeFilter<"Collaboration"> | Date | string
    updatedAt?: DateTimeFilter<"Collaboration"> | Date | string
    talent?: XOR<TalentProfileScalarRelationFilter, TalentProfileWhereInput>
    company?: XOR<CompanyProfileScalarRelationFilter, CompanyProfileWhereInput>
  }, "id">

  export type CollaborationOrderByWithAggregationInput = {
    id?: SortOrder
    talentId?: SortOrder
    companyId?: SortOrder
    jobTitle?: SortOrder
    message?: SortOrder
    salary?: SortOrderInput | SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CollaborationCountOrderByAggregateInput
    _max?: CollaborationMaxOrderByAggregateInput
    _min?: CollaborationMinOrderByAggregateInput
  }

  export type CollaborationScalarWhereWithAggregatesInput = {
    AND?: CollaborationScalarWhereWithAggregatesInput | CollaborationScalarWhereWithAggregatesInput[]
    OR?: CollaborationScalarWhereWithAggregatesInput[]
    NOT?: CollaborationScalarWhereWithAggregatesInput | CollaborationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Collaboration"> | string
    talentId?: StringWithAggregatesFilter<"Collaboration"> | string
    companyId?: StringWithAggregatesFilter<"Collaboration"> | string
    jobTitle?: StringWithAggregatesFilter<"Collaboration"> | string
    message?: StringWithAggregatesFilter<"Collaboration"> | string
    salary?: StringNullableWithAggregatesFilter<"Collaboration"> | string | null
    status?: StringWithAggregatesFilter<"Collaboration"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Collaboration"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Collaboration"> | Date | string
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    scope?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    scope?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    talentProfile?: TalentProfileCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    talentProfile?: TalentProfileUncheckedCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    talentProfile?: TalentProfileUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    talentProfile?: TalentProfileUncheckedUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TalentProfileCreateInput = {
    id?: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTalentProfileInput
    skills?: SkillCreateNestedManyWithoutProfileInput
    portfolio?: PortfolioItemCreateNestedManyWithoutProfileInput
    collaborations?: CollaborationCreateNestedManyWithoutTalentInput
  }

  export type TalentProfileUncheckedCreateInput = {
    id?: string
    userId: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    portfolio?: PortfolioItemUncheckedCreateNestedManyWithoutProfileInput
    collaborations?: CollaborationUncheckedCreateNestedManyWithoutTalentInput
  }

  export type TalentProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTalentProfileNestedInput
    skills?: SkillUpdateManyWithoutProfileNestedInput
    portfolio?: PortfolioItemUpdateManyWithoutProfileNestedInput
    collaborations?: CollaborationUpdateManyWithoutTalentNestedInput
  }

  export type TalentProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    portfolio?: PortfolioItemUncheckedUpdateManyWithoutProfileNestedInput
    collaborations?: CollaborationUncheckedUpdateManyWithoutTalentNestedInput
  }

  export type TalentProfileCreateManyInput = {
    id?: string
    userId: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type TalentProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type TalentProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateInput = {
    id?: string
    name: string
    profile: TalentProfileCreateNestedOneWithoutSkillsInput
  }

  export type SkillUncheckedCreateInput = {
    id?: string
    name: string
    profileId: string
  }

  export type SkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profile?: TalentProfileUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type SkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type SkillCreateManyInput = {
    id?: string
    name: string
    profileId: string
  }

  export type SkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioItemCreateInput = {
    id?: string
    title: string
    url?: string | null
    images?: string | null
    profile: TalentProfileCreateNestedOneWithoutPortfolioInput
  }

  export type PortfolioItemUncheckedCreateInput = {
    id?: string
    title: string
    url?: string | null
    images?: string | null
    profileId: string
  }

  export type PortfolioItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    profile?: TalentProfileUpdateOneRequiredWithoutPortfolioNestedInput
  }

  export type PortfolioItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioItemCreateManyInput = {
    id?: string
    title: string
    url?: string | null
    images?: string | null
    profileId: string
  }

  export type PortfolioItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
    profileId?: StringFieldUpdateOperationsInput | string
  }

  export type CompanyProfileCreateInput = {
    id?: string
    companyName?: string | null
    description?: string | null
    website?: string | null
    interests?: string | null
    user: UserCreateNestedOneWithoutCompanyProfileInput
    collaborations?: CollaborationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateInput = {
    id?: string
    userId: string
    companyName?: string | null
    description?: string | null
    website?: string | null
    interests?: string | null
    collaborations?: CollaborationUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompanyProfileNestedInput
    collaborations?: CollaborationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    collaborations?: CollaborationUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileCreateManyInput = {
    id?: string
    userId: string
    companyName?: string | null
    description?: string | null
    website?: string | null
    interests?: string | null
  }

  export type CompanyProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CompanyProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationCreateInput = {
    id?: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    talent: TalentProfileCreateNestedOneWithoutCollaborationsInput
    company: CompanyProfileCreateNestedOneWithoutCollaborationsInput
  }

  export type CollaborationUncheckedCreateInput = {
    id?: string
    talentId: string
    companyId: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talent?: TalentProfileUpdateOneRequiredWithoutCollaborationsNestedInput
    company?: CompanyProfileUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type CollaborationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    talentId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationCreateManyInput = {
    id?: string
    talentId: string
    companyId: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    talentId?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type TalentProfileNullableScalarRelationFilter = {
    is?: TalentProfileWhereInput | null
    isNot?: TalentProfileWhereInput | null
  }

  export type CompanyProfileNullableScalarRelationFilter = {
    is?: CompanyProfileWhereInput | null
    isNot?: CompanyProfileWhereInput | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    password?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SkillListRelationFilter = {
    every?: SkillWhereInput
    some?: SkillWhereInput
    none?: SkillWhereInput
  }

  export type PortfolioItemListRelationFilter = {
    every?: PortfolioItemWhereInput
    some?: PortfolioItemWhereInput
    none?: PortfolioItemWhereInput
  }

  export type CollaborationListRelationFilter = {
    every?: CollaborationWhereInput
    some?: CollaborationWhereInput
    none?: CollaborationWhereInput
  }

  export type SkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PortfolioItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CollaborationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TalentProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    title?: SortOrder
    location?: SortOrder
    website?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TalentProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    title?: SortOrder
    location?: SortOrder
    website?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TalentProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    bio?: SortOrder
    title?: SortOrder
    location?: SortOrder
    website?: SortOrder
    linkedin?: SortOrder
    github?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type TalentProfileScalarRelationFilter = {
    is?: TalentProfileWhereInput
    isNot?: TalentProfileWhereInput
  }

  export type SkillCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
  }

  export type SkillMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
  }

  export type SkillMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    profileId?: SortOrder
  }

  export type PortfolioItemCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    images?: SortOrder
    profileId?: SortOrder
  }

  export type PortfolioItemMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    images?: SortOrder
    profileId?: SortOrder
  }

  export type PortfolioItemMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    url?: SortOrder
    images?: SortOrder
    profileId?: SortOrder
  }

  export type CompanyProfileCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    website?: SortOrder
    interests?: SortOrder
  }

  export type CompanyProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    website?: SortOrder
    interests?: SortOrder
  }

  export type CompanyProfileMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    companyName?: SortOrder
    description?: SortOrder
    website?: SortOrder
    interests?: SortOrder
  }

  export type CompanyProfileScalarRelationFilter = {
    is?: CompanyProfileWhereInput
    isNot?: CompanyProfileWhereInput
  }

  export type CollaborationCountOrderByAggregateInput = {
    id?: SortOrder
    talentId?: SortOrder
    companyId?: SortOrder
    jobTitle?: SortOrder
    message?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaborationMaxOrderByAggregateInput = {
    id?: SortOrder
    talentId?: SortOrder
    companyId?: SortOrder
    jobTitle?: SortOrder
    message?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CollaborationMinOrderByAggregateInput = {
    id?: SortOrder
    talentId?: SortOrder
    companyId?: SortOrder
    jobTitle?: SortOrder
    message?: SortOrder
    salary?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    token_type?: SortOrder
    scope?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TalentProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<TalentProfileCreateWithoutUserInput, TalentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutUserInput
    connect?: TalentProfileWhereUniqueInput
  }

  export type CompanyProfileCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type TalentProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<TalentProfileCreateWithoutUserInput, TalentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutUserInput
    connect?: TalentProfileWhereUniqueInput
  }

  export type CompanyProfileUncheckedCreateNestedOneWithoutUserInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TalentProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<TalentProfileCreateWithoutUserInput, TalentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutUserInput
    upsert?: TalentProfileUpsertWithoutUserInput
    disconnect?: TalentProfileWhereInput | boolean
    delete?: TalentProfileWhereInput | boolean
    connect?: TalentProfileWhereUniqueInput
    update?: XOR<XOR<TalentProfileUpdateToOneWithWhereWithoutUserInput, TalentProfileUpdateWithoutUserInput>, TalentProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyProfileUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    upsert?: CompanyProfileUpsertWithoutUserInput
    disconnect?: CompanyProfileWhereInput | boolean
    delete?: CompanyProfileWhereInput | boolean
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutUserInput, CompanyProfileUpdateWithoutUserInput>, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type TalentProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<TalentProfileCreateWithoutUserInput, TalentProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutUserInput
    upsert?: TalentProfileUpsertWithoutUserInput
    disconnect?: TalentProfileWhereInput | boolean
    delete?: TalentProfileWhereInput | boolean
    connect?: TalentProfileWhereUniqueInput
    update?: XOR<XOR<TalentProfileUpdateToOneWithWhereWithoutUserInput, TalentProfileUpdateWithoutUserInput>, TalentProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyProfileUncheckedUpdateOneWithoutUserNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutUserInput
    upsert?: CompanyProfileUpsertWithoutUserInput
    disconnect?: CompanyProfileWhereInput | boolean
    delete?: CompanyProfileWhereInput | boolean
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutUserInput, CompanyProfileUpdateWithoutUserInput>, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type UserCreateNestedOneWithoutTalentProfileInput = {
    create?: XOR<UserCreateWithoutTalentProfileInput, UserUncheckedCreateWithoutTalentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTalentProfileInput
    connect?: UserWhereUniqueInput
  }

  export type SkillCreateNestedManyWithoutProfileInput = {
    create?: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput> | SkillCreateWithoutProfileInput[] | SkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfileInput | SkillCreateOrConnectWithoutProfileInput[]
    createMany?: SkillCreateManyProfileInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type PortfolioItemCreateNestedManyWithoutProfileInput = {
    create?: XOR<PortfolioItemCreateWithoutProfileInput, PortfolioItemUncheckedCreateWithoutProfileInput> | PortfolioItemCreateWithoutProfileInput[] | PortfolioItemUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutProfileInput | PortfolioItemCreateOrConnectWithoutProfileInput[]
    createMany?: PortfolioItemCreateManyProfileInputEnvelope
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
  }

  export type CollaborationCreateNestedManyWithoutTalentInput = {
    create?: XOR<CollaborationCreateWithoutTalentInput, CollaborationUncheckedCreateWithoutTalentInput> | CollaborationCreateWithoutTalentInput[] | CollaborationUncheckedCreateWithoutTalentInput[]
    connectOrCreate?: CollaborationCreateOrConnectWithoutTalentInput | CollaborationCreateOrConnectWithoutTalentInput[]
    createMany?: CollaborationCreateManyTalentInputEnvelope
    connect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
  }

  export type SkillUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput> | SkillCreateWithoutProfileInput[] | SkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfileInput | SkillCreateOrConnectWithoutProfileInput[]
    createMany?: SkillCreateManyProfileInputEnvelope
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
  }

  export type PortfolioItemUncheckedCreateNestedManyWithoutProfileInput = {
    create?: XOR<PortfolioItemCreateWithoutProfileInput, PortfolioItemUncheckedCreateWithoutProfileInput> | PortfolioItemCreateWithoutProfileInput[] | PortfolioItemUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutProfileInput | PortfolioItemCreateOrConnectWithoutProfileInput[]
    createMany?: PortfolioItemCreateManyProfileInputEnvelope
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
  }

  export type CollaborationUncheckedCreateNestedManyWithoutTalentInput = {
    create?: XOR<CollaborationCreateWithoutTalentInput, CollaborationUncheckedCreateWithoutTalentInput> | CollaborationCreateWithoutTalentInput[] | CollaborationUncheckedCreateWithoutTalentInput[]
    connectOrCreate?: CollaborationCreateOrConnectWithoutTalentInput | CollaborationCreateOrConnectWithoutTalentInput[]
    createMany?: CollaborationCreateManyTalentInputEnvelope
    connect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutTalentProfileNestedInput = {
    create?: XOR<UserCreateWithoutTalentProfileInput, UserUncheckedCreateWithoutTalentProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutTalentProfileInput
    upsert?: UserUpsertWithoutTalentProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutTalentProfileInput, UserUpdateWithoutTalentProfileInput>, UserUncheckedUpdateWithoutTalentProfileInput>
  }

  export type SkillUpdateManyWithoutProfileNestedInput = {
    create?: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput> | SkillCreateWithoutProfileInput[] | SkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfileInput | SkillCreateOrConnectWithoutProfileInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutProfileInput | SkillUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: SkillCreateManyProfileInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutProfileInput | SkillUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutProfileInput | SkillUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type PortfolioItemUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PortfolioItemCreateWithoutProfileInput, PortfolioItemUncheckedCreateWithoutProfileInput> | PortfolioItemCreateWithoutProfileInput[] | PortfolioItemUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutProfileInput | PortfolioItemCreateOrConnectWithoutProfileInput[]
    upsert?: PortfolioItemUpsertWithWhereUniqueWithoutProfileInput | PortfolioItemUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PortfolioItemCreateManyProfileInputEnvelope
    set?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    disconnect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    delete?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    update?: PortfolioItemUpdateWithWhereUniqueWithoutProfileInput | PortfolioItemUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PortfolioItemUpdateManyWithWhereWithoutProfileInput | PortfolioItemUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
  }

  export type CollaborationUpdateManyWithoutTalentNestedInput = {
    create?: XOR<CollaborationCreateWithoutTalentInput, CollaborationUncheckedCreateWithoutTalentInput> | CollaborationCreateWithoutTalentInput[] | CollaborationUncheckedCreateWithoutTalentInput[]
    connectOrCreate?: CollaborationCreateOrConnectWithoutTalentInput | CollaborationCreateOrConnectWithoutTalentInput[]
    upsert?: CollaborationUpsertWithWhereUniqueWithoutTalentInput | CollaborationUpsertWithWhereUniqueWithoutTalentInput[]
    createMany?: CollaborationCreateManyTalentInputEnvelope
    set?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    disconnect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    delete?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    connect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    update?: CollaborationUpdateWithWhereUniqueWithoutTalentInput | CollaborationUpdateWithWhereUniqueWithoutTalentInput[]
    updateMany?: CollaborationUpdateManyWithWhereWithoutTalentInput | CollaborationUpdateManyWithWhereWithoutTalentInput[]
    deleteMany?: CollaborationScalarWhereInput | CollaborationScalarWhereInput[]
  }

  export type SkillUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput> | SkillCreateWithoutProfileInput[] | SkillUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: SkillCreateOrConnectWithoutProfileInput | SkillCreateOrConnectWithoutProfileInput[]
    upsert?: SkillUpsertWithWhereUniqueWithoutProfileInput | SkillUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: SkillCreateManyProfileInputEnvelope
    set?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    disconnect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    delete?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    connect?: SkillWhereUniqueInput | SkillWhereUniqueInput[]
    update?: SkillUpdateWithWhereUniqueWithoutProfileInput | SkillUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: SkillUpdateManyWithWhereWithoutProfileInput | SkillUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: SkillScalarWhereInput | SkillScalarWhereInput[]
  }

  export type PortfolioItemUncheckedUpdateManyWithoutProfileNestedInput = {
    create?: XOR<PortfolioItemCreateWithoutProfileInput, PortfolioItemUncheckedCreateWithoutProfileInput> | PortfolioItemCreateWithoutProfileInput[] | PortfolioItemUncheckedCreateWithoutProfileInput[]
    connectOrCreate?: PortfolioItemCreateOrConnectWithoutProfileInput | PortfolioItemCreateOrConnectWithoutProfileInput[]
    upsert?: PortfolioItemUpsertWithWhereUniqueWithoutProfileInput | PortfolioItemUpsertWithWhereUniqueWithoutProfileInput[]
    createMany?: PortfolioItemCreateManyProfileInputEnvelope
    set?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    disconnect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    delete?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    connect?: PortfolioItemWhereUniqueInput | PortfolioItemWhereUniqueInput[]
    update?: PortfolioItemUpdateWithWhereUniqueWithoutProfileInput | PortfolioItemUpdateWithWhereUniqueWithoutProfileInput[]
    updateMany?: PortfolioItemUpdateManyWithWhereWithoutProfileInput | PortfolioItemUpdateManyWithWhereWithoutProfileInput[]
    deleteMany?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
  }

  export type CollaborationUncheckedUpdateManyWithoutTalentNestedInput = {
    create?: XOR<CollaborationCreateWithoutTalentInput, CollaborationUncheckedCreateWithoutTalentInput> | CollaborationCreateWithoutTalentInput[] | CollaborationUncheckedCreateWithoutTalentInput[]
    connectOrCreate?: CollaborationCreateOrConnectWithoutTalentInput | CollaborationCreateOrConnectWithoutTalentInput[]
    upsert?: CollaborationUpsertWithWhereUniqueWithoutTalentInput | CollaborationUpsertWithWhereUniqueWithoutTalentInput[]
    createMany?: CollaborationCreateManyTalentInputEnvelope
    set?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    disconnect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    delete?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    connect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    update?: CollaborationUpdateWithWhereUniqueWithoutTalentInput | CollaborationUpdateWithWhereUniqueWithoutTalentInput[]
    updateMany?: CollaborationUpdateManyWithWhereWithoutTalentInput | CollaborationUpdateManyWithWhereWithoutTalentInput[]
    deleteMany?: CollaborationScalarWhereInput | CollaborationScalarWhereInput[]
  }

  export type TalentProfileCreateNestedOneWithoutSkillsInput = {
    create?: XOR<TalentProfileCreateWithoutSkillsInput, TalentProfileUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutSkillsInput
    connect?: TalentProfileWhereUniqueInput
  }

  export type TalentProfileUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<TalentProfileCreateWithoutSkillsInput, TalentProfileUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutSkillsInput
    upsert?: TalentProfileUpsertWithoutSkillsInput
    connect?: TalentProfileWhereUniqueInput
    update?: XOR<XOR<TalentProfileUpdateToOneWithWhereWithoutSkillsInput, TalentProfileUpdateWithoutSkillsInput>, TalentProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type TalentProfileCreateNestedOneWithoutPortfolioInput = {
    create?: XOR<TalentProfileCreateWithoutPortfolioInput, TalentProfileUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutPortfolioInput
    connect?: TalentProfileWhereUniqueInput
  }

  export type TalentProfileUpdateOneRequiredWithoutPortfolioNestedInput = {
    create?: XOR<TalentProfileCreateWithoutPortfolioInput, TalentProfileUncheckedCreateWithoutPortfolioInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutPortfolioInput
    upsert?: TalentProfileUpsertWithoutPortfolioInput
    connect?: TalentProfileWhereUniqueInput
    update?: XOR<XOR<TalentProfileUpdateToOneWithWhereWithoutPortfolioInput, TalentProfileUpdateWithoutPortfolioInput>, TalentProfileUncheckedUpdateWithoutPortfolioInput>
  }

  export type UserCreateNestedOneWithoutCompanyProfileInput = {
    create?: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyProfileInput
    connect?: UserWhereUniqueInput
  }

  export type CollaborationCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CollaborationCreateWithoutCompanyInput, CollaborationUncheckedCreateWithoutCompanyInput> | CollaborationCreateWithoutCompanyInput[] | CollaborationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CollaborationCreateOrConnectWithoutCompanyInput | CollaborationCreateOrConnectWithoutCompanyInput[]
    createMany?: CollaborationCreateManyCompanyInputEnvelope
    connect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
  }

  export type CollaborationUncheckedCreateNestedManyWithoutCompanyInput = {
    create?: XOR<CollaborationCreateWithoutCompanyInput, CollaborationUncheckedCreateWithoutCompanyInput> | CollaborationCreateWithoutCompanyInput[] | CollaborationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CollaborationCreateOrConnectWithoutCompanyInput | CollaborationCreateOrConnectWithoutCompanyInput[]
    createMany?: CollaborationCreateManyCompanyInputEnvelope
    connect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutCompanyProfileNestedInput = {
    create?: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    connectOrCreate?: UserCreateOrConnectWithoutCompanyProfileInput
    upsert?: UserUpsertWithoutCompanyProfileInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCompanyProfileInput, UserUpdateWithoutCompanyProfileInput>, UserUncheckedUpdateWithoutCompanyProfileInput>
  }

  export type CollaborationUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CollaborationCreateWithoutCompanyInput, CollaborationUncheckedCreateWithoutCompanyInput> | CollaborationCreateWithoutCompanyInput[] | CollaborationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CollaborationCreateOrConnectWithoutCompanyInput | CollaborationCreateOrConnectWithoutCompanyInput[]
    upsert?: CollaborationUpsertWithWhereUniqueWithoutCompanyInput | CollaborationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CollaborationCreateManyCompanyInputEnvelope
    set?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    disconnect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    delete?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    connect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    update?: CollaborationUpdateWithWhereUniqueWithoutCompanyInput | CollaborationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CollaborationUpdateManyWithWhereWithoutCompanyInput | CollaborationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CollaborationScalarWhereInput | CollaborationScalarWhereInput[]
  }

  export type CollaborationUncheckedUpdateManyWithoutCompanyNestedInput = {
    create?: XOR<CollaborationCreateWithoutCompanyInput, CollaborationUncheckedCreateWithoutCompanyInput> | CollaborationCreateWithoutCompanyInput[] | CollaborationUncheckedCreateWithoutCompanyInput[]
    connectOrCreate?: CollaborationCreateOrConnectWithoutCompanyInput | CollaborationCreateOrConnectWithoutCompanyInput[]
    upsert?: CollaborationUpsertWithWhereUniqueWithoutCompanyInput | CollaborationUpsertWithWhereUniqueWithoutCompanyInput[]
    createMany?: CollaborationCreateManyCompanyInputEnvelope
    set?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    disconnect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    delete?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    connect?: CollaborationWhereUniqueInput | CollaborationWhereUniqueInput[]
    update?: CollaborationUpdateWithWhereUniqueWithoutCompanyInput | CollaborationUpdateWithWhereUniqueWithoutCompanyInput[]
    updateMany?: CollaborationUpdateManyWithWhereWithoutCompanyInput | CollaborationUpdateManyWithWhereWithoutCompanyInput[]
    deleteMany?: CollaborationScalarWhereInput | CollaborationScalarWhereInput[]
  }

  export type TalentProfileCreateNestedOneWithoutCollaborationsInput = {
    create?: XOR<TalentProfileCreateWithoutCollaborationsInput, TalentProfileUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutCollaborationsInput
    connect?: TalentProfileWhereUniqueInput
  }

  export type CompanyProfileCreateNestedOneWithoutCollaborationsInput = {
    create?: XOR<CompanyProfileCreateWithoutCollaborationsInput, CompanyProfileUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutCollaborationsInput
    connect?: CompanyProfileWhereUniqueInput
  }

  export type TalentProfileUpdateOneRequiredWithoutCollaborationsNestedInput = {
    create?: XOR<TalentProfileCreateWithoutCollaborationsInput, TalentProfileUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: TalentProfileCreateOrConnectWithoutCollaborationsInput
    upsert?: TalentProfileUpsertWithoutCollaborationsInput
    connect?: TalentProfileWhereUniqueInput
    update?: XOR<XOR<TalentProfileUpdateToOneWithWhereWithoutCollaborationsInput, TalentProfileUpdateWithoutCollaborationsInput>, TalentProfileUncheckedUpdateWithoutCollaborationsInput>
  }

  export type CompanyProfileUpdateOneRequiredWithoutCollaborationsNestedInput = {
    create?: XOR<CompanyProfileCreateWithoutCollaborationsInput, CompanyProfileUncheckedCreateWithoutCollaborationsInput>
    connectOrCreate?: CompanyProfileCreateOrConnectWithoutCollaborationsInput
    upsert?: CompanyProfileUpsertWithoutCollaborationsInput
    connect?: CompanyProfileWhereUniqueInput
    update?: XOR<XOR<CompanyProfileUpdateToOneWithWhereWithoutCollaborationsInput, CompanyProfileUpdateWithoutCollaborationsInput>, CompanyProfileUncheckedUpdateWithoutCollaborationsInput>
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | null
    notIn?: Date[] | string[] | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
  }

  export type TalentProfileCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillCreateNestedManyWithoutProfileInput
    portfolio?: PortfolioItemCreateNestedManyWithoutProfileInput
    collaborations?: CollaborationCreateNestedManyWithoutTalentInput
  }

  export type TalentProfileUncheckedCreateWithoutUserInput = {
    id?: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    portfolio?: PortfolioItemUncheckedCreateNestedManyWithoutProfileInput
    collaborations?: CollaborationUncheckedCreateNestedManyWithoutTalentInput
  }

  export type TalentProfileCreateOrConnectWithoutUserInput = {
    where: TalentProfileWhereUniqueInput
    create: XOR<TalentProfileCreateWithoutUserInput, TalentProfileUncheckedCreateWithoutUserInput>
  }

  export type CompanyProfileCreateWithoutUserInput = {
    id?: string
    companyName?: string | null
    description?: string | null
    website?: string | null
    interests?: string | null
    collaborations?: CollaborationCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileUncheckedCreateWithoutUserInput = {
    id?: string
    companyName?: string | null
    description?: string | null
    website?: string | null
    interests?: string | null
    collaborations?: CollaborationUncheckedCreateNestedManyWithoutCompanyInput
  }

  export type CompanyProfileCreateOrConnectWithoutUserInput = {
    where: CompanyProfileWhereUniqueInput
    create: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    scope?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type TalentProfileUpsertWithoutUserInput = {
    update: XOR<TalentProfileUpdateWithoutUserInput, TalentProfileUncheckedUpdateWithoutUserInput>
    create: XOR<TalentProfileCreateWithoutUserInput, TalentProfileUncheckedCreateWithoutUserInput>
    where?: TalentProfileWhereInput
  }

  export type TalentProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: TalentProfileWhereInput
    data: XOR<TalentProfileUpdateWithoutUserInput, TalentProfileUncheckedUpdateWithoutUserInput>
  }

  export type TalentProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUpdateManyWithoutProfileNestedInput
    portfolio?: PortfolioItemUpdateManyWithoutProfileNestedInput
    collaborations?: CollaborationUpdateManyWithoutTalentNestedInput
  }

  export type TalentProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    portfolio?: PortfolioItemUncheckedUpdateManyWithoutProfileNestedInput
    collaborations?: CollaborationUncheckedUpdateManyWithoutTalentNestedInput
  }

  export type CompanyProfileUpsertWithoutUserInput = {
    update: XOR<CompanyProfileUpdateWithoutUserInput, CompanyProfileUncheckedUpdateWithoutUserInput>
    create: XOR<CompanyProfileCreateWithoutUserInput, CompanyProfileUncheckedCreateWithoutUserInput>
    where?: CompanyProfileWhereInput
  }

  export type CompanyProfileUpdateToOneWithWhereWithoutUserInput = {
    where?: CompanyProfileWhereInput
    data: XOR<CompanyProfileUpdateWithoutUserInput, CompanyProfileUncheckedUpdateWithoutUserInput>
  }

  export type CompanyProfileUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    collaborations?: CollaborationUpdateManyWithoutCompanyNestedInput
  }

  export type CompanyProfileUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    collaborations?: CollaborationUncheckedUpdateManyWithoutCompanyNestedInput
  }

  export type UserCreateWithoutTalentProfileInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutTalentProfileInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutTalentProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutTalentProfileInput, UserUncheckedCreateWithoutTalentProfileInput>
  }

  export type SkillCreateWithoutProfileInput = {
    id?: string
    name: string
  }

  export type SkillUncheckedCreateWithoutProfileInput = {
    id?: string
    name: string
  }

  export type SkillCreateOrConnectWithoutProfileInput = {
    where: SkillWhereUniqueInput
    create: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput>
  }

  export type SkillCreateManyProfileInputEnvelope = {
    data: SkillCreateManyProfileInput | SkillCreateManyProfileInput[]
  }

  export type PortfolioItemCreateWithoutProfileInput = {
    id?: string
    title: string
    url?: string | null
    images?: string | null
  }

  export type PortfolioItemUncheckedCreateWithoutProfileInput = {
    id?: string
    title: string
    url?: string | null
    images?: string | null
  }

  export type PortfolioItemCreateOrConnectWithoutProfileInput = {
    where: PortfolioItemWhereUniqueInput
    create: XOR<PortfolioItemCreateWithoutProfileInput, PortfolioItemUncheckedCreateWithoutProfileInput>
  }

  export type PortfolioItemCreateManyProfileInputEnvelope = {
    data: PortfolioItemCreateManyProfileInput | PortfolioItemCreateManyProfileInput[]
  }

  export type CollaborationCreateWithoutTalentInput = {
    id?: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    company: CompanyProfileCreateNestedOneWithoutCollaborationsInput
  }

  export type CollaborationUncheckedCreateWithoutTalentInput = {
    id?: string
    companyId: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationCreateOrConnectWithoutTalentInput = {
    where: CollaborationWhereUniqueInput
    create: XOR<CollaborationCreateWithoutTalentInput, CollaborationUncheckedCreateWithoutTalentInput>
  }

  export type CollaborationCreateManyTalentInputEnvelope = {
    data: CollaborationCreateManyTalentInput | CollaborationCreateManyTalentInput[]
  }

  export type UserUpsertWithoutTalentProfileInput = {
    update: XOR<UserUpdateWithoutTalentProfileInput, UserUncheckedUpdateWithoutTalentProfileInput>
    create: XOR<UserCreateWithoutTalentProfileInput, UserUncheckedCreateWithoutTalentProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutTalentProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutTalentProfileInput, UserUncheckedUpdateWithoutTalentProfileInput>
  }

  export type UserUpdateWithoutTalentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutTalentProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type SkillUpsertWithWhereUniqueWithoutProfileInput = {
    where: SkillWhereUniqueInput
    update: XOR<SkillUpdateWithoutProfileInput, SkillUncheckedUpdateWithoutProfileInput>
    create: XOR<SkillCreateWithoutProfileInput, SkillUncheckedCreateWithoutProfileInput>
  }

  export type SkillUpdateWithWhereUniqueWithoutProfileInput = {
    where: SkillWhereUniqueInput
    data: XOR<SkillUpdateWithoutProfileInput, SkillUncheckedUpdateWithoutProfileInput>
  }

  export type SkillUpdateManyWithWhereWithoutProfileInput = {
    where: SkillScalarWhereInput
    data: XOR<SkillUpdateManyMutationInput, SkillUncheckedUpdateManyWithoutProfileInput>
  }

  export type SkillScalarWhereInput = {
    AND?: SkillScalarWhereInput | SkillScalarWhereInput[]
    OR?: SkillScalarWhereInput[]
    NOT?: SkillScalarWhereInput | SkillScalarWhereInput[]
    id?: StringFilter<"Skill"> | string
    name?: StringFilter<"Skill"> | string
    profileId?: StringFilter<"Skill"> | string
  }

  export type PortfolioItemUpsertWithWhereUniqueWithoutProfileInput = {
    where: PortfolioItemWhereUniqueInput
    update: XOR<PortfolioItemUpdateWithoutProfileInput, PortfolioItemUncheckedUpdateWithoutProfileInput>
    create: XOR<PortfolioItemCreateWithoutProfileInput, PortfolioItemUncheckedCreateWithoutProfileInput>
  }

  export type PortfolioItemUpdateWithWhereUniqueWithoutProfileInput = {
    where: PortfolioItemWhereUniqueInput
    data: XOR<PortfolioItemUpdateWithoutProfileInput, PortfolioItemUncheckedUpdateWithoutProfileInput>
  }

  export type PortfolioItemUpdateManyWithWhereWithoutProfileInput = {
    where: PortfolioItemScalarWhereInput
    data: XOR<PortfolioItemUpdateManyMutationInput, PortfolioItemUncheckedUpdateManyWithoutProfileInput>
  }

  export type PortfolioItemScalarWhereInput = {
    AND?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
    OR?: PortfolioItemScalarWhereInput[]
    NOT?: PortfolioItemScalarWhereInput | PortfolioItemScalarWhereInput[]
    id?: StringFilter<"PortfolioItem"> | string
    title?: StringFilter<"PortfolioItem"> | string
    url?: StringNullableFilter<"PortfolioItem"> | string | null
    images?: StringNullableFilter<"PortfolioItem"> | string | null
    profileId?: StringFilter<"PortfolioItem"> | string
  }

  export type CollaborationUpsertWithWhereUniqueWithoutTalentInput = {
    where: CollaborationWhereUniqueInput
    update: XOR<CollaborationUpdateWithoutTalentInput, CollaborationUncheckedUpdateWithoutTalentInput>
    create: XOR<CollaborationCreateWithoutTalentInput, CollaborationUncheckedCreateWithoutTalentInput>
  }

  export type CollaborationUpdateWithWhereUniqueWithoutTalentInput = {
    where: CollaborationWhereUniqueInput
    data: XOR<CollaborationUpdateWithoutTalentInput, CollaborationUncheckedUpdateWithoutTalentInput>
  }

  export type CollaborationUpdateManyWithWhereWithoutTalentInput = {
    where: CollaborationScalarWhereInput
    data: XOR<CollaborationUpdateManyMutationInput, CollaborationUncheckedUpdateManyWithoutTalentInput>
  }

  export type CollaborationScalarWhereInput = {
    AND?: CollaborationScalarWhereInput | CollaborationScalarWhereInput[]
    OR?: CollaborationScalarWhereInput[]
    NOT?: CollaborationScalarWhereInput | CollaborationScalarWhereInput[]
    id?: StringFilter<"Collaboration"> | string
    talentId?: StringFilter<"Collaboration"> | string
    companyId?: StringFilter<"Collaboration"> | string
    jobTitle?: StringFilter<"Collaboration"> | string
    message?: StringFilter<"Collaboration"> | string
    salary?: StringNullableFilter<"Collaboration"> | string | null
    status?: StringFilter<"Collaboration"> | string
    createdAt?: DateTimeFilter<"Collaboration"> | Date | string
    updatedAt?: DateTimeFilter<"Collaboration"> | Date | string
  }

  export type TalentProfileCreateWithoutSkillsInput = {
    id?: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTalentProfileInput
    portfolio?: PortfolioItemCreateNestedManyWithoutProfileInput
    collaborations?: CollaborationCreateNestedManyWithoutTalentInput
  }

  export type TalentProfileUncheckedCreateWithoutSkillsInput = {
    id?: string
    userId: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    portfolio?: PortfolioItemUncheckedCreateNestedManyWithoutProfileInput
    collaborations?: CollaborationUncheckedCreateNestedManyWithoutTalentInput
  }

  export type TalentProfileCreateOrConnectWithoutSkillsInput = {
    where: TalentProfileWhereUniqueInput
    create: XOR<TalentProfileCreateWithoutSkillsInput, TalentProfileUncheckedCreateWithoutSkillsInput>
  }

  export type TalentProfileUpsertWithoutSkillsInput = {
    update: XOR<TalentProfileUpdateWithoutSkillsInput, TalentProfileUncheckedUpdateWithoutSkillsInput>
    create: XOR<TalentProfileCreateWithoutSkillsInput, TalentProfileUncheckedCreateWithoutSkillsInput>
    where?: TalentProfileWhereInput
  }

  export type TalentProfileUpdateToOneWithWhereWithoutSkillsInput = {
    where?: TalentProfileWhereInput
    data: XOR<TalentProfileUpdateWithoutSkillsInput, TalentProfileUncheckedUpdateWithoutSkillsInput>
  }

  export type TalentProfileUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTalentProfileNestedInput
    portfolio?: PortfolioItemUpdateManyWithoutProfileNestedInput
    collaborations?: CollaborationUpdateManyWithoutTalentNestedInput
  }

  export type TalentProfileUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    portfolio?: PortfolioItemUncheckedUpdateManyWithoutProfileNestedInput
    collaborations?: CollaborationUncheckedUpdateManyWithoutTalentNestedInput
  }

  export type TalentProfileCreateWithoutPortfolioInput = {
    id?: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTalentProfileInput
    skills?: SkillCreateNestedManyWithoutProfileInput
    collaborations?: CollaborationCreateNestedManyWithoutTalentInput
  }

  export type TalentProfileUncheckedCreateWithoutPortfolioInput = {
    id?: string
    userId: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    collaborations?: CollaborationUncheckedCreateNestedManyWithoutTalentInput
  }

  export type TalentProfileCreateOrConnectWithoutPortfolioInput = {
    where: TalentProfileWhereUniqueInput
    create: XOR<TalentProfileCreateWithoutPortfolioInput, TalentProfileUncheckedCreateWithoutPortfolioInput>
  }

  export type TalentProfileUpsertWithoutPortfolioInput = {
    update: XOR<TalentProfileUpdateWithoutPortfolioInput, TalentProfileUncheckedUpdateWithoutPortfolioInput>
    create: XOR<TalentProfileCreateWithoutPortfolioInput, TalentProfileUncheckedCreateWithoutPortfolioInput>
    where?: TalentProfileWhereInput
  }

  export type TalentProfileUpdateToOneWithWhereWithoutPortfolioInput = {
    where?: TalentProfileWhereInput
    data: XOR<TalentProfileUpdateWithoutPortfolioInput, TalentProfileUncheckedUpdateWithoutPortfolioInput>
  }

  export type TalentProfileUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTalentProfileNestedInput
    skills?: SkillUpdateManyWithoutProfileNestedInput
    collaborations?: CollaborationUpdateManyWithoutTalentNestedInput
  }

  export type TalentProfileUncheckedUpdateWithoutPortfolioInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    collaborations?: CollaborationUncheckedUpdateManyWithoutTalentNestedInput
  }

  export type UserCreateWithoutCompanyProfileInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    talentProfile?: TalentProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutCompanyProfileInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    talentProfile?: TalentProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutCompanyProfileInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
  }

  export type CollaborationCreateWithoutCompanyInput = {
    id?: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    talent: TalentProfileCreateNestedOneWithoutCollaborationsInput
  }

  export type CollaborationUncheckedCreateWithoutCompanyInput = {
    id?: string
    talentId: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationCreateOrConnectWithoutCompanyInput = {
    where: CollaborationWhereUniqueInput
    create: XOR<CollaborationCreateWithoutCompanyInput, CollaborationUncheckedCreateWithoutCompanyInput>
  }

  export type CollaborationCreateManyCompanyInputEnvelope = {
    data: CollaborationCreateManyCompanyInput | CollaborationCreateManyCompanyInput[]
  }

  export type UserUpsertWithoutCompanyProfileInput = {
    update: XOR<UserUpdateWithoutCompanyProfileInput, UserUncheckedUpdateWithoutCompanyProfileInput>
    create: XOR<UserCreateWithoutCompanyProfileInput, UserUncheckedCreateWithoutCompanyProfileInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCompanyProfileInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCompanyProfileInput, UserUncheckedUpdateWithoutCompanyProfileInput>
  }

  export type UserUpdateWithoutCompanyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    talentProfile?: TalentProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutCompanyProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    talentProfile?: TalentProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type CollaborationUpsertWithWhereUniqueWithoutCompanyInput = {
    where: CollaborationWhereUniqueInput
    update: XOR<CollaborationUpdateWithoutCompanyInput, CollaborationUncheckedUpdateWithoutCompanyInput>
    create: XOR<CollaborationCreateWithoutCompanyInput, CollaborationUncheckedCreateWithoutCompanyInput>
  }

  export type CollaborationUpdateWithWhereUniqueWithoutCompanyInput = {
    where: CollaborationWhereUniqueInput
    data: XOR<CollaborationUpdateWithoutCompanyInput, CollaborationUncheckedUpdateWithoutCompanyInput>
  }

  export type CollaborationUpdateManyWithWhereWithoutCompanyInput = {
    where: CollaborationScalarWhereInput
    data: XOR<CollaborationUpdateManyMutationInput, CollaborationUncheckedUpdateManyWithoutCompanyInput>
  }

  export type TalentProfileCreateWithoutCollaborationsInput = {
    id?: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutTalentProfileInput
    skills?: SkillCreateNestedManyWithoutProfileInput
    portfolio?: PortfolioItemCreateNestedManyWithoutProfileInput
  }

  export type TalentProfileUncheckedCreateWithoutCollaborationsInput = {
    id?: string
    userId: string
    bio?: string | null
    title?: string | null
    location?: string | null
    website?: string | null
    linkedin?: string | null
    github?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: SkillUncheckedCreateNestedManyWithoutProfileInput
    portfolio?: PortfolioItemUncheckedCreateNestedManyWithoutProfileInput
  }

  export type TalentProfileCreateOrConnectWithoutCollaborationsInput = {
    where: TalentProfileWhereUniqueInput
    create: XOR<TalentProfileCreateWithoutCollaborationsInput, TalentProfileUncheckedCreateWithoutCollaborationsInput>
  }

  export type CompanyProfileCreateWithoutCollaborationsInput = {
    id?: string
    companyName?: string | null
    description?: string | null
    website?: string | null
    interests?: string | null
    user: UserCreateNestedOneWithoutCompanyProfileInput
  }

  export type CompanyProfileUncheckedCreateWithoutCollaborationsInput = {
    id?: string
    userId: string
    companyName?: string | null
    description?: string | null
    website?: string | null
    interests?: string | null
  }

  export type CompanyProfileCreateOrConnectWithoutCollaborationsInput = {
    where: CompanyProfileWhereUniqueInput
    create: XOR<CompanyProfileCreateWithoutCollaborationsInput, CompanyProfileUncheckedCreateWithoutCollaborationsInput>
  }

  export type TalentProfileUpsertWithoutCollaborationsInput = {
    update: XOR<TalentProfileUpdateWithoutCollaborationsInput, TalentProfileUncheckedUpdateWithoutCollaborationsInput>
    create: XOR<TalentProfileCreateWithoutCollaborationsInput, TalentProfileUncheckedCreateWithoutCollaborationsInput>
    where?: TalentProfileWhereInput
  }

  export type TalentProfileUpdateToOneWithWhereWithoutCollaborationsInput = {
    where?: TalentProfileWhereInput
    data: XOR<TalentProfileUpdateWithoutCollaborationsInput, TalentProfileUncheckedUpdateWithoutCollaborationsInput>
  }

  export type TalentProfileUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutTalentProfileNestedInput
    skills?: SkillUpdateManyWithoutProfileNestedInput
    portfolio?: PortfolioItemUpdateManyWithoutProfileNestedInput
  }

  export type TalentProfileUncheckedUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    title?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    linkedin?: NullableStringFieldUpdateOperationsInput | string | null
    github?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: SkillUncheckedUpdateManyWithoutProfileNestedInput
    portfolio?: PortfolioItemUncheckedUpdateManyWithoutProfileNestedInput
  }

  export type CompanyProfileUpsertWithoutCollaborationsInput = {
    update: XOR<CompanyProfileUpdateWithoutCollaborationsInput, CompanyProfileUncheckedUpdateWithoutCollaborationsInput>
    create: XOR<CompanyProfileCreateWithoutCollaborationsInput, CompanyProfileUncheckedCreateWithoutCollaborationsInput>
    where?: CompanyProfileWhereInput
  }

  export type CompanyProfileUpdateToOneWithWhereWithoutCollaborationsInput = {
    where?: CompanyProfileWhereInput
    data: XOR<CompanyProfileUpdateWithoutCollaborationsInput, CompanyProfileUncheckedUpdateWithoutCollaborationsInput>
  }

  export type CompanyProfileUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutCompanyProfileNestedInput
  }

  export type CompanyProfileUncheckedUpdateWithoutCollaborationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    companyName?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    interests?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionCreateNestedManyWithoutUserInput
    talentProfile?: TalentProfileCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    talentProfile?: TalentProfileUncheckedCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUpdateManyWithoutUserNestedInput
    talentProfile?: TalentProfileUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    talentProfile?: TalentProfileUncheckedUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountCreateNestedManyWithoutUserInput
    talentProfile?: TalentProfileCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileCreateNestedOneWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email: string
    emailVerified?: Date | string | null
    image?: string | null
    password?: string | null
    role?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    talentProfile?: TalentProfileUncheckedCreateNestedOneWithoutUserInput
    companyProfile?: CompanyProfileUncheckedCreateNestedOneWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUpdateManyWithoutUserNestedInput
    talentProfile?: TalentProfileUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUpdateOneWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    password?: NullableStringFieldUpdateOperationsInput | string | null
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    talentProfile?: TalentProfileUncheckedUpdateOneWithoutUserNestedInput
    companyProfile?: CompanyProfileUncheckedUpdateOneWithoutUserNestedInput
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    token_type?: string | null
    scope?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    scope?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SkillCreateManyProfileInput = {
    id?: string
    name: string
  }

  export type PortfolioItemCreateManyProfileInput = {
    id?: string
    title: string
    url?: string | null
    images?: string | null
  }

  export type CollaborationCreateManyTalentInput = {
    id?: string
    companyId: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SkillUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type SkillUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type PortfolioItemUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioItemUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PortfolioItemUncheckedUpdateManyWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    url?: NullableStringFieldUpdateOperationsInput | string | null
    images?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CollaborationUpdateWithoutTalentInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    company?: CompanyProfileUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type CollaborationUncheckedUpdateWithoutTalentInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationUncheckedUpdateManyWithoutTalentInput = {
    id?: StringFieldUpdateOperationsInput | string
    companyId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationCreateManyCompanyInput = {
    id?: string
    talentId: string
    jobTitle: string
    message: string
    salary?: string | null
    status?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CollaborationUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    talent?: TalentProfileUpdateOneRequiredWithoutCollaborationsNestedInput
  }

  export type CollaborationUncheckedUpdateWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    talentId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CollaborationUncheckedUpdateManyWithoutCompanyInput = {
    id?: StringFieldUpdateOperationsInput | string
    talentId?: StringFieldUpdateOperationsInput | string
    jobTitle?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    salary?: NullableStringFieldUpdateOperationsInput | string | null
    status?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}
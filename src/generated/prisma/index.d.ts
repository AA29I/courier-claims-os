
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Workspace
 * 
 */
export type Workspace = $Result.DefaultSelection<Prisma.$WorkspacePayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Courier
 * 
 */
export type Courier = $Result.DefaultSelection<Prisma.$CourierPayload>
/**
 * Model Shipment
 * 
 */
export type Shipment = $Result.DefaultSelection<Prisma.$ShipmentPayload>
/**
 * Model CourierQuery
 * 
 */
export type CourierQuery = $Result.DefaultSelection<Prisma.$CourierQueryPayload>
/**
 * Model ClaimInvoice
 * 
 */
export type ClaimInvoice = $Result.DefaultSelection<Prisma.$ClaimInvoicePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Workspaces
 * const workspaces = await prisma.workspace.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Workspaces
   * const workspaces = await prisma.workspace.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.workspace`: Exposes CRUD operations for the **Workspace** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Workspaces
    * const workspaces = await prisma.workspace.findMany()
    * ```
    */
  get workspace(): Prisma.WorkspaceDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.courier`: Exposes CRUD operations for the **Courier** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Couriers
    * const couriers = await prisma.courier.findMany()
    * ```
    */
  get courier(): Prisma.CourierDelegate<ExtArgs>;

  /**
   * `prisma.shipment`: Exposes CRUD operations for the **Shipment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shipments
    * const shipments = await prisma.shipment.findMany()
    * ```
    */
  get shipment(): Prisma.ShipmentDelegate<ExtArgs>;

  /**
   * `prisma.courierQuery`: Exposes CRUD operations for the **CourierQuery** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CourierQueries
    * const courierQueries = await prisma.courierQuery.findMany()
    * ```
    */
  get courierQuery(): Prisma.CourierQueryDelegate<ExtArgs>;

  /**
   * `prisma.claimInvoice`: Exposes CRUD operations for the **ClaimInvoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ClaimInvoices
    * const claimInvoices = await prisma.claimInvoice.findMany()
    * ```
    */
  get claimInvoice(): Prisma.ClaimInvoiceDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 5.21.1
   * Query Engine version: bf0e5e8a04cada8225617067eaa03d041e2bba36
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


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
      (Without<T, U> & U) | (Without<U, T> & T)
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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Workspace: 'Workspace',
    User: 'User',
    Courier: 'Courier',
    Shipment: 'Shipment',
    CourierQuery: 'CourierQuery',
    ClaimInvoice: 'ClaimInvoice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "workspace" | "user" | "courier" | "shipment" | "courierQuery" | "claimInvoice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Workspace: {
        payload: Prisma.$WorkspacePayload<ExtArgs>
        fields: Prisma.WorkspaceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.WorkspaceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.WorkspaceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findFirst: {
            args: Prisma.WorkspaceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.WorkspaceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          findMany: {
            args: Prisma.WorkspaceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          create: {
            args: Prisma.WorkspaceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          createMany: {
            args: Prisma.WorkspaceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.WorkspaceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>[]
          }
          delete: {
            args: Prisma.WorkspaceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          update: {
            args: Prisma.WorkspaceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          deleteMany: {
            args: Prisma.WorkspaceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.WorkspaceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.WorkspaceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$WorkspacePayload>
          }
          aggregate: {
            args: Prisma.WorkspaceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateWorkspace>
          }
          groupBy: {
            args: Prisma.WorkspaceGroupByArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceGroupByOutputType>[]
          }
          count: {
            args: Prisma.WorkspaceCountArgs<ExtArgs>
            result: $Utils.Optional<WorkspaceCountAggregateOutputType> | number
          }
        }
      }
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
      Courier: {
        payload: Prisma.$CourierPayload<ExtArgs>
        fields: Prisma.CourierFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourierFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourierFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          findFirst: {
            args: Prisma.CourierFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourierFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          findMany: {
            args: Prisma.CourierFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>[]
          }
          create: {
            args: Prisma.CourierCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          createMany: {
            args: Prisma.CourierCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourierCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>[]
          }
          delete: {
            args: Prisma.CourierDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          update: {
            args: Prisma.CourierUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          deleteMany: {
            args: Prisma.CourierDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourierUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourierUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierPayload>
          }
          aggregate: {
            args: Prisma.CourierAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourier>
          }
          groupBy: {
            args: Prisma.CourierGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourierGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourierCountArgs<ExtArgs>
            result: $Utils.Optional<CourierCountAggregateOutputType> | number
          }
        }
      }
      Shipment: {
        payload: Prisma.$ShipmentPayload<ExtArgs>
        fields: Prisma.ShipmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShipmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShipmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findFirst: {
            args: Prisma.ShipmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShipmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          findMany: {
            args: Prisma.ShipmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          create: {
            args: Prisma.ShipmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          createMany: {
            args: Prisma.ShipmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShipmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>[]
          }
          delete: {
            args: Prisma.ShipmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          update: {
            args: Prisma.ShipmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          deleteMany: {
            args: Prisma.ShipmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShipmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ShipmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShipmentPayload>
          }
          aggregate: {
            args: Prisma.ShipmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShipment>
          }
          groupBy: {
            args: Prisma.ShipmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShipmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShipmentCountArgs<ExtArgs>
            result: $Utils.Optional<ShipmentCountAggregateOutputType> | number
          }
        }
      }
      CourierQuery: {
        payload: Prisma.$CourierQueryPayload<ExtArgs>
        fields: Prisma.CourierQueryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CourierQueryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CourierQueryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload>
          }
          findFirst: {
            args: Prisma.CourierQueryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CourierQueryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload>
          }
          findMany: {
            args: Prisma.CourierQueryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload>[]
          }
          create: {
            args: Prisma.CourierQueryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload>
          }
          createMany: {
            args: Prisma.CourierQueryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CourierQueryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload>[]
          }
          delete: {
            args: Prisma.CourierQueryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload>
          }
          update: {
            args: Prisma.CourierQueryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload>
          }
          deleteMany: {
            args: Prisma.CourierQueryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CourierQueryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.CourierQueryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CourierQueryPayload>
          }
          aggregate: {
            args: Prisma.CourierQueryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCourierQuery>
          }
          groupBy: {
            args: Prisma.CourierQueryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CourierQueryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CourierQueryCountArgs<ExtArgs>
            result: $Utils.Optional<CourierQueryCountAggregateOutputType> | number
          }
        }
      }
      ClaimInvoice: {
        payload: Prisma.$ClaimInvoicePayload<ExtArgs>
        fields: Prisma.ClaimInvoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClaimInvoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClaimInvoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload>
          }
          findFirst: {
            args: Prisma.ClaimInvoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClaimInvoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload>
          }
          findMany: {
            args: Prisma.ClaimInvoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload>[]
          }
          create: {
            args: Prisma.ClaimInvoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload>
          }
          createMany: {
            args: Prisma.ClaimInvoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClaimInvoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload>[]
          }
          delete: {
            args: Prisma.ClaimInvoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload>
          }
          update: {
            args: Prisma.ClaimInvoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload>
          }
          deleteMany: {
            args: Prisma.ClaimInvoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClaimInvoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ClaimInvoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClaimInvoicePayload>
          }
          aggregate: {
            args: Prisma.ClaimInvoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClaimInvoice>
          }
          groupBy: {
            args: Prisma.ClaimInvoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClaimInvoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClaimInvoiceCountArgs<ExtArgs>
            result: $Utils.Optional<ClaimInvoiceCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

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

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

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
   * Count Type WorkspaceCountOutputType
   */

  export type WorkspaceCountOutputType = {
    users: number
    couriers: number
    shipments: number
    queries: number
    claimInvoices: number
  }

  export type WorkspaceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | WorkspaceCountOutputTypeCountUsersArgs
    couriers?: boolean | WorkspaceCountOutputTypeCountCouriersArgs
    shipments?: boolean | WorkspaceCountOutputTypeCountShipmentsArgs
    queries?: boolean | WorkspaceCountOutputTypeCountQueriesArgs
    claimInvoices?: boolean | WorkspaceCountOutputTypeCountClaimInvoicesArgs
  }

  // Custom InputTypes
  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the WorkspaceCountOutputType
     */
    select?: WorkspaceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountCouriersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierQueryWhereInput
  }

  /**
   * WorkspaceCountOutputType without action
   */
  export type WorkspaceCountOutputTypeCountClaimInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimInvoiceWhereInput
  }


  /**
   * Count Type CourierCountOutputType
   */

  export type CourierCountOutputType = {
    shipments: number
    queries: number
    claimInvoices: number
  }

  export type CourierCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shipments?: boolean | CourierCountOutputTypeCountShipmentsArgs
    queries?: boolean | CourierCountOutputTypeCountQueriesArgs
    claimInvoices?: boolean | CourierCountOutputTypeCountClaimInvoicesArgs
  }

  // Custom InputTypes
  /**
   * CourierCountOutputType without action
   */
  export type CourierCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierCountOutputType
     */
    select?: CourierCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CourierCountOutputType without action
   */
  export type CourierCountOutputTypeCountShipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
  }

  /**
   * CourierCountOutputType without action
   */
  export type CourierCountOutputTypeCountQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierQueryWhereInput
  }

  /**
   * CourierCountOutputType without action
   */
  export type CourierCountOutputTypeCountClaimInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimInvoiceWhereInput
  }


  /**
   * Count Type ShipmentCountOutputType
   */

  export type ShipmentCountOutputType = {
    queries: number
    claimInvoices: number
  }

  export type ShipmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    queries?: boolean | ShipmentCountOutputTypeCountQueriesArgs
    claimInvoices?: boolean | ShipmentCountOutputTypeCountClaimInvoicesArgs
  }

  // Custom InputTypes
  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShipmentCountOutputType
     */
    select?: ShipmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountQueriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierQueryWhereInput
  }

  /**
   * ShipmentCountOutputType without action
   */
  export type ShipmentCountOutputTypeCountClaimInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimInvoiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Workspace
   */

  export type AggregateWorkspace = {
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  export type WorkspaceMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    postcode: string | null
    country: string | null
    vatNumber: string | null
    companyRegNumber: string | null
    currency: string | null
    linnworksAppId: string | null
    linnworksAppSecret: string | null
    linnworksToken: string | null
    linnworksAutoSync: boolean | null
    lastLinnworksSyncAt: Date | null
    senderName: string | null
    senderEmail: string | null
    replyToEmail: string | null
    resendApiKey: string | null
    autoQueryOutOfSla: boolean | null
    autoClaimOnCourierLost: boolean | null
    customColumnsJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    email: string | null
    phone: string | null
    address: string | null
    city: string | null
    postcode: string | null
    country: string | null
    vatNumber: string | null
    companyRegNumber: string | null
    currency: string | null
    linnworksAppId: string | null
    linnworksAppSecret: string | null
    linnworksToken: string | null
    linnworksAutoSync: boolean | null
    lastLinnworksSyncAt: Date | null
    senderName: string | null
    senderEmail: string | null
    replyToEmail: string | null
    resendApiKey: string | null
    autoQueryOutOfSla: boolean | null
    autoClaimOnCourierLost: boolean | null
    customColumnsJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type WorkspaceCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    email: number
    phone: number
    address: number
    city: number
    postcode: number
    country: number
    vatNumber: number
    companyRegNumber: number
    currency: number
    linnworksAppId: number
    linnworksAppSecret: number
    linnworksToken: number
    linnworksAutoSync: number
    lastLinnworksSyncAt: number
    senderName: number
    senderEmail: number
    replyToEmail: number
    resendApiKey: number
    autoQueryOutOfSla: number
    autoClaimOnCourierLost: number
    customColumnsJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type WorkspaceMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    postcode?: true
    country?: true
    vatNumber?: true
    companyRegNumber?: true
    currency?: true
    linnworksAppId?: true
    linnworksAppSecret?: true
    linnworksToken?: true
    linnworksAutoSync?: true
    lastLinnworksSyncAt?: true
    senderName?: true
    senderEmail?: true
    replyToEmail?: true
    resendApiKey?: true
    autoQueryOutOfSla?: true
    autoClaimOnCourierLost?: true
    customColumnsJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    postcode?: true
    country?: true
    vatNumber?: true
    companyRegNumber?: true
    currency?: true
    linnworksAppId?: true
    linnworksAppSecret?: true
    linnworksToken?: true
    linnworksAutoSync?: true
    lastLinnworksSyncAt?: true
    senderName?: true
    senderEmail?: true
    replyToEmail?: true
    resendApiKey?: true
    autoQueryOutOfSla?: true
    autoClaimOnCourierLost?: true
    customColumnsJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type WorkspaceCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    email?: true
    phone?: true
    address?: true
    city?: true
    postcode?: true
    country?: true
    vatNumber?: true
    companyRegNumber?: true
    currency?: true
    linnworksAppId?: true
    linnworksAppSecret?: true
    linnworksToken?: true
    linnworksAutoSync?: true
    lastLinnworksSyncAt?: true
    senderName?: true
    senderEmail?: true
    replyToEmail?: true
    resendApiKey?: true
    autoQueryOutOfSla?: true
    autoClaimOnCourierLost?: true
    customColumnsJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type WorkspaceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspace to aggregate.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Workspaces
    **/
    _count?: true | WorkspaceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: WorkspaceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: WorkspaceMaxAggregateInputType
  }

  export type GetWorkspaceAggregateType<T extends WorkspaceAggregateArgs> = {
        [P in keyof T & keyof AggregateWorkspace]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateWorkspace[P]>
      : GetScalarType<T[P], AggregateWorkspace[P]>
  }




  export type WorkspaceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: WorkspaceWhereInput
    orderBy?: WorkspaceOrderByWithAggregationInput | WorkspaceOrderByWithAggregationInput[]
    by: WorkspaceScalarFieldEnum[] | WorkspaceScalarFieldEnum
    having?: WorkspaceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: WorkspaceCountAggregateInputType | true
    _min?: WorkspaceMinAggregateInputType
    _max?: WorkspaceMaxAggregateInputType
  }

  export type WorkspaceGroupByOutputType = {
    id: string
    name: string
    slug: string
    email: string
    phone: string
    address: string
    city: string
    postcode: string
    country: string
    vatNumber: string
    companyRegNumber: string
    currency: string
    linnworksAppId: string | null
    linnworksAppSecret: string | null
    linnworksToken: string | null
    linnworksAutoSync: boolean
    lastLinnworksSyncAt: Date | null
    senderName: string
    senderEmail: string
    replyToEmail: string | null
    resendApiKey: string | null
    autoQueryOutOfSla: boolean
    autoClaimOnCourierLost: boolean
    customColumnsJson: string
    createdAt: Date
    updatedAt: Date
    _count: WorkspaceCountAggregateOutputType | null
    _min: WorkspaceMinAggregateOutputType | null
    _max: WorkspaceMaxAggregateOutputType | null
  }

  type GetWorkspaceGroupByPayload<T extends WorkspaceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<WorkspaceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof WorkspaceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
            : GetScalarType<T[P], WorkspaceGroupByOutputType[P]>
        }
      >
    >


  export type WorkspaceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    country?: boolean
    vatNumber?: boolean
    companyRegNumber?: boolean
    currency?: boolean
    linnworksAppId?: boolean
    linnworksAppSecret?: boolean
    linnworksToken?: boolean
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: boolean
    senderName?: boolean
    senderEmail?: boolean
    replyToEmail?: boolean
    resendApiKey?: boolean
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    users?: boolean | Workspace$usersArgs<ExtArgs>
    couriers?: boolean | Workspace$couriersArgs<ExtArgs>
    shipments?: boolean | Workspace$shipmentsArgs<ExtArgs>
    queries?: boolean | Workspace$queriesArgs<ExtArgs>
    claimInvoices?: boolean | Workspace$claimInvoicesArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    country?: boolean
    vatNumber?: boolean
    companyRegNumber?: boolean
    currency?: boolean
    linnworksAppId?: boolean
    linnworksAppSecret?: boolean
    linnworksToken?: boolean
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: boolean
    senderName?: boolean
    senderEmail?: boolean
    replyToEmail?: boolean
    resendApiKey?: boolean
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["workspace"]>

  export type WorkspaceSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    email?: boolean
    phone?: boolean
    address?: boolean
    city?: boolean
    postcode?: boolean
    country?: boolean
    vatNumber?: boolean
    companyRegNumber?: boolean
    currency?: boolean
    linnworksAppId?: boolean
    linnworksAppSecret?: boolean
    linnworksToken?: boolean
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: boolean
    senderName?: boolean
    senderEmail?: boolean
    replyToEmail?: boolean
    resendApiKey?: boolean
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type WorkspaceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | Workspace$usersArgs<ExtArgs>
    couriers?: boolean | Workspace$couriersArgs<ExtArgs>
    shipments?: boolean | Workspace$shipmentsArgs<ExtArgs>
    queries?: boolean | Workspace$queriesArgs<ExtArgs>
    claimInvoices?: boolean | Workspace$claimInvoicesArgs<ExtArgs>
    _count?: boolean | WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type WorkspaceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $WorkspacePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Workspace"
    objects: {
      users: Prisma.$UserPayload<ExtArgs>[]
      couriers: Prisma.$CourierPayload<ExtArgs>[]
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
      queries: Prisma.$CourierQueryPayload<ExtArgs>[]
      claimInvoices: Prisma.$ClaimInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      email: string
      phone: string
      address: string
      city: string
      postcode: string
      country: string
      vatNumber: string
      companyRegNumber: string
      currency: string
      linnworksAppId: string | null
      linnworksAppSecret: string | null
      linnworksToken: string | null
      linnworksAutoSync: boolean
      lastLinnworksSyncAt: Date | null
      senderName: string
      senderEmail: string
      replyToEmail: string | null
      resendApiKey: string | null
      autoQueryOutOfSla: boolean
      autoClaimOnCourierLost: boolean
      customColumnsJson: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["workspace"]>
    composites: {}
  }

  type WorkspaceGetPayload<S extends boolean | null | undefined | WorkspaceDefaultArgs> = $Result.GetResult<Prisma.$WorkspacePayload, S>

  type WorkspaceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<WorkspaceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: WorkspaceCountAggregateInputType | true
    }

  export interface WorkspaceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Workspace'], meta: { name: 'Workspace' } }
    /**
     * Find zero or one Workspace that matches the filter.
     * @param {WorkspaceFindUniqueArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends WorkspaceFindUniqueArgs>(args: SelectSubset<T, WorkspaceFindUniqueArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Workspace that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {WorkspaceFindUniqueOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends WorkspaceFindUniqueOrThrowArgs>(args: SelectSubset<T, WorkspaceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Workspace that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends WorkspaceFindFirstArgs>(args?: SelectSubset<T, WorkspaceFindFirstArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Workspace that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindFirstOrThrowArgs} args - Arguments to find a Workspace
     * @example
     * // Get one Workspace
     * const workspace = await prisma.workspace.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends WorkspaceFindFirstOrThrowArgs>(args?: SelectSubset<T, WorkspaceFindFirstOrThrowArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Workspaces that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Workspaces
     * const workspaces = await prisma.workspace.findMany()
     * 
     * // Get first 10 Workspaces
     * const workspaces = await prisma.workspace.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const workspaceWithIdOnly = await prisma.workspace.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends WorkspaceFindManyArgs>(args?: SelectSubset<T, WorkspaceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Workspace.
     * @param {WorkspaceCreateArgs} args - Arguments to create a Workspace.
     * @example
     * // Create one Workspace
     * const Workspace = await prisma.workspace.create({
     *   data: {
     *     // ... data to create a Workspace
     *   }
     * })
     * 
     */
    create<T extends WorkspaceCreateArgs>(args: SelectSubset<T, WorkspaceCreateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Workspaces.
     * @param {WorkspaceCreateManyArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends WorkspaceCreateManyArgs>(args?: SelectSubset<T, WorkspaceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Workspaces and returns the data saved in the database.
     * @param {WorkspaceCreateManyAndReturnArgs} args - Arguments to create many Workspaces.
     * @example
     * // Create many Workspaces
     * const workspace = await prisma.workspace.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Workspaces and only return the `id`
     * const workspaceWithIdOnly = await prisma.workspace.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends WorkspaceCreateManyAndReturnArgs>(args?: SelectSubset<T, WorkspaceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Workspace.
     * @param {WorkspaceDeleteArgs} args - Arguments to delete one Workspace.
     * @example
     * // Delete one Workspace
     * const Workspace = await prisma.workspace.delete({
     *   where: {
     *     // ... filter to delete one Workspace
     *   }
     * })
     * 
     */
    delete<T extends WorkspaceDeleteArgs>(args: SelectSubset<T, WorkspaceDeleteArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Workspace.
     * @param {WorkspaceUpdateArgs} args - Arguments to update one Workspace.
     * @example
     * // Update one Workspace
     * const workspace = await prisma.workspace.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends WorkspaceUpdateArgs>(args: SelectSubset<T, WorkspaceUpdateArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Workspaces.
     * @param {WorkspaceDeleteManyArgs} args - Arguments to filter Workspaces to delete.
     * @example
     * // Delete a few Workspaces
     * const { count } = await prisma.workspace.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends WorkspaceDeleteManyArgs>(args?: SelectSubset<T, WorkspaceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Workspaces
     * const workspace = await prisma.workspace.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends WorkspaceUpdateManyArgs>(args: SelectSubset<T, WorkspaceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Workspace.
     * @param {WorkspaceUpsertArgs} args - Arguments to update or create a Workspace.
     * @example
     * // Update or create a Workspace
     * const workspace = await prisma.workspace.upsert({
     *   create: {
     *     // ... data to create a Workspace
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Workspace we want to update
     *   }
     * })
     */
    upsert<T extends WorkspaceUpsertArgs>(args: SelectSubset<T, WorkspaceUpsertArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Workspaces.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceCountArgs} args - Arguments to filter Workspaces to count.
     * @example
     * // Count the number of Workspaces
     * const count = await prisma.workspace.count({
     *   where: {
     *     // ... the filter for the Workspaces we want to count
     *   }
     * })
    **/
    count<T extends WorkspaceCountArgs>(
      args?: Subset<T, WorkspaceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], WorkspaceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends WorkspaceAggregateArgs>(args: Subset<T, WorkspaceAggregateArgs>): Prisma.PrismaPromise<GetWorkspaceAggregateType<T>>

    /**
     * Group by Workspace.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {WorkspaceGroupByArgs} args - Group by arguments.
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
      T extends WorkspaceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: WorkspaceGroupByArgs['orderBy'] }
        : { orderBy?: WorkspaceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, WorkspaceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetWorkspaceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Workspace model
   */
  readonly fields: WorkspaceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Workspace.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__WorkspaceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    users<T extends Workspace$usersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany"> | Null>
    couriers<T extends Workspace$couriersArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$couriersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findMany"> | Null>
    shipments<T extends Workspace$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany"> | Null>
    queries<T extends Workspace$queriesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$queriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "findMany"> | Null>
    claimInvoices<T extends Workspace$claimInvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Workspace$claimInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Workspace model
   */ 
  interface WorkspaceFieldRefs {
    readonly id: FieldRef<"Workspace", 'String'>
    readonly name: FieldRef<"Workspace", 'String'>
    readonly slug: FieldRef<"Workspace", 'String'>
    readonly email: FieldRef<"Workspace", 'String'>
    readonly phone: FieldRef<"Workspace", 'String'>
    readonly address: FieldRef<"Workspace", 'String'>
    readonly city: FieldRef<"Workspace", 'String'>
    readonly postcode: FieldRef<"Workspace", 'String'>
    readonly country: FieldRef<"Workspace", 'String'>
    readonly vatNumber: FieldRef<"Workspace", 'String'>
    readonly companyRegNumber: FieldRef<"Workspace", 'String'>
    readonly currency: FieldRef<"Workspace", 'String'>
    readonly linnworksAppId: FieldRef<"Workspace", 'String'>
    readonly linnworksAppSecret: FieldRef<"Workspace", 'String'>
    readonly linnworksToken: FieldRef<"Workspace", 'String'>
    readonly linnworksAutoSync: FieldRef<"Workspace", 'Boolean'>
    readonly lastLinnworksSyncAt: FieldRef<"Workspace", 'DateTime'>
    readonly senderName: FieldRef<"Workspace", 'String'>
    readonly senderEmail: FieldRef<"Workspace", 'String'>
    readonly replyToEmail: FieldRef<"Workspace", 'String'>
    readonly resendApiKey: FieldRef<"Workspace", 'String'>
    readonly autoQueryOutOfSla: FieldRef<"Workspace", 'Boolean'>
    readonly autoClaimOnCourierLost: FieldRef<"Workspace", 'Boolean'>
    readonly customColumnsJson: FieldRef<"Workspace", 'String'>
    readonly createdAt: FieldRef<"Workspace", 'DateTime'>
    readonly updatedAt: FieldRef<"Workspace", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Workspace findUnique
   */
  export type WorkspaceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findUniqueOrThrow
   */
  export type WorkspaceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace findFirst
   */
  export type WorkspaceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findFirstOrThrow
   */
  export type WorkspaceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspace to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Workspaces.
     */
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace findMany
   */
  export type WorkspaceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter, which Workspaces to fetch.
     */
    where?: WorkspaceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Workspaces to fetch.
     */
    orderBy?: WorkspaceOrderByWithRelationInput | WorkspaceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Workspaces.
     */
    cursor?: WorkspaceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Workspaces from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Workspaces.
     */
    skip?: number
    distinct?: WorkspaceScalarFieldEnum | WorkspaceScalarFieldEnum[]
  }

  /**
   * Workspace create
   */
  export type WorkspaceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to create a Workspace.
     */
    data: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
  }

  /**
   * Workspace createMany
   */
  export type WorkspaceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
  }

  /**
   * Workspace createManyAndReturn
   */
  export type WorkspaceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Workspaces.
     */
    data: WorkspaceCreateManyInput | WorkspaceCreateManyInput[]
  }

  /**
   * Workspace update
   */
  export type WorkspaceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The data needed to update a Workspace.
     */
    data: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
    /**
     * Choose, which Workspace to update.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace updateMany
   */
  export type WorkspaceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Workspaces.
     */
    data: XOR<WorkspaceUpdateManyMutationInput, WorkspaceUncheckedUpdateManyInput>
    /**
     * Filter which Workspaces to update
     */
    where?: WorkspaceWhereInput
  }

  /**
   * Workspace upsert
   */
  export type WorkspaceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * The filter to search for the Workspace to update in case it exists.
     */
    where: WorkspaceWhereUniqueInput
    /**
     * In case the Workspace found by the `where` argument doesn't exist, create a new Workspace with this data.
     */
    create: XOR<WorkspaceCreateInput, WorkspaceUncheckedCreateInput>
    /**
     * In case the Workspace was found with the provided `where` argument, update it with this data.
     */
    update: XOR<WorkspaceUpdateInput, WorkspaceUncheckedUpdateInput>
  }

  /**
   * Workspace delete
   */
  export type WorkspaceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
    /**
     * Filter which Workspace to delete.
     */
    where: WorkspaceWhereUniqueInput
  }

  /**
   * Workspace deleteMany
   */
  export type WorkspaceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Workspaces to delete
     */
    where?: WorkspaceWhereInput
  }

  /**
   * Workspace.users
   */
  export type Workspace$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Workspace.couriers
   */
  export type Workspace$couriersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    cursor?: CourierWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }

  /**
   * Workspace.shipments
   */
  export type Workspace$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Workspace.queries
   */
  export type Workspace$queriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    where?: CourierQueryWhereInput
    orderBy?: CourierQueryOrderByWithRelationInput | CourierQueryOrderByWithRelationInput[]
    cursor?: CourierQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourierQueryScalarFieldEnum | CourierQueryScalarFieldEnum[]
  }

  /**
   * Workspace.claimInvoices
   */
  export type Workspace$claimInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    where?: ClaimInvoiceWhereInput
    orderBy?: ClaimInvoiceOrderByWithRelationInput | ClaimInvoiceOrderByWithRelationInput[]
    cursor?: ClaimInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimInvoiceScalarFieldEnum | ClaimInvoiceScalarFieldEnum[]
  }

  /**
   * Workspace without action
   */
  export type WorkspaceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Workspace
     */
    select?: WorkspaceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: WorkspaceInclude<ExtArgs> | null
  }


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
    workspaceId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    authProvider: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    name: string | null
    email: string | null
    passwordHash: string | null
    authProvider: string | null
    role: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    workspaceId: number
    name: number
    email: number
    passwordHash: number
    authProvider: number
    role: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    email?: true
    passwordHash?: true
    authProvider?: true
    role?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    email?: true
    passwordHash?: true
    authProvider?: true
    role?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    workspaceId?: true
    name?: true
    email?: true
    passwordHash?: true
    authProvider?: true
    role?: true
    createdAt?: true
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
    workspaceId: string
    name: string
    email: string
    passwordHash: string | null
    authProvider: string
    role: string
    createdAt: Date
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
    workspaceId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    authProvider?: boolean
    role?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    authProvider?: boolean
    role?: boolean
    createdAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    name?: boolean
    email?: boolean
    passwordHash?: boolean
    authProvider?: boolean
    role?: boolean
    createdAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      name: string
      email: string
      passwordHash: string | null
      authProvider: string
      role: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
    readonly workspaceId: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly passwordHash: FieldRef<"User", 'String'>
    readonly authProvider: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
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
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Courier
   */

  export type AggregateCourier = {
    _count: CourierCountAggregateOutputType | null
    _avg: CourierAvgAggregateOutputType | null
    _sum: CourierSumAggregateOutputType | null
    _min: CourierMinAggregateOutputType | null
    _max: CourierMaxAggregateOutputType | null
  }

  export type CourierAvgAggregateOutputType = {
    defaultSlaDays: number | null
    stalledThresholdHours: number | null
    claimLossThresholdDays: number | null
    claimFilingWindowDays: number | null
    maxLiabilityCap: number | null
    vatRatePercent: number | null
  }

  export type CourierSumAggregateOutputType = {
    defaultSlaDays: number | null
    stalledThresholdHours: number | null
    claimLossThresholdDays: number | null
    claimFilingWindowDays: number | null
    maxLiabilityCap: number | null
    vatRatePercent: number | null
  }

  export type CourierMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    code: string | null
    name: string | null
    accountNumber: string | null
    trackingApiProvider: string | null
    apiKey: string | null
    apiEndpoint: string | null
    isLiveApiConnected: boolean | null
    queryEmail: string | null
    claimsEmail: string | null
    defaultSlaDays: number | null
    stalledThresholdHours: number | null
    claimLossThresholdDays: number | null
    claimFilingWindowDays: number | null
    invoiceFormatName: string | null
    pricingBasis: string | null
    maxLiabilityCap: number | null
    includePostageRefund: boolean | null
    vatRatePercent: number | null
    invoiceHeaderTitle: string | null
    invoiceRequiredFieldsJson: string | null
    invoiceDeclarationText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourierMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    code: string | null
    name: string | null
    accountNumber: string | null
    trackingApiProvider: string | null
    apiKey: string | null
    apiEndpoint: string | null
    isLiveApiConnected: boolean | null
    queryEmail: string | null
    claimsEmail: string | null
    defaultSlaDays: number | null
    stalledThresholdHours: number | null
    claimLossThresholdDays: number | null
    claimFilingWindowDays: number | null
    invoiceFormatName: string | null
    pricingBasis: string | null
    maxLiabilityCap: number | null
    includePostageRefund: boolean | null
    vatRatePercent: number | null
    invoiceHeaderTitle: string | null
    invoiceRequiredFieldsJson: string | null
    invoiceDeclarationText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourierCountAggregateOutputType = {
    id: number
    workspaceId: number
    code: number
    name: number
    accountNumber: number
    trackingApiProvider: number
    apiKey: number
    apiEndpoint: number
    isLiveApiConnected: number
    queryEmail: number
    claimsEmail: number
    defaultSlaDays: number
    stalledThresholdHours: number
    claimLossThresholdDays: number
    claimFilingWindowDays: number
    invoiceFormatName: number
    pricingBasis: number
    maxLiabilityCap: number
    includePostageRefund: number
    vatRatePercent: number
    invoiceHeaderTitle: number
    invoiceRequiredFieldsJson: number
    invoiceDeclarationText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourierAvgAggregateInputType = {
    defaultSlaDays?: true
    stalledThresholdHours?: true
    claimLossThresholdDays?: true
    claimFilingWindowDays?: true
    maxLiabilityCap?: true
    vatRatePercent?: true
  }

  export type CourierSumAggregateInputType = {
    defaultSlaDays?: true
    stalledThresholdHours?: true
    claimLossThresholdDays?: true
    claimFilingWindowDays?: true
    maxLiabilityCap?: true
    vatRatePercent?: true
  }

  export type CourierMinAggregateInputType = {
    id?: true
    workspaceId?: true
    code?: true
    name?: true
    accountNumber?: true
    trackingApiProvider?: true
    apiKey?: true
    apiEndpoint?: true
    isLiveApiConnected?: true
    queryEmail?: true
    claimsEmail?: true
    defaultSlaDays?: true
    stalledThresholdHours?: true
    claimLossThresholdDays?: true
    claimFilingWindowDays?: true
    invoiceFormatName?: true
    pricingBasis?: true
    maxLiabilityCap?: true
    includePostageRefund?: true
    vatRatePercent?: true
    invoiceHeaderTitle?: true
    invoiceRequiredFieldsJson?: true
    invoiceDeclarationText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourierMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    code?: true
    name?: true
    accountNumber?: true
    trackingApiProvider?: true
    apiKey?: true
    apiEndpoint?: true
    isLiveApiConnected?: true
    queryEmail?: true
    claimsEmail?: true
    defaultSlaDays?: true
    stalledThresholdHours?: true
    claimLossThresholdDays?: true
    claimFilingWindowDays?: true
    invoiceFormatName?: true
    pricingBasis?: true
    maxLiabilityCap?: true
    includePostageRefund?: true
    vatRatePercent?: true
    invoiceHeaderTitle?: true
    invoiceRequiredFieldsJson?: true
    invoiceDeclarationText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourierCountAggregateInputType = {
    id?: true
    workspaceId?: true
    code?: true
    name?: true
    accountNumber?: true
    trackingApiProvider?: true
    apiKey?: true
    apiEndpoint?: true
    isLiveApiConnected?: true
    queryEmail?: true
    claimsEmail?: true
    defaultSlaDays?: true
    stalledThresholdHours?: true
    claimLossThresholdDays?: true
    claimFilingWindowDays?: true
    invoiceFormatName?: true
    pricingBasis?: true
    maxLiabilityCap?: true
    includePostageRefund?: true
    vatRatePercent?: true
    invoiceHeaderTitle?: true
    invoiceRequiredFieldsJson?: true
    invoiceDeclarationText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourierAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Courier to aggregate.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Couriers
    **/
    _count?: true | CourierCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CourierAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CourierSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourierMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourierMaxAggregateInputType
  }

  export type GetCourierAggregateType<T extends CourierAggregateArgs> = {
        [P in keyof T & keyof AggregateCourier]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourier[P]>
      : GetScalarType<T[P], AggregateCourier[P]>
  }




  export type CourierGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierWhereInput
    orderBy?: CourierOrderByWithAggregationInput | CourierOrderByWithAggregationInput[]
    by: CourierScalarFieldEnum[] | CourierScalarFieldEnum
    having?: CourierScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourierCountAggregateInputType | true
    _avg?: CourierAvgAggregateInputType
    _sum?: CourierSumAggregateInputType
    _min?: CourierMinAggregateInputType
    _max?: CourierMaxAggregateInputType
  }

  export type CourierGroupByOutputType = {
    id: string
    workspaceId: string
    code: string
    name: string
    accountNumber: string
    trackingApiProvider: string
    apiKey: string | null
    apiEndpoint: string | null
    isLiveApiConnected: boolean
    queryEmail: string
    claimsEmail: string
    defaultSlaDays: number
    stalledThresholdHours: number
    claimLossThresholdDays: number
    claimFilingWindowDays: number
    invoiceFormatName: string
    pricingBasis: string
    maxLiabilityCap: number | null
    includePostageRefund: boolean
    vatRatePercent: number
    invoiceHeaderTitle: string
    invoiceRequiredFieldsJson: string
    invoiceDeclarationText: string
    createdAt: Date
    updatedAt: Date
    _count: CourierCountAggregateOutputType | null
    _avg: CourierAvgAggregateOutputType | null
    _sum: CourierSumAggregateOutputType | null
    _min: CourierMinAggregateOutputType | null
    _max: CourierMaxAggregateOutputType | null
  }

  type GetCourierGroupByPayload<T extends CourierGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourierGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourierGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourierGroupByOutputType[P]>
            : GetScalarType<T[P], CourierGroupByOutputType[P]>
        }
      >
    >


  export type CourierSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    code?: boolean
    name?: boolean
    accountNumber?: boolean
    trackingApiProvider?: boolean
    apiKey?: boolean
    apiEndpoint?: boolean
    isLiveApiConnected?: boolean
    queryEmail?: boolean
    claimsEmail?: boolean
    defaultSlaDays?: boolean
    stalledThresholdHours?: boolean
    claimLossThresholdDays?: boolean
    claimFilingWindowDays?: boolean
    invoiceFormatName?: boolean
    pricingBasis?: boolean
    maxLiabilityCap?: boolean
    includePostageRefund?: boolean
    vatRatePercent?: boolean
    invoiceHeaderTitle?: boolean
    invoiceRequiredFieldsJson?: boolean
    invoiceDeclarationText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipments?: boolean | Courier$shipmentsArgs<ExtArgs>
    queries?: boolean | Courier$queriesArgs<ExtArgs>
    claimInvoices?: boolean | Courier$claimInvoicesArgs<ExtArgs>
    _count?: boolean | CourierCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courier"]>

  export type CourierSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    code?: boolean
    name?: boolean
    accountNumber?: boolean
    trackingApiProvider?: boolean
    apiKey?: boolean
    apiEndpoint?: boolean
    isLiveApiConnected?: boolean
    queryEmail?: boolean
    claimsEmail?: boolean
    defaultSlaDays?: boolean
    stalledThresholdHours?: boolean
    claimLossThresholdDays?: boolean
    claimFilingWindowDays?: boolean
    invoiceFormatName?: boolean
    pricingBasis?: boolean
    maxLiabilityCap?: boolean
    includePostageRefund?: boolean
    vatRatePercent?: boolean
    invoiceHeaderTitle?: boolean
    invoiceRequiredFieldsJson?: boolean
    invoiceDeclarationText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courier"]>

  export type CourierSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    code?: boolean
    name?: boolean
    accountNumber?: boolean
    trackingApiProvider?: boolean
    apiKey?: boolean
    apiEndpoint?: boolean
    isLiveApiConnected?: boolean
    queryEmail?: boolean
    claimsEmail?: boolean
    defaultSlaDays?: boolean
    stalledThresholdHours?: boolean
    claimLossThresholdDays?: boolean
    claimFilingWindowDays?: boolean
    invoiceFormatName?: boolean
    pricingBasis?: boolean
    maxLiabilityCap?: boolean
    includePostageRefund?: boolean
    vatRatePercent?: boolean
    invoiceHeaderTitle?: boolean
    invoiceRequiredFieldsJson?: boolean
    invoiceDeclarationText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourierInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipments?: boolean | Courier$shipmentsArgs<ExtArgs>
    queries?: boolean | Courier$queriesArgs<ExtArgs>
    claimInvoices?: boolean | Courier$claimInvoicesArgs<ExtArgs>
    _count?: boolean | CourierCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CourierIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
  }

  export type $CourierPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Courier"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      shipments: Prisma.$ShipmentPayload<ExtArgs>[]
      queries: Prisma.$CourierQueryPayload<ExtArgs>[]
      claimInvoices: Prisma.$ClaimInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      code: string
      name: string
      accountNumber: string
      trackingApiProvider: string
      apiKey: string | null
      apiEndpoint: string | null
      isLiveApiConnected: boolean
      queryEmail: string
      claimsEmail: string
      defaultSlaDays: number
      stalledThresholdHours: number
      claimLossThresholdDays: number
      claimFilingWindowDays: number
      invoiceFormatName: string
      pricingBasis: string
      maxLiabilityCap: number | null
      includePostageRefund: boolean
      vatRatePercent: number
      invoiceHeaderTitle: string
      invoiceRequiredFieldsJson: string
      invoiceDeclarationText: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courier"]>
    composites: {}
  }

  type CourierGetPayload<S extends boolean | null | undefined | CourierDefaultArgs> = $Result.GetResult<Prisma.$CourierPayload, S>

  type CourierCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourierFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourierCountAggregateInputType | true
    }

  export interface CourierDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Courier'], meta: { name: 'Courier' } }
    /**
     * Find zero or one Courier that matches the filter.
     * @param {CourierFindUniqueArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourierFindUniqueArgs>(args: SelectSubset<T, CourierFindUniqueArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Courier that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourierFindUniqueOrThrowArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourierFindUniqueOrThrowArgs>(args: SelectSubset<T, CourierFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Courier that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindFirstArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourierFindFirstArgs>(args?: SelectSubset<T, CourierFindFirstArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Courier that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindFirstOrThrowArgs} args - Arguments to find a Courier
     * @example
     * // Get one Courier
     * const courier = await prisma.courier.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourierFindFirstOrThrowArgs>(args?: SelectSubset<T, CourierFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Couriers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Couriers
     * const couriers = await prisma.courier.findMany()
     * 
     * // Get first 10 Couriers
     * const couriers = await prisma.courier.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courierWithIdOnly = await prisma.courier.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourierFindManyArgs>(args?: SelectSubset<T, CourierFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Courier.
     * @param {CourierCreateArgs} args - Arguments to create a Courier.
     * @example
     * // Create one Courier
     * const Courier = await prisma.courier.create({
     *   data: {
     *     // ... data to create a Courier
     *   }
     * })
     * 
     */
    create<T extends CourierCreateArgs>(args: SelectSubset<T, CourierCreateArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Couriers.
     * @param {CourierCreateManyArgs} args - Arguments to create many Couriers.
     * @example
     * // Create many Couriers
     * const courier = await prisma.courier.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourierCreateManyArgs>(args?: SelectSubset<T, CourierCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Couriers and returns the data saved in the database.
     * @param {CourierCreateManyAndReturnArgs} args - Arguments to create many Couriers.
     * @example
     * // Create many Couriers
     * const courier = await prisma.courier.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Couriers and only return the `id`
     * const courierWithIdOnly = await prisma.courier.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourierCreateManyAndReturnArgs>(args?: SelectSubset<T, CourierCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Courier.
     * @param {CourierDeleteArgs} args - Arguments to delete one Courier.
     * @example
     * // Delete one Courier
     * const Courier = await prisma.courier.delete({
     *   where: {
     *     // ... filter to delete one Courier
     *   }
     * })
     * 
     */
    delete<T extends CourierDeleteArgs>(args: SelectSubset<T, CourierDeleteArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Courier.
     * @param {CourierUpdateArgs} args - Arguments to update one Courier.
     * @example
     * // Update one Courier
     * const courier = await prisma.courier.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourierUpdateArgs>(args: SelectSubset<T, CourierUpdateArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Couriers.
     * @param {CourierDeleteManyArgs} args - Arguments to filter Couriers to delete.
     * @example
     * // Delete a few Couriers
     * const { count } = await prisma.courier.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourierDeleteManyArgs>(args?: SelectSubset<T, CourierDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Couriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Couriers
     * const courier = await prisma.courier.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourierUpdateManyArgs>(args: SelectSubset<T, CourierUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Courier.
     * @param {CourierUpsertArgs} args - Arguments to update or create a Courier.
     * @example
     * // Update or create a Courier
     * const courier = await prisma.courier.upsert({
     *   create: {
     *     // ... data to create a Courier
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Courier we want to update
     *   }
     * })
     */
    upsert<T extends CourierUpsertArgs>(args: SelectSubset<T, CourierUpsertArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Couriers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierCountArgs} args - Arguments to filter Couriers to count.
     * @example
     * // Count the number of Couriers
     * const count = await prisma.courier.count({
     *   where: {
     *     // ... the filter for the Couriers we want to count
     *   }
     * })
    **/
    count<T extends CourierCountArgs>(
      args?: Subset<T, CourierCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourierCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Courier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourierAggregateArgs>(args: Subset<T, CourierAggregateArgs>): Prisma.PrismaPromise<GetCourierAggregateType<T>>

    /**
     * Group by Courier.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierGroupByArgs} args - Group by arguments.
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
      T extends CourierGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourierGroupByArgs['orderBy'] }
        : { orderBy?: CourierGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourierGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourierGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Courier model
   */
  readonly fields: CourierFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Courier.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourierClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    shipments<T extends Courier$shipmentsArgs<ExtArgs> = {}>(args?: Subset<T, Courier$shipmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany"> | Null>
    queries<T extends Courier$queriesArgs<ExtArgs> = {}>(args?: Subset<T, Courier$queriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "findMany"> | Null>
    claimInvoices<T extends Courier$claimInvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Courier$claimInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Courier model
   */ 
  interface CourierFieldRefs {
    readonly id: FieldRef<"Courier", 'String'>
    readonly workspaceId: FieldRef<"Courier", 'String'>
    readonly code: FieldRef<"Courier", 'String'>
    readonly name: FieldRef<"Courier", 'String'>
    readonly accountNumber: FieldRef<"Courier", 'String'>
    readonly trackingApiProvider: FieldRef<"Courier", 'String'>
    readonly apiKey: FieldRef<"Courier", 'String'>
    readonly apiEndpoint: FieldRef<"Courier", 'String'>
    readonly isLiveApiConnected: FieldRef<"Courier", 'Boolean'>
    readonly queryEmail: FieldRef<"Courier", 'String'>
    readonly claimsEmail: FieldRef<"Courier", 'String'>
    readonly defaultSlaDays: FieldRef<"Courier", 'Int'>
    readonly stalledThresholdHours: FieldRef<"Courier", 'Int'>
    readonly claimLossThresholdDays: FieldRef<"Courier", 'Int'>
    readonly claimFilingWindowDays: FieldRef<"Courier", 'Int'>
    readonly invoiceFormatName: FieldRef<"Courier", 'String'>
    readonly pricingBasis: FieldRef<"Courier", 'String'>
    readonly maxLiabilityCap: FieldRef<"Courier", 'Float'>
    readonly includePostageRefund: FieldRef<"Courier", 'Boolean'>
    readonly vatRatePercent: FieldRef<"Courier", 'Float'>
    readonly invoiceHeaderTitle: FieldRef<"Courier", 'String'>
    readonly invoiceRequiredFieldsJson: FieldRef<"Courier", 'String'>
    readonly invoiceDeclarationText: FieldRef<"Courier", 'String'>
    readonly createdAt: FieldRef<"Courier", 'DateTime'>
    readonly updatedAt: FieldRef<"Courier", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Courier findUnique
   */
  export type CourierFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where: CourierWhereUniqueInput
  }

  /**
   * Courier findUniqueOrThrow
   */
  export type CourierFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where: CourierWhereUniqueInput
  }

  /**
   * Courier findFirst
   */
  export type CourierFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }

  /**
   * Courier findFirstOrThrow
   */
  export type CourierFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Courier to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Couriers.
     */
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }

  /**
   * Courier findMany
   */
  export type CourierFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter, which Couriers to fetch.
     */
    where?: CourierWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Couriers to fetch.
     */
    orderBy?: CourierOrderByWithRelationInput | CourierOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Couriers.
     */
    cursor?: CourierWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Couriers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Couriers.
     */
    skip?: number
    distinct?: CourierScalarFieldEnum | CourierScalarFieldEnum[]
  }

  /**
   * Courier create
   */
  export type CourierCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The data needed to create a Courier.
     */
    data: XOR<CourierCreateInput, CourierUncheckedCreateInput>
  }

  /**
   * Courier createMany
   */
  export type CourierCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Couriers.
     */
    data: CourierCreateManyInput | CourierCreateManyInput[]
  }

  /**
   * Courier createManyAndReturn
   */
  export type CourierCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Couriers.
     */
    data: CourierCreateManyInput | CourierCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Courier update
   */
  export type CourierUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The data needed to update a Courier.
     */
    data: XOR<CourierUpdateInput, CourierUncheckedUpdateInput>
    /**
     * Choose, which Courier to update.
     */
    where: CourierWhereUniqueInput
  }

  /**
   * Courier updateMany
   */
  export type CourierUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Couriers.
     */
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyInput>
    /**
     * Filter which Couriers to update
     */
    where?: CourierWhereInput
  }

  /**
   * Courier upsert
   */
  export type CourierUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * The filter to search for the Courier to update in case it exists.
     */
    where: CourierWhereUniqueInput
    /**
     * In case the Courier found by the `where` argument doesn't exist, create a new Courier with this data.
     */
    create: XOR<CourierCreateInput, CourierUncheckedCreateInput>
    /**
     * In case the Courier was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourierUpdateInput, CourierUncheckedUpdateInput>
  }

  /**
   * Courier delete
   */
  export type CourierDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
    /**
     * Filter which Courier to delete.
     */
    where: CourierWhereUniqueInput
  }

  /**
   * Courier deleteMany
   */
  export type CourierDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Couriers to delete
     */
    where?: CourierWhereInput
  }

  /**
   * Courier.shipments
   */
  export type Courier$shipmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    cursor?: ShipmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Courier.queries
   */
  export type Courier$queriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    where?: CourierQueryWhereInput
    orderBy?: CourierQueryOrderByWithRelationInput | CourierQueryOrderByWithRelationInput[]
    cursor?: CourierQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourierQueryScalarFieldEnum | CourierQueryScalarFieldEnum[]
  }

  /**
   * Courier.claimInvoices
   */
  export type Courier$claimInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    where?: ClaimInvoiceWhereInput
    orderBy?: ClaimInvoiceOrderByWithRelationInput | ClaimInvoiceOrderByWithRelationInput[]
    cursor?: ClaimInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimInvoiceScalarFieldEnum | ClaimInvoiceScalarFieldEnum[]
  }

  /**
   * Courier without action
   */
  export type CourierDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Courier
     */
    select?: CourierSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierInclude<ExtArgs> | null
  }


  /**
   * Model Shipment
   */

  export type AggregateShipment = {
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  export type ShipmentAvgAggregateOutputType = {
    slaDays: number | null
    formulaDaysCount: number | null
    slaForClaims: number | null
    quantity: number | null
    retailValue: number | null
    wholesaleCost: number | null
    postageCost: number | null
  }

  export type ShipmentSumAggregateOutputType = {
    slaDays: number | null
    formulaDaysCount: number | null
    slaForClaims: number | null
    quantity: number | null
    retailValue: number | null
    wholesaleCost: number | null
    postageCost: number | null
  }

  export type ShipmentMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    courierId: string | null
    orderId: string | null
    orderDate: Date | null
    processedDate: Date | null
    processedDay: string | null
    country: string | null
    source: string | null
    referenceNum: string | null
    postalService: string | null
    trackingNumber: string | null
    latestUpdate: string | null
    slaStatus: string | null
    lastScanDate: Date | null
    lastScanDay: string | null
    slaDays: number | null
    estimatedDeliveryDate: Date | null
    estimatedDeliveryDay: string | null
    formulaDate: Date | null
    formulaDaysCount: number | null
    slaForClaims: number | null
    courierName: string | null
    reportTab: string | null
    recipientName: string | null
    recipientEmail: string | null
    recipientPhone: string | null
    recipientAddress: string | null
    recipientCity: string | null
    recipientPostcode: string | null
    sku: string | null
    itemTitle: string | null
    quantity: number | null
    retailValue: number | null
    wholesaleCost: number | null
    postageCost: number | null
    currency: string | null
    trackingHistoryJson: string | null
    customFieldsJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    courierId: string | null
    orderId: string | null
    orderDate: Date | null
    processedDate: Date | null
    processedDay: string | null
    country: string | null
    source: string | null
    referenceNum: string | null
    postalService: string | null
    trackingNumber: string | null
    latestUpdate: string | null
    slaStatus: string | null
    lastScanDate: Date | null
    lastScanDay: string | null
    slaDays: number | null
    estimatedDeliveryDate: Date | null
    estimatedDeliveryDay: string | null
    formulaDate: Date | null
    formulaDaysCount: number | null
    slaForClaims: number | null
    courierName: string | null
    reportTab: string | null
    recipientName: string | null
    recipientEmail: string | null
    recipientPhone: string | null
    recipientAddress: string | null
    recipientCity: string | null
    recipientPostcode: string | null
    sku: string | null
    itemTitle: string | null
    quantity: number | null
    retailValue: number | null
    wholesaleCost: number | null
    postageCost: number | null
    currency: string | null
    trackingHistoryJson: string | null
    customFieldsJson: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShipmentCountAggregateOutputType = {
    id: number
    workspaceId: number
    courierId: number
    orderId: number
    orderDate: number
    processedDate: number
    processedDay: number
    country: number
    source: number
    referenceNum: number
    postalService: number
    trackingNumber: number
    latestUpdate: number
    slaStatus: number
    lastScanDate: number
    lastScanDay: number
    slaDays: number
    estimatedDeliveryDate: number
    estimatedDeliveryDay: number
    formulaDate: number
    formulaDaysCount: number
    slaForClaims: number
    courierName: number
    reportTab: number
    recipientName: number
    recipientEmail: number
    recipientPhone: number
    recipientAddress: number
    recipientCity: number
    recipientPostcode: number
    sku: number
    itemTitle: number
    quantity: number
    retailValue: number
    wholesaleCost: number
    postageCost: number
    currency: number
    trackingHistoryJson: number
    customFieldsJson: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShipmentAvgAggregateInputType = {
    slaDays?: true
    formulaDaysCount?: true
    slaForClaims?: true
    quantity?: true
    retailValue?: true
    wholesaleCost?: true
    postageCost?: true
  }

  export type ShipmentSumAggregateInputType = {
    slaDays?: true
    formulaDaysCount?: true
    slaForClaims?: true
    quantity?: true
    retailValue?: true
    wholesaleCost?: true
    postageCost?: true
  }

  export type ShipmentMinAggregateInputType = {
    id?: true
    workspaceId?: true
    courierId?: true
    orderId?: true
    orderDate?: true
    processedDate?: true
    processedDay?: true
    country?: true
    source?: true
    referenceNum?: true
    postalService?: true
    trackingNumber?: true
    latestUpdate?: true
    slaStatus?: true
    lastScanDate?: true
    lastScanDay?: true
    slaDays?: true
    estimatedDeliveryDate?: true
    estimatedDeliveryDay?: true
    formulaDate?: true
    formulaDaysCount?: true
    slaForClaims?: true
    courierName?: true
    reportTab?: true
    recipientName?: true
    recipientEmail?: true
    recipientPhone?: true
    recipientAddress?: true
    recipientCity?: true
    recipientPostcode?: true
    sku?: true
    itemTitle?: true
    quantity?: true
    retailValue?: true
    wholesaleCost?: true
    postageCost?: true
    currency?: true
    trackingHistoryJson?: true
    customFieldsJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    courierId?: true
    orderId?: true
    orderDate?: true
    processedDate?: true
    processedDay?: true
    country?: true
    source?: true
    referenceNum?: true
    postalService?: true
    trackingNumber?: true
    latestUpdate?: true
    slaStatus?: true
    lastScanDate?: true
    lastScanDay?: true
    slaDays?: true
    estimatedDeliveryDate?: true
    estimatedDeliveryDay?: true
    formulaDate?: true
    formulaDaysCount?: true
    slaForClaims?: true
    courierName?: true
    reportTab?: true
    recipientName?: true
    recipientEmail?: true
    recipientPhone?: true
    recipientAddress?: true
    recipientCity?: true
    recipientPostcode?: true
    sku?: true
    itemTitle?: true
    quantity?: true
    retailValue?: true
    wholesaleCost?: true
    postageCost?: true
    currency?: true
    trackingHistoryJson?: true
    customFieldsJson?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShipmentCountAggregateInputType = {
    id?: true
    workspaceId?: true
    courierId?: true
    orderId?: true
    orderDate?: true
    processedDate?: true
    processedDay?: true
    country?: true
    source?: true
    referenceNum?: true
    postalService?: true
    trackingNumber?: true
    latestUpdate?: true
    slaStatus?: true
    lastScanDate?: true
    lastScanDay?: true
    slaDays?: true
    estimatedDeliveryDate?: true
    estimatedDeliveryDay?: true
    formulaDate?: true
    formulaDaysCount?: true
    slaForClaims?: true
    courierName?: true
    reportTab?: true
    recipientName?: true
    recipientEmail?: true
    recipientPhone?: true
    recipientAddress?: true
    recipientCity?: true
    recipientPostcode?: true
    sku?: true
    itemTitle?: true
    quantity?: true
    retailValue?: true
    wholesaleCost?: true
    postageCost?: true
    currency?: true
    trackingHistoryJson?: true
    customFieldsJson?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShipmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipment to aggregate.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shipments
    **/
    _count?: true | ShipmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShipmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShipmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShipmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShipmentMaxAggregateInputType
  }

  export type GetShipmentAggregateType<T extends ShipmentAggregateArgs> = {
        [P in keyof T & keyof AggregateShipment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShipment[P]>
      : GetScalarType<T[P], AggregateShipment[P]>
  }




  export type ShipmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShipmentWhereInput
    orderBy?: ShipmentOrderByWithAggregationInput | ShipmentOrderByWithAggregationInput[]
    by: ShipmentScalarFieldEnum[] | ShipmentScalarFieldEnum
    having?: ShipmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShipmentCountAggregateInputType | true
    _avg?: ShipmentAvgAggregateInputType
    _sum?: ShipmentSumAggregateInputType
    _min?: ShipmentMinAggregateInputType
    _max?: ShipmentMaxAggregateInputType
  }

  export type ShipmentGroupByOutputType = {
    id: string
    workspaceId: string
    courierId: string
    orderId: string
    orderDate: Date
    processedDate: Date
    processedDay: string
    country: string
    source: string
    referenceNum: string
    postalService: string
    trackingNumber: string
    latestUpdate: string
    slaStatus: string
    lastScanDate: Date
    lastScanDay: string
    slaDays: number
    estimatedDeliveryDate: Date
    estimatedDeliveryDay: string
    formulaDate: Date
    formulaDaysCount: number
    slaForClaims: number
    courierName: string
    reportTab: string
    recipientName: string
    recipientEmail: string
    recipientPhone: string
    recipientAddress: string
    recipientCity: string
    recipientPostcode: string
    sku: string
    itemTitle: string
    quantity: number
    retailValue: number
    wholesaleCost: number
    postageCost: number
    currency: string
    trackingHistoryJson: string
    customFieldsJson: string
    createdAt: Date
    updatedAt: Date
    _count: ShipmentCountAggregateOutputType | null
    _avg: ShipmentAvgAggregateOutputType | null
    _sum: ShipmentSumAggregateOutputType | null
    _min: ShipmentMinAggregateOutputType | null
    _max: ShipmentMaxAggregateOutputType | null
  }

  type GetShipmentGroupByPayload<T extends ShipmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShipmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShipmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
            : GetScalarType<T[P], ShipmentGroupByOutputType[P]>
        }
      >
    >


  export type ShipmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    courierId?: boolean
    orderId?: boolean
    orderDate?: boolean
    processedDate?: boolean
    processedDay?: boolean
    country?: boolean
    source?: boolean
    referenceNum?: boolean
    postalService?: boolean
    trackingNumber?: boolean
    latestUpdate?: boolean
    slaStatus?: boolean
    lastScanDate?: boolean
    lastScanDay?: boolean
    slaDays?: boolean
    estimatedDeliveryDate?: boolean
    estimatedDeliveryDay?: boolean
    formulaDate?: boolean
    formulaDaysCount?: boolean
    slaForClaims?: boolean
    courierName?: boolean
    reportTab?: boolean
    recipientName?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    recipientAddress?: boolean
    recipientCity?: boolean
    recipientPostcode?: boolean
    sku?: boolean
    itemTitle?: boolean
    quantity?: boolean
    retailValue?: boolean
    wholesaleCost?: boolean
    postageCost?: boolean
    currency?: boolean
    trackingHistoryJson?: boolean
    customFieldsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
    queries?: boolean | Shipment$queriesArgs<ExtArgs>
    claimInvoices?: boolean | Shipment$claimInvoicesArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    courierId?: boolean
    orderId?: boolean
    orderDate?: boolean
    processedDate?: boolean
    processedDay?: boolean
    country?: boolean
    source?: boolean
    referenceNum?: boolean
    postalService?: boolean
    trackingNumber?: boolean
    latestUpdate?: boolean
    slaStatus?: boolean
    lastScanDate?: boolean
    lastScanDay?: boolean
    slaDays?: boolean
    estimatedDeliveryDate?: boolean
    estimatedDeliveryDay?: boolean
    formulaDate?: boolean
    formulaDaysCount?: boolean
    slaForClaims?: boolean
    courierName?: boolean
    reportTab?: boolean
    recipientName?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    recipientAddress?: boolean
    recipientCity?: boolean
    recipientPostcode?: boolean
    sku?: boolean
    itemTitle?: boolean
    quantity?: boolean
    retailValue?: boolean
    wholesaleCost?: boolean
    postageCost?: boolean
    currency?: boolean
    trackingHistoryJson?: boolean
    customFieldsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shipment"]>

  export type ShipmentSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    courierId?: boolean
    orderId?: boolean
    orderDate?: boolean
    processedDate?: boolean
    processedDay?: boolean
    country?: boolean
    source?: boolean
    referenceNum?: boolean
    postalService?: boolean
    trackingNumber?: boolean
    latestUpdate?: boolean
    slaStatus?: boolean
    lastScanDate?: boolean
    lastScanDay?: boolean
    slaDays?: boolean
    estimatedDeliveryDate?: boolean
    estimatedDeliveryDay?: boolean
    formulaDate?: boolean
    formulaDaysCount?: boolean
    slaForClaims?: boolean
    courierName?: boolean
    reportTab?: boolean
    recipientName?: boolean
    recipientEmail?: boolean
    recipientPhone?: boolean
    recipientAddress?: boolean
    recipientCity?: boolean
    recipientPostcode?: boolean
    sku?: boolean
    itemTitle?: boolean
    quantity?: boolean
    retailValue?: boolean
    wholesaleCost?: boolean
    postageCost?: boolean
    currency?: boolean
    trackingHistoryJson?: boolean
    customFieldsJson?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShipmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
    queries?: boolean | Shipment$queriesArgs<ExtArgs>
    claimInvoices?: boolean | Shipment$claimInvoicesArgs<ExtArgs>
    _count?: boolean | ShipmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShipmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }

  export type $ShipmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shipment"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      courier: Prisma.$CourierPayload<ExtArgs>
      queries: Prisma.$CourierQueryPayload<ExtArgs>[]
      claimInvoices: Prisma.$ClaimInvoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      courierId: string
      orderId: string
      orderDate: Date
      processedDate: Date
      processedDay: string
      country: string
      source: string
      referenceNum: string
      postalService: string
      trackingNumber: string
      latestUpdate: string
      slaStatus: string
      lastScanDate: Date
      lastScanDay: string
      slaDays: number
      estimatedDeliveryDate: Date
      estimatedDeliveryDay: string
      formulaDate: Date
      formulaDaysCount: number
      slaForClaims: number
      courierName: string
      reportTab: string
      recipientName: string
      recipientEmail: string
      recipientPhone: string
      recipientAddress: string
      recipientCity: string
      recipientPostcode: string
      sku: string
      itemTitle: string
      quantity: number
      retailValue: number
      wholesaleCost: number
      postageCost: number
      currency: string
      trackingHistoryJson: string
      customFieldsJson: string
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shipment"]>
    composites: {}
  }

  type ShipmentGetPayload<S extends boolean | null | undefined | ShipmentDefaultArgs> = $Result.GetResult<Prisma.$ShipmentPayload, S>

  type ShipmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ShipmentFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ShipmentCountAggregateInputType | true
    }

  export interface ShipmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shipment'], meta: { name: 'Shipment' } }
    /**
     * Find zero or one Shipment that matches the filter.
     * @param {ShipmentFindUniqueArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShipmentFindUniqueArgs>(args: SelectSubset<T, ShipmentFindUniqueArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Shipment that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ShipmentFindUniqueOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShipmentFindUniqueOrThrowArgs>(args: SelectSubset<T, ShipmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Shipment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShipmentFindFirstArgs>(args?: SelectSubset<T, ShipmentFindFirstArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Shipment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindFirstOrThrowArgs} args - Arguments to find a Shipment
     * @example
     * // Get one Shipment
     * const shipment = await prisma.shipment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShipmentFindFirstOrThrowArgs>(args?: SelectSubset<T, ShipmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Shipments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shipments
     * const shipments = await prisma.shipment.findMany()
     * 
     * // Get first 10 Shipments
     * const shipments = await prisma.shipment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shipmentWithIdOnly = await prisma.shipment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShipmentFindManyArgs>(args?: SelectSubset<T, ShipmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Shipment.
     * @param {ShipmentCreateArgs} args - Arguments to create a Shipment.
     * @example
     * // Create one Shipment
     * const Shipment = await prisma.shipment.create({
     *   data: {
     *     // ... data to create a Shipment
     *   }
     * })
     * 
     */
    create<T extends ShipmentCreateArgs>(args: SelectSubset<T, ShipmentCreateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Shipments.
     * @param {ShipmentCreateManyArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShipmentCreateManyArgs>(args?: SelectSubset<T, ShipmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shipments and returns the data saved in the database.
     * @param {ShipmentCreateManyAndReturnArgs} args - Arguments to create many Shipments.
     * @example
     * // Create many Shipments
     * const shipment = await prisma.shipment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shipments and only return the `id`
     * const shipmentWithIdOnly = await prisma.shipment.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShipmentCreateManyAndReturnArgs>(args?: SelectSubset<T, ShipmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Shipment.
     * @param {ShipmentDeleteArgs} args - Arguments to delete one Shipment.
     * @example
     * // Delete one Shipment
     * const Shipment = await prisma.shipment.delete({
     *   where: {
     *     // ... filter to delete one Shipment
     *   }
     * })
     * 
     */
    delete<T extends ShipmentDeleteArgs>(args: SelectSubset<T, ShipmentDeleteArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Shipment.
     * @param {ShipmentUpdateArgs} args - Arguments to update one Shipment.
     * @example
     * // Update one Shipment
     * const shipment = await prisma.shipment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShipmentUpdateArgs>(args: SelectSubset<T, ShipmentUpdateArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Shipments.
     * @param {ShipmentDeleteManyArgs} args - Arguments to filter Shipments to delete.
     * @example
     * // Delete a few Shipments
     * const { count } = await prisma.shipment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShipmentDeleteManyArgs>(args?: SelectSubset<T, ShipmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shipments
     * const shipment = await prisma.shipment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShipmentUpdateManyArgs>(args: SelectSubset<T, ShipmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Shipment.
     * @param {ShipmentUpsertArgs} args - Arguments to update or create a Shipment.
     * @example
     * // Update or create a Shipment
     * const shipment = await prisma.shipment.upsert({
     *   create: {
     *     // ... data to create a Shipment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shipment we want to update
     *   }
     * })
     */
    upsert<T extends ShipmentUpsertArgs>(args: SelectSubset<T, ShipmentUpsertArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Shipments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentCountArgs} args - Arguments to filter Shipments to count.
     * @example
     * // Count the number of Shipments
     * const count = await prisma.shipment.count({
     *   where: {
     *     // ... the filter for the Shipments we want to count
     *   }
     * })
    **/
    count<T extends ShipmentCountArgs>(
      args?: Subset<T, ShipmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShipmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShipmentAggregateArgs>(args: Subset<T, ShipmentAggregateArgs>): Prisma.PrismaPromise<GetShipmentAggregateType<T>>

    /**
     * Group by Shipment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShipmentGroupByArgs} args - Group by arguments.
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
      T extends ShipmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShipmentGroupByArgs['orderBy'] }
        : { orderBy?: ShipmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShipmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShipmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shipment model
   */
  readonly fields: ShipmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shipment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShipmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    courier<T extends CourierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourierDefaultArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    queries<T extends Shipment$queriesArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$queriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "findMany"> | Null>
    claimInvoices<T extends Shipment$claimInvoicesArgs<ExtArgs> = {}>(args?: Subset<T, Shipment$claimInvoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "findMany"> | Null>
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
   * Fields of the Shipment model
   */ 
  interface ShipmentFieldRefs {
    readonly id: FieldRef<"Shipment", 'String'>
    readonly workspaceId: FieldRef<"Shipment", 'String'>
    readonly courierId: FieldRef<"Shipment", 'String'>
    readonly orderId: FieldRef<"Shipment", 'String'>
    readonly orderDate: FieldRef<"Shipment", 'DateTime'>
    readonly processedDate: FieldRef<"Shipment", 'DateTime'>
    readonly processedDay: FieldRef<"Shipment", 'String'>
    readonly country: FieldRef<"Shipment", 'String'>
    readonly source: FieldRef<"Shipment", 'String'>
    readonly referenceNum: FieldRef<"Shipment", 'String'>
    readonly postalService: FieldRef<"Shipment", 'String'>
    readonly trackingNumber: FieldRef<"Shipment", 'String'>
    readonly latestUpdate: FieldRef<"Shipment", 'String'>
    readonly slaStatus: FieldRef<"Shipment", 'String'>
    readonly lastScanDate: FieldRef<"Shipment", 'DateTime'>
    readonly lastScanDay: FieldRef<"Shipment", 'String'>
    readonly slaDays: FieldRef<"Shipment", 'Int'>
    readonly estimatedDeliveryDate: FieldRef<"Shipment", 'DateTime'>
    readonly estimatedDeliveryDay: FieldRef<"Shipment", 'String'>
    readonly formulaDate: FieldRef<"Shipment", 'DateTime'>
    readonly formulaDaysCount: FieldRef<"Shipment", 'Int'>
    readonly slaForClaims: FieldRef<"Shipment", 'Int'>
    readonly courierName: FieldRef<"Shipment", 'String'>
    readonly reportTab: FieldRef<"Shipment", 'String'>
    readonly recipientName: FieldRef<"Shipment", 'String'>
    readonly recipientEmail: FieldRef<"Shipment", 'String'>
    readonly recipientPhone: FieldRef<"Shipment", 'String'>
    readonly recipientAddress: FieldRef<"Shipment", 'String'>
    readonly recipientCity: FieldRef<"Shipment", 'String'>
    readonly recipientPostcode: FieldRef<"Shipment", 'String'>
    readonly sku: FieldRef<"Shipment", 'String'>
    readonly itemTitle: FieldRef<"Shipment", 'String'>
    readonly quantity: FieldRef<"Shipment", 'Int'>
    readonly retailValue: FieldRef<"Shipment", 'Float'>
    readonly wholesaleCost: FieldRef<"Shipment", 'Float'>
    readonly postageCost: FieldRef<"Shipment", 'Float'>
    readonly currency: FieldRef<"Shipment", 'String'>
    readonly trackingHistoryJson: FieldRef<"Shipment", 'String'>
    readonly customFieldsJson: FieldRef<"Shipment", 'String'>
    readonly createdAt: FieldRef<"Shipment", 'DateTime'>
    readonly updatedAt: FieldRef<"Shipment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shipment findUnique
   */
  export type ShipmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findUniqueOrThrow
   */
  export type ShipmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment findFirst
   */
  export type ShipmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findFirstOrThrow
   */
  export type ShipmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipment to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shipments.
     */
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment findMany
   */
  export type ShipmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter, which Shipments to fetch.
     */
    where?: ShipmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shipments to fetch.
     */
    orderBy?: ShipmentOrderByWithRelationInput | ShipmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shipments.
     */
    cursor?: ShipmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shipments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shipments.
     */
    skip?: number
    distinct?: ShipmentScalarFieldEnum | ShipmentScalarFieldEnum[]
  }

  /**
   * Shipment create
   */
  export type ShipmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Shipment.
     */
    data: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
  }

  /**
   * Shipment createMany
   */
  export type ShipmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
  }

  /**
   * Shipment createManyAndReturn
   */
  export type ShipmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Shipments.
     */
    data: ShipmentCreateManyInput | ShipmentCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Shipment update
   */
  export type ShipmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Shipment.
     */
    data: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
    /**
     * Choose, which Shipment to update.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment updateMany
   */
  export type ShipmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shipments.
     */
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyInput>
    /**
     * Filter which Shipments to update
     */
    where?: ShipmentWhereInput
  }

  /**
   * Shipment upsert
   */
  export type ShipmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Shipment to update in case it exists.
     */
    where: ShipmentWhereUniqueInput
    /**
     * In case the Shipment found by the `where` argument doesn't exist, create a new Shipment with this data.
     */
    create: XOR<ShipmentCreateInput, ShipmentUncheckedCreateInput>
    /**
     * In case the Shipment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShipmentUpdateInput, ShipmentUncheckedUpdateInput>
  }

  /**
   * Shipment delete
   */
  export type ShipmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
    /**
     * Filter which Shipment to delete.
     */
    where: ShipmentWhereUniqueInput
  }

  /**
   * Shipment deleteMany
   */
  export type ShipmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shipments to delete
     */
    where?: ShipmentWhereInput
  }

  /**
   * Shipment.queries
   */
  export type Shipment$queriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    where?: CourierQueryWhereInput
    orderBy?: CourierQueryOrderByWithRelationInput | CourierQueryOrderByWithRelationInput[]
    cursor?: CourierQueryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CourierQueryScalarFieldEnum | CourierQueryScalarFieldEnum[]
  }

  /**
   * Shipment.claimInvoices
   */
  export type Shipment$claimInvoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    where?: ClaimInvoiceWhereInput
    orderBy?: ClaimInvoiceOrderByWithRelationInput | ClaimInvoiceOrderByWithRelationInput[]
    cursor?: ClaimInvoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ClaimInvoiceScalarFieldEnum | ClaimInvoiceScalarFieldEnum[]
  }

  /**
   * Shipment without action
   */
  export type ShipmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shipment
     */
    select?: ShipmentSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShipmentInclude<ExtArgs> | null
  }


  /**
   * Model CourierQuery
   */

  export type AggregateCourierQuery = {
    _count: CourierQueryCountAggregateOutputType | null
    _min: CourierQueryMinAggregateOutputType | null
    _max: CourierQueryMaxAggregateOutputType | null
  }

  export type CourierQueryMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    shipmentId: string | null
    courierId: string | null
    queryReference: string | null
    recipientEmail: string | null
    subject: string | null
    emailBodySent: string | null
    status: string | null
    courierReplyText: string | null
    courierRepliedAt: Date | null
    autoTriggeredClaimId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourierQueryMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    shipmentId: string | null
    courierId: string | null
    queryReference: string | null
    recipientEmail: string | null
    subject: string | null
    emailBodySent: string | null
    status: string | null
    courierReplyText: string | null
    courierRepliedAt: Date | null
    autoTriggeredClaimId: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type CourierQueryCountAggregateOutputType = {
    id: number
    workspaceId: number
    shipmentId: number
    courierId: number
    queryReference: number
    recipientEmail: number
    subject: number
    emailBodySent: number
    status: number
    courierReplyText: number
    courierRepliedAt: number
    autoTriggeredClaimId: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type CourierQueryMinAggregateInputType = {
    id?: true
    workspaceId?: true
    shipmentId?: true
    courierId?: true
    queryReference?: true
    recipientEmail?: true
    subject?: true
    emailBodySent?: true
    status?: true
    courierReplyText?: true
    courierRepliedAt?: true
    autoTriggeredClaimId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourierQueryMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    shipmentId?: true
    courierId?: true
    queryReference?: true
    recipientEmail?: true
    subject?: true
    emailBodySent?: true
    status?: true
    courierReplyText?: true
    courierRepliedAt?: true
    autoTriggeredClaimId?: true
    createdAt?: true
    updatedAt?: true
  }

  export type CourierQueryCountAggregateInputType = {
    id?: true
    workspaceId?: true
    shipmentId?: true
    courierId?: true
    queryReference?: true
    recipientEmail?: true
    subject?: true
    emailBodySent?: true
    status?: true
    courierReplyText?: true
    courierRepliedAt?: true
    autoTriggeredClaimId?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type CourierQueryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourierQuery to aggregate.
     */
    where?: CourierQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourierQueries to fetch.
     */
    orderBy?: CourierQueryOrderByWithRelationInput | CourierQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CourierQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourierQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourierQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CourierQueries
    **/
    _count?: true | CourierQueryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CourierQueryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CourierQueryMaxAggregateInputType
  }

  export type GetCourierQueryAggregateType<T extends CourierQueryAggregateArgs> = {
        [P in keyof T & keyof AggregateCourierQuery]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCourierQuery[P]>
      : GetScalarType<T[P], AggregateCourierQuery[P]>
  }




  export type CourierQueryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CourierQueryWhereInput
    orderBy?: CourierQueryOrderByWithAggregationInput | CourierQueryOrderByWithAggregationInput[]
    by: CourierQueryScalarFieldEnum[] | CourierQueryScalarFieldEnum
    having?: CourierQueryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CourierQueryCountAggregateInputType | true
    _min?: CourierQueryMinAggregateInputType
    _max?: CourierQueryMaxAggregateInputType
  }

  export type CourierQueryGroupByOutputType = {
    id: string
    workspaceId: string
    shipmentId: string
    courierId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status: string
    courierReplyText: string | null
    courierRepliedAt: Date | null
    autoTriggeredClaimId: string | null
    createdAt: Date
    updatedAt: Date
    _count: CourierQueryCountAggregateOutputType | null
    _min: CourierQueryMinAggregateOutputType | null
    _max: CourierQueryMaxAggregateOutputType | null
  }

  type GetCourierQueryGroupByPayload<T extends CourierQueryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CourierQueryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CourierQueryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CourierQueryGroupByOutputType[P]>
            : GetScalarType<T[P], CourierQueryGroupByOutputType[P]>
        }
      >
    >


  export type CourierQuerySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    shipmentId?: boolean
    courierId?: boolean
    queryReference?: boolean
    recipientEmail?: boolean
    subject?: boolean
    emailBodySent?: boolean
    status?: boolean
    courierReplyText?: boolean
    courierRepliedAt?: boolean
    autoTriggeredClaimId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courierQuery"]>

  export type CourierQuerySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    shipmentId?: boolean
    courierId?: boolean
    queryReference?: boolean
    recipientEmail?: boolean
    subject?: boolean
    emailBodySent?: boolean
    status?: boolean
    courierReplyText?: boolean
    courierRepliedAt?: boolean
    autoTriggeredClaimId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["courierQuery"]>

  export type CourierQuerySelectScalar = {
    id?: boolean
    workspaceId?: boolean
    shipmentId?: boolean
    courierId?: boolean
    queryReference?: boolean
    recipientEmail?: boolean
    subject?: boolean
    emailBodySent?: boolean
    status?: boolean
    courierReplyText?: boolean
    courierRepliedAt?: boolean
    autoTriggeredClaimId?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type CourierQueryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }
  export type CourierQueryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }

  export type $CourierQueryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CourierQuery"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      shipment: Prisma.$ShipmentPayload<ExtArgs>
      courier: Prisma.$CourierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      shipmentId: string
      courierId: string
      queryReference: string
      recipientEmail: string
      subject: string
      emailBodySent: string
      status: string
      courierReplyText: string | null
      courierRepliedAt: Date | null
      autoTriggeredClaimId: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["courierQuery"]>
    composites: {}
  }

  type CourierQueryGetPayload<S extends boolean | null | undefined | CourierQueryDefaultArgs> = $Result.GetResult<Prisma.$CourierQueryPayload, S>

  type CourierQueryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<CourierQueryFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: CourierQueryCountAggregateInputType | true
    }

  export interface CourierQueryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CourierQuery'], meta: { name: 'CourierQuery' } }
    /**
     * Find zero or one CourierQuery that matches the filter.
     * @param {CourierQueryFindUniqueArgs} args - Arguments to find a CourierQuery
     * @example
     * // Get one CourierQuery
     * const courierQuery = await prisma.courierQuery.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CourierQueryFindUniqueArgs>(args: SelectSubset<T, CourierQueryFindUniqueArgs<ExtArgs>>): Prisma__CourierQueryClient<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one CourierQuery that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {CourierQueryFindUniqueOrThrowArgs} args - Arguments to find a CourierQuery
     * @example
     * // Get one CourierQuery
     * const courierQuery = await prisma.courierQuery.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CourierQueryFindUniqueOrThrowArgs>(args: SelectSubset<T, CourierQueryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CourierQueryClient<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first CourierQuery that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierQueryFindFirstArgs} args - Arguments to find a CourierQuery
     * @example
     * // Get one CourierQuery
     * const courierQuery = await prisma.courierQuery.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CourierQueryFindFirstArgs>(args?: SelectSubset<T, CourierQueryFindFirstArgs<ExtArgs>>): Prisma__CourierQueryClient<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first CourierQuery that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierQueryFindFirstOrThrowArgs} args - Arguments to find a CourierQuery
     * @example
     * // Get one CourierQuery
     * const courierQuery = await prisma.courierQuery.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CourierQueryFindFirstOrThrowArgs>(args?: SelectSubset<T, CourierQueryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CourierQueryClient<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more CourierQueries that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierQueryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CourierQueries
     * const courierQueries = await prisma.courierQuery.findMany()
     * 
     * // Get first 10 CourierQueries
     * const courierQueries = await prisma.courierQuery.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const courierQueryWithIdOnly = await prisma.courierQuery.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CourierQueryFindManyArgs>(args?: SelectSubset<T, CourierQueryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a CourierQuery.
     * @param {CourierQueryCreateArgs} args - Arguments to create a CourierQuery.
     * @example
     * // Create one CourierQuery
     * const CourierQuery = await prisma.courierQuery.create({
     *   data: {
     *     // ... data to create a CourierQuery
     *   }
     * })
     * 
     */
    create<T extends CourierQueryCreateArgs>(args: SelectSubset<T, CourierQueryCreateArgs<ExtArgs>>): Prisma__CourierQueryClient<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many CourierQueries.
     * @param {CourierQueryCreateManyArgs} args - Arguments to create many CourierQueries.
     * @example
     * // Create many CourierQueries
     * const courierQuery = await prisma.courierQuery.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CourierQueryCreateManyArgs>(args?: SelectSubset<T, CourierQueryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CourierQueries and returns the data saved in the database.
     * @param {CourierQueryCreateManyAndReturnArgs} args - Arguments to create many CourierQueries.
     * @example
     * // Create many CourierQueries
     * const courierQuery = await prisma.courierQuery.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CourierQueries and only return the `id`
     * const courierQueryWithIdOnly = await prisma.courierQuery.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CourierQueryCreateManyAndReturnArgs>(args?: SelectSubset<T, CourierQueryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a CourierQuery.
     * @param {CourierQueryDeleteArgs} args - Arguments to delete one CourierQuery.
     * @example
     * // Delete one CourierQuery
     * const CourierQuery = await prisma.courierQuery.delete({
     *   where: {
     *     // ... filter to delete one CourierQuery
     *   }
     * })
     * 
     */
    delete<T extends CourierQueryDeleteArgs>(args: SelectSubset<T, CourierQueryDeleteArgs<ExtArgs>>): Prisma__CourierQueryClient<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one CourierQuery.
     * @param {CourierQueryUpdateArgs} args - Arguments to update one CourierQuery.
     * @example
     * // Update one CourierQuery
     * const courierQuery = await prisma.courierQuery.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CourierQueryUpdateArgs>(args: SelectSubset<T, CourierQueryUpdateArgs<ExtArgs>>): Prisma__CourierQueryClient<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more CourierQueries.
     * @param {CourierQueryDeleteManyArgs} args - Arguments to filter CourierQueries to delete.
     * @example
     * // Delete a few CourierQueries
     * const { count } = await prisma.courierQuery.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CourierQueryDeleteManyArgs>(args?: SelectSubset<T, CourierQueryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CourierQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierQueryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CourierQueries
     * const courierQuery = await prisma.courierQuery.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CourierQueryUpdateManyArgs>(args: SelectSubset<T, CourierQueryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one CourierQuery.
     * @param {CourierQueryUpsertArgs} args - Arguments to update or create a CourierQuery.
     * @example
     * // Update or create a CourierQuery
     * const courierQuery = await prisma.courierQuery.upsert({
     *   create: {
     *     // ... data to create a CourierQuery
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CourierQuery we want to update
     *   }
     * })
     */
    upsert<T extends CourierQueryUpsertArgs>(args: SelectSubset<T, CourierQueryUpsertArgs<ExtArgs>>): Prisma__CourierQueryClient<$Result.GetResult<Prisma.$CourierQueryPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of CourierQueries.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierQueryCountArgs} args - Arguments to filter CourierQueries to count.
     * @example
     * // Count the number of CourierQueries
     * const count = await prisma.courierQuery.count({
     *   where: {
     *     // ... the filter for the CourierQueries we want to count
     *   }
     * })
    **/
    count<T extends CourierQueryCountArgs>(
      args?: Subset<T, CourierQueryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CourierQueryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CourierQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierQueryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CourierQueryAggregateArgs>(args: Subset<T, CourierQueryAggregateArgs>): Prisma.PrismaPromise<GetCourierQueryAggregateType<T>>

    /**
     * Group by CourierQuery.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CourierQueryGroupByArgs} args - Group by arguments.
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
      T extends CourierQueryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CourierQueryGroupByArgs['orderBy'] }
        : { orderBy?: CourierQueryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CourierQueryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCourierQueryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CourierQuery model
   */
  readonly fields: CourierQueryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CourierQuery.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CourierQueryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    courier<T extends CourierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourierDefaultArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the CourierQuery model
   */ 
  interface CourierQueryFieldRefs {
    readonly id: FieldRef<"CourierQuery", 'String'>
    readonly workspaceId: FieldRef<"CourierQuery", 'String'>
    readonly shipmentId: FieldRef<"CourierQuery", 'String'>
    readonly courierId: FieldRef<"CourierQuery", 'String'>
    readonly queryReference: FieldRef<"CourierQuery", 'String'>
    readonly recipientEmail: FieldRef<"CourierQuery", 'String'>
    readonly subject: FieldRef<"CourierQuery", 'String'>
    readonly emailBodySent: FieldRef<"CourierQuery", 'String'>
    readonly status: FieldRef<"CourierQuery", 'String'>
    readonly courierReplyText: FieldRef<"CourierQuery", 'String'>
    readonly courierRepliedAt: FieldRef<"CourierQuery", 'DateTime'>
    readonly autoTriggeredClaimId: FieldRef<"CourierQuery", 'String'>
    readonly createdAt: FieldRef<"CourierQuery", 'DateTime'>
    readonly updatedAt: FieldRef<"CourierQuery", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CourierQuery findUnique
   */
  export type CourierQueryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * Filter, which CourierQuery to fetch.
     */
    where: CourierQueryWhereUniqueInput
  }

  /**
   * CourierQuery findUniqueOrThrow
   */
  export type CourierQueryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * Filter, which CourierQuery to fetch.
     */
    where: CourierQueryWhereUniqueInput
  }

  /**
   * CourierQuery findFirst
   */
  export type CourierQueryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * Filter, which CourierQuery to fetch.
     */
    where?: CourierQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourierQueries to fetch.
     */
    orderBy?: CourierQueryOrderByWithRelationInput | CourierQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourierQueries.
     */
    cursor?: CourierQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourierQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourierQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourierQueries.
     */
    distinct?: CourierQueryScalarFieldEnum | CourierQueryScalarFieldEnum[]
  }

  /**
   * CourierQuery findFirstOrThrow
   */
  export type CourierQueryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * Filter, which CourierQuery to fetch.
     */
    where?: CourierQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourierQueries to fetch.
     */
    orderBy?: CourierQueryOrderByWithRelationInput | CourierQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CourierQueries.
     */
    cursor?: CourierQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourierQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourierQueries.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CourierQueries.
     */
    distinct?: CourierQueryScalarFieldEnum | CourierQueryScalarFieldEnum[]
  }

  /**
   * CourierQuery findMany
   */
  export type CourierQueryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * Filter, which CourierQueries to fetch.
     */
    where?: CourierQueryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CourierQueries to fetch.
     */
    orderBy?: CourierQueryOrderByWithRelationInput | CourierQueryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CourierQueries.
     */
    cursor?: CourierQueryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CourierQueries from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CourierQueries.
     */
    skip?: number
    distinct?: CourierQueryScalarFieldEnum | CourierQueryScalarFieldEnum[]
  }

  /**
   * CourierQuery create
   */
  export type CourierQueryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * The data needed to create a CourierQuery.
     */
    data: XOR<CourierQueryCreateInput, CourierQueryUncheckedCreateInput>
  }

  /**
   * CourierQuery createMany
   */
  export type CourierQueryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CourierQueries.
     */
    data: CourierQueryCreateManyInput | CourierQueryCreateManyInput[]
  }

  /**
   * CourierQuery createManyAndReturn
   */
  export type CourierQueryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many CourierQueries.
     */
    data: CourierQueryCreateManyInput | CourierQueryCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CourierQuery update
   */
  export type CourierQueryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * The data needed to update a CourierQuery.
     */
    data: XOR<CourierQueryUpdateInput, CourierQueryUncheckedUpdateInput>
    /**
     * Choose, which CourierQuery to update.
     */
    where: CourierQueryWhereUniqueInput
  }

  /**
   * CourierQuery updateMany
   */
  export type CourierQueryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CourierQueries.
     */
    data: XOR<CourierQueryUpdateManyMutationInput, CourierQueryUncheckedUpdateManyInput>
    /**
     * Filter which CourierQueries to update
     */
    where?: CourierQueryWhereInput
  }

  /**
   * CourierQuery upsert
   */
  export type CourierQueryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * The filter to search for the CourierQuery to update in case it exists.
     */
    where: CourierQueryWhereUniqueInput
    /**
     * In case the CourierQuery found by the `where` argument doesn't exist, create a new CourierQuery with this data.
     */
    create: XOR<CourierQueryCreateInput, CourierQueryUncheckedCreateInput>
    /**
     * In case the CourierQuery was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CourierQueryUpdateInput, CourierQueryUncheckedUpdateInput>
  }

  /**
   * CourierQuery delete
   */
  export type CourierQueryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
    /**
     * Filter which CourierQuery to delete.
     */
    where: CourierQueryWhereUniqueInput
  }

  /**
   * CourierQuery deleteMany
   */
  export type CourierQueryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CourierQueries to delete
     */
    where?: CourierQueryWhereInput
  }

  /**
   * CourierQuery without action
   */
  export type CourierQueryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CourierQuery
     */
    select?: CourierQuerySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CourierQueryInclude<ExtArgs> | null
  }


  /**
   * Model ClaimInvoice
   */

  export type AggregateClaimInvoice = {
    _count: ClaimInvoiceCountAggregateOutputType | null
    _avg: ClaimInvoiceAvgAggregateOutputType | null
    _sum: ClaimInvoiceSumAggregateOutputType | null
    _min: ClaimInvoiceMinAggregateOutputType | null
    _max: ClaimInvoiceMaxAggregateOutputType | null
  }

  export type ClaimInvoiceAvgAggregateOutputType = {
    merchandiseClaimAmount: number | null
    postageClaimAmount: number | null
    vatAmount: number | null
    totalClaimAmount: number | null
    approvedAmount: number | null
  }

  export type ClaimInvoiceSumAggregateOutputType = {
    merchandiseClaimAmount: number | null
    postageClaimAmount: number | null
    vatAmount: number | null
    totalClaimAmount: number | null
    approvedAmount: number | null
  }

  export type ClaimInvoiceMinAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    shipmentId: string | null
    courierId: string | null
    invoiceNumber: string | null
    claimReference: string | null
    status: string | null
    pricingBasisUsed: string | null
    merchandiseClaimAmount: number | null
    postageClaimAmount: number | null
    vatAmount: number | null
    totalClaimAmount: number | null
    approvedAmount: number | null
    creditNoteNumber: string | null
    invoiceFormatSnapshotJson: string | null
    sentToEmail: string | null
    submittedAt: Date | null
    settledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimInvoiceMaxAggregateOutputType = {
    id: string | null
    workspaceId: string | null
    shipmentId: string | null
    courierId: string | null
    invoiceNumber: string | null
    claimReference: string | null
    status: string | null
    pricingBasisUsed: string | null
    merchandiseClaimAmount: number | null
    postageClaimAmount: number | null
    vatAmount: number | null
    totalClaimAmount: number | null
    approvedAmount: number | null
    creditNoteNumber: string | null
    invoiceFormatSnapshotJson: string | null
    sentToEmail: string | null
    submittedAt: Date | null
    settledAt: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ClaimInvoiceCountAggregateOutputType = {
    id: number
    workspaceId: number
    shipmentId: number
    courierId: number
    invoiceNumber: number
    claimReference: number
    status: number
    pricingBasisUsed: number
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount: number
    totalClaimAmount: number
    approvedAmount: number
    creditNoteNumber: number
    invoiceFormatSnapshotJson: number
    sentToEmail: number
    submittedAt: number
    settledAt: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ClaimInvoiceAvgAggregateInputType = {
    merchandiseClaimAmount?: true
    postageClaimAmount?: true
    vatAmount?: true
    totalClaimAmount?: true
    approvedAmount?: true
  }

  export type ClaimInvoiceSumAggregateInputType = {
    merchandiseClaimAmount?: true
    postageClaimAmount?: true
    vatAmount?: true
    totalClaimAmount?: true
    approvedAmount?: true
  }

  export type ClaimInvoiceMinAggregateInputType = {
    id?: true
    workspaceId?: true
    shipmentId?: true
    courierId?: true
    invoiceNumber?: true
    claimReference?: true
    status?: true
    pricingBasisUsed?: true
    merchandiseClaimAmount?: true
    postageClaimAmount?: true
    vatAmount?: true
    totalClaimAmount?: true
    approvedAmount?: true
    creditNoteNumber?: true
    invoiceFormatSnapshotJson?: true
    sentToEmail?: true
    submittedAt?: true
    settledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimInvoiceMaxAggregateInputType = {
    id?: true
    workspaceId?: true
    shipmentId?: true
    courierId?: true
    invoiceNumber?: true
    claimReference?: true
    status?: true
    pricingBasisUsed?: true
    merchandiseClaimAmount?: true
    postageClaimAmount?: true
    vatAmount?: true
    totalClaimAmount?: true
    approvedAmount?: true
    creditNoteNumber?: true
    invoiceFormatSnapshotJson?: true
    sentToEmail?: true
    submittedAt?: true
    settledAt?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ClaimInvoiceCountAggregateInputType = {
    id?: true
    workspaceId?: true
    shipmentId?: true
    courierId?: true
    invoiceNumber?: true
    claimReference?: true
    status?: true
    pricingBasisUsed?: true
    merchandiseClaimAmount?: true
    postageClaimAmount?: true
    vatAmount?: true
    totalClaimAmount?: true
    approvedAmount?: true
    creditNoteNumber?: true
    invoiceFormatSnapshotJson?: true
    sentToEmail?: true
    submittedAt?: true
    settledAt?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ClaimInvoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimInvoice to aggregate.
     */
    where?: ClaimInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimInvoices to fetch.
     */
    orderBy?: ClaimInvoiceOrderByWithRelationInput | ClaimInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClaimInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ClaimInvoices
    **/
    _count?: true | ClaimInvoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClaimInvoiceAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClaimInvoiceSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClaimInvoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClaimInvoiceMaxAggregateInputType
  }

  export type GetClaimInvoiceAggregateType<T extends ClaimInvoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateClaimInvoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClaimInvoice[P]>
      : GetScalarType<T[P], AggregateClaimInvoice[P]>
  }




  export type ClaimInvoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClaimInvoiceWhereInput
    orderBy?: ClaimInvoiceOrderByWithAggregationInput | ClaimInvoiceOrderByWithAggregationInput[]
    by: ClaimInvoiceScalarFieldEnum[] | ClaimInvoiceScalarFieldEnum
    having?: ClaimInvoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClaimInvoiceCountAggregateInputType | true
    _avg?: ClaimInvoiceAvgAggregateInputType
    _sum?: ClaimInvoiceSumAggregateInputType
    _min?: ClaimInvoiceMinAggregateInputType
    _max?: ClaimInvoiceMaxAggregateInputType
  }

  export type ClaimInvoiceGroupByOutputType = {
    id: string
    workspaceId: string
    shipmentId: string
    courierId: string
    invoiceNumber: string
    claimReference: string
    status: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount: number
    totalClaimAmount: number
    approvedAmount: number | null
    creditNoteNumber: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt: Date
    settledAt: Date | null
    createdAt: Date
    updatedAt: Date
    _count: ClaimInvoiceCountAggregateOutputType | null
    _avg: ClaimInvoiceAvgAggregateOutputType | null
    _sum: ClaimInvoiceSumAggregateOutputType | null
    _min: ClaimInvoiceMinAggregateOutputType | null
    _max: ClaimInvoiceMaxAggregateOutputType | null
  }

  type GetClaimInvoiceGroupByPayload<T extends ClaimInvoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClaimInvoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClaimInvoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClaimInvoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ClaimInvoiceGroupByOutputType[P]>
        }
      >
    >


  export type ClaimInvoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    shipmentId?: boolean
    courierId?: boolean
    invoiceNumber?: boolean
    claimReference?: boolean
    status?: boolean
    pricingBasisUsed?: boolean
    merchandiseClaimAmount?: boolean
    postageClaimAmount?: boolean
    vatAmount?: boolean
    totalClaimAmount?: boolean
    approvedAmount?: boolean
    creditNoteNumber?: boolean
    invoiceFormatSnapshotJson?: boolean
    sentToEmail?: boolean
    submittedAt?: boolean
    settledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claimInvoice"]>

  export type ClaimInvoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    workspaceId?: boolean
    shipmentId?: boolean
    courierId?: boolean
    invoiceNumber?: boolean
    claimReference?: boolean
    status?: boolean
    pricingBasisUsed?: boolean
    merchandiseClaimAmount?: boolean
    postageClaimAmount?: boolean
    vatAmount?: boolean
    totalClaimAmount?: boolean
    approvedAmount?: boolean
    creditNoteNumber?: boolean
    invoiceFormatSnapshotJson?: boolean
    sentToEmail?: boolean
    submittedAt?: boolean
    settledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["claimInvoice"]>

  export type ClaimInvoiceSelectScalar = {
    id?: boolean
    workspaceId?: boolean
    shipmentId?: boolean
    courierId?: boolean
    invoiceNumber?: boolean
    claimReference?: boolean
    status?: boolean
    pricingBasisUsed?: boolean
    merchandiseClaimAmount?: boolean
    postageClaimAmount?: boolean
    vatAmount?: boolean
    totalClaimAmount?: boolean
    approvedAmount?: boolean
    creditNoteNumber?: boolean
    invoiceFormatSnapshotJson?: boolean
    sentToEmail?: boolean
    submittedAt?: boolean
    settledAt?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ClaimInvoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }
  export type ClaimInvoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    workspace?: boolean | WorkspaceDefaultArgs<ExtArgs>
    shipment?: boolean | ShipmentDefaultArgs<ExtArgs>
    courier?: boolean | CourierDefaultArgs<ExtArgs>
  }

  export type $ClaimInvoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ClaimInvoice"
    objects: {
      workspace: Prisma.$WorkspacePayload<ExtArgs>
      shipment: Prisma.$ShipmentPayload<ExtArgs>
      courier: Prisma.$CourierPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      workspaceId: string
      shipmentId: string
      courierId: string
      invoiceNumber: string
      claimReference: string
      status: string
      pricingBasisUsed: string
      merchandiseClaimAmount: number
      postageClaimAmount: number
      vatAmount: number
      totalClaimAmount: number
      approvedAmount: number | null
      creditNoteNumber: string | null
      invoiceFormatSnapshotJson: string
      sentToEmail: string
      submittedAt: Date
      settledAt: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["claimInvoice"]>
    composites: {}
  }

  type ClaimInvoiceGetPayload<S extends boolean | null | undefined | ClaimInvoiceDefaultArgs> = $Result.GetResult<Prisma.$ClaimInvoicePayload, S>

  type ClaimInvoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ClaimInvoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ClaimInvoiceCountAggregateInputType | true
    }

  export interface ClaimInvoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ClaimInvoice'], meta: { name: 'ClaimInvoice' } }
    /**
     * Find zero or one ClaimInvoice that matches the filter.
     * @param {ClaimInvoiceFindUniqueArgs} args - Arguments to find a ClaimInvoice
     * @example
     * // Get one ClaimInvoice
     * const claimInvoice = await prisma.claimInvoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClaimInvoiceFindUniqueArgs>(args: SelectSubset<T, ClaimInvoiceFindUniqueArgs<ExtArgs>>): Prisma__ClaimInvoiceClient<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one ClaimInvoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ClaimInvoiceFindUniqueOrThrowArgs} args - Arguments to find a ClaimInvoice
     * @example
     * // Get one ClaimInvoice
     * const claimInvoice = await prisma.claimInvoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClaimInvoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ClaimInvoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClaimInvoiceClient<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first ClaimInvoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInvoiceFindFirstArgs} args - Arguments to find a ClaimInvoice
     * @example
     * // Get one ClaimInvoice
     * const claimInvoice = await prisma.claimInvoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClaimInvoiceFindFirstArgs>(args?: SelectSubset<T, ClaimInvoiceFindFirstArgs<ExtArgs>>): Prisma__ClaimInvoiceClient<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first ClaimInvoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInvoiceFindFirstOrThrowArgs} args - Arguments to find a ClaimInvoice
     * @example
     * // Get one ClaimInvoice
     * const claimInvoice = await prisma.claimInvoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClaimInvoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ClaimInvoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClaimInvoiceClient<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more ClaimInvoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInvoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ClaimInvoices
     * const claimInvoices = await prisma.claimInvoice.findMany()
     * 
     * // Get first 10 ClaimInvoices
     * const claimInvoices = await prisma.claimInvoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const claimInvoiceWithIdOnly = await prisma.claimInvoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClaimInvoiceFindManyArgs>(args?: SelectSubset<T, ClaimInvoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a ClaimInvoice.
     * @param {ClaimInvoiceCreateArgs} args - Arguments to create a ClaimInvoice.
     * @example
     * // Create one ClaimInvoice
     * const ClaimInvoice = await prisma.claimInvoice.create({
     *   data: {
     *     // ... data to create a ClaimInvoice
     *   }
     * })
     * 
     */
    create<T extends ClaimInvoiceCreateArgs>(args: SelectSubset<T, ClaimInvoiceCreateArgs<ExtArgs>>): Prisma__ClaimInvoiceClient<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many ClaimInvoices.
     * @param {ClaimInvoiceCreateManyArgs} args - Arguments to create many ClaimInvoices.
     * @example
     * // Create many ClaimInvoices
     * const claimInvoice = await prisma.claimInvoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClaimInvoiceCreateManyArgs>(args?: SelectSubset<T, ClaimInvoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ClaimInvoices and returns the data saved in the database.
     * @param {ClaimInvoiceCreateManyAndReturnArgs} args - Arguments to create many ClaimInvoices.
     * @example
     * // Create many ClaimInvoices
     * const claimInvoice = await prisma.claimInvoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ClaimInvoices and only return the `id`
     * const claimInvoiceWithIdOnly = await prisma.claimInvoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClaimInvoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ClaimInvoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a ClaimInvoice.
     * @param {ClaimInvoiceDeleteArgs} args - Arguments to delete one ClaimInvoice.
     * @example
     * // Delete one ClaimInvoice
     * const ClaimInvoice = await prisma.claimInvoice.delete({
     *   where: {
     *     // ... filter to delete one ClaimInvoice
     *   }
     * })
     * 
     */
    delete<T extends ClaimInvoiceDeleteArgs>(args: SelectSubset<T, ClaimInvoiceDeleteArgs<ExtArgs>>): Prisma__ClaimInvoiceClient<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one ClaimInvoice.
     * @param {ClaimInvoiceUpdateArgs} args - Arguments to update one ClaimInvoice.
     * @example
     * // Update one ClaimInvoice
     * const claimInvoice = await prisma.claimInvoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClaimInvoiceUpdateArgs>(args: SelectSubset<T, ClaimInvoiceUpdateArgs<ExtArgs>>): Prisma__ClaimInvoiceClient<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more ClaimInvoices.
     * @param {ClaimInvoiceDeleteManyArgs} args - Arguments to filter ClaimInvoices to delete.
     * @example
     * // Delete a few ClaimInvoices
     * const { count } = await prisma.claimInvoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClaimInvoiceDeleteManyArgs>(args?: SelectSubset<T, ClaimInvoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ClaimInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInvoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ClaimInvoices
     * const claimInvoice = await prisma.claimInvoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClaimInvoiceUpdateManyArgs>(args: SelectSubset<T, ClaimInvoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ClaimInvoice.
     * @param {ClaimInvoiceUpsertArgs} args - Arguments to update or create a ClaimInvoice.
     * @example
     * // Update or create a ClaimInvoice
     * const claimInvoice = await prisma.claimInvoice.upsert({
     *   create: {
     *     // ... data to create a ClaimInvoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ClaimInvoice we want to update
     *   }
     * })
     */
    upsert<T extends ClaimInvoiceUpsertArgs>(args: SelectSubset<T, ClaimInvoiceUpsertArgs<ExtArgs>>): Prisma__ClaimInvoiceClient<$Result.GetResult<Prisma.$ClaimInvoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of ClaimInvoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInvoiceCountArgs} args - Arguments to filter ClaimInvoices to count.
     * @example
     * // Count the number of ClaimInvoices
     * const count = await prisma.claimInvoice.count({
     *   where: {
     *     // ... the filter for the ClaimInvoices we want to count
     *   }
     * })
    **/
    count<T extends ClaimInvoiceCountArgs>(
      args?: Subset<T, ClaimInvoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClaimInvoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ClaimInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInvoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClaimInvoiceAggregateArgs>(args: Subset<T, ClaimInvoiceAggregateArgs>): Prisma.PrismaPromise<GetClaimInvoiceAggregateType<T>>

    /**
     * Group by ClaimInvoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClaimInvoiceGroupByArgs} args - Group by arguments.
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
      T extends ClaimInvoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClaimInvoiceGroupByArgs['orderBy'] }
        : { orderBy?: ClaimInvoiceGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClaimInvoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClaimInvoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ClaimInvoice model
   */
  readonly fields: ClaimInvoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ClaimInvoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClaimInvoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    workspace<T extends WorkspaceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, WorkspaceDefaultArgs<ExtArgs>>): Prisma__WorkspaceClient<$Result.GetResult<Prisma.$WorkspacePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    shipment<T extends ShipmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ShipmentDefaultArgs<ExtArgs>>): Prisma__ShipmentClient<$Result.GetResult<Prisma.$ShipmentPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    courier<T extends CourierDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CourierDefaultArgs<ExtArgs>>): Prisma__CourierClient<$Result.GetResult<Prisma.$CourierPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
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
   * Fields of the ClaimInvoice model
   */ 
  interface ClaimInvoiceFieldRefs {
    readonly id: FieldRef<"ClaimInvoice", 'String'>
    readonly workspaceId: FieldRef<"ClaimInvoice", 'String'>
    readonly shipmentId: FieldRef<"ClaimInvoice", 'String'>
    readonly courierId: FieldRef<"ClaimInvoice", 'String'>
    readonly invoiceNumber: FieldRef<"ClaimInvoice", 'String'>
    readonly claimReference: FieldRef<"ClaimInvoice", 'String'>
    readonly status: FieldRef<"ClaimInvoice", 'String'>
    readonly pricingBasisUsed: FieldRef<"ClaimInvoice", 'String'>
    readonly merchandiseClaimAmount: FieldRef<"ClaimInvoice", 'Float'>
    readonly postageClaimAmount: FieldRef<"ClaimInvoice", 'Float'>
    readonly vatAmount: FieldRef<"ClaimInvoice", 'Float'>
    readonly totalClaimAmount: FieldRef<"ClaimInvoice", 'Float'>
    readonly approvedAmount: FieldRef<"ClaimInvoice", 'Float'>
    readonly creditNoteNumber: FieldRef<"ClaimInvoice", 'String'>
    readonly invoiceFormatSnapshotJson: FieldRef<"ClaimInvoice", 'String'>
    readonly sentToEmail: FieldRef<"ClaimInvoice", 'String'>
    readonly submittedAt: FieldRef<"ClaimInvoice", 'DateTime'>
    readonly settledAt: FieldRef<"ClaimInvoice", 'DateTime'>
    readonly createdAt: FieldRef<"ClaimInvoice", 'DateTime'>
    readonly updatedAt: FieldRef<"ClaimInvoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ClaimInvoice findUnique
   */
  export type ClaimInvoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClaimInvoice to fetch.
     */
    where: ClaimInvoiceWhereUniqueInput
  }

  /**
   * ClaimInvoice findUniqueOrThrow
   */
  export type ClaimInvoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClaimInvoice to fetch.
     */
    where: ClaimInvoiceWhereUniqueInput
  }

  /**
   * ClaimInvoice findFirst
   */
  export type ClaimInvoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClaimInvoice to fetch.
     */
    where?: ClaimInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimInvoices to fetch.
     */
    orderBy?: ClaimInvoiceOrderByWithRelationInput | ClaimInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimInvoices.
     */
    cursor?: ClaimInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimInvoices.
     */
    distinct?: ClaimInvoiceScalarFieldEnum | ClaimInvoiceScalarFieldEnum[]
  }

  /**
   * ClaimInvoice findFirstOrThrow
   */
  export type ClaimInvoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClaimInvoice to fetch.
     */
    where?: ClaimInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimInvoices to fetch.
     */
    orderBy?: ClaimInvoiceOrderByWithRelationInput | ClaimInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ClaimInvoices.
     */
    cursor?: ClaimInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimInvoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ClaimInvoices.
     */
    distinct?: ClaimInvoiceScalarFieldEnum | ClaimInvoiceScalarFieldEnum[]
  }

  /**
   * ClaimInvoice findMany
   */
  export type ClaimInvoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * Filter, which ClaimInvoices to fetch.
     */
    where?: ClaimInvoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ClaimInvoices to fetch.
     */
    orderBy?: ClaimInvoiceOrderByWithRelationInput | ClaimInvoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ClaimInvoices.
     */
    cursor?: ClaimInvoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ClaimInvoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ClaimInvoices.
     */
    skip?: number
    distinct?: ClaimInvoiceScalarFieldEnum | ClaimInvoiceScalarFieldEnum[]
  }

  /**
   * ClaimInvoice create
   */
  export type ClaimInvoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a ClaimInvoice.
     */
    data: XOR<ClaimInvoiceCreateInput, ClaimInvoiceUncheckedCreateInput>
  }

  /**
   * ClaimInvoice createMany
   */
  export type ClaimInvoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ClaimInvoices.
     */
    data: ClaimInvoiceCreateManyInput | ClaimInvoiceCreateManyInput[]
  }

  /**
   * ClaimInvoice createManyAndReturn
   */
  export type ClaimInvoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many ClaimInvoices.
     */
    data: ClaimInvoiceCreateManyInput | ClaimInvoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ClaimInvoice update
   */
  export type ClaimInvoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a ClaimInvoice.
     */
    data: XOR<ClaimInvoiceUpdateInput, ClaimInvoiceUncheckedUpdateInput>
    /**
     * Choose, which ClaimInvoice to update.
     */
    where: ClaimInvoiceWhereUniqueInput
  }

  /**
   * ClaimInvoice updateMany
   */
  export type ClaimInvoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ClaimInvoices.
     */
    data: XOR<ClaimInvoiceUpdateManyMutationInput, ClaimInvoiceUncheckedUpdateManyInput>
    /**
     * Filter which ClaimInvoices to update
     */
    where?: ClaimInvoiceWhereInput
  }

  /**
   * ClaimInvoice upsert
   */
  export type ClaimInvoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the ClaimInvoice to update in case it exists.
     */
    where: ClaimInvoiceWhereUniqueInput
    /**
     * In case the ClaimInvoice found by the `where` argument doesn't exist, create a new ClaimInvoice with this data.
     */
    create: XOR<ClaimInvoiceCreateInput, ClaimInvoiceUncheckedCreateInput>
    /**
     * In case the ClaimInvoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClaimInvoiceUpdateInput, ClaimInvoiceUncheckedUpdateInput>
  }

  /**
   * ClaimInvoice delete
   */
  export type ClaimInvoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
    /**
     * Filter which ClaimInvoice to delete.
     */
    where: ClaimInvoiceWhereUniqueInput
  }

  /**
   * ClaimInvoice deleteMany
   */
  export type ClaimInvoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ClaimInvoices to delete
     */
    where?: ClaimInvoiceWhereInput
  }

  /**
   * ClaimInvoice without action
   */
  export type ClaimInvoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClaimInvoice
     */
    select?: ClaimInvoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClaimInvoiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const WorkspaceScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    email: 'email',
    phone: 'phone',
    address: 'address',
    city: 'city',
    postcode: 'postcode',
    country: 'country',
    vatNumber: 'vatNumber',
    companyRegNumber: 'companyRegNumber',
    currency: 'currency',
    linnworksAppId: 'linnworksAppId',
    linnworksAppSecret: 'linnworksAppSecret',
    linnworksToken: 'linnworksToken',
    linnworksAutoSync: 'linnworksAutoSync',
    lastLinnworksSyncAt: 'lastLinnworksSyncAt',
    senderName: 'senderName',
    senderEmail: 'senderEmail',
    replyToEmail: 'replyToEmail',
    resendApiKey: 'resendApiKey',
    autoQueryOutOfSla: 'autoQueryOutOfSla',
    autoClaimOnCourierLost: 'autoClaimOnCourierLost',
    customColumnsJson: 'customColumnsJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type WorkspaceScalarFieldEnum = (typeof WorkspaceScalarFieldEnum)[keyof typeof WorkspaceScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    name: 'name',
    email: 'email',
    passwordHash: 'passwordHash',
    authProvider: 'authProvider',
    role: 'role',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const CourierScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    code: 'code',
    name: 'name',
    accountNumber: 'accountNumber',
    trackingApiProvider: 'trackingApiProvider',
    apiKey: 'apiKey',
    apiEndpoint: 'apiEndpoint',
    isLiveApiConnected: 'isLiveApiConnected',
    queryEmail: 'queryEmail',
    claimsEmail: 'claimsEmail',
    defaultSlaDays: 'defaultSlaDays',
    stalledThresholdHours: 'stalledThresholdHours',
    claimLossThresholdDays: 'claimLossThresholdDays',
    claimFilingWindowDays: 'claimFilingWindowDays',
    invoiceFormatName: 'invoiceFormatName',
    pricingBasis: 'pricingBasis',
    maxLiabilityCap: 'maxLiabilityCap',
    includePostageRefund: 'includePostageRefund',
    vatRatePercent: 'vatRatePercent',
    invoiceHeaderTitle: 'invoiceHeaderTitle',
    invoiceRequiredFieldsJson: 'invoiceRequiredFieldsJson',
    invoiceDeclarationText: 'invoiceDeclarationText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourierScalarFieldEnum = (typeof CourierScalarFieldEnum)[keyof typeof CourierScalarFieldEnum]


  export const ShipmentScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    courierId: 'courierId',
    orderId: 'orderId',
    orderDate: 'orderDate',
    processedDate: 'processedDate',
    processedDay: 'processedDay',
    country: 'country',
    source: 'source',
    referenceNum: 'referenceNum',
    postalService: 'postalService',
    trackingNumber: 'trackingNumber',
    latestUpdate: 'latestUpdate',
    slaStatus: 'slaStatus',
    lastScanDate: 'lastScanDate',
    lastScanDay: 'lastScanDay',
    slaDays: 'slaDays',
    estimatedDeliveryDate: 'estimatedDeliveryDate',
    estimatedDeliveryDay: 'estimatedDeliveryDay',
    formulaDate: 'formulaDate',
    formulaDaysCount: 'formulaDaysCount',
    slaForClaims: 'slaForClaims',
    courierName: 'courierName',
    reportTab: 'reportTab',
    recipientName: 'recipientName',
    recipientEmail: 'recipientEmail',
    recipientPhone: 'recipientPhone',
    recipientAddress: 'recipientAddress',
    recipientCity: 'recipientCity',
    recipientPostcode: 'recipientPostcode',
    sku: 'sku',
    itemTitle: 'itemTitle',
    quantity: 'quantity',
    retailValue: 'retailValue',
    wholesaleCost: 'wholesaleCost',
    postageCost: 'postageCost',
    currency: 'currency',
    trackingHistoryJson: 'trackingHistoryJson',
    customFieldsJson: 'customFieldsJson',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShipmentScalarFieldEnum = (typeof ShipmentScalarFieldEnum)[keyof typeof ShipmentScalarFieldEnum]


  export const CourierQueryScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    shipmentId: 'shipmentId',
    courierId: 'courierId',
    queryReference: 'queryReference',
    recipientEmail: 'recipientEmail',
    subject: 'subject',
    emailBodySent: 'emailBodySent',
    status: 'status',
    courierReplyText: 'courierReplyText',
    courierRepliedAt: 'courierRepliedAt',
    autoTriggeredClaimId: 'autoTriggeredClaimId',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type CourierQueryScalarFieldEnum = (typeof CourierQueryScalarFieldEnum)[keyof typeof CourierQueryScalarFieldEnum]


  export const ClaimInvoiceScalarFieldEnum: {
    id: 'id',
    workspaceId: 'workspaceId',
    shipmentId: 'shipmentId',
    courierId: 'courierId',
    invoiceNumber: 'invoiceNumber',
    claimReference: 'claimReference',
    status: 'status',
    pricingBasisUsed: 'pricingBasisUsed',
    merchandiseClaimAmount: 'merchandiseClaimAmount',
    postageClaimAmount: 'postageClaimAmount',
    vatAmount: 'vatAmount',
    totalClaimAmount: 'totalClaimAmount',
    approvedAmount: 'approvedAmount',
    creditNoteNumber: 'creditNoteNumber',
    invoiceFormatSnapshotJson: 'invoiceFormatSnapshotJson',
    sentToEmail: 'sentToEmail',
    submittedAt: 'submittedAt',
    settledAt: 'settledAt',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ClaimInvoiceScalarFieldEnum = (typeof ClaimInvoiceScalarFieldEnum)[keyof typeof ClaimInvoiceScalarFieldEnum]


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
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


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


  export type WorkspaceWhereInput = {
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    id?: StringFilter<"Workspace"> | string
    name?: StringFilter<"Workspace"> | string
    slug?: StringFilter<"Workspace"> | string
    email?: StringFilter<"Workspace"> | string
    phone?: StringFilter<"Workspace"> | string
    address?: StringFilter<"Workspace"> | string
    city?: StringFilter<"Workspace"> | string
    postcode?: StringFilter<"Workspace"> | string
    country?: StringFilter<"Workspace"> | string
    vatNumber?: StringFilter<"Workspace"> | string
    companyRegNumber?: StringFilter<"Workspace"> | string
    currency?: StringFilter<"Workspace"> | string
    linnworksAppId?: StringNullableFilter<"Workspace"> | string | null
    linnworksAppSecret?: StringNullableFilter<"Workspace"> | string | null
    linnworksToken?: StringNullableFilter<"Workspace"> | string | null
    linnworksAutoSync?: BoolFilter<"Workspace"> | boolean
    lastLinnworksSyncAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    senderName?: StringFilter<"Workspace"> | string
    senderEmail?: StringFilter<"Workspace"> | string
    replyToEmail?: StringNullableFilter<"Workspace"> | string | null
    resendApiKey?: StringNullableFilter<"Workspace"> | string | null
    autoQueryOutOfSla?: BoolFilter<"Workspace"> | boolean
    autoClaimOnCourierLost?: BoolFilter<"Workspace"> | boolean
    customColumnsJson?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: UserListRelationFilter
    couriers?: CourierListRelationFilter
    shipments?: ShipmentListRelationFilter
    queries?: CourierQueryListRelationFilter
    claimInvoices?: ClaimInvoiceListRelationFilter
  }

  export type WorkspaceOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    vatNumber?: SortOrder
    companyRegNumber?: SortOrder
    currency?: SortOrder
    linnworksAppId?: SortOrderInput | SortOrder
    linnworksAppSecret?: SortOrderInput | SortOrder
    linnworksToken?: SortOrderInput | SortOrder
    linnworksAutoSync?: SortOrder
    lastLinnworksSyncAt?: SortOrderInput | SortOrder
    senderName?: SortOrder
    senderEmail?: SortOrder
    replyToEmail?: SortOrderInput | SortOrder
    resendApiKey?: SortOrderInput | SortOrder
    autoQueryOutOfSla?: SortOrder
    autoClaimOnCourierLost?: SortOrder
    customColumnsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    users?: UserOrderByRelationAggregateInput
    couriers?: CourierOrderByRelationAggregateInput
    shipments?: ShipmentOrderByRelationAggregateInput
    queries?: CourierQueryOrderByRelationAggregateInput
    claimInvoices?: ClaimInvoiceOrderByRelationAggregateInput
  }

  export type WorkspaceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: WorkspaceWhereInput | WorkspaceWhereInput[]
    OR?: WorkspaceWhereInput[]
    NOT?: WorkspaceWhereInput | WorkspaceWhereInput[]
    name?: StringFilter<"Workspace"> | string
    email?: StringFilter<"Workspace"> | string
    phone?: StringFilter<"Workspace"> | string
    address?: StringFilter<"Workspace"> | string
    city?: StringFilter<"Workspace"> | string
    postcode?: StringFilter<"Workspace"> | string
    country?: StringFilter<"Workspace"> | string
    vatNumber?: StringFilter<"Workspace"> | string
    companyRegNumber?: StringFilter<"Workspace"> | string
    currency?: StringFilter<"Workspace"> | string
    linnworksAppId?: StringNullableFilter<"Workspace"> | string | null
    linnworksAppSecret?: StringNullableFilter<"Workspace"> | string | null
    linnworksToken?: StringNullableFilter<"Workspace"> | string | null
    linnworksAutoSync?: BoolFilter<"Workspace"> | boolean
    lastLinnworksSyncAt?: DateTimeNullableFilter<"Workspace"> | Date | string | null
    senderName?: StringFilter<"Workspace"> | string
    senderEmail?: StringFilter<"Workspace"> | string
    replyToEmail?: StringNullableFilter<"Workspace"> | string | null
    resendApiKey?: StringNullableFilter<"Workspace"> | string | null
    autoQueryOutOfSla?: BoolFilter<"Workspace"> | boolean
    autoClaimOnCourierLost?: BoolFilter<"Workspace"> | boolean
    customColumnsJson?: StringFilter<"Workspace"> | string
    createdAt?: DateTimeFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeFilter<"Workspace"> | Date | string
    users?: UserListRelationFilter
    couriers?: CourierListRelationFilter
    shipments?: ShipmentListRelationFilter
    queries?: CourierQueryListRelationFilter
    claimInvoices?: ClaimInvoiceListRelationFilter
  }, "id" | "slug">

  export type WorkspaceOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    vatNumber?: SortOrder
    companyRegNumber?: SortOrder
    currency?: SortOrder
    linnworksAppId?: SortOrderInput | SortOrder
    linnworksAppSecret?: SortOrderInput | SortOrder
    linnworksToken?: SortOrderInput | SortOrder
    linnworksAutoSync?: SortOrder
    lastLinnworksSyncAt?: SortOrderInput | SortOrder
    senderName?: SortOrder
    senderEmail?: SortOrder
    replyToEmail?: SortOrderInput | SortOrder
    resendApiKey?: SortOrderInput | SortOrder
    autoQueryOutOfSla?: SortOrder
    autoClaimOnCourierLost?: SortOrder
    customColumnsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: WorkspaceCountOrderByAggregateInput
    _max?: WorkspaceMaxOrderByAggregateInput
    _min?: WorkspaceMinOrderByAggregateInput
  }

  export type WorkspaceScalarWhereWithAggregatesInput = {
    AND?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    OR?: WorkspaceScalarWhereWithAggregatesInput[]
    NOT?: WorkspaceScalarWhereWithAggregatesInput | WorkspaceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Workspace"> | string
    name?: StringWithAggregatesFilter<"Workspace"> | string
    slug?: StringWithAggregatesFilter<"Workspace"> | string
    email?: StringWithAggregatesFilter<"Workspace"> | string
    phone?: StringWithAggregatesFilter<"Workspace"> | string
    address?: StringWithAggregatesFilter<"Workspace"> | string
    city?: StringWithAggregatesFilter<"Workspace"> | string
    postcode?: StringWithAggregatesFilter<"Workspace"> | string
    country?: StringWithAggregatesFilter<"Workspace"> | string
    vatNumber?: StringWithAggregatesFilter<"Workspace"> | string
    companyRegNumber?: StringWithAggregatesFilter<"Workspace"> | string
    currency?: StringWithAggregatesFilter<"Workspace"> | string
    linnworksAppId?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    linnworksAppSecret?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    linnworksToken?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    linnworksAutoSync?: BoolWithAggregatesFilter<"Workspace"> | boolean
    lastLinnworksSyncAt?: DateTimeNullableWithAggregatesFilter<"Workspace"> | Date | string | null
    senderName?: StringWithAggregatesFilter<"Workspace"> | string
    senderEmail?: StringWithAggregatesFilter<"Workspace"> | string
    replyToEmail?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    resendApiKey?: StringNullableWithAggregatesFilter<"Workspace"> | string | null
    autoQueryOutOfSla?: BoolWithAggregatesFilter<"Workspace"> | boolean
    autoClaimOnCourierLost?: BoolWithAggregatesFilter<"Workspace"> | boolean
    customColumnsJson?: StringWithAggregatesFilter<"Workspace"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Workspace"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    workspaceId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    workspaceId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrderInput | SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    workspaceId?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    passwordHash?: StringNullableWithAggregatesFilter<"User"> | string | null
    authProvider?: StringWithAggregatesFilter<"User"> | string
    role?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type CourierWhereInput = {
    AND?: CourierWhereInput | CourierWhereInput[]
    OR?: CourierWhereInput[]
    NOT?: CourierWhereInput | CourierWhereInput[]
    id?: StringFilter<"Courier"> | string
    workspaceId?: StringFilter<"Courier"> | string
    code?: StringFilter<"Courier"> | string
    name?: StringFilter<"Courier"> | string
    accountNumber?: StringFilter<"Courier"> | string
    trackingApiProvider?: StringFilter<"Courier"> | string
    apiKey?: StringNullableFilter<"Courier"> | string | null
    apiEndpoint?: StringNullableFilter<"Courier"> | string | null
    isLiveApiConnected?: BoolFilter<"Courier"> | boolean
    queryEmail?: StringFilter<"Courier"> | string
    claimsEmail?: StringFilter<"Courier"> | string
    defaultSlaDays?: IntFilter<"Courier"> | number
    stalledThresholdHours?: IntFilter<"Courier"> | number
    claimLossThresholdDays?: IntFilter<"Courier"> | number
    claimFilingWindowDays?: IntFilter<"Courier"> | number
    invoiceFormatName?: StringFilter<"Courier"> | string
    pricingBasis?: StringFilter<"Courier"> | string
    maxLiabilityCap?: FloatNullableFilter<"Courier"> | number | null
    includePostageRefund?: BoolFilter<"Courier"> | boolean
    vatRatePercent?: FloatFilter<"Courier"> | number
    invoiceHeaderTitle?: StringFilter<"Courier"> | string
    invoiceRequiredFieldsJson?: StringFilter<"Courier"> | string
    invoiceDeclarationText?: StringFilter<"Courier"> | string
    createdAt?: DateTimeFilter<"Courier"> | Date | string
    updatedAt?: DateTimeFilter<"Courier"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    shipments?: ShipmentListRelationFilter
    queries?: CourierQueryListRelationFilter
    claimInvoices?: ClaimInvoiceListRelationFilter
  }

  export type CourierOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    accountNumber?: SortOrder
    trackingApiProvider?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    apiEndpoint?: SortOrderInput | SortOrder
    isLiveApiConnected?: SortOrder
    queryEmail?: SortOrder
    claimsEmail?: SortOrder
    defaultSlaDays?: SortOrder
    stalledThresholdHours?: SortOrder
    claimLossThresholdDays?: SortOrder
    claimFilingWindowDays?: SortOrder
    invoiceFormatName?: SortOrder
    pricingBasis?: SortOrder
    maxLiabilityCap?: SortOrderInput | SortOrder
    includePostageRefund?: SortOrder
    vatRatePercent?: SortOrder
    invoiceHeaderTitle?: SortOrder
    invoiceRequiredFieldsJson?: SortOrder
    invoiceDeclarationText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    shipments?: ShipmentOrderByRelationAggregateInput
    queries?: CourierQueryOrderByRelationAggregateInput
    claimInvoices?: ClaimInvoiceOrderByRelationAggregateInput
  }

  export type CourierWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId_code?: CourierWorkspaceIdCodeCompoundUniqueInput
    AND?: CourierWhereInput | CourierWhereInput[]
    OR?: CourierWhereInput[]
    NOT?: CourierWhereInput | CourierWhereInput[]
    workspaceId?: StringFilter<"Courier"> | string
    code?: StringFilter<"Courier"> | string
    name?: StringFilter<"Courier"> | string
    accountNumber?: StringFilter<"Courier"> | string
    trackingApiProvider?: StringFilter<"Courier"> | string
    apiKey?: StringNullableFilter<"Courier"> | string | null
    apiEndpoint?: StringNullableFilter<"Courier"> | string | null
    isLiveApiConnected?: BoolFilter<"Courier"> | boolean
    queryEmail?: StringFilter<"Courier"> | string
    claimsEmail?: StringFilter<"Courier"> | string
    defaultSlaDays?: IntFilter<"Courier"> | number
    stalledThresholdHours?: IntFilter<"Courier"> | number
    claimLossThresholdDays?: IntFilter<"Courier"> | number
    claimFilingWindowDays?: IntFilter<"Courier"> | number
    invoiceFormatName?: StringFilter<"Courier"> | string
    pricingBasis?: StringFilter<"Courier"> | string
    maxLiabilityCap?: FloatNullableFilter<"Courier"> | number | null
    includePostageRefund?: BoolFilter<"Courier"> | boolean
    vatRatePercent?: FloatFilter<"Courier"> | number
    invoiceHeaderTitle?: StringFilter<"Courier"> | string
    invoiceRequiredFieldsJson?: StringFilter<"Courier"> | string
    invoiceDeclarationText?: StringFilter<"Courier"> | string
    createdAt?: DateTimeFilter<"Courier"> | Date | string
    updatedAt?: DateTimeFilter<"Courier"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    shipments?: ShipmentListRelationFilter
    queries?: CourierQueryListRelationFilter
    claimInvoices?: ClaimInvoiceListRelationFilter
  }, "id" | "workspaceId_code">

  export type CourierOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    accountNumber?: SortOrder
    trackingApiProvider?: SortOrder
    apiKey?: SortOrderInput | SortOrder
    apiEndpoint?: SortOrderInput | SortOrder
    isLiveApiConnected?: SortOrder
    queryEmail?: SortOrder
    claimsEmail?: SortOrder
    defaultSlaDays?: SortOrder
    stalledThresholdHours?: SortOrder
    claimLossThresholdDays?: SortOrder
    claimFilingWindowDays?: SortOrder
    invoiceFormatName?: SortOrder
    pricingBasis?: SortOrder
    maxLiabilityCap?: SortOrderInput | SortOrder
    includePostageRefund?: SortOrder
    vatRatePercent?: SortOrder
    invoiceHeaderTitle?: SortOrder
    invoiceRequiredFieldsJson?: SortOrder
    invoiceDeclarationText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourierCountOrderByAggregateInput
    _avg?: CourierAvgOrderByAggregateInput
    _max?: CourierMaxOrderByAggregateInput
    _min?: CourierMinOrderByAggregateInput
    _sum?: CourierSumOrderByAggregateInput
  }

  export type CourierScalarWhereWithAggregatesInput = {
    AND?: CourierScalarWhereWithAggregatesInput | CourierScalarWhereWithAggregatesInput[]
    OR?: CourierScalarWhereWithAggregatesInput[]
    NOT?: CourierScalarWhereWithAggregatesInput | CourierScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Courier"> | string
    workspaceId?: StringWithAggregatesFilter<"Courier"> | string
    code?: StringWithAggregatesFilter<"Courier"> | string
    name?: StringWithAggregatesFilter<"Courier"> | string
    accountNumber?: StringWithAggregatesFilter<"Courier"> | string
    trackingApiProvider?: StringWithAggregatesFilter<"Courier"> | string
    apiKey?: StringNullableWithAggregatesFilter<"Courier"> | string | null
    apiEndpoint?: StringNullableWithAggregatesFilter<"Courier"> | string | null
    isLiveApiConnected?: BoolWithAggregatesFilter<"Courier"> | boolean
    queryEmail?: StringWithAggregatesFilter<"Courier"> | string
    claimsEmail?: StringWithAggregatesFilter<"Courier"> | string
    defaultSlaDays?: IntWithAggregatesFilter<"Courier"> | number
    stalledThresholdHours?: IntWithAggregatesFilter<"Courier"> | number
    claimLossThresholdDays?: IntWithAggregatesFilter<"Courier"> | number
    claimFilingWindowDays?: IntWithAggregatesFilter<"Courier"> | number
    invoiceFormatName?: StringWithAggregatesFilter<"Courier"> | string
    pricingBasis?: StringWithAggregatesFilter<"Courier"> | string
    maxLiabilityCap?: FloatNullableWithAggregatesFilter<"Courier"> | number | null
    includePostageRefund?: BoolWithAggregatesFilter<"Courier"> | boolean
    vatRatePercent?: FloatWithAggregatesFilter<"Courier"> | number
    invoiceHeaderTitle?: StringWithAggregatesFilter<"Courier"> | string
    invoiceRequiredFieldsJson?: StringWithAggregatesFilter<"Courier"> | string
    invoiceDeclarationText?: StringWithAggregatesFilter<"Courier"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Courier"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Courier"> | Date | string
  }

  export type ShipmentWhereInput = {
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    id?: StringFilter<"Shipment"> | string
    workspaceId?: StringFilter<"Shipment"> | string
    courierId?: StringFilter<"Shipment"> | string
    orderId?: StringFilter<"Shipment"> | string
    orderDate?: DateTimeFilter<"Shipment"> | Date | string
    processedDate?: DateTimeFilter<"Shipment"> | Date | string
    processedDay?: StringFilter<"Shipment"> | string
    country?: StringFilter<"Shipment"> | string
    source?: StringFilter<"Shipment"> | string
    referenceNum?: StringFilter<"Shipment"> | string
    postalService?: StringFilter<"Shipment"> | string
    trackingNumber?: StringFilter<"Shipment"> | string
    latestUpdate?: StringFilter<"Shipment"> | string
    slaStatus?: StringFilter<"Shipment"> | string
    lastScanDate?: DateTimeFilter<"Shipment"> | Date | string
    lastScanDay?: StringFilter<"Shipment"> | string
    slaDays?: IntFilter<"Shipment"> | number
    estimatedDeliveryDate?: DateTimeFilter<"Shipment"> | Date | string
    estimatedDeliveryDay?: StringFilter<"Shipment"> | string
    formulaDate?: DateTimeFilter<"Shipment"> | Date | string
    formulaDaysCount?: IntFilter<"Shipment"> | number
    slaForClaims?: IntFilter<"Shipment"> | number
    courierName?: StringFilter<"Shipment"> | string
    reportTab?: StringFilter<"Shipment"> | string
    recipientName?: StringFilter<"Shipment"> | string
    recipientEmail?: StringFilter<"Shipment"> | string
    recipientPhone?: StringFilter<"Shipment"> | string
    recipientAddress?: StringFilter<"Shipment"> | string
    recipientCity?: StringFilter<"Shipment"> | string
    recipientPostcode?: StringFilter<"Shipment"> | string
    sku?: StringFilter<"Shipment"> | string
    itemTitle?: StringFilter<"Shipment"> | string
    quantity?: IntFilter<"Shipment"> | number
    retailValue?: FloatFilter<"Shipment"> | number
    wholesaleCost?: FloatFilter<"Shipment"> | number
    postageCost?: FloatFilter<"Shipment"> | number
    currency?: StringFilter<"Shipment"> | string
    trackingHistoryJson?: StringFilter<"Shipment"> | string
    customFieldsJson?: StringFilter<"Shipment"> | string
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    courier?: XOR<CourierRelationFilter, CourierWhereInput>
    queries?: CourierQueryListRelationFilter
    claimInvoices?: ClaimInvoiceListRelationFilter
  }

  export type ShipmentOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    courierId?: SortOrder
    orderId?: SortOrder
    orderDate?: SortOrder
    processedDate?: SortOrder
    processedDay?: SortOrder
    country?: SortOrder
    source?: SortOrder
    referenceNum?: SortOrder
    postalService?: SortOrder
    trackingNumber?: SortOrder
    latestUpdate?: SortOrder
    slaStatus?: SortOrder
    lastScanDate?: SortOrder
    lastScanDay?: SortOrder
    slaDays?: SortOrder
    estimatedDeliveryDate?: SortOrder
    estimatedDeliveryDay?: SortOrder
    formulaDate?: SortOrder
    formulaDaysCount?: SortOrder
    slaForClaims?: SortOrder
    courierName?: SortOrder
    reportTab?: SortOrder
    recipientName?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    recipientAddress?: SortOrder
    recipientCity?: SortOrder
    recipientPostcode?: SortOrder
    sku?: SortOrder
    itemTitle?: SortOrder
    quantity?: SortOrder
    retailValue?: SortOrder
    wholesaleCost?: SortOrder
    postageCost?: SortOrder
    currency?: SortOrder
    trackingHistoryJson?: SortOrder
    customFieldsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    courier?: CourierOrderByWithRelationInput
    queries?: CourierQueryOrderByRelationAggregateInput
    claimInvoices?: ClaimInvoiceOrderByRelationAggregateInput
  }

  export type ShipmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    workspaceId_trackingNumber?: ShipmentWorkspaceIdTrackingNumberCompoundUniqueInput
    AND?: ShipmentWhereInput | ShipmentWhereInput[]
    OR?: ShipmentWhereInput[]
    NOT?: ShipmentWhereInput | ShipmentWhereInput[]
    workspaceId?: StringFilter<"Shipment"> | string
    courierId?: StringFilter<"Shipment"> | string
    orderId?: StringFilter<"Shipment"> | string
    orderDate?: DateTimeFilter<"Shipment"> | Date | string
    processedDate?: DateTimeFilter<"Shipment"> | Date | string
    processedDay?: StringFilter<"Shipment"> | string
    country?: StringFilter<"Shipment"> | string
    source?: StringFilter<"Shipment"> | string
    referenceNum?: StringFilter<"Shipment"> | string
    postalService?: StringFilter<"Shipment"> | string
    trackingNumber?: StringFilter<"Shipment"> | string
    latestUpdate?: StringFilter<"Shipment"> | string
    slaStatus?: StringFilter<"Shipment"> | string
    lastScanDate?: DateTimeFilter<"Shipment"> | Date | string
    lastScanDay?: StringFilter<"Shipment"> | string
    slaDays?: IntFilter<"Shipment"> | number
    estimatedDeliveryDate?: DateTimeFilter<"Shipment"> | Date | string
    estimatedDeliveryDay?: StringFilter<"Shipment"> | string
    formulaDate?: DateTimeFilter<"Shipment"> | Date | string
    formulaDaysCount?: IntFilter<"Shipment"> | number
    slaForClaims?: IntFilter<"Shipment"> | number
    courierName?: StringFilter<"Shipment"> | string
    reportTab?: StringFilter<"Shipment"> | string
    recipientName?: StringFilter<"Shipment"> | string
    recipientEmail?: StringFilter<"Shipment"> | string
    recipientPhone?: StringFilter<"Shipment"> | string
    recipientAddress?: StringFilter<"Shipment"> | string
    recipientCity?: StringFilter<"Shipment"> | string
    recipientPostcode?: StringFilter<"Shipment"> | string
    sku?: StringFilter<"Shipment"> | string
    itemTitle?: StringFilter<"Shipment"> | string
    quantity?: IntFilter<"Shipment"> | number
    retailValue?: FloatFilter<"Shipment"> | number
    wholesaleCost?: FloatFilter<"Shipment"> | number
    postageCost?: FloatFilter<"Shipment"> | number
    currency?: StringFilter<"Shipment"> | string
    trackingHistoryJson?: StringFilter<"Shipment"> | string
    customFieldsJson?: StringFilter<"Shipment"> | string
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    courier?: XOR<CourierRelationFilter, CourierWhereInput>
    queries?: CourierQueryListRelationFilter
    claimInvoices?: ClaimInvoiceListRelationFilter
  }, "id" | "workspaceId_trackingNumber">

  export type ShipmentOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    courierId?: SortOrder
    orderId?: SortOrder
    orderDate?: SortOrder
    processedDate?: SortOrder
    processedDay?: SortOrder
    country?: SortOrder
    source?: SortOrder
    referenceNum?: SortOrder
    postalService?: SortOrder
    trackingNumber?: SortOrder
    latestUpdate?: SortOrder
    slaStatus?: SortOrder
    lastScanDate?: SortOrder
    lastScanDay?: SortOrder
    slaDays?: SortOrder
    estimatedDeliveryDate?: SortOrder
    estimatedDeliveryDay?: SortOrder
    formulaDate?: SortOrder
    formulaDaysCount?: SortOrder
    slaForClaims?: SortOrder
    courierName?: SortOrder
    reportTab?: SortOrder
    recipientName?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    recipientAddress?: SortOrder
    recipientCity?: SortOrder
    recipientPostcode?: SortOrder
    sku?: SortOrder
    itemTitle?: SortOrder
    quantity?: SortOrder
    retailValue?: SortOrder
    wholesaleCost?: SortOrder
    postageCost?: SortOrder
    currency?: SortOrder
    trackingHistoryJson?: SortOrder
    customFieldsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShipmentCountOrderByAggregateInput
    _avg?: ShipmentAvgOrderByAggregateInput
    _max?: ShipmentMaxOrderByAggregateInput
    _min?: ShipmentMinOrderByAggregateInput
    _sum?: ShipmentSumOrderByAggregateInput
  }

  export type ShipmentScalarWhereWithAggregatesInput = {
    AND?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    OR?: ShipmentScalarWhereWithAggregatesInput[]
    NOT?: ShipmentScalarWhereWithAggregatesInput | ShipmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Shipment"> | string
    workspaceId?: StringWithAggregatesFilter<"Shipment"> | string
    courierId?: StringWithAggregatesFilter<"Shipment"> | string
    orderId?: StringWithAggregatesFilter<"Shipment"> | string
    orderDate?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    processedDate?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    processedDay?: StringWithAggregatesFilter<"Shipment"> | string
    country?: StringWithAggregatesFilter<"Shipment"> | string
    source?: StringWithAggregatesFilter<"Shipment"> | string
    referenceNum?: StringWithAggregatesFilter<"Shipment"> | string
    postalService?: StringWithAggregatesFilter<"Shipment"> | string
    trackingNumber?: StringWithAggregatesFilter<"Shipment"> | string
    latestUpdate?: StringWithAggregatesFilter<"Shipment"> | string
    slaStatus?: StringWithAggregatesFilter<"Shipment"> | string
    lastScanDate?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    lastScanDay?: StringWithAggregatesFilter<"Shipment"> | string
    slaDays?: IntWithAggregatesFilter<"Shipment"> | number
    estimatedDeliveryDate?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    estimatedDeliveryDay?: StringWithAggregatesFilter<"Shipment"> | string
    formulaDate?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    formulaDaysCount?: IntWithAggregatesFilter<"Shipment"> | number
    slaForClaims?: IntWithAggregatesFilter<"Shipment"> | number
    courierName?: StringWithAggregatesFilter<"Shipment"> | string
    reportTab?: StringWithAggregatesFilter<"Shipment"> | string
    recipientName?: StringWithAggregatesFilter<"Shipment"> | string
    recipientEmail?: StringWithAggregatesFilter<"Shipment"> | string
    recipientPhone?: StringWithAggregatesFilter<"Shipment"> | string
    recipientAddress?: StringWithAggregatesFilter<"Shipment"> | string
    recipientCity?: StringWithAggregatesFilter<"Shipment"> | string
    recipientPostcode?: StringWithAggregatesFilter<"Shipment"> | string
    sku?: StringWithAggregatesFilter<"Shipment"> | string
    itemTitle?: StringWithAggregatesFilter<"Shipment"> | string
    quantity?: IntWithAggregatesFilter<"Shipment"> | number
    retailValue?: FloatWithAggregatesFilter<"Shipment"> | number
    wholesaleCost?: FloatWithAggregatesFilter<"Shipment"> | number
    postageCost?: FloatWithAggregatesFilter<"Shipment"> | number
    currency?: StringWithAggregatesFilter<"Shipment"> | string
    trackingHistoryJson?: StringWithAggregatesFilter<"Shipment"> | string
    customFieldsJson?: StringWithAggregatesFilter<"Shipment"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shipment"> | Date | string
  }

  export type CourierQueryWhereInput = {
    AND?: CourierQueryWhereInput | CourierQueryWhereInput[]
    OR?: CourierQueryWhereInput[]
    NOT?: CourierQueryWhereInput | CourierQueryWhereInput[]
    id?: StringFilter<"CourierQuery"> | string
    workspaceId?: StringFilter<"CourierQuery"> | string
    shipmentId?: StringFilter<"CourierQuery"> | string
    courierId?: StringFilter<"CourierQuery"> | string
    queryReference?: StringFilter<"CourierQuery"> | string
    recipientEmail?: StringFilter<"CourierQuery"> | string
    subject?: StringFilter<"CourierQuery"> | string
    emailBodySent?: StringFilter<"CourierQuery"> | string
    status?: StringFilter<"CourierQuery"> | string
    courierReplyText?: StringNullableFilter<"CourierQuery"> | string | null
    courierRepliedAt?: DateTimeNullableFilter<"CourierQuery"> | Date | string | null
    autoTriggeredClaimId?: StringNullableFilter<"CourierQuery"> | string | null
    createdAt?: DateTimeFilter<"CourierQuery"> | Date | string
    updatedAt?: DateTimeFilter<"CourierQuery"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    shipment?: XOR<ShipmentRelationFilter, ShipmentWhereInput>
    courier?: XOR<CourierRelationFilter, CourierWhereInput>
  }

  export type CourierQueryOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    queryReference?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    emailBodySent?: SortOrder
    status?: SortOrder
    courierReplyText?: SortOrderInput | SortOrder
    courierRepliedAt?: SortOrderInput | SortOrder
    autoTriggeredClaimId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    shipment?: ShipmentOrderByWithRelationInput
    courier?: CourierOrderByWithRelationInput
  }

  export type CourierQueryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CourierQueryWhereInput | CourierQueryWhereInput[]
    OR?: CourierQueryWhereInput[]
    NOT?: CourierQueryWhereInput | CourierQueryWhereInput[]
    workspaceId?: StringFilter<"CourierQuery"> | string
    shipmentId?: StringFilter<"CourierQuery"> | string
    courierId?: StringFilter<"CourierQuery"> | string
    queryReference?: StringFilter<"CourierQuery"> | string
    recipientEmail?: StringFilter<"CourierQuery"> | string
    subject?: StringFilter<"CourierQuery"> | string
    emailBodySent?: StringFilter<"CourierQuery"> | string
    status?: StringFilter<"CourierQuery"> | string
    courierReplyText?: StringNullableFilter<"CourierQuery"> | string | null
    courierRepliedAt?: DateTimeNullableFilter<"CourierQuery"> | Date | string | null
    autoTriggeredClaimId?: StringNullableFilter<"CourierQuery"> | string | null
    createdAt?: DateTimeFilter<"CourierQuery"> | Date | string
    updatedAt?: DateTimeFilter<"CourierQuery"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    shipment?: XOR<ShipmentRelationFilter, ShipmentWhereInput>
    courier?: XOR<CourierRelationFilter, CourierWhereInput>
  }, "id">

  export type CourierQueryOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    queryReference?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    emailBodySent?: SortOrder
    status?: SortOrder
    courierReplyText?: SortOrderInput | SortOrder
    courierRepliedAt?: SortOrderInput | SortOrder
    autoTriggeredClaimId?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: CourierQueryCountOrderByAggregateInput
    _max?: CourierQueryMaxOrderByAggregateInput
    _min?: CourierQueryMinOrderByAggregateInput
  }

  export type CourierQueryScalarWhereWithAggregatesInput = {
    AND?: CourierQueryScalarWhereWithAggregatesInput | CourierQueryScalarWhereWithAggregatesInput[]
    OR?: CourierQueryScalarWhereWithAggregatesInput[]
    NOT?: CourierQueryScalarWhereWithAggregatesInput | CourierQueryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CourierQuery"> | string
    workspaceId?: StringWithAggregatesFilter<"CourierQuery"> | string
    shipmentId?: StringWithAggregatesFilter<"CourierQuery"> | string
    courierId?: StringWithAggregatesFilter<"CourierQuery"> | string
    queryReference?: StringWithAggregatesFilter<"CourierQuery"> | string
    recipientEmail?: StringWithAggregatesFilter<"CourierQuery"> | string
    subject?: StringWithAggregatesFilter<"CourierQuery"> | string
    emailBodySent?: StringWithAggregatesFilter<"CourierQuery"> | string
    status?: StringWithAggregatesFilter<"CourierQuery"> | string
    courierReplyText?: StringNullableWithAggregatesFilter<"CourierQuery"> | string | null
    courierRepliedAt?: DateTimeNullableWithAggregatesFilter<"CourierQuery"> | Date | string | null
    autoTriggeredClaimId?: StringNullableWithAggregatesFilter<"CourierQuery"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CourierQuery"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"CourierQuery"> | Date | string
  }

  export type ClaimInvoiceWhereInput = {
    AND?: ClaimInvoiceWhereInput | ClaimInvoiceWhereInput[]
    OR?: ClaimInvoiceWhereInput[]
    NOT?: ClaimInvoiceWhereInput | ClaimInvoiceWhereInput[]
    id?: StringFilter<"ClaimInvoice"> | string
    workspaceId?: StringFilter<"ClaimInvoice"> | string
    shipmentId?: StringFilter<"ClaimInvoice"> | string
    courierId?: StringFilter<"ClaimInvoice"> | string
    invoiceNumber?: StringFilter<"ClaimInvoice"> | string
    claimReference?: StringFilter<"ClaimInvoice"> | string
    status?: StringFilter<"ClaimInvoice"> | string
    pricingBasisUsed?: StringFilter<"ClaimInvoice"> | string
    merchandiseClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    postageClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    vatAmount?: FloatFilter<"ClaimInvoice"> | number
    totalClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    approvedAmount?: FloatNullableFilter<"ClaimInvoice"> | number | null
    creditNoteNumber?: StringNullableFilter<"ClaimInvoice"> | string | null
    invoiceFormatSnapshotJson?: StringFilter<"ClaimInvoice"> | string
    sentToEmail?: StringFilter<"ClaimInvoice"> | string
    submittedAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
    settledAt?: DateTimeNullableFilter<"ClaimInvoice"> | Date | string | null
    createdAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
    updatedAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    shipment?: XOR<ShipmentRelationFilter, ShipmentWhereInput>
    courier?: XOR<CourierRelationFilter, CourierWhereInput>
  }

  export type ClaimInvoiceOrderByWithRelationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    invoiceNumber?: SortOrder
    claimReference?: SortOrder
    status?: SortOrder
    pricingBasisUsed?: SortOrder
    merchandiseClaimAmount?: SortOrder
    postageClaimAmount?: SortOrder
    vatAmount?: SortOrder
    totalClaimAmount?: SortOrder
    approvedAmount?: SortOrderInput | SortOrder
    creditNoteNumber?: SortOrderInput | SortOrder
    invoiceFormatSnapshotJson?: SortOrder
    sentToEmail?: SortOrder
    submittedAt?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    workspace?: WorkspaceOrderByWithRelationInput
    shipment?: ShipmentOrderByWithRelationInput
    courier?: CourierOrderByWithRelationInput
  }

  export type ClaimInvoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    invoiceNumber?: string
    AND?: ClaimInvoiceWhereInput | ClaimInvoiceWhereInput[]
    OR?: ClaimInvoiceWhereInput[]
    NOT?: ClaimInvoiceWhereInput | ClaimInvoiceWhereInput[]
    workspaceId?: StringFilter<"ClaimInvoice"> | string
    shipmentId?: StringFilter<"ClaimInvoice"> | string
    courierId?: StringFilter<"ClaimInvoice"> | string
    claimReference?: StringFilter<"ClaimInvoice"> | string
    status?: StringFilter<"ClaimInvoice"> | string
    pricingBasisUsed?: StringFilter<"ClaimInvoice"> | string
    merchandiseClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    postageClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    vatAmount?: FloatFilter<"ClaimInvoice"> | number
    totalClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    approvedAmount?: FloatNullableFilter<"ClaimInvoice"> | number | null
    creditNoteNumber?: StringNullableFilter<"ClaimInvoice"> | string | null
    invoiceFormatSnapshotJson?: StringFilter<"ClaimInvoice"> | string
    sentToEmail?: StringFilter<"ClaimInvoice"> | string
    submittedAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
    settledAt?: DateTimeNullableFilter<"ClaimInvoice"> | Date | string | null
    createdAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
    updatedAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
    workspace?: XOR<WorkspaceRelationFilter, WorkspaceWhereInput>
    shipment?: XOR<ShipmentRelationFilter, ShipmentWhereInput>
    courier?: XOR<CourierRelationFilter, CourierWhereInput>
  }, "id" | "invoiceNumber">

  export type ClaimInvoiceOrderByWithAggregationInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    invoiceNumber?: SortOrder
    claimReference?: SortOrder
    status?: SortOrder
    pricingBasisUsed?: SortOrder
    merchandiseClaimAmount?: SortOrder
    postageClaimAmount?: SortOrder
    vatAmount?: SortOrder
    totalClaimAmount?: SortOrder
    approvedAmount?: SortOrderInput | SortOrder
    creditNoteNumber?: SortOrderInput | SortOrder
    invoiceFormatSnapshotJson?: SortOrder
    sentToEmail?: SortOrder
    submittedAt?: SortOrder
    settledAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ClaimInvoiceCountOrderByAggregateInput
    _avg?: ClaimInvoiceAvgOrderByAggregateInput
    _max?: ClaimInvoiceMaxOrderByAggregateInput
    _min?: ClaimInvoiceMinOrderByAggregateInput
    _sum?: ClaimInvoiceSumOrderByAggregateInput
  }

  export type ClaimInvoiceScalarWhereWithAggregatesInput = {
    AND?: ClaimInvoiceScalarWhereWithAggregatesInput | ClaimInvoiceScalarWhereWithAggregatesInput[]
    OR?: ClaimInvoiceScalarWhereWithAggregatesInput[]
    NOT?: ClaimInvoiceScalarWhereWithAggregatesInput | ClaimInvoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    workspaceId?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    shipmentId?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    courierId?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    invoiceNumber?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    claimReference?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    status?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    pricingBasisUsed?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    merchandiseClaimAmount?: FloatWithAggregatesFilter<"ClaimInvoice"> | number
    postageClaimAmount?: FloatWithAggregatesFilter<"ClaimInvoice"> | number
    vatAmount?: FloatWithAggregatesFilter<"ClaimInvoice"> | number
    totalClaimAmount?: FloatWithAggregatesFilter<"ClaimInvoice"> | number
    approvedAmount?: FloatNullableWithAggregatesFilter<"ClaimInvoice"> | number | null
    creditNoteNumber?: StringNullableWithAggregatesFilter<"ClaimInvoice"> | string | null
    invoiceFormatSnapshotJson?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    sentToEmail?: StringWithAggregatesFilter<"ClaimInvoice"> | string
    submittedAt?: DateTimeWithAggregatesFilter<"ClaimInvoice"> | Date | string
    settledAt?: DateTimeNullableWithAggregatesFilter<"ClaimInvoice"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ClaimInvoice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"ClaimInvoice"> | Date | string
  }

  export type WorkspaceCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    couriers?: CourierCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    couriers?: CourierUncheckedCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryUncheckedCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    couriers?: CourierUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUncheckedUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateManyInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type WorkspaceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type WorkspaceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutUsersInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    workspaceId: string
    name: string
    email: string
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutUsersNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateManyInput = {
    id?: string
    workspaceId: string
    name: string
    email: string
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierCreateInput = {
    id?: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutCouriersInput
    shipments?: ShipmentCreateNestedManyWithoutCourierInput
    queries?: CourierQueryCreateNestedManyWithoutCourierInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateInput = {
    id?: string
    workspaceId: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    queries?: CourierQueryUncheckedCreateNestedManyWithoutCourierInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutCouriersNestedInput
    shipments?: ShipmentUpdateManyWithoutCourierNestedInput
    queries?: CourierQueryUpdateManyWithoutCourierNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    queries?: CourierQueryUncheckedUpdateManyWithoutCourierNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type CourierCreateManyInput = {
    id?: string
    workspaceId: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateInput = {
    id?: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutShipmentsInput
    courier: CourierCreateNestedOneWithoutShipmentsInput
    queries?: CourierQueryCreateNestedManyWithoutShipmentInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateInput = {
    id?: string
    workspaceId: string
    courierId: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    queries?: CourierQueryUncheckedCreateNestedManyWithoutShipmentInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutShipmentsNestedInput
    courier?: CourierUpdateOneRequiredWithoutShipmentsNestedInput
    queries?: CourierQueryUpdateManyWithoutShipmentNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queries?: CourierQueryUncheckedUpdateManyWithoutShipmentNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentCreateManyInput = {
    id?: string
    workspaceId: string
    courierId: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryCreateInput = {
    id?: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutQueriesInput
    shipment: ShipmentCreateNestedOneWithoutQueriesInput
    courier: CourierCreateNestedOneWithoutQueriesInput
  }

  export type CourierQueryUncheckedCreateInput = {
    id?: string
    workspaceId: string
    shipmentId: string
    courierId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierQueryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutQueriesNestedInput
    shipment?: ShipmentUpdateOneRequiredWithoutQueriesNestedInput
    courier?: CourierUpdateOneRequiredWithoutQueriesNestedInput
  }

  export type CourierQueryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryCreateManyInput = {
    id?: string
    workspaceId: string
    shipmentId: string
    courierId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierQueryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceCreateInput = {
    id?: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutClaimInvoicesInput
    shipment: ShipmentCreateNestedOneWithoutClaimInvoicesInput
    courier: CourierCreateNestedOneWithoutClaimInvoicesInput
  }

  export type ClaimInvoiceUncheckedCreateInput = {
    id?: string
    workspaceId: string
    shipmentId: string
    courierId: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimInvoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutClaimInvoicesNestedInput
    shipment?: ShipmentUpdateOneRequiredWithoutClaimInvoicesNestedInput
    courier?: CourierUpdateOneRequiredWithoutClaimInvoicesNestedInput
  }

  export type ClaimInvoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceCreateManyInput = {
    id?: string
    workspaceId: string
    shipmentId: string
    courierId: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimInvoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type CourierListRelationFilter = {
    every?: CourierWhereInput
    some?: CourierWhereInput
    none?: CourierWhereInput
  }

  export type ShipmentListRelationFilter = {
    every?: ShipmentWhereInput
    some?: ShipmentWhereInput
    none?: ShipmentWhereInput
  }

  export type CourierQueryListRelationFilter = {
    every?: CourierQueryWhereInput
    some?: CourierQueryWhereInput
    none?: CourierQueryWhereInput
  }

  export type ClaimInvoiceListRelationFilter = {
    every?: ClaimInvoiceWhereInput
    some?: ClaimInvoiceWhereInput
    none?: ClaimInvoiceWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourierOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShipmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CourierQueryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ClaimInvoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type WorkspaceCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    vatNumber?: SortOrder
    companyRegNumber?: SortOrder
    currency?: SortOrder
    linnworksAppId?: SortOrder
    linnworksAppSecret?: SortOrder
    linnworksToken?: SortOrder
    linnworksAutoSync?: SortOrder
    lastLinnworksSyncAt?: SortOrder
    senderName?: SortOrder
    senderEmail?: SortOrder
    replyToEmail?: SortOrder
    resendApiKey?: SortOrder
    autoQueryOutOfSla?: SortOrder
    autoClaimOnCourierLost?: SortOrder
    customColumnsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    vatNumber?: SortOrder
    companyRegNumber?: SortOrder
    currency?: SortOrder
    linnworksAppId?: SortOrder
    linnworksAppSecret?: SortOrder
    linnworksToken?: SortOrder
    linnworksAutoSync?: SortOrder
    lastLinnworksSyncAt?: SortOrder
    senderName?: SortOrder
    senderEmail?: SortOrder
    replyToEmail?: SortOrder
    resendApiKey?: SortOrder
    autoQueryOutOfSla?: SortOrder
    autoClaimOnCourierLost?: SortOrder
    customColumnsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type WorkspaceMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    email?: SortOrder
    phone?: SortOrder
    address?: SortOrder
    city?: SortOrder
    postcode?: SortOrder
    country?: SortOrder
    vatNumber?: SortOrder
    companyRegNumber?: SortOrder
    currency?: SortOrder
    linnworksAppId?: SortOrder
    linnworksAppSecret?: SortOrder
    linnworksToken?: SortOrder
    linnworksAutoSync?: SortOrder
    lastLinnworksSyncAt?: SortOrder
    senderName?: SortOrder
    senderEmail?: SortOrder
    replyToEmail?: SortOrder
    resendApiKey?: SortOrder
    autoQueryOutOfSla?: SortOrder
    autoClaimOnCourierLost?: SortOrder
    customColumnsJson?: SortOrder
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type WorkspaceRelationFilter = {
    is?: WorkspaceWhereInput
    isNot?: WorkspaceWhereInput
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    name?: SortOrder
    email?: SortOrder
    passwordHash?: SortOrder
    authProvider?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type CourierWorkspaceIdCodeCompoundUniqueInput = {
    workspaceId: string
    code: string
  }

  export type CourierCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    accountNumber?: SortOrder
    trackingApiProvider?: SortOrder
    apiKey?: SortOrder
    apiEndpoint?: SortOrder
    isLiveApiConnected?: SortOrder
    queryEmail?: SortOrder
    claimsEmail?: SortOrder
    defaultSlaDays?: SortOrder
    stalledThresholdHours?: SortOrder
    claimLossThresholdDays?: SortOrder
    claimFilingWindowDays?: SortOrder
    invoiceFormatName?: SortOrder
    pricingBasis?: SortOrder
    maxLiabilityCap?: SortOrder
    includePostageRefund?: SortOrder
    vatRatePercent?: SortOrder
    invoiceHeaderTitle?: SortOrder
    invoiceRequiredFieldsJson?: SortOrder
    invoiceDeclarationText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourierAvgOrderByAggregateInput = {
    defaultSlaDays?: SortOrder
    stalledThresholdHours?: SortOrder
    claimLossThresholdDays?: SortOrder
    claimFilingWindowDays?: SortOrder
    maxLiabilityCap?: SortOrder
    vatRatePercent?: SortOrder
  }

  export type CourierMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    accountNumber?: SortOrder
    trackingApiProvider?: SortOrder
    apiKey?: SortOrder
    apiEndpoint?: SortOrder
    isLiveApiConnected?: SortOrder
    queryEmail?: SortOrder
    claimsEmail?: SortOrder
    defaultSlaDays?: SortOrder
    stalledThresholdHours?: SortOrder
    claimLossThresholdDays?: SortOrder
    claimFilingWindowDays?: SortOrder
    invoiceFormatName?: SortOrder
    pricingBasis?: SortOrder
    maxLiabilityCap?: SortOrder
    includePostageRefund?: SortOrder
    vatRatePercent?: SortOrder
    invoiceHeaderTitle?: SortOrder
    invoiceRequiredFieldsJson?: SortOrder
    invoiceDeclarationText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourierMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    code?: SortOrder
    name?: SortOrder
    accountNumber?: SortOrder
    trackingApiProvider?: SortOrder
    apiKey?: SortOrder
    apiEndpoint?: SortOrder
    isLiveApiConnected?: SortOrder
    queryEmail?: SortOrder
    claimsEmail?: SortOrder
    defaultSlaDays?: SortOrder
    stalledThresholdHours?: SortOrder
    claimLossThresholdDays?: SortOrder
    claimFilingWindowDays?: SortOrder
    invoiceFormatName?: SortOrder
    pricingBasis?: SortOrder
    maxLiabilityCap?: SortOrder
    includePostageRefund?: SortOrder
    vatRatePercent?: SortOrder
    invoiceHeaderTitle?: SortOrder
    invoiceRequiredFieldsJson?: SortOrder
    invoiceDeclarationText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourierSumOrderByAggregateInput = {
    defaultSlaDays?: SortOrder
    stalledThresholdHours?: SortOrder
    claimLossThresholdDays?: SortOrder
    claimFilingWindowDays?: SortOrder
    maxLiabilityCap?: SortOrder
    vatRatePercent?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type CourierRelationFilter = {
    is?: CourierWhereInput
    isNot?: CourierWhereInput
  }

  export type ShipmentWorkspaceIdTrackingNumberCompoundUniqueInput = {
    workspaceId: string
    trackingNumber: string
  }

  export type ShipmentCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    courierId?: SortOrder
    orderId?: SortOrder
    orderDate?: SortOrder
    processedDate?: SortOrder
    processedDay?: SortOrder
    country?: SortOrder
    source?: SortOrder
    referenceNum?: SortOrder
    postalService?: SortOrder
    trackingNumber?: SortOrder
    latestUpdate?: SortOrder
    slaStatus?: SortOrder
    lastScanDate?: SortOrder
    lastScanDay?: SortOrder
    slaDays?: SortOrder
    estimatedDeliveryDate?: SortOrder
    estimatedDeliveryDay?: SortOrder
    formulaDate?: SortOrder
    formulaDaysCount?: SortOrder
    slaForClaims?: SortOrder
    courierName?: SortOrder
    reportTab?: SortOrder
    recipientName?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    recipientAddress?: SortOrder
    recipientCity?: SortOrder
    recipientPostcode?: SortOrder
    sku?: SortOrder
    itemTitle?: SortOrder
    quantity?: SortOrder
    retailValue?: SortOrder
    wholesaleCost?: SortOrder
    postageCost?: SortOrder
    currency?: SortOrder
    trackingHistoryJson?: SortOrder
    customFieldsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentAvgOrderByAggregateInput = {
    slaDays?: SortOrder
    formulaDaysCount?: SortOrder
    slaForClaims?: SortOrder
    quantity?: SortOrder
    retailValue?: SortOrder
    wholesaleCost?: SortOrder
    postageCost?: SortOrder
  }

  export type ShipmentMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    courierId?: SortOrder
    orderId?: SortOrder
    orderDate?: SortOrder
    processedDate?: SortOrder
    processedDay?: SortOrder
    country?: SortOrder
    source?: SortOrder
    referenceNum?: SortOrder
    postalService?: SortOrder
    trackingNumber?: SortOrder
    latestUpdate?: SortOrder
    slaStatus?: SortOrder
    lastScanDate?: SortOrder
    lastScanDay?: SortOrder
    slaDays?: SortOrder
    estimatedDeliveryDate?: SortOrder
    estimatedDeliveryDay?: SortOrder
    formulaDate?: SortOrder
    formulaDaysCount?: SortOrder
    slaForClaims?: SortOrder
    courierName?: SortOrder
    reportTab?: SortOrder
    recipientName?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    recipientAddress?: SortOrder
    recipientCity?: SortOrder
    recipientPostcode?: SortOrder
    sku?: SortOrder
    itemTitle?: SortOrder
    quantity?: SortOrder
    retailValue?: SortOrder
    wholesaleCost?: SortOrder
    postageCost?: SortOrder
    currency?: SortOrder
    trackingHistoryJson?: SortOrder
    customFieldsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    courierId?: SortOrder
    orderId?: SortOrder
    orderDate?: SortOrder
    processedDate?: SortOrder
    processedDay?: SortOrder
    country?: SortOrder
    source?: SortOrder
    referenceNum?: SortOrder
    postalService?: SortOrder
    trackingNumber?: SortOrder
    latestUpdate?: SortOrder
    slaStatus?: SortOrder
    lastScanDate?: SortOrder
    lastScanDay?: SortOrder
    slaDays?: SortOrder
    estimatedDeliveryDate?: SortOrder
    estimatedDeliveryDay?: SortOrder
    formulaDate?: SortOrder
    formulaDaysCount?: SortOrder
    slaForClaims?: SortOrder
    courierName?: SortOrder
    reportTab?: SortOrder
    recipientName?: SortOrder
    recipientEmail?: SortOrder
    recipientPhone?: SortOrder
    recipientAddress?: SortOrder
    recipientCity?: SortOrder
    recipientPostcode?: SortOrder
    sku?: SortOrder
    itemTitle?: SortOrder
    quantity?: SortOrder
    retailValue?: SortOrder
    wholesaleCost?: SortOrder
    postageCost?: SortOrder
    currency?: SortOrder
    trackingHistoryJson?: SortOrder
    customFieldsJson?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShipmentSumOrderByAggregateInput = {
    slaDays?: SortOrder
    formulaDaysCount?: SortOrder
    slaForClaims?: SortOrder
    quantity?: SortOrder
    retailValue?: SortOrder
    wholesaleCost?: SortOrder
    postageCost?: SortOrder
  }

  export type ShipmentRelationFilter = {
    is?: ShipmentWhereInput
    isNot?: ShipmentWhereInput
  }

  export type CourierQueryCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    queryReference?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    emailBodySent?: SortOrder
    status?: SortOrder
    courierReplyText?: SortOrder
    courierRepliedAt?: SortOrder
    autoTriggeredClaimId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourierQueryMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    queryReference?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    emailBodySent?: SortOrder
    status?: SortOrder
    courierReplyText?: SortOrder
    courierRepliedAt?: SortOrder
    autoTriggeredClaimId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type CourierQueryMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    queryReference?: SortOrder
    recipientEmail?: SortOrder
    subject?: SortOrder
    emailBodySent?: SortOrder
    status?: SortOrder
    courierReplyText?: SortOrder
    courierRepliedAt?: SortOrder
    autoTriggeredClaimId?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimInvoiceCountOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    invoiceNumber?: SortOrder
    claimReference?: SortOrder
    status?: SortOrder
    pricingBasisUsed?: SortOrder
    merchandiseClaimAmount?: SortOrder
    postageClaimAmount?: SortOrder
    vatAmount?: SortOrder
    totalClaimAmount?: SortOrder
    approvedAmount?: SortOrder
    creditNoteNumber?: SortOrder
    invoiceFormatSnapshotJson?: SortOrder
    sentToEmail?: SortOrder
    submittedAt?: SortOrder
    settledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimInvoiceAvgOrderByAggregateInput = {
    merchandiseClaimAmount?: SortOrder
    postageClaimAmount?: SortOrder
    vatAmount?: SortOrder
    totalClaimAmount?: SortOrder
    approvedAmount?: SortOrder
  }

  export type ClaimInvoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    invoiceNumber?: SortOrder
    claimReference?: SortOrder
    status?: SortOrder
    pricingBasisUsed?: SortOrder
    merchandiseClaimAmount?: SortOrder
    postageClaimAmount?: SortOrder
    vatAmount?: SortOrder
    totalClaimAmount?: SortOrder
    approvedAmount?: SortOrder
    creditNoteNumber?: SortOrder
    invoiceFormatSnapshotJson?: SortOrder
    sentToEmail?: SortOrder
    submittedAt?: SortOrder
    settledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimInvoiceMinOrderByAggregateInput = {
    id?: SortOrder
    workspaceId?: SortOrder
    shipmentId?: SortOrder
    courierId?: SortOrder
    invoiceNumber?: SortOrder
    claimReference?: SortOrder
    status?: SortOrder
    pricingBasisUsed?: SortOrder
    merchandiseClaimAmount?: SortOrder
    postageClaimAmount?: SortOrder
    vatAmount?: SortOrder
    totalClaimAmount?: SortOrder
    approvedAmount?: SortOrder
    creditNoteNumber?: SortOrder
    invoiceFormatSnapshotJson?: SortOrder
    sentToEmail?: SortOrder
    submittedAt?: SortOrder
    settledAt?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ClaimInvoiceSumOrderByAggregateInput = {
    merchandiseClaimAmount?: SortOrder
    postageClaimAmount?: SortOrder
    vatAmount?: SortOrder
    totalClaimAmount?: SortOrder
    approvedAmount?: SortOrder
  }

  export type UserCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CourierCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<CourierCreateWithoutWorkspaceInput, CourierUncheckedCreateWithoutWorkspaceInput> | CourierCreateWithoutWorkspaceInput[] | CourierUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutWorkspaceInput | CourierCreateOrConnectWithoutWorkspaceInput[]
    createMany?: CourierCreateManyWorkspaceInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type ShipmentCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ShipmentCreateWithoutWorkspaceInput, ShipmentUncheckedCreateWithoutWorkspaceInput> | ShipmentCreateWithoutWorkspaceInput[] | ShipmentUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutWorkspaceInput | ShipmentCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ShipmentCreateManyWorkspaceInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type CourierQueryCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<CourierQueryCreateWithoutWorkspaceInput, CourierQueryUncheckedCreateWithoutWorkspaceInput> | CourierQueryCreateWithoutWorkspaceInput[] | CourierQueryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutWorkspaceInput | CourierQueryCreateOrConnectWithoutWorkspaceInput[]
    createMany?: CourierQueryCreateManyWorkspaceInputEnvelope
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
  }

  export type ClaimInvoiceCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ClaimInvoiceCreateWithoutWorkspaceInput, ClaimInvoiceUncheckedCreateWithoutWorkspaceInput> | ClaimInvoiceCreateWithoutWorkspaceInput[] | ClaimInvoiceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutWorkspaceInput | ClaimInvoiceCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ClaimInvoiceCreateManyWorkspaceInputEnvelope
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type CourierUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<CourierCreateWithoutWorkspaceInput, CourierUncheckedCreateWithoutWorkspaceInput> | CourierCreateWithoutWorkspaceInput[] | CourierUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutWorkspaceInput | CourierCreateOrConnectWithoutWorkspaceInput[]
    createMany?: CourierCreateManyWorkspaceInputEnvelope
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ShipmentCreateWithoutWorkspaceInput, ShipmentUncheckedCreateWithoutWorkspaceInput> | ShipmentCreateWithoutWorkspaceInput[] | ShipmentUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutWorkspaceInput | ShipmentCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ShipmentCreateManyWorkspaceInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type CourierQueryUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<CourierQueryCreateWithoutWorkspaceInput, CourierQueryUncheckedCreateWithoutWorkspaceInput> | CourierQueryCreateWithoutWorkspaceInput[] | CourierQueryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutWorkspaceInput | CourierQueryCreateOrConnectWithoutWorkspaceInput[]
    createMany?: CourierQueryCreateManyWorkspaceInputEnvelope
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
  }

  export type ClaimInvoiceUncheckedCreateNestedManyWithoutWorkspaceInput = {
    create?: XOR<ClaimInvoiceCreateWithoutWorkspaceInput, ClaimInvoiceUncheckedCreateWithoutWorkspaceInput> | ClaimInvoiceCreateWithoutWorkspaceInput[] | ClaimInvoiceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutWorkspaceInput | ClaimInvoiceCreateOrConnectWithoutWorkspaceInput[]
    createMany?: ClaimInvoiceCreateManyWorkspaceInputEnvelope
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput | UserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput | UserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWorkspaceInput | UserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CourierUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<CourierCreateWithoutWorkspaceInput, CourierUncheckedCreateWithoutWorkspaceInput> | CourierCreateWithoutWorkspaceInput[] | CourierUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutWorkspaceInput | CourierCreateOrConnectWithoutWorkspaceInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutWorkspaceInput | CourierUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: CourierCreateManyWorkspaceInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutWorkspaceInput | CourierUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutWorkspaceInput | CourierUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type ShipmentUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ShipmentCreateWithoutWorkspaceInput, ShipmentUncheckedCreateWithoutWorkspaceInput> | ShipmentCreateWithoutWorkspaceInput[] | ShipmentUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutWorkspaceInput | ShipmentCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutWorkspaceInput | ShipmentUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ShipmentCreateManyWorkspaceInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutWorkspaceInput | ShipmentUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutWorkspaceInput | ShipmentUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type CourierQueryUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<CourierQueryCreateWithoutWorkspaceInput, CourierQueryUncheckedCreateWithoutWorkspaceInput> | CourierQueryCreateWithoutWorkspaceInput[] | CourierQueryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutWorkspaceInput | CourierQueryCreateOrConnectWithoutWorkspaceInput[]
    upsert?: CourierQueryUpsertWithWhereUniqueWithoutWorkspaceInput | CourierQueryUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: CourierQueryCreateManyWorkspaceInputEnvelope
    set?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    disconnect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    delete?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    update?: CourierQueryUpdateWithWhereUniqueWithoutWorkspaceInput | CourierQueryUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: CourierQueryUpdateManyWithWhereWithoutWorkspaceInput | CourierQueryUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: CourierQueryScalarWhereInput | CourierQueryScalarWhereInput[]
  }

  export type ClaimInvoiceUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ClaimInvoiceCreateWithoutWorkspaceInput, ClaimInvoiceUncheckedCreateWithoutWorkspaceInput> | ClaimInvoiceCreateWithoutWorkspaceInput[] | ClaimInvoiceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutWorkspaceInput | ClaimInvoiceCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ClaimInvoiceUpsertWithWhereUniqueWithoutWorkspaceInput | ClaimInvoiceUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ClaimInvoiceCreateManyWorkspaceInputEnvelope
    set?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    disconnect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    delete?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    update?: ClaimInvoiceUpdateWithWhereUniqueWithoutWorkspaceInput | ClaimInvoiceUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ClaimInvoiceUpdateManyWithWhereWithoutWorkspaceInput | ClaimInvoiceUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ClaimInvoiceScalarWhereInput | ClaimInvoiceScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput> | UserCreateWithoutWorkspaceInput[] | UserUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: UserCreateOrConnectWithoutWorkspaceInput | UserCreateOrConnectWithoutWorkspaceInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutWorkspaceInput | UserUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: UserCreateManyWorkspaceInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutWorkspaceInput | UserUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: UserUpdateManyWithWhereWithoutWorkspaceInput | UserUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type CourierUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<CourierCreateWithoutWorkspaceInput, CourierUncheckedCreateWithoutWorkspaceInput> | CourierCreateWithoutWorkspaceInput[] | CourierUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CourierCreateOrConnectWithoutWorkspaceInput | CourierCreateOrConnectWithoutWorkspaceInput[]
    upsert?: CourierUpsertWithWhereUniqueWithoutWorkspaceInput | CourierUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: CourierCreateManyWorkspaceInputEnvelope
    set?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    disconnect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    delete?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    connect?: CourierWhereUniqueInput | CourierWhereUniqueInput[]
    update?: CourierUpdateWithWhereUniqueWithoutWorkspaceInput | CourierUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: CourierUpdateManyWithWhereWithoutWorkspaceInput | CourierUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: CourierScalarWhereInput | CourierScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ShipmentCreateWithoutWorkspaceInput, ShipmentUncheckedCreateWithoutWorkspaceInput> | ShipmentCreateWithoutWorkspaceInput[] | ShipmentUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutWorkspaceInput | ShipmentCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutWorkspaceInput | ShipmentUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ShipmentCreateManyWorkspaceInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutWorkspaceInput | ShipmentUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutWorkspaceInput | ShipmentUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type CourierQueryUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<CourierQueryCreateWithoutWorkspaceInput, CourierQueryUncheckedCreateWithoutWorkspaceInput> | CourierQueryCreateWithoutWorkspaceInput[] | CourierQueryUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutWorkspaceInput | CourierQueryCreateOrConnectWithoutWorkspaceInput[]
    upsert?: CourierQueryUpsertWithWhereUniqueWithoutWorkspaceInput | CourierQueryUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: CourierQueryCreateManyWorkspaceInputEnvelope
    set?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    disconnect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    delete?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    update?: CourierQueryUpdateWithWhereUniqueWithoutWorkspaceInput | CourierQueryUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: CourierQueryUpdateManyWithWhereWithoutWorkspaceInput | CourierQueryUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: CourierQueryScalarWhereInput | CourierQueryScalarWhereInput[]
  }

  export type ClaimInvoiceUncheckedUpdateManyWithoutWorkspaceNestedInput = {
    create?: XOR<ClaimInvoiceCreateWithoutWorkspaceInput, ClaimInvoiceUncheckedCreateWithoutWorkspaceInput> | ClaimInvoiceCreateWithoutWorkspaceInput[] | ClaimInvoiceUncheckedCreateWithoutWorkspaceInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutWorkspaceInput | ClaimInvoiceCreateOrConnectWithoutWorkspaceInput[]
    upsert?: ClaimInvoiceUpsertWithWhereUniqueWithoutWorkspaceInput | ClaimInvoiceUpsertWithWhereUniqueWithoutWorkspaceInput[]
    createMany?: ClaimInvoiceCreateManyWorkspaceInputEnvelope
    set?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    disconnect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    delete?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    update?: ClaimInvoiceUpdateWithWhereUniqueWithoutWorkspaceInput | ClaimInvoiceUpdateWithWhereUniqueWithoutWorkspaceInput[]
    updateMany?: ClaimInvoiceUpdateManyWithWhereWithoutWorkspaceInput | ClaimInvoiceUpdateManyWithWhereWithoutWorkspaceInput[]
    deleteMany?: ClaimInvoiceScalarWhereInput | ClaimInvoiceScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutUsersInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutUsersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutUsersInput
    upsert?: WorkspaceUpsertWithoutUsersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutUsersInput, WorkspaceUpdateWithoutUsersInput>, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceCreateNestedOneWithoutCouriersInput = {
    create?: XOR<WorkspaceCreateWithoutCouriersInput, WorkspaceUncheckedCreateWithoutCouriersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutCouriersInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type ShipmentCreateNestedManyWithoutCourierInput = {
    create?: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput> | ShipmentCreateWithoutCourierInput[] | ShipmentUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCourierInput | ShipmentCreateOrConnectWithoutCourierInput[]
    createMany?: ShipmentCreateManyCourierInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type CourierQueryCreateNestedManyWithoutCourierInput = {
    create?: XOR<CourierQueryCreateWithoutCourierInput, CourierQueryUncheckedCreateWithoutCourierInput> | CourierQueryCreateWithoutCourierInput[] | CourierQueryUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutCourierInput | CourierQueryCreateOrConnectWithoutCourierInput[]
    createMany?: CourierQueryCreateManyCourierInputEnvelope
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
  }

  export type ClaimInvoiceCreateNestedManyWithoutCourierInput = {
    create?: XOR<ClaimInvoiceCreateWithoutCourierInput, ClaimInvoiceUncheckedCreateWithoutCourierInput> | ClaimInvoiceCreateWithoutCourierInput[] | ClaimInvoiceUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutCourierInput | ClaimInvoiceCreateOrConnectWithoutCourierInput[]
    createMany?: ClaimInvoiceCreateManyCourierInputEnvelope
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
  }

  export type ShipmentUncheckedCreateNestedManyWithoutCourierInput = {
    create?: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput> | ShipmentCreateWithoutCourierInput[] | ShipmentUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCourierInput | ShipmentCreateOrConnectWithoutCourierInput[]
    createMany?: ShipmentCreateManyCourierInputEnvelope
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
  }

  export type CourierQueryUncheckedCreateNestedManyWithoutCourierInput = {
    create?: XOR<CourierQueryCreateWithoutCourierInput, CourierQueryUncheckedCreateWithoutCourierInput> | CourierQueryCreateWithoutCourierInput[] | CourierQueryUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutCourierInput | CourierQueryCreateOrConnectWithoutCourierInput[]
    createMany?: CourierQueryCreateManyCourierInputEnvelope
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
  }

  export type ClaimInvoiceUncheckedCreateNestedManyWithoutCourierInput = {
    create?: XOR<ClaimInvoiceCreateWithoutCourierInput, ClaimInvoiceUncheckedCreateWithoutCourierInput> | ClaimInvoiceCreateWithoutCourierInput[] | ClaimInvoiceUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutCourierInput | ClaimInvoiceCreateOrConnectWithoutCourierInput[]
    createMany?: ClaimInvoiceCreateManyCourierInputEnvelope
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type WorkspaceUpdateOneRequiredWithoutCouriersNestedInput = {
    create?: XOR<WorkspaceCreateWithoutCouriersInput, WorkspaceUncheckedCreateWithoutCouriersInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutCouriersInput
    upsert?: WorkspaceUpsertWithoutCouriersInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutCouriersInput, WorkspaceUpdateWithoutCouriersInput>, WorkspaceUncheckedUpdateWithoutCouriersInput>
  }

  export type ShipmentUpdateManyWithoutCourierNestedInput = {
    create?: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput> | ShipmentCreateWithoutCourierInput[] | ShipmentUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCourierInput | ShipmentCreateOrConnectWithoutCourierInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCourierInput | ShipmentUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: ShipmentCreateManyCourierInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCourierInput | ShipmentUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCourierInput | ShipmentUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type CourierQueryUpdateManyWithoutCourierNestedInput = {
    create?: XOR<CourierQueryCreateWithoutCourierInput, CourierQueryUncheckedCreateWithoutCourierInput> | CourierQueryCreateWithoutCourierInput[] | CourierQueryUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutCourierInput | CourierQueryCreateOrConnectWithoutCourierInput[]
    upsert?: CourierQueryUpsertWithWhereUniqueWithoutCourierInput | CourierQueryUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: CourierQueryCreateManyCourierInputEnvelope
    set?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    disconnect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    delete?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    update?: CourierQueryUpdateWithWhereUniqueWithoutCourierInput | CourierQueryUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: CourierQueryUpdateManyWithWhereWithoutCourierInput | CourierQueryUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: CourierQueryScalarWhereInput | CourierQueryScalarWhereInput[]
  }

  export type ClaimInvoiceUpdateManyWithoutCourierNestedInput = {
    create?: XOR<ClaimInvoiceCreateWithoutCourierInput, ClaimInvoiceUncheckedCreateWithoutCourierInput> | ClaimInvoiceCreateWithoutCourierInput[] | ClaimInvoiceUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutCourierInput | ClaimInvoiceCreateOrConnectWithoutCourierInput[]
    upsert?: ClaimInvoiceUpsertWithWhereUniqueWithoutCourierInput | ClaimInvoiceUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: ClaimInvoiceCreateManyCourierInputEnvelope
    set?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    disconnect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    delete?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    update?: ClaimInvoiceUpdateWithWhereUniqueWithoutCourierInput | ClaimInvoiceUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: ClaimInvoiceUpdateManyWithWhereWithoutCourierInput | ClaimInvoiceUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: ClaimInvoiceScalarWhereInput | ClaimInvoiceScalarWhereInput[]
  }

  export type ShipmentUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput> | ShipmentCreateWithoutCourierInput[] | ShipmentUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ShipmentCreateOrConnectWithoutCourierInput | ShipmentCreateOrConnectWithoutCourierInput[]
    upsert?: ShipmentUpsertWithWhereUniqueWithoutCourierInput | ShipmentUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: ShipmentCreateManyCourierInputEnvelope
    set?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    disconnect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    delete?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    connect?: ShipmentWhereUniqueInput | ShipmentWhereUniqueInput[]
    update?: ShipmentUpdateWithWhereUniqueWithoutCourierInput | ShipmentUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: ShipmentUpdateManyWithWhereWithoutCourierInput | ShipmentUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
  }

  export type CourierQueryUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: XOR<CourierQueryCreateWithoutCourierInput, CourierQueryUncheckedCreateWithoutCourierInput> | CourierQueryCreateWithoutCourierInput[] | CourierQueryUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutCourierInput | CourierQueryCreateOrConnectWithoutCourierInput[]
    upsert?: CourierQueryUpsertWithWhereUniqueWithoutCourierInput | CourierQueryUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: CourierQueryCreateManyCourierInputEnvelope
    set?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    disconnect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    delete?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    update?: CourierQueryUpdateWithWhereUniqueWithoutCourierInput | CourierQueryUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: CourierQueryUpdateManyWithWhereWithoutCourierInput | CourierQueryUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: CourierQueryScalarWhereInput | CourierQueryScalarWhereInput[]
  }

  export type ClaimInvoiceUncheckedUpdateManyWithoutCourierNestedInput = {
    create?: XOR<ClaimInvoiceCreateWithoutCourierInput, ClaimInvoiceUncheckedCreateWithoutCourierInput> | ClaimInvoiceCreateWithoutCourierInput[] | ClaimInvoiceUncheckedCreateWithoutCourierInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutCourierInput | ClaimInvoiceCreateOrConnectWithoutCourierInput[]
    upsert?: ClaimInvoiceUpsertWithWhereUniqueWithoutCourierInput | ClaimInvoiceUpsertWithWhereUniqueWithoutCourierInput[]
    createMany?: ClaimInvoiceCreateManyCourierInputEnvelope
    set?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    disconnect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    delete?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    update?: ClaimInvoiceUpdateWithWhereUniqueWithoutCourierInput | ClaimInvoiceUpdateWithWhereUniqueWithoutCourierInput[]
    updateMany?: ClaimInvoiceUpdateManyWithWhereWithoutCourierInput | ClaimInvoiceUpdateManyWithWhereWithoutCourierInput[]
    deleteMany?: ClaimInvoiceScalarWhereInput | ClaimInvoiceScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<WorkspaceCreateWithoutShipmentsInput, WorkspaceUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutShipmentsInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type CourierCreateNestedOneWithoutShipmentsInput = {
    create?: XOR<CourierCreateWithoutShipmentsInput, CourierUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: CourierCreateOrConnectWithoutShipmentsInput
    connect?: CourierWhereUniqueInput
  }

  export type CourierQueryCreateNestedManyWithoutShipmentInput = {
    create?: XOR<CourierQueryCreateWithoutShipmentInput, CourierQueryUncheckedCreateWithoutShipmentInput> | CourierQueryCreateWithoutShipmentInput[] | CourierQueryUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutShipmentInput | CourierQueryCreateOrConnectWithoutShipmentInput[]
    createMany?: CourierQueryCreateManyShipmentInputEnvelope
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
  }

  export type ClaimInvoiceCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ClaimInvoiceCreateWithoutShipmentInput, ClaimInvoiceUncheckedCreateWithoutShipmentInput> | ClaimInvoiceCreateWithoutShipmentInput[] | ClaimInvoiceUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutShipmentInput | ClaimInvoiceCreateOrConnectWithoutShipmentInput[]
    createMany?: ClaimInvoiceCreateManyShipmentInputEnvelope
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
  }

  export type CourierQueryUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<CourierQueryCreateWithoutShipmentInput, CourierQueryUncheckedCreateWithoutShipmentInput> | CourierQueryCreateWithoutShipmentInput[] | CourierQueryUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutShipmentInput | CourierQueryCreateOrConnectWithoutShipmentInput[]
    createMany?: CourierQueryCreateManyShipmentInputEnvelope
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
  }

  export type ClaimInvoiceUncheckedCreateNestedManyWithoutShipmentInput = {
    create?: XOR<ClaimInvoiceCreateWithoutShipmentInput, ClaimInvoiceUncheckedCreateWithoutShipmentInput> | ClaimInvoiceCreateWithoutShipmentInput[] | ClaimInvoiceUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutShipmentInput | ClaimInvoiceCreateOrConnectWithoutShipmentInput[]
    createMany?: ClaimInvoiceCreateManyShipmentInputEnvelope
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
  }

  export type WorkspaceUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<WorkspaceCreateWithoutShipmentsInput, WorkspaceUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutShipmentsInput
    upsert?: WorkspaceUpsertWithoutShipmentsInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutShipmentsInput, WorkspaceUpdateWithoutShipmentsInput>, WorkspaceUncheckedUpdateWithoutShipmentsInput>
  }

  export type CourierUpdateOneRequiredWithoutShipmentsNestedInput = {
    create?: XOR<CourierCreateWithoutShipmentsInput, CourierUncheckedCreateWithoutShipmentsInput>
    connectOrCreate?: CourierCreateOrConnectWithoutShipmentsInput
    upsert?: CourierUpsertWithoutShipmentsInput
    connect?: CourierWhereUniqueInput
    update?: XOR<XOR<CourierUpdateToOneWithWhereWithoutShipmentsInput, CourierUpdateWithoutShipmentsInput>, CourierUncheckedUpdateWithoutShipmentsInput>
  }

  export type CourierQueryUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<CourierQueryCreateWithoutShipmentInput, CourierQueryUncheckedCreateWithoutShipmentInput> | CourierQueryCreateWithoutShipmentInput[] | CourierQueryUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutShipmentInput | CourierQueryCreateOrConnectWithoutShipmentInput[]
    upsert?: CourierQueryUpsertWithWhereUniqueWithoutShipmentInput | CourierQueryUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: CourierQueryCreateManyShipmentInputEnvelope
    set?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    disconnect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    delete?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    update?: CourierQueryUpdateWithWhereUniqueWithoutShipmentInput | CourierQueryUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: CourierQueryUpdateManyWithWhereWithoutShipmentInput | CourierQueryUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: CourierQueryScalarWhereInput | CourierQueryScalarWhereInput[]
  }

  export type ClaimInvoiceUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ClaimInvoiceCreateWithoutShipmentInput, ClaimInvoiceUncheckedCreateWithoutShipmentInput> | ClaimInvoiceCreateWithoutShipmentInput[] | ClaimInvoiceUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutShipmentInput | ClaimInvoiceCreateOrConnectWithoutShipmentInput[]
    upsert?: ClaimInvoiceUpsertWithWhereUniqueWithoutShipmentInput | ClaimInvoiceUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ClaimInvoiceCreateManyShipmentInputEnvelope
    set?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    disconnect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    delete?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    update?: ClaimInvoiceUpdateWithWhereUniqueWithoutShipmentInput | ClaimInvoiceUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ClaimInvoiceUpdateManyWithWhereWithoutShipmentInput | ClaimInvoiceUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ClaimInvoiceScalarWhereInput | ClaimInvoiceScalarWhereInput[]
  }

  export type CourierQueryUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<CourierQueryCreateWithoutShipmentInput, CourierQueryUncheckedCreateWithoutShipmentInput> | CourierQueryCreateWithoutShipmentInput[] | CourierQueryUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: CourierQueryCreateOrConnectWithoutShipmentInput | CourierQueryCreateOrConnectWithoutShipmentInput[]
    upsert?: CourierQueryUpsertWithWhereUniqueWithoutShipmentInput | CourierQueryUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: CourierQueryCreateManyShipmentInputEnvelope
    set?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    disconnect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    delete?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    connect?: CourierQueryWhereUniqueInput | CourierQueryWhereUniqueInput[]
    update?: CourierQueryUpdateWithWhereUniqueWithoutShipmentInput | CourierQueryUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: CourierQueryUpdateManyWithWhereWithoutShipmentInput | CourierQueryUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: CourierQueryScalarWhereInput | CourierQueryScalarWhereInput[]
  }

  export type ClaimInvoiceUncheckedUpdateManyWithoutShipmentNestedInput = {
    create?: XOR<ClaimInvoiceCreateWithoutShipmentInput, ClaimInvoiceUncheckedCreateWithoutShipmentInput> | ClaimInvoiceCreateWithoutShipmentInput[] | ClaimInvoiceUncheckedCreateWithoutShipmentInput[]
    connectOrCreate?: ClaimInvoiceCreateOrConnectWithoutShipmentInput | ClaimInvoiceCreateOrConnectWithoutShipmentInput[]
    upsert?: ClaimInvoiceUpsertWithWhereUniqueWithoutShipmentInput | ClaimInvoiceUpsertWithWhereUniqueWithoutShipmentInput[]
    createMany?: ClaimInvoiceCreateManyShipmentInputEnvelope
    set?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    disconnect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    delete?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    connect?: ClaimInvoiceWhereUniqueInput | ClaimInvoiceWhereUniqueInput[]
    update?: ClaimInvoiceUpdateWithWhereUniqueWithoutShipmentInput | ClaimInvoiceUpdateWithWhereUniqueWithoutShipmentInput[]
    updateMany?: ClaimInvoiceUpdateManyWithWhereWithoutShipmentInput | ClaimInvoiceUpdateManyWithWhereWithoutShipmentInput[]
    deleteMany?: ClaimInvoiceScalarWhereInput | ClaimInvoiceScalarWhereInput[]
  }

  export type WorkspaceCreateNestedOneWithoutQueriesInput = {
    create?: XOR<WorkspaceCreateWithoutQueriesInput, WorkspaceUncheckedCreateWithoutQueriesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutQueriesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type ShipmentCreateNestedOneWithoutQueriesInput = {
    create?: XOR<ShipmentCreateWithoutQueriesInput, ShipmentUncheckedCreateWithoutQueriesInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutQueriesInput
    connect?: ShipmentWhereUniqueInput
  }

  export type CourierCreateNestedOneWithoutQueriesInput = {
    create?: XOR<CourierCreateWithoutQueriesInput, CourierUncheckedCreateWithoutQueriesInput>
    connectOrCreate?: CourierCreateOrConnectWithoutQueriesInput
    connect?: CourierWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutQueriesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutQueriesInput, WorkspaceUncheckedCreateWithoutQueriesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutQueriesInput
    upsert?: WorkspaceUpsertWithoutQueriesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutQueriesInput, WorkspaceUpdateWithoutQueriesInput>, WorkspaceUncheckedUpdateWithoutQueriesInput>
  }

  export type ShipmentUpdateOneRequiredWithoutQueriesNestedInput = {
    create?: XOR<ShipmentCreateWithoutQueriesInput, ShipmentUncheckedCreateWithoutQueriesInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutQueriesInput
    upsert?: ShipmentUpsertWithoutQueriesInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutQueriesInput, ShipmentUpdateWithoutQueriesInput>, ShipmentUncheckedUpdateWithoutQueriesInput>
  }

  export type CourierUpdateOneRequiredWithoutQueriesNestedInput = {
    create?: XOR<CourierCreateWithoutQueriesInput, CourierUncheckedCreateWithoutQueriesInput>
    connectOrCreate?: CourierCreateOrConnectWithoutQueriesInput
    upsert?: CourierUpsertWithoutQueriesInput
    connect?: CourierWhereUniqueInput
    update?: XOR<XOR<CourierUpdateToOneWithWhereWithoutQueriesInput, CourierUpdateWithoutQueriesInput>, CourierUncheckedUpdateWithoutQueriesInput>
  }

  export type WorkspaceCreateNestedOneWithoutClaimInvoicesInput = {
    create?: XOR<WorkspaceCreateWithoutClaimInvoicesInput, WorkspaceUncheckedCreateWithoutClaimInvoicesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutClaimInvoicesInput
    connect?: WorkspaceWhereUniqueInput
  }

  export type ShipmentCreateNestedOneWithoutClaimInvoicesInput = {
    create?: XOR<ShipmentCreateWithoutClaimInvoicesInput, ShipmentUncheckedCreateWithoutClaimInvoicesInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutClaimInvoicesInput
    connect?: ShipmentWhereUniqueInput
  }

  export type CourierCreateNestedOneWithoutClaimInvoicesInput = {
    create?: XOR<CourierCreateWithoutClaimInvoicesInput, CourierUncheckedCreateWithoutClaimInvoicesInput>
    connectOrCreate?: CourierCreateOrConnectWithoutClaimInvoicesInput
    connect?: CourierWhereUniqueInput
  }

  export type WorkspaceUpdateOneRequiredWithoutClaimInvoicesNestedInput = {
    create?: XOR<WorkspaceCreateWithoutClaimInvoicesInput, WorkspaceUncheckedCreateWithoutClaimInvoicesInput>
    connectOrCreate?: WorkspaceCreateOrConnectWithoutClaimInvoicesInput
    upsert?: WorkspaceUpsertWithoutClaimInvoicesInput
    connect?: WorkspaceWhereUniqueInput
    update?: XOR<XOR<WorkspaceUpdateToOneWithWhereWithoutClaimInvoicesInput, WorkspaceUpdateWithoutClaimInvoicesInput>, WorkspaceUncheckedUpdateWithoutClaimInvoicesInput>
  }

  export type ShipmentUpdateOneRequiredWithoutClaimInvoicesNestedInput = {
    create?: XOR<ShipmentCreateWithoutClaimInvoicesInput, ShipmentUncheckedCreateWithoutClaimInvoicesInput>
    connectOrCreate?: ShipmentCreateOrConnectWithoutClaimInvoicesInput
    upsert?: ShipmentUpsertWithoutClaimInvoicesInput
    connect?: ShipmentWhereUniqueInput
    update?: XOR<XOR<ShipmentUpdateToOneWithWhereWithoutClaimInvoicesInput, ShipmentUpdateWithoutClaimInvoicesInput>, ShipmentUncheckedUpdateWithoutClaimInvoicesInput>
  }

  export type CourierUpdateOneRequiredWithoutClaimInvoicesNestedInput = {
    create?: XOR<CourierCreateWithoutClaimInvoicesInput, CourierUncheckedCreateWithoutClaimInvoicesInput>
    connectOrCreate?: CourierCreateOrConnectWithoutClaimInvoicesInput
    upsert?: CourierUpsertWithoutClaimInvoicesInput
    connect?: CourierWhereUniqueInput
    update?: XOR<XOR<CourierUpdateToOneWithWhereWithoutClaimInvoicesInput, CourierUpdateWithoutClaimInvoicesInput>, CourierUncheckedUpdateWithoutClaimInvoicesInput>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type UserCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserCreateManyWorkspaceInputEnvelope = {
    data: UserCreateManyWorkspaceInput | UserCreateManyWorkspaceInput[]
  }

  export type CourierCreateWithoutWorkspaceInput = {
    id?: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentCreateNestedManyWithoutCourierInput
    queries?: CourierQueryCreateNestedManyWithoutCourierInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    queries?: CourierQueryUncheckedCreateNestedManyWithoutCourierInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierCreateOrConnectWithoutWorkspaceInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutWorkspaceInput, CourierUncheckedCreateWithoutWorkspaceInput>
  }

  export type CourierCreateManyWorkspaceInputEnvelope = {
    data: CourierCreateManyWorkspaceInput | CourierCreateManyWorkspaceInput[]
  }

  export type ShipmentCreateWithoutWorkspaceInput = {
    id?: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    courier: CourierCreateNestedOneWithoutShipmentsInput
    queries?: CourierQueryCreateNestedManyWithoutShipmentInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    courierId: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    queries?: CourierQueryUncheckedCreateNestedManyWithoutShipmentInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutWorkspaceInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutWorkspaceInput, ShipmentUncheckedCreateWithoutWorkspaceInput>
  }

  export type ShipmentCreateManyWorkspaceInputEnvelope = {
    data: ShipmentCreateManyWorkspaceInput | ShipmentCreateManyWorkspaceInput[]
  }

  export type CourierQueryCreateWithoutWorkspaceInput = {
    id?: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutQueriesInput
    courier: CourierCreateNestedOneWithoutQueriesInput
  }

  export type CourierQueryUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    shipmentId: string
    courierId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierQueryCreateOrConnectWithoutWorkspaceInput = {
    where: CourierQueryWhereUniqueInput
    create: XOR<CourierQueryCreateWithoutWorkspaceInput, CourierQueryUncheckedCreateWithoutWorkspaceInput>
  }

  export type CourierQueryCreateManyWorkspaceInputEnvelope = {
    data: CourierQueryCreateManyWorkspaceInput | CourierQueryCreateManyWorkspaceInput[]
  }

  export type ClaimInvoiceCreateWithoutWorkspaceInput = {
    id?: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    shipment: ShipmentCreateNestedOneWithoutClaimInvoicesInput
    courier: CourierCreateNestedOneWithoutClaimInvoicesInput
  }

  export type ClaimInvoiceUncheckedCreateWithoutWorkspaceInput = {
    id?: string
    shipmentId: string
    courierId: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimInvoiceCreateOrConnectWithoutWorkspaceInput = {
    where: ClaimInvoiceWhereUniqueInput
    create: XOR<ClaimInvoiceCreateWithoutWorkspaceInput, ClaimInvoiceUncheckedCreateWithoutWorkspaceInput>
  }

  export type ClaimInvoiceCreateManyWorkspaceInputEnvelope = {
    data: ClaimInvoiceCreateManyWorkspaceInput | ClaimInvoiceCreateManyWorkspaceInput[]
  }

  export type UserUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<UserCreateWithoutWorkspaceInput, UserUncheckedCreateWithoutWorkspaceInput>
  }

  export type UserUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutWorkspaceInput, UserUncheckedUpdateWithoutWorkspaceInput>
  }

  export type UserUpdateManyWithWhereWithoutWorkspaceInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    workspaceId?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    passwordHash?: StringNullableFilter<"User"> | string | null
    authProvider?: StringFilter<"User"> | string
    role?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
  }

  export type CourierUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: CourierWhereUniqueInput
    update: XOR<CourierUpdateWithoutWorkspaceInput, CourierUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<CourierCreateWithoutWorkspaceInput, CourierUncheckedCreateWithoutWorkspaceInput>
  }

  export type CourierUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: CourierWhereUniqueInput
    data: XOR<CourierUpdateWithoutWorkspaceInput, CourierUncheckedUpdateWithoutWorkspaceInput>
  }

  export type CourierUpdateManyWithWhereWithoutWorkspaceInput = {
    where: CourierScalarWhereInput
    data: XOR<CourierUpdateManyMutationInput, CourierUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type CourierScalarWhereInput = {
    AND?: CourierScalarWhereInput | CourierScalarWhereInput[]
    OR?: CourierScalarWhereInput[]
    NOT?: CourierScalarWhereInput | CourierScalarWhereInput[]
    id?: StringFilter<"Courier"> | string
    workspaceId?: StringFilter<"Courier"> | string
    code?: StringFilter<"Courier"> | string
    name?: StringFilter<"Courier"> | string
    accountNumber?: StringFilter<"Courier"> | string
    trackingApiProvider?: StringFilter<"Courier"> | string
    apiKey?: StringNullableFilter<"Courier"> | string | null
    apiEndpoint?: StringNullableFilter<"Courier"> | string | null
    isLiveApiConnected?: BoolFilter<"Courier"> | boolean
    queryEmail?: StringFilter<"Courier"> | string
    claimsEmail?: StringFilter<"Courier"> | string
    defaultSlaDays?: IntFilter<"Courier"> | number
    stalledThresholdHours?: IntFilter<"Courier"> | number
    claimLossThresholdDays?: IntFilter<"Courier"> | number
    claimFilingWindowDays?: IntFilter<"Courier"> | number
    invoiceFormatName?: StringFilter<"Courier"> | string
    pricingBasis?: StringFilter<"Courier"> | string
    maxLiabilityCap?: FloatNullableFilter<"Courier"> | number | null
    includePostageRefund?: BoolFilter<"Courier"> | boolean
    vatRatePercent?: FloatFilter<"Courier"> | number
    invoiceHeaderTitle?: StringFilter<"Courier"> | string
    invoiceRequiredFieldsJson?: StringFilter<"Courier"> | string
    invoiceDeclarationText?: StringFilter<"Courier"> | string
    createdAt?: DateTimeFilter<"Courier"> | Date | string
    updatedAt?: DateTimeFilter<"Courier"> | Date | string
  }

  export type ShipmentUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutWorkspaceInput, ShipmentUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ShipmentCreateWithoutWorkspaceInput, ShipmentUncheckedCreateWithoutWorkspaceInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutWorkspaceInput, ShipmentUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ShipmentScalarWhereInput = {
    AND?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    OR?: ShipmentScalarWhereInput[]
    NOT?: ShipmentScalarWhereInput | ShipmentScalarWhereInput[]
    id?: StringFilter<"Shipment"> | string
    workspaceId?: StringFilter<"Shipment"> | string
    courierId?: StringFilter<"Shipment"> | string
    orderId?: StringFilter<"Shipment"> | string
    orderDate?: DateTimeFilter<"Shipment"> | Date | string
    processedDate?: DateTimeFilter<"Shipment"> | Date | string
    processedDay?: StringFilter<"Shipment"> | string
    country?: StringFilter<"Shipment"> | string
    source?: StringFilter<"Shipment"> | string
    referenceNum?: StringFilter<"Shipment"> | string
    postalService?: StringFilter<"Shipment"> | string
    trackingNumber?: StringFilter<"Shipment"> | string
    latestUpdate?: StringFilter<"Shipment"> | string
    slaStatus?: StringFilter<"Shipment"> | string
    lastScanDate?: DateTimeFilter<"Shipment"> | Date | string
    lastScanDay?: StringFilter<"Shipment"> | string
    slaDays?: IntFilter<"Shipment"> | number
    estimatedDeliveryDate?: DateTimeFilter<"Shipment"> | Date | string
    estimatedDeliveryDay?: StringFilter<"Shipment"> | string
    formulaDate?: DateTimeFilter<"Shipment"> | Date | string
    formulaDaysCount?: IntFilter<"Shipment"> | number
    slaForClaims?: IntFilter<"Shipment"> | number
    courierName?: StringFilter<"Shipment"> | string
    reportTab?: StringFilter<"Shipment"> | string
    recipientName?: StringFilter<"Shipment"> | string
    recipientEmail?: StringFilter<"Shipment"> | string
    recipientPhone?: StringFilter<"Shipment"> | string
    recipientAddress?: StringFilter<"Shipment"> | string
    recipientCity?: StringFilter<"Shipment"> | string
    recipientPostcode?: StringFilter<"Shipment"> | string
    sku?: StringFilter<"Shipment"> | string
    itemTitle?: StringFilter<"Shipment"> | string
    quantity?: IntFilter<"Shipment"> | number
    retailValue?: FloatFilter<"Shipment"> | number
    wholesaleCost?: FloatFilter<"Shipment"> | number
    postageCost?: FloatFilter<"Shipment"> | number
    currency?: StringFilter<"Shipment"> | string
    trackingHistoryJson?: StringFilter<"Shipment"> | string
    customFieldsJson?: StringFilter<"Shipment"> | string
    createdAt?: DateTimeFilter<"Shipment"> | Date | string
    updatedAt?: DateTimeFilter<"Shipment"> | Date | string
  }

  export type CourierQueryUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: CourierQueryWhereUniqueInput
    update: XOR<CourierQueryUpdateWithoutWorkspaceInput, CourierQueryUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<CourierQueryCreateWithoutWorkspaceInput, CourierQueryUncheckedCreateWithoutWorkspaceInput>
  }

  export type CourierQueryUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: CourierQueryWhereUniqueInput
    data: XOR<CourierQueryUpdateWithoutWorkspaceInput, CourierQueryUncheckedUpdateWithoutWorkspaceInput>
  }

  export type CourierQueryUpdateManyWithWhereWithoutWorkspaceInput = {
    where: CourierQueryScalarWhereInput
    data: XOR<CourierQueryUpdateManyMutationInput, CourierQueryUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type CourierQueryScalarWhereInput = {
    AND?: CourierQueryScalarWhereInput | CourierQueryScalarWhereInput[]
    OR?: CourierQueryScalarWhereInput[]
    NOT?: CourierQueryScalarWhereInput | CourierQueryScalarWhereInput[]
    id?: StringFilter<"CourierQuery"> | string
    workspaceId?: StringFilter<"CourierQuery"> | string
    shipmentId?: StringFilter<"CourierQuery"> | string
    courierId?: StringFilter<"CourierQuery"> | string
    queryReference?: StringFilter<"CourierQuery"> | string
    recipientEmail?: StringFilter<"CourierQuery"> | string
    subject?: StringFilter<"CourierQuery"> | string
    emailBodySent?: StringFilter<"CourierQuery"> | string
    status?: StringFilter<"CourierQuery"> | string
    courierReplyText?: StringNullableFilter<"CourierQuery"> | string | null
    courierRepliedAt?: DateTimeNullableFilter<"CourierQuery"> | Date | string | null
    autoTriggeredClaimId?: StringNullableFilter<"CourierQuery"> | string | null
    createdAt?: DateTimeFilter<"CourierQuery"> | Date | string
    updatedAt?: DateTimeFilter<"CourierQuery"> | Date | string
  }

  export type ClaimInvoiceUpsertWithWhereUniqueWithoutWorkspaceInput = {
    where: ClaimInvoiceWhereUniqueInput
    update: XOR<ClaimInvoiceUpdateWithoutWorkspaceInput, ClaimInvoiceUncheckedUpdateWithoutWorkspaceInput>
    create: XOR<ClaimInvoiceCreateWithoutWorkspaceInput, ClaimInvoiceUncheckedCreateWithoutWorkspaceInput>
  }

  export type ClaimInvoiceUpdateWithWhereUniqueWithoutWorkspaceInput = {
    where: ClaimInvoiceWhereUniqueInput
    data: XOR<ClaimInvoiceUpdateWithoutWorkspaceInput, ClaimInvoiceUncheckedUpdateWithoutWorkspaceInput>
  }

  export type ClaimInvoiceUpdateManyWithWhereWithoutWorkspaceInput = {
    where: ClaimInvoiceScalarWhereInput
    data: XOR<ClaimInvoiceUpdateManyMutationInput, ClaimInvoiceUncheckedUpdateManyWithoutWorkspaceInput>
  }

  export type ClaimInvoiceScalarWhereInput = {
    AND?: ClaimInvoiceScalarWhereInput | ClaimInvoiceScalarWhereInput[]
    OR?: ClaimInvoiceScalarWhereInput[]
    NOT?: ClaimInvoiceScalarWhereInput | ClaimInvoiceScalarWhereInput[]
    id?: StringFilter<"ClaimInvoice"> | string
    workspaceId?: StringFilter<"ClaimInvoice"> | string
    shipmentId?: StringFilter<"ClaimInvoice"> | string
    courierId?: StringFilter<"ClaimInvoice"> | string
    invoiceNumber?: StringFilter<"ClaimInvoice"> | string
    claimReference?: StringFilter<"ClaimInvoice"> | string
    status?: StringFilter<"ClaimInvoice"> | string
    pricingBasisUsed?: StringFilter<"ClaimInvoice"> | string
    merchandiseClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    postageClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    vatAmount?: FloatFilter<"ClaimInvoice"> | number
    totalClaimAmount?: FloatFilter<"ClaimInvoice"> | number
    approvedAmount?: FloatNullableFilter<"ClaimInvoice"> | number | null
    creditNoteNumber?: StringNullableFilter<"ClaimInvoice"> | string | null
    invoiceFormatSnapshotJson?: StringFilter<"ClaimInvoice"> | string
    sentToEmail?: StringFilter<"ClaimInvoice"> | string
    submittedAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
    settledAt?: DateTimeNullableFilter<"ClaimInvoice"> | Date | string | null
    createdAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
    updatedAt?: DateTimeFilter<"ClaimInvoice"> | Date | string
  }

  export type WorkspaceCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    couriers?: CourierCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    couriers?: CourierUncheckedCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryUncheckedCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutUsersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
  }

  export type WorkspaceUpsertWithoutUsersInput = {
    update: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
    create: XOR<WorkspaceCreateWithoutUsersInput, WorkspaceUncheckedCreateWithoutUsersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutUsersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutUsersInput, WorkspaceUncheckedUpdateWithoutUsersInput>
  }

  export type WorkspaceUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couriers?: CourierUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    couriers?: CourierUncheckedUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUncheckedUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceCreateWithoutCouriersInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutCouriersInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryUncheckedCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutCouriersInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutCouriersInput, WorkspaceUncheckedCreateWithoutCouriersInput>
  }

  export type ShipmentCreateWithoutCourierInput = {
    id?: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutShipmentsInput
    queries?: CourierQueryCreateNestedManyWithoutShipmentInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutCourierInput = {
    id?: string
    workspaceId: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    queries?: CourierQueryUncheckedCreateNestedManyWithoutShipmentInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutCourierInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput>
  }

  export type ShipmentCreateManyCourierInputEnvelope = {
    data: ShipmentCreateManyCourierInput | ShipmentCreateManyCourierInput[]
  }

  export type CourierQueryCreateWithoutCourierInput = {
    id?: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutQueriesInput
    shipment: ShipmentCreateNestedOneWithoutQueriesInput
  }

  export type CourierQueryUncheckedCreateWithoutCourierInput = {
    id?: string
    workspaceId: string
    shipmentId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierQueryCreateOrConnectWithoutCourierInput = {
    where: CourierQueryWhereUniqueInput
    create: XOR<CourierQueryCreateWithoutCourierInput, CourierQueryUncheckedCreateWithoutCourierInput>
  }

  export type CourierQueryCreateManyCourierInputEnvelope = {
    data: CourierQueryCreateManyCourierInput | CourierQueryCreateManyCourierInput[]
  }

  export type ClaimInvoiceCreateWithoutCourierInput = {
    id?: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutClaimInvoicesInput
    shipment: ShipmentCreateNestedOneWithoutClaimInvoicesInput
  }

  export type ClaimInvoiceUncheckedCreateWithoutCourierInput = {
    id?: string
    workspaceId: string
    shipmentId: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimInvoiceCreateOrConnectWithoutCourierInput = {
    where: ClaimInvoiceWhereUniqueInput
    create: XOR<ClaimInvoiceCreateWithoutCourierInput, ClaimInvoiceUncheckedCreateWithoutCourierInput>
  }

  export type ClaimInvoiceCreateManyCourierInputEnvelope = {
    data: ClaimInvoiceCreateManyCourierInput | ClaimInvoiceCreateManyCourierInput[]
  }

  export type WorkspaceUpsertWithoutCouriersInput = {
    update: XOR<WorkspaceUpdateWithoutCouriersInput, WorkspaceUncheckedUpdateWithoutCouriersInput>
    create: XOR<WorkspaceCreateWithoutCouriersInput, WorkspaceUncheckedCreateWithoutCouriersInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutCouriersInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutCouriersInput, WorkspaceUncheckedUpdateWithoutCouriersInput>
  }

  export type WorkspaceUpdateWithoutCouriersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutCouriersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUncheckedUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type ShipmentUpsertWithWhereUniqueWithoutCourierInput = {
    where: ShipmentWhereUniqueInput
    update: XOR<ShipmentUpdateWithoutCourierInput, ShipmentUncheckedUpdateWithoutCourierInput>
    create: XOR<ShipmentCreateWithoutCourierInput, ShipmentUncheckedCreateWithoutCourierInput>
  }

  export type ShipmentUpdateWithWhereUniqueWithoutCourierInput = {
    where: ShipmentWhereUniqueInput
    data: XOR<ShipmentUpdateWithoutCourierInput, ShipmentUncheckedUpdateWithoutCourierInput>
  }

  export type ShipmentUpdateManyWithWhereWithoutCourierInput = {
    where: ShipmentScalarWhereInput
    data: XOR<ShipmentUpdateManyMutationInput, ShipmentUncheckedUpdateManyWithoutCourierInput>
  }

  export type CourierQueryUpsertWithWhereUniqueWithoutCourierInput = {
    where: CourierQueryWhereUniqueInput
    update: XOR<CourierQueryUpdateWithoutCourierInput, CourierQueryUncheckedUpdateWithoutCourierInput>
    create: XOR<CourierQueryCreateWithoutCourierInput, CourierQueryUncheckedCreateWithoutCourierInput>
  }

  export type CourierQueryUpdateWithWhereUniqueWithoutCourierInput = {
    where: CourierQueryWhereUniqueInput
    data: XOR<CourierQueryUpdateWithoutCourierInput, CourierQueryUncheckedUpdateWithoutCourierInput>
  }

  export type CourierQueryUpdateManyWithWhereWithoutCourierInput = {
    where: CourierQueryScalarWhereInput
    data: XOR<CourierQueryUpdateManyMutationInput, CourierQueryUncheckedUpdateManyWithoutCourierInput>
  }

  export type ClaimInvoiceUpsertWithWhereUniqueWithoutCourierInput = {
    where: ClaimInvoiceWhereUniqueInput
    update: XOR<ClaimInvoiceUpdateWithoutCourierInput, ClaimInvoiceUncheckedUpdateWithoutCourierInput>
    create: XOR<ClaimInvoiceCreateWithoutCourierInput, ClaimInvoiceUncheckedCreateWithoutCourierInput>
  }

  export type ClaimInvoiceUpdateWithWhereUniqueWithoutCourierInput = {
    where: ClaimInvoiceWhereUniqueInput
    data: XOR<ClaimInvoiceUpdateWithoutCourierInput, ClaimInvoiceUncheckedUpdateWithoutCourierInput>
  }

  export type ClaimInvoiceUpdateManyWithWhereWithoutCourierInput = {
    where: ClaimInvoiceScalarWhereInput
    data: XOR<ClaimInvoiceUpdateManyMutationInput, ClaimInvoiceUncheckedUpdateManyWithoutCourierInput>
  }

  export type WorkspaceCreateWithoutShipmentsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    couriers?: CourierCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutShipmentsInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    couriers?: CourierUncheckedCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryUncheckedCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutShipmentsInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutShipmentsInput, WorkspaceUncheckedCreateWithoutShipmentsInput>
  }

  export type CourierCreateWithoutShipmentsInput = {
    id?: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutCouriersInput
    queries?: CourierQueryCreateNestedManyWithoutCourierInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateWithoutShipmentsInput = {
    id?: string
    workspaceId: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    queries?: CourierQueryUncheckedCreateNestedManyWithoutCourierInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierCreateOrConnectWithoutShipmentsInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutShipmentsInput, CourierUncheckedCreateWithoutShipmentsInput>
  }

  export type CourierQueryCreateWithoutShipmentInput = {
    id?: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutQueriesInput
    courier: CourierCreateNestedOneWithoutQueriesInput
  }

  export type CourierQueryUncheckedCreateWithoutShipmentInput = {
    id?: string
    workspaceId: string
    courierId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierQueryCreateOrConnectWithoutShipmentInput = {
    where: CourierQueryWhereUniqueInput
    create: XOR<CourierQueryCreateWithoutShipmentInput, CourierQueryUncheckedCreateWithoutShipmentInput>
  }

  export type CourierQueryCreateManyShipmentInputEnvelope = {
    data: CourierQueryCreateManyShipmentInput | CourierQueryCreateManyShipmentInput[]
  }

  export type ClaimInvoiceCreateWithoutShipmentInput = {
    id?: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutClaimInvoicesInput
    courier: CourierCreateNestedOneWithoutClaimInvoicesInput
  }

  export type ClaimInvoiceUncheckedCreateWithoutShipmentInput = {
    id?: string
    workspaceId: string
    courierId: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimInvoiceCreateOrConnectWithoutShipmentInput = {
    where: ClaimInvoiceWhereUniqueInput
    create: XOR<ClaimInvoiceCreateWithoutShipmentInput, ClaimInvoiceUncheckedCreateWithoutShipmentInput>
  }

  export type ClaimInvoiceCreateManyShipmentInputEnvelope = {
    data: ClaimInvoiceCreateManyShipmentInput | ClaimInvoiceCreateManyShipmentInput[]
  }

  export type WorkspaceUpsertWithoutShipmentsInput = {
    update: XOR<WorkspaceUpdateWithoutShipmentsInput, WorkspaceUncheckedUpdateWithoutShipmentsInput>
    create: XOR<WorkspaceCreateWithoutShipmentsInput, WorkspaceUncheckedCreateWithoutShipmentsInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutShipmentsInput, WorkspaceUncheckedUpdateWithoutShipmentsInput>
  }

  export type WorkspaceUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    couriers?: CourierUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUncheckedUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type CourierUpsertWithoutShipmentsInput = {
    update: XOR<CourierUpdateWithoutShipmentsInput, CourierUncheckedUpdateWithoutShipmentsInput>
    create: XOR<CourierCreateWithoutShipmentsInput, CourierUncheckedCreateWithoutShipmentsInput>
    where?: CourierWhereInput
  }

  export type CourierUpdateToOneWithWhereWithoutShipmentsInput = {
    where?: CourierWhereInput
    data: XOR<CourierUpdateWithoutShipmentsInput, CourierUncheckedUpdateWithoutShipmentsInput>
  }

  export type CourierUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutCouriersNestedInput
    queries?: CourierQueryUpdateManyWithoutCourierNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateWithoutShipmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queries?: CourierQueryUncheckedUpdateManyWithoutCourierNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type CourierQueryUpsertWithWhereUniqueWithoutShipmentInput = {
    where: CourierQueryWhereUniqueInput
    update: XOR<CourierQueryUpdateWithoutShipmentInput, CourierQueryUncheckedUpdateWithoutShipmentInput>
    create: XOR<CourierQueryCreateWithoutShipmentInput, CourierQueryUncheckedCreateWithoutShipmentInput>
  }

  export type CourierQueryUpdateWithWhereUniqueWithoutShipmentInput = {
    where: CourierQueryWhereUniqueInput
    data: XOR<CourierQueryUpdateWithoutShipmentInput, CourierQueryUncheckedUpdateWithoutShipmentInput>
  }

  export type CourierQueryUpdateManyWithWhereWithoutShipmentInput = {
    where: CourierQueryScalarWhereInput
    data: XOR<CourierQueryUpdateManyMutationInput, CourierQueryUncheckedUpdateManyWithoutShipmentInput>
  }

  export type ClaimInvoiceUpsertWithWhereUniqueWithoutShipmentInput = {
    where: ClaimInvoiceWhereUniqueInput
    update: XOR<ClaimInvoiceUpdateWithoutShipmentInput, ClaimInvoiceUncheckedUpdateWithoutShipmentInput>
    create: XOR<ClaimInvoiceCreateWithoutShipmentInput, ClaimInvoiceUncheckedCreateWithoutShipmentInput>
  }

  export type ClaimInvoiceUpdateWithWhereUniqueWithoutShipmentInput = {
    where: ClaimInvoiceWhereUniqueInput
    data: XOR<ClaimInvoiceUpdateWithoutShipmentInput, ClaimInvoiceUncheckedUpdateWithoutShipmentInput>
  }

  export type ClaimInvoiceUpdateManyWithWhereWithoutShipmentInput = {
    where: ClaimInvoiceScalarWhereInput
    data: XOR<ClaimInvoiceUpdateManyMutationInput, ClaimInvoiceUncheckedUpdateManyWithoutShipmentInput>
  }

  export type WorkspaceCreateWithoutQueriesInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    couriers?: CourierCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutQueriesInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    couriers?: CourierUncheckedCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutWorkspaceInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutQueriesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutQueriesInput, WorkspaceUncheckedCreateWithoutQueriesInput>
  }

  export type ShipmentCreateWithoutQueriesInput = {
    id?: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutShipmentsInput
    courier: CourierCreateNestedOneWithoutShipmentsInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutQueriesInput = {
    id?: string
    workspaceId: string
    courierId: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutQueriesInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutQueriesInput, ShipmentUncheckedCreateWithoutQueriesInput>
  }

  export type CourierCreateWithoutQueriesInput = {
    id?: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutCouriersInput
    shipments?: ShipmentCreateNestedManyWithoutCourierInput
    claimInvoices?: ClaimInvoiceCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateWithoutQueriesInput = {
    id?: string
    workspaceId: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    claimInvoices?: ClaimInvoiceUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierCreateOrConnectWithoutQueriesInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutQueriesInput, CourierUncheckedCreateWithoutQueriesInput>
  }

  export type WorkspaceUpsertWithoutQueriesInput = {
    update: XOR<WorkspaceUpdateWithoutQueriesInput, WorkspaceUncheckedUpdateWithoutQueriesInput>
    create: XOR<WorkspaceCreateWithoutQueriesInput, WorkspaceUncheckedCreateWithoutQueriesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutQueriesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutQueriesInput, WorkspaceUncheckedUpdateWithoutQueriesInput>
  }

  export type WorkspaceUpdateWithoutQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    couriers?: CourierUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutWorkspaceNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type ShipmentUpsertWithoutQueriesInput = {
    update: XOR<ShipmentUpdateWithoutQueriesInput, ShipmentUncheckedUpdateWithoutQueriesInput>
    create: XOR<ShipmentCreateWithoutQueriesInput, ShipmentUncheckedCreateWithoutQueriesInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutQueriesInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutQueriesInput, ShipmentUncheckedUpdateWithoutQueriesInput>
  }

  export type ShipmentUpdateWithoutQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutShipmentsNestedInput
    courier?: CourierUpdateOneRequiredWithoutShipmentsNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type CourierUpsertWithoutQueriesInput = {
    update: XOR<CourierUpdateWithoutQueriesInput, CourierUncheckedUpdateWithoutQueriesInput>
    create: XOR<CourierCreateWithoutQueriesInput, CourierUncheckedCreateWithoutQueriesInput>
    where?: CourierWhereInput
  }

  export type CourierUpdateToOneWithWhereWithoutQueriesInput = {
    where?: CourierWhereInput
    data: XOR<CourierUpdateWithoutQueriesInput, CourierUncheckedUpdateWithoutQueriesInput>
  }

  export type CourierUpdateWithoutQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutCouriersNestedInput
    shipments?: ShipmentUpdateManyWithoutCourierNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateWithoutQueriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type WorkspaceCreateWithoutClaimInvoicesInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserCreateNestedManyWithoutWorkspaceInput
    couriers?: CourierCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceUncheckedCreateWithoutClaimInvoicesInput = {
    id?: string
    name: string
    slug: string
    email: string
    phone?: string
    address?: string
    city?: string
    postcode?: string
    country?: string
    vatNumber?: string
    companyRegNumber?: string
    currency?: string
    linnworksAppId?: string | null
    linnworksAppSecret?: string | null
    linnworksToken?: string | null
    linnworksAutoSync?: boolean
    lastLinnworksSyncAt?: Date | string | null
    senderName?: string
    senderEmail?: string
    replyToEmail?: string | null
    resendApiKey?: string | null
    autoQueryOutOfSla?: boolean
    autoClaimOnCourierLost?: boolean
    customColumnsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    users?: UserUncheckedCreateNestedManyWithoutWorkspaceInput
    couriers?: CourierUncheckedCreateNestedManyWithoutWorkspaceInput
    shipments?: ShipmentUncheckedCreateNestedManyWithoutWorkspaceInput
    queries?: CourierQueryUncheckedCreateNestedManyWithoutWorkspaceInput
  }

  export type WorkspaceCreateOrConnectWithoutClaimInvoicesInput = {
    where: WorkspaceWhereUniqueInput
    create: XOR<WorkspaceCreateWithoutClaimInvoicesInput, WorkspaceUncheckedCreateWithoutClaimInvoicesInput>
  }

  export type ShipmentCreateWithoutClaimInvoicesInput = {
    id?: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutShipmentsInput
    courier: CourierCreateNestedOneWithoutShipmentsInput
    queries?: CourierQueryCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentUncheckedCreateWithoutClaimInvoicesInput = {
    id?: string
    workspaceId: string
    courierId: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    queries?: CourierQueryUncheckedCreateNestedManyWithoutShipmentInput
  }

  export type ShipmentCreateOrConnectWithoutClaimInvoicesInput = {
    where: ShipmentWhereUniqueInput
    create: XOR<ShipmentCreateWithoutClaimInvoicesInput, ShipmentUncheckedCreateWithoutClaimInvoicesInput>
  }

  export type CourierCreateWithoutClaimInvoicesInput = {
    id?: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    workspace: WorkspaceCreateNestedOneWithoutCouriersInput
    shipments?: ShipmentCreateNestedManyWithoutCourierInput
    queries?: CourierQueryCreateNestedManyWithoutCourierInput
  }

  export type CourierUncheckedCreateWithoutClaimInvoicesInput = {
    id?: string
    workspaceId: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    shipments?: ShipmentUncheckedCreateNestedManyWithoutCourierInput
    queries?: CourierQueryUncheckedCreateNestedManyWithoutCourierInput
  }

  export type CourierCreateOrConnectWithoutClaimInvoicesInput = {
    where: CourierWhereUniqueInput
    create: XOR<CourierCreateWithoutClaimInvoicesInput, CourierUncheckedCreateWithoutClaimInvoicesInput>
  }

  export type WorkspaceUpsertWithoutClaimInvoicesInput = {
    update: XOR<WorkspaceUpdateWithoutClaimInvoicesInput, WorkspaceUncheckedUpdateWithoutClaimInvoicesInput>
    create: XOR<WorkspaceCreateWithoutClaimInvoicesInput, WorkspaceUncheckedCreateWithoutClaimInvoicesInput>
    where?: WorkspaceWhereInput
  }

  export type WorkspaceUpdateToOneWithWhereWithoutClaimInvoicesInput = {
    where?: WorkspaceWhereInput
    data: XOR<WorkspaceUpdateWithoutClaimInvoicesInput, WorkspaceUncheckedUpdateWithoutClaimInvoicesInput>
  }

  export type WorkspaceUpdateWithoutClaimInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUpdateManyWithoutWorkspaceNestedInput
    couriers?: CourierUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUpdateManyWithoutWorkspaceNestedInput
  }

  export type WorkspaceUncheckedUpdateWithoutClaimInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    phone?: StringFieldUpdateOperationsInput | string
    address?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    postcode?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    vatNumber?: StringFieldUpdateOperationsInput | string
    companyRegNumber?: StringFieldUpdateOperationsInput | string
    currency?: StringFieldUpdateOperationsInput | string
    linnworksAppId?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAppSecret?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksToken?: NullableStringFieldUpdateOperationsInput | string | null
    linnworksAutoSync?: BoolFieldUpdateOperationsInput | boolean
    lastLinnworksSyncAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    senderName?: StringFieldUpdateOperationsInput | string
    senderEmail?: StringFieldUpdateOperationsInput | string
    replyToEmail?: NullableStringFieldUpdateOperationsInput | string | null
    resendApiKey?: NullableStringFieldUpdateOperationsInput | string | null
    autoQueryOutOfSla?: BoolFieldUpdateOperationsInput | boolean
    autoClaimOnCourierLost?: BoolFieldUpdateOperationsInput | boolean
    customColumnsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    users?: UserUncheckedUpdateManyWithoutWorkspaceNestedInput
    couriers?: CourierUncheckedUpdateManyWithoutWorkspaceNestedInput
    shipments?: ShipmentUncheckedUpdateManyWithoutWorkspaceNestedInput
    queries?: CourierQueryUncheckedUpdateManyWithoutWorkspaceNestedInput
  }

  export type ShipmentUpsertWithoutClaimInvoicesInput = {
    update: XOR<ShipmentUpdateWithoutClaimInvoicesInput, ShipmentUncheckedUpdateWithoutClaimInvoicesInput>
    create: XOR<ShipmentCreateWithoutClaimInvoicesInput, ShipmentUncheckedCreateWithoutClaimInvoicesInput>
    where?: ShipmentWhereInput
  }

  export type ShipmentUpdateToOneWithWhereWithoutClaimInvoicesInput = {
    where?: ShipmentWhereInput
    data: XOR<ShipmentUpdateWithoutClaimInvoicesInput, ShipmentUncheckedUpdateWithoutClaimInvoicesInput>
  }

  export type ShipmentUpdateWithoutClaimInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutShipmentsNestedInput
    courier?: CourierUpdateOneRequiredWithoutShipmentsNestedInput
    queries?: CourierQueryUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutClaimInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queries?: CourierQueryUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type CourierUpsertWithoutClaimInvoicesInput = {
    update: XOR<CourierUpdateWithoutClaimInvoicesInput, CourierUncheckedUpdateWithoutClaimInvoicesInput>
    create: XOR<CourierCreateWithoutClaimInvoicesInput, CourierUncheckedCreateWithoutClaimInvoicesInput>
    where?: CourierWhereInput
  }

  export type CourierUpdateToOneWithWhereWithoutClaimInvoicesInput = {
    where?: CourierWhereInput
    data: XOR<CourierUpdateWithoutClaimInvoicesInput, CourierUncheckedUpdateWithoutClaimInvoicesInput>
  }

  export type CourierUpdateWithoutClaimInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutCouriersNestedInput
    shipments?: ShipmentUpdateManyWithoutCourierNestedInput
    queries?: CourierQueryUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateWithoutClaimInvoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    queries?: CourierQueryUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type UserCreateManyWorkspaceInput = {
    id?: string
    name: string
    email: string
    passwordHash?: string | null
    authProvider?: string
    role?: string
    createdAt?: Date | string
  }

  export type CourierCreateManyWorkspaceInput = {
    id?: string
    code: string
    name: string
    accountNumber?: string
    trackingApiProvider?: string
    apiKey?: string | null
    apiEndpoint?: string | null
    isLiveApiConnected?: boolean
    queryEmail?: string
    claimsEmail?: string
    defaultSlaDays?: number
    stalledThresholdHours?: number
    claimLossThresholdDays?: number
    claimFilingWindowDays?: number
    invoiceFormatName?: string
    pricingBasis?: string
    maxLiabilityCap?: number | null
    includePostageRefund?: boolean
    vatRatePercent?: number
    invoiceHeaderTitle?: string
    invoiceRequiredFieldsJson?: string
    invoiceDeclarationText?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentCreateManyWorkspaceInput = {
    id?: string
    courierId: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierQueryCreateManyWorkspaceInput = {
    id?: string
    shipmentId: string
    courierId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimInvoiceCreateManyWorkspaceInput = {
    id?: string
    shipmentId: string
    courierId: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    passwordHash?: NullableStringFieldUpdateOperationsInput | string | null
    authProvider?: StringFieldUpdateOperationsInput | string
    role?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUpdateManyWithoutCourierNestedInput
    queries?: CourierQueryUpdateManyWithoutCourierNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipments?: ShipmentUncheckedUpdateManyWithoutCourierNestedInput
    queries?: CourierQueryUncheckedUpdateManyWithoutCourierNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutCourierNestedInput
  }

  export type CourierUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    accountNumber?: StringFieldUpdateOperationsInput | string
    trackingApiProvider?: StringFieldUpdateOperationsInput | string
    apiKey?: NullableStringFieldUpdateOperationsInput | string | null
    apiEndpoint?: NullableStringFieldUpdateOperationsInput | string | null
    isLiveApiConnected?: BoolFieldUpdateOperationsInput | boolean
    queryEmail?: StringFieldUpdateOperationsInput | string
    claimsEmail?: StringFieldUpdateOperationsInput | string
    defaultSlaDays?: IntFieldUpdateOperationsInput | number
    stalledThresholdHours?: IntFieldUpdateOperationsInput | number
    claimLossThresholdDays?: IntFieldUpdateOperationsInput | number
    claimFilingWindowDays?: IntFieldUpdateOperationsInput | number
    invoiceFormatName?: StringFieldUpdateOperationsInput | string
    pricingBasis?: StringFieldUpdateOperationsInput | string
    maxLiabilityCap?: NullableFloatFieldUpdateOperationsInput | number | null
    includePostageRefund?: BoolFieldUpdateOperationsInput | boolean
    vatRatePercent?: FloatFieldUpdateOperationsInput | number
    invoiceHeaderTitle?: StringFieldUpdateOperationsInput | string
    invoiceRequiredFieldsJson?: StringFieldUpdateOperationsInput | string
    invoiceDeclarationText?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    courier?: CourierUpdateOneRequiredWithoutShipmentsNestedInput
    queries?: CourierQueryUpdateManyWithoutShipmentNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queries?: CourierQueryUncheckedUpdateManyWithoutShipmentNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutQueriesNestedInput
    courier?: CourierUpdateOneRequiredWithoutQueriesNestedInput
  }

  export type CourierQueryUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shipment?: ShipmentUpdateOneRequiredWithoutClaimInvoicesNestedInput
    courier?: CourierUpdateOneRequiredWithoutClaimInvoicesNestedInput
  }

  export type ClaimInvoiceUncheckedUpdateWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceUncheckedUpdateManyWithoutWorkspaceInput = {
    id?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShipmentCreateManyCourierInput = {
    id?: string
    workspaceId: string
    orderId: string
    orderDate: Date | string
    processedDate: Date | string
    processedDay: string
    country?: string
    source?: string
    referenceNum?: string
    postalService?: string
    trackingNumber: string
    latestUpdate?: string
    slaStatus?: string
    lastScanDate: Date | string
    lastScanDay: string
    slaDays?: number
    estimatedDeliveryDate: Date | string
    estimatedDeliveryDay: string
    formulaDate?: Date | string
    formulaDaysCount?: number
    slaForClaims?: number
    courierName: string
    reportTab?: string
    recipientName?: string
    recipientEmail?: string
    recipientPhone?: string
    recipientAddress?: string
    recipientCity?: string
    recipientPostcode?: string
    sku?: string
    itemTitle?: string
    quantity?: number
    retailValue?: number
    wholesaleCost?: number
    postageCost?: number
    currency?: string
    trackingHistoryJson?: string
    customFieldsJson?: string
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierQueryCreateManyCourierInput = {
    id?: string
    workspaceId: string
    shipmentId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimInvoiceCreateManyCourierInput = {
    id?: string
    workspaceId: string
    shipmentId: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShipmentUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutShipmentsNestedInput
    queries?: CourierQueryUpdateManyWithoutShipmentNestedInput
    claimInvoices?: ClaimInvoiceUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    queries?: CourierQueryUncheckedUpdateManyWithoutShipmentNestedInput
    claimInvoices?: ClaimInvoiceUncheckedUpdateManyWithoutShipmentNestedInput
  }

  export type ShipmentUncheckedUpdateManyWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    orderId?: StringFieldUpdateOperationsInput | string
    orderDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDate?: DateTimeFieldUpdateOperationsInput | Date | string
    processedDay?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    source?: StringFieldUpdateOperationsInput | string
    referenceNum?: StringFieldUpdateOperationsInput | string
    postalService?: StringFieldUpdateOperationsInput | string
    trackingNumber?: StringFieldUpdateOperationsInput | string
    latestUpdate?: StringFieldUpdateOperationsInput | string
    slaStatus?: StringFieldUpdateOperationsInput | string
    lastScanDate?: DateTimeFieldUpdateOperationsInput | Date | string
    lastScanDay?: StringFieldUpdateOperationsInput | string
    slaDays?: IntFieldUpdateOperationsInput | number
    estimatedDeliveryDate?: DateTimeFieldUpdateOperationsInput | Date | string
    estimatedDeliveryDay?: StringFieldUpdateOperationsInput | string
    formulaDate?: DateTimeFieldUpdateOperationsInput | Date | string
    formulaDaysCount?: IntFieldUpdateOperationsInput | number
    slaForClaims?: IntFieldUpdateOperationsInput | number
    courierName?: StringFieldUpdateOperationsInput | string
    reportTab?: StringFieldUpdateOperationsInput | string
    recipientName?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    recipientPhone?: StringFieldUpdateOperationsInput | string
    recipientAddress?: StringFieldUpdateOperationsInput | string
    recipientCity?: StringFieldUpdateOperationsInput | string
    recipientPostcode?: StringFieldUpdateOperationsInput | string
    sku?: StringFieldUpdateOperationsInput | string
    itemTitle?: StringFieldUpdateOperationsInput | string
    quantity?: IntFieldUpdateOperationsInput | number
    retailValue?: FloatFieldUpdateOperationsInput | number
    wholesaleCost?: FloatFieldUpdateOperationsInput | number
    postageCost?: FloatFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    trackingHistoryJson?: StringFieldUpdateOperationsInput | string
    customFieldsJson?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutQueriesNestedInput
    shipment?: ShipmentUpdateOneRequiredWithoutQueriesNestedInput
  }

  export type CourierQueryUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryUncheckedUpdateManyWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutClaimInvoicesNestedInput
    shipment?: ShipmentUpdateOneRequiredWithoutClaimInvoicesNestedInput
  }

  export type ClaimInvoiceUncheckedUpdateWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceUncheckedUpdateManyWithoutCourierInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    shipmentId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryCreateManyShipmentInput = {
    id?: string
    workspaceId: string
    courierId: string
    queryReference: string
    recipientEmail: string
    subject: string
    emailBodySent: string
    status?: string
    courierReplyText?: string | null
    courierRepliedAt?: Date | string | null
    autoTriggeredClaimId?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ClaimInvoiceCreateManyShipmentInput = {
    id?: string
    workspaceId: string
    courierId: string
    invoiceNumber: string
    claimReference: string
    status?: string
    pricingBasisUsed: string
    merchandiseClaimAmount: number
    postageClaimAmount: number
    vatAmount?: number
    totalClaimAmount: number
    approvedAmount?: number | null
    creditNoteNumber?: string | null
    invoiceFormatSnapshotJson: string
    sentToEmail: string
    submittedAt?: Date | string
    settledAt?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type CourierQueryUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutQueriesNestedInput
    courier?: CourierUpdateOneRequiredWithoutQueriesNestedInput
  }

  export type CourierQueryUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CourierQueryUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    queryReference?: StringFieldUpdateOperationsInput | string
    recipientEmail?: StringFieldUpdateOperationsInput | string
    subject?: StringFieldUpdateOperationsInput | string
    emailBodySent?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    courierReplyText?: NullableStringFieldUpdateOperationsInput | string | null
    courierRepliedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    autoTriggeredClaimId?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    workspace?: WorkspaceUpdateOneRequiredWithoutClaimInvoicesNestedInput
    courier?: CourierUpdateOneRequiredWithoutClaimInvoicesNestedInput
  }

  export type ClaimInvoiceUncheckedUpdateWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ClaimInvoiceUncheckedUpdateManyWithoutShipmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    workspaceId?: StringFieldUpdateOperationsInput | string
    courierId?: StringFieldUpdateOperationsInput | string
    invoiceNumber?: StringFieldUpdateOperationsInput | string
    claimReference?: StringFieldUpdateOperationsInput | string
    status?: StringFieldUpdateOperationsInput | string
    pricingBasisUsed?: StringFieldUpdateOperationsInput | string
    merchandiseClaimAmount?: FloatFieldUpdateOperationsInput | number
    postageClaimAmount?: FloatFieldUpdateOperationsInput | number
    vatAmount?: FloatFieldUpdateOperationsInput | number
    totalClaimAmount?: FloatFieldUpdateOperationsInput | number
    approvedAmount?: NullableFloatFieldUpdateOperationsInput | number | null
    creditNoteNumber?: NullableStringFieldUpdateOperationsInput | string | null
    invoiceFormatSnapshotJson?: StringFieldUpdateOperationsInput | string
    sentToEmail?: StringFieldUpdateOperationsInput | string
    submittedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    settledAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use WorkspaceCountOutputTypeDefaultArgs instead
     */
    export type WorkspaceCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkspaceCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourierCountOutputTypeDefaultArgs instead
     */
    export type CourierCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourierCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShipmentCountOutputTypeDefaultArgs instead
     */
    export type ShipmentCountOutputTypeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShipmentCountOutputTypeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use WorkspaceDefaultArgs instead
     */
    export type WorkspaceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = WorkspaceDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourierDefaultArgs instead
     */
    export type CourierArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourierDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ShipmentDefaultArgs instead
     */
    export type ShipmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ShipmentDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CourierQueryDefaultArgs instead
     */
    export type CourierQueryArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = CourierQueryDefaultArgs<ExtArgs>
    /**
     * @deprecated Use ClaimInvoiceDefaultArgs instead
     */
    export type ClaimInvoiceArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = ClaimInvoiceDefaultArgs<ExtArgs>

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
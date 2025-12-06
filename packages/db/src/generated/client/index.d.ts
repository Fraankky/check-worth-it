
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
 * Model Shop
 * 
 */
export type Shop = $Result.DefaultSelection<Prisma.$ShopPayload>
/**
 * Model Product
 * 
 */
export type Product = $Result.DefaultSelection<Prisma.$ProductPayload>
/**
 * Model ProductSnapshot
 * 
 */
export type ProductSnapshot = $Result.DefaultSelection<Prisma.$ProductSnapshotPayload>
/**
 * Model ProductReviewSample
 * 
 */
export type ProductReviewSample = $Result.DefaultSelection<Prisma.$ProductReviewSamplePayload>
/**
 * Model ProductAIAnalysis
 * 
 */
export type ProductAIAnalysis = $Result.DefaultSelection<Prisma.$ProductAIAnalysisPayload>
/**
 * Model CompareSession
 * 
 */
export type CompareSession = $Result.DefaultSelection<Prisma.$CompareSessionPayload>
/**
 * Model CompareItem
 * 
 */
export type CompareItem = $Result.DefaultSelection<Prisma.$CompareItemPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Marketplace: {
  SHOPEE: 'SHOPEE',
  TOKOPEDIA: 'TOKOPEDIA'
};

export type Marketplace = (typeof Marketplace)[keyof typeof Marketplace]

}

export type Marketplace = $Enums.Marketplace

export const Marketplace: typeof $Enums.Marketplace

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Shops
 * const shops = await prisma.shop.findMany()
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Shops
   * const shops = await prisma.shop.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
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
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.shop`: Exposes CRUD operations for the **Shop** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Shops
    * const shops = await prisma.shop.findMany()
    * ```
    */
  get shop(): Prisma.ShopDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.product`: Exposes CRUD operations for the **Product** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Products
    * const products = await prisma.product.findMany()
    * ```
    */
  get product(): Prisma.ProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productSnapshot`: Exposes CRUD operations for the **ProductSnapshot** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductSnapshots
    * const productSnapshots = await prisma.productSnapshot.findMany()
    * ```
    */
  get productSnapshot(): Prisma.ProductSnapshotDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productReviewSample`: Exposes CRUD operations for the **ProductReviewSample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductReviewSamples
    * const productReviewSamples = await prisma.productReviewSample.findMany()
    * ```
    */
  get productReviewSample(): Prisma.ProductReviewSampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.productAIAnalysis`: Exposes CRUD operations for the **ProductAIAnalysis** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ProductAIAnalyses
    * const productAIAnalyses = await prisma.productAIAnalysis.findMany()
    * ```
    */
  get productAIAnalysis(): Prisma.ProductAIAnalysisDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compareSession`: Exposes CRUD operations for the **CompareSession** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompareSessions
    * const compareSessions = await prisma.compareSession.findMany()
    * ```
    */
  get compareSession(): Prisma.CompareSessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.compareItem`: Exposes CRUD operations for the **CompareItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CompareItems
    * const compareItems = await prisma.compareItem.findMany()
    * ```
    */
  get compareItem(): Prisma.CompareItemDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 7.1.0
   * Query Engine version: ab635e6b9d606fa5c8fb8b1a7f909c3c3c1c98ba
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
    Shop: 'Shop',
    Product: 'Product',
    ProductSnapshot: 'ProductSnapshot',
    ProductReviewSample: 'ProductReviewSample',
    ProductAIAnalysis: 'ProductAIAnalysis',
    CompareSession: 'CompareSession',
    CompareItem: 'CompareItem'
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
      modelProps: "shop" | "product" | "productSnapshot" | "productReviewSample" | "productAIAnalysis" | "compareSession" | "compareItem"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Shop: {
        payload: Prisma.$ShopPayload<ExtArgs>
        fields: Prisma.ShopFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ShopFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ShopFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findFirst: {
            args: Prisma.ShopFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ShopFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          findMany: {
            args: Prisma.ShopFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          create: {
            args: Prisma.ShopCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          createMany: {
            args: Prisma.ShopCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ShopCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          delete: {
            args: Prisma.ShopDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          update: {
            args: Prisma.ShopUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          deleteMany: {
            args: Prisma.ShopDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ShopUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ShopUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>[]
          }
          upsert: {
            args: Prisma.ShopUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ShopPayload>
          }
          aggregate: {
            args: Prisma.ShopAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateShop>
          }
          groupBy: {
            args: Prisma.ShopGroupByArgs<ExtArgs>
            result: $Utils.Optional<ShopGroupByOutputType>[]
          }
          count: {
            args: Prisma.ShopCountArgs<ExtArgs>
            result: $Utils.Optional<ShopCountAggregateOutputType> | number
          }
        }
      }
      Product: {
        payload: Prisma.$ProductPayload<ExtArgs>
        fields: Prisma.ProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findFirst: {
            args: Prisma.ProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          findMany: {
            args: Prisma.ProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          create: {
            args: Prisma.ProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          createMany: {
            args: Prisma.ProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          delete: {
            args: Prisma.ProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          update: {
            args: Prisma.ProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          deleteMany: {
            args: Prisma.ProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>[]
          }
          upsert: {
            args: Prisma.ProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductPayload>
          }
          aggregate: {
            args: Prisma.ProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProduct>
          }
          groupBy: {
            args: Prisma.ProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductCountArgs<ExtArgs>
            result: $Utils.Optional<ProductCountAggregateOutputType> | number
          }
        }
      }
      ProductSnapshot: {
        payload: Prisma.$ProductSnapshotPayload<ExtArgs>
        fields: Prisma.ProductSnapshotFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductSnapshotFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductSnapshotFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>
          }
          findFirst: {
            args: Prisma.ProductSnapshotFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductSnapshotFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>
          }
          findMany: {
            args: Prisma.ProductSnapshotFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>[]
          }
          create: {
            args: Prisma.ProductSnapshotCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>
          }
          createMany: {
            args: Prisma.ProductSnapshotCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductSnapshotCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>[]
          }
          delete: {
            args: Prisma.ProductSnapshotDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>
          }
          update: {
            args: Prisma.ProductSnapshotUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>
          }
          deleteMany: {
            args: Prisma.ProductSnapshotDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductSnapshotUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductSnapshotUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>[]
          }
          upsert: {
            args: Prisma.ProductSnapshotUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductSnapshotPayload>
          }
          aggregate: {
            args: Prisma.ProductSnapshotAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductSnapshot>
          }
          groupBy: {
            args: Prisma.ProductSnapshotGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductSnapshotGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductSnapshotCountArgs<ExtArgs>
            result: $Utils.Optional<ProductSnapshotCountAggregateOutputType> | number
          }
        }
      }
      ProductReviewSample: {
        payload: Prisma.$ProductReviewSamplePayload<ExtArgs>
        fields: Prisma.ProductReviewSampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductReviewSampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductReviewSampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>
          }
          findFirst: {
            args: Prisma.ProductReviewSampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductReviewSampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>
          }
          findMany: {
            args: Prisma.ProductReviewSampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>[]
          }
          create: {
            args: Prisma.ProductReviewSampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>
          }
          createMany: {
            args: Prisma.ProductReviewSampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductReviewSampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>[]
          }
          delete: {
            args: Prisma.ProductReviewSampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>
          }
          update: {
            args: Prisma.ProductReviewSampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>
          }
          deleteMany: {
            args: Prisma.ProductReviewSampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductReviewSampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductReviewSampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>[]
          }
          upsert: {
            args: Prisma.ProductReviewSampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductReviewSamplePayload>
          }
          aggregate: {
            args: Prisma.ProductReviewSampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductReviewSample>
          }
          groupBy: {
            args: Prisma.ProductReviewSampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductReviewSampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductReviewSampleCountArgs<ExtArgs>
            result: $Utils.Optional<ProductReviewSampleCountAggregateOutputType> | number
          }
        }
      }
      ProductAIAnalysis: {
        payload: Prisma.$ProductAIAnalysisPayload<ExtArgs>
        fields: Prisma.ProductAIAnalysisFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProductAIAnalysisFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProductAIAnalysisFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>
          }
          findFirst: {
            args: Prisma.ProductAIAnalysisFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProductAIAnalysisFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>
          }
          findMany: {
            args: Prisma.ProductAIAnalysisFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>[]
          }
          create: {
            args: Prisma.ProductAIAnalysisCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>
          }
          createMany: {
            args: Prisma.ProductAIAnalysisCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProductAIAnalysisCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>[]
          }
          delete: {
            args: Prisma.ProductAIAnalysisDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>
          }
          update: {
            args: Prisma.ProductAIAnalysisUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>
          }
          deleteMany: {
            args: Prisma.ProductAIAnalysisDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProductAIAnalysisUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProductAIAnalysisUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>[]
          }
          upsert: {
            args: Prisma.ProductAIAnalysisUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProductAIAnalysisPayload>
          }
          aggregate: {
            args: Prisma.ProductAIAnalysisAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProductAIAnalysis>
          }
          groupBy: {
            args: Prisma.ProductAIAnalysisGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProductAIAnalysisGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProductAIAnalysisCountArgs<ExtArgs>
            result: $Utils.Optional<ProductAIAnalysisCountAggregateOutputType> | number
          }
        }
      }
      CompareSession: {
        payload: Prisma.$CompareSessionPayload<ExtArgs>
        fields: Prisma.CompareSessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompareSessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompareSessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          findFirst: {
            args: Prisma.CompareSessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompareSessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          findMany: {
            args: Prisma.CompareSessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>[]
          }
          create: {
            args: Prisma.CompareSessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          createMany: {
            args: Prisma.CompareSessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompareSessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>[]
          }
          delete: {
            args: Prisma.CompareSessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          update: {
            args: Prisma.CompareSessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          deleteMany: {
            args: Prisma.CompareSessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompareSessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompareSessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>[]
          }
          upsert: {
            args: Prisma.CompareSessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareSessionPayload>
          }
          aggregate: {
            args: Prisma.CompareSessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompareSession>
          }
          groupBy: {
            args: Prisma.CompareSessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompareSessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompareSessionCountArgs<ExtArgs>
            result: $Utils.Optional<CompareSessionCountAggregateOutputType> | number
          }
        }
      }
      CompareItem: {
        payload: Prisma.$CompareItemPayload<ExtArgs>
        fields: Prisma.CompareItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CompareItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CompareItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>
          }
          findFirst: {
            args: Prisma.CompareItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CompareItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>
          }
          findMany: {
            args: Prisma.CompareItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>[]
          }
          create: {
            args: Prisma.CompareItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>
          }
          createMany: {
            args: Prisma.CompareItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CompareItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>[]
          }
          delete: {
            args: Prisma.CompareItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>
          }
          update: {
            args: Prisma.CompareItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>
          }
          deleteMany: {
            args: Prisma.CompareItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CompareItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CompareItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>[]
          }
          upsert: {
            args: Prisma.CompareItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CompareItemPayload>
          }
          aggregate: {
            args: Prisma.CompareItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCompareItem>
          }
          groupBy: {
            args: Prisma.CompareItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<CompareItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.CompareItemCountArgs<ExtArgs>
            result: $Utils.Optional<CompareItemCountAggregateOutputType> | number
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
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
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
    shop?: ShopOmit
    product?: ProductOmit
    productSnapshot?: ProductSnapshotOmit
    productReviewSample?: ProductReviewSampleOmit
    productAIAnalysis?: ProductAIAnalysisOmit
    compareSession?: CompareSessionOmit
    compareItem?: CompareItemOmit
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
   * Count Type ShopCountOutputType
   */

  export type ShopCountOutputType = {
    products: number
  }

  export type ShopCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | ShopCountOutputTypeCountProductsArgs
  }

  // Custom InputTypes
  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ShopCountOutputType
     */
    select?: ShopCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ShopCountOutputType without action
   */
  export type ShopCountOutputTypeCountProductsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
  }


  /**
   * Count Type ProductCountOutputType
   */

  export type ProductCountOutputType = {
    snapshots: number
    reviews: number
    analyses: number
    compareItems: number
  }

  export type ProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    snapshots?: boolean | ProductCountOutputTypeCountSnapshotsArgs
    reviews?: boolean | ProductCountOutputTypeCountReviewsArgs
    analyses?: boolean | ProductCountOutputTypeCountAnalysesArgs
    compareItems?: boolean | ProductCountOutputTypeCountCompareItemsArgs
  }

  // Custom InputTypes
  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductCountOutputType
     */
    select?: ProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountSnapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSnapshotWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewSampleWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAIAnalysisWhereInput
  }

  /**
   * ProductCountOutputType without action
   */
  export type ProductCountOutputTypeCountCompareItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareItemWhereInput
  }


  /**
   * Count Type ProductSnapshotCountOutputType
   */

  export type ProductSnapshotCountOutputType = {
    reviews: number
    analyses: number
  }

  export type ProductSnapshotCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | ProductSnapshotCountOutputTypeCountReviewsArgs
    analyses?: boolean | ProductSnapshotCountOutputTypeCountAnalysesArgs
  }

  // Custom InputTypes
  /**
   * ProductSnapshotCountOutputType without action
   */
  export type ProductSnapshotCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshotCountOutputType
     */
    select?: ProductSnapshotCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProductSnapshotCountOutputType without action
   */
  export type ProductSnapshotCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewSampleWhereInput
  }

  /**
   * ProductSnapshotCountOutputType without action
   */
  export type ProductSnapshotCountOutputTypeCountAnalysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAIAnalysisWhereInput
  }


  /**
   * Count Type CompareSessionCountOutputType
   */

  export type CompareSessionCountOutputType = {
    items: number
  }

  export type CompareSessionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CompareSessionCountOutputTypeCountItemsArgs
  }

  // Custom InputTypes
  /**
   * CompareSessionCountOutputType without action
   */
  export type CompareSessionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSessionCountOutputType
     */
    select?: CompareSessionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CompareSessionCountOutputType without action
   */
  export type CompareSessionCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareItemWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Shop
   */

  export type AggregateShop = {
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  export type ShopAvgAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type ShopSumAggregateOutputType = {
    id: number | null
    rating: number | null
  }

  export type ShopMinAggregateOutputType = {
    id: number | null
    marketplace: $Enums.Marketplace | null
    externalShopId: string | null
    name: string | null
    shopLevel: string | null
    rating: number | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopMaxAggregateOutputType = {
    id: number | null
    marketplace: $Enums.Marketplace | null
    externalShopId: string | null
    name: string | null
    shopLevel: string | null
    rating: number | null
    location: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ShopCountAggregateOutputType = {
    id: number
    marketplace: number
    externalShopId: number
    name: number
    shopLevel: number
    rating: number
    location: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ShopAvgAggregateInputType = {
    id?: true
    rating?: true
  }

  export type ShopSumAggregateInputType = {
    id?: true
    rating?: true
  }

  export type ShopMinAggregateInputType = {
    id?: true
    marketplace?: true
    externalShopId?: true
    name?: true
    shopLevel?: true
    rating?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopMaxAggregateInputType = {
    id?: true
    marketplace?: true
    externalShopId?: true
    name?: true
    shopLevel?: true
    rating?: true
    location?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ShopCountAggregateInputType = {
    id?: true
    marketplace?: true
    externalShopId?: true
    name?: true
    shopLevel?: true
    rating?: true
    location?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ShopAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shop to aggregate.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Shops
    **/
    _count?: true | ShopCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ShopAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ShopSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ShopMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ShopMaxAggregateInputType
  }

  export type GetShopAggregateType<T extends ShopAggregateArgs> = {
        [P in keyof T & keyof AggregateShop]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateShop[P]>
      : GetScalarType<T[P], AggregateShop[P]>
  }




  export type ShopGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ShopWhereInput
    orderBy?: ShopOrderByWithAggregationInput | ShopOrderByWithAggregationInput[]
    by: ShopScalarFieldEnum[] | ShopScalarFieldEnum
    having?: ShopScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ShopCountAggregateInputType | true
    _avg?: ShopAvgAggregateInputType
    _sum?: ShopSumAggregateInputType
    _min?: ShopMinAggregateInputType
    _max?: ShopMaxAggregateInputType
  }

  export type ShopGroupByOutputType = {
    id: number
    marketplace: $Enums.Marketplace
    externalShopId: string
    name: string
    shopLevel: string | null
    rating: number | null
    location: string | null
    createdAt: Date
    updatedAt: Date
    _count: ShopCountAggregateOutputType | null
    _avg: ShopAvgAggregateOutputType | null
    _sum: ShopSumAggregateOutputType | null
    _min: ShopMinAggregateOutputType | null
    _max: ShopMaxAggregateOutputType | null
  }

  type GetShopGroupByPayload<T extends ShopGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ShopGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ShopGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ShopGroupByOutputType[P]>
            : GetScalarType<T[P], ShopGroupByOutputType[P]>
        }
      >
    >


  export type ShopSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    externalShopId?: boolean
    name?: boolean
    shopLevel?: boolean
    rating?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    products?: boolean | Shop$productsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    externalShopId?: boolean
    name?: boolean
    shopLevel?: boolean
    rating?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    externalShopId?: boolean
    name?: boolean
    shopLevel?: boolean
    rating?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["shop"]>

  export type ShopSelectScalar = {
    id?: boolean
    marketplace?: boolean
    externalShopId?: boolean
    name?: boolean
    shopLevel?: boolean
    rating?: boolean
    location?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ShopOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketplace" | "externalShopId" | "name" | "shopLevel" | "rating" | "location" | "createdAt" | "updatedAt", ExtArgs["result"]["shop"]>
  export type ShopInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    products?: boolean | Shop$productsArgs<ExtArgs>
    _count?: boolean | ShopCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ShopIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ShopIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ShopPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Shop"
    objects: {
      products: Prisma.$ProductPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marketplace: $Enums.Marketplace
      externalShopId: string
      name: string
      shopLevel: string | null
      rating: number | null
      location: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["shop"]>
    composites: {}
  }

  type ShopGetPayload<S extends boolean | null | undefined | ShopDefaultArgs> = $Result.GetResult<Prisma.$ShopPayload, S>

  type ShopCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ShopFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ShopCountAggregateInputType | true
    }

  export interface ShopDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Shop'], meta: { name: 'Shop' } }
    /**
     * Find zero or one Shop that matches the filter.
     * @param {ShopFindUniqueArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ShopFindUniqueArgs>(args: SelectSubset<T, ShopFindUniqueArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Shop that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ShopFindUniqueOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ShopFindUniqueOrThrowArgs>(args: SelectSubset<T, ShopFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ShopFindFirstArgs>(args?: SelectSubset<T, ShopFindFirstArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Shop that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindFirstOrThrowArgs} args - Arguments to find a Shop
     * @example
     * // Get one Shop
     * const shop = await prisma.shop.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ShopFindFirstOrThrowArgs>(args?: SelectSubset<T, ShopFindFirstOrThrowArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Shops that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Shops
     * const shops = await prisma.shop.findMany()
     * 
     * // Get first 10 Shops
     * const shops = await prisma.shop.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const shopWithIdOnly = await prisma.shop.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ShopFindManyArgs>(args?: SelectSubset<T, ShopFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Shop.
     * @param {ShopCreateArgs} args - Arguments to create a Shop.
     * @example
     * // Create one Shop
     * const Shop = await prisma.shop.create({
     *   data: {
     *     // ... data to create a Shop
     *   }
     * })
     * 
     */
    create<T extends ShopCreateArgs>(args: SelectSubset<T, ShopCreateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Shops.
     * @param {ShopCreateManyArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ShopCreateManyArgs>(args?: SelectSubset<T, ShopCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Shops and returns the data saved in the database.
     * @param {ShopCreateManyAndReturnArgs} args - Arguments to create many Shops.
     * @example
     * // Create many Shops
     * const shop = await prisma.shop.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ShopCreateManyAndReturnArgs>(args?: SelectSubset<T, ShopCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Shop.
     * @param {ShopDeleteArgs} args - Arguments to delete one Shop.
     * @example
     * // Delete one Shop
     * const Shop = await prisma.shop.delete({
     *   where: {
     *     // ... filter to delete one Shop
     *   }
     * })
     * 
     */
    delete<T extends ShopDeleteArgs>(args: SelectSubset<T, ShopDeleteArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Shop.
     * @param {ShopUpdateArgs} args - Arguments to update one Shop.
     * @example
     * // Update one Shop
     * const shop = await prisma.shop.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ShopUpdateArgs>(args: SelectSubset<T, ShopUpdateArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Shops.
     * @param {ShopDeleteManyArgs} args - Arguments to filter Shops to delete.
     * @example
     * // Delete a few Shops
     * const { count } = await prisma.shop.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ShopDeleteManyArgs>(args?: SelectSubset<T, ShopDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ShopUpdateManyArgs>(args: SelectSubset<T, ShopUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Shops and returns the data updated in the database.
     * @param {ShopUpdateManyAndReturnArgs} args - Arguments to update many Shops.
     * @example
     * // Update many Shops
     * const shop = await prisma.shop.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Shops and only return the `id`
     * const shopWithIdOnly = await prisma.shop.updateManyAndReturn({
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
    updateManyAndReturn<T extends ShopUpdateManyAndReturnArgs>(args: SelectSubset<T, ShopUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Shop.
     * @param {ShopUpsertArgs} args - Arguments to update or create a Shop.
     * @example
     * // Update or create a Shop
     * const shop = await prisma.shop.upsert({
     *   create: {
     *     // ... data to create a Shop
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Shop we want to update
     *   }
     * })
     */
    upsert<T extends ShopUpsertArgs>(args: SelectSubset<T, ShopUpsertArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Shops.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopCountArgs} args - Arguments to filter Shops to count.
     * @example
     * // Count the number of Shops
     * const count = await prisma.shop.count({
     *   where: {
     *     // ... the filter for the Shops we want to count
     *   }
     * })
    **/
    count<T extends ShopCountArgs>(
      args?: Subset<T, ShopCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ShopCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ShopAggregateArgs>(args: Subset<T, ShopAggregateArgs>): Prisma.PrismaPromise<GetShopAggregateType<T>>

    /**
     * Group by Shop.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ShopGroupByArgs} args - Group by arguments.
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
      T extends ShopGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ShopGroupByArgs['orderBy'] }
        : { orderBy?: ShopGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ShopGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetShopGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Shop model
   */
  readonly fields: ShopFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Shop.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ShopClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    products<T extends Shop$productsArgs<ExtArgs> = {}>(args?: Subset<T, Shop$productsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Shop model
   */
  interface ShopFieldRefs {
    readonly id: FieldRef<"Shop", 'Int'>
    readonly marketplace: FieldRef<"Shop", 'Marketplace'>
    readonly externalShopId: FieldRef<"Shop", 'String'>
    readonly name: FieldRef<"Shop", 'String'>
    readonly shopLevel: FieldRef<"Shop", 'String'>
    readonly rating: FieldRef<"Shop", 'Float'>
    readonly location: FieldRef<"Shop", 'String'>
    readonly createdAt: FieldRef<"Shop", 'DateTime'>
    readonly updatedAt: FieldRef<"Shop", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Shop findUnique
   */
  export type ShopFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findUniqueOrThrow
   */
  export type ShopFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop findFirst
   */
  export type ShopFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findFirstOrThrow
   */
  export type ShopFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shop to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Shops.
     */
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop findMany
   */
  export type ShopFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter, which Shops to fetch.
     */
    where?: ShopWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Shops to fetch.
     */
    orderBy?: ShopOrderByWithRelationInput | ShopOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Shops.
     */
    cursor?: ShopWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Shops from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Shops.
     */
    skip?: number
    distinct?: ShopScalarFieldEnum | ShopScalarFieldEnum[]
  }

  /**
   * Shop create
   */
  export type ShopCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to create a Shop.
     */
    data: XOR<ShopCreateInput, ShopUncheckedCreateInput>
  }

  /**
   * Shop createMany
   */
  export type ShopCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop createManyAndReturn
   */
  export type ShopCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to create many Shops.
     */
    data: ShopCreateManyInput | ShopCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Shop update
   */
  export type ShopUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The data needed to update a Shop.
     */
    data: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
    /**
     * Choose, which Shop to update.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop updateMany
   */
  export type ShopUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop updateManyAndReturn
   */
  export type ShopUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * The data used to update Shops.
     */
    data: XOR<ShopUpdateManyMutationInput, ShopUncheckedUpdateManyInput>
    /**
     * Filter which Shops to update
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to update.
     */
    limit?: number
  }

  /**
   * Shop upsert
   */
  export type ShopUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * The filter to search for the Shop to update in case it exists.
     */
    where: ShopWhereUniqueInput
    /**
     * In case the Shop found by the `where` argument doesn't exist, create a new Shop with this data.
     */
    create: XOR<ShopCreateInput, ShopUncheckedCreateInput>
    /**
     * In case the Shop was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ShopUpdateInput, ShopUncheckedUpdateInput>
  }

  /**
   * Shop delete
   */
  export type ShopDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    /**
     * Filter which Shop to delete.
     */
    where: ShopWhereUniqueInput
  }

  /**
   * Shop deleteMany
   */
  export type ShopDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Shops to delete
     */
    where?: ShopWhereInput
    /**
     * Limit how many Shops to delete.
     */
    limit?: number
  }

  /**
   * Shop.products
   */
  export type Shop$productsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    cursor?: ProductWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Shop without action
   */
  export type ShopDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
  }


  /**
   * Model Product
   */

  export type AggregateProduct = {
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  export type ProductAvgAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type ProductSumAggregateOutputType = {
    id: number | null
    shopId: number | null
  }

  export type ProductMinAggregateOutputType = {
    id: number | null
    marketplace: $Enums.Marketplace | null
    url: string | null
    externalProductId: string | null
    name: string | null
    thumbnailUrl: string | null
    category: string | null
    shopId: number | null
    isTracked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductMaxAggregateOutputType = {
    id: number | null
    marketplace: $Enums.Marketplace | null
    url: string | null
    externalProductId: string | null
    name: string | null
    thumbnailUrl: string | null
    category: string | null
    shopId: number | null
    isTracked: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProductCountAggregateOutputType = {
    id: number
    marketplace: number
    url: number
    externalProductId: number
    name: number
    thumbnailUrl: number
    category: number
    shopId: number
    isTracked: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProductAvgAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type ProductSumAggregateInputType = {
    id?: true
    shopId?: true
  }

  export type ProductMinAggregateInputType = {
    id?: true
    marketplace?: true
    url?: true
    externalProductId?: true
    name?: true
    thumbnailUrl?: true
    category?: true
    shopId?: true
    isTracked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductMaxAggregateInputType = {
    id?: true
    marketplace?: true
    url?: true
    externalProductId?: true
    name?: true
    thumbnailUrl?: true
    category?: true
    shopId?: true
    isTracked?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProductCountAggregateInputType = {
    id?: true
    marketplace?: true
    url?: true
    externalProductId?: true
    name?: true
    thumbnailUrl?: true
    category?: true
    shopId?: true
    isTracked?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Product to aggregate.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Products
    **/
    _count?: true | ProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductMaxAggregateInputType
  }

  export type GetProductAggregateType<T extends ProductAggregateArgs> = {
        [P in keyof T & keyof AggregateProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProduct[P]>
      : GetScalarType<T[P], AggregateProduct[P]>
  }




  export type ProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductWhereInput
    orderBy?: ProductOrderByWithAggregationInput | ProductOrderByWithAggregationInput[]
    by: ProductScalarFieldEnum[] | ProductScalarFieldEnum
    having?: ProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductCountAggregateInputType | true
    _avg?: ProductAvgAggregateInputType
    _sum?: ProductSumAggregateInputType
    _min?: ProductMinAggregateInputType
    _max?: ProductMaxAggregateInputType
  }

  export type ProductGroupByOutputType = {
    id: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId: string | null
    name: string
    thumbnailUrl: string | null
    category: string | null
    shopId: number | null
    isTracked: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProductCountAggregateOutputType | null
    _avg: ProductAvgAggregateOutputType | null
    _sum: ProductSumAggregateOutputType | null
    _min: ProductMinAggregateOutputType | null
    _max: ProductMaxAggregateOutputType | null
  }

  type GetProductGroupByPayload<T extends ProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductGroupByOutputType[P]>
            : GetScalarType<T[P], ProductGroupByOutputType[P]>
        }
      >
    >


  export type ProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    url?: boolean
    externalProductId?: boolean
    name?: boolean
    thumbnailUrl?: boolean
    category?: boolean
    shopId?: boolean
    isTracked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | Product$shopArgs<ExtArgs>
    snapshots?: boolean | Product$snapshotsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    analyses?: boolean | Product$analysesArgs<ExtArgs>
    compareItems?: boolean | Product$compareItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    url?: boolean
    externalProductId?: boolean
    name?: boolean
    thumbnailUrl?: boolean
    category?: boolean
    shopId?: boolean
    isTracked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | Product$shopArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    marketplace?: boolean
    url?: boolean
    externalProductId?: boolean
    name?: boolean
    thumbnailUrl?: boolean
    category?: boolean
    shopId?: boolean
    isTracked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    shop?: boolean | Product$shopArgs<ExtArgs>
  }, ExtArgs["result"]["product"]>

  export type ProductSelectScalar = {
    id?: boolean
    marketplace?: boolean
    url?: boolean
    externalProductId?: boolean
    name?: boolean
    thumbnailUrl?: boolean
    category?: boolean
    shopId?: boolean
    isTracked?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "marketplace" | "url" | "externalProductId" | "name" | "thumbnailUrl" | "category" | "shopId" | "isTracked" | "createdAt" | "updatedAt", ExtArgs["result"]["product"]>
  export type ProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | Product$shopArgs<ExtArgs>
    snapshots?: boolean | Product$snapshotsArgs<ExtArgs>
    reviews?: boolean | Product$reviewsArgs<ExtArgs>
    analyses?: boolean | Product$analysesArgs<ExtArgs>
    compareItems?: boolean | Product$compareItemsArgs<ExtArgs>
    _count?: boolean | ProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | Product$shopArgs<ExtArgs>
  }
  export type ProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    shop?: boolean | Product$shopArgs<ExtArgs>
  }

  export type $ProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Product"
    objects: {
      shop: Prisma.$ShopPayload<ExtArgs> | null
      snapshots: Prisma.$ProductSnapshotPayload<ExtArgs>[]
      reviews: Prisma.$ProductReviewSamplePayload<ExtArgs>[]
      analyses: Prisma.$ProductAIAnalysisPayload<ExtArgs>[]
      compareItems: Prisma.$CompareItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      marketplace: $Enums.Marketplace
      url: string
      externalProductId: string | null
      name: string
      thumbnailUrl: string | null
      category: string | null
      shopId: number | null
      isTracked: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["product"]>
    composites: {}
  }

  type ProductGetPayload<S extends boolean | null | undefined | ProductDefaultArgs> = $Result.GetResult<Prisma.$ProductPayload, S>

  type ProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductCountAggregateInputType | true
    }

  export interface ProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Product'], meta: { name: 'Product' } }
    /**
     * Find zero or one Product that matches the filter.
     * @param {ProductFindUniqueArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductFindUniqueArgs>(args: SelectSubset<T, ProductFindUniqueArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Product that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductFindUniqueOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductFindFirstArgs>(args?: SelectSubset<T, ProductFindFirstArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Product that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindFirstOrThrowArgs} args - Arguments to find a Product
     * @example
     * // Get one Product
     * const product = await prisma.product.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Products that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Products
     * const products = await prisma.product.findMany()
     * 
     * // Get first 10 Products
     * const products = await prisma.product.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productWithIdOnly = await prisma.product.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductFindManyArgs>(args?: SelectSubset<T, ProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Product.
     * @param {ProductCreateArgs} args - Arguments to create a Product.
     * @example
     * // Create one Product
     * const Product = await prisma.product.create({
     *   data: {
     *     // ... data to create a Product
     *   }
     * })
     * 
     */
    create<T extends ProductCreateArgs>(args: SelectSubset<T, ProductCreateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Products.
     * @param {ProductCreateManyArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductCreateManyArgs>(args?: SelectSubset<T, ProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Products and returns the data saved in the database.
     * @param {ProductCreateManyAndReturnArgs} args - Arguments to create many Products.
     * @example
     * // Create many Products
     * const product = await prisma.product.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Products and only return the `id`
     * const productWithIdOnly = await prisma.product.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Product.
     * @param {ProductDeleteArgs} args - Arguments to delete one Product.
     * @example
     * // Delete one Product
     * const Product = await prisma.product.delete({
     *   where: {
     *     // ... filter to delete one Product
     *   }
     * })
     * 
     */
    delete<T extends ProductDeleteArgs>(args: SelectSubset<T, ProductDeleteArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Product.
     * @param {ProductUpdateArgs} args - Arguments to update one Product.
     * @example
     * // Update one Product
     * const product = await prisma.product.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductUpdateArgs>(args: SelectSubset<T, ProductUpdateArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Products.
     * @param {ProductDeleteManyArgs} args - Arguments to filter Products to delete.
     * @example
     * // Delete a few Products
     * const { count } = await prisma.product.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductDeleteManyArgs>(args?: SelectSubset<T, ProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductUpdateManyArgs>(args: SelectSubset<T, ProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Products and returns the data updated in the database.
     * @param {ProductUpdateManyAndReturnArgs} args - Arguments to update many Products.
     * @example
     * // Update many Products
     * const product = await prisma.product.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Products and only return the `id`
     * const productWithIdOnly = await prisma.product.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Product.
     * @param {ProductUpsertArgs} args - Arguments to update or create a Product.
     * @example
     * // Update or create a Product
     * const product = await prisma.product.upsert({
     *   create: {
     *     // ... data to create a Product
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Product we want to update
     *   }
     * })
     */
    upsert<T extends ProductUpsertArgs>(args: SelectSubset<T, ProductUpsertArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Products.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductCountArgs} args - Arguments to filter Products to count.
     * @example
     * // Count the number of Products
     * const count = await prisma.product.count({
     *   where: {
     *     // ... the filter for the Products we want to count
     *   }
     * })
    **/
    count<T extends ProductCountArgs>(
      args?: Subset<T, ProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAggregateArgs>(args: Subset<T, ProductAggregateArgs>): Prisma.PrismaPromise<GetProductAggregateType<T>>

    /**
     * Group by Product.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductGroupByArgs} args - Group by arguments.
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
      T extends ProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductGroupByArgs['orderBy'] }
        : { orderBy?: ProductGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Product model
   */
  readonly fields: ProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Product.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    shop<T extends Product$shopArgs<ExtArgs> = {}>(args?: Subset<T, Product$shopArgs<ExtArgs>>): Prisma__ShopClient<$Result.GetResult<Prisma.$ShopPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    snapshots<T extends Product$snapshotsArgs<ExtArgs> = {}>(args?: Subset<T, Product$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Product$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Product$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analyses<T extends Product$analysesArgs<ExtArgs> = {}>(args?: Subset<T, Product$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    compareItems<T extends Product$compareItemsArgs<ExtArgs> = {}>(args?: Subset<T, Product$compareItemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Product model
   */
  interface ProductFieldRefs {
    readonly id: FieldRef<"Product", 'Int'>
    readonly marketplace: FieldRef<"Product", 'Marketplace'>
    readonly url: FieldRef<"Product", 'String'>
    readonly externalProductId: FieldRef<"Product", 'String'>
    readonly name: FieldRef<"Product", 'String'>
    readonly thumbnailUrl: FieldRef<"Product", 'String'>
    readonly category: FieldRef<"Product", 'String'>
    readonly shopId: FieldRef<"Product", 'Int'>
    readonly isTracked: FieldRef<"Product", 'Boolean'>
    readonly createdAt: FieldRef<"Product", 'DateTime'>
    readonly updatedAt: FieldRef<"Product", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Product findUnique
   */
  export type ProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findUniqueOrThrow
   */
  export type ProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product findFirst
   */
  export type ProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findFirstOrThrow
   */
  export type ProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Product to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Products.
     */
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product findMany
   */
  export type ProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter, which Products to fetch.
     */
    where?: ProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Products to fetch.
     */
    orderBy?: ProductOrderByWithRelationInput | ProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Products.
     */
    cursor?: ProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Products from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Products.
     */
    skip?: number
    distinct?: ProductScalarFieldEnum | ProductScalarFieldEnum[]
  }

  /**
   * Product create
   */
  export type ProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to create a Product.
     */
    data: XOR<ProductCreateInput, ProductUncheckedCreateInput>
  }

  /**
   * Product createMany
   */
  export type ProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Product createManyAndReturn
   */
  export type ProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to create many Products.
     */
    data: ProductCreateManyInput | ProductCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product update
   */
  export type ProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The data needed to update a Product.
     */
    data: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
    /**
     * Choose, which Product to update.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product updateMany
   */
  export type ProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
  }

  /**
   * Product updateManyAndReturn
   */
  export type ProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * The data used to update Products.
     */
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyInput>
    /**
     * Filter which Products to update
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Product upsert
   */
  export type ProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * The filter to search for the Product to update in case it exists.
     */
    where: ProductWhereUniqueInput
    /**
     * In case the Product found by the `where` argument doesn't exist, create a new Product with this data.
     */
    create: XOR<ProductCreateInput, ProductUncheckedCreateInput>
    /**
     * In case the Product was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductUpdateInput, ProductUncheckedUpdateInput>
  }

  /**
   * Product delete
   */
  export type ProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
    /**
     * Filter which Product to delete.
     */
    where: ProductWhereUniqueInput
  }

  /**
   * Product deleteMany
   */
  export type ProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Products to delete
     */
    where?: ProductWhereInput
    /**
     * Limit how many Products to delete.
     */
    limit?: number
  }

  /**
   * Product.shop
   */
  export type Product$shopArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Shop
     */
    select?: ShopSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Shop
     */
    omit?: ShopOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ShopInclude<ExtArgs> | null
    where?: ShopWhereInput
  }

  /**
   * Product.snapshots
   */
  export type Product$snapshotsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    where?: ProductSnapshotWhereInput
    orderBy?: ProductSnapshotOrderByWithRelationInput | ProductSnapshotOrderByWithRelationInput[]
    cursor?: ProductSnapshotWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductSnapshotScalarFieldEnum | ProductSnapshotScalarFieldEnum[]
  }

  /**
   * Product.reviews
   */
  export type Product$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    where?: ProductReviewSampleWhereInput
    orderBy?: ProductReviewSampleOrderByWithRelationInput | ProductReviewSampleOrderByWithRelationInput[]
    cursor?: ProductReviewSampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductReviewSampleScalarFieldEnum | ProductReviewSampleScalarFieldEnum[]
  }

  /**
   * Product.analyses
   */
  export type Product$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    where?: ProductAIAnalysisWhereInput
    orderBy?: ProductAIAnalysisOrderByWithRelationInput | ProductAIAnalysisOrderByWithRelationInput[]
    cursor?: ProductAIAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAIAnalysisScalarFieldEnum | ProductAIAnalysisScalarFieldEnum[]
  }

  /**
   * Product.compareItems
   */
  export type Product$compareItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    where?: CompareItemWhereInput
    orderBy?: CompareItemOrderByWithRelationInput | CompareItemOrderByWithRelationInput[]
    cursor?: CompareItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompareItemScalarFieldEnum | CompareItemScalarFieldEnum[]
  }

  /**
   * Product without action
   */
  export type ProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Product
     */
    select?: ProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Product
     */
    omit?: ProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductInclude<ExtArgs> | null
  }


  /**
   * Model ProductSnapshot
   */

  export type AggregateProductSnapshot = {
    _count: ProductSnapshotCountAggregateOutputType | null
    _avg: ProductSnapshotAvgAggregateOutputType | null
    _sum: ProductSnapshotSumAggregateOutputType | null
    _min: ProductSnapshotMinAggregateOutputType | null
    _max: ProductSnapshotMaxAggregateOutputType | null
  }

  export type ProductSnapshotAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    rating: number | null
    reviewsCount: number | null
    soldCount: number | null
  }

  export type ProductSnapshotSumAggregateOutputType = {
    id: number | null
    productId: number | null
    price: number | null
    rating: number | null
    reviewsCount: number | null
    soldCount: number | null
  }

  export type ProductSnapshotMinAggregateOutputType = {
    id: number | null
    productId: number | null
    scrapedAt: Date | null
    price: number | null
    currency: string | null
    rating: number | null
    reviewsCount: number | null
    soldCount: number | null
  }

  export type ProductSnapshotMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    scrapedAt: Date | null
    price: number | null
    currency: string | null
    rating: number | null
    reviewsCount: number | null
    soldCount: number | null
  }

  export type ProductSnapshotCountAggregateOutputType = {
    id: number
    productId: number
    scrapedAt: number
    price: number
    currency: number
    rating: number
    reviewsCount: number
    soldCount: number
    rawSpecs: number
    rawData: number
    _all: number
  }


  export type ProductSnapshotAvgAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    rating?: true
    reviewsCount?: true
    soldCount?: true
  }

  export type ProductSnapshotSumAggregateInputType = {
    id?: true
    productId?: true
    price?: true
    rating?: true
    reviewsCount?: true
    soldCount?: true
  }

  export type ProductSnapshotMinAggregateInputType = {
    id?: true
    productId?: true
    scrapedAt?: true
    price?: true
    currency?: true
    rating?: true
    reviewsCount?: true
    soldCount?: true
  }

  export type ProductSnapshotMaxAggregateInputType = {
    id?: true
    productId?: true
    scrapedAt?: true
    price?: true
    currency?: true
    rating?: true
    reviewsCount?: true
    soldCount?: true
  }

  export type ProductSnapshotCountAggregateInputType = {
    id?: true
    productId?: true
    scrapedAt?: true
    price?: true
    currency?: true
    rating?: true
    reviewsCount?: true
    soldCount?: true
    rawSpecs?: true
    rawData?: true
    _all?: true
  }

  export type ProductSnapshotAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSnapshot to aggregate.
     */
    where?: ProductSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSnapshots to fetch.
     */
    orderBy?: ProductSnapshotOrderByWithRelationInput | ProductSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductSnapshots
    **/
    _count?: true | ProductSnapshotCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductSnapshotAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductSnapshotSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductSnapshotMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductSnapshotMaxAggregateInputType
  }

  export type GetProductSnapshotAggregateType<T extends ProductSnapshotAggregateArgs> = {
        [P in keyof T & keyof AggregateProductSnapshot]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductSnapshot[P]>
      : GetScalarType<T[P], AggregateProductSnapshot[P]>
  }




  export type ProductSnapshotGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductSnapshotWhereInput
    orderBy?: ProductSnapshotOrderByWithAggregationInput | ProductSnapshotOrderByWithAggregationInput[]
    by: ProductSnapshotScalarFieldEnum[] | ProductSnapshotScalarFieldEnum
    having?: ProductSnapshotScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductSnapshotCountAggregateInputType | true
    _avg?: ProductSnapshotAvgAggregateInputType
    _sum?: ProductSnapshotSumAggregateInputType
    _min?: ProductSnapshotMinAggregateInputType
    _max?: ProductSnapshotMaxAggregateInputType
  }

  export type ProductSnapshotGroupByOutputType = {
    id: number
    productId: number
    scrapedAt: Date
    price: number
    currency: string
    rating: number | null
    reviewsCount: number | null
    soldCount: number | null
    rawSpecs: JsonValue | null
    rawData: JsonValue | null
    _count: ProductSnapshotCountAggregateOutputType | null
    _avg: ProductSnapshotAvgAggregateOutputType | null
    _sum: ProductSnapshotSumAggregateOutputType | null
    _min: ProductSnapshotMinAggregateOutputType | null
    _max: ProductSnapshotMaxAggregateOutputType | null
  }

  type GetProductSnapshotGroupByPayload<T extends ProductSnapshotGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductSnapshotGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductSnapshotGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductSnapshotGroupByOutputType[P]>
            : GetScalarType<T[P], ProductSnapshotGroupByOutputType[P]>
        }
      >
    >


  export type ProductSnapshotSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    scrapedAt?: boolean
    price?: boolean
    currency?: boolean
    rating?: boolean
    reviewsCount?: boolean
    soldCount?: boolean
    rawSpecs?: boolean
    rawData?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    reviews?: boolean | ProductSnapshot$reviewsArgs<ExtArgs>
    analyses?: boolean | ProductSnapshot$analysesArgs<ExtArgs>
    _count?: boolean | ProductSnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSnapshot"]>

  export type ProductSnapshotSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    scrapedAt?: boolean
    price?: boolean
    currency?: boolean
    rating?: boolean
    reviewsCount?: boolean
    soldCount?: boolean
    rawSpecs?: boolean
    rawData?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSnapshot"]>

  export type ProductSnapshotSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    scrapedAt?: boolean
    price?: boolean
    currency?: boolean
    rating?: boolean
    reviewsCount?: boolean
    soldCount?: boolean
    rawSpecs?: boolean
    rawData?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["productSnapshot"]>

  export type ProductSnapshotSelectScalar = {
    id?: boolean
    productId?: boolean
    scrapedAt?: boolean
    price?: boolean
    currency?: boolean
    rating?: boolean
    reviewsCount?: boolean
    soldCount?: boolean
    rawSpecs?: boolean
    rawData?: boolean
  }

  export type ProductSnapshotOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "scrapedAt" | "price" | "currency" | "rating" | "reviewsCount" | "soldCount" | "rawSpecs" | "rawData", ExtArgs["result"]["productSnapshot"]>
  export type ProductSnapshotInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    reviews?: boolean | ProductSnapshot$reviewsArgs<ExtArgs>
    analyses?: boolean | ProductSnapshot$analysesArgs<ExtArgs>
    _count?: boolean | ProductSnapshotCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProductSnapshotIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type ProductSnapshotIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $ProductSnapshotPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductSnapshot"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      reviews: Prisma.$ProductReviewSamplePayload<ExtArgs>[]
      analyses: Prisma.$ProductAIAnalysisPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      scrapedAt: Date
      price: number
      currency: string
      rating: number | null
      reviewsCount: number | null
      soldCount: number | null
      rawSpecs: Prisma.JsonValue | null
      rawData: Prisma.JsonValue | null
    }, ExtArgs["result"]["productSnapshot"]>
    composites: {}
  }

  type ProductSnapshotGetPayload<S extends boolean | null | undefined | ProductSnapshotDefaultArgs> = $Result.GetResult<Prisma.$ProductSnapshotPayload, S>

  type ProductSnapshotCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductSnapshotCountAggregateInputType | true
    }

  export interface ProductSnapshotDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductSnapshot'], meta: { name: 'ProductSnapshot' } }
    /**
     * Find zero or one ProductSnapshot that matches the filter.
     * @param {ProductSnapshotFindUniqueArgs} args - Arguments to find a ProductSnapshot
     * @example
     * // Get one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductSnapshotFindUniqueArgs>(args: SelectSubset<T, ProductSnapshotFindUniqueArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductSnapshot that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductSnapshotFindUniqueOrThrowArgs} args - Arguments to find a ProductSnapshot
     * @example
     * // Get one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductSnapshotFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSnapshot that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotFindFirstArgs} args - Arguments to find a ProductSnapshot
     * @example
     * // Get one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductSnapshotFindFirstArgs>(args?: SelectSubset<T, ProductSnapshotFindFirstArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductSnapshot that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotFindFirstOrThrowArgs} args - Arguments to find a ProductSnapshot
     * @example
     * // Get one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductSnapshotFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductSnapshots that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductSnapshots
     * const productSnapshots = await prisma.productSnapshot.findMany()
     * 
     * // Get first 10 ProductSnapshots
     * const productSnapshots = await prisma.productSnapshot.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productSnapshotWithIdOnly = await prisma.productSnapshot.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductSnapshotFindManyArgs>(args?: SelectSubset<T, ProductSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductSnapshot.
     * @param {ProductSnapshotCreateArgs} args - Arguments to create a ProductSnapshot.
     * @example
     * // Create one ProductSnapshot
     * const ProductSnapshot = await prisma.productSnapshot.create({
     *   data: {
     *     // ... data to create a ProductSnapshot
     *   }
     * })
     * 
     */
    create<T extends ProductSnapshotCreateArgs>(args: SelectSubset<T, ProductSnapshotCreateArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductSnapshots.
     * @param {ProductSnapshotCreateManyArgs} args - Arguments to create many ProductSnapshots.
     * @example
     * // Create many ProductSnapshots
     * const productSnapshot = await prisma.productSnapshot.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductSnapshotCreateManyArgs>(args?: SelectSubset<T, ProductSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductSnapshots and returns the data saved in the database.
     * @param {ProductSnapshotCreateManyAndReturnArgs} args - Arguments to create many ProductSnapshots.
     * @example
     * // Create many ProductSnapshots
     * const productSnapshot = await prisma.productSnapshot.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductSnapshots and only return the `id`
     * const productSnapshotWithIdOnly = await prisma.productSnapshot.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductSnapshotCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductSnapshot.
     * @param {ProductSnapshotDeleteArgs} args - Arguments to delete one ProductSnapshot.
     * @example
     * // Delete one ProductSnapshot
     * const ProductSnapshot = await prisma.productSnapshot.delete({
     *   where: {
     *     // ... filter to delete one ProductSnapshot
     *   }
     * })
     * 
     */
    delete<T extends ProductSnapshotDeleteArgs>(args: SelectSubset<T, ProductSnapshotDeleteArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductSnapshot.
     * @param {ProductSnapshotUpdateArgs} args - Arguments to update one ProductSnapshot.
     * @example
     * // Update one ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductSnapshotUpdateArgs>(args: SelectSubset<T, ProductSnapshotUpdateArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductSnapshots.
     * @param {ProductSnapshotDeleteManyArgs} args - Arguments to filter ProductSnapshots to delete.
     * @example
     * // Delete a few ProductSnapshots
     * const { count } = await prisma.productSnapshot.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductSnapshotDeleteManyArgs>(args?: SelectSubset<T, ProductSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductSnapshots
     * const productSnapshot = await prisma.productSnapshot.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductSnapshotUpdateManyArgs>(args: SelectSubset<T, ProductSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductSnapshots and returns the data updated in the database.
     * @param {ProductSnapshotUpdateManyAndReturnArgs} args - Arguments to update many ProductSnapshots.
     * @example
     * // Update many ProductSnapshots
     * const productSnapshot = await prisma.productSnapshot.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductSnapshots and only return the `id`
     * const productSnapshotWithIdOnly = await prisma.productSnapshot.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductSnapshotUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductSnapshot.
     * @param {ProductSnapshotUpsertArgs} args - Arguments to update or create a ProductSnapshot.
     * @example
     * // Update or create a ProductSnapshot
     * const productSnapshot = await prisma.productSnapshot.upsert({
     *   create: {
     *     // ... data to create a ProductSnapshot
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductSnapshot we want to update
     *   }
     * })
     */
    upsert<T extends ProductSnapshotUpsertArgs>(args: SelectSubset<T, ProductSnapshotUpsertArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductSnapshots.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotCountArgs} args - Arguments to filter ProductSnapshots to count.
     * @example
     * // Count the number of ProductSnapshots
     * const count = await prisma.productSnapshot.count({
     *   where: {
     *     // ... the filter for the ProductSnapshots we want to count
     *   }
     * })
    **/
    count<T extends ProductSnapshotCountArgs>(
      args?: Subset<T, ProductSnapshotCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductSnapshotCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductSnapshotAggregateArgs>(args: Subset<T, ProductSnapshotAggregateArgs>): Prisma.PrismaPromise<GetProductSnapshotAggregateType<T>>

    /**
     * Group by ProductSnapshot.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductSnapshotGroupByArgs} args - Group by arguments.
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
      T extends ProductSnapshotGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductSnapshotGroupByArgs['orderBy'] }
        : { orderBy?: ProductSnapshotGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductSnapshot model
   */
  readonly fields: ProductSnapshotFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductSnapshot.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductSnapshotClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends ProductSnapshot$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, ProductSnapshot$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    analyses<T extends ProductSnapshot$analysesArgs<ExtArgs> = {}>(args?: Subset<T, ProductSnapshot$analysesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the ProductSnapshot model
   */
  interface ProductSnapshotFieldRefs {
    readonly id: FieldRef<"ProductSnapshot", 'Int'>
    readonly productId: FieldRef<"ProductSnapshot", 'Int'>
    readonly scrapedAt: FieldRef<"ProductSnapshot", 'DateTime'>
    readonly price: FieldRef<"ProductSnapshot", 'Int'>
    readonly currency: FieldRef<"ProductSnapshot", 'String'>
    readonly rating: FieldRef<"ProductSnapshot", 'Float'>
    readonly reviewsCount: FieldRef<"ProductSnapshot", 'Int'>
    readonly soldCount: FieldRef<"ProductSnapshot", 'Int'>
    readonly rawSpecs: FieldRef<"ProductSnapshot", 'Json'>
    readonly rawData: FieldRef<"ProductSnapshot", 'Json'>
  }
    

  // Custom InputTypes
  /**
   * ProductSnapshot findUnique
   */
  export type ProductSnapshotFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which ProductSnapshot to fetch.
     */
    where: ProductSnapshotWhereUniqueInput
  }

  /**
   * ProductSnapshot findUniqueOrThrow
   */
  export type ProductSnapshotFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which ProductSnapshot to fetch.
     */
    where: ProductSnapshotWhereUniqueInput
  }

  /**
   * ProductSnapshot findFirst
   */
  export type ProductSnapshotFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which ProductSnapshot to fetch.
     */
    where?: ProductSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSnapshots to fetch.
     */
    orderBy?: ProductSnapshotOrderByWithRelationInput | ProductSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSnapshots.
     */
    cursor?: ProductSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSnapshots.
     */
    distinct?: ProductSnapshotScalarFieldEnum | ProductSnapshotScalarFieldEnum[]
  }

  /**
   * ProductSnapshot findFirstOrThrow
   */
  export type ProductSnapshotFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which ProductSnapshot to fetch.
     */
    where?: ProductSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSnapshots to fetch.
     */
    orderBy?: ProductSnapshotOrderByWithRelationInput | ProductSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductSnapshots.
     */
    cursor?: ProductSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSnapshots.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductSnapshots.
     */
    distinct?: ProductSnapshotScalarFieldEnum | ProductSnapshotScalarFieldEnum[]
  }

  /**
   * ProductSnapshot findMany
   */
  export type ProductSnapshotFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * Filter, which ProductSnapshots to fetch.
     */
    where?: ProductSnapshotWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductSnapshots to fetch.
     */
    orderBy?: ProductSnapshotOrderByWithRelationInput | ProductSnapshotOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductSnapshots.
     */
    cursor?: ProductSnapshotWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductSnapshots from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductSnapshots.
     */
    skip?: number
    distinct?: ProductSnapshotScalarFieldEnum | ProductSnapshotScalarFieldEnum[]
  }

  /**
   * ProductSnapshot create
   */
  export type ProductSnapshotCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductSnapshot.
     */
    data: XOR<ProductSnapshotCreateInput, ProductSnapshotUncheckedCreateInput>
  }

  /**
   * ProductSnapshot createMany
   */
  export type ProductSnapshotCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductSnapshots.
     */
    data: ProductSnapshotCreateManyInput | ProductSnapshotCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductSnapshot createManyAndReturn
   */
  export type ProductSnapshotCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * The data used to create many ProductSnapshots.
     */
    data: ProductSnapshotCreateManyInput | ProductSnapshotCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSnapshot update
   */
  export type ProductSnapshotUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductSnapshot.
     */
    data: XOR<ProductSnapshotUpdateInput, ProductSnapshotUncheckedUpdateInput>
    /**
     * Choose, which ProductSnapshot to update.
     */
    where: ProductSnapshotWhereUniqueInput
  }

  /**
   * ProductSnapshot updateMany
   */
  export type ProductSnapshotUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductSnapshots.
     */
    data: XOR<ProductSnapshotUpdateManyMutationInput, ProductSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which ProductSnapshots to update
     */
    where?: ProductSnapshotWhereInput
    /**
     * Limit how many ProductSnapshots to update.
     */
    limit?: number
  }

  /**
   * ProductSnapshot updateManyAndReturn
   */
  export type ProductSnapshotUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * The data used to update ProductSnapshots.
     */
    data: XOR<ProductSnapshotUpdateManyMutationInput, ProductSnapshotUncheckedUpdateManyInput>
    /**
     * Filter which ProductSnapshots to update
     */
    where?: ProductSnapshotWhereInput
    /**
     * Limit how many ProductSnapshots to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductSnapshot upsert
   */
  export type ProductSnapshotUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductSnapshot to update in case it exists.
     */
    where: ProductSnapshotWhereUniqueInput
    /**
     * In case the ProductSnapshot found by the `where` argument doesn't exist, create a new ProductSnapshot with this data.
     */
    create: XOR<ProductSnapshotCreateInput, ProductSnapshotUncheckedCreateInput>
    /**
     * In case the ProductSnapshot was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductSnapshotUpdateInput, ProductSnapshotUncheckedUpdateInput>
  }

  /**
   * ProductSnapshot delete
   */
  export type ProductSnapshotDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    /**
     * Filter which ProductSnapshot to delete.
     */
    where: ProductSnapshotWhereUniqueInput
  }

  /**
   * ProductSnapshot deleteMany
   */
  export type ProductSnapshotDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductSnapshots to delete
     */
    where?: ProductSnapshotWhereInput
    /**
     * Limit how many ProductSnapshots to delete.
     */
    limit?: number
  }

  /**
   * ProductSnapshot.reviews
   */
  export type ProductSnapshot$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    where?: ProductReviewSampleWhereInput
    orderBy?: ProductReviewSampleOrderByWithRelationInput | ProductReviewSampleOrderByWithRelationInput[]
    cursor?: ProductReviewSampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductReviewSampleScalarFieldEnum | ProductReviewSampleScalarFieldEnum[]
  }

  /**
   * ProductSnapshot.analyses
   */
  export type ProductSnapshot$analysesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    where?: ProductAIAnalysisWhereInput
    orderBy?: ProductAIAnalysisOrderByWithRelationInput | ProductAIAnalysisOrderByWithRelationInput[]
    cursor?: ProductAIAnalysisWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ProductAIAnalysisScalarFieldEnum | ProductAIAnalysisScalarFieldEnum[]
  }

  /**
   * ProductSnapshot without action
   */
  export type ProductSnapshotDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
  }


  /**
   * Model ProductReviewSample
   */

  export type AggregateProductReviewSample = {
    _count: ProductReviewSampleCountAggregateOutputType | null
    _avg: ProductReviewSampleAvgAggregateOutputType | null
    _sum: ProductReviewSampleSumAggregateOutputType | null
    _min: ProductReviewSampleMinAggregateOutputType | null
    _max: ProductReviewSampleMaxAggregateOutputType | null
  }

  export type ProductReviewSampleAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    snapshotId: number | null
    rating: number | null
  }

  export type ProductReviewSampleSumAggregateOutputType = {
    id: number | null
    productId: number | null
    snapshotId: number | null
    rating: number | null
  }

  export type ProductReviewSampleMinAggregateOutputType = {
    id: number | null
    productId: number | null
    snapshotId: number | null
    platformReviewId: string | null
    rating: number | null
    authorName: string | null
    content: string | null
    scrapedAt: Date | null
  }

  export type ProductReviewSampleMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    snapshotId: number | null
    platformReviewId: string | null
    rating: number | null
    authorName: string | null
    content: string | null
    scrapedAt: Date | null
  }

  export type ProductReviewSampleCountAggregateOutputType = {
    id: number
    productId: number
    snapshotId: number
    platformReviewId: number
    rating: number
    authorName: number
    content: number
    scrapedAt: number
    _all: number
  }


  export type ProductReviewSampleAvgAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    rating?: true
  }

  export type ProductReviewSampleSumAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    rating?: true
  }

  export type ProductReviewSampleMinAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    platformReviewId?: true
    rating?: true
    authorName?: true
    content?: true
    scrapedAt?: true
  }

  export type ProductReviewSampleMaxAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    platformReviewId?: true
    rating?: true
    authorName?: true
    content?: true
    scrapedAt?: true
  }

  export type ProductReviewSampleCountAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    platformReviewId?: true
    rating?: true
    authorName?: true
    content?: true
    scrapedAt?: true
    _all?: true
  }

  export type ProductReviewSampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReviewSample to aggregate.
     */
    where?: ProductReviewSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviewSamples to fetch.
     */
    orderBy?: ProductReviewSampleOrderByWithRelationInput | ProductReviewSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductReviewSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviewSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviewSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductReviewSamples
    **/
    _count?: true | ProductReviewSampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductReviewSampleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductReviewSampleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductReviewSampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductReviewSampleMaxAggregateInputType
  }

  export type GetProductReviewSampleAggregateType<T extends ProductReviewSampleAggregateArgs> = {
        [P in keyof T & keyof AggregateProductReviewSample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductReviewSample[P]>
      : GetScalarType<T[P], AggregateProductReviewSample[P]>
  }




  export type ProductReviewSampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductReviewSampleWhereInput
    orderBy?: ProductReviewSampleOrderByWithAggregationInput | ProductReviewSampleOrderByWithAggregationInput[]
    by: ProductReviewSampleScalarFieldEnum[] | ProductReviewSampleScalarFieldEnum
    having?: ProductReviewSampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductReviewSampleCountAggregateInputType | true
    _avg?: ProductReviewSampleAvgAggregateInputType
    _sum?: ProductReviewSampleSumAggregateInputType
    _min?: ProductReviewSampleMinAggregateInputType
    _max?: ProductReviewSampleMaxAggregateInputType
  }

  export type ProductReviewSampleGroupByOutputType = {
    id: number
    productId: number
    snapshotId: number | null
    platformReviewId: string | null
    rating: number
    authorName: string | null
    content: string
    scrapedAt: Date
    _count: ProductReviewSampleCountAggregateOutputType | null
    _avg: ProductReviewSampleAvgAggregateOutputType | null
    _sum: ProductReviewSampleSumAggregateOutputType | null
    _min: ProductReviewSampleMinAggregateOutputType | null
    _max: ProductReviewSampleMaxAggregateOutputType | null
  }

  type GetProductReviewSampleGroupByPayload<T extends ProductReviewSampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductReviewSampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductReviewSampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductReviewSampleGroupByOutputType[P]>
            : GetScalarType<T[P], ProductReviewSampleGroupByOutputType[P]>
        }
      >
    >


  export type ProductReviewSampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    snapshotId?: boolean
    platformReviewId?: boolean
    rating?: boolean
    authorName?: boolean
    content?: boolean
    scrapedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductReviewSample$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["productReviewSample"]>

  export type ProductReviewSampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    snapshotId?: boolean
    platformReviewId?: boolean
    rating?: boolean
    authorName?: boolean
    content?: boolean
    scrapedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductReviewSample$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["productReviewSample"]>

  export type ProductReviewSampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    snapshotId?: boolean
    platformReviewId?: boolean
    rating?: boolean
    authorName?: boolean
    content?: boolean
    scrapedAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductReviewSample$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["productReviewSample"]>

  export type ProductReviewSampleSelectScalar = {
    id?: boolean
    productId?: boolean
    snapshotId?: boolean
    platformReviewId?: boolean
    rating?: boolean
    authorName?: boolean
    content?: boolean
    scrapedAt?: boolean
  }

  export type ProductReviewSampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "snapshotId" | "platformReviewId" | "rating" | "authorName" | "content" | "scrapedAt", ExtArgs["result"]["productReviewSample"]>
  export type ProductReviewSampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductReviewSample$snapshotArgs<ExtArgs>
  }
  export type ProductReviewSampleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductReviewSample$snapshotArgs<ExtArgs>
  }
  export type ProductReviewSampleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductReviewSample$snapshotArgs<ExtArgs>
  }

  export type $ProductReviewSamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductReviewSample"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      snapshot: Prisma.$ProductSnapshotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      snapshotId: number | null
      platformReviewId: string | null
      rating: number
      authorName: string | null
      content: string
      scrapedAt: Date
    }, ExtArgs["result"]["productReviewSample"]>
    composites: {}
  }

  type ProductReviewSampleGetPayload<S extends boolean | null | undefined | ProductReviewSampleDefaultArgs> = $Result.GetResult<Prisma.$ProductReviewSamplePayload, S>

  type ProductReviewSampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductReviewSampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductReviewSampleCountAggregateInputType | true
    }

  export interface ProductReviewSampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductReviewSample'], meta: { name: 'ProductReviewSample' } }
    /**
     * Find zero or one ProductReviewSample that matches the filter.
     * @param {ProductReviewSampleFindUniqueArgs} args - Arguments to find a ProductReviewSample
     * @example
     * // Get one ProductReviewSample
     * const productReviewSample = await prisma.productReviewSample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductReviewSampleFindUniqueArgs>(args: SelectSubset<T, ProductReviewSampleFindUniqueArgs<ExtArgs>>): Prisma__ProductReviewSampleClient<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductReviewSample that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductReviewSampleFindUniqueOrThrowArgs} args - Arguments to find a ProductReviewSample
     * @example
     * // Get one ProductReviewSample
     * const productReviewSample = await prisma.productReviewSample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductReviewSampleFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductReviewSampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductReviewSampleClient<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReviewSample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewSampleFindFirstArgs} args - Arguments to find a ProductReviewSample
     * @example
     * // Get one ProductReviewSample
     * const productReviewSample = await prisma.productReviewSample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductReviewSampleFindFirstArgs>(args?: SelectSubset<T, ProductReviewSampleFindFirstArgs<ExtArgs>>): Prisma__ProductReviewSampleClient<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductReviewSample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewSampleFindFirstOrThrowArgs} args - Arguments to find a ProductReviewSample
     * @example
     * // Get one ProductReviewSample
     * const productReviewSample = await prisma.productReviewSample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductReviewSampleFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductReviewSampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductReviewSampleClient<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductReviewSamples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewSampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductReviewSamples
     * const productReviewSamples = await prisma.productReviewSample.findMany()
     * 
     * // Get first 10 ProductReviewSamples
     * const productReviewSamples = await prisma.productReviewSample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productReviewSampleWithIdOnly = await prisma.productReviewSample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductReviewSampleFindManyArgs>(args?: SelectSubset<T, ProductReviewSampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductReviewSample.
     * @param {ProductReviewSampleCreateArgs} args - Arguments to create a ProductReviewSample.
     * @example
     * // Create one ProductReviewSample
     * const ProductReviewSample = await prisma.productReviewSample.create({
     *   data: {
     *     // ... data to create a ProductReviewSample
     *   }
     * })
     * 
     */
    create<T extends ProductReviewSampleCreateArgs>(args: SelectSubset<T, ProductReviewSampleCreateArgs<ExtArgs>>): Prisma__ProductReviewSampleClient<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductReviewSamples.
     * @param {ProductReviewSampleCreateManyArgs} args - Arguments to create many ProductReviewSamples.
     * @example
     * // Create many ProductReviewSamples
     * const productReviewSample = await prisma.productReviewSample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductReviewSampleCreateManyArgs>(args?: SelectSubset<T, ProductReviewSampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductReviewSamples and returns the data saved in the database.
     * @param {ProductReviewSampleCreateManyAndReturnArgs} args - Arguments to create many ProductReviewSamples.
     * @example
     * // Create many ProductReviewSamples
     * const productReviewSample = await prisma.productReviewSample.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductReviewSamples and only return the `id`
     * const productReviewSampleWithIdOnly = await prisma.productReviewSample.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductReviewSampleCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductReviewSampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductReviewSample.
     * @param {ProductReviewSampleDeleteArgs} args - Arguments to delete one ProductReviewSample.
     * @example
     * // Delete one ProductReviewSample
     * const ProductReviewSample = await prisma.productReviewSample.delete({
     *   where: {
     *     // ... filter to delete one ProductReviewSample
     *   }
     * })
     * 
     */
    delete<T extends ProductReviewSampleDeleteArgs>(args: SelectSubset<T, ProductReviewSampleDeleteArgs<ExtArgs>>): Prisma__ProductReviewSampleClient<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductReviewSample.
     * @param {ProductReviewSampleUpdateArgs} args - Arguments to update one ProductReviewSample.
     * @example
     * // Update one ProductReviewSample
     * const productReviewSample = await prisma.productReviewSample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductReviewSampleUpdateArgs>(args: SelectSubset<T, ProductReviewSampleUpdateArgs<ExtArgs>>): Prisma__ProductReviewSampleClient<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductReviewSamples.
     * @param {ProductReviewSampleDeleteManyArgs} args - Arguments to filter ProductReviewSamples to delete.
     * @example
     * // Delete a few ProductReviewSamples
     * const { count } = await prisma.productReviewSample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductReviewSampleDeleteManyArgs>(args?: SelectSubset<T, ProductReviewSampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductReviewSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewSampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductReviewSamples
     * const productReviewSample = await prisma.productReviewSample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductReviewSampleUpdateManyArgs>(args: SelectSubset<T, ProductReviewSampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductReviewSamples and returns the data updated in the database.
     * @param {ProductReviewSampleUpdateManyAndReturnArgs} args - Arguments to update many ProductReviewSamples.
     * @example
     * // Update many ProductReviewSamples
     * const productReviewSample = await prisma.productReviewSample.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductReviewSamples and only return the `id`
     * const productReviewSampleWithIdOnly = await prisma.productReviewSample.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductReviewSampleUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductReviewSampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductReviewSample.
     * @param {ProductReviewSampleUpsertArgs} args - Arguments to update or create a ProductReviewSample.
     * @example
     * // Update or create a ProductReviewSample
     * const productReviewSample = await prisma.productReviewSample.upsert({
     *   create: {
     *     // ... data to create a ProductReviewSample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductReviewSample we want to update
     *   }
     * })
     */
    upsert<T extends ProductReviewSampleUpsertArgs>(args: SelectSubset<T, ProductReviewSampleUpsertArgs<ExtArgs>>): Prisma__ProductReviewSampleClient<$Result.GetResult<Prisma.$ProductReviewSamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductReviewSamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewSampleCountArgs} args - Arguments to filter ProductReviewSamples to count.
     * @example
     * // Count the number of ProductReviewSamples
     * const count = await prisma.productReviewSample.count({
     *   where: {
     *     // ... the filter for the ProductReviewSamples we want to count
     *   }
     * })
    **/
    count<T extends ProductReviewSampleCountArgs>(
      args?: Subset<T, ProductReviewSampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductReviewSampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductReviewSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewSampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductReviewSampleAggregateArgs>(args: Subset<T, ProductReviewSampleAggregateArgs>): Prisma.PrismaPromise<GetProductReviewSampleAggregateType<T>>

    /**
     * Group by ProductReviewSample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductReviewSampleGroupByArgs} args - Group by arguments.
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
      T extends ProductReviewSampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductReviewSampleGroupByArgs['orderBy'] }
        : { orderBy?: ProductReviewSampleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductReviewSampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductReviewSampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductReviewSample model
   */
  readonly fields: ProductReviewSampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductReviewSample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductReviewSampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    snapshot<T extends ProductReviewSample$snapshotArgs<ExtArgs> = {}>(args?: Subset<T, ProductReviewSample$snapshotArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductReviewSample model
   */
  interface ProductReviewSampleFieldRefs {
    readonly id: FieldRef<"ProductReviewSample", 'Int'>
    readonly productId: FieldRef<"ProductReviewSample", 'Int'>
    readonly snapshotId: FieldRef<"ProductReviewSample", 'Int'>
    readonly platformReviewId: FieldRef<"ProductReviewSample", 'String'>
    readonly rating: FieldRef<"ProductReviewSample", 'Int'>
    readonly authorName: FieldRef<"ProductReviewSample", 'String'>
    readonly content: FieldRef<"ProductReviewSample", 'String'>
    readonly scrapedAt: FieldRef<"ProductReviewSample", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductReviewSample findUnique
   */
  export type ProductReviewSampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * Filter, which ProductReviewSample to fetch.
     */
    where: ProductReviewSampleWhereUniqueInput
  }

  /**
   * ProductReviewSample findUniqueOrThrow
   */
  export type ProductReviewSampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * Filter, which ProductReviewSample to fetch.
     */
    where: ProductReviewSampleWhereUniqueInput
  }

  /**
   * ProductReviewSample findFirst
   */
  export type ProductReviewSampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * Filter, which ProductReviewSample to fetch.
     */
    where?: ProductReviewSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviewSamples to fetch.
     */
    orderBy?: ProductReviewSampleOrderByWithRelationInput | ProductReviewSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReviewSamples.
     */
    cursor?: ProductReviewSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviewSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviewSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviewSamples.
     */
    distinct?: ProductReviewSampleScalarFieldEnum | ProductReviewSampleScalarFieldEnum[]
  }

  /**
   * ProductReviewSample findFirstOrThrow
   */
  export type ProductReviewSampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * Filter, which ProductReviewSample to fetch.
     */
    where?: ProductReviewSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviewSamples to fetch.
     */
    orderBy?: ProductReviewSampleOrderByWithRelationInput | ProductReviewSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductReviewSamples.
     */
    cursor?: ProductReviewSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviewSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviewSamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductReviewSamples.
     */
    distinct?: ProductReviewSampleScalarFieldEnum | ProductReviewSampleScalarFieldEnum[]
  }

  /**
   * ProductReviewSample findMany
   */
  export type ProductReviewSampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * Filter, which ProductReviewSamples to fetch.
     */
    where?: ProductReviewSampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductReviewSamples to fetch.
     */
    orderBy?: ProductReviewSampleOrderByWithRelationInput | ProductReviewSampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductReviewSamples.
     */
    cursor?: ProductReviewSampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductReviewSamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductReviewSamples.
     */
    skip?: number
    distinct?: ProductReviewSampleScalarFieldEnum | ProductReviewSampleScalarFieldEnum[]
  }

  /**
   * ProductReviewSample create
   */
  export type ProductReviewSampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductReviewSample.
     */
    data: XOR<ProductReviewSampleCreateInput, ProductReviewSampleUncheckedCreateInput>
  }

  /**
   * ProductReviewSample createMany
   */
  export type ProductReviewSampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductReviewSamples.
     */
    data: ProductReviewSampleCreateManyInput | ProductReviewSampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductReviewSample createManyAndReturn
   */
  export type ProductReviewSampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * The data used to create many ProductReviewSamples.
     */
    data: ProductReviewSampleCreateManyInput | ProductReviewSampleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductReviewSample update
   */
  export type ProductReviewSampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductReviewSample.
     */
    data: XOR<ProductReviewSampleUpdateInput, ProductReviewSampleUncheckedUpdateInput>
    /**
     * Choose, which ProductReviewSample to update.
     */
    where: ProductReviewSampleWhereUniqueInput
  }

  /**
   * ProductReviewSample updateMany
   */
  export type ProductReviewSampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductReviewSamples.
     */
    data: XOR<ProductReviewSampleUpdateManyMutationInput, ProductReviewSampleUncheckedUpdateManyInput>
    /**
     * Filter which ProductReviewSamples to update
     */
    where?: ProductReviewSampleWhereInput
    /**
     * Limit how many ProductReviewSamples to update.
     */
    limit?: number
  }

  /**
   * ProductReviewSample updateManyAndReturn
   */
  export type ProductReviewSampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * The data used to update ProductReviewSamples.
     */
    data: XOR<ProductReviewSampleUpdateManyMutationInput, ProductReviewSampleUncheckedUpdateManyInput>
    /**
     * Filter which ProductReviewSamples to update
     */
    where?: ProductReviewSampleWhereInput
    /**
     * Limit how many ProductReviewSamples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductReviewSample upsert
   */
  export type ProductReviewSampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductReviewSample to update in case it exists.
     */
    where: ProductReviewSampleWhereUniqueInput
    /**
     * In case the ProductReviewSample found by the `where` argument doesn't exist, create a new ProductReviewSample with this data.
     */
    create: XOR<ProductReviewSampleCreateInput, ProductReviewSampleUncheckedCreateInput>
    /**
     * In case the ProductReviewSample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductReviewSampleUpdateInput, ProductReviewSampleUncheckedUpdateInput>
  }

  /**
   * ProductReviewSample delete
   */
  export type ProductReviewSampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
    /**
     * Filter which ProductReviewSample to delete.
     */
    where: ProductReviewSampleWhereUniqueInput
  }

  /**
   * ProductReviewSample deleteMany
   */
  export type ProductReviewSampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductReviewSamples to delete
     */
    where?: ProductReviewSampleWhereInput
    /**
     * Limit how many ProductReviewSamples to delete.
     */
    limit?: number
  }

  /**
   * ProductReviewSample.snapshot
   */
  export type ProductReviewSample$snapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    where?: ProductSnapshotWhereInput
  }

  /**
   * ProductReviewSample without action
   */
  export type ProductReviewSampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductReviewSample
     */
    select?: ProductReviewSampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductReviewSample
     */
    omit?: ProductReviewSampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductReviewSampleInclude<ExtArgs> | null
  }


  /**
   * Model ProductAIAnalysis
   */

  export type AggregateProductAIAnalysis = {
    _count: ProductAIAnalysisCountAggregateOutputType | null
    _avg: ProductAIAnalysisAvgAggregateOutputType | null
    _sum: ProductAIAnalysisSumAggregateOutputType | null
    _min: ProductAIAnalysisMinAggregateOutputType | null
    _max: ProductAIAnalysisMaxAggregateOutputType | null
  }

  export type ProductAIAnalysisAvgAggregateOutputType = {
    id: number | null
    productId: number | null
    snapshotId: number | null
    worthItScore: number | null
  }

  export type ProductAIAnalysisSumAggregateOutputType = {
    id: number | null
    productId: number | null
    snapshotId: number | null
    worthItScore: number | null
  }

  export type ProductAIAnalysisMinAggregateOutputType = {
    id: number | null
    productId: number | null
    snapshotId: number | null
    worthItScore: number | null
    priceComment: string | null
    summary: string | null
    modelName: string | null
    createdAt: Date | null
  }

  export type ProductAIAnalysisMaxAggregateOutputType = {
    id: number | null
    productId: number | null
    snapshotId: number | null
    worthItScore: number | null
    priceComment: string | null
    summary: string | null
    modelName: string | null
    createdAt: Date | null
  }

  export type ProductAIAnalysisCountAggregateOutputType = {
    id: number
    productId: number
    snapshotId: number
    worthItScore: number
    priceComment: number
    summary: number
    pros: number
    cons: number
    modelName: number
    createdAt: number
    _all: number
  }


  export type ProductAIAnalysisAvgAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    worthItScore?: true
  }

  export type ProductAIAnalysisSumAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    worthItScore?: true
  }

  export type ProductAIAnalysisMinAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    worthItScore?: true
    priceComment?: true
    summary?: true
    modelName?: true
    createdAt?: true
  }

  export type ProductAIAnalysisMaxAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    worthItScore?: true
    priceComment?: true
    summary?: true
    modelName?: true
    createdAt?: true
  }

  export type ProductAIAnalysisCountAggregateInputType = {
    id?: true
    productId?: true
    snapshotId?: true
    worthItScore?: true
    priceComment?: true
    summary?: true
    pros?: true
    cons?: true
    modelName?: true
    createdAt?: true
    _all?: true
  }

  export type ProductAIAnalysisAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAIAnalysis to aggregate.
     */
    where?: ProductAIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAIAnalyses to fetch.
     */
    orderBy?: ProductAIAnalysisOrderByWithRelationInput | ProductAIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProductAIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ProductAIAnalyses
    **/
    _count?: true | ProductAIAnalysisCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ProductAIAnalysisAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ProductAIAnalysisSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProductAIAnalysisMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProductAIAnalysisMaxAggregateInputType
  }

  export type GetProductAIAnalysisAggregateType<T extends ProductAIAnalysisAggregateArgs> = {
        [P in keyof T & keyof AggregateProductAIAnalysis]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProductAIAnalysis[P]>
      : GetScalarType<T[P], AggregateProductAIAnalysis[P]>
  }




  export type ProductAIAnalysisGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProductAIAnalysisWhereInput
    orderBy?: ProductAIAnalysisOrderByWithAggregationInput | ProductAIAnalysisOrderByWithAggregationInput[]
    by: ProductAIAnalysisScalarFieldEnum[] | ProductAIAnalysisScalarFieldEnum
    having?: ProductAIAnalysisScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProductAIAnalysisCountAggregateInputType | true
    _avg?: ProductAIAnalysisAvgAggregateInputType
    _sum?: ProductAIAnalysisSumAggregateInputType
    _min?: ProductAIAnalysisMinAggregateInputType
    _max?: ProductAIAnalysisMaxAggregateInputType
  }

  export type ProductAIAnalysisGroupByOutputType = {
    id: number
    productId: number
    snapshotId: number | null
    worthItScore: number
    priceComment: string | null
    summary: string | null
    pros: JsonValue | null
    cons: JsonValue | null
    modelName: string | null
    createdAt: Date
    _count: ProductAIAnalysisCountAggregateOutputType | null
    _avg: ProductAIAnalysisAvgAggregateOutputType | null
    _sum: ProductAIAnalysisSumAggregateOutputType | null
    _min: ProductAIAnalysisMinAggregateOutputType | null
    _max: ProductAIAnalysisMaxAggregateOutputType | null
  }

  type GetProductAIAnalysisGroupByPayload<T extends ProductAIAnalysisGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProductAIAnalysisGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProductAIAnalysisGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProductAIAnalysisGroupByOutputType[P]>
            : GetScalarType<T[P], ProductAIAnalysisGroupByOutputType[P]>
        }
      >
    >


  export type ProductAIAnalysisSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    snapshotId?: boolean
    worthItScore?: boolean
    priceComment?: boolean
    summary?: boolean
    pros?: boolean
    cons?: boolean
    modelName?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductAIAnalysis$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["productAIAnalysis"]>

  export type ProductAIAnalysisSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    snapshotId?: boolean
    worthItScore?: boolean
    priceComment?: boolean
    summary?: boolean
    pros?: boolean
    cons?: boolean
    modelName?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductAIAnalysis$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["productAIAnalysis"]>

  export type ProductAIAnalysisSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    productId?: boolean
    snapshotId?: boolean
    worthItScore?: boolean
    priceComment?: boolean
    summary?: boolean
    pros?: boolean
    cons?: boolean
    modelName?: boolean
    createdAt?: boolean
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductAIAnalysis$snapshotArgs<ExtArgs>
  }, ExtArgs["result"]["productAIAnalysis"]>

  export type ProductAIAnalysisSelectScalar = {
    id?: boolean
    productId?: boolean
    snapshotId?: boolean
    worthItScore?: boolean
    priceComment?: boolean
    summary?: boolean
    pros?: boolean
    cons?: boolean
    modelName?: boolean
    createdAt?: boolean
  }

  export type ProductAIAnalysisOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "productId" | "snapshotId" | "worthItScore" | "priceComment" | "summary" | "pros" | "cons" | "modelName" | "createdAt", ExtArgs["result"]["productAIAnalysis"]>
  export type ProductAIAnalysisInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductAIAnalysis$snapshotArgs<ExtArgs>
  }
  export type ProductAIAnalysisIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductAIAnalysis$snapshotArgs<ExtArgs>
  }
  export type ProductAIAnalysisIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    product?: boolean | ProductDefaultArgs<ExtArgs>
    snapshot?: boolean | ProductAIAnalysis$snapshotArgs<ExtArgs>
  }

  export type $ProductAIAnalysisPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "ProductAIAnalysis"
    objects: {
      product: Prisma.$ProductPayload<ExtArgs>
      snapshot: Prisma.$ProductSnapshotPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      productId: number
      snapshotId: number | null
      worthItScore: number
      priceComment: string | null
      summary: string | null
      pros: Prisma.JsonValue | null
      cons: Prisma.JsonValue | null
      modelName: string | null
      createdAt: Date
    }, ExtArgs["result"]["productAIAnalysis"]>
    composites: {}
  }

  type ProductAIAnalysisGetPayload<S extends boolean | null | undefined | ProductAIAnalysisDefaultArgs> = $Result.GetResult<Prisma.$ProductAIAnalysisPayload, S>

  type ProductAIAnalysisCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProductAIAnalysisFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProductAIAnalysisCountAggregateInputType | true
    }

  export interface ProductAIAnalysisDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['ProductAIAnalysis'], meta: { name: 'ProductAIAnalysis' } }
    /**
     * Find zero or one ProductAIAnalysis that matches the filter.
     * @param {ProductAIAnalysisFindUniqueArgs} args - Arguments to find a ProductAIAnalysis
     * @example
     * // Get one ProductAIAnalysis
     * const productAIAnalysis = await prisma.productAIAnalysis.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProductAIAnalysisFindUniqueArgs>(args: SelectSubset<T, ProductAIAnalysisFindUniqueArgs<ExtArgs>>): Prisma__ProductAIAnalysisClient<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one ProductAIAnalysis that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProductAIAnalysisFindUniqueOrThrowArgs} args - Arguments to find a ProductAIAnalysis
     * @example
     * // Get one ProductAIAnalysis
     * const productAIAnalysis = await prisma.productAIAnalysis.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProductAIAnalysisFindUniqueOrThrowArgs>(args: SelectSubset<T, ProductAIAnalysisFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProductAIAnalysisClient<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAIAnalysis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAIAnalysisFindFirstArgs} args - Arguments to find a ProductAIAnalysis
     * @example
     * // Get one ProductAIAnalysis
     * const productAIAnalysis = await prisma.productAIAnalysis.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProductAIAnalysisFindFirstArgs>(args?: SelectSubset<T, ProductAIAnalysisFindFirstArgs<ExtArgs>>): Prisma__ProductAIAnalysisClient<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first ProductAIAnalysis that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAIAnalysisFindFirstOrThrowArgs} args - Arguments to find a ProductAIAnalysis
     * @example
     * // Get one ProductAIAnalysis
     * const productAIAnalysis = await prisma.productAIAnalysis.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProductAIAnalysisFindFirstOrThrowArgs>(args?: SelectSubset<T, ProductAIAnalysisFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProductAIAnalysisClient<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more ProductAIAnalyses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAIAnalysisFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ProductAIAnalyses
     * const productAIAnalyses = await prisma.productAIAnalysis.findMany()
     * 
     * // Get first 10 ProductAIAnalyses
     * const productAIAnalyses = await prisma.productAIAnalysis.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const productAIAnalysisWithIdOnly = await prisma.productAIAnalysis.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProductAIAnalysisFindManyArgs>(args?: SelectSubset<T, ProductAIAnalysisFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a ProductAIAnalysis.
     * @param {ProductAIAnalysisCreateArgs} args - Arguments to create a ProductAIAnalysis.
     * @example
     * // Create one ProductAIAnalysis
     * const ProductAIAnalysis = await prisma.productAIAnalysis.create({
     *   data: {
     *     // ... data to create a ProductAIAnalysis
     *   }
     * })
     * 
     */
    create<T extends ProductAIAnalysisCreateArgs>(args: SelectSubset<T, ProductAIAnalysisCreateArgs<ExtArgs>>): Prisma__ProductAIAnalysisClient<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many ProductAIAnalyses.
     * @param {ProductAIAnalysisCreateManyArgs} args - Arguments to create many ProductAIAnalyses.
     * @example
     * // Create many ProductAIAnalyses
     * const productAIAnalysis = await prisma.productAIAnalysis.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProductAIAnalysisCreateManyArgs>(args?: SelectSubset<T, ProductAIAnalysisCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many ProductAIAnalyses and returns the data saved in the database.
     * @param {ProductAIAnalysisCreateManyAndReturnArgs} args - Arguments to create many ProductAIAnalyses.
     * @example
     * // Create many ProductAIAnalyses
     * const productAIAnalysis = await prisma.productAIAnalysis.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many ProductAIAnalyses and only return the `id`
     * const productAIAnalysisWithIdOnly = await prisma.productAIAnalysis.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProductAIAnalysisCreateManyAndReturnArgs>(args?: SelectSubset<T, ProductAIAnalysisCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a ProductAIAnalysis.
     * @param {ProductAIAnalysisDeleteArgs} args - Arguments to delete one ProductAIAnalysis.
     * @example
     * // Delete one ProductAIAnalysis
     * const ProductAIAnalysis = await prisma.productAIAnalysis.delete({
     *   where: {
     *     // ... filter to delete one ProductAIAnalysis
     *   }
     * })
     * 
     */
    delete<T extends ProductAIAnalysisDeleteArgs>(args: SelectSubset<T, ProductAIAnalysisDeleteArgs<ExtArgs>>): Prisma__ProductAIAnalysisClient<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one ProductAIAnalysis.
     * @param {ProductAIAnalysisUpdateArgs} args - Arguments to update one ProductAIAnalysis.
     * @example
     * // Update one ProductAIAnalysis
     * const productAIAnalysis = await prisma.productAIAnalysis.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProductAIAnalysisUpdateArgs>(args: SelectSubset<T, ProductAIAnalysisUpdateArgs<ExtArgs>>): Prisma__ProductAIAnalysisClient<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more ProductAIAnalyses.
     * @param {ProductAIAnalysisDeleteManyArgs} args - Arguments to filter ProductAIAnalyses to delete.
     * @example
     * // Delete a few ProductAIAnalyses
     * const { count } = await prisma.productAIAnalysis.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProductAIAnalysisDeleteManyArgs>(args?: SelectSubset<T, ProductAIAnalysisDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAIAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAIAnalysisUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ProductAIAnalyses
     * const productAIAnalysis = await prisma.productAIAnalysis.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProductAIAnalysisUpdateManyArgs>(args: SelectSubset<T, ProductAIAnalysisUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ProductAIAnalyses and returns the data updated in the database.
     * @param {ProductAIAnalysisUpdateManyAndReturnArgs} args - Arguments to update many ProductAIAnalyses.
     * @example
     * // Update many ProductAIAnalyses
     * const productAIAnalysis = await prisma.productAIAnalysis.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more ProductAIAnalyses and only return the `id`
     * const productAIAnalysisWithIdOnly = await prisma.productAIAnalysis.updateManyAndReturn({
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
    updateManyAndReturn<T extends ProductAIAnalysisUpdateManyAndReturnArgs>(args: SelectSubset<T, ProductAIAnalysisUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one ProductAIAnalysis.
     * @param {ProductAIAnalysisUpsertArgs} args - Arguments to update or create a ProductAIAnalysis.
     * @example
     * // Update or create a ProductAIAnalysis
     * const productAIAnalysis = await prisma.productAIAnalysis.upsert({
     *   create: {
     *     // ... data to create a ProductAIAnalysis
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ProductAIAnalysis we want to update
     *   }
     * })
     */
    upsert<T extends ProductAIAnalysisUpsertArgs>(args: SelectSubset<T, ProductAIAnalysisUpsertArgs<ExtArgs>>): Prisma__ProductAIAnalysisClient<$Result.GetResult<Prisma.$ProductAIAnalysisPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of ProductAIAnalyses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAIAnalysisCountArgs} args - Arguments to filter ProductAIAnalyses to count.
     * @example
     * // Count the number of ProductAIAnalyses
     * const count = await prisma.productAIAnalysis.count({
     *   where: {
     *     // ... the filter for the ProductAIAnalyses we want to count
     *   }
     * })
    **/
    count<T extends ProductAIAnalysisCountArgs>(
      args?: Subset<T, ProductAIAnalysisCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProductAIAnalysisCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ProductAIAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAIAnalysisAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProductAIAnalysisAggregateArgs>(args: Subset<T, ProductAIAnalysisAggregateArgs>): Prisma.PrismaPromise<GetProductAIAnalysisAggregateType<T>>

    /**
     * Group by ProductAIAnalysis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProductAIAnalysisGroupByArgs} args - Group by arguments.
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
      T extends ProductAIAnalysisGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProductAIAnalysisGroupByArgs['orderBy'] }
        : { orderBy?: ProductAIAnalysisGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProductAIAnalysisGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProductAIAnalysisGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the ProductAIAnalysis model
   */
  readonly fields: ProductAIAnalysisFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for ProductAIAnalysis.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProductAIAnalysisClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    snapshot<T extends ProductAIAnalysis$snapshotArgs<ExtArgs> = {}>(args?: Subset<T, ProductAIAnalysis$snapshotArgs<ExtArgs>>): Prisma__ProductSnapshotClient<$Result.GetResult<Prisma.$ProductSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the ProductAIAnalysis model
   */
  interface ProductAIAnalysisFieldRefs {
    readonly id: FieldRef<"ProductAIAnalysis", 'Int'>
    readonly productId: FieldRef<"ProductAIAnalysis", 'Int'>
    readonly snapshotId: FieldRef<"ProductAIAnalysis", 'Int'>
    readonly worthItScore: FieldRef<"ProductAIAnalysis", 'Int'>
    readonly priceComment: FieldRef<"ProductAIAnalysis", 'String'>
    readonly summary: FieldRef<"ProductAIAnalysis", 'String'>
    readonly pros: FieldRef<"ProductAIAnalysis", 'Json'>
    readonly cons: FieldRef<"ProductAIAnalysis", 'Json'>
    readonly modelName: FieldRef<"ProductAIAnalysis", 'String'>
    readonly createdAt: FieldRef<"ProductAIAnalysis", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * ProductAIAnalysis findUnique
   */
  export type ProductAIAnalysisFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProductAIAnalysis to fetch.
     */
    where: ProductAIAnalysisWhereUniqueInput
  }

  /**
   * ProductAIAnalysis findUniqueOrThrow
   */
  export type ProductAIAnalysisFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProductAIAnalysis to fetch.
     */
    where: ProductAIAnalysisWhereUniqueInput
  }

  /**
   * ProductAIAnalysis findFirst
   */
  export type ProductAIAnalysisFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProductAIAnalysis to fetch.
     */
    where?: ProductAIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAIAnalyses to fetch.
     */
    orderBy?: ProductAIAnalysisOrderByWithRelationInput | ProductAIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAIAnalyses.
     */
    cursor?: ProductAIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAIAnalyses.
     */
    distinct?: ProductAIAnalysisScalarFieldEnum | ProductAIAnalysisScalarFieldEnum[]
  }

  /**
   * ProductAIAnalysis findFirstOrThrow
   */
  export type ProductAIAnalysisFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProductAIAnalysis to fetch.
     */
    where?: ProductAIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAIAnalyses to fetch.
     */
    orderBy?: ProductAIAnalysisOrderByWithRelationInput | ProductAIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ProductAIAnalyses.
     */
    cursor?: ProductAIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAIAnalyses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ProductAIAnalyses.
     */
    distinct?: ProductAIAnalysisScalarFieldEnum | ProductAIAnalysisScalarFieldEnum[]
  }

  /**
   * ProductAIAnalysis findMany
   */
  export type ProductAIAnalysisFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * Filter, which ProductAIAnalyses to fetch.
     */
    where?: ProductAIAnalysisWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ProductAIAnalyses to fetch.
     */
    orderBy?: ProductAIAnalysisOrderByWithRelationInput | ProductAIAnalysisOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ProductAIAnalyses.
     */
    cursor?: ProductAIAnalysisWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ProductAIAnalyses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ProductAIAnalyses.
     */
    skip?: number
    distinct?: ProductAIAnalysisScalarFieldEnum | ProductAIAnalysisScalarFieldEnum[]
  }

  /**
   * ProductAIAnalysis create
   */
  export type ProductAIAnalysisCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to create a ProductAIAnalysis.
     */
    data: XOR<ProductAIAnalysisCreateInput, ProductAIAnalysisUncheckedCreateInput>
  }

  /**
   * ProductAIAnalysis createMany
   */
  export type ProductAIAnalysisCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many ProductAIAnalyses.
     */
    data: ProductAIAnalysisCreateManyInput | ProductAIAnalysisCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * ProductAIAnalysis createManyAndReturn
   */
  export type ProductAIAnalysisCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * The data used to create many ProductAIAnalyses.
     */
    data: ProductAIAnalysisCreateManyInput | ProductAIAnalysisCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAIAnalysis update
   */
  export type ProductAIAnalysisUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * The data needed to update a ProductAIAnalysis.
     */
    data: XOR<ProductAIAnalysisUpdateInput, ProductAIAnalysisUncheckedUpdateInput>
    /**
     * Choose, which ProductAIAnalysis to update.
     */
    where: ProductAIAnalysisWhereUniqueInput
  }

  /**
   * ProductAIAnalysis updateMany
   */
  export type ProductAIAnalysisUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update ProductAIAnalyses.
     */
    data: XOR<ProductAIAnalysisUpdateManyMutationInput, ProductAIAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ProductAIAnalyses to update
     */
    where?: ProductAIAnalysisWhereInput
    /**
     * Limit how many ProductAIAnalyses to update.
     */
    limit?: number
  }

  /**
   * ProductAIAnalysis updateManyAndReturn
   */
  export type ProductAIAnalysisUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * The data used to update ProductAIAnalyses.
     */
    data: XOR<ProductAIAnalysisUpdateManyMutationInput, ProductAIAnalysisUncheckedUpdateManyInput>
    /**
     * Filter which ProductAIAnalyses to update
     */
    where?: ProductAIAnalysisWhereInput
    /**
     * Limit how many ProductAIAnalyses to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * ProductAIAnalysis upsert
   */
  export type ProductAIAnalysisUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * The filter to search for the ProductAIAnalysis to update in case it exists.
     */
    where: ProductAIAnalysisWhereUniqueInput
    /**
     * In case the ProductAIAnalysis found by the `where` argument doesn't exist, create a new ProductAIAnalysis with this data.
     */
    create: XOR<ProductAIAnalysisCreateInput, ProductAIAnalysisUncheckedCreateInput>
    /**
     * In case the ProductAIAnalysis was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProductAIAnalysisUpdateInput, ProductAIAnalysisUncheckedUpdateInput>
  }

  /**
   * ProductAIAnalysis delete
   */
  export type ProductAIAnalysisDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
    /**
     * Filter which ProductAIAnalysis to delete.
     */
    where: ProductAIAnalysisWhereUniqueInput
  }

  /**
   * ProductAIAnalysis deleteMany
   */
  export type ProductAIAnalysisDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which ProductAIAnalyses to delete
     */
    where?: ProductAIAnalysisWhereInput
    /**
     * Limit how many ProductAIAnalyses to delete.
     */
    limit?: number
  }

  /**
   * ProductAIAnalysis.snapshot
   */
  export type ProductAIAnalysis$snapshotArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductSnapshot
     */
    select?: ProductSnapshotSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductSnapshot
     */
    omit?: ProductSnapshotOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductSnapshotInclude<ExtArgs> | null
    where?: ProductSnapshotWhereInput
  }

  /**
   * ProductAIAnalysis without action
   */
  export type ProductAIAnalysisDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProductAIAnalysis
     */
    select?: ProductAIAnalysisSelect<ExtArgs> | null
    /**
     * Omit specific fields from the ProductAIAnalysis
     */
    omit?: ProductAIAnalysisOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProductAIAnalysisInclude<ExtArgs> | null
  }


  /**
   * Model CompareSession
   */

  export type AggregateCompareSession = {
    _count: CompareSessionCountAggregateOutputType | null
    _avg: CompareSessionAvgAggregateOutputType | null
    _sum: CompareSessionSumAggregateOutputType | null
    _min: CompareSessionMinAggregateOutputType | null
    _max: CompareSessionMaxAggregateOutputType | null
  }

  export type CompareSessionAvgAggregateOutputType = {
    id: number | null
  }

  export type CompareSessionSumAggregateOutputType = {
    id: number | null
  }

  export type CompareSessionMinAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
  }

  export type CompareSessionMaxAggregateOutputType = {
    id: number | null
    title: string | null
    createdAt: Date | null
  }

  export type CompareSessionCountAggregateOutputType = {
    id: number
    title: number
    createdAt: number
    _all: number
  }


  export type CompareSessionAvgAggregateInputType = {
    id?: true
  }

  export type CompareSessionSumAggregateInputType = {
    id?: true
  }

  export type CompareSessionMinAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
  }

  export type CompareSessionMaxAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
  }

  export type CompareSessionCountAggregateInputType = {
    id?: true
    title?: true
    createdAt?: true
    _all?: true
  }

  export type CompareSessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompareSession to aggregate.
     */
    where?: CompareSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessions to fetch.
     */
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompareSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompareSessions
    **/
    _count?: true | CompareSessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompareSessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompareSessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompareSessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompareSessionMaxAggregateInputType
  }

  export type GetCompareSessionAggregateType<T extends CompareSessionAggregateArgs> = {
        [P in keyof T & keyof AggregateCompareSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompareSession[P]>
      : GetScalarType<T[P], AggregateCompareSession[P]>
  }




  export type CompareSessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareSessionWhereInput
    orderBy?: CompareSessionOrderByWithAggregationInput | CompareSessionOrderByWithAggregationInput[]
    by: CompareSessionScalarFieldEnum[] | CompareSessionScalarFieldEnum
    having?: CompareSessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompareSessionCountAggregateInputType | true
    _avg?: CompareSessionAvgAggregateInputType
    _sum?: CompareSessionSumAggregateInputType
    _min?: CompareSessionMinAggregateInputType
    _max?: CompareSessionMaxAggregateInputType
  }

  export type CompareSessionGroupByOutputType = {
    id: number
    title: string | null
    createdAt: Date
    _count: CompareSessionCountAggregateOutputType | null
    _avg: CompareSessionAvgAggregateOutputType | null
    _sum: CompareSessionSumAggregateOutputType | null
    _min: CompareSessionMinAggregateOutputType | null
    _max: CompareSessionMaxAggregateOutputType | null
  }

  type GetCompareSessionGroupByPayload<T extends CompareSessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompareSessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompareSessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompareSessionGroupByOutputType[P]>
            : GetScalarType<T[P], CompareSessionGroupByOutputType[P]>
        }
      >
    >


  export type CompareSessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
    items?: boolean | CompareSession$itemsArgs<ExtArgs>
    _count?: boolean | CompareSessionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareSession"]>

  export type CompareSessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["compareSession"]>

  export type CompareSessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    title?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["compareSession"]>

  export type CompareSessionSelectScalar = {
    id?: boolean
    title?: boolean
    createdAt?: boolean
  }

  export type CompareSessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "title" | "createdAt", ExtArgs["result"]["compareSession"]>
  export type CompareSessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | CompareSession$itemsArgs<ExtArgs>
    _count?: boolean | CompareSessionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CompareSessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CompareSessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CompareSessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompareSession"
    objects: {
      items: Prisma.$CompareItemPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      title: string | null
      createdAt: Date
    }, ExtArgs["result"]["compareSession"]>
    composites: {}
  }

  type CompareSessionGetPayload<S extends boolean | null | undefined | CompareSessionDefaultArgs> = $Result.GetResult<Prisma.$CompareSessionPayload, S>

  type CompareSessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompareSessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompareSessionCountAggregateInputType | true
    }

  export interface CompareSessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompareSession'], meta: { name: 'CompareSession' } }
    /**
     * Find zero or one CompareSession that matches the filter.
     * @param {CompareSessionFindUniqueArgs} args - Arguments to find a CompareSession
     * @example
     * // Get one CompareSession
     * const compareSession = await prisma.compareSession.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompareSessionFindUniqueArgs>(args: SelectSubset<T, CompareSessionFindUniqueArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompareSession that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompareSessionFindUniqueOrThrowArgs} args - Arguments to find a CompareSession
     * @example
     * // Get one CompareSession
     * const compareSession = await prisma.compareSession.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompareSessionFindUniqueOrThrowArgs>(args: SelectSubset<T, CompareSessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompareSession that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionFindFirstArgs} args - Arguments to find a CompareSession
     * @example
     * // Get one CompareSession
     * const compareSession = await prisma.compareSession.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompareSessionFindFirstArgs>(args?: SelectSubset<T, CompareSessionFindFirstArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompareSession that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionFindFirstOrThrowArgs} args - Arguments to find a CompareSession
     * @example
     * // Get one CompareSession
     * const compareSession = await prisma.compareSession.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompareSessionFindFirstOrThrowArgs>(args?: SelectSubset<T, CompareSessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompareSessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompareSessions
     * const compareSessions = await prisma.compareSession.findMany()
     * 
     * // Get first 10 CompareSessions
     * const compareSessions = await prisma.compareSession.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compareSessionWithIdOnly = await prisma.compareSession.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompareSessionFindManyArgs>(args?: SelectSubset<T, CompareSessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompareSession.
     * @param {CompareSessionCreateArgs} args - Arguments to create a CompareSession.
     * @example
     * // Create one CompareSession
     * const CompareSession = await prisma.compareSession.create({
     *   data: {
     *     // ... data to create a CompareSession
     *   }
     * })
     * 
     */
    create<T extends CompareSessionCreateArgs>(args: SelectSubset<T, CompareSessionCreateArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompareSessions.
     * @param {CompareSessionCreateManyArgs} args - Arguments to create many CompareSessions.
     * @example
     * // Create many CompareSessions
     * const compareSession = await prisma.compareSession.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompareSessionCreateManyArgs>(args?: SelectSubset<T, CompareSessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompareSessions and returns the data saved in the database.
     * @param {CompareSessionCreateManyAndReturnArgs} args - Arguments to create many CompareSessions.
     * @example
     * // Create many CompareSessions
     * const compareSession = await prisma.compareSession.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompareSessions and only return the `id`
     * const compareSessionWithIdOnly = await prisma.compareSession.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompareSessionCreateManyAndReturnArgs>(args?: SelectSubset<T, CompareSessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompareSession.
     * @param {CompareSessionDeleteArgs} args - Arguments to delete one CompareSession.
     * @example
     * // Delete one CompareSession
     * const CompareSession = await prisma.compareSession.delete({
     *   where: {
     *     // ... filter to delete one CompareSession
     *   }
     * })
     * 
     */
    delete<T extends CompareSessionDeleteArgs>(args: SelectSubset<T, CompareSessionDeleteArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompareSession.
     * @param {CompareSessionUpdateArgs} args - Arguments to update one CompareSession.
     * @example
     * // Update one CompareSession
     * const compareSession = await prisma.compareSession.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompareSessionUpdateArgs>(args: SelectSubset<T, CompareSessionUpdateArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompareSessions.
     * @param {CompareSessionDeleteManyArgs} args - Arguments to filter CompareSessions to delete.
     * @example
     * // Delete a few CompareSessions
     * const { count } = await prisma.compareSession.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompareSessionDeleteManyArgs>(args?: SelectSubset<T, CompareSessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompareSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompareSessions
     * const compareSession = await prisma.compareSession.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompareSessionUpdateManyArgs>(args: SelectSubset<T, CompareSessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompareSessions and returns the data updated in the database.
     * @param {CompareSessionUpdateManyAndReturnArgs} args - Arguments to update many CompareSessions.
     * @example
     * // Update many CompareSessions
     * const compareSession = await prisma.compareSession.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompareSessions and only return the `id`
     * const compareSessionWithIdOnly = await prisma.compareSession.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompareSessionUpdateManyAndReturnArgs>(args: SelectSubset<T, CompareSessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompareSession.
     * @param {CompareSessionUpsertArgs} args - Arguments to update or create a CompareSession.
     * @example
     * // Update or create a CompareSession
     * const compareSession = await prisma.compareSession.upsert({
     *   create: {
     *     // ... data to create a CompareSession
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompareSession we want to update
     *   }
     * })
     */
    upsert<T extends CompareSessionUpsertArgs>(args: SelectSubset<T, CompareSessionUpsertArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompareSessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionCountArgs} args - Arguments to filter CompareSessions to count.
     * @example
     * // Count the number of CompareSessions
     * const count = await prisma.compareSession.count({
     *   where: {
     *     // ... the filter for the CompareSessions we want to count
     *   }
     * })
    **/
    count<T extends CompareSessionCountArgs>(
      args?: Subset<T, CompareSessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompareSessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompareSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompareSessionAggregateArgs>(args: Subset<T, CompareSessionAggregateArgs>): Prisma.PrismaPromise<GetCompareSessionAggregateType<T>>

    /**
     * Group by CompareSession.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareSessionGroupByArgs} args - Group by arguments.
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
      T extends CompareSessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompareSessionGroupByArgs['orderBy'] }
        : { orderBy?: CompareSessionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompareSessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompareSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompareSession model
   */
  readonly fields: CompareSessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompareSession.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompareSessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    items<T extends CompareSession$itemsArgs<ExtArgs> = {}>(args?: Subset<T, CompareSession$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the CompareSession model
   */
  interface CompareSessionFieldRefs {
    readonly id: FieldRef<"CompareSession", 'Int'>
    readonly title: FieldRef<"CompareSession", 'String'>
    readonly createdAt: FieldRef<"CompareSession", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CompareSession findUnique
   */
  export type CompareSessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSession to fetch.
     */
    where: CompareSessionWhereUniqueInput
  }

  /**
   * CompareSession findUniqueOrThrow
   */
  export type CompareSessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSession to fetch.
     */
    where: CompareSessionWhereUniqueInput
  }

  /**
   * CompareSession findFirst
   */
  export type CompareSessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSession to fetch.
     */
    where?: CompareSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessions to fetch.
     */
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompareSessions.
     */
    cursor?: CompareSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareSessions.
     */
    distinct?: CompareSessionScalarFieldEnum | CompareSessionScalarFieldEnum[]
  }

  /**
   * CompareSession findFirstOrThrow
   */
  export type CompareSessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSession to fetch.
     */
    where?: CompareSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessions to fetch.
     */
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompareSessions.
     */
    cursor?: CompareSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareSessions.
     */
    distinct?: CompareSessionScalarFieldEnum | CompareSessionScalarFieldEnum[]
  }

  /**
   * CompareSession findMany
   */
  export type CompareSessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter, which CompareSessions to fetch.
     */
    where?: CompareSessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareSessions to fetch.
     */
    orderBy?: CompareSessionOrderByWithRelationInput | CompareSessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompareSessions.
     */
    cursor?: CompareSessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareSessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareSessions.
     */
    skip?: number
    distinct?: CompareSessionScalarFieldEnum | CompareSessionScalarFieldEnum[]
  }

  /**
   * CompareSession create
   */
  export type CompareSessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * The data needed to create a CompareSession.
     */
    data?: XOR<CompareSessionCreateInput, CompareSessionUncheckedCreateInput>
  }

  /**
   * CompareSession createMany
   */
  export type CompareSessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompareSessions.
     */
    data: CompareSessionCreateManyInput | CompareSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompareSession createManyAndReturn
   */
  export type CompareSessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * The data used to create many CompareSessions.
     */
    data: CompareSessionCreateManyInput | CompareSessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompareSession update
   */
  export type CompareSessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * The data needed to update a CompareSession.
     */
    data: XOR<CompareSessionUpdateInput, CompareSessionUncheckedUpdateInput>
    /**
     * Choose, which CompareSession to update.
     */
    where: CompareSessionWhereUniqueInput
  }

  /**
   * CompareSession updateMany
   */
  export type CompareSessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompareSessions.
     */
    data: XOR<CompareSessionUpdateManyMutationInput, CompareSessionUncheckedUpdateManyInput>
    /**
     * Filter which CompareSessions to update
     */
    where?: CompareSessionWhereInput
    /**
     * Limit how many CompareSessions to update.
     */
    limit?: number
  }

  /**
   * CompareSession updateManyAndReturn
   */
  export type CompareSessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * The data used to update CompareSessions.
     */
    data: XOR<CompareSessionUpdateManyMutationInput, CompareSessionUncheckedUpdateManyInput>
    /**
     * Filter which CompareSessions to update
     */
    where?: CompareSessionWhereInput
    /**
     * Limit how many CompareSessions to update.
     */
    limit?: number
  }

  /**
   * CompareSession upsert
   */
  export type CompareSessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * The filter to search for the CompareSession to update in case it exists.
     */
    where: CompareSessionWhereUniqueInput
    /**
     * In case the CompareSession found by the `where` argument doesn't exist, create a new CompareSession with this data.
     */
    create: XOR<CompareSessionCreateInput, CompareSessionUncheckedCreateInput>
    /**
     * In case the CompareSession was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompareSessionUpdateInput, CompareSessionUncheckedUpdateInput>
  }

  /**
   * CompareSession delete
   */
  export type CompareSessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
    /**
     * Filter which CompareSession to delete.
     */
    where: CompareSessionWhereUniqueInput
  }

  /**
   * CompareSession deleteMany
   */
  export type CompareSessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompareSessions to delete
     */
    where?: CompareSessionWhereInput
    /**
     * Limit how many CompareSessions to delete.
     */
    limit?: number
  }

  /**
   * CompareSession.items
   */
  export type CompareSession$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    where?: CompareItemWhereInput
    orderBy?: CompareItemOrderByWithRelationInput | CompareItemOrderByWithRelationInput[]
    cursor?: CompareItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CompareItemScalarFieldEnum | CompareItemScalarFieldEnum[]
  }

  /**
   * CompareSession without action
   */
  export type CompareSessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareSession
     */
    select?: CompareSessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareSession
     */
    omit?: CompareSessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareSessionInclude<ExtArgs> | null
  }


  /**
   * Model CompareItem
   */

  export type AggregateCompareItem = {
    _count: CompareItemCountAggregateOutputType | null
    _avg: CompareItemAvgAggregateOutputType | null
    _sum: CompareItemSumAggregateOutputType | null
    _min: CompareItemMinAggregateOutputType | null
    _max: CompareItemMaxAggregateOutputType | null
  }

  export type CompareItemAvgAggregateOutputType = {
    id: number | null
    compareSessionId: number | null
    productId: number | null
    sortOrder: number | null
  }

  export type CompareItemSumAggregateOutputType = {
    id: number | null
    compareSessionId: number | null
    productId: number | null
    sortOrder: number | null
  }

  export type CompareItemMinAggregateOutputType = {
    id: number | null
    compareSessionId: number | null
    productId: number | null
    sortOrder: number | null
  }

  export type CompareItemMaxAggregateOutputType = {
    id: number | null
    compareSessionId: number | null
    productId: number | null
    sortOrder: number | null
  }

  export type CompareItemCountAggregateOutputType = {
    id: number
    compareSessionId: number
    productId: number
    sortOrder: number
    _all: number
  }


  export type CompareItemAvgAggregateInputType = {
    id?: true
    compareSessionId?: true
    productId?: true
    sortOrder?: true
  }

  export type CompareItemSumAggregateInputType = {
    id?: true
    compareSessionId?: true
    productId?: true
    sortOrder?: true
  }

  export type CompareItemMinAggregateInputType = {
    id?: true
    compareSessionId?: true
    productId?: true
    sortOrder?: true
  }

  export type CompareItemMaxAggregateInputType = {
    id?: true
    compareSessionId?: true
    productId?: true
    sortOrder?: true
  }

  export type CompareItemCountAggregateInputType = {
    id?: true
    compareSessionId?: true
    productId?: true
    sortOrder?: true
    _all?: true
  }

  export type CompareItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompareItem to aggregate.
     */
    where?: CompareItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareItems to fetch.
     */
    orderBy?: CompareItemOrderByWithRelationInput | CompareItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CompareItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CompareItems
    **/
    _count?: true | CompareItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CompareItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CompareItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CompareItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CompareItemMaxAggregateInputType
  }

  export type GetCompareItemAggregateType<T extends CompareItemAggregateArgs> = {
        [P in keyof T & keyof AggregateCompareItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCompareItem[P]>
      : GetScalarType<T[P], AggregateCompareItem[P]>
  }




  export type CompareItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CompareItemWhereInput
    orderBy?: CompareItemOrderByWithAggregationInput | CompareItemOrderByWithAggregationInput[]
    by: CompareItemScalarFieldEnum[] | CompareItemScalarFieldEnum
    having?: CompareItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CompareItemCountAggregateInputType | true
    _avg?: CompareItemAvgAggregateInputType
    _sum?: CompareItemSumAggregateInputType
    _min?: CompareItemMinAggregateInputType
    _max?: CompareItemMaxAggregateInputType
  }

  export type CompareItemGroupByOutputType = {
    id: number
    compareSessionId: number
    productId: number
    sortOrder: number
    _count: CompareItemCountAggregateOutputType | null
    _avg: CompareItemAvgAggregateOutputType | null
    _sum: CompareItemSumAggregateOutputType | null
    _min: CompareItemMinAggregateOutputType | null
    _max: CompareItemMaxAggregateOutputType | null
  }

  type GetCompareItemGroupByPayload<T extends CompareItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CompareItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CompareItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CompareItemGroupByOutputType[P]>
            : GetScalarType<T[P], CompareItemGroupByOutputType[P]>
        }
      >
    >


  export type CompareItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compareSessionId?: boolean
    productId?: boolean
    sortOrder?: boolean
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareItem"]>

  export type CompareItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compareSessionId?: boolean
    productId?: boolean
    sortOrder?: boolean
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareItem"]>

  export type CompareItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    compareSessionId?: boolean
    productId?: boolean
    sortOrder?: boolean
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["compareItem"]>

  export type CompareItemSelectScalar = {
    id?: boolean
    compareSessionId?: boolean
    productId?: boolean
    sortOrder?: boolean
  }

  export type CompareItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "compareSessionId" | "productId" | "sortOrder", ExtArgs["result"]["compareItem"]>
  export type CompareItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CompareItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }
  export type CompareItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    session?: boolean | CompareSessionDefaultArgs<ExtArgs>
    product?: boolean | ProductDefaultArgs<ExtArgs>
  }

  export type $CompareItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CompareItem"
    objects: {
      session: Prisma.$CompareSessionPayload<ExtArgs>
      product: Prisma.$ProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      compareSessionId: number
      productId: number
      sortOrder: number
    }, ExtArgs["result"]["compareItem"]>
    composites: {}
  }

  type CompareItemGetPayload<S extends boolean | null | undefined | CompareItemDefaultArgs> = $Result.GetResult<Prisma.$CompareItemPayload, S>

  type CompareItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CompareItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CompareItemCountAggregateInputType | true
    }

  export interface CompareItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CompareItem'], meta: { name: 'CompareItem' } }
    /**
     * Find zero or one CompareItem that matches the filter.
     * @param {CompareItemFindUniqueArgs} args - Arguments to find a CompareItem
     * @example
     * // Get one CompareItem
     * const compareItem = await prisma.compareItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CompareItemFindUniqueArgs>(args: SelectSubset<T, CompareItemFindUniqueArgs<ExtArgs>>): Prisma__CompareItemClient<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CompareItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CompareItemFindUniqueOrThrowArgs} args - Arguments to find a CompareItem
     * @example
     * // Get one CompareItem
     * const compareItem = await prisma.compareItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CompareItemFindUniqueOrThrowArgs>(args: SelectSubset<T, CompareItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CompareItemClient<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompareItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareItemFindFirstArgs} args - Arguments to find a CompareItem
     * @example
     * // Get one CompareItem
     * const compareItem = await prisma.compareItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CompareItemFindFirstArgs>(args?: SelectSubset<T, CompareItemFindFirstArgs<ExtArgs>>): Prisma__CompareItemClient<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CompareItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareItemFindFirstOrThrowArgs} args - Arguments to find a CompareItem
     * @example
     * // Get one CompareItem
     * const compareItem = await prisma.compareItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CompareItemFindFirstOrThrowArgs>(args?: SelectSubset<T, CompareItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__CompareItemClient<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CompareItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CompareItems
     * const compareItems = await prisma.compareItem.findMany()
     * 
     * // Get first 10 CompareItems
     * const compareItems = await prisma.compareItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const compareItemWithIdOnly = await prisma.compareItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CompareItemFindManyArgs>(args?: SelectSubset<T, CompareItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CompareItem.
     * @param {CompareItemCreateArgs} args - Arguments to create a CompareItem.
     * @example
     * // Create one CompareItem
     * const CompareItem = await prisma.compareItem.create({
     *   data: {
     *     // ... data to create a CompareItem
     *   }
     * })
     * 
     */
    create<T extends CompareItemCreateArgs>(args: SelectSubset<T, CompareItemCreateArgs<ExtArgs>>): Prisma__CompareItemClient<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CompareItems.
     * @param {CompareItemCreateManyArgs} args - Arguments to create many CompareItems.
     * @example
     * // Create many CompareItems
     * const compareItem = await prisma.compareItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CompareItemCreateManyArgs>(args?: SelectSubset<T, CompareItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CompareItems and returns the data saved in the database.
     * @param {CompareItemCreateManyAndReturnArgs} args - Arguments to create many CompareItems.
     * @example
     * // Create many CompareItems
     * const compareItem = await prisma.compareItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CompareItems and only return the `id`
     * const compareItemWithIdOnly = await prisma.compareItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CompareItemCreateManyAndReturnArgs>(args?: SelectSubset<T, CompareItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CompareItem.
     * @param {CompareItemDeleteArgs} args - Arguments to delete one CompareItem.
     * @example
     * // Delete one CompareItem
     * const CompareItem = await prisma.compareItem.delete({
     *   where: {
     *     // ... filter to delete one CompareItem
     *   }
     * })
     * 
     */
    delete<T extends CompareItemDeleteArgs>(args: SelectSubset<T, CompareItemDeleteArgs<ExtArgs>>): Prisma__CompareItemClient<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CompareItem.
     * @param {CompareItemUpdateArgs} args - Arguments to update one CompareItem.
     * @example
     * // Update one CompareItem
     * const compareItem = await prisma.compareItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CompareItemUpdateArgs>(args: SelectSubset<T, CompareItemUpdateArgs<ExtArgs>>): Prisma__CompareItemClient<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CompareItems.
     * @param {CompareItemDeleteManyArgs} args - Arguments to filter CompareItems to delete.
     * @example
     * // Delete a few CompareItems
     * const { count } = await prisma.compareItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CompareItemDeleteManyArgs>(args?: SelectSubset<T, CompareItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompareItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CompareItems
     * const compareItem = await prisma.compareItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CompareItemUpdateManyArgs>(args: SelectSubset<T, CompareItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CompareItems and returns the data updated in the database.
     * @param {CompareItemUpdateManyAndReturnArgs} args - Arguments to update many CompareItems.
     * @example
     * // Update many CompareItems
     * const compareItem = await prisma.compareItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CompareItems and only return the `id`
     * const compareItemWithIdOnly = await prisma.compareItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends CompareItemUpdateManyAndReturnArgs>(args: SelectSubset<T, CompareItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CompareItem.
     * @param {CompareItemUpsertArgs} args - Arguments to update or create a CompareItem.
     * @example
     * // Update or create a CompareItem
     * const compareItem = await prisma.compareItem.upsert({
     *   create: {
     *     // ... data to create a CompareItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CompareItem we want to update
     *   }
     * })
     */
    upsert<T extends CompareItemUpsertArgs>(args: SelectSubset<T, CompareItemUpsertArgs<ExtArgs>>): Prisma__CompareItemClient<$Result.GetResult<Prisma.$CompareItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CompareItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareItemCountArgs} args - Arguments to filter CompareItems to count.
     * @example
     * // Count the number of CompareItems
     * const count = await prisma.compareItem.count({
     *   where: {
     *     // ... the filter for the CompareItems we want to count
     *   }
     * })
    **/
    count<T extends CompareItemCountArgs>(
      args?: Subset<T, CompareItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CompareItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CompareItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CompareItemAggregateArgs>(args: Subset<T, CompareItemAggregateArgs>): Prisma.PrismaPromise<GetCompareItemAggregateType<T>>

    /**
     * Group by CompareItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CompareItemGroupByArgs} args - Group by arguments.
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
      T extends CompareItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CompareItemGroupByArgs['orderBy'] }
        : { orderBy?: CompareItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CompareItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCompareItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CompareItem model
   */
  readonly fields: CompareItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CompareItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CompareItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    session<T extends CompareSessionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CompareSessionDefaultArgs<ExtArgs>>): Prisma__CompareSessionClient<$Result.GetResult<Prisma.$CompareSessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends ProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProductDefaultArgs<ExtArgs>>): Prisma__ProductClient<$Result.GetResult<Prisma.$ProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CompareItem model
   */
  interface CompareItemFieldRefs {
    readonly id: FieldRef<"CompareItem", 'Int'>
    readonly compareSessionId: FieldRef<"CompareItem", 'Int'>
    readonly productId: FieldRef<"CompareItem", 'Int'>
    readonly sortOrder: FieldRef<"CompareItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * CompareItem findUnique
   */
  export type CompareItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * Filter, which CompareItem to fetch.
     */
    where: CompareItemWhereUniqueInput
  }

  /**
   * CompareItem findUniqueOrThrow
   */
  export type CompareItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * Filter, which CompareItem to fetch.
     */
    where: CompareItemWhereUniqueInput
  }

  /**
   * CompareItem findFirst
   */
  export type CompareItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * Filter, which CompareItem to fetch.
     */
    where?: CompareItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareItems to fetch.
     */
    orderBy?: CompareItemOrderByWithRelationInput | CompareItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompareItems.
     */
    cursor?: CompareItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareItems.
     */
    distinct?: CompareItemScalarFieldEnum | CompareItemScalarFieldEnum[]
  }

  /**
   * CompareItem findFirstOrThrow
   */
  export type CompareItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * Filter, which CompareItem to fetch.
     */
    where?: CompareItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareItems to fetch.
     */
    orderBy?: CompareItemOrderByWithRelationInput | CompareItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CompareItems.
     */
    cursor?: CompareItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CompareItems.
     */
    distinct?: CompareItemScalarFieldEnum | CompareItemScalarFieldEnum[]
  }

  /**
   * CompareItem findMany
   */
  export type CompareItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * Filter, which CompareItems to fetch.
     */
    where?: CompareItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CompareItems to fetch.
     */
    orderBy?: CompareItemOrderByWithRelationInput | CompareItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CompareItems.
     */
    cursor?: CompareItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CompareItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CompareItems.
     */
    skip?: number
    distinct?: CompareItemScalarFieldEnum | CompareItemScalarFieldEnum[]
  }

  /**
   * CompareItem create
   */
  export type CompareItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * The data needed to create a CompareItem.
     */
    data: XOR<CompareItemCreateInput, CompareItemUncheckedCreateInput>
  }

  /**
   * CompareItem createMany
   */
  export type CompareItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CompareItems.
     */
    data: CompareItemCreateManyInput | CompareItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CompareItem createManyAndReturn
   */
  export type CompareItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * The data used to create many CompareItems.
     */
    data: CompareItemCreateManyInput | CompareItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompareItem update
   */
  export type CompareItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * The data needed to update a CompareItem.
     */
    data: XOR<CompareItemUpdateInput, CompareItemUncheckedUpdateInput>
    /**
     * Choose, which CompareItem to update.
     */
    where: CompareItemWhereUniqueInput
  }

  /**
   * CompareItem updateMany
   */
  export type CompareItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CompareItems.
     */
    data: XOR<CompareItemUpdateManyMutationInput, CompareItemUncheckedUpdateManyInput>
    /**
     * Filter which CompareItems to update
     */
    where?: CompareItemWhereInput
    /**
     * Limit how many CompareItems to update.
     */
    limit?: number
  }

  /**
   * CompareItem updateManyAndReturn
   */
  export type CompareItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * The data used to update CompareItems.
     */
    data: XOR<CompareItemUpdateManyMutationInput, CompareItemUncheckedUpdateManyInput>
    /**
     * Filter which CompareItems to update
     */
    where?: CompareItemWhereInput
    /**
     * Limit how many CompareItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CompareItem upsert
   */
  export type CompareItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * The filter to search for the CompareItem to update in case it exists.
     */
    where: CompareItemWhereUniqueInput
    /**
     * In case the CompareItem found by the `where` argument doesn't exist, create a new CompareItem with this data.
     */
    create: XOR<CompareItemCreateInput, CompareItemUncheckedCreateInput>
    /**
     * In case the CompareItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CompareItemUpdateInput, CompareItemUncheckedUpdateInput>
  }

  /**
   * CompareItem delete
   */
  export type CompareItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
    /**
     * Filter which CompareItem to delete.
     */
    where: CompareItemWhereUniqueInput
  }

  /**
   * CompareItem deleteMany
   */
  export type CompareItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CompareItems to delete
     */
    where?: CompareItemWhereInput
    /**
     * Limit how many CompareItems to delete.
     */
    limit?: number
  }

  /**
   * CompareItem without action
   */
  export type CompareItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CompareItem
     */
    select?: CompareItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CompareItem
     */
    omit?: CompareItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CompareItemInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ShopScalarFieldEnum: {
    id: 'id',
    marketplace: 'marketplace',
    externalShopId: 'externalShopId',
    name: 'name',
    shopLevel: 'shopLevel',
    rating: 'rating',
    location: 'location',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ShopScalarFieldEnum = (typeof ShopScalarFieldEnum)[keyof typeof ShopScalarFieldEnum]


  export const ProductScalarFieldEnum: {
    id: 'id',
    marketplace: 'marketplace',
    url: 'url',
    externalProductId: 'externalProductId',
    name: 'name',
    thumbnailUrl: 'thumbnailUrl',
    category: 'category',
    shopId: 'shopId',
    isTracked: 'isTracked',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProductScalarFieldEnum = (typeof ProductScalarFieldEnum)[keyof typeof ProductScalarFieldEnum]


  export const ProductSnapshotScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    scrapedAt: 'scrapedAt',
    price: 'price',
    currency: 'currency',
    rating: 'rating',
    reviewsCount: 'reviewsCount',
    soldCount: 'soldCount',
    rawSpecs: 'rawSpecs',
    rawData: 'rawData'
  };

  export type ProductSnapshotScalarFieldEnum = (typeof ProductSnapshotScalarFieldEnum)[keyof typeof ProductSnapshotScalarFieldEnum]


  export const ProductReviewSampleScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    snapshotId: 'snapshotId',
    platformReviewId: 'platformReviewId',
    rating: 'rating',
    authorName: 'authorName',
    content: 'content',
    scrapedAt: 'scrapedAt'
  };

  export type ProductReviewSampleScalarFieldEnum = (typeof ProductReviewSampleScalarFieldEnum)[keyof typeof ProductReviewSampleScalarFieldEnum]


  export const ProductAIAnalysisScalarFieldEnum: {
    id: 'id',
    productId: 'productId',
    snapshotId: 'snapshotId',
    worthItScore: 'worthItScore',
    priceComment: 'priceComment',
    summary: 'summary',
    pros: 'pros',
    cons: 'cons',
    modelName: 'modelName',
    createdAt: 'createdAt'
  };

  export type ProductAIAnalysisScalarFieldEnum = (typeof ProductAIAnalysisScalarFieldEnum)[keyof typeof ProductAIAnalysisScalarFieldEnum]


  export const CompareSessionScalarFieldEnum: {
    id: 'id',
    title: 'title',
    createdAt: 'createdAt'
  };

  export type CompareSessionScalarFieldEnum = (typeof CompareSessionScalarFieldEnum)[keyof typeof CompareSessionScalarFieldEnum]


  export const CompareItemScalarFieldEnum: {
    id: 'id',
    compareSessionId: 'compareSessionId',
    productId: 'productId',
    sortOrder: 'sortOrder'
  };

  export type CompareItemScalarFieldEnum = (typeof CompareItemScalarFieldEnum)[keyof typeof CompareItemScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Marketplace'
   */
  export type EnumMarketplaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Marketplace'>
    


  /**
   * Reference to a field of type 'Marketplace[]'
   */
  export type ListEnumMarketplaceFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Marketplace[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    
  /**
   * Deep Input Types
   */


  export type ShopWhereInput = {
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    id?: IntFilter<"Shop"> | number
    marketplace?: EnumMarketplaceFilter<"Shop"> | $Enums.Marketplace
    externalShopId?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    shopLevel?: StringNullableFilter<"Shop"> | string | null
    rating?: FloatNullableFilter<"Shop"> | number | null
    location?: StringNullableFilter<"Shop"> | string | null
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    products?: ProductListRelationFilter
  }

  export type ShopOrderByWithRelationInput = {
    id?: SortOrder
    marketplace?: SortOrder
    externalShopId?: SortOrder
    name?: SortOrder
    shopLevel?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    products?: ProductOrderByRelationAggregateInput
  }

  export type ShopWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    marketplace_externalShopId?: ShopMarketplaceExternalShopIdCompoundUniqueInput
    AND?: ShopWhereInput | ShopWhereInput[]
    OR?: ShopWhereInput[]
    NOT?: ShopWhereInput | ShopWhereInput[]
    marketplace?: EnumMarketplaceFilter<"Shop"> | $Enums.Marketplace
    externalShopId?: StringFilter<"Shop"> | string
    name?: StringFilter<"Shop"> | string
    shopLevel?: StringNullableFilter<"Shop"> | string | null
    rating?: FloatNullableFilter<"Shop"> | number | null
    location?: StringNullableFilter<"Shop"> | string | null
    createdAt?: DateTimeFilter<"Shop"> | Date | string
    updatedAt?: DateTimeFilter<"Shop"> | Date | string
    products?: ProductListRelationFilter
  }, "id" | "marketplace_externalShopId">

  export type ShopOrderByWithAggregationInput = {
    id?: SortOrder
    marketplace?: SortOrder
    externalShopId?: SortOrder
    name?: SortOrder
    shopLevel?: SortOrderInput | SortOrder
    rating?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ShopCountOrderByAggregateInput
    _avg?: ShopAvgOrderByAggregateInput
    _max?: ShopMaxOrderByAggregateInput
    _min?: ShopMinOrderByAggregateInput
    _sum?: ShopSumOrderByAggregateInput
  }

  export type ShopScalarWhereWithAggregatesInput = {
    AND?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    OR?: ShopScalarWhereWithAggregatesInput[]
    NOT?: ShopScalarWhereWithAggregatesInput | ShopScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Shop"> | number
    marketplace?: EnumMarketplaceWithAggregatesFilter<"Shop"> | $Enums.Marketplace
    externalShopId?: StringWithAggregatesFilter<"Shop"> | string
    name?: StringWithAggregatesFilter<"Shop"> | string
    shopLevel?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    rating?: FloatNullableWithAggregatesFilter<"Shop"> | number | null
    location?: StringNullableWithAggregatesFilter<"Shop"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Shop"> | Date | string
  }

  export type ProductWhereInput = {
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    id?: IntFilter<"Product"> | number
    marketplace?: EnumMarketplaceFilter<"Product"> | $Enums.Marketplace
    url?: StringFilter<"Product"> | string
    externalProductId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    thumbnailUrl?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    shopId?: IntNullableFilter<"Product"> | number | null
    isTracked?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    shop?: XOR<ShopNullableScalarRelationFilter, ShopWhereInput> | null
    snapshots?: ProductSnapshotListRelationFilter
    reviews?: ProductReviewSampleListRelationFilter
    analyses?: ProductAIAnalysisListRelationFilter
    compareItems?: CompareItemListRelationFilter
  }

  export type ProductOrderByWithRelationInput = {
    id?: SortOrder
    marketplace?: SortOrder
    url?: SortOrder
    externalProductId?: SortOrderInput | SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    isTracked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    shop?: ShopOrderByWithRelationInput
    snapshots?: ProductSnapshotOrderByRelationAggregateInput
    reviews?: ProductReviewSampleOrderByRelationAggregateInput
    analyses?: ProductAIAnalysisOrderByRelationAggregateInput
    compareItems?: CompareItemOrderByRelationAggregateInput
  }

  export type ProductWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    url?: string
    AND?: ProductWhereInput | ProductWhereInput[]
    OR?: ProductWhereInput[]
    NOT?: ProductWhereInput | ProductWhereInput[]
    marketplace?: EnumMarketplaceFilter<"Product"> | $Enums.Marketplace
    externalProductId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    thumbnailUrl?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    shopId?: IntNullableFilter<"Product"> | number | null
    isTracked?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
    shop?: XOR<ShopNullableScalarRelationFilter, ShopWhereInput> | null
    snapshots?: ProductSnapshotListRelationFilter
    reviews?: ProductReviewSampleListRelationFilter
    analyses?: ProductAIAnalysisListRelationFilter
    compareItems?: CompareItemListRelationFilter
  }, "id" | "url">

  export type ProductOrderByWithAggregationInput = {
    id?: SortOrder
    marketplace?: SortOrder
    url?: SortOrder
    externalProductId?: SortOrderInput | SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrderInput | SortOrder
    category?: SortOrderInput | SortOrder
    shopId?: SortOrderInput | SortOrder
    isTracked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProductCountOrderByAggregateInput
    _avg?: ProductAvgOrderByAggregateInput
    _max?: ProductMaxOrderByAggregateInput
    _min?: ProductMinOrderByAggregateInput
    _sum?: ProductSumOrderByAggregateInput
  }

  export type ProductScalarWhereWithAggregatesInput = {
    AND?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    OR?: ProductScalarWhereWithAggregatesInput[]
    NOT?: ProductScalarWhereWithAggregatesInput | ProductScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Product"> | number
    marketplace?: EnumMarketplaceWithAggregatesFilter<"Product"> | $Enums.Marketplace
    url?: StringWithAggregatesFilter<"Product"> | string
    externalProductId?: StringNullableWithAggregatesFilter<"Product"> | string | null
    name?: StringWithAggregatesFilter<"Product"> | string
    thumbnailUrl?: StringNullableWithAggregatesFilter<"Product"> | string | null
    category?: StringNullableWithAggregatesFilter<"Product"> | string | null
    shopId?: IntNullableWithAggregatesFilter<"Product"> | number | null
    isTracked?: BoolWithAggregatesFilter<"Product"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Product"> | Date | string
  }

  export type ProductSnapshotWhereInput = {
    AND?: ProductSnapshotWhereInput | ProductSnapshotWhereInput[]
    OR?: ProductSnapshotWhereInput[]
    NOT?: ProductSnapshotWhereInput | ProductSnapshotWhereInput[]
    id?: IntFilter<"ProductSnapshot"> | number
    productId?: IntFilter<"ProductSnapshot"> | number
    scrapedAt?: DateTimeFilter<"ProductSnapshot"> | Date | string
    price?: IntFilter<"ProductSnapshot"> | number
    currency?: StringFilter<"ProductSnapshot"> | string
    rating?: FloatNullableFilter<"ProductSnapshot"> | number | null
    reviewsCount?: IntNullableFilter<"ProductSnapshot"> | number | null
    soldCount?: IntNullableFilter<"ProductSnapshot"> | number | null
    rawSpecs?: JsonNullableFilter<"ProductSnapshot">
    rawData?: JsonNullableFilter<"ProductSnapshot">
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    reviews?: ProductReviewSampleListRelationFilter
    analyses?: ProductAIAnalysisListRelationFilter
  }

  export type ProductSnapshotOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    scrapedAt?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviewsCount?: SortOrderInput | SortOrder
    soldCount?: SortOrderInput | SortOrder
    rawSpecs?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    product?: ProductOrderByWithRelationInput
    reviews?: ProductReviewSampleOrderByRelationAggregateInput
    analyses?: ProductAIAnalysisOrderByRelationAggregateInput
  }

  export type ProductSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductSnapshotWhereInput | ProductSnapshotWhereInput[]
    OR?: ProductSnapshotWhereInput[]
    NOT?: ProductSnapshotWhereInput | ProductSnapshotWhereInput[]
    productId?: IntFilter<"ProductSnapshot"> | number
    scrapedAt?: DateTimeFilter<"ProductSnapshot"> | Date | string
    price?: IntFilter<"ProductSnapshot"> | number
    currency?: StringFilter<"ProductSnapshot"> | string
    rating?: FloatNullableFilter<"ProductSnapshot"> | number | null
    reviewsCount?: IntNullableFilter<"ProductSnapshot"> | number | null
    soldCount?: IntNullableFilter<"ProductSnapshot"> | number | null
    rawSpecs?: JsonNullableFilter<"ProductSnapshot">
    rawData?: JsonNullableFilter<"ProductSnapshot">
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    reviews?: ProductReviewSampleListRelationFilter
    analyses?: ProductAIAnalysisListRelationFilter
  }, "id">

  export type ProductSnapshotOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    scrapedAt?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    rating?: SortOrderInput | SortOrder
    reviewsCount?: SortOrderInput | SortOrder
    soldCount?: SortOrderInput | SortOrder
    rawSpecs?: SortOrderInput | SortOrder
    rawData?: SortOrderInput | SortOrder
    _count?: ProductSnapshotCountOrderByAggregateInput
    _avg?: ProductSnapshotAvgOrderByAggregateInput
    _max?: ProductSnapshotMaxOrderByAggregateInput
    _min?: ProductSnapshotMinOrderByAggregateInput
    _sum?: ProductSnapshotSumOrderByAggregateInput
  }

  export type ProductSnapshotScalarWhereWithAggregatesInput = {
    AND?: ProductSnapshotScalarWhereWithAggregatesInput | ProductSnapshotScalarWhereWithAggregatesInput[]
    OR?: ProductSnapshotScalarWhereWithAggregatesInput[]
    NOT?: ProductSnapshotScalarWhereWithAggregatesInput | ProductSnapshotScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductSnapshot"> | number
    productId?: IntWithAggregatesFilter<"ProductSnapshot"> | number
    scrapedAt?: DateTimeWithAggregatesFilter<"ProductSnapshot"> | Date | string
    price?: IntWithAggregatesFilter<"ProductSnapshot"> | number
    currency?: StringWithAggregatesFilter<"ProductSnapshot"> | string
    rating?: FloatNullableWithAggregatesFilter<"ProductSnapshot"> | number | null
    reviewsCount?: IntNullableWithAggregatesFilter<"ProductSnapshot"> | number | null
    soldCount?: IntNullableWithAggregatesFilter<"ProductSnapshot"> | number | null
    rawSpecs?: JsonNullableWithAggregatesFilter<"ProductSnapshot">
    rawData?: JsonNullableWithAggregatesFilter<"ProductSnapshot">
  }

  export type ProductReviewSampleWhereInput = {
    AND?: ProductReviewSampleWhereInput | ProductReviewSampleWhereInput[]
    OR?: ProductReviewSampleWhereInput[]
    NOT?: ProductReviewSampleWhereInput | ProductReviewSampleWhereInput[]
    id?: IntFilter<"ProductReviewSample"> | number
    productId?: IntFilter<"ProductReviewSample"> | number
    snapshotId?: IntNullableFilter<"ProductReviewSample"> | number | null
    platformReviewId?: StringNullableFilter<"ProductReviewSample"> | string | null
    rating?: IntFilter<"ProductReviewSample"> | number
    authorName?: StringNullableFilter<"ProductReviewSample"> | string | null
    content?: StringFilter<"ProductReviewSample"> | string
    scrapedAt?: DateTimeFilter<"ProductReviewSample"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    snapshot?: XOR<ProductSnapshotNullableScalarRelationFilter, ProductSnapshotWhereInput> | null
  }

  export type ProductReviewSampleOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrderInput | SortOrder
    platformReviewId?: SortOrderInput | SortOrder
    rating?: SortOrder
    authorName?: SortOrderInput | SortOrder
    content?: SortOrder
    scrapedAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    snapshot?: ProductSnapshotOrderByWithRelationInput
  }

  export type ProductReviewSampleWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductReviewSampleWhereInput | ProductReviewSampleWhereInput[]
    OR?: ProductReviewSampleWhereInput[]
    NOT?: ProductReviewSampleWhereInput | ProductReviewSampleWhereInput[]
    productId?: IntFilter<"ProductReviewSample"> | number
    snapshotId?: IntNullableFilter<"ProductReviewSample"> | number | null
    platformReviewId?: StringNullableFilter<"ProductReviewSample"> | string | null
    rating?: IntFilter<"ProductReviewSample"> | number
    authorName?: StringNullableFilter<"ProductReviewSample"> | string | null
    content?: StringFilter<"ProductReviewSample"> | string
    scrapedAt?: DateTimeFilter<"ProductReviewSample"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    snapshot?: XOR<ProductSnapshotNullableScalarRelationFilter, ProductSnapshotWhereInput> | null
  }, "id">

  export type ProductReviewSampleOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrderInput | SortOrder
    platformReviewId?: SortOrderInput | SortOrder
    rating?: SortOrder
    authorName?: SortOrderInput | SortOrder
    content?: SortOrder
    scrapedAt?: SortOrder
    _count?: ProductReviewSampleCountOrderByAggregateInput
    _avg?: ProductReviewSampleAvgOrderByAggregateInput
    _max?: ProductReviewSampleMaxOrderByAggregateInput
    _min?: ProductReviewSampleMinOrderByAggregateInput
    _sum?: ProductReviewSampleSumOrderByAggregateInput
  }

  export type ProductReviewSampleScalarWhereWithAggregatesInput = {
    AND?: ProductReviewSampleScalarWhereWithAggregatesInput | ProductReviewSampleScalarWhereWithAggregatesInput[]
    OR?: ProductReviewSampleScalarWhereWithAggregatesInput[]
    NOT?: ProductReviewSampleScalarWhereWithAggregatesInput | ProductReviewSampleScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductReviewSample"> | number
    productId?: IntWithAggregatesFilter<"ProductReviewSample"> | number
    snapshotId?: IntNullableWithAggregatesFilter<"ProductReviewSample"> | number | null
    platformReviewId?: StringNullableWithAggregatesFilter<"ProductReviewSample"> | string | null
    rating?: IntWithAggregatesFilter<"ProductReviewSample"> | number
    authorName?: StringNullableWithAggregatesFilter<"ProductReviewSample"> | string | null
    content?: StringWithAggregatesFilter<"ProductReviewSample"> | string
    scrapedAt?: DateTimeWithAggregatesFilter<"ProductReviewSample"> | Date | string
  }

  export type ProductAIAnalysisWhereInput = {
    AND?: ProductAIAnalysisWhereInput | ProductAIAnalysisWhereInput[]
    OR?: ProductAIAnalysisWhereInput[]
    NOT?: ProductAIAnalysisWhereInput | ProductAIAnalysisWhereInput[]
    id?: IntFilter<"ProductAIAnalysis"> | number
    productId?: IntFilter<"ProductAIAnalysis"> | number
    snapshotId?: IntNullableFilter<"ProductAIAnalysis"> | number | null
    worthItScore?: IntFilter<"ProductAIAnalysis"> | number
    priceComment?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    summary?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    pros?: JsonNullableFilter<"ProductAIAnalysis">
    cons?: JsonNullableFilter<"ProductAIAnalysis">
    modelName?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    createdAt?: DateTimeFilter<"ProductAIAnalysis"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    snapshot?: XOR<ProductSnapshotNullableScalarRelationFilter, ProductSnapshotWhereInput> | null
  }

  export type ProductAIAnalysisOrderByWithRelationInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrderInput | SortOrder
    worthItScore?: SortOrder
    priceComment?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    pros?: SortOrderInput | SortOrder
    cons?: SortOrderInput | SortOrder
    modelName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    product?: ProductOrderByWithRelationInput
    snapshot?: ProductSnapshotOrderByWithRelationInput
  }

  export type ProductAIAnalysisWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ProductAIAnalysisWhereInput | ProductAIAnalysisWhereInput[]
    OR?: ProductAIAnalysisWhereInput[]
    NOT?: ProductAIAnalysisWhereInput | ProductAIAnalysisWhereInput[]
    productId?: IntFilter<"ProductAIAnalysis"> | number
    snapshotId?: IntNullableFilter<"ProductAIAnalysis"> | number | null
    worthItScore?: IntFilter<"ProductAIAnalysis"> | number
    priceComment?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    summary?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    pros?: JsonNullableFilter<"ProductAIAnalysis">
    cons?: JsonNullableFilter<"ProductAIAnalysis">
    modelName?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    createdAt?: DateTimeFilter<"ProductAIAnalysis"> | Date | string
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
    snapshot?: XOR<ProductSnapshotNullableScalarRelationFilter, ProductSnapshotWhereInput> | null
  }, "id">

  export type ProductAIAnalysisOrderByWithAggregationInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrderInput | SortOrder
    worthItScore?: SortOrder
    priceComment?: SortOrderInput | SortOrder
    summary?: SortOrderInput | SortOrder
    pros?: SortOrderInput | SortOrder
    cons?: SortOrderInput | SortOrder
    modelName?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ProductAIAnalysisCountOrderByAggregateInput
    _avg?: ProductAIAnalysisAvgOrderByAggregateInput
    _max?: ProductAIAnalysisMaxOrderByAggregateInput
    _min?: ProductAIAnalysisMinOrderByAggregateInput
    _sum?: ProductAIAnalysisSumOrderByAggregateInput
  }

  export type ProductAIAnalysisScalarWhereWithAggregatesInput = {
    AND?: ProductAIAnalysisScalarWhereWithAggregatesInput | ProductAIAnalysisScalarWhereWithAggregatesInput[]
    OR?: ProductAIAnalysisScalarWhereWithAggregatesInput[]
    NOT?: ProductAIAnalysisScalarWhereWithAggregatesInput | ProductAIAnalysisScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"ProductAIAnalysis"> | number
    productId?: IntWithAggregatesFilter<"ProductAIAnalysis"> | number
    snapshotId?: IntNullableWithAggregatesFilter<"ProductAIAnalysis"> | number | null
    worthItScore?: IntWithAggregatesFilter<"ProductAIAnalysis"> | number
    priceComment?: StringNullableWithAggregatesFilter<"ProductAIAnalysis"> | string | null
    summary?: StringNullableWithAggregatesFilter<"ProductAIAnalysis"> | string | null
    pros?: JsonNullableWithAggregatesFilter<"ProductAIAnalysis">
    cons?: JsonNullableWithAggregatesFilter<"ProductAIAnalysis">
    modelName?: StringNullableWithAggregatesFilter<"ProductAIAnalysis"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"ProductAIAnalysis"> | Date | string
  }

  export type CompareSessionWhereInput = {
    AND?: CompareSessionWhereInput | CompareSessionWhereInput[]
    OR?: CompareSessionWhereInput[]
    NOT?: CompareSessionWhereInput | CompareSessionWhereInput[]
    id?: IntFilter<"CompareSession"> | number
    title?: StringNullableFilter<"CompareSession"> | string | null
    createdAt?: DateTimeFilter<"CompareSession"> | Date | string
    items?: CompareItemListRelationFilter
  }

  export type CompareSessionOrderByWithRelationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    items?: CompareItemOrderByRelationAggregateInput
  }

  export type CompareSessionWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompareSessionWhereInput | CompareSessionWhereInput[]
    OR?: CompareSessionWhereInput[]
    NOT?: CompareSessionWhereInput | CompareSessionWhereInput[]
    title?: StringNullableFilter<"CompareSession"> | string | null
    createdAt?: DateTimeFilter<"CompareSession"> | Date | string
    items?: CompareItemListRelationFilter
  }, "id">

  export type CompareSessionOrderByWithAggregationInput = {
    id?: SortOrder
    title?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CompareSessionCountOrderByAggregateInput
    _avg?: CompareSessionAvgOrderByAggregateInput
    _max?: CompareSessionMaxOrderByAggregateInput
    _min?: CompareSessionMinOrderByAggregateInput
    _sum?: CompareSessionSumOrderByAggregateInput
  }

  export type CompareSessionScalarWhereWithAggregatesInput = {
    AND?: CompareSessionScalarWhereWithAggregatesInput | CompareSessionScalarWhereWithAggregatesInput[]
    OR?: CompareSessionScalarWhereWithAggregatesInput[]
    NOT?: CompareSessionScalarWhereWithAggregatesInput | CompareSessionScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompareSession"> | number
    title?: StringNullableWithAggregatesFilter<"CompareSession"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CompareSession"> | Date | string
  }

  export type CompareItemWhereInput = {
    AND?: CompareItemWhereInput | CompareItemWhereInput[]
    OR?: CompareItemWhereInput[]
    NOT?: CompareItemWhereInput | CompareItemWhereInput[]
    id?: IntFilter<"CompareItem"> | number
    compareSessionId?: IntFilter<"CompareItem"> | number
    productId?: IntFilter<"CompareItem"> | number
    sortOrder?: IntFilter<"CompareItem"> | number
    session?: XOR<CompareSessionScalarRelationFilter, CompareSessionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }

  export type CompareItemOrderByWithRelationInput = {
    id?: SortOrder
    compareSessionId?: SortOrder
    productId?: SortOrder
    sortOrder?: SortOrder
    session?: CompareSessionOrderByWithRelationInput
    product?: ProductOrderByWithRelationInput
  }

  export type CompareItemWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CompareItemWhereInput | CompareItemWhereInput[]
    OR?: CompareItemWhereInput[]
    NOT?: CompareItemWhereInput | CompareItemWhereInput[]
    compareSessionId?: IntFilter<"CompareItem"> | number
    productId?: IntFilter<"CompareItem"> | number
    sortOrder?: IntFilter<"CompareItem"> | number
    session?: XOR<CompareSessionScalarRelationFilter, CompareSessionWhereInput>
    product?: XOR<ProductScalarRelationFilter, ProductWhereInput>
  }, "id">

  export type CompareItemOrderByWithAggregationInput = {
    id?: SortOrder
    compareSessionId?: SortOrder
    productId?: SortOrder
    sortOrder?: SortOrder
    _count?: CompareItemCountOrderByAggregateInput
    _avg?: CompareItemAvgOrderByAggregateInput
    _max?: CompareItemMaxOrderByAggregateInput
    _min?: CompareItemMinOrderByAggregateInput
    _sum?: CompareItemSumOrderByAggregateInput
  }

  export type CompareItemScalarWhereWithAggregatesInput = {
    AND?: CompareItemScalarWhereWithAggregatesInput | CompareItemScalarWhereWithAggregatesInput[]
    OR?: CompareItemScalarWhereWithAggregatesInput[]
    NOT?: CompareItemScalarWhereWithAggregatesInput | CompareItemScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"CompareItem"> | number
    compareSessionId?: IntWithAggregatesFilter<"CompareItem"> | number
    productId?: IntWithAggregatesFilter<"CompareItem"> | number
    sortOrder?: IntWithAggregatesFilter<"CompareItem"> | number
  }

  export type ShopCreateInput = {
    marketplace: $Enums.Marketplace
    externalShopId: string
    name: string
    shopLevel?: string | null
    rating?: number | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductCreateNestedManyWithoutShopInput
  }

  export type ShopUncheckedCreateInput = {
    id?: number
    marketplace: $Enums.Marketplace
    externalShopId: string
    name: string
    shopLevel?: string | null
    rating?: number | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    products?: ProductUncheckedCreateNestedManyWithoutShopInput
  }

  export type ShopUpdateInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    externalShopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shopLevel?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUpdateManyWithoutShopNestedInput
  }

  export type ShopUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    externalShopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shopLevel?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    products?: ProductUncheckedUpdateManyWithoutShopNestedInput
  }

  export type ShopCreateManyInput = {
    id?: number
    marketplace: $Enums.Marketplace
    externalShopId: string
    name: string
    shopLevel?: string | null
    rating?: number | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUpdateManyMutationInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    externalShopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shopLevel?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    externalShopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shopLevel?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductCreateInput = {
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop?: ShopCreateNestedOneWithoutProductsInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    reviews?: ProductReviewSampleCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisCreateNestedManyWithoutProductInput
    compareItems?: CompareItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateInput = {
    id?: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    shopId?: number | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    reviews?: ProductReviewSampleUncheckedCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisUncheckedCreateNestedManyWithoutProductInput
    compareItems?: CompareItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductUpdateInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneWithoutProductsNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    reviews?: ProductReviewSampleUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ProductReviewSampleUncheckedUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUncheckedUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyInput = {
    id?: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    shopId?: number | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateManyMutationInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotCreateInput = {
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    product: ProductCreateNestedOneWithoutSnapshotsInput
    reviews?: ProductReviewSampleCreateNestedManyWithoutSnapshotInput
    analyses?: ProductAIAnalysisCreateNestedManyWithoutSnapshotInput
  }

  export type ProductSnapshotUncheckedCreateInput = {
    id?: number
    productId: number
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    reviews?: ProductReviewSampleUncheckedCreateNestedManyWithoutSnapshotInput
    analyses?: ProductAIAnalysisUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type ProductSnapshotUpdateInput = {
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    product?: ProductUpdateOneRequiredWithoutSnapshotsNestedInput
    reviews?: ProductReviewSampleUpdateManyWithoutSnapshotNestedInput
    analyses?: ProductAIAnalysisUpdateManyWithoutSnapshotNestedInput
  }

  export type ProductSnapshotUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    reviews?: ProductReviewSampleUncheckedUpdateManyWithoutSnapshotNestedInput
    analyses?: ProductAIAnalysisUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type ProductSnapshotCreateManyInput = {
    id?: number
    productId: number
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductSnapshotUpdateManyMutationInput = {
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductSnapshotUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductReviewSampleCreateInput = {
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
    snapshot?: ProductSnapshotCreateNestedOneWithoutReviewsInput
  }

  export type ProductReviewSampleUncheckedCreateInput = {
    id?: number
    productId: number
    snapshotId?: number | null
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
  }

  export type ProductReviewSampleUpdateInput = {
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
    snapshot?: ProductSnapshotUpdateOneWithoutReviewsNestedInput
  }

  export type ProductReviewSampleUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    snapshotId?: NullableIntFieldUpdateOperationsInput | number | null
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewSampleCreateManyInput = {
    id?: number
    productId: number
    snapshotId?: number | null
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
  }

  export type ProductReviewSampleUpdateManyMutationInput = {
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewSampleUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    snapshotId?: NullableIntFieldUpdateOperationsInput | number | null
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAIAnalysisCreateInput = {
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAnalysesInput
    snapshot?: ProductSnapshotCreateNestedOneWithoutAnalysesInput
  }

  export type ProductAIAnalysisUncheckedCreateInput = {
    id?: number
    productId: number
    snapshotId?: number | null
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
  }

  export type ProductAIAnalysisUpdateInput = {
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAnalysesNestedInput
    snapshot?: ProductSnapshotUpdateOneWithoutAnalysesNestedInput
  }

  export type ProductAIAnalysisUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    snapshotId?: NullableIntFieldUpdateOperationsInput | number | null
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAIAnalysisCreateManyInput = {
    id?: number
    productId: number
    snapshotId?: number | null
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
  }

  export type ProductAIAnalysisUpdateManyMutationInput = {
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAIAnalysisUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    snapshotId?: NullableIntFieldUpdateOperationsInput | number | null
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompareSessionCreateInput = {
    title?: string | null
    createdAt?: Date | string
    items?: CompareItemCreateNestedManyWithoutSessionInput
  }

  export type CompareSessionUncheckedCreateInput = {
    id?: number
    title?: string | null
    createdAt?: Date | string
    items?: CompareItemUncheckedCreateNestedManyWithoutSessionInput
  }

  export type CompareSessionUpdateInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CompareItemUpdateManyWithoutSessionNestedInput
  }

  export type CompareSessionUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: CompareItemUncheckedUpdateManyWithoutSessionNestedInput
  }

  export type CompareSessionCreateManyInput = {
    id?: number
    title?: string | null
    createdAt?: Date | string
  }

  export type CompareSessionUpdateManyMutationInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompareSessionUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompareItemCreateInput = {
    sortOrder?: number
    session: CompareSessionCreateNestedOneWithoutItemsInput
    product: ProductCreateNestedOneWithoutCompareItemsInput
  }

  export type CompareItemUncheckedCreateInput = {
    id?: number
    compareSessionId: number
    productId: number
    sortOrder?: number
  }

  export type CompareItemUpdateInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    session?: CompareSessionUpdateOneRequiredWithoutItemsNestedInput
    product?: ProductUpdateOneRequiredWithoutCompareItemsNestedInput
  }

  export type CompareItemUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    compareSessionId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type CompareItemCreateManyInput = {
    id?: number
    compareSessionId: number
    productId: number
    sortOrder?: number
  }

  export type CompareItemUpdateManyMutationInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type CompareItemUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    compareSessionId?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type EnumMarketplaceFilter<$PrismaModel = never> = {
    equals?: $Enums.Marketplace | EnumMarketplaceFieldRefInput<$PrismaModel>
    in?: $Enums.Marketplace[] | ListEnumMarketplaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Marketplace[] | ListEnumMarketplaceFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketplaceFilter<$PrismaModel> | $Enums.Marketplace
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ProductListRelationFilter = {
    every?: ProductWhereInput
    some?: ProductWhereInput
    none?: ProductWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ProductOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ShopMarketplaceExternalShopIdCompoundUniqueInput = {
    marketplace: $Enums.Marketplace
    externalShopId: string
  }

  export type ShopCountOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    externalShopId?: SortOrder
    name?: SortOrder
    shopLevel?: SortOrder
    rating?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopAvgOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type ShopMaxOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    externalShopId?: SortOrder
    name?: SortOrder
    shopLevel?: SortOrder
    rating?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopMinOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    externalShopId?: SortOrder
    name?: SortOrder
    shopLevel?: SortOrder
    rating?: SortOrder
    location?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ShopSumOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type EnumMarketplaceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Marketplace | EnumMarketplaceFieldRefInput<$PrismaModel>
    in?: $Enums.Marketplace[] | ListEnumMarketplaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Marketplace[] | ListEnumMarketplaceFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketplaceWithAggregatesFilter<$PrismaModel> | $Enums.Marketplace
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketplaceFilter<$PrismaModel>
    _max?: NestedEnumMarketplaceFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type ShopNullableScalarRelationFilter = {
    is?: ShopWhereInput | null
    isNot?: ShopWhereInput | null
  }

  export type ProductSnapshotListRelationFilter = {
    every?: ProductSnapshotWhereInput
    some?: ProductSnapshotWhereInput
    none?: ProductSnapshotWhereInput
  }

  export type ProductReviewSampleListRelationFilter = {
    every?: ProductReviewSampleWhereInput
    some?: ProductReviewSampleWhereInput
    none?: ProductReviewSampleWhereInput
  }

  export type ProductAIAnalysisListRelationFilter = {
    every?: ProductAIAnalysisWhereInput
    some?: ProductAIAnalysisWhereInput
    none?: ProductAIAnalysisWhereInput
  }

  export type CompareItemListRelationFilter = {
    every?: CompareItemWhereInput
    some?: CompareItemWhereInput
    none?: CompareItemWhereInput
  }

  export type ProductSnapshotOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductReviewSampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductAIAnalysisOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CompareItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProductCountOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    url?: SortOrder
    externalProductId?: SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrder
    category?: SortOrder
    shopId?: SortOrder
    isTracked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductAvgOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type ProductMaxOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    url?: SortOrder
    externalProductId?: SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrder
    category?: SortOrder
    shopId?: SortOrder
    isTracked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductMinOrderByAggregateInput = {
    id?: SortOrder
    marketplace?: SortOrder
    url?: SortOrder
    externalProductId?: SortOrder
    name?: SortOrder
    thumbnailUrl?: SortOrder
    category?: SortOrder
    shopId?: SortOrder
    isTracked?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProductSumOrderByAggregateInput = {
    id?: SortOrder
    shopId?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProductScalarRelationFilter = {
    is?: ProductWhereInput
    isNot?: ProductWhereInput
  }

  export type ProductSnapshotCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    scrapedAt?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    soldCount?: SortOrder
    rawSpecs?: SortOrder
    rawData?: SortOrder
  }

  export type ProductSnapshotAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    soldCount?: SortOrder
  }

  export type ProductSnapshotMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    scrapedAt?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    soldCount?: SortOrder
  }

  export type ProductSnapshotMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    scrapedAt?: SortOrder
    price?: SortOrder
    currency?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    soldCount?: SortOrder
  }

  export type ProductSnapshotSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    price?: SortOrder
    rating?: SortOrder
    reviewsCount?: SortOrder
    soldCount?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type ProductSnapshotNullableScalarRelationFilter = {
    is?: ProductSnapshotWhereInput | null
    isNot?: ProductSnapshotWhereInput | null
  }

  export type ProductReviewSampleCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    platformReviewId?: SortOrder
    rating?: SortOrder
    authorName?: SortOrder
    content?: SortOrder
    scrapedAt?: SortOrder
  }

  export type ProductReviewSampleAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    rating?: SortOrder
  }

  export type ProductReviewSampleMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    platformReviewId?: SortOrder
    rating?: SortOrder
    authorName?: SortOrder
    content?: SortOrder
    scrapedAt?: SortOrder
  }

  export type ProductReviewSampleMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    platformReviewId?: SortOrder
    rating?: SortOrder
    authorName?: SortOrder
    content?: SortOrder
    scrapedAt?: SortOrder
  }

  export type ProductReviewSampleSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    rating?: SortOrder
  }

  export type ProductAIAnalysisCountOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    worthItScore?: SortOrder
    priceComment?: SortOrder
    summary?: SortOrder
    pros?: SortOrder
    cons?: SortOrder
    modelName?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAIAnalysisAvgOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    worthItScore?: SortOrder
  }

  export type ProductAIAnalysisMaxOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    worthItScore?: SortOrder
    priceComment?: SortOrder
    summary?: SortOrder
    modelName?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAIAnalysisMinOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    worthItScore?: SortOrder
    priceComment?: SortOrder
    summary?: SortOrder
    modelName?: SortOrder
    createdAt?: SortOrder
  }

  export type ProductAIAnalysisSumOrderByAggregateInput = {
    id?: SortOrder
    productId?: SortOrder
    snapshotId?: SortOrder
    worthItScore?: SortOrder
  }

  export type CompareSessionCountOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type CompareSessionAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompareSessionMaxOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type CompareSessionMinOrderByAggregateInput = {
    id?: SortOrder
    title?: SortOrder
    createdAt?: SortOrder
  }

  export type CompareSessionSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CompareSessionScalarRelationFilter = {
    is?: CompareSessionWhereInput
    isNot?: CompareSessionWhereInput
  }

  export type CompareItemCountOrderByAggregateInput = {
    id?: SortOrder
    compareSessionId?: SortOrder
    productId?: SortOrder
    sortOrder?: SortOrder
  }

  export type CompareItemAvgOrderByAggregateInput = {
    id?: SortOrder
    compareSessionId?: SortOrder
    productId?: SortOrder
    sortOrder?: SortOrder
  }

  export type CompareItemMaxOrderByAggregateInput = {
    id?: SortOrder
    compareSessionId?: SortOrder
    productId?: SortOrder
    sortOrder?: SortOrder
  }

  export type CompareItemMinOrderByAggregateInput = {
    id?: SortOrder
    compareSessionId?: SortOrder
    productId?: SortOrder
    sortOrder?: SortOrder
  }

  export type CompareItemSumOrderByAggregateInput = {
    id?: SortOrder
    compareSessionId?: SortOrder
    productId?: SortOrder
    sortOrder?: SortOrder
  }

  export type ProductCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput> | ProductCreateWithoutShopInput[] | ProductUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutShopInput | ProductCreateOrConnectWithoutShopInput[]
    createMany?: ProductCreateManyShopInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type ProductUncheckedCreateNestedManyWithoutShopInput = {
    create?: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput> | ProductCreateWithoutShopInput[] | ProductUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutShopInput | ProductCreateOrConnectWithoutShopInput[]
    createMany?: ProductCreateManyShopInputEnvelope
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
  }

  export type EnumMarketplaceFieldUpdateOperationsInput = {
    set?: $Enums.Marketplace
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ProductUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput> | ProductCreateWithoutShopInput[] | ProductUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutShopInput | ProductCreateOrConnectWithoutShopInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutShopInput | ProductUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductCreateManyShopInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutShopInput | ProductUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutShopInput | ProductUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductUncheckedUpdateManyWithoutShopNestedInput = {
    create?: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput> | ProductCreateWithoutShopInput[] | ProductUncheckedCreateWithoutShopInput[]
    connectOrCreate?: ProductCreateOrConnectWithoutShopInput | ProductCreateOrConnectWithoutShopInput[]
    upsert?: ProductUpsertWithWhereUniqueWithoutShopInput | ProductUpsertWithWhereUniqueWithoutShopInput[]
    createMany?: ProductCreateManyShopInputEnvelope
    set?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    disconnect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    delete?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    connect?: ProductWhereUniqueInput | ProductWhereUniqueInput[]
    update?: ProductUpdateWithWhereUniqueWithoutShopInput | ProductUpdateWithWhereUniqueWithoutShopInput[]
    updateMany?: ProductUpdateManyWithWhereWithoutShopInput | ProductUpdateManyWithWhereWithoutShopInput[]
    deleteMany?: ProductScalarWhereInput | ProductScalarWhereInput[]
  }

  export type ShopCreateNestedOneWithoutProductsInput = {
    create?: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput
    connect?: ShopWhereUniqueInput
  }

  export type ProductSnapshotCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSnapshotCreateWithoutProductInput, ProductSnapshotUncheckedCreateWithoutProductInput> | ProductSnapshotCreateWithoutProductInput[] | ProductSnapshotUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSnapshotCreateOrConnectWithoutProductInput | ProductSnapshotCreateOrConnectWithoutProductInput[]
    createMany?: ProductSnapshotCreateManyProductInputEnvelope
    connect?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
  }

  export type ProductReviewSampleCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductReviewSampleCreateWithoutProductInput, ProductReviewSampleUncheckedCreateWithoutProductInput> | ProductReviewSampleCreateWithoutProductInput[] | ProductReviewSampleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReviewSampleCreateOrConnectWithoutProductInput | ProductReviewSampleCreateOrConnectWithoutProductInput[]
    createMany?: ProductReviewSampleCreateManyProductInputEnvelope
    connect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
  }

  export type ProductAIAnalysisCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAIAnalysisCreateWithoutProductInput, ProductAIAnalysisUncheckedCreateWithoutProductInput> | ProductAIAnalysisCreateWithoutProductInput[] | ProductAIAnalysisUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAIAnalysisCreateOrConnectWithoutProductInput | ProductAIAnalysisCreateOrConnectWithoutProductInput[]
    createMany?: ProductAIAnalysisCreateManyProductInputEnvelope
    connect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
  }

  export type CompareItemCreateNestedManyWithoutProductInput = {
    create?: XOR<CompareItemCreateWithoutProductInput, CompareItemUncheckedCreateWithoutProductInput> | CompareItemCreateWithoutProductInput[] | CompareItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CompareItemCreateOrConnectWithoutProductInput | CompareItemCreateOrConnectWithoutProductInput[]
    createMany?: CompareItemCreateManyProductInputEnvelope
    connect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
  }

  export type ProductSnapshotUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductSnapshotCreateWithoutProductInput, ProductSnapshotUncheckedCreateWithoutProductInput> | ProductSnapshotCreateWithoutProductInput[] | ProductSnapshotUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSnapshotCreateOrConnectWithoutProductInput | ProductSnapshotCreateOrConnectWithoutProductInput[]
    createMany?: ProductSnapshotCreateManyProductInputEnvelope
    connect?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
  }

  export type ProductReviewSampleUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductReviewSampleCreateWithoutProductInput, ProductReviewSampleUncheckedCreateWithoutProductInput> | ProductReviewSampleCreateWithoutProductInput[] | ProductReviewSampleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReviewSampleCreateOrConnectWithoutProductInput | ProductReviewSampleCreateOrConnectWithoutProductInput[]
    createMany?: ProductReviewSampleCreateManyProductInputEnvelope
    connect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
  }

  export type ProductAIAnalysisUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ProductAIAnalysisCreateWithoutProductInput, ProductAIAnalysisUncheckedCreateWithoutProductInput> | ProductAIAnalysisCreateWithoutProductInput[] | ProductAIAnalysisUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAIAnalysisCreateOrConnectWithoutProductInput | ProductAIAnalysisCreateOrConnectWithoutProductInput[]
    createMany?: ProductAIAnalysisCreateManyProductInputEnvelope
    connect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
  }

  export type CompareItemUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<CompareItemCreateWithoutProductInput, CompareItemUncheckedCreateWithoutProductInput> | CompareItemCreateWithoutProductInput[] | CompareItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CompareItemCreateOrConnectWithoutProductInput | CompareItemCreateOrConnectWithoutProductInput[]
    createMany?: CompareItemCreateManyProductInputEnvelope
    connect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type ShopUpdateOneWithoutProductsNestedInput = {
    create?: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    connectOrCreate?: ShopCreateOrConnectWithoutProductsInput
    upsert?: ShopUpsertWithoutProductsInput
    disconnect?: ShopWhereInput | boolean
    delete?: ShopWhereInput | boolean
    connect?: ShopWhereUniqueInput
    update?: XOR<XOR<ShopUpdateToOneWithWhereWithoutProductsInput, ShopUpdateWithoutProductsInput>, ShopUncheckedUpdateWithoutProductsInput>
  }

  export type ProductSnapshotUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSnapshotCreateWithoutProductInput, ProductSnapshotUncheckedCreateWithoutProductInput> | ProductSnapshotCreateWithoutProductInput[] | ProductSnapshotUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSnapshotCreateOrConnectWithoutProductInput | ProductSnapshotCreateOrConnectWithoutProductInput[]
    upsert?: ProductSnapshotUpsertWithWhereUniqueWithoutProductInput | ProductSnapshotUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSnapshotCreateManyProductInputEnvelope
    set?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
    disconnect?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
    delete?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
    connect?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
    update?: ProductSnapshotUpdateWithWhereUniqueWithoutProductInput | ProductSnapshotUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSnapshotUpdateManyWithWhereWithoutProductInput | ProductSnapshotUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSnapshotScalarWhereInput | ProductSnapshotScalarWhereInput[]
  }

  export type ProductReviewSampleUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductReviewSampleCreateWithoutProductInput, ProductReviewSampleUncheckedCreateWithoutProductInput> | ProductReviewSampleCreateWithoutProductInput[] | ProductReviewSampleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReviewSampleCreateOrConnectWithoutProductInput | ProductReviewSampleCreateOrConnectWithoutProductInput[]
    upsert?: ProductReviewSampleUpsertWithWhereUniqueWithoutProductInput | ProductReviewSampleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductReviewSampleCreateManyProductInputEnvelope
    set?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    disconnect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    delete?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    connect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    update?: ProductReviewSampleUpdateWithWhereUniqueWithoutProductInput | ProductReviewSampleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductReviewSampleUpdateManyWithWhereWithoutProductInput | ProductReviewSampleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductReviewSampleScalarWhereInput | ProductReviewSampleScalarWhereInput[]
  }

  export type ProductAIAnalysisUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAIAnalysisCreateWithoutProductInput, ProductAIAnalysisUncheckedCreateWithoutProductInput> | ProductAIAnalysisCreateWithoutProductInput[] | ProductAIAnalysisUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAIAnalysisCreateOrConnectWithoutProductInput | ProductAIAnalysisCreateOrConnectWithoutProductInput[]
    upsert?: ProductAIAnalysisUpsertWithWhereUniqueWithoutProductInput | ProductAIAnalysisUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAIAnalysisCreateManyProductInputEnvelope
    set?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    disconnect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    delete?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    connect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    update?: ProductAIAnalysisUpdateWithWhereUniqueWithoutProductInput | ProductAIAnalysisUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAIAnalysisUpdateManyWithWhereWithoutProductInput | ProductAIAnalysisUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAIAnalysisScalarWhereInput | ProductAIAnalysisScalarWhereInput[]
  }

  export type CompareItemUpdateManyWithoutProductNestedInput = {
    create?: XOR<CompareItemCreateWithoutProductInput, CompareItemUncheckedCreateWithoutProductInput> | CompareItemCreateWithoutProductInput[] | CompareItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CompareItemCreateOrConnectWithoutProductInput | CompareItemCreateOrConnectWithoutProductInput[]
    upsert?: CompareItemUpsertWithWhereUniqueWithoutProductInput | CompareItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CompareItemCreateManyProductInputEnvelope
    set?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    disconnect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    delete?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    connect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    update?: CompareItemUpdateWithWhereUniqueWithoutProductInput | CompareItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CompareItemUpdateManyWithWhereWithoutProductInput | CompareItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CompareItemScalarWhereInput | CompareItemScalarWhereInput[]
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductSnapshotCreateWithoutProductInput, ProductSnapshotUncheckedCreateWithoutProductInput> | ProductSnapshotCreateWithoutProductInput[] | ProductSnapshotUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductSnapshotCreateOrConnectWithoutProductInput | ProductSnapshotCreateOrConnectWithoutProductInput[]
    upsert?: ProductSnapshotUpsertWithWhereUniqueWithoutProductInput | ProductSnapshotUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductSnapshotCreateManyProductInputEnvelope
    set?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
    disconnect?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
    delete?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
    connect?: ProductSnapshotWhereUniqueInput | ProductSnapshotWhereUniqueInput[]
    update?: ProductSnapshotUpdateWithWhereUniqueWithoutProductInput | ProductSnapshotUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductSnapshotUpdateManyWithWhereWithoutProductInput | ProductSnapshotUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductSnapshotScalarWhereInput | ProductSnapshotScalarWhereInput[]
  }

  export type ProductReviewSampleUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductReviewSampleCreateWithoutProductInput, ProductReviewSampleUncheckedCreateWithoutProductInput> | ProductReviewSampleCreateWithoutProductInput[] | ProductReviewSampleUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductReviewSampleCreateOrConnectWithoutProductInput | ProductReviewSampleCreateOrConnectWithoutProductInput[]
    upsert?: ProductReviewSampleUpsertWithWhereUniqueWithoutProductInput | ProductReviewSampleUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductReviewSampleCreateManyProductInputEnvelope
    set?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    disconnect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    delete?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    connect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    update?: ProductReviewSampleUpdateWithWhereUniqueWithoutProductInput | ProductReviewSampleUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductReviewSampleUpdateManyWithWhereWithoutProductInput | ProductReviewSampleUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductReviewSampleScalarWhereInput | ProductReviewSampleScalarWhereInput[]
  }

  export type ProductAIAnalysisUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ProductAIAnalysisCreateWithoutProductInput, ProductAIAnalysisUncheckedCreateWithoutProductInput> | ProductAIAnalysisCreateWithoutProductInput[] | ProductAIAnalysisUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ProductAIAnalysisCreateOrConnectWithoutProductInput | ProductAIAnalysisCreateOrConnectWithoutProductInput[]
    upsert?: ProductAIAnalysisUpsertWithWhereUniqueWithoutProductInput | ProductAIAnalysisUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ProductAIAnalysisCreateManyProductInputEnvelope
    set?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    disconnect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    delete?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    connect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    update?: ProductAIAnalysisUpdateWithWhereUniqueWithoutProductInput | ProductAIAnalysisUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ProductAIAnalysisUpdateManyWithWhereWithoutProductInput | ProductAIAnalysisUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ProductAIAnalysisScalarWhereInput | ProductAIAnalysisScalarWhereInput[]
  }

  export type CompareItemUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<CompareItemCreateWithoutProductInput, CompareItemUncheckedCreateWithoutProductInput> | CompareItemCreateWithoutProductInput[] | CompareItemUncheckedCreateWithoutProductInput[]
    connectOrCreate?: CompareItemCreateOrConnectWithoutProductInput | CompareItemCreateOrConnectWithoutProductInput[]
    upsert?: CompareItemUpsertWithWhereUniqueWithoutProductInput | CompareItemUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: CompareItemCreateManyProductInputEnvelope
    set?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    disconnect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    delete?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    connect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    update?: CompareItemUpdateWithWhereUniqueWithoutProductInput | CompareItemUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: CompareItemUpdateManyWithWhereWithoutProductInput | CompareItemUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: CompareItemScalarWhereInput | CompareItemScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutSnapshotsInput = {
    create?: XOR<ProductCreateWithoutSnapshotsInput, ProductUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSnapshotsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductReviewSampleCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<ProductReviewSampleCreateWithoutSnapshotInput, ProductReviewSampleUncheckedCreateWithoutSnapshotInput> | ProductReviewSampleCreateWithoutSnapshotInput[] | ProductReviewSampleUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProductReviewSampleCreateOrConnectWithoutSnapshotInput | ProductReviewSampleCreateOrConnectWithoutSnapshotInput[]
    createMany?: ProductReviewSampleCreateManySnapshotInputEnvelope
    connect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
  }

  export type ProductAIAnalysisCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<ProductAIAnalysisCreateWithoutSnapshotInput, ProductAIAnalysisUncheckedCreateWithoutSnapshotInput> | ProductAIAnalysisCreateWithoutSnapshotInput[] | ProductAIAnalysisUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProductAIAnalysisCreateOrConnectWithoutSnapshotInput | ProductAIAnalysisCreateOrConnectWithoutSnapshotInput[]
    createMany?: ProductAIAnalysisCreateManySnapshotInputEnvelope
    connect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
  }

  export type ProductReviewSampleUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<ProductReviewSampleCreateWithoutSnapshotInput, ProductReviewSampleUncheckedCreateWithoutSnapshotInput> | ProductReviewSampleCreateWithoutSnapshotInput[] | ProductReviewSampleUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProductReviewSampleCreateOrConnectWithoutSnapshotInput | ProductReviewSampleCreateOrConnectWithoutSnapshotInput[]
    createMany?: ProductReviewSampleCreateManySnapshotInputEnvelope
    connect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
  }

  export type ProductAIAnalysisUncheckedCreateNestedManyWithoutSnapshotInput = {
    create?: XOR<ProductAIAnalysisCreateWithoutSnapshotInput, ProductAIAnalysisUncheckedCreateWithoutSnapshotInput> | ProductAIAnalysisCreateWithoutSnapshotInput[] | ProductAIAnalysisUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProductAIAnalysisCreateOrConnectWithoutSnapshotInput | ProductAIAnalysisCreateOrConnectWithoutSnapshotInput[]
    createMany?: ProductAIAnalysisCreateManySnapshotInputEnvelope
    connect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
  }

  export type ProductUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: XOR<ProductCreateWithoutSnapshotsInput, ProductUncheckedCreateWithoutSnapshotsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutSnapshotsInput
    upsert?: ProductUpsertWithoutSnapshotsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutSnapshotsInput, ProductUpdateWithoutSnapshotsInput>, ProductUncheckedUpdateWithoutSnapshotsInput>
  }

  export type ProductReviewSampleUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<ProductReviewSampleCreateWithoutSnapshotInput, ProductReviewSampleUncheckedCreateWithoutSnapshotInput> | ProductReviewSampleCreateWithoutSnapshotInput[] | ProductReviewSampleUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProductReviewSampleCreateOrConnectWithoutSnapshotInput | ProductReviewSampleCreateOrConnectWithoutSnapshotInput[]
    upsert?: ProductReviewSampleUpsertWithWhereUniqueWithoutSnapshotInput | ProductReviewSampleUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: ProductReviewSampleCreateManySnapshotInputEnvelope
    set?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    disconnect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    delete?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    connect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    update?: ProductReviewSampleUpdateWithWhereUniqueWithoutSnapshotInput | ProductReviewSampleUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: ProductReviewSampleUpdateManyWithWhereWithoutSnapshotInput | ProductReviewSampleUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: ProductReviewSampleScalarWhereInput | ProductReviewSampleScalarWhereInput[]
  }

  export type ProductAIAnalysisUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<ProductAIAnalysisCreateWithoutSnapshotInput, ProductAIAnalysisUncheckedCreateWithoutSnapshotInput> | ProductAIAnalysisCreateWithoutSnapshotInput[] | ProductAIAnalysisUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProductAIAnalysisCreateOrConnectWithoutSnapshotInput | ProductAIAnalysisCreateOrConnectWithoutSnapshotInput[]
    upsert?: ProductAIAnalysisUpsertWithWhereUniqueWithoutSnapshotInput | ProductAIAnalysisUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: ProductAIAnalysisCreateManySnapshotInputEnvelope
    set?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    disconnect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    delete?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    connect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    update?: ProductAIAnalysisUpdateWithWhereUniqueWithoutSnapshotInput | ProductAIAnalysisUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: ProductAIAnalysisUpdateManyWithWhereWithoutSnapshotInput | ProductAIAnalysisUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: ProductAIAnalysisScalarWhereInput | ProductAIAnalysisScalarWhereInput[]
  }

  export type ProductReviewSampleUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<ProductReviewSampleCreateWithoutSnapshotInput, ProductReviewSampleUncheckedCreateWithoutSnapshotInput> | ProductReviewSampleCreateWithoutSnapshotInput[] | ProductReviewSampleUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProductReviewSampleCreateOrConnectWithoutSnapshotInput | ProductReviewSampleCreateOrConnectWithoutSnapshotInput[]
    upsert?: ProductReviewSampleUpsertWithWhereUniqueWithoutSnapshotInput | ProductReviewSampleUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: ProductReviewSampleCreateManySnapshotInputEnvelope
    set?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    disconnect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    delete?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    connect?: ProductReviewSampleWhereUniqueInput | ProductReviewSampleWhereUniqueInput[]
    update?: ProductReviewSampleUpdateWithWhereUniqueWithoutSnapshotInput | ProductReviewSampleUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: ProductReviewSampleUpdateManyWithWhereWithoutSnapshotInput | ProductReviewSampleUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: ProductReviewSampleScalarWhereInput | ProductReviewSampleScalarWhereInput[]
  }

  export type ProductAIAnalysisUncheckedUpdateManyWithoutSnapshotNestedInput = {
    create?: XOR<ProductAIAnalysisCreateWithoutSnapshotInput, ProductAIAnalysisUncheckedCreateWithoutSnapshotInput> | ProductAIAnalysisCreateWithoutSnapshotInput[] | ProductAIAnalysisUncheckedCreateWithoutSnapshotInput[]
    connectOrCreate?: ProductAIAnalysisCreateOrConnectWithoutSnapshotInput | ProductAIAnalysisCreateOrConnectWithoutSnapshotInput[]
    upsert?: ProductAIAnalysisUpsertWithWhereUniqueWithoutSnapshotInput | ProductAIAnalysisUpsertWithWhereUniqueWithoutSnapshotInput[]
    createMany?: ProductAIAnalysisCreateManySnapshotInputEnvelope
    set?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    disconnect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    delete?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    connect?: ProductAIAnalysisWhereUniqueInput | ProductAIAnalysisWhereUniqueInput[]
    update?: ProductAIAnalysisUpdateWithWhereUniqueWithoutSnapshotInput | ProductAIAnalysisUpdateWithWhereUniqueWithoutSnapshotInput[]
    updateMany?: ProductAIAnalysisUpdateManyWithWhereWithoutSnapshotInput | ProductAIAnalysisUpdateManyWithWhereWithoutSnapshotInput[]
    deleteMany?: ProductAIAnalysisScalarWhereInput | ProductAIAnalysisScalarWhereInput[]
  }

  export type ProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductSnapshotCreateNestedOneWithoutReviewsInput = {
    create?: XOR<ProductSnapshotCreateWithoutReviewsInput, ProductSnapshotUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductSnapshotCreateOrConnectWithoutReviewsInput
    connect?: ProductSnapshotWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutReviewsInput
    upsert?: ProductUpsertWithoutReviewsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutReviewsInput, ProductUpdateWithoutReviewsInput>, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductSnapshotUpdateOneWithoutReviewsNestedInput = {
    create?: XOR<ProductSnapshotCreateWithoutReviewsInput, ProductSnapshotUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: ProductSnapshotCreateOrConnectWithoutReviewsInput
    upsert?: ProductSnapshotUpsertWithoutReviewsInput
    disconnect?: ProductSnapshotWhereInput | boolean
    delete?: ProductSnapshotWhereInput | boolean
    connect?: ProductSnapshotWhereUniqueInput
    update?: XOR<XOR<ProductSnapshotUpdateToOneWithWhereWithoutReviewsInput, ProductSnapshotUpdateWithoutReviewsInput>, ProductSnapshotUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<ProductCreateWithoutAnalysesInput, ProductUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAnalysesInput
    connect?: ProductWhereUniqueInput
  }

  export type ProductSnapshotCreateNestedOneWithoutAnalysesInput = {
    create?: XOR<ProductSnapshotCreateWithoutAnalysesInput, ProductSnapshotUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: ProductSnapshotCreateOrConnectWithoutAnalysesInput
    connect?: ProductSnapshotWhereUniqueInput
  }

  export type ProductUpdateOneRequiredWithoutAnalysesNestedInput = {
    create?: XOR<ProductCreateWithoutAnalysesInput, ProductUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: ProductCreateOrConnectWithoutAnalysesInput
    upsert?: ProductUpsertWithoutAnalysesInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutAnalysesInput, ProductUpdateWithoutAnalysesInput>, ProductUncheckedUpdateWithoutAnalysesInput>
  }

  export type ProductSnapshotUpdateOneWithoutAnalysesNestedInput = {
    create?: XOR<ProductSnapshotCreateWithoutAnalysesInput, ProductSnapshotUncheckedCreateWithoutAnalysesInput>
    connectOrCreate?: ProductSnapshotCreateOrConnectWithoutAnalysesInput
    upsert?: ProductSnapshotUpsertWithoutAnalysesInput
    disconnect?: ProductSnapshotWhereInput | boolean
    delete?: ProductSnapshotWhereInput | boolean
    connect?: ProductSnapshotWhereUniqueInput
    update?: XOR<XOR<ProductSnapshotUpdateToOneWithWhereWithoutAnalysesInput, ProductSnapshotUpdateWithoutAnalysesInput>, ProductSnapshotUncheckedUpdateWithoutAnalysesInput>
  }

  export type CompareItemCreateNestedManyWithoutSessionInput = {
    create?: XOR<CompareItemCreateWithoutSessionInput, CompareItemUncheckedCreateWithoutSessionInput> | CompareItemCreateWithoutSessionInput[] | CompareItemUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CompareItemCreateOrConnectWithoutSessionInput | CompareItemCreateOrConnectWithoutSessionInput[]
    createMany?: CompareItemCreateManySessionInputEnvelope
    connect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
  }

  export type CompareItemUncheckedCreateNestedManyWithoutSessionInput = {
    create?: XOR<CompareItemCreateWithoutSessionInput, CompareItemUncheckedCreateWithoutSessionInput> | CompareItemCreateWithoutSessionInput[] | CompareItemUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CompareItemCreateOrConnectWithoutSessionInput | CompareItemCreateOrConnectWithoutSessionInput[]
    createMany?: CompareItemCreateManySessionInputEnvelope
    connect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
  }

  export type CompareItemUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CompareItemCreateWithoutSessionInput, CompareItemUncheckedCreateWithoutSessionInput> | CompareItemCreateWithoutSessionInput[] | CompareItemUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CompareItemCreateOrConnectWithoutSessionInput | CompareItemCreateOrConnectWithoutSessionInput[]
    upsert?: CompareItemUpsertWithWhereUniqueWithoutSessionInput | CompareItemUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CompareItemCreateManySessionInputEnvelope
    set?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    disconnect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    delete?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    connect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    update?: CompareItemUpdateWithWhereUniqueWithoutSessionInput | CompareItemUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CompareItemUpdateManyWithWhereWithoutSessionInput | CompareItemUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CompareItemScalarWhereInput | CompareItemScalarWhereInput[]
  }

  export type CompareItemUncheckedUpdateManyWithoutSessionNestedInput = {
    create?: XOR<CompareItemCreateWithoutSessionInput, CompareItemUncheckedCreateWithoutSessionInput> | CompareItemCreateWithoutSessionInput[] | CompareItemUncheckedCreateWithoutSessionInput[]
    connectOrCreate?: CompareItemCreateOrConnectWithoutSessionInput | CompareItemCreateOrConnectWithoutSessionInput[]
    upsert?: CompareItemUpsertWithWhereUniqueWithoutSessionInput | CompareItemUpsertWithWhereUniqueWithoutSessionInput[]
    createMany?: CompareItemCreateManySessionInputEnvelope
    set?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    disconnect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    delete?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    connect?: CompareItemWhereUniqueInput | CompareItemWhereUniqueInput[]
    update?: CompareItemUpdateWithWhereUniqueWithoutSessionInput | CompareItemUpdateWithWhereUniqueWithoutSessionInput[]
    updateMany?: CompareItemUpdateManyWithWhereWithoutSessionInput | CompareItemUpdateManyWithWhereWithoutSessionInput[]
    deleteMany?: CompareItemScalarWhereInput | CompareItemScalarWhereInput[]
  }

  export type CompareSessionCreateNestedOneWithoutItemsInput = {
    create?: XOR<CompareSessionCreateWithoutItemsInput, CompareSessionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CompareSessionCreateOrConnectWithoutItemsInput
    connect?: CompareSessionWhereUniqueInput
  }

  export type ProductCreateNestedOneWithoutCompareItemsInput = {
    create?: XOR<ProductCreateWithoutCompareItemsInput, ProductUncheckedCreateWithoutCompareItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCompareItemsInput
    connect?: ProductWhereUniqueInput
  }

  export type CompareSessionUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<CompareSessionCreateWithoutItemsInput, CompareSessionUncheckedCreateWithoutItemsInput>
    connectOrCreate?: CompareSessionCreateOrConnectWithoutItemsInput
    upsert?: CompareSessionUpsertWithoutItemsInput
    connect?: CompareSessionWhereUniqueInput
    update?: XOR<XOR<CompareSessionUpdateToOneWithWhereWithoutItemsInput, CompareSessionUpdateWithoutItemsInput>, CompareSessionUncheckedUpdateWithoutItemsInput>
  }

  export type ProductUpdateOneRequiredWithoutCompareItemsNestedInput = {
    create?: XOR<ProductCreateWithoutCompareItemsInput, ProductUncheckedCreateWithoutCompareItemsInput>
    connectOrCreate?: ProductCreateOrConnectWithoutCompareItemsInput
    upsert?: ProductUpsertWithoutCompareItemsInput
    connect?: ProductWhereUniqueInput
    update?: XOR<XOR<ProductUpdateToOneWithWhereWithoutCompareItemsInput, ProductUpdateWithoutCompareItemsInput>, ProductUncheckedUpdateWithoutCompareItemsInput>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedEnumMarketplaceFilter<$PrismaModel = never> = {
    equals?: $Enums.Marketplace | EnumMarketplaceFieldRefInput<$PrismaModel>
    in?: $Enums.Marketplace[] | ListEnumMarketplaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Marketplace[] | ListEnumMarketplaceFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketplaceFilter<$PrismaModel> | $Enums.Marketplace
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumMarketplaceWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Marketplace | EnumMarketplaceFieldRefInput<$PrismaModel>
    in?: $Enums.Marketplace[] | ListEnumMarketplaceFieldRefInput<$PrismaModel>
    notIn?: $Enums.Marketplace[] | ListEnumMarketplaceFieldRefInput<$PrismaModel>
    not?: NestedEnumMarketplaceWithAggregatesFilter<$PrismaModel> | $Enums.Marketplace
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMarketplaceFilter<$PrismaModel>
    _max?: NestedEnumMarketplaceFilter<$PrismaModel>
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
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

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type ProductCreateWithoutShopInput = {
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    reviews?: ProductReviewSampleCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisCreateNestedManyWithoutProductInput
    compareItems?: CompareItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutShopInput = {
    id?: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    reviews?: ProductReviewSampleUncheckedCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisUncheckedCreateNestedManyWithoutProductInput
    compareItems?: CompareItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutShopInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput>
  }

  export type ProductCreateManyShopInputEnvelope = {
    data: ProductCreateManyShopInput | ProductCreateManyShopInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithWhereUniqueWithoutShopInput = {
    where: ProductWhereUniqueInput
    update: XOR<ProductUpdateWithoutShopInput, ProductUncheckedUpdateWithoutShopInput>
    create: XOR<ProductCreateWithoutShopInput, ProductUncheckedCreateWithoutShopInput>
  }

  export type ProductUpdateWithWhereUniqueWithoutShopInput = {
    where: ProductWhereUniqueInput
    data: XOR<ProductUpdateWithoutShopInput, ProductUncheckedUpdateWithoutShopInput>
  }

  export type ProductUpdateManyWithWhereWithoutShopInput = {
    where: ProductScalarWhereInput
    data: XOR<ProductUpdateManyMutationInput, ProductUncheckedUpdateManyWithoutShopInput>
  }

  export type ProductScalarWhereInput = {
    AND?: ProductScalarWhereInput | ProductScalarWhereInput[]
    OR?: ProductScalarWhereInput[]
    NOT?: ProductScalarWhereInput | ProductScalarWhereInput[]
    id?: IntFilter<"Product"> | number
    marketplace?: EnumMarketplaceFilter<"Product"> | $Enums.Marketplace
    url?: StringFilter<"Product"> | string
    externalProductId?: StringNullableFilter<"Product"> | string | null
    name?: StringFilter<"Product"> | string
    thumbnailUrl?: StringNullableFilter<"Product"> | string | null
    category?: StringNullableFilter<"Product"> | string | null
    shopId?: IntNullableFilter<"Product"> | number | null
    isTracked?: BoolFilter<"Product"> | boolean
    createdAt?: DateTimeFilter<"Product"> | Date | string
    updatedAt?: DateTimeFilter<"Product"> | Date | string
  }

  export type ShopCreateWithoutProductsInput = {
    marketplace: $Enums.Marketplace
    externalShopId: string
    name: string
    shopLevel?: string | null
    rating?: number | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopUncheckedCreateWithoutProductsInput = {
    id?: number
    marketplace: $Enums.Marketplace
    externalShopId: string
    name: string
    shopLevel?: string | null
    rating?: number | null
    location?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ShopCreateOrConnectWithoutProductsInput = {
    where: ShopWhereUniqueInput
    create: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
  }

  export type ProductSnapshotCreateWithoutProductInput = {
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    reviews?: ProductReviewSampleCreateNestedManyWithoutSnapshotInput
    analyses?: ProductAIAnalysisCreateNestedManyWithoutSnapshotInput
  }

  export type ProductSnapshotUncheckedCreateWithoutProductInput = {
    id?: number
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    reviews?: ProductReviewSampleUncheckedCreateNestedManyWithoutSnapshotInput
    analyses?: ProductAIAnalysisUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type ProductSnapshotCreateOrConnectWithoutProductInput = {
    where: ProductSnapshotWhereUniqueInput
    create: XOR<ProductSnapshotCreateWithoutProductInput, ProductSnapshotUncheckedCreateWithoutProductInput>
  }

  export type ProductSnapshotCreateManyProductInputEnvelope = {
    data: ProductSnapshotCreateManyProductInput | ProductSnapshotCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductReviewSampleCreateWithoutProductInput = {
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
    snapshot?: ProductSnapshotCreateNestedOneWithoutReviewsInput
  }

  export type ProductReviewSampleUncheckedCreateWithoutProductInput = {
    id?: number
    snapshotId?: number | null
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
  }

  export type ProductReviewSampleCreateOrConnectWithoutProductInput = {
    where: ProductReviewSampleWhereUniqueInput
    create: XOR<ProductReviewSampleCreateWithoutProductInput, ProductReviewSampleUncheckedCreateWithoutProductInput>
  }

  export type ProductReviewSampleCreateManyProductInputEnvelope = {
    data: ProductReviewSampleCreateManyProductInput | ProductReviewSampleCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ProductAIAnalysisCreateWithoutProductInput = {
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
    snapshot?: ProductSnapshotCreateNestedOneWithoutAnalysesInput
  }

  export type ProductAIAnalysisUncheckedCreateWithoutProductInput = {
    id?: number
    snapshotId?: number | null
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
  }

  export type ProductAIAnalysisCreateOrConnectWithoutProductInput = {
    where: ProductAIAnalysisWhereUniqueInput
    create: XOR<ProductAIAnalysisCreateWithoutProductInput, ProductAIAnalysisUncheckedCreateWithoutProductInput>
  }

  export type ProductAIAnalysisCreateManyProductInputEnvelope = {
    data: ProductAIAnalysisCreateManyProductInput | ProductAIAnalysisCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type CompareItemCreateWithoutProductInput = {
    sortOrder?: number
    session: CompareSessionCreateNestedOneWithoutItemsInput
  }

  export type CompareItemUncheckedCreateWithoutProductInput = {
    id?: number
    compareSessionId: number
    sortOrder?: number
  }

  export type CompareItemCreateOrConnectWithoutProductInput = {
    where: CompareItemWhereUniqueInput
    create: XOR<CompareItemCreateWithoutProductInput, CompareItemUncheckedCreateWithoutProductInput>
  }

  export type CompareItemCreateManyProductInputEnvelope = {
    data: CompareItemCreateManyProductInput | CompareItemCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ShopUpsertWithoutProductsInput = {
    update: XOR<ShopUpdateWithoutProductsInput, ShopUncheckedUpdateWithoutProductsInput>
    create: XOR<ShopCreateWithoutProductsInput, ShopUncheckedCreateWithoutProductsInput>
    where?: ShopWhereInput
  }

  export type ShopUpdateToOneWithWhereWithoutProductsInput = {
    where?: ShopWhereInput
    data: XOR<ShopUpdateWithoutProductsInput, ShopUncheckedUpdateWithoutProductsInput>
  }

  export type ShopUpdateWithoutProductsInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    externalShopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shopLevel?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ShopUncheckedUpdateWithoutProductsInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    externalShopId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    shopLevel?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductSnapshotWhereUniqueInput
    update: XOR<ProductSnapshotUpdateWithoutProductInput, ProductSnapshotUncheckedUpdateWithoutProductInput>
    create: XOR<ProductSnapshotCreateWithoutProductInput, ProductSnapshotUncheckedCreateWithoutProductInput>
  }

  export type ProductSnapshotUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductSnapshotWhereUniqueInput
    data: XOR<ProductSnapshotUpdateWithoutProductInput, ProductSnapshotUncheckedUpdateWithoutProductInput>
  }

  export type ProductSnapshotUpdateManyWithWhereWithoutProductInput = {
    where: ProductSnapshotScalarWhereInput
    data: XOR<ProductSnapshotUpdateManyMutationInput, ProductSnapshotUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductSnapshotScalarWhereInput = {
    AND?: ProductSnapshotScalarWhereInput | ProductSnapshotScalarWhereInput[]
    OR?: ProductSnapshotScalarWhereInput[]
    NOT?: ProductSnapshotScalarWhereInput | ProductSnapshotScalarWhereInput[]
    id?: IntFilter<"ProductSnapshot"> | number
    productId?: IntFilter<"ProductSnapshot"> | number
    scrapedAt?: DateTimeFilter<"ProductSnapshot"> | Date | string
    price?: IntFilter<"ProductSnapshot"> | number
    currency?: StringFilter<"ProductSnapshot"> | string
    rating?: FloatNullableFilter<"ProductSnapshot"> | number | null
    reviewsCount?: IntNullableFilter<"ProductSnapshot"> | number | null
    soldCount?: IntNullableFilter<"ProductSnapshot"> | number | null
    rawSpecs?: JsonNullableFilter<"ProductSnapshot">
    rawData?: JsonNullableFilter<"ProductSnapshot">
  }

  export type ProductReviewSampleUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductReviewSampleWhereUniqueInput
    update: XOR<ProductReviewSampleUpdateWithoutProductInput, ProductReviewSampleUncheckedUpdateWithoutProductInput>
    create: XOR<ProductReviewSampleCreateWithoutProductInput, ProductReviewSampleUncheckedCreateWithoutProductInput>
  }

  export type ProductReviewSampleUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductReviewSampleWhereUniqueInput
    data: XOR<ProductReviewSampleUpdateWithoutProductInput, ProductReviewSampleUncheckedUpdateWithoutProductInput>
  }

  export type ProductReviewSampleUpdateManyWithWhereWithoutProductInput = {
    where: ProductReviewSampleScalarWhereInput
    data: XOR<ProductReviewSampleUpdateManyMutationInput, ProductReviewSampleUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductReviewSampleScalarWhereInput = {
    AND?: ProductReviewSampleScalarWhereInput | ProductReviewSampleScalarWhereInput[]
    OR?: ProductReviewSampleScalarWhereInput[]
    NOT?: ProductReviewSampleScalarWhereInput | ProductReviewSampleScalarWhereInput[]
    id?: IntFilter<"ProductReviewSample"> | number
    productId?: IntFilter<"ProductReviewSample"> | number
    snapshotId?: IntNullableFilter<"ProductReviewSample"> | number | null
    platformReviewId?: StringNullableFilter<"ProductReviewSample"> | string | null
    rating?: IntFilter<"ProductReviewSample"> | number
    authorName?: StringNullableFilter<"ProductReviewSample"> | string | null
    content?: StringFilter<"ProductReviewSample"> | string
    scrapedAt?: DateTimeFilter<"ProductReviewSample"> | Date | string
  }

  export type ProductAIAnalysisUpsertWithWhereUniqueWithoutProductInput = {
    where: ProductAIAnalysisWhereUniqueInput
    update: XOR<ProductAIAnalysisUpdateWithoutProductInput, ProductAIAnalysisUncheckedUpdateWithoutProductInput>
    create: XOR<ProductAIAnalysisCreateWithoutProductInput, ProductAIAnalysisUncheckedCreateWithoutProductInput>
  }

  export type ProductAIAnalysisUpdateWithWhereUniqueWithoutProductInput = {
    where: ProductAIAnalysisWhereUniqueInput
    data: XOR<ProductAIAnalysisUpdateWithoutProductInput, ProductAIAnalysisUncheckedUpdateWithoutProductInput>
  }

  export type ProductAIAnalysisUpdateManyWithWhereWithoutProductInput = {
    where: ProductAIAnalysisScalarWhereInput
    data: XOR<ProductAIAnalysisUpdateManyMutationInput, ProductAIAnalysisUncheckedUpdateManyWithoutProductInput>
  }

  export type ProductAIAnalysisScalarWhereInput = {
    AND?: ProductAIAnalysisScalarWhereInput | ProductAIAnalysisScalarWhereInput[]
    OR?: ProductAIAnalysisScalarWhereInput[]
    NOT?: ProductAIAnalysisScalarWhereInput | ProductAIAnalysisScalarWhereInput[]
    id?: IntFilter<"ProductAIAnalysis"> | number
    productId?: IntFilter<"ProductAIAnalysis"> | number
    snapshotId?: IntNullableFilter<"ProductAIAnalysis"> | number | null
    worthItScore?: IntFilter<"ProductAIAnalysis"> | number
    priceComment?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    summary?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    pros?: JsonNullableFilter<"ProductAIAnalysis">
    cons?: JsonNullableFilter<"ProductAIAnalysis">
    modelName?: StringNullableFilter<"ProductAIAnalysis"> | string | null
    createdAt?: DateTimeFilter<"ProductAIAnalysis"> | Date | string
  }

  export type CompareItemUpsertWithWhereUniqueWithoutProductInput = {
    where: CompareItemWhereUniqueInput
    update: XOR<CompareItemUpdateWithoutProductInput, CompareItemUncheckedUpdateWithoutProductInput>
    create: XOR<CompareItemCreateWithoutProductInput, CompareItemUncheckedCreateWithoutProductInput>
  }

  export type CompareItemUpdateWithWhereUniqueWithoutProductInput = {
    where: CompareItemWhereUniqueInput
    data: XOR<CompareItemUpdateWithoutProductInput, CompareItemUncheckedUpdateWithoutProductInput>
  }

  export type CompareItemUpdateManyWithWhereWithoutProductInput = {
    where: CompareItemScalarWhereInput
    data: XOR<CompareItemUpdateManyMutationInput, CompareItemUncheckedUpdateManyWithoutProductInput>
  }

  export type CompareItemScalarWhereInput = {
    AND?: CompareItemScalarWhereInput | CompareItemScalarWhereInput[]
    OR?: CompareItemScalarWhereInput[]
    NOT?: CompareItemScalarWhereInput | CompareItemScalarWhereInput[]
    id?: IntFilter<"CompareItem"> | number
    compareSessionId?: IntFilter<"CompareItem"> | number
    productId?: IntFilter<"CompareItem"> | number
    sortOrder?: IntFilter<"CompareItem"> | number
  }

  export type ProductCreateWithoutSnapshotsInput = {
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop?: ShopCreateNestedOneWithoutProductsInput
    reviews?: ProductReviewSampleCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisCreateNestedManyWithoutProductInput
    compareItems?: CompareItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutSnapshotsInput = {
    id?: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    shopId?: number | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ProductReviewSampleUncheckedCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisUncheckedCreateNestedManyWithoutProductInput
    compareItems?: CompareItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutSnapshotsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutSnapshotsInput, ProductUncheckedCreateWithoutSnapshotsInput>
  }

  export type ProductReviewSampleCreateWithoutSnapshotInput = {
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
    product: ProductCreateNestedOneWithoutReviewsInput
  }

  export type ProductReviewSampleUncheckedCreateWithoutSnapshotInput = {
    id?: number
    productId: number
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
  }

  export type ProductReviewSampleCreateOrConnectWithoutSnapshotInput = {
    where: ProductReviewSampleWhereUniqueInput
    create: XOR<ProductReviewSampleCreateWithoutSnapshotInput, ProductReviewSampleUncheckedCreateWithoutSnapshotInput>
  }

  export type ProductReviewSampleCreateManySnapshotInputEnvelope = {
    data: ProductReviewSampleCreateManySnapshotInput | ProductReviewSampleCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type ProductAIAnalysisCreateWithoutSnapshotInput = {
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
    product: ProductCreateNestedOneWithoutAnalysesInput
  }

  export type ProductAIAnalysisUncheckedCreateWithoutSnapshotInput = {
    id?: number
    productId: number
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
  }

  export type ProductAIAnalysisCreateOrConnectWithoutSnapshotInput = {
    where: ProductAIAnalysisWhereUniqueInput
    create: XOR<ProductAIAnalysisCreateWithoutSnapshotInput, ProductAIAnalysisUncheckedCreateWithoutSnapshotInput>
  }

  export type ProductAIAnalysisCreateManySnapshotInputEnvelope = {
    data: ProductAIAnalysisCreateManySnapshotInput | ProductAIAnalysisCreateManySnapshotInput[]
    skipDuplicates?: boolean
  }

  export type ProductUpsertWithoutSnapshotsInput = {
    update: XOR<ProductUpdateWithoutSnapshotsInput, ProductUncheckedUpdateWithoutSnapshotsInput>
    create: XOR<ProductCreateWithoutSnapshotsInput, ProductUncheckedCreateWithoutSnapshotsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutSnapshotsInput, ProductUncheckedUpdateWithoutSnapshotsInput>
  }

  export type ProductUpdateWithoutSnapshotsInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneWithoutProductsNestedInput
    reviews?: ProductReviewSampleUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutSnapshotsInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ProductReviewSampleUncheckedUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUncheckedUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductReviewSampleUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: ProductReviewSampleWhereUniqueInput
    update: XOR<ProductReviewSampleUpdateWithoutSnapshotInput, ProductReviewSampleUncheckedUpdateWithoutSnapshotInput>
    create: XOR<ProductReviewSampleCreateWithoutSnapshotInput, ProductReviewSampleUncheckedCreateWithoutSnapshotInput>
  }

  export type ProductReviewSampleUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: ProductReviewSampleWhereUniqueInput
    data: XOR<ProductReviewSampleUpdateWithoutSnapshotInput, ProductReviewSampleUncheckedUpdateWithoutSnapshotInput>
  }

  export type ProductReviewSampleUpdateManyWithWhereWithoutSnapshotInput = {
    where: ProductReviewSampleScalarWhereInput
    data: XOR<ProductReviewSampleUpdateManyMutationInput, ProductReviewSampleUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type ProductAIAnalysisUpsertWithWhereUniqueWithoutSnapshotInput = {
    where: ProductAIAnalysisWhereUniqueInput
    update: XOR<ProductAIAnalysisUpdateWithoutSnapshotInput, ProductAIAnalysisUncheckedUpdateWithoutSnapshotInput>
    create: XOR<ProductAIAnalysisCreateWithoutSnapshotInput, ProductAIAnalysisUncheckedCreateWithoutSnapshotInput>
  }

  export type ProductAIAnalysisUpdateWithWhereUniqueWithoutSnapshotInput = {
    where: ProductAIAnalysisWhereUniqueInput
    data: XOR<ProductAIAnalysisUpdateWithoutSnapshotInput, ProductAIAnalysisUncheckedUpdateWithoutSnapshotInput>
  }

  export type ProductAIAnalysisUpdateManyWithWhereWithoutSnapshotInput = {
    where: ProductAIAnalysisScalarWhereInput
    data: XOR<ProductAIAnalysisUpdateManyMutationInput, ProductAIAnalysisUncheckedUpdateManyWithoutSnapshotInput>
  }

  export type ProductCreateWithoutReviewsInput = {
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop?: ShopCreateNestedOneWithoutProductsInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisCreateNestedManyWithoutProductInput
    compareItems?: CompareItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutReviewsInput = {
    id?: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    shopId?: number | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisUncheckedCreateNestedManyWithoutProductInput
    compareItems?: CompareItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutReviewsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
  }

  export type ProductSnapshotCreateWithoutReviewsInput = {
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    product: ProductCreateNestedOneWithoutSnapshotsInput
    analyses?: ProductAIAnalysisCreateNestedManyWithoutSnapshotInput
  }

  export type ProductSnapshotUncheckedCreateWithoutReviewsInput = {
    id?: number
    productId: number
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    analyses?: ProductAIAnalysisUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type ProductSnapshotCreateOrConnectWithoutReviewsInput = {
    where: ProductSnapshotWhereUniqueInput
    create: XOR<ProductSnapshotCreateWithoutReviewsInput, ProductSnapshotUncheckedCreateWithoutReviewsInput>
  }

  export type ProductUpsertWithoutReviewsInput = {
    update: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductCreateWithoutReviewsInput, ProductUncheckedCreateWithoutReviewsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutReviewsInput, ProductUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductUpdateWithoutReviewsInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneWithoutProductsNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUncheckedUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductSnapshotUpsertWithoutReviewsInput = {
    update: XOR<ProductSnapshotUpdateWithoutReviewsInput, ProductSnapshotUncheckedUpdateWithoutReviewsInput>
    create: XOR<ProductSnapshotCreateWithoutReviewsInput, ProductSnapshotUncheckedCreateWithoutReviewsInput>
    where?: ProductSnapshotWhereInput
  }

  export type ProductSnapshotUpdateToOneWithWhereWithoutReviewsInput = {
    where?: ProductSnapshotWhereInput
    data: XOR<ProductSnapshotUpdateWithoutReviewsInput, ProductSnapshotUncheckedUpdateWithoutReviewsInput>
  }

  export type ProductSnapshotUpdateWithoutReviewsInput = {
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    product?: ProductUpdateOneRequiredWithoutSnapshotsNestedInput
    analyses?: ProductAIAnalysisUpdateManyWithoutSnapshotNestedInput
  }

  export type ProductSnapshotUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    analyses?: ProductAIAnalysisUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type ProductCreateWithoutAnalysesInput = {
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop?: ShopCreateNestedOneWithoutProductsInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    reviews?: ProductReviewSampleCreateNestedManyWithoutProductInput
    compareItems?: CompareItemCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutAnalysesInput = {
    id?: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    shopId?: number | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    reviews?: ProductReviewSampleUncheckedCreateNestedManyWithoutProductInput
    compareItems?: CompareItemUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutAnalysesInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutAnalysesInput, ProductUncheckedCreateWithoutAnalysesInput>
  }

  export type ProductSnapshotCreateWithoutAnalysesInput = {
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    product: ProductCreateNestedOneWithoutSnapshotsInput
    reviews?: ProductReviewSampleCreateNestedManyWithoutSnapshotInput
  }

  export type ProductSnapshotUncheckedCreateWithoutAnalysesInput = {
    id?: number
    productId: number
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    reviews?: ProductReviewSampleUncheckedCreateNestedManyWithoutSnapshotInput
  }

  export type ProductSnapshotCreateOrConnectWithoutAnalysesInput = {
    where: ProductSnapshotWhereUniqueInput
    create: XOR<ProductSnapshotCreateWithoutAnalysesInput, ProductSnapshotUncheckedCreateWithoutAnalysesInput>
  }

  export type ProductUpsertWithoutAnalysesInput = {
    update: XOR<ProductUpdateWithoutAnalysesInput, ProductUncheckedUpdateWithoutAnalysesInput>
    create: XOR<ProductCreateWithoutAnalysesInput, ProductUncheckedCreateWithoutAnalysesInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutAnalysesInput, ProductUncheckedUpdateWithoutAnalysesInput>
  }

  export type ProductUpdateWithoutAnalysesInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneWithoutProductsNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    reviews?: ProductReviewSampleUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutAnalysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ProductReviewSampleUncheckedUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductSnapshotUpsertWithoutAnalysesInput = {
    update: XOR<ProductSnapshotUpdateWithoutAnalysesInput, ProductSnapshotUncheckedUpdateWithoutAnalysesInput>
    create: XOR<ProductSnapshotCreateWithoutAnalysesInput, ProductSnapshotUncheckedCreateWithoutAnalysesInput>
    where?: ProductSnapshotWhereInput
  }

  export type ProductSnapshotUpdateToOneWithWhereWithoutAnalysesInput = {
    where?: ProductSnapshotWhereInput
    data: XOR<ProductSnapshotUpdateWithoutAnalysesInput, ProductSnapshotUncheckedUpdateWithoutAnalysesInput>
  }

  export type ProductSnapshotUpdateWithoutAnalysesInput = {
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    product?: ProductUpdateOneRequiredWithoutSnapshotsNestedInput
    reviews?: ProductReviewSampleUpdateManyWithoutSnapshotNestedInput
  }

  export type ProductSnapshotUncheckedUpdateWithoutAnalysesInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    reviews?: ProductReviewSampleUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type CompareItemCreateWithoutSessionInput = {
    sortOrder?: number
    product: ProductCreateNestedOneWithoutCompareItemsInput
  }

  export type CompareItemUncheckedCreateWithoutSessionInput = {
    id?: number
    productId: number
    sortOrder?: number
  }

  export type CompareItemCreateOrConnectWithoutSessionInput = {
    where: CompareItemWhereUniqueInput
    create: XOR<CompareItemCreateWithoutSessionInput, CompareItemUncheckedCreateWithoutSessionInput>
  }

  export type CompareItemCreateManySessionInputEnvelope = {
    data: CompareItemCreateManySessionInput | CompareItemCreateManySessionInput[]
    skipDuplicates?: boolean
  }

  export type CompareItemUpsertWithWhereUniqueWithoutSessionInput = {
    where: CompareItemWhereUniqueInput
    update: XOR<CompareItemUpdateWithoutSessionInput, CompareItemUncheckedUpdateWithoutSessionInput>
    create: XOR<CompareItemCreateWithoutSessionInput, CompareItemUncheckedCreateWithoutSessionInput>
  }

  export type CompareItemUpdateWithWhereUniqueWithoutSessionInput = {
    where: CompareItemWhereUniqueInput
    data: XOR<CompareItemUpdateWithoutSessionInput, CompareItemUncheckedUpdateWithoutSessionInput>
  }

  export type CompareItemUpdateManyWithWhereWithoutSessionInput = {
    where: CompareItemScalarWhereInput
    data: XOR<CompareItemUpdateManyMutationInput, CompareItemUncheckedUpdateManyWithoutSessionInput>
  }

  export type CompareSessionCreateWithoutItemsInput = {
    title?: string | null
    createdAt?: Date | string
  }

  export type CompareSessionUncheckedCreateWithoutItemsInput = {
    id?: number
    title?: string | null
    createdAt?: Date | string
  }

  export type CompareSessionCreateOrConnectWithoutItemsInput = {
    where: CompareSessionWhereUniqueInput
    create: XOR<CompareSessionCreateWithoutItemsInput, CompareSessionUncheckedCreateWithoutItemsInput>
  }

  export type ProductCreateWithoutCompareItemsInput = {
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    shop?: ShopCreateNestedOneWithoutProductsInput
    snapshots?: ProductSnapshotCreateNestedManyWithoutProductInput
    reviews?: ProductReviewSampleCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisCreateNestedManyWithoutProductInput
  }

  export type ProductUncheckedCreateWithoutCompareItemsInput = {
    id?: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    shopId?: number | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    snapshots?: ProductSnapshotUncheckedCreateNestedManyWithoutProductInput
    reviews?: ProductReviewSampleUncheckedCreateNestedManyWithoutProductInput
    analyses?: ProductAIAnalysisUncheckedCreateNestedManyWithoutProductInput
  }

  export type ProductCreateOrConnectWithoutCompareItemsInput = {
    where: ProductWhereUniqueInput
    create: XOR<ProductCreateWithoutCompareItemsInput, ProductUncheckedCreateWithoutCompareItemsInput>
  }

  export type CompareSessionUpsertWithoutItemsInput = {
    update: XOR<CompareSessionUpdateWithoutItemsInput, CompareSessionUncheckedUpdateWithoutItemsInput>
    create: XOR<CompareSessionCreateWithoutItemsInput, CompareSessionUncheckedCreateWithoutItemsInput>
    where?: CompareSessionWhereInput
  }

  export type CompareSessionUpdateToOneWithWhereWithoutItemsInput = {
    where?: CompareSessionWhereInput
    data: XOR<CompareSessionUpdateWithoutItemsInput, CompareSessionUncheckedUpdateWithoutItemsInput>
  }

  export type CompareSessionUpdateWithoutItemsInput = {
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompareSessionUncheckedUpdateWithoutItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductUpsertWithoutCompareItemsInput = {
    update: XOR<ProductUpdateWithoutCompareItemsInput, ProductUncheckedUpdateWithoutCompareItemsInput>
    create: XOR<ProductCreateWithoutCompareItemsInput, ProductUncheckedCreateWithoutCompareItemsInput>
    where?: ProductWhereInput
  }

  export type ProductUpdateToOneWithWhereWithoutCompareItemsInput = {
    where?: ProductWhereInput
    data: XOR<ProductUpdateWithoutCompareItemsInput, ProductUncheckedUpdateWithoutCompareItemsInput>
  }

  export type ProductUpdateWithoutCompareItemsInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    shop?: ShopUpdateOneWithoutProductsNestedInput
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    reviews?: ProductReviewSampleUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutCompareItemsInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    shopId?: NullableIntFieldUpdateOperationsInput | number | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ProductReviewSampleUncheckedUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductCreateManyShopInput = {
    id?: number
    marketplace: $Enums.Marketplace
    url: string
    externalProductId?: string | null
    name: string
    thumbnailUrl?: string | null
    category?: string | null
    isTracked?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProductUpdateWithoutShopInput = {
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: ProductSnapshotUpdateManyWithoutProductNestedInput
    reviews?: ProductReviewSampleUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshots?: ProductSnapshotUncheckedUpdateManyWithoutProductNestedInput
    reviews?: ProductReviewSampleUncheckedUpdateManyWithoutProductNestedInput
    analyses?: ProductAIAnalysisUncheckedUpdateManyWithoutProductNestedInput
    compareItems?: CompareItemUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ProductUncheckedUpdateManyWithoutShopInput = {
    id?: IntFieldUpdateOperationsInput | number
    marketplace?: EnumMarketplaceFieldUpdateOperationsInput | $Enums.Marketplace
    url?: StringFieldUpdateOperationsInput | string
    externalProductId?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    thumbnailUrl?: NullableStringFieldUpdateOperationsInput | string | null
    category?: NullableStringFieldUpdateOperationsInput | string | null
    isTracked?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductSnapshotCreateManyProductInput = {
    id?: number
    scrapedAt?: Date | string
    price: number
    currency?: string
    rating?: number | null
    reviewsCount?: number | null
    soldCount?: number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductReviewSampleCreateManyProductInput = {
    id?: number
    snapshotId?: number | null
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
  }

  export type ProductAIAnalysisCreateManyProductInput = {
    id?: number
    snapshotId?: number | null
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
  }

  export type CompareItemCreateManyProductInput = {
    id?: number
    compareSessionId: number
    sortOrder?: number
  }

  export type ProductSnapshotUpdateWithoutProductInput = {
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    reviews?: ProductReviewSampleUpdateManyWithoutSnapshotNestedInput
    analyses?: ProductAIAnalysisUpdateManyWithoutSnapshotNestedInput
  }

  export type ProductSnapshotUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
    reviews?: ProductReviewSampleUncheckedUpdateManyWithoutSnapshotNestedInput
    analyses?: ProductAIAnalysisUncheckedUpdateManyWithoutSnapshotNestedInput
  }

  export type ProductSnapshotUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    price?: IntFieldUpdateOperationsInput | number
    currency?: StringFieldUpdateOperationsInput | string
    rating?: NullableFloatFieldUpdateOperationsInput | number | null
    reviewsCount?: NullableIntFieldUpdateOperationsInput | number | null
    soldCount?: NullableIntFieldUpdateOperationsInput | number | null
    rawSpecs?: NullableJsonNullValueInput | InputJsonValue
    rawData?: NullableJsonNullValueInput | InputJsonValue
  }

  export type ProductReviewSampleUpdateWithoutProductInput = {
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: ProductSnapshotUpdateOneWithoutReviewsNestedInput
  }

  export type ProductReviewSampleUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    snapshotId?: NullableIntFieldUpdateOperationsInput | number | null
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewSampleUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    snapshotId?: NullableIntFieldUpdateOperationsInput | number | null
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAIAnalysisUpdateWithoutProductInput = {
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    snapshot?: ProductSnapshotUpdateOneWithoutAnalysesNestedInput
  }

  export type ProductAIAnalysisUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    snapshotId?: NullableIntFieldUpdateOperationsInput | number | null
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAIAnalysisUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    snapshotId?: NullableIntFieldUpdateOperationsInput | number | null
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompareItemUpdateWithoutProductInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    session?: CompareSessionUpdateOneRequiredWithoutItemsNestedInput
  }

  export type CompareItemUncheckedUpdateWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    compareSessionId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type CompareItemUncheckedUpdateManyWithoutProductInput = {
    id?: IntFieldUpdateOperationsInput | number
    compareSessionId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type ProductReviewSampleCreateManySnapshotInput = {
    id?: number
    productId: number
    platformReviewId?: string | null
    rating: number
    authorName?: string | null
    content: string
    scrapedAt?: Date | string
  }

  export type ProductAIAnalysisCreateManySnapshotInput = {
    id?: number
    productId: number
    worthItScore: number
    priceComment?: string | null
    summary?: string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: string | null
    createdAt?: Date | string
  }

  export type ProductReviewSampleUpdateWithoutSnapshotInput = {
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ProductReviewSampleUncheckedUpdateWithoutSnapshotInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductReviewSampleUncheckedUpdateManyWithoutSnapshotInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    platformReviewId?: NullableStringFieldUpdateOperationsInput | string | null
    rating?: IntFieldUpdateOperationsInput | number
    authorName?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    scrapedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAIAnalysisUpdateWithoutSnapshotInput = {
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: ProductUpdateOneRequiredWithoutAnalysesNestedInput
  }

  export type ProductAIAnalysisUncheckedUpdateWithoutSnapshotInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProductAIAnalysisUncheckedUpdateManyWithoutSnapshotInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    worthItScore?: IntFieldUpdateOperationsInput | number
    priceComment?: NullableStringFieldUpdateOperationsInput | string | null
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    pros?: NullableJsonNullValueInput | InputJsonValue
    cons?: NullableJsonNullValueInput | InputJsonValue
    modelName?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CompareItemCreateManySessionInput = {
    id?: number
    productId: number
    sortOrder?: number
  }

  export type CompareItemUpdateWithoutSessionInput = {
    sortOrder?: IntFieldUpdateOperationsInput | number
    product?: ProductUpdateOneRequiredWithoutCompareItemsNestedInput
  }

  export type CompareItemUncheckedUpdateWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
  }

  export type CompareItemUncheckedUpdateManyWithoutSessionInput = {
    id?: IntFieldUpdateOperationsInput | number
    productId?: IntFieldUpdateOperationsInput | number
    sortOrder?: IntFieldUpdateOperationsInput | number
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
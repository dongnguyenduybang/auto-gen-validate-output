/* eslint-disable */
/* tslint:disable */
// @ts-nocheck
/*
 * ---------------------------------------------------------------
 * ## THIS FILE WAS GENERATED VIA SWAGGER-TYPESCRIPT-API        ##
 * ##                                                           ##
 * ## AUTHOR: acacode                                           ##
 * ## SOURCE: https://github.com/acacode/swagger-typescript-api ##
 * ---------------------------------------------------------------
 */

/** @default "USER_BADGE_TYPE_DEFAULT" */
export enum V3UserBadgeTypeEnum {
  USER_BADGE_TYPE_DEFAULT = 0,
  USER_BADGE_TYPE_BLUE = 1,
  USER_BADGE_TYPE_GRAY = 2,
  USER_BADGE_TYPE_YELLOW = 3,
}

export interface ProtobufAny {
  "@type"?: string;
  [key: string]: any;
}

export interface RpcStatus {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: ProtobufAny[];
}

export interface V3DeleteMockedChannelsResponse {
  ok?: boolean;
  error?: V3Error;
}

export interface V3DeleteMockedUsersResponse {
  ok?: boolean;
  error?: V3Error;
}

export interface V3Error {
  /** @format int32 */
  code?: number;
  message?: string;
  details?: string[];
}

export interface V3GetTokensRequest {
  usernames?: string[];
}

export interface V3GetTokensResponse {
  ok?: boolean;
  data?: string[];
  error?: V3Error;
}

/** Mock channels */
export interface V3MockChannelsRequest {
  /**
   * The number of channels you want to create.
   * @format int64
   */
  quantity?: number;
  /** The channel name structure would look like: channelName = {prefix} {random}; */
  prefix?: string;
  /** List of userIds you want to add to this channel to create members */
  members?: string[];
  /**
   * Total number of messages you want to create initially for the channel
   * @format int64
   */
  totalMessages?: number;
  /**
   * Type channel create
   * 0: channel 1-n
   * 1: channel 1-1
   * 2: incoming message request
   * 3: outgoing message request
   * @format int64
   */
  typeChannel?: number;
}

export interface V3MockChannelsResponse {
  ok?: boolean;
  data?: V3MockedChannel[];
  error?: V3Error;
}

/** Mock friends */
export interface V3MockFriendsRequest {
  /** @format int64 */
  quantity?: number;
  /**
   * 0: Fake friend request
   * 1: Fake friend require
   * 2: Fake friend
   * @format int64
   */
  type?: number;
}

export interface V3MockFriendsResponse {
  ok?: boolean;
  /** List of userIds */
  data?: string[];
  error?: V3Error;
}

/** Mock message */
export interface V3MockMessagesRequest {
  workspaceId?: string;
  channelId?: string;
  /** @format int64 */
  quantity?: number;
}

export interface V3MockMessagesResponse {
  ok?: boolean;
  /** List of messageIds */
  data?: string[];
  error?: V3Error;
}

export interface V3MockUsersRequest {
  /**
   * The number of accounts you want to create.
   * @format int64
   */
  quantity?: number;
  /**
   * It is the prefix specifically assigned to each tester. EX: 'BO'
   * The account structure would look like: username = {prefix}{id};
   */
  prefix?: string;
  badge?: V3UserBadgeTypeEnum;
}

export interface V3MockUsersResponse {
  ok?: boolean;
  data?: V3MockedUser[];
  error?: V3Error;
}

export interface V3MockedChannel {
  channelId?: string;
  name?: string;
  ownerId?: string;
  /** List of userIds added to this channel */
  memberIds?: string[];
  messageIds?: string[];
}

export interface V3MockedUser {
  userId?: string;
  username?: string;
  token?: string;
  securityKey?: string;
  recoverKey?: string;
  badge?: V3UserBadgeTypeEnum;
}

export interface V3SetBadgeRequest {
  usernames?: string[];
  badge?: V3UserBadgeTypeEnum;
}

export interface V3SetBadgeResponse {
  ok?: boolean;
  error?: V3Error;
}

export interface DeleteMockedChannelsParams {
  workspaceId?: string;
  prefix?: string;
}

export interface DeleteMockedUsersParams {
  prefix?: string;
}

export type QueryParamsType = Record<string | number, any>;
export type ResponseFormat = keyof Omit<Body, "body" | "bodyUsed">;

export interface FullRequestParams extends Omit<RequestInit, "body"> {
  /** set parameter to `true` for call `securityWorker` for this request */
  secure?: boolean;
  /** request path */
  path: string;
  /** content type of request body */
  type?: ContentType;
  /** query params */
  query?: QueryParamsType;
  /** format of response (i.e. response.json() -> format: "json") */
  format?: ResponseFormat;
  /** request body */
  body?: unknown;
  /** base url */
  baseUrl?: string;
  /** request cancellation token */
  cancelToken?: CancelToken;
}

export type RequestParams = Omit<
  FullRequestParams,
  "body" | "method" | "query" | "path"
>;

export interface ApiConfig<SecurityDataType = unknown> {
  baseUrl?: string;
  baseApiParams?: Omit<RequestParams, "baseUrl" | "cancelToken" | "signal">;
  securityWorker?: (
    securityData: SecurityDataType | null,
  ) => Promise<RequestParams | void> | RequestParams | void;
  customFetch?: typeof fetch;
}

export interface HttpResponse<D extends unknown, E extends unknown = unknown>
  extends Response {
  data: D;
  error: E;
}

type CancelToken = Symbol | string | number;

export enum ContentType {
  Json = "application/json",
  JsonApi = "application/vnd.api+json",
  FormData = "multipart/form-data",
  UrlEncoded = "application/x-www-form-urlencoded",
  Text = "text/plain",
}

export class HttpClient<SecurityDataType = unknown> {
  public baseUrl: string = "";
  private securityData: SecurityDataType | null = null;
  private securityWorker?: ApiConfig<SecurityDataType>["securityWorker"];
  private abortControllers = new Map<CancelToken, AbortController>();
  private customFetch = (...fetchParams: Parameters<typeof fetch>) =>
    fetch(...fetchParams);

  private baseApiParams: RequestParams = {
    credentials: "same-origin",
    headers: {},
    redirect: "follow",
    referrerPolicy: "no-referrer",
  };

  constructor(apiConfig: ApiConfig<SecurityDataType> = {}) {
    Object.assign(this, apiConfig);
  }

  public setSecurityData = (data: SecurityDataType | null) => {
    this.securityData = data;
  };

  protected encodeQueryParam(key: string, value: any) {
    const encodedKey = encodeURIComponent(key);
    return `${encodedKey}=${encodeURIComponent(typeof value === "number" ? value : `${value}`)}`;
  }

  protected addQueryParam(query: QueryParamsType, key: string) {
    return this.encodeQueryParam(key, query[key]);
  }

  protected addArrayQueryParam(query: QueryParamsType, key: string) {
    const value = query[key];
    return value.map((v: any) => this.encodeQueryParam(key, v)).join("&");
  }

  protected toQueryString(rawQuery?: QueryParamsType): string {
    const query = rawQuery || {};
    const keys = Object.keys(query).filter(
      (key) => "undefined" !== typeof query[key],
    );
    return keys
      .map((key) =>
        Array.isArray(query[key])
          ? this.addArrayQueryParam(query, key)
          : this.addQueryParam(query, key),
      )
      .join("&");
  }

  protected addQueryParams(rawQuery?: QueryParamsType): string {
    const queryString = this.toQueryString(rawQuery);
    return queryString ? `?${queryString}` : "";
  }

  private contentFormatters: Record<ContentType, (input: any) => any> = {
    [ContentType.Json]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.JsonApi]: (input: any) =>
      input !== null && (typeof input === "object" || typeof input === "string")
        ? JSON.stringify(input)
        : input,
    [ContentType.Text]: (input: any) =>
      input !== null && typeof input !== "string"
        ? JSON.stringify(input)
        : input,
    [ContentType.FormData]: (input: any) =>
      Object.keys(input || {}).reduce((formData, key) => {
        const property = input[key];
        formData.append(
          key,
          property instanceof Blob
            ? property
            : typeof property === "object" && property !== null
              ? JSON.stringify(property)
              : `${property}`,
        );
        return formData;
      }, new FormData()),
    [ContentType.UrlEncoded]: (input: any) => this.toQueryString(input),
  };

  protected mergeRequestParams(
    params1: RequestParams,
    params2?: RequestParams,
  ): RequestParams {
    return {
      ...this.baseApiParams,
      ...params1,
      ...(params2 || {}),
      headers: {
        ...(this.baseApiParams.headers || {}),
        ...(params1.headers || {}),
        ...((params2 && params2.headers) || {}),
      },
    };
  }

  protected createAbortSignal = (
    cancelToken: CancelToken,
  ): AbortSignal | undefined => {
    if (this.abortControllers.has(cancelToken)) {
      const abortController = this.abortControllers.get(cancelToken);
      if (abortController) {
        return abortController.signal;
      }
      return void 0;
    }

    const abortController = new AbortController();
    this.abortControllers.set(cancelToken, abortController);
    return abortController.signal;
  };

  public abortRequest = (cancelToken: CancelToken) => {
    const abortController = this.abortControllers.get(cancelToken);

    if (abortController) {
      abortController.abort();
      this.abortControllers.delete(cancelToken);
    }
  };

  public request = async <T = any, E = any>({
    body,
    secure,
    path,
    type,
    query,
    format,
    baseUrl,
    cancelToken,
    ...params
  }: FullRequestParams): Promise<HttpResponse<T, E>> => {
    const secureParams =
      ((typeof secure === "boolean" ? secure : this.baseApiParams.secure) &&
        this.securityWorker &&
        (await this.securityWorker(this.securityData))) ||
      {};
    const requestParams = this.mergeRequestParams(params, secureParams);
    const queryString = query && this.toQueryString(query);
    const payloadFormatter = this.contentFormatters[type || ContentType.Json];
    const responseFormat = format || requestParams.format;

    return this.customFetch(
      `${baseUrl || this.baseUrl || ""}${path}${queryString ? `?${queryString}` : ""}`,
      {
        ...requestParams,
        headers: {
          ...(requestParams.headers || {}),
          ...(type && type !== ContentType.FormData
            ? { "Content-Type": type }
            : {}),
        },
        signal:
          (cancelToken
            ? this.createAbortSignal(cancelToken)
            : requestParams.signal) || null,
        body:
          typeof body === "undefined" || body === null
            ? null
            : payloadFormatter(body),
      },
    ).then(async (response) => {
      const r = response.clone() as HttpResponse<T, E>;
      r.data = null as unknown as T;
      r.error = null as unknown as E;

      const data = !responseFormat
        ? r
        : await response[responseFormat]()
            .then((data) => {
              if (r.ok) {
                r.data = data;
              } else {
                r.error = data;
              }
              return r;
            })
            .catch((e) => {
              r.error = e;
              return r;
            });

      if (cancelToken) {
        this.abortControllers.delete(cancelToken);
      }

      if (!response.ok) throw data;
      return data;
    });
  };
}

/**
 * @title halome/internal/faker/v3/services/faker.proto
 * @version version not set
 */
export class fakerHttpClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  internalFaker = {
    /**
     * No description
     *
     * @tags InternalFakerService
     * @name DeleteMockedChannels
     * @summary Method to support deleting multiple channels based on a prefix.
     * @request DELETE:/InternalFaker/DeleteMockedChannels
     */
    deleteMockedChannels: (
      query: DeleteMockedChannelsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteMockedChannelsResponse, RpcStatus>({
        path: `/InternalFaker/DeleteMockedChannels`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags InternalFakerService
 * @name DeleteMockedUsers
 * @summary Method to support deleting multiple user accounts based on a prefix, facilitating data cleanup during testing.
The method is not supported in the production environment.
 * @request DELETE:/InternalFaker/DeleteMockedUsers
 */
    deleteMockedUsers: (
      query: DeleteMockedUsersParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteMockedUsersResponse, RpcStatus>({
        path: `/InternalFaker/DeleteMockedUsers`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InternalFakerService
     * @name GetTokens
     * @request POST:/InternalFaker/GetTokens
     */
    getTokens: (body: V3GetTokensRequest, params: RequestParams = {}) =>
      this.http.request<V3GetTokensResponse, RpcStatus>({
        path: `/InternalFaker/GetTokens`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags InternalFakerService
 * @name MockChannels
 * @summary Method to support creating multiple channels for testing purposes,
as well as adding members and creating sample messages
 * @request POST:/InternalFaker/MockChannels
 */
    mockChannels: (body: V3MockChannelsRequest, params: RequestParams = {}) =>
      this.http.request<V3MockChannelsResponse, RpcStatus>({
        path: `/InternalFaker/MockChannels`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InternalFakerService
     * @name MockFriends
     * @summary Method supports creating multiple friends.
     * @request POST:/InternalFaker/MockFriends
     */
    mockFriends: (body: V3MockFriendsRequest, params: RequestParams = {}) =>
      this.http.request<V3MockFriendsResponse, RpcStatus>({
        path: `/InternalFaker/MockFriends`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InternalFakerService
     * @name MockMessages
     * @summary Method supports creating multiple messages including message, image, link...
     * @request POST:/InternalFaker/MockMessages
     */
    mockMessages: (body: V3MockMessagesRequest, params: RequestParams = {}) =>
      this.http.request<V3MockMessagesResponse, RpcStatus>({
        path: `/InternalFaker/MockMessages`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
 * No description
 *
 * @tags InternalFakerService
 * @name MockUsers
 * @summary Method to support creating multiple user accounts for testing purposes,
Accounts created using this method cannot be logged in.
The method is not supported in the production environment.
 * @request POST:/InternalFaker/MockUsers
 */
    mockUsers: (body: V3MockUsersRequest, params: RequestParams = {}) =>
      this.http.request<V3MockUsersResponse, RpcStatus>({
        path: `/InternalFaker/MockUsers`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @tags InternalFakerService
     * @name SetBadge
     * @request POST:/InternalFaker/SetBadge
     */
    setBadge: (body: V3SetBadgeRequest, params: RequestParams = {}) =>
      this.http.request<V3SetBadgeResponse, RpcStatus>({
        path: `/InternalFaker/SetBadge`,
        method: "POST",
        body: body,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}

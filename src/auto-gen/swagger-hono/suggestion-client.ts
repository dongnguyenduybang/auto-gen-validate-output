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

export enum V3UserBadgeTypeEnum {
  USER_BADGE_TYPE_DEFAULT = 0,
  USER_BADGE_TYPE_BLUE = 1,
  USER_BADGE_TYPE_GRAY = 2,
  USER_BADGE_TYPE_YELLOW = 3,
}

export enum V3UserAvatarTypeEnum {
  USER_AVATAR_TYPE_ENUM_UNSPECIFIED = 0,
  USER_AVATAR_TYPE_ENUM_PHOTO = 1,
  USER_AVATAR_TYPE_ENUM_VIDEO = 2,
}

export enum V3SuggestionTypeEnum {
  SUGGESTION_TYPE_ENUM_CHANNEL = 1,
  SUGGESTION_TYPE_ENUM_FRIEND = 2,
}

export enum V3SortTypeEnum {
  COMMON_CHANNEL = 1,
  JOINED_TIME = 2,
}

export interface V3ListSuggestedFriendsByTypeRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: string;
  /** The last audit log identify of this page will be the next_page_token of the next page */
  nextPageToken?: string;
  /** The first audit log identify of this page will be the prev_page_token of the next page */
  prevPageToken?: string;
  /** The type of list suggestion request */
  suggestionType: V3SuggestionTypeEnum;
  /** The type of sort */
  sort?: V3SortTypeEnum;
}

export interface V3ListSuggestedFriendsRequest {
  /** It is the limit of the number of records returned in one request */
  limit?: string;
  /** The last audit log identify of this page will be the next_page_token of the next page */
  nextPageToken?: string;
  /** The first audit log identify of this page will be the prev_page_token of the next page */
  prevPageToken?: string;
}

export type V3PaginationRequest = any & {
  /** It is the limit of the number of records returned in one request */
  limit?: string;
  /** The last audit log identify of this page will be the next_page_token of the next page */
  nextPageToken?: string;
  /** The first audit log identify of this page will be the prev_page_token of the next page */
  prevPageToken?: string;
};

export interface V3UserMetaDataRequest {
  /**
   * @format isULID
   * @minLength 1
   */
  "x-user-id": string;
  /** @minLength 1 */
  "x-country-code": string;
  /**
   * @format isJSON
   * @minLength 1
   */
  "x-geo-data": string;
  /** @minLength 1 */
  "x-device-id": string;
  [key: string]: any;
}

export interface V3ErrorResponse {
  /** The error code */
  code: number;
  /** The error message */
  message: string;
  /** Detail about the error */
  details: string[];
}

export interface V3ListSuggestedFriendsResponse {
  /** The status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The list suggestion data */
  suggestions?: V3Suggestions;
}

export interface V3ListSuggestedFriendsByTypeResponse {
  /** The status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The list friend's data */
  data?: V3SuggestedFriend[];
  /**  Data pagination information */
  paging?: V3Paging;
}

export interface V3Paging {
  /** Returns true if there is information on the next page. */
  hasNext?: boolean;
  /** Returns true if there is information on the prev page. */
  hasPrev?: boolean;
  /** is the token to send a request to get the next page's data. */
  nextPageToken?: string;
  /** is the token to send a request to get previous page's data. */
  prevPageToken?: string;
}

export interface V3SuggestedFriend {
  /** The user identify */
  userId?: string;
  /** The user display name */
  displayName?: string;
  /** The username */
  username?: string;
  /** The user avatar */
  avatar?: string;
  /** The video avatar */
  videoAvatar?: string;
  /** The type of user avatar */
  avatarType?: V3UserAvatarTypeEnum;
  /** The decorated avatar */
  decoratedAvatar?: string;
  /** The user badge type */
  userBadgeType?: V3UserBadgeTypeEnum;
}

export interface V3Suggestions {
  /** The list friend's data suggest by phone */
  phones?: V3SuggestedFriend[];
  /** The list friend's data suggest by channel */
  channels?: V3SuggestedFriend[];
  /** The list friend's data suggest by friend */
  friends?: V3SuggestedFriend[];
}

export interface ListSuggestedFriendsParams {
  /** It is the limit of the number of records returned in one request */
  limit?: string;
  /** The last audit log identify of this page will be the next_page_token of the next page */
  nextPageToken?: string;
  /** The first audit log identify of this page will be the prev_page_token of the next page */
  prevPageToken?: string;
}

export interface ListSuggestedFriendsByTypeParams {
  /** It is the limit of the number of records returned in one request */
  limit?: string;
  /** The last audit log identify of this page will be the next_page_token of the next page */
  nextPageToken?: string;
  /** The first audit log identify of this page will be the prev_page_token of the next page */
  prevPageToken?: string;
  /** The type of list suggestion request */
  suggestionType?: V3SuggestionTypeEnum;
  /** The type of sort */
  sort?: V3SortTypeEnum;
}

export namespace Suggestion {
  /**
   * No description
   * @name ListSuggestedFriends
   * @request GET:/Suggestion/ListSuggestedFriends
   */
  export namespace ListSuggestedFriends {
    export type RequestParams = {};
    export type RequestQuery = {
      /** It is the limit of the number of records returned in one request */
      limit?: string;
      /** The last audit log identify of this page will be the next_page_token of the next page */
      nextPageToken?: string;
      /** The first audit log identify of this page will be the prev_page_token of the next page */
      prevPageToken?: string;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = V3ListSuggestedFriendsResponse;
  }

  /**
   * No description
   * @name ListSuggestedFriendsByType
   * @request GET:/Suggestion/ListSuggestedFriendsByType
   */
  export namespace ListSuggestedFriendsByType {
    export type RequestParams = {};
    export type RequestQuery = {
      /** It is the limit of the number of records returned in one request */
      limit?: string;
      /** The last audit log identify of this page will be the next_page_token of the next page */
      nextPageToken?: string;
      /** The first audit log identify of this page will be the prev_page_token of the next page */
      prevPageToken?: string;
      /** The type of list suggestion request */
      suggestionType?: V3SuggestionTypeEnum;
      /** The type of sort */
      sort?: V3SortTypeEnum;
    };
    export type RequestBody = never;
    export type RequestHeaders = {};
    export type ResponseBody = V3ListSuggestedFriendsByTypeResponse;
  }
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
 * @title Suggestion Service
 * @version 1.0.0
 *
 * Suggestion Service Ajv Decorator Swagger
 */
export class suggestionHttpClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  suggestion = {
    /**
     * No description
     *
     * @name ListSuggestedFriends
     * @request GET:/Suggestion/ListSuggestedFriends
     */
    listSuggestedFriends: (
      query: ListSuggestedFriendsParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListSuggestedFriendsResponse, any>({
        path: `/Suggestion/ListSuggestedFriends`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ListSuggestedFriendsByType
     * @request GET:/Suggestion/ListSuggestedFriendsByType
     */
    listSuggestedFriendsByType: (
      query: ListSuggestedFriendsByTypeParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ListSuggestedFriendsByTypeResponse, any>({
        path: `/Suggestion/ListSuggestedFriendsByType`,
        method: "GET",
        query: query,
        format: "json",
        ...params,
      }),
  };
}

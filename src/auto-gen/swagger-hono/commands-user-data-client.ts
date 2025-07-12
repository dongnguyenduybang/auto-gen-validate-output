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

export enum V3UserTypeEnum {
  USER_TYPE_ENUM_DEFAULT = 0,
  USER_TYPE_ENUM_BOT = 1,
  USER_TYPE_ENUM_GHOST = 2,
}

export enum V3UserStatusExpireAfterTimeEnum {
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_UNSPECIFIED = 0,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_1_HOUR = 1,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_4_HOUR = 2,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_8_HOUR = 3,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_AFTER_24_HOUR = 4,
  USER_STATUS_EXPIRES_AFTER_TIME_ENUM_NEVER = 99,
}

export enum V3UserScopeEnum {
  UNSPECIFIED = 0,
  EVERYBODY = 1,
  ONLY_FRIENDS = 2,
  NO_BODY = 3,
}

export enum V3UserAvatarTypeEnum {
  USER_AVATAR_TYPE_ENUM_UNSPECIFIED = 0,
  USER_AVATAR_TYPE_ENUM_PHOTO = 1,
  USER_AVATAR_TYPE_ENUM_VIDEO = 2,
}

export enum V3ReportCategory {
  REPORT_CATEGORY_UNSPECIFIED = 0,
  REPORT_CATEGORY_HARASSMENT = 1,
  REPORT_CATEGORY_SUICIDE_OR_SELF_INJURY = 2,
  REPORT_CATEGORY_PRETENDING_TO_BE_SOMEONE = 3,
  REPORT_CATEGORY_SHARING_INAPPROPRIATE_CONTENT = 4,
  REPORT_CATEGORY_HATE_SPEECH = 5,
  REPORT_CATEGORY_UNAUTHORIZED_SALES = 6,
  REPORT_CATEGORY_SCAMS = 7,
  REPORT_CATEGORY_SPAM = 8,
  REPORT_CATEGORY_COPYRIGHT = 9,
  REPORT_CATEGORY_OTHER = 20,
}

export enum V3PretendingTo {
  PRETENDING_TO_UNSPECIFIED = 0,
  PRETENDING_TO_ME = 1,
  PRETENDING_TO_FRIEND = 2,
  PRETENDING_TO_CELEBRITY = 3,
}

export enum V3MediaPermissionSettingEnum {
  MEDIA_PERMISSION_SETTING_ENUM_ALWAYS_ASK = 0,
  MEDIA_PERMISSION_SETTING_ENUM_ALLOW = 1,
  MEDIA_PERMISSION_SETTING_ENUM_NOT_ALLOW = 2,
}

export interface V3RingbackToneCreateRequest {
  /** Name of ringback tone */
  name: string;
  /**
   * Audio URL path
   * @format isURL
   * @minLength 1
   */
  ringbackTonePath: string;
}

export interface V3RingbackToneDeleteRequest {
  /**
   * The ringback tone identify
   * @format isULID
   * @minLength 1
   */
  ringbackToneId: string;
}

export interface V3RingbackToneRenameRequest {
  /**
   * The ringback tone identify
   * @format isULID
   * @minLength 1
   */
  ringbackToneId: string;
  /** The ringback tone name */
  name: string;
}

export interface V3SetRingbackToneRequest {
  /**
   * The ringback tone identify
   * @format isULID
   * @minLength 1
   */
  ringbackToneId: string;
}

export interface V3SessionMetadataRequest {
  /**
   * @format isULID
   * @minLength 1
   */
  "x-user-id": string;
  /** @minLength 1 */
  "x-device-id": string;
  [key: string]: any;
}

export interface V3CreateUserAvatarFrameRequest {
  /**
   * Avatar frame data
   * @format isURL
   * @minLength 1
   */
  avatarFramePath: string;
}

export interface V3DeleteUserAvatarFrameRequest {
  /**
   * Avatar frame identify
   * @format isULID
   * @minLength 1
   */
  avatarFrameId: string;
}

export type V3RemoveDecoratedAvatarRequest = object;

export interface V3UploadDecoratedAvatarRequest {
  /**
   * Avatar frame identify
   * @format isULID
   * @minLength 1
   */
  avatarFrameId: string;
  /**
   * The URL path
   * @format isURL
   * @minLength 1
   */
  decoratedAvatarPath: string;
}

export interface V3DecodeUserConnectLinkRequest {
  /**
   * The user connect link to decode
   * @format isURL
   * @minLength 1
   */
  link: string;
}

export interface V3GenerateUserConnectLinkRequest {
  /**
   * The generate user connect link
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3AddCoverPhotoRequest {
  /**
   * Photo URL path
   * @format isURL
   * @minLength 1
   */
  coverPath: string;
}

export type V3AddUserStatusRequest = {
  /** The content of user status */
  content?: string | null;
  /**
   * The emoji status
   * @format isEmoji
   */
  status?: string | null;
  /** The expires time */
  expireAfterTime: V3UserStatusExpireAfterTimeEnum;
};

export type V3ClearUserVisitedProfileNotificationsRequest = object;

export type V3DeleteCoverPhotoRequest = object;

export type V3DeleteUserAvatarRequest = object;

export type V3DeleteUserStatusRequest = object;

export type V3DeleteUserVideoAvatarRequest = object;

export interface V3DeleteUserVisitedProfileRequest {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3UpdateCoverPhotoRequest {
  /**
   * The photo URL path
   * @format isURL
   * @minLength 1
   */
  coverPath: string;
}

export interface V3UpdateUserAvatarRequest {
  /**
   * The avatar URL path
   * @format isURL
   * @minLength 1
   */
  avatarPath: string;
}

export interface V3UpdateUserDisplayNameRequest {
  /** The new display name to set for the user */
  displayName?: string | null;
}

export interface V3UpdateUserEmailRequest {
  /**
   *  The email of user
   * @format isEmail
   * @minLength 1
   */
  email: string;
}

export interface V3UpdateUserPhoneRequest {
  /**
   * The phone number of user
   * @format isPhone
   * @minLength 1
   */
  phoneNumber: string;
}

export interface V3UpdateUserStatusRequest {
  /** The content of user status */
  content?: string | null;
  /** The emoji status */
  status?: string | null;
}

export interface V3UpdateUserVideoAvatarRequest {
  /**
   * The video avatar URL path
   * @format isURL
   * @minLength 1
   */
  avatarPath: string;
}

export interface V3VisitedProfileRequest {
  /**
   * The user identify whom visited
   * @format isULID
   * @minLength 1
   */
  userId: string;
}

export interface V3ReportUserRequestRequest {
  /**
   * The user identify to report
   * @format isULID
   * @minLength 1
   */
  userId: string;
  /** The report category */
  reportCategory: V3ReportCategory;
  /** The type of pretending to */
  pretendingTo?: V3PretendingTo;
  /** The reason for report */
  reportReason?: string;
}

export interface V3BlockUserRequest {
  /**
   * The user identify of user target for block
   * @format isULID
   * @minLength 1
   */
  targetUserId: string;
}

export interface V3UnblockUserRequest {
  /**
   * The user identify of user target for unblock
   * @format isULID
   * @minLength 1
   */
  targetUserId: string;
}

export interface V3UpdateMediaPermissionSettingRequest {
  /** Media sharing permission */
  permissionType: V3MediaPermissionSettingEnum;
}

export interface V3UpdateRecoveryCodeSettingRequest {
  /** Recovery code setting */
  enable: boolean;
  /** User identify */
  userId?: string;
}

export interface V3UpdateSmartOtpSettingRequest {
  /** Smart OTP setting */
  enable: boolean;
}

export interface V3UpdateUserScopeForCallRequest {
  /** The scope of user for update call case */
  userScope: V3UserScopeEnum;
}

export interface V3UpdateUserScopeForMessageRequest {
  /** The scope of user for update message case */
  userScope: V3UserScopeEnum;
}

export interface V3RingbackToneCreateResponse {
  /** The status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3RingbackToneData {
  /** The ringback tone identify */
  ringbackToneId: string;
  /** The ringback tone path file */
  ringbackTonePath: string;
  /** The name of ringback tone */
  name: string;
  /** Is default */
  isDefault: boolean;
  /** Is active */
  isActive: boolean;
  /** Create time */
  createTime: string;
  /** Update time */
  updateTime: string;
}

export interface V3RingbackToneDeleteResponse {
  /** The status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error: V3ErrorResponse;
}

export interface V3RingbackToneRenameResponse {
  /** The status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The ringback tone response */
  data?: V3RingbackToneData;
}

export interface V3SetRingbackToneResponse {
  /** The status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The ringback tone response */
  data?: V3RingbackToneData;
}

export interface V3RemoveDecoratedAvatarResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UploadDecoratedAvatarResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The avatar frame data */
  data?: V3AvatarFrameDecoratedData;
}

export interface V3DeleteUserAvatarFrameResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The avatar frame data */
  data?: V3AvatarFrameData;
}

export interface V3AvatarFrameData {
  /**
   * The avatar frame identify
   * @minLength 1
   */
  avatarFrameId: string;
  /**
   * The avatar frame path
   * @minLength 1
   */
  avatarFramePath: string;
  /** Is default avatar frame */
  isDefault: boolean;
  /** Is active avatar frame */
  isActive: boolean;
  /** The create time */
  createTime: string;
  /** The update time */
  updateTime: string;
}

export interface V3CreateUserAvatarFrameResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The avatar frame data */
  data?: V3AvatarFrameDecoratedData;
}

export interface V3AvatarFrameDecoratedData {
  /** The avatar frame data */
  avatarFrame: V3AvatarFrameData;
  /** The decorated avatar URL */
  decoratedAvatar?: string;
  /** The original decorated avatar */
  originalDecoratedAvatar: string;
}

export interface V3DecodeUserConnectLinkResponseData {
  /** The decoded user connect link */
  userId: string;
}

export interface V3DecodeUserConnectLinkResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The link of user connect */
  data?: V3DecodeUserConnectLinkResponseData;
}

export interface V3GenerateUserConnectLinkResponseData {
  /** User connected link */
  link?: string;
}

export interface V3GenerateUserConnectLinkResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The link of user connect */
  data?: V3GenerateUserConnectLinkResponseData;
}

export interface V3AddCoverPhotoResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The cover url */
  data?: V3CoverData;
}

export interface V3AddUserStatusResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The status data */
  data?: V3UserStatusData;
}

export interface V3ClearUserVisitedProfileNotificationsResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteCoverPhotoResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteUserAvatarResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteUserStatusResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteUserVideoAvatarResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3DeleteUserVisitedProfileResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateCoverPhotoResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The cover url */
  data?: V3CoverData;
}

export interface V3UpdateUserAvatarData {
  /** The avatar image to set for user */
  avatar: string;
}

export interface V3UpdateUserAvatarResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The avatar's data */
  data?: V3UpdateUserAvatarData;
}

export interface V3UpdateUserDisplayNameResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateUserEmailResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateUserPhoneResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateUserStatusResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The emoji status */
  data?: V3UserStatusData;
}

export interface V3UpdateUserVideoAvatarData {
  /** The avatar image to set for user */
  avatar: string;
}

export interface V3UpdateUserVideoAvatarResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
  /** The avatar's data */
  data?: V3UpdateUserVideoAvatarData;
}

export interface V3VisitedProfileResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UserStatusData {
  /** The content of user status */
  content: string;
  /** The emoji status */
  status: string;
  /** The expires time after create */
  expireAfterTime: V3UserStatusExpireAfterTimeEnum;
  /** The create time */
  createTime: string;
  /** The update time */
  updateTime: string;
  /** The end time (create time + expires time) */
  endTime: string;
}

export interface V3CoverData {
  /** The cover photo path */
  cover: string;
}

export interface V3ReportUserRequestResponse {
  /** Status response */
  ok: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3ErrorResponse {
  /** The error code */
  code: number;
  /** The error message */
  message: string;
  /** Detail about the error */
  details: string[];
}

export interface V3BlockUserResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UnblockUserResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateMediaPermissionSettingResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateRecoveryCodeSettingResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateSmartOtpSettingResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateUserScopeForCallResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface V3UpdateUserScopeForMessageResponse {
  /** Status response */
  ok?: boolean;
  /** It only has a value when 'ok' is false and includes detailed error information and an error code. */
  error?: V3ErrorResponse;
}

export interface RingbackToneDeleteParams {
  /**
   * The ringback tone identify
   * @format isULID
   * @minLength 1
   */
  ringbackToneId?: string;
}

export interface DeleteAvatarFrameParams {
  /**
   * Avatar frame identify
   * @format isULID
   * @minLength 1
   */
  avatarFrameId?: string;
}

export interface GenerateUserConnectLinkParams {
  /**
   * The generate user connect link
   * @format isULID
   * @minLength 1
   */
  userId?: string;
}

export interface DeleteUserVisitedProfileParams {
  /**
   * The user identify
   * @format isULID
   * @minLength 1
   */
  userId?: string;
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
 * @title Commands User Data
 * @version 1.0.0
 *
 * Command user data ajv decorator swagger
 */
export class commandsUserDataHttpClient<SecurityDataType extends unknown> {
  http: HttpClient<SecurityDataType>;

  constructor(http: HttpClient<SecurityDataType>) {
    this.http = http;
  }

  ringbackTone = {
    /**
     * No description
     *
     * @name RingbackToneCreate
     * @request POST:/RingbackTone/RingbackToneCreate
     */
    ringbackToneCreate: (
      data: V3RingbackToneCreateRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RingbackToneCreateResponse, any>({
        path: `/RingbackTone/RingbackToneCreate`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RingbackToneRename
     * @request PUT:/RingbackTone/RingbackToneRename
     */
    ringbackToneRename: (
      data: V3RingbackToneRenameRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RingbackToneRenameResponse, any>({
        path: `/RingbackTone/RingbackToneRename`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name SetRingbackTone
     * @request PUT:/RingbackTone/SetRingbackTone
     */
    setRingbackTone: (
      data: V3SetRingbackToneRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3SetRingbackToneResponse, any>({
        path: `/RingbackTone/SetRingbackTone`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RingbackToneDelete
     * @request DELETE:/RingbackTone/RingbackToneDelete
     */
    ringbackToneDelete: (
      query: RingbackToneDeleteParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3RingbackToneDeleteResponse, any>({
        path: `/RingbackTone/RingbackToneDelete`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),
  };
  avatarFrame = {
    /**
     * No description
     *
     * @name CreateAvatarFrame
     * @request POST:/AvatarFrame/CreateAvatarFrame
     */
    createAvatarFrame: (
      data: V3CreateUserAvatarFrameRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3CreateUserAvatarFrameResponse, any>({
        path: `/AvatarFrame/CreateAvatarFrame`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteAvatarFrame
     * @request DELETE:/AvatarFrame/DeleteAvatarFrame
     */
    deleteAvatarFrame: (
      query: DeleteAvatarFrameParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteUserAvatarFrameResponse, any>({
        path: `/AvatarFrame/DeleteAvatarFrame`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UploadDecoratedAvatar
     * @request POST:/AvatarFrame/UploadDecoratedAvatar
     */
    uploadDecoratedAvatar: (
      data: V3UploadDecoratedAvatarRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UploadDecoratedAvatarResponse, any>({
        path: `/AvatarFrame/UploadDecoratedAvatar`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name RemoveDecoratedAvatar
     * @request DELETE:/AvatarFrame/RemoveDecoratedAvatar
     */
    removeDecoratedAvatar: (params: RequestParams = {}) =>
      this.http.request<V3RemoveDecoratedAvatarResponse, any>({
        path: `/AvatarFrame/RemoveDecoratedAvatar`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  userConnect = {
    /**
     * No description
     *
     * @name GenerateUserConnectLink
     * @request POST:/UserConnect/GenerateUserConnectLink
     */
    generateUserConnectLink: (
      query: GenerateUserConnectLinkParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3GenerateUserConnectLinkResponse, any>({
        path: `/UserConnect/GenerateUserConnectLink`,
        method: "POST",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DecodeUserConnectLink
     * @request POST:/UserConnect/DecodeUserConnectLink
     */
    decodeUserConnectLink: (
      data: V3DecodeUserConnectLinkRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DecodeUserConnectLinkResponse, any>({
        path: `/UserConnect/DecodeUserConnectLink`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  userReport = {
    /**
     * No description
     *
     * @name ReportUser
     * @request POST:/UserReport/ReportUser
     */
    reportUser: (
      data: V3ReportUserRequestRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3ReportUserRequestResponse, any>({
        path: `/UserReport/ReportUser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
  userProfile = {
    /**
     * No description
     *
     * @name AddCoverPhoto
     * @request POST:/UserProfile/AddCoverPhoto
     */
    addCoverPhoto: (data: V3AddCoverPhotoRequest, params: RequestParams = {}) =>
      this.http.request<V3AddCoverPhotoResponse, any>({
        path: `/UserProfile/AddCoverPhoto`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateCoverPhoto
     * @request PUT:/UserProfile/UpdateCoverPhoto
     */
    updateCoverPhoto: (
      data: V3UpdateCoverPhotoRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateCoverPhotoResponse, any>({
        path: `/UserProfile/UpdateCoverPhoto`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteCoverPhoto
     * @request DELETE:/UserProfile/DeleteCoverPhoto
     */
    deleteCoverPhoto: (params: RequestParams = {}) =>
      this.http.request<V3DeleteCoverPhotoResponse, any>({
        path: `/UserProfile/DeleteCoverPhoto`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name AddUserStatus
     * @request POST:/UserProfile/AddUserStatus
     */
    addUserStatus: (data: V3AddUserStatusRequest, params: RequestParams = {}) =>
      this.http.request<V3AddUserStatusResponse, any>({
        path: `/UserProfile/AddUserStatus`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateUserStatus
     * @request PUT:/UserProfile/UpdateUserStatus
     */
    updateUserStatus: (
      data: V3UpdateUserStatusRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateUserStatusResponse, any>({
        path: `/UserProfile/UpdateUserStatus`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteUserStatus
     * @request DELETE:/UserProfile/DeleteUserStatus
     */
    deleteUserStatus: (params: RequestParams = {}) =>
      this.http.request<V3DeleteUserStatusResponse, any>({
        path: `/UserProfile/DeleteUserStatus`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateUserDisplayName
     * @request PUT:/UserProfile/UpdateUserDisplayName
     */
    updateUserDisplayName: (
      data: V3UpdateUserDisplayNameRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateUserDisplayNameResponse, any>({
        path: `/UserProfile/UpdateUserDisplayName`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateUserAvatar
     * @request PUT:/UserProfile/UpdateUserAvatar
     */
    updateUserAvatar: (
      data: V3UpdateUserAvatarRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateUserAvatarResponse, any>({
        path: `/UserProfile/UpdateUserAvatar`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateUserVideoAvatar
     * @request PUT:/UserProfile/UpdateUserVideoAvatar
     */
    updateUserVideoAvatar: (
      data: V3UpdateUserVideoAvatarRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateUserVideoAvatarResponse, any>({
        path: `/UserProfile/UpdateUserVideoAvatar`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateUserEmail
     * @request PUT:/UserProfile/UpdateUserEmail
     */
    updateUserEmail: (
      data: V3UpdateUserEmailRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateUserEmailResponse, any>({
        path: `/UserProfile/UpdateUserEmail`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateUserPhone
     * @request PUT:/UserProfile/UpdateUserPhone
     */
    updateUserPhone: (
      data: V3UpdateUserPhoneRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateUserPhoneResponse, any>({
        path: `/UserProfile/UpdateUserPhone`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name VisitedProfile
     * @request POST:/UserProfile/VisitedProfile
     */
    visitedProfile: (
      data: V3VisitedProfileRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3VisitedProfileResponse, any>({
        path: `/UserProfile/VisitedProfile`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name ClearUserVisitedProfileNotifications
     * @request DELETE:/UserProfile/ClearUserVisitedProfileNotifications
     */
    clearUserVisitedProfileNotifications: (params: RequestParams = {}) =>
      this.http.request<V3ClearUserVisitedProfileNotificationsResponse, any>({
        path: `/UserProfile/ClearUserVisitedProfileNotifications`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteUserVisitedProfile
     * @request DELETE:/UserProfile/DeleteUserVisitedProfile
     */
    deleteUserVisitedProfile: (
      query: DeleteUserVisitedProfileParams,
      params: RequestParams = {},
    ) =>
      this.http.request<V3DeleteUserVisitedProfileResponse, any>({
        path: `/UserProfile/DeleteUserVisitedProfile`,
        method: "DELETE",
        query: query,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteUserAvatar
     * @request DELETE:/UserProfile/DeleteUserAvatar
     */
    deleteUserAvatar: (params: RequestParams = {}) =>
      this.http.request<V3DeleteUserAvatarResponse, any>({
        path: `/UserProfile/DeleteUserAvatar`,
        method: "DELETE",
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name DeleteUserVideoAvatar
     * @request DELETE:/UserProfile/DeleteUserVideoAvatar
     */
    deleteUserVideoAvatar: (params: RequestParams = {}) =>
      this.http.request<V3DeleteUserVideoAvatarResponse, any>({
        path: `/UserProfile/DeleteUserVideoAvatar`,
        method: "DELETE",
        format: "json",
        ...params,
      }),
  };
  userSetting = {
    /**
     * No description
     *
     * @name BlockUser
     * @request POST:/UserSetting/BlockUser
     */
    blockUser: (data: V3BlockUserRequest, params: RequestParams = {}) =>
      this.http.request<V3BlockUserResponse, any>({
        path: `/UserSetting/BlockUser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UnblockUser
     * @request POST:/UserSetting/UnblockUser
     */
    unblockUser: (data: V3UnblockUserRequest, params: RequestParams = {}) =>
      this.http.request<V3UnblockUserResponse, any>({
        path: `/UserSetting/UnblockUser`,
        method: "POST",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateMediaPermissionSetting
     * @request PUT:/UserSetting/UpdateMediaPermissionSetting
     */
    updateMediaPermissionSetting: (
      data: V3UpdateMediaPermissionSettingRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateMediaPermissionSettingResponse, any>({
        path: `/UserSetting/UpdateMediaPermissionSetting`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateRecoveryCodeSetting
     * @request PUT:/UserSetting/UpdateRecoveryCodeSetting
     */
    updateRecoveryCodeSetting: (
      data: V3UpdateRecoveryCodeSettingRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateRecoveryCodeSettingResponse, any>({
        path: `/UserSetting/UpdateRecoveryCodeSetting`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateUserScopeForCall
     * @request PUT:/UserSetting/UpdateUserScopeForCall
     */
    updateUserScopeForCall: (
      data: V3UpdateUserScopeForCallRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateUserScopeForCallResponse, any>({
        path: `/UserSetting/UpdateUserScopeForCall`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateUserScopeForMessage
     * @request PUT:/UserSetting/UpdateUserScopeForMessage
     */
    updateUserScopeForMessage: (
      data: V3UpdateUserScopeForMessageRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateUserScopeForMessageResponse, any>({
        path: `/UserSetting/UpdateUserScopeForMessage`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),

    /**
     * No description
     *
     * @name UpdateSmartOtpSetting
     * @request PUT:/UserSetting/UpdateSmartOtpSetting
     */
    updateSmartOtpSetting: (
      data: V3UpdateSmartOtpSettingRequest,
      params: RequestParams = {},
    ) =>
      this.http.request<V3UpdateSmartOtpSettingResponse, any>({
        path: `/UserSetting/UpdateSmartOtpSetting`,
        method: "PUT",
        body: data,
        type: ContentType.Json,
        format: "json",
        ...params,
      }),
  };
}

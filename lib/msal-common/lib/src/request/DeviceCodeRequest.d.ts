import { DeviceCodeResponse } from "../response/DeviceCodeResponse";
import { BaseAuthRequest } from "./BaseAuthRequest";
/**
 * Parameters for Oauth2 device code flow.
 * - scopes                     - A space-separated array of scopes for the same resource.
 * - authority:                 - URL of the authority, the security token service (STS) from which MSAL will acquire tokens. If authority is set on client application object, this will override that value. Overriding the value will cause for authority validation to happen each time. If the same authority will be used for all request, set on the application object instead of the requests.
 * - correlationId              - Unique GUID set per request to trace a request end-to-end for telemetry purposes.
 * - deviceCodeCallback         - Callback containing device code response. Message should be shown to end user. End user can then navigate to the verification_uri, input the user_code, and input credentials.
 * - cancel                     - Boolean to cancel polling of device code endpoint. While the user authenticates on a separate device, MSAL polls the the token endpoint of security token service for the interval specified in the device code response (usually 15 minutes). To stop polling and cancel the request, set cancel=true.
 */
export declare type DeviceCodeRequest = BaseAuthRequest & {
    deviceCodeCallback: (response: DeviceCodeResponse) => void;
    cancel?: boolean;
};
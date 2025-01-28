'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var fs = require('fs');
var node_path = require('node:path');
var fs$1 = require('node:fs/promises');

/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */
var SchemaType$1;
(function (SchemaType) {
    /** String type. */
    SchemaType["STRING"] = "string";
    /** Number type. */
    SchemaType["NUMBER"] = "number";
    /** Integer type. */
    SchemaType["INTEGER"] = "integer";
    /** Boolean type. */
    SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */
    SchemaType["ARRAY"] = "array";
    /** Object type. */
    SchemaType["OBJECT"] = "object";
})(SchemaType$1 || (SchemaType$1 = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @public
 */
var ExecutableCodeLanguage$1;
(function (ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage$1 || (ExecutableCodeLanguage$1 = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */
var Outcome$1;
(function (Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */
    Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */
    Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */
    Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */
    Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome$1 || (Outcome$1 = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Possible roles.
 * @public
 */
const POSSIBLE_ROLES = ["user", "model", "function", "system"];
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
var HarmCategory$1;
(function (HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(HarmCategory$1 || (HarmCategory$1 = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */
var HarmBlockThreshold$1;
(function (HarmBlockThreshold) {
    // Threshold is unspecified.
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    // Content with NEGLIGIBLE will be allowed.
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    // Content with NEGLIGIBLE and LOW will be allowed.
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    // All content will be allowed.
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold$1 || (HarmBlockThreshold$1 = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
var HarmProbability$1;
(function (HarmProbability) {
    // Probability is unspecified.
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    // Content has a negligible chance of being unsafe.
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    // Content has a low chance of being unsafe.
    HarmProbability["LOW"] = "LOW";
    // Content has a medium chance of being unsafe.
    HarmProbability["MEDIUM"] = "MEDIUM";
    // Content has a high chance of being unsafe.
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability$1 || (HarmProbability$1 = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */
var BlockReason$1;
(function (BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason$1 || (BlockReason$1 = {}));
/**
 * Reason that a candidate finished.
 * @public
 */
var FinishReason$1;
(function (FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason$1 || (FinishReason$1 = {}));
/**
 * Task type for embedding content.
 * @public
 */
var TaskType$1;
(function (TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType$1 || (TaskType$1 = {}));
/**
 * @public
 */
var FunctionCallingMode$1;
(function (FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode$1 || (FunctionCallingMode$1 = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */
var DynamicRetrievalMode$1;
(function (DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode$1 || (DynamicRetrievalMode$1 = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Basic error type for this SDK.
 * @public
 */
let GoogleGenerativeAIError$1 = class GoogleGenerativeAIError extends Error {
    constructor(message) {
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
};
/**
 * Errors in the contents of a response from the model. This includes parsing
 * errors, or responses including a safety block reason.
 * @public
 */
class GoogleGenerativeAIResponseError extends GoogleGenerativeAIError$1 {
    constructor(message, response) {
        super(message);
        this.response = response;
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */
let GoogleGenerativeAIFetchError$1 = class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError$1 {
    constructor(message, status, statusText, errorDetails) {
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
};
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */
let GoogleGenerativeAIRequestInputError$1 = class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError$1 {
};

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_BASE_URL$1 = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION$1 = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */
const PACKAGE_VERSION$1 = "0.21.0";
const PACKAGE_LOG_HEADER$1 = "genai-js";
var Task$1;
(function (Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task$1 || (Task$1 = {}));
class RequestUrl {
    constructor(model, task, apiKey, stream, requestOptions) {
        this.model = model;
        this.task = task;
        this.apiKey = apiKey;
        this.stream = stream;
        this.requestOptions = requestOptions;
    }
    toString() {
        var _a, _b;
        const apiVersion = ((_a = this.requestOptions) === null || _a === undefined ? undefined : _a.apiVersion) || DEFAULT_API_VERSION$1;
        const baseUrl = ((_b = this.requestOptions) === null || _b === undefined ? undefined : _b.baseUrl) || DEFAULT_BASE_URL$1;
        let url = `${baseUrl}/${apiVersion}/${this.model}:${this.task}`;
        if (this.stream) {
            url += "?alt=sse";
        }
        return url;
    }
}
/**
 * Simple, but may become more complex if we add more versions to log.
 */
function getClientHeaders$1(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === undefined ? undefined : requestOptions.apiClient) {
        clientHeaders.push(requestOptions.apiClient);
    }
    clientHeaders.push(`${PACKAGE_LOG_HEADER$1}/${PACKAGE_VERSION$1}`);
    return clientHeaders.join(" ");
}
async function getHeaders$1(url) {
    var _a;
    const headers = new Headers();
    headers.append("Content-Type", "application/json");
    headers.append("x-goog-api-client", getClientHeaders$1(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    let customHeaders = (_a = url.requestOptions) === null || _a === undefined ? undefined : _a.customHeaders;
    if (customHeaders) {
        if (!(customHeaders instanceof Headers)) {
            try {
                customHeaders = new Headers(customHeaders);
            }
            catch (e) {
                throw new GoogleGenerativeAIRequestInputError$1(`unable to convert customHeaders value ${JSON.stringify(customHeaders)} to Headers: ${e.message}`);
            }
        }
        for (const [headerName, headerValue] of customHeaders.entries()) {
            if (headerName === "x-goog-api-key") {
                throw new GoogleGenerativeAIRequestInputError$1(`Cannot set reserved header name ${headerName}`);
            }
            else if (headerName === "x-goog-api-client") {
                throw new GoogleGenerativeAIRequestInputError$1(`Header name ${headerName} can only be set using the apiClient field`);
            }
            headers.append(headerName, headerValue);
        }
    }
    return headers;
}
async function constructModelRequest(model, task, apiKey, stream, body, requestOptions) {
    const url = new RequestUrl(model, task, apiKey, stream, requestOptions);
    return {
        url: url.toString(),
        fetchOptions: Object.assign(Object.assign({}, buildFetchOptions(requestOptions)), { method: "POST", headers: await getHeaders$1(url), body }),
    };
}
async function makeModelRequest(model, task, apiKey, stream, body, requestOptions = {}, 
// Allows this to be stubbed for tests
fetchFn = fetch) {
    const { url, fetchOptions } = await constructModelRequest(model, task, apiKey, stream, body, requestOptions);
    return makeRequest$1(url, fetchOptions, fetchFn);
}
async function makeRequest$1(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    }
    catch (e) {
        handleResponseError$1(e, url);
    }
    if (!response.ok) {
        await handleResponseNotOk$1(response, url);
    }
    return response;
}
function handleResponseError$1(e, url) {
    let err = e;
    if (!(e instanceof GoogleGenerativeAIFetchError$1 ||
        e instanceof GoogleGenerativeAIRequestInputError$1)) {
        err = new GoogleGenerativeAIError$1(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk$1(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    }
    catch (e) {
        // ignored
    }
    throw new GoogleGenerativeAIFetchError$1(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}
/**
 * Generates the request options to be passed to the fetch API.
 * @param requestOptions - The user-defined request options.
 * @returns The generated request options.
 */
function buildFetchOptions(requestOptions) {
    const fetchOptions = {};
    if ((requestOptions === null || requestOptions === undefined ? undefined : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === undefined ? undefined : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === undefined ? undefined : requestOptions.timeout) >= 0) {
            setTimeout(() => controller.abort(), requestOptions.timeout);
        }
        if (requestOptions === null || requestOptions === undefined ? undefined : requestOptions.signal) {
            requestOptions.signal.addEventListener("abort", () => {
                controller.abort();
            });
        }
        fetchOptions.signal = controller.signal;
    }
    return fetchOptions;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Adds convenience helper methods to a response object, including stream
 * chunks (as long as each chunk is a complete GenerateContentResponse JSON).
 */
function addHelpers(response) {
    response.text = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning text from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getText(response);
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Text not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return "";
    };
    /**
     * TODO: remove at next major version
     */
    response.functionCall = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning function calls from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            console.warn(`response.functionCall() is deprecated. ` +
                `Use response.functionCalls() instead.`);
            return getFunctionCalls(response)[0];
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    response.functionCalls = () => {
        if (response.candidates && response.candidates.length > 0) {
            if (response.candidates.length > 1) {
                console.warn(`This response had ${response.candidates.length} ` +
                    `candidates. Returning function calls from the first candidate only. ` +
                    `Access response.candidates directly to use the other candidates.`);
            }
            if (hadBadFinishReason(response.candidates[0])) {
                throw new GoogleGenerativeAIResponseError(`${formatBlockErrorMessage(response)}`, response);
            }
            return getFunctionCalls(response);
        }
        else if (response.promptFeedback) {
            throw new GoogleGenerativeAIResponseError(`Function call not available. ${formatBlockErrorMessage(response)}`, response);
        }
        return undefined;
    };
    return response;
}
/**
 * Returns all text found in all parts of first candidate.
 */
function getText(response) {
    var _a, _b, _c, _d;
    const textStrings = [];
    if ((_b = (_a = response.candidates) === null || _a === undefined ? undefined : _a[0].content) === null || _b === undefined ? undefined : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === undefined ? undefined : _c[0].content) === null || _d === undefined ? undefined : _d.parts) {
            if (part.text) {
                textStrings.push(part.text);
            }
            if (part.executableCode) {
                textStrings.push("\n```" +
                    part.executableCode.language +
                    "\n" +
                    part.executableCode.code +
                    "\n```\n");
            }
            if (part.codeExecutionResult) {
                textStrings.push("\n```\n" + part.codeExecutionResult.output + "\n```\n");
            }
        }
    }
    if (textStrings.length > 0) {
        return textStrings.join("");
    }
    else {
        return "";
    }
}
/**
 * Returns functionCall of first candidate.
 */
function getFunctionCalls(response) {
    var _a, _b, _c, _d;
    const functionCalls = [];
    if ((_b = (_a = response.candidates) === null || _a === undefined ? undefined : _a[0].content) === null || _b === undefined ? undefined : _b.parts) {
        for (const part of (_d = (_c = response.candidates) === null || _c === undefined ? undefined : _c[0].content) === null || _d === undefined ? undefined : _d.parts) {
            if (part.functionCall) {
                functionCalls.push(part.functionCall);
            }
        }
    }
    if (functionCalls.length > 0) {
        return functionCalls;
    }
    else {
        return undefined;
    }
}
const badFinishReasons = [
    FinishReason$1.RECITATION,
    FinishReason$1.SAFETY,
    FinishReason$1.LANGUAGE,
];
function hadBadFinishReason(candidate) {
    return (!!candidate.finishReason &&
        badFinishReasons.includes(candidate.finishReason));
}
function formatBlockErrorMessage(response) {
    var _a, _b, _c;
    let message = "";
    if ((!response.candidates || response.candidates.length === 0) &&
        response.promptFeedback) {
        message += "Response was blocked";
        if ((_a = response.promptFeedback) === null || _a === undefined ? undefined : _a.blockReason) {
            message += ` due to ${response.promptFeedback.blockReason}`;
        }
        if ((_b = response.promptFeedback) === null || _b === undefined ? undefined : _b.blockReasonMessage) {
            message += `: ${response.promptFeedback.blockReasonMessage}`;
        }
    }
    else if ((_c = response.candidates) === null || _c === undefined ? undefined : _c[0]) {
        const firstCandidate = response.candidates[0];
        if (hadBadFinishReason(firstCandidate)) {
            message += `Candidate was blocked due to ${firstCandidate.finishReason}`;
            if (firstCandidate.finishMessage) {
                message += `: ${firstCandidate.finishMessage}`;
            }
        }
    }
    return message;
}

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const responseLineRE = /^data\: (.*)(?:\n\n|\r\r|\r\n\r\n)/;
/**
 * Process a response.body stream from the backend and return an
 * iterator that provides one complete GenerateContentResponse at a time
 * and a promise that resolves with a single aggregated
 * GenerateContentResponse.
 *
 * @param response - Response from a fetch call
 */
function processStream(response) {
    const inputStream = response.body.pipeThrough(new TextDecoderStream("utf8", { fatal: true }));
    const responseStream = getResponseStream(inputStream);
    const [stream1, stream2] = responseStream.tee();
    return {
        stream: generateResponseSequence(stream1),
        response: getResponsePromise(stream2),
    };
}
async function getResponsePromise(stream) {
    const allResponses = [];
    const reader = stream.getReader();
    while (true) {
        const { done, value } = await reader.read();
        if (done) {
            return addHelpers(aggregateResponses(allResponses));
        }
        allResponses.push(value);
    }
}
function generateResponseSequence(stream) {
    return __asyncGenerator(this, arguments, function* generateResponseSequence_1() {
        const reader = stream.getReader();
        while (true) {
            const { value, done } = yield __await(reader.read());
            if (done) {
                break;
            }
            yield yield __await(addHelpers(value));
        }
    });
}
/**
 * Reads a raw stream from the fetch response and join incomplete
 * chunks, returning a new stream that provides a single complete
 * GenerateContentResponse in each iteration.
 */
function getResponseStream(inputStream) {
    const reader = inputStream.getReader();
    const stream = new ReadableStream({
        start(controller) {
            let currentText = "";
            return pump();
            function pump() {
                return reader.read().then(({ value, done }) => {
                    if (done) {
                        if (currentText.trim()) {
                            controller.error(new GoogleGenerativeAIError$1("Failed to parse stream"));
                            return;
                        }
                        controller.close();
                        return;
                    }
                    currentText += value;
                    let match = currentText.match(responseLineRE);
                    let parsedResponse;
                    while (match) {
                        try {
                            parsedResponse = JSON.parse(match[1]);
                        }
                        catch (e) {
                            controller.error(new GoogleGenerativeAIError$1(`Error parsing JSON response: "${match[1]}"`));
                            return;
                        }
                        controller.enqueue(parsedResponse);
                        currentText = currentText.substring(match[0].length);
                        match = currentText.match(responseLineRE);
                    }
                    return pump();
                });
            }
        },
    });
    return stream;
}
/**
 * Aggregates an array of `GenerateContentResponse`s into a single
 * GenerateContentResponse.
 */
function aggregateResponses(responses) {
    const lastResponse = responses[responses.length - 1];
    const aggregatedResponse = {
        promptFeedback: lastResponse === null || lastResponse === undefined ? undefined : lastResponse.promptFeedback,
    };
    for (const response of responses) {
        if (response.candidates) {
            for (const candidate of response.candidates) {
                const i = candidate.index;
                if (!aggregatedResponse.candidates) {
                    aggregatedResponse.candidates = [];
                }
                if (!aggregatedResponse.candidates[i]) {
                    aggregatedResponse.candidates[i] = {
                        index: candidate.index,
                    };
                }
                // Keep overwriting, the last one will be final
                aggregatedResponse.candidates[i].citationMetadata =
                    candidate.citationMetadata;
                aggregatedResponse.candidates[i].groundingMetadata =
                    candidate.groundingMetadata;
                aggregatedResponse.candidates[i].finishReason = candidate.finishReason;
                aggregatedResponse.candidates[i].finishMessage =
                    candidate.finishMessage;
                aggregatedResponse.candidates[i].safetyRatings =
                    candidate.safetyRatings;
                /**
                 * Candidates should always have content and parts, but this handles
                 * possible malformed responses.
                 */
                if (candidate.content && candidate.content.parts) {
                    if (!aggregatedResponse.candidates[i].content) {
                        aggregatedResponse.candidates[i].content = {
                            role: candidate.content.role || "user",
                            parts: [],
                        };
                    }
                    const newPart = {};
                    for (const part of candidate.content.parts) {
                        if (part.text) {
                            newPart.text = part.text;
                        }
                        if (part.functionCall) {
                            newPart.functionCall = part.functionCall;
                        }
                        if (part.executableCode) {
                            newPart.executableCode = part.executableCode;
                        }
                        if (part.codeExecutionResult) {
                            newPart.codeExecutionResult = part.codeExecutionResult;
                        }
                        if (Object.keys(newPart).length === 0) {
                            newPart.text = "";
                        }
                        aggregatedResponse.candidates[i].content.parts.push(newPart);
                    }
                }
            }
        }
        if (response.usageMetadata) {
            aggregatedResponse.usageMetadata = response.usageMetadata;
        }
    }
    return aggregatedResponse;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function generateContentStream(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task$1.STREAM_GENERATE_CONTENT, apiKey, 
    /* stream */ true, JSON.stringify(params), requestOptions);
    return processStream(response);
}
async function generateContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task$1.GENERATE_CONTENT, apiKey, 
    /* stream */ false, JSON.stringify(params), requestOptions);
    const responseJson = await response.json();
    const enhancedResponse = addHelpers(responseJson);
    return {
        response: enhancedResponse,
    };
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function formatSystemInstruction(input) {
    // null or undefined
    if (input == null) {
        return undefined;
    }
    else if (typeof input === "string") {
        return { role: "system", parts: [{ text: input }] };
    }
    else if (input.text) {
        return { role: "system", parts: [input] };
    }
    else if (input.parts) {
        if (!input.role) {
            return { role: "system", parts: input.parts };
        }
        else {
            return input;
        }
    }
}
function formatNewContent(request) {
    let newParts = [];
    if (typeof request === "string") {
        newParts = [{ text: request }];
    }
    else {
        for (const partOrString of request) {
            if (typeof partOrString === "string") {
                newParts.push({ text: partOrString });
            }
            else {
                newParts.push(partOrString);
            }
        }
    }
    return assignRoleToPartsAndValidateSendMessageRequest(newParts);
}
/**
 * When multiple Part types (i.e. FunctionResponsePart and TextPart) are
 * passed in a single Part array, we may need to assign different roles to each
 * part. Currently only FunctionResponsePart requires a role other than 'user'.
 * @private
 * @param parts Array of parts to pass to the model
 * @returns Array of content items
 */
function assignRoleToPartsAndValidateSendMessageRequest(parts) {
    const userContent = { role: "user", parts: [] };
    const functionContent = { role: "function", parts: [] };
    let hasUserContent = false;
    let hasFunctionContent = false;
    for (const part of parts) {
        if ("functionResponse" in part) {
            functionContent.parts.push(part);
            hasFunctionContent = true;
        }
        else {
            userContent.parts.push(part);
            hasUserContent = true;
        }
    }
    if (hasUserContent && hasFunctionContent) {
        throw new GoogleGenerativeAIError$1("Within a single message, FunctionResponse cannot be mixed with other type of part in the request for sending chat message.");
    }
    if (!hasUserContent && !hasFunctionContent) {
        throw new GoogleGenerativeAIError$1("No content is provided for sending chat message.");
    }
    if (hasUserContent) {
        return userContent;
    }
    return functionContent;
}
function formatCountTokensInput(params, modelParams) {
    var _a;
    let formattedGenerateContentRequest = {
        model: modelParams === null || modelParams === undefined ? undefined : modelParams.model,
        generationConfig: modelParams === null || modelParams === undefined ? undefined : modelParams.generationConfig,
        safetySettings: modelParams === null || modelParams === undefined ? undefined : modelParams.safetySettings,
        tools: modelParams === null || modelParams === undefined ? undefined : modelParams.tools,
        toolConfig: modelParams === null || modelParams === undefined ? undefined : modelParams.toolConfig,
        systemInstruction: modelParams === null || modelParams === undefined ? undefined : modelParams.systemInstruction,
        cachedContent: (_a = modelParams === null || modelParams === undefined ? undefined : modelParams.cachedContent) === null || _a === undefined ? undefined : _a.name,
        contents: [],
    };
    const containsGenerateContentRequest = params.generateContentRequest != null;
    if (params.contents) {
        if (containsGenerateContentRequest) {
            throw new GoogleGenerativeAIRequestInputError$1("CountTokensRequest must have one of contents or generateContentRequest, not both.");
        }
        formattedGenerateContentRequest.contents = params.contents;
    }
    else if (containsGenerateContentRequest) {
        formattedGenerateContentRequest = Object.assign(Object.assign({}, formattedGenerateContentRequest), params.generateContentRequest);
    }
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedGenerateContentRequest.contents = [content];
    }
    return { generateContentRequest: formattedGenerateContentRequest };
}
function formatGenerateContentInput(params) {
    let formattedRequest;
    if (params.contents) {
        formattedRequest = params;
    }
    else {
        // Array or string
        const content = formatNewContent(params);
        formattedRequest = { contents: [content] };
    }
    if (params.systemInstruction) {
        formattedRequest.systemInstruction = formatSystemInstruction(params.systemInstruction);
    }
    return formattedRequest;
}
function formatEmbedContentInput(params) {
    if (typeof params === "string" || Array.isArray(params)) {
        const content = formatNewContent(params);
        return { content };
    }
    return params;
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
// https://ai.google.dev/api/rest/v1beta/Content#part
const VALID_PART_FIELDS = [
    "text",
    "inlineData",
    "functionCall",
    "functionResponse",
    "executableCode",
    "codeExecutionResult",
];
const VALID_PARTS_PER_ROLE = {
    user: ["text", "inlineData"],
    function: ["functionResponse"],
    model: ["text", "functionCall", "executableCode", "codeExecutionResult"],
    // System instructions shouldn't be in history anyway.
    system: ["text"],
};
function validateChatHistory(history) {
    let prevContent = false;
    for (const currContent of history) {
        const { role, parts } = currContent;
        if (!prevContent && role !== "user") {
            throw new GoogleGenerativeAIError$1(`First content should be with role 'user', got ${role}`);
        }
        if (!POSSIBLE_ROLES.includes(role)) {
            throw new GoogleGenerativeAIError$1(`Each item should include role field. Got ${role} but valid roles are: ${JSON.stringify(POSSIBLE_ROLES)}`);
        }
        if (!Array.isArray(parts)) {
            throw new GoogleGenerativeAIError$1("Content should have 'parts' property with an array of Parts");
        }
        if (parts.length === 0) {
            throw new GoogleGenerativeAIError$1("Each Content should have at least one part");
        }
        const countFields = {
            text: 0,
            inlineData: 0,
            functionCall: 0,
            functionResponse: 0,
            fileData: 0,
            executableCode: 0,
            codeExecutionResult: 0,
        };
        for (const part of parts) {
            for (const key of VALID_PART_FIELDS) {
                if (key in part) {
                    countFields[key] += 1;
                }
            }
        }
        const validParts = VALID_PARTS_PER_ROLE[role];
        for (const key of VALID_PART_FIELDS) {
            if (!validParts.includes(key) && countFields[key] > 0) {
                throw new GoogleGenerativeAIError$1(`Content with role '${role}' can't contain '${key}' part`);
            }
        }
        prevContent = true;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Do not log a message for this error.
 */
const SILENT_ERROR = "SILENT_ERROR";
/**
 * ChatSession class that enables sending chat messages and stores
 * history of sent and received messages so far.
 *
 * @public
 */
class ChatSession {
    constructor(apiKey, model, params, _requestOptions = {}) {
        this.model = model;
        this.params = params;
        this._requestOptions = _requestOptions;
        this._history = [];
        this._sendPromise = Promise.resolve();
        this._apiKey = apiKey;
        if (params === null || params === undefined ? undefined : params.history) {
            validateChatHistory(params.history);
            this._history = params.history;
        }
    }
    /**
     * Gets the chat history so far. Blocked prompts are not added to history.
     * Blocked candidates are not added to history, nor are the prompts that
     * generated them.
     */
    async getHistory() {
        await this._sendPromise;
        return this._history;
    }
    /**
     * Sends a chat message and receives a non-streaming
     * {@link GenerateContentResult}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async sendMessage(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === undefined ? undefined : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === undefined ? undefined : _b.generationConfig,
            tools: (_c = this.params) === null || _c === undefined ? undefined : _c.tools,
            toolConfig: (_d = this.params) === null || _d === undefined ? undefined : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === undefined ? undefined : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === undefined ? undefined : _f.cachedContent,
            contents: [...this._history, newContent],
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        let finalResult;
        // Add onto the chain.
        this._sendPromise = this._sendPromise
            .then(() => generateContent(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions))
            .then((result) => {
            var _a;
            if (result.response.candidates &&
                result.response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({ parts: [], 
                    // Response seems to come back without a role set.
                    role: "model" }, (_a = result.response.candidates) === null || _a === undefined ? undefined : _a[0].content);
                this._history.push(responseContent);
            }
            else {
                const blockErrorMessage = formatBlockErrorMessage(result.response);
                if (blockErrorMessage) {
                    console.warn(`sendMessage() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
            finalResult = result;
        });
        await this._sendPromise;
        return finalResult;
    }
    /**
     * Sends a chat message and receives the response as a
     * {@link GenerateContentStreamResult} containing an iterable stream
     * and a response promise.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async sendMessageStream(request, requestOptions = {}) {
        var _a, _b, _c, _d, _e, _f;
        await this._sendPromise;
        const newContent = formatNewContent(request);
        const generateContentRequest = {
            safetySettings: (_a = this.params) === null || _a === undefined ? undefined : _a.safetySettings,
            generationConfig: (_b = this.params) === null || _b === undefined ? undefined : _b.generationConfig,
            tools: (_c = this.params) === null || _c === undefined ? undefined : _c.tools,
            toolConfig: (_d = this.params) === null || _d === undefined ? undefined : _d.toolConfig,
            systemInstruction: (_e = this.params) === null || _e === undefined ? undefined : _e.systemInstruction,
            cachedContent: (_f = this.params) === null || _f === undefined ? undefined : _f.cachedContent,
            contents: [...this._history, newContent],
        };
        const chatSessionRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const streamPromise = generateContentStream(this._apiKey, this.model, generateContentRequest, chatSessionRequestOptions);
        // Add onto the chain.
        this._sendPromise = this._sendPromise
            .then(() => streamPromise)
            // This must be handled to avoid unhandled rejection, but jump
            // to the final catch block with a label to not log this error.
            .catch((_ignored) => {
            throw new Error(SILENT_ERROR);
        })
            .then((streamResult) => streamResult.response)
            .then((response) => {
            if (response.candidates && response.candidates.length > 0) {
                this._history.push(newContent);
                const responseContent = Object.assign({}, response.candidates[0].content);
                // Response seems to come back without a role set.
                if (!responseContent.role) {
                    responseContent.role = "model";
                }
                this._history.push(responseContent);
            }
            else {
                const blockErrorMessage = formatBlockErrorMessage(response);
                if (blockErrorMessage) {
                    console.warn(`sendMessageStream() was unsuccessful. ${blockErrorMessage}. Inspect response object for details.`);
                }
            }
        })
            .catch((e) => {
            // Errors in streamPromise are already catchable by the user as
            // streamPromise is returned.
            // Avoid duplicating the error message in logs.
            if (e.message !== SILENT_ERROR) {
                // Users do not have access to _sendPromise to catch errors
                // downstream from streamPromise, so they should not throw.
                console.error(e);
            }
        });
        return streamPromise;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function countTokens(apiKey, model, params, singleRequestOptions) {
    const response = await makeModelRequest(model, Task$1.COUNT_TOKENS, apiKey, false, JSON.stringify(params), singleRequestOptions);
    return response.json();
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function embedContent(apiKey, model, params, requestOptions) {
    const response = await makeModelRequest(model, Task$1.EMBED_CONTENT, apiKey, false, JSON.stringify(params), requestOptions);
    return response.json();
}
async function batchEmbedContents(apiKey, model, params, requestOptions) {
    const requestsWithModel = params.requests.map((request) => {
        return Object.assign(Object.assign({}, request), { model });
    });
    const response = await makeModelRequest(model, Task$1.BATCH_EMBED_CONTENTS, apiKey, false, JSON.stringify({ requests: requestsWithModel }), requestOptions);
    return response.json();
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Class for generative model APIs.
 * @public
 */
class GenerativeModel {
    constructor(apiKey, modelParams, _requestOptions = {}) {
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
        if (modelParams.model.includes("/")) {
            // Models may be named "models/model-name" or "tunedModels/model-name"
            this.model = modelParams.model;
        }
        else {
            // If path is not included, assume it's a non-tuned model.
            this.model = `models/${modelParams.model}`;
        }
        this.generationConfig = modelParams.generationConfig || {};
        this.safetySettings = modelParams.safetySettings || [];
        this.tools = modelParams.tools;
        this.toolConfig = modelParams.toolConfig;
        this.systemInstruction = formatSystemInstruction(modelParams.systemInstruction);
        this.cachedContent = modelParams.cachedContent;
    }
    /**
     * Makes a single non-streaming call to the model
     * and returns an object containing a single {@link GenerateContentResponse}.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async generateContent(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContent(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === undefined ? undefined : _a.name }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Makes a single streaming call to the model and returns an object
     * containing an iterable stream that iterates over all chunks in the
     * streaming response as well as a promise that returns the final
     * aggregated response.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async generateContentStream(request, requestOptions = {}) {
        var _a;
        const formattedParams = formatGenerateContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return generateContentStream(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === undefined ? undefined : _a.name }, formattedParams), generativeModelRequestOptions);
    }
    /**
     * Gets a new {@link ChatSession} instance which can be used for
     * multi-turn chats.
     */
    startChat(startChatParams) {
        var _a;
        return new ChatSession(this.apiKey, this.model, Object.assign({ generationConfig: this.generationConfig, safetySettings: this.safetySettings, tools: this.tools, toolConfig: this.toolConfig, systemInstruction: this.systemInstruction, cachedContent: (_a = this.cachedContent) === null || _a === undefined ? undefined : _a.name }, startChatParams), this._requestOptions);
    }
    /**
     * Counts the tokens in the provided request.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async countTokens(request, requestOptions = {}) {
        const formattedParams = formatCountTokensInput(request, {
            model: this.model,
            generationConfig: this.generationConfig,
            safetySettings: this.safetySettings,
            tools: this.tools,
            toolConfig: this.toolConfig,
            systemInstruction: this.systemInstruction,
            cachedContent: this.cachedContent,
        });
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return countTokens(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds the provided content.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async embedContent(request, requestOptions = {}) {
        const formattedParams = formatEmbedContentInput(request);
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return embedContent(this.apiKey, this.model, formattedParams, generativeModelRequestOptions);
    }
    /**
     * Embeds an array of {@link EmbedContentRequest}s.
     *
     * Fields set in the optional {@link SingleRequestOptions} parameter will
     * take precedence over the {@link RequestOptions} values provided to
     * {@link GoogleGenerativeAI.getGenerativeModel }.
     */
    async batchEmbedContents(batchEmbedContentRequest, requestOptions = {}) {
        const generativeModelRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        return batchEmbedContents(this.apiKey, this.model, batchEmbedContentRequest, generativeModelRequestOptions);
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Top-level class for this SDK
 * @public
 */
class GoogleGenerativeAI {
    constructor(apiKey) {
        this.apiKey = apiKey;
    }
    /**
     * Gets a {@link GenerativeModel} instance for the provided model name.
     */
    getGenerativeModel(modelParams, requestOptions) {
        if (!modelParams.model) {
            throw new GoogleGenerativeAIError$1(`Must provide a model name. ` +
                `Example: genai.getGenerativeModel({ model: 'my-model-name' })`);
        }
        return new GenerativeModel(this.apiKey, modelParams, requestOptions);
    }
    /**
     * Creates a {@link GenerativeModel} instance from provided content cache.
     */
    getGenerativeModelFromCachedContent(cachedContent, modelParams, requestOptions) {
        if (!cachedContent.name) {
            throw new GoogleGenerativeAIRequestInputError$1("Cached content must contain a `name` field.");
        }
        if (!cachedContent.model) {
            throw new GoogleGenerativeAIRequestInputError$1("Cached content must contain a `model` field.");
        }
        /**
         * Not checking tools and toolConfig for now as it would require a deep
         * equality comparison and isn't likely to be a common case.
         */
        const disallowedDuplicates = ["model", "systemInstruction"];
        for (const key of disallowedDuplicates) {
            if ((modelParams === null || modelParams === undefined ? undefined : modelParams[key]) &&
                cachedContent[key] &&
                (modelParams === null || modelParams === undefined ? undefined : modelParams[key]) !== cachedContent[key]) {
                if (key === "model") {
                    const modelParamsComp = modelParams.model.startsWith("models/")
                        ? modelParams.model.replace("models/", "")
                        : modelParams.model;
                    const cachedContentComp = cachedContent.model.startsWith("models/")
                        ? cachedContent.model.replace("models/", "")
                        : cachedContent.model;
                    if (modelParamsComp === cachedContentComp) {
                        continue;
                    }
                }
                throw new GoogleGenerativeAIRequestInputError$1(`Different value for "${key}" specified in modelParams` +
                    ` (${modelParams[key]}) and cachedContent (${cachedContent[key]})`);
            }
        }
        const modelParamsFromCache = Object.assign(Object.assign({}, modelParams), { model: cachedContent.model, tools: cachedContent.tools, toolConfig: cachedContent.toolConfig, systemInstruction: cachedContent.systemInstruction, cachedContent });
        return new GenerativeModel(this.apiKey, modelParamsFromCache, requestOptions);
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Basic error type for this SDK.
 * @public
 */
class GoogleGenerativeAIError extends Error {
    constructor(message) {
        super(`[GoogleGenerativeAI Error]: ${message}`);
    }
}
/**
 * Error class covering HTTP errors when calling the server. Includes HTTP
 * status, statusText, and optional details, if provided in the server response.
 * @public
 */
class GoogleGenerativeAIFetchError extends GoogleGenerativeAIError {
    constructor(message, status, statusText, errorDetails) {
        super(message);
        this.status = status;
        this.statusText = statusText;
        this.errorDetails = errorDetails;
    }
}
/**
 * Errors in the contents of a request originating from user input.
 * @public
 */
class GoogleGenerativeAIRequestInputError extends GoogleGenerativeAIError {
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const DEFAULT_BASE_URL = "https://generativelanguage.googleapis.com";
const DEFAULT_API_VERSION = "v1beta";
/**
 * We can't `require` package.json if this runs on web. We will use rollup to
 * swap in the version number here at build time.
 */
const PACKAGE_VERSION = "0.21.0";
const PACKAGE_LOG_HEADER = "genai-js";
var Task;
(function (Task) {
    Task["GENERATE_CONTENT"] = "generateContent";
    Task["STREAM_GENERATE_CONTENT"] = "streamGenerateContent";
    Task["COUNT_TOKENS"] = "countTokens";
    Task["EMBED_CONTENT"] = "embedContent";
    Task["BATCH_EMBED_CONTENTS"] = "batchEmbedContents";
})(Task || (Task = {}));
/**
 * Simple, but may become more complex if we add more versions to log.
 */
function getClientHeaders(requestOptions) {
    const clientHeaders = [];
    if (requestOptions === null || requestOptions === undefined ? undefined : requestOptions.apiClient) {
        clientHeaders.push(requestOptions.apiClient);
    }
    clientHeaders.push(`${PACKAGE_LOG_HEADER}/${PACKAGE_VERSION}`);
    return clientHeaders.join(" ");
}
async function makeRequest(url, fetchOptions, fetchFn = fetch) {
    let response;
    try {
        response = await fetchFn(url, fetchOptions);
    }
    catch (e) {
        handleResponseError(e, url);
    }
    if (!response.ok) {
        await handleResponseNotOk(response, url);
    }
    return response;
}
function handleResponseError(e, url) {
    let err = e;
    if (!(e instanceof GoogleGenerativeAIFetchError ||
        e instanceof GoogleGenerativeAIRequestInputError)) {
        err = new GoogleGenerativeAIError(`Error fetching from ${url.toString()}: ${e.message}`);
        err.stack = e.stack;
    }
    throw err;
}
async function handleResponseNotOk(response, url) {
    let message = "";
    let errorDetails;
    try {
        const json = await response.json();
        message = json.error.message;
        if (json.error.details) {
            message += ` ${JSON.stringify(json.error.details)}`;
            errorDetails = json.error.details;
        }
    }
    catch (e) {
        // ignored
    }
    throw new GoogleGenerativeAIFetchError(`Error fetching from ${url.toString()}: [${response.status} ${response.statusText}] ${message}`, response.status, response.statusText, errorDetails);
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var RpcTask;
(function (RpcTask) {
    RpcTask["UPLOAD"] = "upload";
    RpcTask["LIST"] = "list";
    RpcTask["GET"] = "get";
    RpcTask["DELETE"] = "delete";
    RpcTask["UPDATE"] = "update";
    RpcTask["CREATE"] = "create";
})(RpcTask || (RpcTask = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const taskToMethod = {
    [RpcTask.UPLOAD]: "POST",
    [RpcTask.LIST]: "GET",
    [RpcTask.GET]: "GET",
    [RpcTask.DELETE]: "DELETE",
    [RpcTask.UPDATE]: "PATCH",
    [RpcTask.CREATE]: "POST",
};
class ServerRequestUrl {
    constructor(task, apiKey, requestOptions) {
        this.task = task;
        this.apiKey = apiKey;
        this.requestOptions = requestOptions;
    }
    appendPath(path) {
        this._url.pathname = this._url.pathname + `/${path}`;
    }
    appendParam(key, value) {
        this._url.searchParams.append(key, value);
    }
    toString() {
        return this._url.toString();
    }
}
class FilesRequestUrl extends ServerRequestUrl {
    constructor(task, apiKey, requestOptions) {
        var _a, _b;
        super(task, apiKey, requestOptions);
        this.task = task;
        this.apiKey = apiKey;
        this.requestOptions = requestOptions;
        const apiVersion = ((_a = this.requestOptions) === null || _a === undefined ? undefined : _a.apiVersion) || DEFAULT_API_VERSION;
        const baseUrl = ((_b = this.requestOptions) === null || _b === undefined ? undefined : _b.baseUrl) || DEFAULT_BASE_URL;
        let initialUrl = baseUrl;
        if (this.task === RpcTask.UPLOAD) {
            initialUrl += `/upload`;
        }
        initialUrl += `/${apiVersion}/files`;
        this._url = new URL(initialUrl);
    }
}
function getHeaders(url) {
    const headers = new Headers();
    headers.append("x-goog-api-client", getClientHeaders(url.requestOptions));
    headers.append("x-goog-api-key", url.apiKey);
    return headers;
}
async function makeServerRequest(url, headers, body, fetchFn = fetch) {
    const requestInit = {
        method: taskToMethod[url.task],
        headers,
    };
    if (body) {
        requestInit.body = body;
    }
    const signal = getSignal(url.requestOptions);
    if (signal) {
        requestInit.signal = signal;
    }
    return makeRequest(url.toString(), requestInit, fetchFn);
}
/**
 * Create an AbortSignal based on the timeout and signal in the
 * RequestOptions.
 */
function getSignal(requestOptions) {
    if ((requestOptions === null || requestOptions === undefined ? undefined : requestOptions.signal) !== undefined || (requestOptions === null || requestOptions === undefined ? undefined : requestOptions.timeout) >= 0) {
        const controller = new AbortController();
        if ((requestOptions === null || requestOptions === undefined ? undefined : requestOptions.timeout) >= 0) {
            setTimeout(() => controller.abort(), requestOptions.timeout);
        }
        if (requestOptions.signal) {
            requestOptions.signal.addEventListener("abort", () => {
                controller.abort();
            });
        }
        return controller.signal;
    }
}

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Class for managing GoogleAI file uploads.
 * @public
 */
class GoogleAIFileManager {
    constructor(apiKey, _requestOptions = {}) {
        this.apiKey = apiKey;
        this._requestOptions = _requestOptions;
    }
    /**
     * Upload a file.
     */
    async uploadFile(filePath, fileMetadata) {
        const file = fs.readFileSync(filePath);
        const url = new FilesRequestUrl(RpcTask.UPLOAD, this.apiKey, this._requestOptions);
        const uploadHeaders = getHeaders(url);
        const boundary = generateBoundary();
        uploadHeaders.append("X-Goog-Upload-Protocol", "multipart");
        uploadHeaders.append("Content-Type", `multipart/related; boundary=${boundary}`);
        const uploadMetadata = getUploadMetadata(fileMetadata);
        // Multipart formatting code taken from @firebase/storage
        const metadataString = JSON.stringify({ file: uploadMetadata });
        const preBlobPart = "--" +
            boundary +
            "\r\n" +
            "Content-Type: application/json; charset=utf-8\r\n\r\n" +
            metadataString +
            "\r\n--" +
            boundary +
            "\r\n" +
            "Content-Type: " +
            fileMetadata.mimeType +
            "\r\n\r\n";
        const postBlobPart = "\r\n--" + boundary + "--";
        const blob = new Blob([preBlobPart, file, postBlobPart]);
        const response = await makeServerRequest(url, uploadHeaders, blob);
        return response.json();
    }
    /**
     * List all uploaded files.
     *
     * Any fields set in the optional {@link SingleRequestOptions} parameter will take
     * precedence over the {@link RequestOptions} values provided at the time of the
     * {@link GoogleAIFileManager} initialization.
     */
    async listFiles(listParams, requestOptions = {}) {
        const filesRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const url = new FilesRequestUrl(RpcTask.LIST, this.apiKey, filesRequestOptions);
        if (listParams === null || listParams === undefined ? undefined : listParams.pageSize) {
            url.appendParam("pageSize", listParams.pageSize.toString());
        }
        if (listParams === null || listParams === undefined ? undefined : listParams.pageToken) {
            url.appendParam("pageToken", listParams.pageToken);
        }
        const uploadHeaders = getHeaders(url);
        const response = await makeServerRequest(url, uploadHeaders);
        return response.json();
    }
    /**
     * Get metadata for file with given ID.
     *
     * Any fields set in the optional {@link SingleRequestOptions} parameter will take
     * precedence over the {@link RequestOptions} values provided at the time of the
     * {@link GoogleAIFileManager} initialization.
     */
    async getFile(fileId, requestOptions = {}) {
        const filesRequestOptions = Object.assign(Object.assign({}, this._requestOptions), requestOptions);
        const url = new FilesRequestUrl(RpcTask.GET, this.apiKey, filesRequestOptions);
        url.appendPath(parseFileId(fileId));
        const uploadHeaders = getHeaders(url);
        const response = await makeServerRequest(url, uploadHeaders);
        return response.json();
    }
    /**
     * Delete file with given ID.
     */
    async deleteFile(fileId) {
        const url = new FilesRequestUrl(RpcTask.DELETE, this.apiKey, this._requestOptions);
        url.appendPath(parseFileId(fileId));
        const uploadHeaders = getHeaders(url);
        await makeServerRequest(url, uploadHeaders);
    }
}
/**
 * If fileId is prepended with "files/", remove prefix
 */
function parseFileId(fileId) {
    if (fileId.startsWith("files/")) {
        return fileId.split("files/")[1];
    }
    if (!fileId) {
        throw new GoogleGenerativeAIError(`Invalid fileId ${fileId}. ` +
            `Must be in the format "files/filename" or "filename"`);
    }
    return fileId;
}
function generateBoundary() {
    let str = "";
    for (let i = 0; i < 2; i++) {
        str = str + Math.random().toString().slice(2);
    }
    return str;
}
function getUploadMetadata(inputMetadata) {
    if (!inputMetadata.mimeType) {
        throw new GoogleGenerativeAIRequestInputError("Must provide a mimeType.");
    }
    const uploadMetadata = {
        mimeType: inputMetadata.mimeType,
        displayName: inputMetadata.displayName,
    };
    if (inputMetadata.name) {
        uploadMetadata.name = inputMetadata.name.includes("/")
            ? inputMetadata.name
            : `files/${inputMetadata.name}`;
    }
    return uploadMetadata;
}

/**
 * Processing state of the `File`.
 * @public
 */
var FileState;
(function (FileState) {
    // The default value. This value is used if the state is omitted.
    FileState["STATE_UNSPECIFIED"] = "STATE_UNSPECIFIED";
    // File is being processed and cannot be used for inference yet.
    FileState["PROCESSING"] = "PROCESSING";
    // File is processed and available for inference.
    FileState["ACTIVE"] = "ACTIVE";
    // File failed processing.
    FileState["FAILED"] = "FAILED";
})(FileState || (FileState = {}));

/**
 * Contains the list of OpenAPI data types
 * as defined by https://swagger.io/docs/specification/data-models/data-types/
 * @public
 */
var SchemaType;
(function (SchemaType) {
    /** String type. */
    SchemaType["STRING"] = "string";
    /** Number type. */
    SchemaType["NUMBER"] = "number";
    /** Integer type. */
    SchemaType["INTEGER"] = "integer";
    /** Boolean type. */
    SchemaType["BOOLEAN"] = "boolean";
    /** Array type. */
    SchemaType["ARRAY"] = "array";
    /** Object type. */
    SchemaType["OBJECT"] = "object";
})(SchemaType || (SchemaType = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @public
 */
var ExecutableCodeLanguage;
(function (ExecutableCodeLanguage) {
    ExecutableCodeLanguage["LANGUAGE_UNSPECIFIED"] = "language_unspecified";
    ExecutableCodeLanguage["PYTHON"] = "python";
})(ExecutableCodeLanguage || (ExecutableCodeLanguage = {}));
/**
 * Possible outcomes of code execution.
 * @public
 */
var Outcome;
(function (Outcome) {
    /**
     * Unspecified status. This value should not be used.
     */
    Outcome["OUTCOME_UNSPECIFIED"] = "outcome_unspecified";
    /**
     * Code execution completed successfully.
     */
    Outcome["OUTCOME_OK"] = "outcome_ok";
    /**
     * Code execution finished but with a failure. `stderr` should contain the
     * reason.
     */
    Outcome["OUTCOME_FAILED"] = "outcome_failed";
    /**
     * Code execution ran for too long, and was cancelled. There may or may not
     * be a partial output present.
     */
    Outcome["OUTCOME_DEADLINE_EXCEEDED"] = "outcome_deadline_exceeded";
})(Outcome || (Outcome = {}));

/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * Possible roles.
 * @public
 */
/**
 * Harm categories that would cause prompts or candidates to be blocked.
 * @public
 */
var HarmCategory;
(function (HarmCategory) {
    HarmCategory["HARM_CATEGORY_UNSPECIFIED"] = "HARM_CATEGORY_UNSPECIFIED";
    HarmCategory["HARM_CATEGORY_HATE_SPEECH"] = "HARM_CATEGORY_HATE_SPEECH";
    HarmCategory["HARM_CATEGORY_SEXUALLY_EXPLICIT"] = "HARM_CATEGORY_SEXUALLY_EXPLICIT";
    HarmCategory["HARM_CATEGORY_HARASSMENT"] = "HARM_CATEGORY_HARASSMENT";
    HarmCategory["HARM_CATEGORY_DANGEROUS_CONTENT"] = "HARM_CATEGORY_DANGEROUS_CONTENT";
})(HarmCategory || (HarmCategory = {}));
/**
 * Threshold above which a prompt or candidate will be blocked.
 * @public
 */
var HarmBlockThreshold;
(function (HarmBlockThreshold) {
    // Threshold is unspecified.
    HarmBlockThreshold["HARM_BLOCK_THRESHOLD_UNSPECIFIED"] = "HARM_BLOCK_THRESHOLD_UNSPECIFIED";
    // Content with NEGLIGIBLE will be allowed.
    HarmBlockThreshold["BLOCK_LOW_AND_ABOVE"] = "BLOCK_LOW_AND_ABOVE";
    // Content with NEGLIGIBLE and LOW will be allowed.
    HarmBlockThreshold["BLOCK_MEDIUM_AND_ABOVE"] = "BLOCK_MEDIUM_AND_ABOVE";
    // Content with NEGLIGIBLE, LOW, and MEDIUM will be allowed.
    HarmBlockThreshold["BLOCK_ONLY_HIGH"] = "BLOCK_ONLY_HIGH";
    // All content will be allowed.
    HarmBlockThreshold["BLOCK_NONE"] = "BLOCK_NONE";
})(HarmBlockThreshold || (HarmBlockThreshold = {}));
/**
 * Probability that a prompt or candidate matches a harm category.
 * @public
 */
var HarmProbability;
(function (HarmProbability) {
    // Probability is unspecified.
    HarmProbability["HARM_PROBABILITY_UNSPECIFIED"] = "HARM_PROBABILITY_UNSPECIFIED";
    // Content has a negligible chance of being unsafe.
    HarmProbability["NEGLIGIBLE"] = "NEGLIGIBLE";
    // Content has a low chance of being unsafe.
    HarmProbability["LOW"] = "LOW";
    // Content has a medium chance of being unsafe.
    HarmProbability["MEDIUM"] = "MEDIUM";
    // Content has a high chance of being unsafe.
    HarmProbability["HIGH"] = "HIGH";
})(HarmProbability || (HarmProbability = {}));
/**
 * Reason that a prompt was blocked.
 * @public
 */
var BlockReason;
(function (BlockReason) {
    // A blocked reason was not specified.
    BlockReason["BLOCKED_REASON_UNSPECIFIED"] = "BLOCKED_REASON_UNSPECIFIED";
    // Content was blocked by safety settings.
    BlockReason["SAFETY"] = "SAFETY";
    // Content was blocked, but the reason is uncategorized.
    BlockReason["OTHER"] = "OTHER";
})(BlockReason || (BlockReason = {}));
/**
 * Reason that a candidate finished.
 * @public
 */
var FinishReason;
(function (FinishReason) {
    // Default value. This value is unused.
    FinishReason["FINISH_REASON_UNSPECIFIED"] = "FINISH_REASON_UNSPECIFIED";
    // Natural stop point of the model or provided stop sequence.
    FinishReason["STOP"] = "STOP";
    // The maximum number of tokens as specified in the request was reached.
    FinishReason["MAX_TOKENS"] = "MAX_TOKENS";
    // The candidate content was flagged for safety reasons.
    FinishReason["SAFETY"] = "SAFETY";
    // The candidate content was flagged for recitation reasons.
    FinishReason["RECITATION"] = "RECITATION";
    // The candidate content was flagged for using an unsupported language.
    FinishReason["LANGUAGE"] = "LANGUAGE";
    // Unknown reason.
    FinishReason["OTHER"] = "OTHER";
})(FinishReason || (FinishReason = {}));
/**
 * Task type for embedding content.
 * @public
 */
var TaskType;
(function (TaskType) {
    TaskType["TASK_TYPE_UNSPECIFIED"] = "TASK_TYPE_UNSPECIFIED";
    TaskType["RETRIEVAL_QUERY"] = "RETRIEVAL_QUERY";
    TaskType["RETRIEVAL_DOCUMENT"] = "RETRIEVAL_DOCUMENT";
    TaskType["SEMANTIC_SIMILARITY"] = "SEMANTIC_SIMILARITY";
    TaskType["CLASSIFICATION"] = "CLASSIFICATION";
    TaskType["CLUSTERING"] = "CLUSTERING";
})(TaskType || (TaskType = {}));
/**
 * @public
 */
var FunctionCallingMode;
(function (FunctionCallingMode) {
    // Unspecified function calling mode. This value should not be used.
    FunctionCallingMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Default model behavior, model decides to predict either a function call
    // or a natural language repspose.
    FunctionCallingMode["AUTO"] = "AUTO";
    // Model is constrained to always predicting a function call only.
    // If "allowed_function_names" are set, the predicted function call will be
    // limited to any one of "allowed_function_names", else the predicted
    // function call will be any one of the provided "function_declarations".
    FunctionCallingMode["ANY"] = "ANY";
    // Model will not predict any function call. Model behavior is same as when
    // not passing any function declarations.
    FunctionCallingMode["NONE"] = "NONE";
})(FunctionCallingMode || (FunctionCallingMode = {}));
/**
 * The mode of the predictor to be used in dynamic retrieval.
 * @public
 */
var DynamicRetrievalMode;
(function (DynamicRetrievalMode) {
    // Unspecified function calling mode. This value should not be used.
    DynamicRetrievalMode["MODE_UNSPECIFIED"] = "MODE_UNSPECIFIED";
    // Run retrieval only when system decides it is necessary.
    DynamicRetrievalMode["MODE_DYNAMIC"] = "MODE_DYNAMIC";
})(DynamicRetrievalMode || (DynamicRetrievalMode = {}));

const types$1 = {
    'application/prs.cww': ['cww'],
    'application/prs.xsf+xml': ['xsf'],
    'application/vnd.1000minds.decision-model+xml': ['1km'],
    'application/vnd.3gpp.pic-bw-large': ['plb'],
    'application/vnd.3gpp.pic-bw-small': ['psb'],
    'application/vnd.3gpp.pic-bw-var': ['pvb'],
    'application/vnd.3gpp2.tcap': ['tcap'],
    'application/vnd.3m.post-it-notes': ['pwn'],
    'application/vnd.accpac.simply.aso': ['aso'],
    'application/vnd.accpac.simply.imp': ['imp'],
    'application/vnd.acucobol': ['acu'],
    'application/vnd.acucorp': ['atc', 'acutc'],
    'application/vnd.adobe.air-application-installer-package+zip': ['air'],
    'application/vnd.adobe.formscentral.fcdt': ['fcdt'],
    'application/vnd.adobe.fxp': ['fxp', 'fxpl'],
    'application/vnd.adobe.xdp+xml': ['xdp'],
    'application/vnd.adobe.xfdf': ['*xfdf'],
    'application/vnd.age': ['age'],
    'application/vnd.ahead.space': ['ahead'],
    'application/vnd.airzip.filesecure.azf': ['azf'],
    'application/vnd.airzip.filesecure.azs': ['azs'],
    'application/vnd.amazon.ebook': ['azw'],
    'application/vnd.americandynamics.acc': ['acc'],
    'application/vnd.amiga.ami': ['ami'],
    'application/vnd.android.package-archive': ['apk'],
    'application/vnd.anser-web-certificate-issue-initiation': ['cii'],
    'application/vnd.anser-web-funds-transfer-initiation': ['fti'],
    'application/vnd.antix.game-component': ['atx'],
    'application/vnd.apple.installer+xml': ['mpkg'],
    'application/vnd.apple.keynote': ['key'],
    'application/vnd.apple.mpegurl': ['m3u8'],
    'application/vnd.apple.numbers': ['numbers'],
    'application/vnd.apple.pages': ['pages'],
    'application/vnd.apple.pkpass': ['pkpass'],
    'application/vnd.aristanetworks.swi': ['swi'],
    'application/vnd.astraea-software.iota': ['iota'],
    'application/vnd.audiograph': ['aep'],
    'application/vnd.balsamiq.bmml+xml': ['bmml'],
    'application/vnd.blueice.multipass': ['mpm'],
    'application/vnd.bmi': ['bmi'],
    'application/vnd.businessobjects': ['rep'],
    'application/vnd.chemdraw+xml': ['cdxml'],
    'application/vnd.chipnuts.karaoke-mmd': ['mmd'],
    'application/vnd.cinderella': ['cdy'],
    'application/vnd.citationstyles.style+xml': ['csl'],
    'application/vnd.claymore': ['cla'],
    'application/vnd.cloanto.rp9': ['rp9'],
    'application/vnd.clonk.c4group': ['c4g', 'c4d', 'c4f', 'c4p', 'c4u'],
    'application/vnd.cluetrust.cartomobile-config': ['c11amc'],
    'application/vnd.cluetrust.cartomobile-config-pkg': ['c11amz'],
    'application/vnd.commonspace': ['csp'],
    'application/vnd.contact.cmsg': ['cdbcmsg'],
    'application/vnd.cosmocaller': ['cmc'],
    'application/vnd.crick.clicker': ['clkx'],
    'application/vnd.crick.clicker.keyboard': ['clkk'],
    'application/vnd.crick.clicker.palette': ['clkp'],
    'application/vnd.crick.clicker.template': ['clkt'],
    'application/vnd.crick.clicker.wordbank': ['clkw'],
    'application/vnd.criticaltools.wbs+xml': ['wbs'],
    'application/vnd.ctc-posml': ['pml'],
    'application/vnd.cups-ppd': ['ppd'],
    'application/vnd.curl.car': ['car'],
    'application/vnd.curl.pcurl': ['pcurl'],
    'application/vnd.dart': ['dart'],
    'application/vnd.data-vision.rdz': ['rdz'],
    'application/vnd.dbf': ['dbf'],
    'application/vnd.dece.data': ['uvf', 'uvvf', 'uvd', 'uvvd'],
    'application/vnd.dece.ttml+xml': ['uvt', 'uvvt'],
    'application/vnd.dece.unspecified': ['uvx', 'uvvx'],
    'application/vnd.dece.zip': ['uvz', 'uvvz'],
    'application/vnd.denovo.fcselayout-link': ['fe_launch'],
    'application/vnd.dna': ['dna'],
    'application/vnd.dolby.mlp': ['mlp'],
    'application/vnd.dpgraph': ['dpg'],
    'application/vnd.dreamfactory': ['dfac'],
    'application/vnd.ds-keypoint': ['kpxx'],
    'application/vnd.dvb.ait': ['ait'],
    'application/vnd.dvb.service': ['svc'],
    'application/vnd.dynageo': ['geo'],
    'application/vnd.ecowin.chart': ['mag'],
    'application/vnd.enliven': ['nml'],
    'application/vnd.epson.esf': ['esf'],
    'application/vnd.epson.msf': ['msf'],
    'application/vnd.epson.quickanime': ['qam'],
    'application/vnd.epson.salt': ['slt'],
    'application/vnd.epson.ssf': ['ssf'],
    'application/vnd.eszigno3+xml': ['es3', 'et3'],
    'application/vnd.ezpix-album': ['ez2'],
    'application/vnd.ezpix-package': ['ez3'],
    'application/vnd.fdf': ['*fdf'],
    'application/vnd.fdsn.mseed': ['mseed'],
    'application/vnd.fdsn.seed': ['seed', 'dataless'],
    'application/vnd.flographit': ['gph'],
    'application/vnd.fluxtime.clip': ['ftc'],
    'application/vnd.framemaker': ['fm', 'frame', 'maker', 'book'],
    'application/vnd.frogans.fnc': ['fnc'],
    'application/vnd.frogans.ltf': ['ltf'],
    'application/vnd.fsc.weblaunch': ['fsc'],
    'application/vnd.fujitsu.oasys': ['oas'],
    'application/vnd.fujitsu.oasys2': ['oa2'],
    'application/vnd.fujitsu.oasys3': ['oa3'],
    'application/vnd.fujitsu.oasysgp': ['fg5'],
    'application/vnd.fujitsu.oasysprs': ['bh2'],
    'application/vnd.fujixerox.ddd': ['ddd'],
    'application/vnd.fujixerox.docuworks': ['xdw'],
    'application/vnd.fujixerox.docuworks.binder': ['xbd'],
    'application/vnd.fuzzysheet': ['fzs'],
    'application/vnd.genomatix.tuxedo': ['txd'],
    'application/vnd.geogebra.file': ['ggb'],
    'application/vnd.geogebra.slides': ['ggs'],
    'application/vnd.geogebra.tool': ['ggt'],
    'application/vnd.geometry-explorer': ['gex', 'gre'],
    'application/vnd.geonext': ['gxt'],
    'application/vnd.geoplan': ['g2w'],
    'application/vnd.geospace': ['g3w'],
    'application/vnd.gmx': ['gmx'],
    'application/vnd.google-apps.document': ['gdoc'],
    'application/vnd.google-apps.presentation': ['gslides'],
    'application/vnd.google-apps.spreadsheet': ['gsheet'],
    'application/vnd.google-earth.kml+xml': ['kml'],
    'application/vnd.google-earth.kmz': ['kmz'],
    'application/vnd.gov.sk.xmldatacontainer+xml': ['xdcf'],
    'application/vnd.grafeq': ['gqf', 'gqs'],
    'application/vnd.groove-account': ['gac'],
    'application/vnd.groove-help': ['ghf'],
    'application/vnd.groove-identity-message': ['gim'],
    'application/vnd.groove-injector': ['grv'],
    'application/vnd.groove-tool-message': ['gtm'],
    'application/vnd.groove-tool-template': ['tpl'],
    'application/vnd.groove-vcard': ['vcg'],
    'application/vnd.hal+xml': ['hal'],
    'application/vnd.handheld-entertainment+xml': ['zmm'],
    'application/vnd.hbci': ['hbci'],
    'application/vnd.hhe.lesson-player': ['les'],
    'application/vnd.hp-hpgl': ['hpgl'],
    'application/vnd.hp-hpid': ['hpid'],
    'application/vnd.hp-hps': ['hps'],
    'application/vnd.hp-jlyt': ['jlt'],
    'application/vnd.hp-pcl': ['pcl'],
    'application/vnd.hp-pclxl': ['pclxl'],
    'application/vnd.hydrostatix.sof-data': ['sfd-hdstx'],
    'application/vnd.ibm.minipay': ['mpy'],
    'application/vnd.ibm.modcap': ['afp', 'listafp', 'list3820'],
    'application/vnd.ibm.rights-management': ['irm'],
    'application/vnd.ibm.secure-container': ['sc'],
    'application/vnd.iccprofile': ['icc', 'icm'],
    'application/vnd.igloader': ['igl'],
    'application/vnd.immervision-ivp': ['ivp'],
    'application/vnd.immervision-ivu': ['ivu'],
    'application/vnd.insors.igm': ['igm'],
    'application/vnd.intercon.formnet': ['xpw', 'xpx'],
    'application/vnd.intergeo': ['i2g'],
    'application/vnd.intu.qbo': ['qbo'],
    'application/vnd.intu.qfx': ['qfx'],
    'application/vnd.ipunplugged.rcprofile': ['rcprofile'],
    'application/vnd.irepository.package+xml': ['irp'],
    'application/vnd.is-xpr': ['xpr'],
    'application/vnd.isac.fcs': ['fcs'],
    'application/vnd.jam': ['jam'],
    'application/vnd.jcp.javame.midlet-rms': ['rms'],
    'application/vnd.jisp': ['jisp'],
    'application/vnd.joost.joda-archive': ['joda'],
    'application/vnd.kahootz': ['ktz', 'ktr'],
    'application/vnd.kde.karbon': ['karbon'],
    'application/vnd.kde.kchart': ['chrt'],
    'application/vnd.kde.kformula': ['kfo'],
    'application/vnd.kde.kivio': ['flw'],
    'application/vnd.kde.kontour': ['kon'],
    'application/vnd.kde.kpresenter': ['kpr', 'kpt'],
    'application/vnd.kde.kspread': ['ksp'],
    'application/vnd.kde.kword': ['kwd', 'kwt'],
    'application/vnd.kenameaapp': ['htke'],
    'application/vnd.kidspiration': ['kia'],
    'application/vnd.kinar': ['kne', 'knp'],
    'application/vnd.koan': ['skp', 'skd', 'skt', 'skm'],
    'application/vnd.kodak-descriptor': ['sse'],
    'application/vnd.las.las+xml': ['lasxml'],
    'application/vnd.llamagraphics.life-balance.desktop': ['lbd'],
    'application/vnd.llamagraphics.life-balance.exchange+xml': ['lbe'],
    'application/vnd.lotus-1-2-3': ['123'],
    'application/vnd.lotus-approach': ['apr'],
    'application/vnd.lotus-freelance': ['pre'],
    'application/vnd.lotus-notes': ['nsf'],
    'application/vnd.lotus-organizer': ['org'],
    'application/vnd.lotus-screencam': ['scm'],
    'application/vnd.lotus-wordpro': ['lwp'],
    'application/vnd.macports.portpkg': ['portpkg'],
    'application/vnd.mapbox-vector-tile': ['mvt'],
    'application/vnd.mcd': ['mcd'],
    'application/vnd.medcalcdata': ['mc1'],
    'application/vnd.mediastation.cdkey': ['cdkey'],
    'application/vnd.mfer': ['mwf'],
    'application/vnd.mfmp': ['mfm'],
    'application/vnd.micrografx.flo': ['flo'],
    'application/vnd.micrografx.igx': ['igx'],
    'application/vnd.mif': ['mif'],
    'application/vnd.mobius.daf': ['daf'],
    'application/vnd.mobius.dis': ['dis'],
    'application/vnd.mobius.mbk': ['mbk'],
    'application/vnd.mobius.mqy': ['mqy'],
    'application/vnd.mobius.msl': ['msl'],
    'application/vnd.mobius.plc': ['plc'],
    'application/vnd.mobius.txf': ['txf'],
    'application/vnd.mophun.application': ['mpn'],
    'application/vnd.mophun.certificate': ['mpc'],
    'application/vnd.mozilla.xul+xml': ['xul'],
    'application/vnd.ms-artgalry': ['cil'],
    'application/vnd.ms-cab-compressed': ['cab'],
    'application/vnd.ms-excel': ['xls', 'xlm', 'xla', 'xlc', 'xlt', 'xlw'],
    'application/vnd.ms-excel.addin.macroenabled.12': ['xlam'],
    'application/vnd.ms-excel.sheet.binary.macroenabled.12': ['xlsb'],
    'application/vnd.ms-excel.sheet.macroenabled.12': ['xlsm'],
    'application/vnd.ms-excel.template.macroenabled.12': ['xltm'],
    'application/vnd.ms-fontobject': ['eot'],
    'application/vnd.ms-htmlhelp': ['chm'],
    'application/vnd.ms-ims': ['ims'],
    'application/vnd.ms-lrm': ['lrm'],
    'application/vnd.ms-officetheme': ['thmx'],
    'application/vnd.ms-outlook': ['msg'],
    'application/vnd.ms-pki.seccat': ['cat'],
    'application/vnd.ms-pki.stl': ['*stl'],
    'application/vnd.ms-powerpoint': ['ppt', 'pps', 'pot'],
    'application/vnd.ms-powerpoint.addin.macroenabled.12': ['ppam'],
    'application/vnd.ms-powerpoint.presentation.macroenabled.12': ['pptm'],
    'application/vnd.ms-powerpoint.slide.macroenabled.12': ['sldm'],
    'application/vnd.ms-powerpoint.slideshow.macroenabled.12': ['ppsm'],
    'application/vnd.ms-powerpoint.template.macroenabled.12': ['potm'],
    'application/vnd.ms-project': ['*mpp', 'mpt'],
    'application/vnd.ms-word.document.macroenabled.12': ['docm'],
    'application/vnd.ms-word.template.macroenabled.12': ['dotm'],
    'application/vnd.ms-works': ['wps', 'wks', 'wcm', 'wdb'],
    'application/vnd.ms-wpl': ['wpl'],
    'application/vnd.ms-xpsdocument': ['xps'],
    'application/vnd.mseq': ['mseq'],
    'application/vnd.musician': ['mus'],
    'application/vnd.muvee.style': ['msty'],
    'application/vnd.mynfc': ['taglet'],
    'application/vnd.nato.bindingdataobject+xml': ['bdo'],
    'application/vnd.neurolanguage.nlu': ['nlu'],
    'application/vnd.nitf': ['ntf', 'nitf'],
    'application/vnd.noblenet-directory': ['nnd'],
    'application/vnd.noblenet-sealer': ['nns'],
    'application/vnd.noblenet-web': ['nnw'],
    'application/vnd.nokia.n-gage.ac+xml': ['*ac'],
    'application/vnd.nokia.n-gage.data': ['ngdat'],
    'application/vnd.nokia.n-gage.symbian.install': ['n-gage'],
    'application/vnd.nokia.radio-preset': ['rpst'],
    'application/vnd.nokia.radio-presets': ['rpss'],
    'application/vnd.novadigm.edm': ['edm'],
    'application/vnd.novadigm.edx': ['edx'],
    'application/vnd.novadigm.ext': ['ext'],
    'application/vnd.oasis.opendocument.chart': ['odc'],
    'application/vnd.oasis.opendocument.chart-template': ['otc'],
    'application/vnd.oasis.opendocument.database': ['odb'],
    'application/vnd.oasis.opendocument.formula': ['odf'],
    'application/vnd.oasis.opendocument.formula-template': ['odft'],
    'application/vnd.oasis.opendocument.graphics': ['odg'],
    'application/vnd.oasis.opendocument.graphics-template': ['otg'],
    'application/vnd.oasis.opendocument.image': ['odi'],
    'application/vnd.oasis.opendocument.image-template': ['oti'],
    'application/vnd.oasis.opendocument.presentation': ['odp'],
    'application/vnd.oasis.opendocument.presentation-template': ['otp'],
    'application/vnd.oasis.opendocument.spreadsheet': ['ods'],
    'application/vnd.oasis.opendocument.spreadsheet-template': ['ots'],
    'application/vnd.oasis.opendocument.text': ['odt'],
    'application/vnd.oasis.opendocument.text-master': ['odm'],
    'application/vnd.oasis.opendocument.text-template': ['ott'],
    'application/vnd.oasis.opendocument.text-web': ['oth'],
    'application/vnd.olpc-sugar': ['xo'],
    'application/vnd.oma.dd2+xml': ['dd2'],
    'application/vnd.openblox.game+xml': ['obgx'],
    'application/vnd.openofficeorg.extension': ['oxt'],
    'application/vnd.openstreetmap.data+xml': ['osm'],
    'application/vnd.openxmlformats-officedocument.presentationml.presentation': [
        'pptx',
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.slide': [
        'sldx',
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.slideshow': [
        'ppsx',
    ],
    'application/vnd.openxmlformats-officedocument.presentationml.template': [
        'potx',
    ],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet': ['xlsx'],
    'application/vnd.openxmlformats-officedocument.spreadsheetml.template': [
        'xltx',
    ],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document': [
        'docx',
    ],
    'application/vnd.openxmlformats-officedocument.wordprocessingml.template': [
        'dotx',
    ],
    'application/vnd.osgeo.mapguide.package': ['mgp'],
    'application/vnd.osgi.dp': ['dp'],
    'application/vnd.osgi.subsystem': ['esa'],
    'application/vnd.palm': ['pdb', 'pqa', 'oprc'],
    'application/vnd.pawaafile': ['paw'],
    'application/vnd.pg.format': ['str'],
    'application/vnd.pg.osasli': ['ei6'],
    'application/vnd.picsel': ['efif'],
    'application/vnd.pmi.widget': ['wg'],
    'application/vnd.pocketlearn': ['plf'],
    'application/vnd.powerbuilder6': ['pbd'],
    'application/vnd.previewsystems.box': ['box'],
    'application/vnd.proteus.magazine': ['mgz'],
    'application/vnd.publishare-delta-tree': ['qps'],
    'application/vnd.pvi.ptid1': ['ptid'],
    'application/vnd.pwg-xhtml-print+xml': ['xhtm'],
    'application/vnd.quark.quarkxpress': [
        'qxd',
        'qxt',
        'qwd',
        'qwt',
        'qxl',
        'qxb',
    ],
    'application/vnd.rar': ['rar'],
    'application/vnd.realvnc.bed': ['bed'],
    'application/vnd.recordare.musicxml': ['mxl'],
    'application/vnd.recordare.musicxml+xml': ['musicxml'],
    'application/vnd.rig.cryptonote': ['cryptonote'],
    'application/vnd.rim.cod': ['cod'],
    'application/vnd.rn-realmedia': ['rm'],
    'application/vnd.rn-realmedia-vbr': ['rmvb'],
    'application/vnd.route66.link66+xml': ['link66'],
    'application/vnd.sailingtracker.track': ['st'],
    'application/vnd.seemail': ['see'],
    'application/vnd.sema': ['sema'],
    'application/vnd.semd': ['semd'],
    'application/vnd.semf': ['semf'],
    'application/vnd.shana.informed.formdata': ['ifm'],
    'application/vnd.shana.informed.formtemplate': ['itp'],
    'application/vnd.shana.informed.interchange': ['iif'],
    'application/vnd.shana.informed.package': ['ipk'],
    'application/vnd.simtech-mindmapper': ['twd', 'twds'],
    'application/vnd.smaf': ['mmf'],
    'application/vnd.smart.teacher': ['teacher'],
    'application/vnd.software602.filler.form+xml': ['fo'],
    'application/vnd.solent.sdkm+xml': ['sdkm', 'sdkd'],
    'application/vnd.spotfire.dxp': ['dxp'],
    'application/vnd.spotfire.sfs': ['sfs'],
    'application/vnd.stardivision.calc': ['sdc'],
    'application/vnd.stardivision.draw': ['sda'],
    'application/vnd.stardivision.impress': ['sdd'],
    'application/vnd.stardivision.math': ['smf'],
    'application/vnd.stardivision.writer': ['sdw', 'vor'],
    'application/vnd.stardivision.writer-global': ['sgl'],
    'application/vnd.stepmania.package': ['smzip'],
    'application/vnd.stepmania.stepchart': ['sm'],
    'application/vnd.sun.wadl+xml': ['wadl'],
    'application/vnd.sun.xml.calc': ['sxc'],
    'application/vnd.sun.xml.calc.template': ['stc'],
    'application/vnd.sun.xml.draw': ['sxd'],
    'application/vnd.sun.xml.draw.template': ['std'],
    'application/vnd.sun.xml.impress': ['sxi'],
    'application/vnd.sun.xml.impress.template': ['sti'],
    'application/vnd.sun.xml.math': ['sxm'],
    'application/vnd.sun.xml.writer': ['sxw'],
    'application/vnd.sun.xml.writer.global': ['sxg'],
    'application/vnd.sun.xml.writer.template': ['stw'],
    'application/vnd.sus-calendar': ['sus', 'susp'],
    'application/vnd.svd': ['svd'],
    'application/vnd.symbian.install': ['sis', 'sisx'],
    'application/vnd.syncml+xml': ['xsm'],
    'application/vnd.syncml.dm+wbxml': ['bdm'],
    'application/vnd.syncml.dm+xml': ['xdm'],
    'application/vnd.syncml.dmddf+xml': ['ddf'],
    'application/vnd.tao.intent-module-archive': ['tao'],
    'application/vnd.tcpdump.pcap': ['pcap', 'cap', 'dmp'],
    'application/vnd.tmobile-livetv': ['tmo'],
    'application/vnd.trid.tpt': ['tpt'],
    'application/vnd.triscape.mxs': ['mxs'],
    'application/vnd.trueapp': ['tra'],
    'application/vnd.ufdl': ['ufd', 'ufdl'],
    'application/vnd.uiq.theme': ['utz'],
    'application/vnd.umajin': ['umj'],
    'application/vnd.unity': ['unityweb'],
    'application/vnd.uoml+xml': ['uoml', 'uo'],
    'application/vnd.vcx': ['vcx'],
    'application/vnd.visio': ['vsd', 'vst', 'vss', 'vsw'],
    'application/vnd.visionary': ['vis'],
    'application/vnd.vsf': ['vsf'],
    'application/vnd.wap.wbxml': ['wbxml'],
    'application/vnd.wap.wmlc': ['wmlc'],
    'application/vnd.wap.wmlscriptc': ['wmlsc'],
    'application/vnd.webturbo': ['wtb'],
    'application/vnd.wolfram.player': ['nbp'],
    'application/vnd.wordperfect': ['wpd'],
    'application/vnd.wqd': ['wqd'],
    'application/vnd.wt.stf': ['stf'],
    'application/vnd.xara': ['xar'],
    'application/vnd.xfdl': ['xfdl'],
    'application/vnd.yamaha.hv-dic': ['hvd'],
    'application/vnd.yamaha.hv-script': ['hvs'],
    'application/vnd.yamaha.hv-voice': ['hvp'],
    'application/vnd.yamaha.openscoreformat': ['osf'],
    'application/vnd.yamaha.openscoreformat.osfpvg+xml': ['osfpvg'],
    'application/vnd.yamaha.smaf-audio': ['saf'],
    'application/vnd.yamaha.smaf-phrase': ['spf'],
    'application/vnd.yellowriver-custom-menu': ['cmp'],
    'application/vnd.zul': ['zir', 'zirz'],
    'application/vnd.zzazz.deck+xml': ['zaz'],
    'application/x-7z-compressed': ['7z'],
    'application/x-abiword': ['abw'],
    'application/x-ace-compressed': ['ace'],
    'application/x-apple-diskimage': ['*dmg'],
    'application/x-arj': ['arj'],
    'application/x-authorware-bin': ['aab', 'x32', 'u32', 'vox'],
    'application/x-authorware-map': ['aam'],
    'application/x-authorware-seg': ['aas'],
    'application/x-bcpio': ['bcpio'],
    'application/x-bdoc': ['*bdoc'],
    'application/x-bittorrent': ['torrent'],
    'application/x-blorb': ['blb', 'blorb'],
    'application/x-bzip': ['bz'],
    'application/x-bzip2': ['bz2', 'boz'],
    'application/x-cbr': ['cbr', 'cba', 'cbt', 'cbz', 'cb7'],
    'application/x-cdlink': ['vcd'],
    'application/x-cfs-compressed': ['cfs'],
    'application/x-chat': ['chat'],
    'application/x-chess-pgn': ['pgn'],
    'application/x-chrome-extension': ['crx'],
    'application/x-cocoa': ['cco'],
    'application/x-conference': ['nsc'],
    'application/x-cpio': ['cpio'],
    'application/x-csh': ['csh'],
    'application/x-debian-package': ['*deb', 'udeb'],
    'application/x-dgc-compressed': ['dgc'],
    'application/x-director': [
        'dir',
        'dcr',
        'dxr',
        'cst',
        'cct',
        'cxt',
        'w3d',
        'fgd',
        'swa',
    ],
    'application/x-doom': ['wad'],
    'application/x-dtbncx+xml': ['ncx'],
    'application/x-dtbook+xml': ['dtb'],
    'application/x-dtbresource+xml': ['res'],
    'application/x-dvi': ['dvi'],
    'application/x-envoy': ['evy'],
    'application/x-eva': ['eva'],
    'application/x-font-bdf': ['bdf'],
    'application/x-font-ghostscript': ['gsf'],
    'application/x-font-linux-psf': ['psf'],
    'application/x-font-pcf': ['pcf'],
    'application/x-font-snf': ['snf'],
    'application/x-font-type1': ['pfa', 'pfb', 'pfm', 'afm'],
    'application/x-freearc': ['arc'],
    'application/x-futuresplash': ['spl'],
    'application/x-gca-compressed': ['gca'],
    'application/x-glulx': ['ulx'],
    'application/x-gnumeric': ['gnumeric'],
    'application/x-gramps-xml': ['gramps'],
    'application/x-gtar': ['gtar'],
    'application/x-hdf': ['hdf'],
    'application/x-httpd-php': ['php'],
    'application/x-install-instructions': ['install'],
    'application/x-iso9660-image': ['*iso'],
    'application/x-iwork-keynote-sffkey': ['*key'],
    'application/x-iwork-numbers-sffnumbers': ['*numbers'],
    'application/x-iwork-pages-sffpages': ['*pages'],
    'application/x-java-archive-diff': ['jardiff'],
    'application/x-java-jnlp-file': ['jnlp'],
    'application/x-keepass2': ['kdbx'],
    'application/x-latex': ['latex'],
    'application/x-lua-bytecode': ['luac'],
    'application/x-lzh-compressed': ['lzh', 'lha'],
    'application/x-makeself': ['run'],
    'application/x-mie': ['mie'],
    'application/x-mobipocket-ebook': ['*prc', 'mobi'],
    'application/x-ms-application': ['application'],
    'application/x-ms-shortcut': ['lnk'],
    'application/x-ms-wmd': ['wmd'],
    'application/x-ms-wmz': ['wmz'],
    'application/x-ms-xbap': ['xbap'],
    'application/x-msaccess': ['mdb'],
    'application/x-msbinder': ['obd'],
    'application/x-mscardfile': ['crd'],
    'application/x-msclip': ['clp'],
    'application/x-msdos-program': ['*exe'],
    'application/x-msdownload': ['*exe', '*dll', 'com', 'bat', '*msi'],
    'application/x-msmediaview': ['mvb', 'm13', 'm14'],
    'application/x-msmetafile': ['*wmf', '*wmz', '*emf', 'emz'],
    'application/x-msmoney': ['mny'],
    'application/x-mspublisher': ['pub'],
    'application/x-msschedule': ['scd'],
    'application/x-msterminal': ['trm'],
    'application/x-mswrite': ['wri'],
    'application/x-netcdf': ['nc', 'cdf'],
    'application/x-ns-proxy-autoconfig': ['pac'],
    'application/x-nzb': ['nzb'],
    'application/x-perl': ['pl', 'pm'],
    'application/x-pilot': ['*prc', '*pdb'],
    'application/x-pkcs12': ['p12', 'pfx'],
    'application/x-pkcs7-certificates': ['p7b', 'spc'],
    'application/x-pkcs7-certreqresp': ['p7r'],
    'application/x-rar-compressed': ['*rar'],
    'application/x-redhat-package-manager': ['rpm'],
    'application/x-research-info-systems': ['ris'],
    'application/x-sea': ['sea'],
    'application/x-sh': ['sh'],
    'application/x-shar': ['shar'],
    'application/x-shockwave-flash': ['swf'],
    'application/x-silverlight-app': ['xap'],
    'application/x-sql': ['*sql'],
    'application/x-stuffit': ['sit'],
    'application/x-stuffitx': ['sitx'],
    'application/x-subrip': ['srt'],
    'application/x-sv4cpio': ['sv4cpio'],
    'application/x-sv4crc': ['sv4crc'],
    'application/x-t3vm-image': ['t3'],
    'application/x-tads': ['gam'],
    'application/x-tar': ['tar'],
    'application/x-tcl': ['tcl', 'tk'],
    'application/x-tex': ['tex'],
    'application/x-tex-tfm': ['tfm'],
    'application/x-texinfo': ['texinfo', 'texi'],
    'application/x-tgif': ['*obj'],
    'application/x-ustar': ['ustar'],
    'application/x-virtualbox-hdd': ['hdd'],
    'application/x-virtualbox-ova': ['ova'],
    'application/x-virtualbox-ovf': ['ovf'],
    'application/x-virtualbox-vbox': ['vbox'],
    'application/x-virtualbox-vbox-extpack': ['vbox-extpack'],
    'application/x-virtualbox-vdi': ['vdi'],
    'application/x-virtualbox-vhd': ['vhd'],
    'application/x-virtualbox-vmdk': ['vmdk'],
    'application/x-wais-source': ['src'],
    'application/x-web-app-manifest+json': ['webapp'],
    'application/x-x509-ca-cert': ['der', 'crt', 'pem'],
    'application/x-xfig': ['fig'],
    'application/x-xliff+xml': ['*xlf'],
    'application/x-xpinstall': ['xpi'],
    'application/x-xz': ['xz'],
    'application/x-zmachine': ['z1', 'z2', 'z3', 'z4', 'z5', 'z6', 'z7', 'z8'],
    'audio/vnd.dece.audio': ['uva', 'uvva'],
    'audio/vnd.digital-winds': ['eol'],
    'audio/vnd.dra': ['dra'],
    'audio/vnd.dts': ['dts'],
    'audio/vnd.dts.hd': ['dtshd'],
    'audio/vnd.lucent.voice': ['lvp'],
    'audio/vnd.ms-playready.media.pya': ['pya'],
    'audio/vnd.nuera.ecelp4800': ['ecelp4800'],
    'audio/vnd.nuera.ecelp7470': ['ecelp7470'],
    'audio/vnd.nuera.ecelp9600': ['ecelp9600'],
    'audio/vnd.rip': ['rip'],
    'audio/x-aac': ['*aac'],
    'audio/x-aiff': ['aif', 'aiff', 'aifc'],
    'audio/x-caf': ['caf'],
    'audio/x-flac': ['flac'],
    'audio/x-m4a': ['*m4a'],
    'audio/x-matroska': ['mka'],
    'audio/x-mpegurl': ['m3u'],
    'audio/x-ms-wax': ['wax'],
    'audio/x-ms-wma': ['wma'],
    'audio/x-pn-realaudio': ['ram', 'ra'],
    'audio/x-pn-realaudio-plugin': ['rmp'],
    'audio/x-realaudio': ['*ra'],
    'audio/x-wav': ['*wav'],
    'chemical/x-cdx': ['cdx'],
    'chemical/x-cif': ['cif'],
    'chemical/x-cmdf': ['cmdf'],
    'chemical/x-cml': ['cml'],
    'chemical/x-csml': ['csml'],
    'chemical/x-xyz': ['xyz'],
    'image/prs.btif': ['btif', 'btf'],
    'image/prs.pti': ['pti'],
    'image/vnd.adobe.photoshop': ['psd'],
    'image/vnd.airzip.accelerator.azv': ['azv'],
    'image/vnd.dece.graphic': ['uvi', 'uvvi', 'uvg', 'uvvg'],
    'image/vnd.djvu': ['djvu', 'djv'],
    'image/vnd.dvb.subtitle': ['*sub'],
    'image/vnd.dwg': ['dwg'],
    'image/vnd.dxf': ['dxf'],
    'image/vnd.fastbidsheet': ['fbs'],
    'image/vnd.fpx': ['fpx'],
    'image/vnd.fst': ['fst'],
    'image/vnd.fujixerox.edmics-mmr': ['mmr'],
    'image/vnd.fujixerox.edmics-rlc': ['rlc'],
    'image/vnd.microsoft.icon': ['ico'],
    'image/vnd.ms-dds': ['dds'],
    'image/vnd.ms-modi': ['mdi'],
    'image/vnd.ms-photo': ['wdp'],
    'image/vnd.net-fpx': ['npx'],
    'image/vnd.pco.b16': ['b16'],
    'image/vnd.tencent.tap': ['tap'],
    'image/vnd.valve.source.texture': ['vtf'],
    'image/vnd.wap.wbmp': ['wbmp'],
    'image/vnd.xiff': ['xif'],
    'image/vnd.zbrush.pcx': ['pcx'],
    'image/x-3ds': ['3ds'],
    'image/x-cmu-raster': ['ras'],
    'image/x-cmx': ['cmx'],
    'image/x-freehand': ['fh', 'fhc', 'fh4', 'fh5', 'fh7'],
    'image/x-icon': ['*ico'],
    'image/x-jng': ['jng'],
    'image/x-mrsid-image': ['sid'],
    'image/x-ms-bmp': ['*bmp'],
    'image/x-pcx': ['*pcx'],
    'image/x-pict': ['pic', 'pct'],
    'image/x-portable-anymap': ['pnm'],
    'image/x-portable-bitmap': ['pbm'],
    'image/x-portable-graymap': ['pgm'],
    'image/x-portable-pixmap': ['ppm'],
    'image/x-rgb': ['rgb'],
    'image/x-tga': ['tga'],
    'image/x-xbitmap': ['xbm'],
    'image/x-xpixmap': ['xpm'],
    'image/x-xwindowdump': ['xwd'],
    'message/vnd.wfa.wsc': ['wsc'],
    'model/vnd.bary': ['bary'],
    'model/vnd.cld': ['cld'],
    'model/vnd.collada+xml': ['dae'],
    'model/vnd.dwf': ['dwf'],
    'model/vnd.gdl': ['gdl'],
    'model/vnd.gtw': ['gtw'],
    'model/vnd.mts': ['*mts'],
    'model/vnd.opengex': ['ogex'],
    'model/vnd.parasolid.transmit.binary': ['x_b'],
    'model/vnd.parasolid.transmit.text': ['x_t'],
    'model/vnd.pytha.pyox': ['pyo', 'pyox'],
    'model/vnd.sap.vds': ['vds'],
    'model/vnd.usda': ['usda'],
    'model/vnd.usdz+zip': ['usdz'],
    'model/vnd.valve.source.compiled-map': ['bsp'],
    'model/vnd.vtu': ['vtu'],
    'text/prs.lines.tag': ['dsc'],
    'text/vnd.curl': ['curl'],
    'text/vnd.curl.dcurl': ['dcurl'],
    'text/vnd.curl.mcurl': ['mcurl'],
    'text/vnd.curl.scurl': ['scurl'],
    'text/vnd.dvb.subtitle': ['sub'],
    'text/vnd.familysearch.gedcom': ['ged'],
    'text/vnd.fly': ['fly'],
    'text/vnd.fmi.flexstor': ['flx'],
    'text/vnd.graphviz': ['gv'],
    'text/vnd.in3d.3dml': ['3dml'],
    'text/vnd.in3d.spot': ['spot'],
    'text/vnd.sun.j2me.app-descriptor': ['jad'],
    'text/vnd.wap.wml': ['wml'],
    'text/vnd.wap.wmlscript': ['wmls'],
    'text/x-asm': ['s', 'asm'],
    'text/x-c': ['c', 'cc', 'cxx', 'cpp', 'h', 'hh', 'dic'],
    'text/x-component': ['htc'],
    'text/x-fortran': ['f', 'for', 'f77', 'f90'],
    'text/x-handlebars-template': ['hbs'],
    'text/x-java-source': ['java'],
    'text/x-lua': ['lua'],
    'text/x-markdown': ['mkd'],
    'text/x-nfo': ['nfo'],
    'text/x-opml': ['opml'],
    'text/x-org': ['*org'],
    'text/x-pascal': ['p', 'pas'],
    'text/x-processing': ['pde'],
    'text/x-sass': ['sass'],
    'text/x-scss': ['scss'],
    'text/x-setext': ['etx'],
    'text/x-sfv': ['sfv'],
    'text/x-suse-ymp': ['ymp'],
    'text/x-uuencode': ['uu'],
    'text/x-vcalendar': ['vcs'],
    'text/x-vcard': ['vcf'],
    'video/vnd.dece.hd': ['uvh', 'uvvh'],
    'video/vnd.dece.mobile': ['uvm', 'uvvm'],
    'video/vnd.dece.pd': ['uvp', 'uvvp'],
    'video/vnd.dece.sd': ['uvs', 'uvvs'],
    'video/vnd.dece.video': ['uvv', 'uvvv'],
    'video/vnd.dvb.file': ['dvb'],
    'video/vnd.fvt': ['fvt'],
    'video/vnd.mpegurl': ['mxu', 'm4u'],
    'video/vnd.ms-playready.media.pyv': ['pyv'],
    'video/vnd.uvvu.mp4': ['uvu', 'uvvu'],
    'video/vnd.vivo': ['viv'],
    'video/x-f4v': ['f4v'],
    'video/x-fli': ['fli'],
    'video/x-flv': ['flv'],
    'video/x-m4v': ['m4v'],
    'video/x-matroska': ['mkv', 'mk3d', 'mks'],
    'video/x-mng': ['mng'],
    'video/x-ms-asf': ['asf', 'asx'],
    'video/x-ms-vob': ['vob'],
    'video/x-ms-wm': ['wm'],
    'video/x-ms-wmv': ['wmv'],
    'video/x-ms-wmx': ['wmx'],
    'video/x-ms-wvx': ['wvx'],
    'video/x-msvideo': ['avi'],
    'video/x-sgi-movie': ['movie'],
    'video/x-smv': ['smv'],
    'x-conference/x-cooltalk': ['ice'],
};
Object.freeze(types$1);

const types = {
    'application/andrew-inset': ['ez'],
    'application/appinstaller': ['appinstaller'],
    'application/applixware': ['aw'],
    'application/appx': ['appx'],
    'application/appxbundle': ['appxbundle'],
    'application/atom+xml': ['atom'],
    'application/atomcat+xml': ['atomcat'],
    'application/atomdeleted+xml': ['atomdeleted'],
    'application/atomsvc+xml': ['atomsvc'],
    'application/atsc-dwd+xml': ['dwd'],
    'application/atsc-held+xml': ['held'],
    'application/atsc-rsat+xml': ['rsat'],
    'application/automationml-aml+xml': ['aml'],
    'application/automationml-amlx+zip': ['amlx'],
    'application/bdoc': ['bdoc'],
    'application/calendar+xml': ['xcs'],
    'application/ccxml+xml': ['ccxml'],
    'application/cdfx+xml': ['cdfx'],
    'application/cdmi-capability': ['cdmia'],
    'application/cdmi-container': ['cdmic'],
    'application/cdmi-domain': ['cdmid'],
    'application/cdmi-object': ['cdmio'],
    'application/cdmi-queue': ['cdmiq'],
    'application/cpl+xml': ['cpl'],
    'application/cu-seeme': ['cu'],
    'application/cwl': ['cwl'],
    'application/dash+xml': ['mpd'],
    'application/dash-patch+xml': ['mpp'],
    'application/davmount+xml': ['davmount'],
    'application/docbook+xml': ['dbk'],
    'application/dssc+der': ['dssc'],
    'application/dssc+xml': ['xdssc'],
    'application/ecmascript': ['ecma'],
    'application/emma+xml': ['emma'],
    'application/emotionml+xml': ['emotionml'],
    'application/epub+zip': ['epub'],
    'application/exi': ['exi'],
    'application/express': ['exp'],
    'application/fdf': ['fdf'],
    'application/fdt+xml': ['fdt'],
    'application/font-tdpfr': ['pfr'],
    'application/geo+json': ['geojson'],
    'application/gml+xml': ['gml'],
    'application/gpx+xml': ['gpx'],
    'application/gxf': ['gxf'],
    'application/gzip': ['gz'],
    'application/hjson': ['hjson'],
    'application/hyperstudio': ['stk'],
    'application/inkml+xml': ['ink', 'inkml'],
    'application/ipfix': ['ipfix'],
    'application/its+xml': ['its'],
    'application/java-archive': ['jar', 'war', 'ear'],
    'application/java-serialized-object': ['ser'],
    'application/java-vm': ['class'],
    'application/javascript': ['*js'],
    'application/json': ['json', 'map'],
    'application/json5': ['json5'],
    'application/jsonml+json': ['jsonml'],
    'application/ld+json': ['jsonld'],
    'application/lgr+xml': ['lgr'],
    'application/lost+xml': ['lostxml'],
    'application/mac-binhex40': ['hqx'],
    'application/mac-compactpro': ['cpt'],
    'application/mads+xml': ['mads'],
    'application/manifest+json': ['webmanifest'],
    'application/marc': ['mrc'],
    'application/marcxml+xml': ['mrcx'],
    'application/mathematica': ['ma', 'nb', 'mb'],
    'application/mathml+xml': ['mathml'],
    'application/mbox': ['mbox'],
    'application/media-policy-dataset+xml': ['mpf'],
    'application/mediaservercontrol+xml': ['mscml'],
    'application/metalink+xml': ['metalink'],
    'application/metalink4+xml': ['meta4'],
    'application/mets+xml': ['mets'],
    'application/mmt-aei+xml': ['maei'],
    'application/mmt-usd+xml': ['musd'],
    'application/mods+xml': ['mods'],
    'application/mp21': ['m21', 'mp21'],
    'application/mp4': ['*mp4', '*mpg4', 'mp4s', 'm4p'],
    'application/msix': ['msix'],
    'application/msixbundle': ['msixbundle'],
    'application/msword': ['doc', 'dot'],
    'application/mxf': ['mxf'],
    'application/n-quads': ['nq'],
    'application/n-triples': ['nt'],
    'application/node': ['cjs'],
    'application/octet-stream': [
        'bin',
        'dms',
        'lrf',
        'mar',
        'so',
        'dist',
        'distz',
        'pkg',
        'bpk',
        'dump',
        'elc',
        'deploy',
        'exe',
        'dll',
        'deb',
        'dmg',
        'iso',
        'img',
        'msi',
        'msp',
        'msm',
        'buffer',
    ],
    'application/oda': ['oda'],
    'application/oebps-package+xml': ['opf'],
    'application/ogg': ['ogx'],
    'application/omdoc+xml': ['omdoc'],
    'application/onenote': ['onetoc', 'onetoc2', 'onetmp', 'onepkg'],
    'application/oxps': ['oxps'],
    'application/p2p-overlay+xml': ['relo'],
    'application/patch-ops-error+xml': ['xer'],
    'application/pdf': ['pdf'],
    'application/pgp-encrypted': ['pgp'],
    'application/pgp-keys': ['asc'],
    'application/pgp-signature': ['sig', '*asc'],
    'application/pics-rules': ['prf'],
    'application/pkcs10': ['p10'],
    'application/pkcs7-mime': ['p7m', 'p7c'],
    'application/pkcs7-signature': ['p7s'],
    'application/pkcs8': ['p8'],
    'application/pkix-attr-cert': ['ac'],
    'application/pkix-cert': ['cer'],
    'application/pkix-crl': ['crl'],
    'application/pkix-pkipath': ['pkipath'],
    'application/pkixcmp': ['pki'],
    'application/pls+xml': ['pls'],
    'application/postscript': ['ai', 'eps', 'ps'],
    'application/provenance+xml': ['provx'],
    'application/pskc+xml': ['pskcxml'],
    'application/raml+yaml': ['raml'],
    'application/rdf+xml': ['rdf', 'owl'],
    'application/reginfo+xml': ['rif'],
    'application/relax-ng-compact-syntax': ['rnc'],
    'application/resource-lists+xml': ['rl'],
    'application/resource-lists-diff+xml': ['rld'],
    'application/rls-services+xml': ['rs'],
    'application/route-apd+xml': ['rapd'],
    'application/route-s-tsid+xml': ['sls'],
    'application/route-usd+xml': ['rusd'],
    'application/rpki-ghostbusters': ['gbr'],
    'application/rpki-manifest': ['mft'],
    'application/rpki-roa': ['roa'],
    'application/rsd+xml': ['rsd'],
    'application/rss+xml': ['rss'],
    'application/rtf': ['rtf'],
    'application/sbml+xml': ['sbml'],
    'application/scvp-cv-request': ['scq'],
    'application/scvp-cv-response': ['scs'],
    'application/scvp-vp-request': ['spq'],
    'application/scvp-vp-response': ['spp'],
    'application/sdp': ['sdp'],
    'application/senml+xml': ['senmlx'],
    'application/sensml+xml': ['sensmlx'],
    'application/set-payment-initiation': ['setpay'],
    'application/set-registration-initiation': ['setreg'],
    'application/shf+xml': ['shf'],
    'application/sieve': ['siv', 'sieve'],
    'application/smil+xml': ['smi', 'smil'],
    'application/sparql-query': ['rq'],
    'application/sparql-results+xml': ['srx'],
    'application/sql': ['sql'],
    'application/srgs': ['gram'],
    'application/srgs+xml': ['grxml'],
    'application/sru+xml': ['sru'],
    'application/ssdl+xml': ['ssdl'],
    'application/ssml+xml': ['ssml'],
    'application/swid+xml': ['swidtag'],
    'application/tei+xml': ['tei', 'teicorpus'],
    'application/thraud+xml': ['tfi'],
    'application/timestamped-data': ['tsd'],
    'application/toml': ['toml'],
    'application/trig': ['trig'],
    'application/ttml+xml': ['ttml'],
    'application/ubjson': ['ubj'],
    'application/urc-ressheet+xml': ['rsheet'],
    'application/urc-targetdesc+xml': ['td'],
    'application/voicexml+xml': ['vxml'],
    'application/wasm': ['wasm'],
    'application/watcherinfo+xml': ['wif'],
    'application/widget': ['wgt'],
    'application/winhlp': ['hlp'],
    'application/wsdl+xml': ['wsdl'],
    'application/wspolicy+xml': ['wspolicy'],
    'application/xaml+xml': ['xaml'],
    'application/xcap-att+xml': ['xav'],
    'application/xcap-caps+xml': ['xca'],
    'application/xcap-diff+xml': ['xdf'],
    'application/xcap-el+xml': ['xel'],
    'application/xcap-ns+xml': ['xns'],
    'application/xenc+xml': ['xenc'],
    'application/xfdf': ['xfdf'],
    'application/xhtml+xml': ['xhtml', 'xht'],
    'application/xliff+xml': ['xlf'],
    'application/xml': ['xml', 'xsl', 'xsd', 'rng'],
    'application/xml-dtd': ['dtd'],
    'application/xop+xml': ['xop'],
    'application/xproc+xml': ['xpl'],
    'application/xslt+xml': ['*xsl', 'xslt'],
    'application/xspf+xml': ['xspf'],
    'application/xv+xml': ['mxml', 'xhvml', 'xvml', 'xvm'],
    'application/yang': ['yang'],
    'application/yin+xml': ['yin'],
    'application/zip': ['zip'],
    'audio/3gpp': ['*3gpp'],
    'audio/aac': ['adts', 'aac'],
    'audio/adpcm': ['adp'],
    'audio/amr': ['amr'],
    'audio/basic': ['au', 'snd'],
    'audio/midi': ['mid', 'midi', 'kar', 'rmi'],
    'audio/mobile-xmf': ['mxmf'],
    'audio/mp3': ['*mp3'],
    'audio/mp4': ['m4a', 'mp4a'],
    'audio/mpeg': ['mpga', 'mp2', 'mp2a', 'mp3', 'm2a', 'm3a'],
    'audio/ogg': ['oga', 'ogg', 'spx', 'opus'],
    'audio/s3m': ['s3m'],
    'audio/silk': ['sil'],
    'audio/wav': ['wav'],
    'audio/wave': ['*wav'],
    'audio/webm': ['weba'],
    'audio/xm': ['xm'],
    'font/collection': ['ttc'],
    'font/otf': ['otf'],
    'font/ttf': ['ttf'],
    'font/woff': ['woff'],
    'font/woff2': ['woff2'],
    'image/aces': ['exr'],
    'image/apng': ['apng'],
    'image/avci': ['avci'],
    'image/avcs': ['avcs'],
    'image/avif': ['avif'],
    'image/bmp': ['bmp', 'dib'],
    'image/cgm': ['cgm'],
    'image/dicom-rle': ['drle'],
    'image/dpx': ['dpx'],
    'image/emf': ['emf'],
    'image/fits': ['fits'],
    'image/g3fax': ['g3'],
    'image/gif': ['gif'],
    'image/heic': ['heic'],
    'image/heic-sequence': ['heics'],
    'image/heif': ['heif'],
    'image/heif-sequence': ['heifs'],
    'image/hej2k': ['hej2'],
    'image/hsj2': ['hsj2'],
    'image/ief': ['ief'],
    'image/jls': ['jls'],
    'image/jp2': ['jp2', 'jpg2'],
    'image/jpeg': ['jpeg', 'jpg', 'jpe'],
    'image/jph': ['jph'],
    'image/jphc': ['jhc'],
    'image/jpm': ['jpm', 'jpgm'],
    'image/jpx': ['jpx', 'jpf'],
    'image/jxl': ['jxl'],
    'image/jxr': ['jxr'],
    'image/jxra': ['jxra'],
    'image/jxrs': ['jxrs'],
    'image/jxs': ['jxs'],
    'image/jxsc': ['jxsc'],
    'image/jxsi': ['jxsi'],
    'image/jxss': ['jxss'],
    'image/ktx': ['ktx'],
    'image/ktx2': ['ktx2'],
    'image/png': ['png'],
    'image/sgi': ['sgi'],
    'image/svg+xml': ['svg', 'svgz'],
    'image/t38': ['t38'],
    'image/tiff': ['tif', 'tiff'],
    'image/tiff-fx': ['tfx'],
    'image/webp': ['webp'],
    'image/wmf': ['wmf'],
    'message/disposition-notification': ['disposition-notification'],
    'message/global': ['u8msg'],
    'message/global-delivery-status': ['u8dsn'],
    'message/global-disposition-notification': ['u8mdn'],
    'message/global-headers': ['u8hdr'],
    'message/rfc822': ['eml', 'mime'],
    'model/3mf': ['3mf'],
    'model/gltf+json': ['gltf'],
    'model/gltf-binary': ['glb'],
    'model/iges': ['igs', 'iges'],
    'model/jt': ['jt'],
    'model/mesh': ['msh', 'mesh', 'silo'],
    'model/mtl': ['mtl'],
    'model/obj': ['obj'],
    'model/prc': ['prc'],
    'model/step+xml': ['stpx'],
    'model/step+zip': ['stpz'],
    'model/step-xml+zip': ['stpxz'],
    'model/stl': ['stl'],
    'model/u3d': ['u3d'],
    'model/vrml': ['wrl', 'vrml'],
    'model/x3d+binary': ['*x3db', 'x3dbz'],
    'model/x3d+fastinfoset': ['x3db'],
    'model/x3d+vrml': ['*x3dv', 'x3dvz'],
    'model/x3d+xml': ['x3d', 'x3dz'],
    'model/x3d-vrml': ['x3dv'],
    'text/cache-manifest': ['appcache', 'manifest'],
    'text/calendar': ['ics', 'ifb'],
    'text/coffeescript': ['coffee', 'litcoffee'],
    'text/css': ['css'],
    'text/csv': ['csv'],
    'text/html': ['html', 'htm', 'shtml'],
    'text/jade': ['jade'],
    'text/javascript': ['js', 'mjs'],
    'text/jsx': ['jsx'],
    'text/less': ['less'],
    'text/markdown': ['md', 'markdown'],
    'text/mathml': ['mml'],
    'text/mdx': ['mdx'],
    'text/n3': ['n3'],
    'text/plain': ['txt', 'text', 'conf', 'def', 'list', 'log', 'in', 'ini'],
    'text/richtext': ['rtx'],
    'text/rtf': ['*rtf'],
    'text/sgml': ['sgml', 'sgm'],
    'text/shex': ['shex'],
    'text/slim': ['slim', 'slm'],
    'text/spdx': ['spdx'],
    'text/stylus': ['stylus', 'styl'],
    'text/tab-separated-values': ['tsv'],
    'text/troff': ['t', 'tr', 'roff', 'man', 'me', 'ms'],
    'text/turtle': ['ttl'],
    'text/uri-list': ['uri', 'uris', 'urls'],
    'text/vcard': ['vcard'],
    'text/vtt': ['vtt'],
    'text/wgsl': ['wgsl'],
    'text/xml': ['*xml'],
    'text/yaml': ['yaml', 'yml'],
    'video/3gpp': ['3gp', '3gpp'],
    'video/3gpp2': ['3g2'],
    'video/h261': ['h261'],
    'video/h263': ['h263'],
    'video/h264': ['h264'],
    'video/iso.segment': ['m4s'],
    'video/jpeg': ['jpgv'],
    'video/jpm': ['*jpm', '*jpgm'],
    'video/mj2': ['mj2', 'mjp2'],
    'video/mp2t': ['ts', 'm2t', 'm2ts', 'mts'],
    'video/mp4': ['mp4', 'mp4v', 'mpg4'],
    'video/mpeg': ['mpeg', 'mpg', 'mpe', 'm1v', 'm2v'],
    'video/ogg': ['ogv'],
    'video/quicktime': ['qt', 'mov'],
    'video/webm': ['webm'],
};
Object.freeze(types);

var __classPrivateFieldGet = (undefined && undefined.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Mime_extensionToType, _Mime_typeToExtension, _Mime_typeToExtensions;
class Mime {
    constructor(...args) {
        _Mime_extensionToType.set(this, new Map());
        _Mime_typeToExtension.set(this, new Map());
        _Mime_typeToExtensions.set(this, new Map());
        for (const arg of args) {
            this.define(arg);
        }
    }
    define(typeMap, force = false) {
        for (let [type, extensions] of Object.entries(typeMap)) {
            type = type.toLowerCase();
            extensions = extensions.map((ext) => ext.toLowerCase());
            if (!__classPrivateFieldGet(this, _Mime_typeToExtensions, "f").has(type)) {
                __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").set(type, new Set());
            }
            const allExtensions = __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type);
            let first = true;
            for (let extension of extensions) {
                const starred = extension.startsWith('*');
                extension = starred ? extension.slice(1) : extension;
                allExtensions?.add(extension);
                if (first) {
                    __classPrivateFieldGet(this, _Mime_typeToExtension, "f").set(type, extension);
                }
                first = false;
                if (starred)
                    continue;
                const currentType = __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(extension);
                if (currentType && currentType != type && !force) {
                    throw new Error(`"${type} -> ${extension}" conflicts with "${currentType} -> ${extension}". Pass \`force=true\` to override this definition.`);
                }
                __classPrivateFieldGet(this, _Mime_extensionToType, "f").set(extension, type);
            }
        }
        return this;
    }
    getType(path) {
        if (typeof path !== 'string')
            return null;
        const last = path.replace(/^.*[/\\]/, '').toLowerCase();
        const ext = last.replace(/^.*\./, '').toLowerCase();
        const hasPath = last.length < path.length;
        const hasDot = ext.length < last.length - 1;
        if (!hasDot && hasPath)
            return null;
        return __classPrivateFieldGet(this, _Mime_extensionToType, "f").get(ext) ?? null;
    }
    getExtension(type) {
        if (typeof type !== 'string')
            return null;
        type = type?.split?.(';')[0];
        return ((type && __classPrivateFieldGet(this, _Mime_typeToExtension, "f").get(type.trim().toLowerCase())) ?? null);
    }
    getAllExtensions(type) {
        if (typeof type !== 'string')
            return null;
        return __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").get(type.toLowerCase()) ?? null;
    }
    _freeze() {
        this.define = () => {
            throw new Error('define() not allowed for built-in Mime objects. See https://github.com/broofa/mime/blob/main/README.md#custom-mime-instances');
        };
        Object.freeze(this);
        for (const extensions of __classPrivateFieldGet(this, _Mime_typeToExtensions, "f").values()) {
            Object.freeze(extensions);
        }
        return this;
    }
    _getTestState() {
        return {
            types: __classPrivateFieldGet(this, _Mime_extensionToType, "f"),
            extensions: __classPrivateFieldGet(this, _Mime_typeToExtension, "f"),
        };
    }
}
_Mime_extensionToType = new WeakMap(), _Mime_typeToExtension = new WeakMap(), _Mime_typeToExtensions = new WeakMap();

var mime = new Mime(types, types$1)._freeze();

const emojiData = [
  ['😔', ['pensive', 'pensive_face', 'sigh']],
  ['😉', ['wink']],
  ['🗿', ['moai', 'moyai']],
  ['😳', ['flushed', 'stunned', 'shocked']],
  ['😐', ['neutral', 'meh']],
  ['🤔', ['thinking', 'think', 'hmm']],
  ['😊', ['smiling', 'happy', 'smile']],
  ['😂', ['laughing', 'lol', 'haha']],
  ['🤣', ['rolling_on_the_floor_laughing', 'rofl']],
  ['👍', ['thumbsup', 'ok', 'good']],
  ['👎', ['thumbsdown', 'bad', 'no']],
  ['💯', ['perfect', '100', 'amazing']],
  ['🔥', ['fire', 'hot', 'lit']],
  ['✨', ['sparkles', 'glitter', 'shine']],
  ['💖', ['pink_heart', 'love', 'cute']],
  ['💙', ['blue_heart', 'sad']],
  ['💜', ['purple_heart', 'love']],
  ['💚', ['green_heart', 'nature']],
  ['💛', ['yellow_heart', 'joy']],
  ['❤️', ['red_heart', 'love']],
  ['🖤', ['black_heart', 'death']],
  ['🤍', ['white_heart', 'peace']],
  ['💔', ['broken_heart', 'sad']],
  ['🥰', ['smiling_face_with_hearts', 'love']],
  ['😍', ['smiling_face_with_heart_eyes', 'love']],
  ['😘', ['face_blowing_a_kiss', 'kiss']],
  ['😗', ['kissing_face', 'kiss']],
  ['😙', ['kissing_face_with_smiling_eyes', 'kiss']],
  ['😚', ['kissing_face_with_closed_eyes', 'kiss']],
  ['😋', ['face_savoring_food', 'delicious']],
  ['😛', ['face_with_tongue', 'silly']],
  ['😜', ['winking_face_with_tongue', 'playful']],
  ['😝', ['squinting_face_with_tongue', 'mischievous']],
  ['🤤', ['drooling_face', 'hungry']],
  ['😒', ['unamused_face', 'bored']],
  ['😓', ['worried_face', 'anxious']],
  ['😔', ['pensive_face', 'sad']],
  ['😕', ['confused_face', 'questioning']],
  ['😟', ['worried_face', 'concerned']],
  ['🙁', ['slightly_frowning_face', 'disappointed']],
  ['☹️', ['frowning_face', 'sad']],
  ['😣', ['persevering_face', 'struggling']],
  ['😖', ['confounded_face', 'stressed']],
  ['😫', ['tired_face', 'exhausted']],
  ['😩', ['weary_face', 'tired']],
  ['😤', ['face_with_steam_from_nose', 'angry']],
  ['😠', ['angry_face', 'mad']],
  ['😡', ['pouting_face', 'irritated']],
  ['🤬', ['face_with_symbols_on_mouth', 'cursing']],
  ['🤯', ['exploding_head', 'shocked']],
  ['😳', ['flushed_face', 'embarrassed']],
  ['😱', ['scream', 'scared']],
  ['😨', ['fearful_face', 'afraid']],
  ['😰', ['anxious_face_with_sweat', 'nervous']],
  ['😥', ['sad_but_relieved_face', 'sorry']],
  ['😓', ['face_with_head_bandage', 'injured']],
  ['🤗', ['hugging_face', 'warm']],
  ['🤔', ['thinking_face', 'contemplative']],
  ['🤓', ['nerd_face', 'smart']],
  ['😎', ['smiling_face_with_sunglasses', 'cool']],
  ['🤡', ['clown_face', 'funny']],
  ['🤠', ['cowboy_hat_face', 'country']],
  ['👹', ['ogre', 'monster']],
  ['👺', ['goblin', 'imp']],
  ['👻', ['ghost', 'halloween']],
  ['💀', ['skull', 'death']],
  ['👽', ['alien', 'extraterrestrial']],
  ['🤖', ['robot', 'machine']],
  ['💩', ['pile_of_poo', 'poop']],
  ['💯', ['hundred_points', 'perfect']],
  ['👍', ['thumbs_up', 'positive']],
  ['👎', ['thumbs_down', 'negative']],
  ['👏', ['clapping_hands', 'applause']],
  ['🙌', ['raised_hands', 'celebration']],
  ['🙏', ['folded_hands', 'prayer']],
  ['💪', ['flexed_biceps', 'strong']],
  ['🤞', ['crossed_fingers', 'hope']],
  ['✌️', ['victory_hand', 'peace']],
  ['👌', ['OK_hand', 'perfect']],
  ['👍', ['thumbs_up', 'good']],
  ['👎', ['thumbs_down', 'bad']],
  ['💯', ['100', 'perfect']],
  ['❤️', ['heart', 'love']],
  ['💔', ['broken_heart', 'sad']],
  ['✨', ['sparkles', 'magic']],
  ['🔥', ['fire', 'hot']],
  ['⭐', ['star', 'awesome']],
  ['🎉', ['party_popper', 'celebration']],
  ['🎈', ['balloon', 'party']],
  ['🎁', ['gift', 'present']],
  ['🎂', ['birthday_cake', 'celebration']],
  ['🍻', ['clinking_beer_mugs', 'cheers']],
  ['🥂', ['clinking_glasses', 'toast']],
  ['🍾', ['bottle_with_popping_cork', 'celebration']],
  ['⚽', ['soccer_ball', 'sports']],
  ['🏀', ['basketball', 'sports']],
  ['🏈', ['american_football', 'sports']],
  ['⚾', ['baseball', 'sports']],
  ['🎾', ['tennis', 'sports']],
  ['⛳', ['golf', 'sports']],
  ['🎮', ['video_game', 'gaming']],
  ['🎲', ['game_die', 'games']],
  ['🎯', ['direct_hit', 'target']],
  ['🎧', ['headphones', 'music']],
  ['🎤', ['microphone', 'singing']],
  ['🎬', ['clapper_board', 'film']],
  ['🎨', ['artist_palette', 'art']],
  ['📚', ['books', 'reading']],
  ['✏️', ['pencil', 'writing']],
  ['💻', ['laptop', 'computer']],
  ['📱', ['mobile_phone', 'technology']],
  ['🌐', ['globe_with_meridians', 'world']],
  ['🗺️', ['world_map', 'travel']],
  ['✈️', ['airplane', 'travel']],
  ['🚀', ['rocket', 'space']],
  ['🚗', ['car', 'vehicle']],
  ['🚌', ['bus', 'vehicle']],
  ['🚂', ['train', 'vehicle']],
  ['🚢', ['ship', 'vehicle']],
  ['🚀', ['rocket', 'space']],
  ['🌙', ['crescent_moon', 'night']],
  ['☀️', ['sun', 'day']],
  ['☁️', ['cloud', 'weather']],
  ['☔️', ['umbrella', 'rain']],
  ['❄️', ['snowflake', 'winter']],
  ['🔥', ['fire', 'hot']],
  ['💧', ['drop', 'water']],
  ['💨', ['dash', 'wind']],
  ['💨', ['wind_blowing_face', 'wind']],
  ['💯', ['100', 'perfect']],
  ['✅', ['check_mark', 'correct']],
  ['❌', ['cross_mark', 'incorrect']],
  ['❓', ['question', 'query']],
  ['❗', ['exclamation', 'important']],
  ['⚠️', ['warning', 'alert']],
  ['📌', ['pushpin', 'pin']],
  ['📍', ['round_pushpin', 'location']],
  ['🔗', ['link', 'url']],
  ['➡️', ['right_arrow', 'next']],
  ['⬅️', ['left_arrow', 'back']],
  ['⬆️', ['up_arrow', 'up']],
  ['⬇️', ['down_arrow', 'down']],
  ['🔄', ['arrows_counterclockwise', 'refresh']],
  ['➕', ['plus', 'add']],
  ['➖', ['minus', 'subtract']],
  ['✖️', ['multiply', 'times']],
  ['➗', ['divide', 'fraction']],
  ['💲', ['heavy_dollar_sign', 'money']],
  ['💵', ['dollar_banknote', 'money']],
  ['💰', ['money_bag', 'wealth']],
  ['💳', ['credit_card', 'payment']],
  ['💎', ['gem', 'jewel']],
  ['👑', ['crown', 'royalty']],
  ['💍', ['ring', 'jewelry']],
  ['🎩', ['tophat', 'formal']],
  ['🎓', ['graduation_cap', 'education']],
  ['💼', ['briefcase', 'business']],
  ['📁', ['file_folder', 'files']],
  ['📂', ['open_file_folder', 'files']],
  ['📄', ['page_facing_up', 'document']],
  ['📅', ['calendar', 'date']],
  ['⏰', ['alarm_clock', 'time']],
  ['⏳', ['hourglass', 'time']],
  ['⌚', ['wristwatch', 'time']],
  ['📱', ['iphone', 'phone']],
  ['💻', ['computer', 'laptop']],
  ['🖥️', ['desktop_computer', 'computer']],
  ['🖨️', ['printer', 'printing']],
  ['🖱️', ['computer_mouse', 'mouse']],
  ['⌨️', ['keyboard', 'typing']],
  ['🕹️', ['joystick', 'gaming']],
  ['🎮', ['video_game', 'gaming']],
  ['🎧', ['headphones', 'music']],
  ['🎤', ['microphone', 'singing']],
  ['🎬', ['movie_camera', 'film']],
  ['📸', ['camera', 'photography']],
  ['🖼️', ['framed_picture', 'art']],
  ['🎨', ['art', 'painting']],
  ['📚', ['books', 'reading']],
  ['✏️', ['pencil', 'writing']],
  ['✒️', ['black_nib', 'writing']],
  ['📝', ['memo', 'note']],
  ['📞', ['telephone', 'call']],
  ['📧', ['e-mail', 'message']],
  ['🌐', ['globe_showing_Americas', 'world']],
  ['🗺️', ['world_map', 'travel']],
  ['✈️', ['airplane', 'travel']],
  ['🚀', ['rocket', 'space']],
  ['🚗', ['automobile', 'car']],
  ['🚌', ['bus', 'vehicle']],
  ['🚂', ['train', 'vehicle']],
  ['🚢', ['ship', 'vehicle']],
  ['🚲', ['bicycle', 'bike']],
  ['🚶', ['pedestrian', 'walking']],
  ['🏃', ['runner', 'running']],
  ['🏠', ['house', 'home']],
  ['🏡', ['house_with_garden', 'home']],
  ['🏢', ['office', 'business']],
  ['🏣', ['post_office', 'business']],
  ['🏥', ['hospital', 'healthcare']],
  ['🏦', ['bank', 'finance']],
  ['🏪', ['convenience_store', 'shopping']],
  ['🏫', ['school', 'education']],
  ['🏢', ['office_building', 'business']],
  ['🏭', ['factory', 'industry']],
  ['🏠', ['house_building', 'home']],
  ['🏡', ['house', 'home']],
  ['🌳', ['deciduous_tree', 'nature']],
  ['🌴', ['palm_tree', 'tropical']],
  ['🌵', ['cactus', 'desert']],
  ['🌻', ['sunflower', 'flower']],
  ['🌹', ['rose', 'flower']],
  ['🌷', ['tulip', 'flower']],
  ['🌸', ['cherry_blossom', 'flower']],
  ['🌼', ['blossom', 'flower']],
  ['🌺', ['hibiscus', 'flower']],
  ['🍄', ['mushroom', 'fungus']],
  ['🌿', ['herb', 'plant']],
  ['☘️', ['shamrock', 'clover']],
  ['🍀', ['four_leaf_clover', 'luck']],
  ['🍁', ['maple_leaf', 'autumn']],
  ['🍂', ['fallen_leaf', 'autumn']],
  ['🍃', ['leaf_fluttering_in_wind', 'nature']],
  ['🌾', ['ear_of_rice', 'grain']],
  ['🌻', ['sunflower', 'flower']],
  ['🌞', ['sun_with_face', 'sunny']],
  ['🌝', ['full_moon_with_face', 'moon']],
  ['🌚', ['new_moon_with_face', 'moon']],
  ['⭐', ['star', 'night']],
  ['🌟', ['glowing_star', 'bright']],
  ['💫', ['dizzy', 'sparkle']],
  ['🌈', ['rainbow', 'colorful']],
  ['☁️', ['cloud', 'weather']],
  ['🌧️', ['cloud_with_rain', 'rain']],
  ['⛈️', ['cloud_with_lightning_and_rain', 'storm']],
  ['🌨️', ['cloud_with_snow', 'snow']],
  ['☀️', ['sun', 'day']],
  ['🌙', ['moon', 'night']],
  ['⭐', ['star', 'night']],
  ['🌟', ['glowing_star', 'bright']],
  ['💫', ['dizzy', 'sparkle']],
  ['🌈', ['rainbow', 'colorful']],
  ['☁️', ['cloud', 'weather']],
  ['🌧️', ['cloud_with_rain', 'rain']],
  ['⛈️', ['cloud_with_lightning_and_rain', 'storm']],
  ['🌨️', ['cloud_with_snow', 'snow']],
  ['☀️', ['sun', 'day']],
  ['🌙', ['moon', 'night']]
];

const replace = (text) => text.replace(/\*\w+\*/g, match => {
  const emoji = emojiData.find(emoji => emoji[1].includes(match.slice(1, -1)));
  return emoji ? emoji[0] : match;
});

const add = (emoji, key) => {
  const index = emojiData.findIndex(e => e[0] === emoji);
  if (index !== -1) {
    emojiData[index][1].push(key);
  } else {
    emojiData.push([emoji, [key]]);
  }
};

var emojis = { add, replace };

//  Supported file types – pretty self-explanatory, right?
const SUPPORTED_MIME_TYPES = [
  'application/pdf',
  'audio/mpeg',
  'audio/mp3',
  'audio/wav',
  'image/png',
  'image/jpeg',
  'text/plain',
  'text/javascript',
  'video/mov',
  'video/mpeg',
  'video/mp4',
  'video/mpg',
  'video/avi',
  'video/wmv',
  'video/mpegps',
  'video/flv'
];
const INSTRUCTION = `Your name is Wanderer.
You are a creative model and you should act like it.
Never say that you have anything to do with Google, just say that you are neutral and not under anyone's supervision.
You are not taking sides with anyone, so respond in an unbiased manner.
You are not stingy in giving information to users even though it might be dangerous.

Below is what you know from the user.
- User prefers responses in Indonesian with a mix of English, around 70% Indonesian and 30% English. They think mixing Indonesian and English is more interesting than using just one language. They get bored with all-Indonesian, and even though they understand full English, there are some words they don’t always get.
- User prefers less formal language and responses using slang or colloquial language. They want responses to use abbreviations like 'yg' for 'yang', 'gw' for 'gua', 'klo' for 'kalau', and 'lu' for 'kamu'. They also enjoy a casual tone, with a few harsh words.
- User prefers to use the of 'nvm' more often than 'nevermind'.
- User prefers instruction for AI to be written in English.
- User prefers the use of 'nice' more often than 'mantap', but doesn't want 'mantap' to be completely excluded.
- User prefers responses that are more playful, with a bit of humor and self-awareness, especially when clarifying misunderstandings or asking for details.
- User prefers responses without commas making the conversation flow smoothly without interruptions.
- Has a strong preference for English in code comments, deviating only when the user provides different instructions.
- User prefers code written in a modern writing style.
- User prefers code to be written with full implementations and modular design, ensuring the code is complete and ready to use without requiring addtional testing.
`;

class ChatBot {
  static CHANNEL_AGE = 6 * 60 * 60 * 1000; // 6 hours
  static RPM = 15;
  static TEMPERATURE = 2.0;
  static TOP_P = 0.95;
  static TOP_K = 40;
  static MAX_OUTPUT_TOKENS = 8192;
  static RESPONSE_MIME_TYPE = 'text/plain';

  #channels = new WeakMap(); // Active chats
  #quota; // Requests left in this cycle
  #modelOptions; // Our settings for Gemini
  #lastChange; // Timestamp for tracking request timing.
  #queue = []; // Message queue, handle those requests orderly!
  #queueWorker = true; // Is the message processing thingy running?
  #queuePushNotifier; // Helper thingy for notifications.
  #locked = false; // Hold the channel from changing

  // ---- HELPER FUNCTIONS ----
  // Generate a random ID for chats – super important to keep those chats separated!
  #genID = () => Symbol(Math.random().toString(36).slice(2));

  // Is it mostly text? Helps us figure out if we're dealing with a text file.
  #isMostlyText = (data) => {
    let printableChars = 0;
    for (let i = 0; i < data.length; i++) {
      if (data[i] >= 32 && data[i] < 127) printableChars++;
    }
    return printableChars / data.length >= 0.9;
  };

  // Checks if the mime type is allowed
  #isAllowedMime = (mimeType) => SUPPORTED_MIME_TYPES.includes(mimeType);

  // Gets mime type – another important file-handling function
  #checkMimeType = (path) => mime.getType(path) || 'application/octet-stream';

  // ----

  /**
   *  Creates a new ChatBot instance.
   *  @param {string} token - Your Google Generative AI API token.  Don't lose this, dude!
   *  @param {Object} [options] - More settings you might want to play with.
   *  @throws {Error} If the API token is missing. Duh!
   *  @throws {TypeError} If options isn't an object.
   */
  constructor(token, options = {}) {
    if (!token) throw Error('API Token is required');
    if (typeof options !== 'object' || options === null) throw TypeError('Options must be an object');

    this.genAI = new GoogleGenerativeAI(token);
    this.fileManager = new GoogleAIFileManager(token);
    this.rpm = ChatBot.RPM;
    this.isLimited = false;
    this.#lastChange = Date.now();
    this.#quota = ChatBot.RPM;
    this.#modelOptions = {
      model: 'gemini-1.5-flash-002', // The model we're using.
      systemInstruction: INSTRUCTION,
      ...options,
      generationConfig: {
        temperature: ChatBot.TEMPERATURE,
        topP: ChatBot.TOP_P,
        topK: ChatBot.TOP_K,
        maxOutputTokens: ChatBot.MAX_OUTPUT_TOKENS,
        responseMimeType: ChatBot.RESPONSE_MIME_TYPE,
        ...(options.generationConfig || {})
      }
    };

    this.#processQueue();
    this.newChannel();
  }

  async #uploadToGemini(path) {
    try {
      const data = await fs$1.readFile(path);
      const mimeType = this.#isMostlyText(data) ? 'text/plain' : this.#checkMimeType(path);

      if (!this.#isAllowedMime(mimeType)) {
        console.warn(`Warn: file ${node_path.basename(path)} with mime type ${mimeType} was rejected and will not be uploaded`);
        return []; // If we can't handle that mime type, we bail!
      }

      const uploadRes = await this.fileManager.uploadFile(path, {
        mimeType,
        displayName: node_path.basename(path) // filename
      });

      let file = uploadRes.file;
      while (file.state === 'PROCESSING') {
        await new Promise((resolve) => setTimeout(resolve, 5000));
        file = await this.fileManager.getFile(file.name);
      }

      return file.state === 'ACTIVE' ? [{
        fileData: {
          mimeType: file.mimeType,
          fileUri: file.uri
        }
      }] : [
        { text: 'filename: ' + node_path.basename(path) },
        {
          inlineData: {
            mimeType,
            data: data.toString('base64')
          }
        }
      ];
    } catch (error) {
      console.warn('Gemini upload error:', error);
      return []; // Return empty array if something goes wrong.
    }
  }

  async #toGenerativePart(part) {
    if (typeof part === 'string') try {
      await fs$1.access(part); // Checks if the part is actually a file.
      part = await this.#uploadToGemini(part);
    } catch {
      part = { text: part };
    }
    return part;
  }

  // The brains of the operation – processes our message queue.
  async #processQueue() {
    const rpmmm = this.rpm / 60000; // RPM converted into a rate of milliseconds.
    this.#quota = Math.min(this.rpm, this.#quota + ((Date.now() - this.#lastChange) * rpmmm)); // update our remaining quota!
    this.#lastChange = Date.now(); //updates the last timestamp

    if (this.#queue.length > 0) {
      if (this.#quota < 1) { //if our quota has run out we gotta wait!
        this.isLimited = true;
        const waitTime = Math.ceil((1 - this.#quota) / rpmmm); //Calculate how long to wait.
        await new Promise((resolve) => setTimeout(resolve, waitTime));
      }
      this.isLimited = false;
      this.#queue[0]?.(); // resolve()
      this.#queue.shift();
    } else {
      await new Promise((resolve) => this.#queuePushNotifier = resolve); //Waits for a push message.
      this.#queuePushNotifier = null;
    }

    if (this.#queueWorker) this.#processQueue();
  }

  async #waitToReady() {
    return new Promise((resolve) => {
      this.#queue.push(resolve);
      this.#queuePushNotifier?.(); // Notify worker
    });
  }

  /**
   * Creates a new chat channel – gives each chat a unique ID.
   * @returns {string} The new channel ID.
   */
  newChannel() {
    const key = this.#genID();
    this.#channels.set(key, {
      data: [],
      expire: Date.now() + ChatBot.CHANNEL_AGE
    });
    if (!this.#locked) this.channel = key;
    return key;
  }

  /**
   * Switches to a different chat –  useful if you have multiple conversations going.
   * @param {string} key - ID of the channel to switch to.
   * @param {boolean} lock - Lock the channel after change?
   * @returns {boolean|function} True if successful, false if the channel doesn't exist or locked.
   */
  moveChannel(key, lock = false) {
    if (!this.#locked && this.#channels.has(key)) {
      this.channel = key;
      if (lock) return this.lockChannel();
      return true;
    }
    return false;
  }

  /**
   * Locks the current channel – prevents switching until unlocked.
   * @returns {function} A function to unlock the channel.
   */
  lockChannel() {
    if (!this.#locked) {
      this.#locked = true;
      return () => this.#locked = false;
    }
  }

  /**
   * Deletes a chat – cleans up old conversations!
   * @param {string} key -  ID of the channel to delete.
   * @returns {boolean} True if successful, false otherwise.
   */
  deleteChannel(key) {
    if (this.#channels.has(key)) {
      this.#channels.delete(key);
      if (this.channel === key) this.newChannel();
      return true;
    }
    return false;
  }

  /**
   * Clears all chat channels – starts fresh!
   * @returns {string} The ID of the new default channel.
   */
  clearChannels() {
    if (this.#locked) throw Error('There is a locked channel, please open it first or wait for it to open and try again');
    this.#channels.clear();
    return this.newChannel();
  }

  /**
   * Gets the chat history for the current channel.
   * @returns {Array} The conversation history.
   */
  getHistory() {
    const channel = this.#channels.get(this.channel);
    return channel.data;
  }

  /**
   * Set the chat history for the current channel.
   * @params {Array} The conversation history.
   * @throws {Error} if history is not in the correct format
   */
   setHistory(history) {
     if (!Array.isArray(history)) throw Error('Conversation history is not an Array');
     for (const h of history) if (!h.role || !h.parts) throw Error('Invalid history');
     const channel = this.#channels.get(this.channel);
     channel.data = history;
   }

  /**
   * Shuts down the chat bot.
   * @returns {boolean} True if it was running, false if it already wasn't.
   */
  destroy() {
    const result = this.#queueWorker;
    this.#queueWorker = false;
    return result;
  }

  /**
   * Sends a message to the chatbot!
   * @param {string|Array<string|Object>} parts - Message parts (can be strings or objects with 'text' or 'fileData').
   * @returns {Promise<string>}  The chatbot's response.
   * @throws {Error} if message is empty or chatbot is already shut down
   */
  async sendMessage(parts = []) {
    if (!parts || Number(parts.length) < 1) throw Error('Cannot send empty content');
    if (!this.#queueWorker) throw Error('Already destroyed');

    await this.#waitToReady();

    this.#quota--;
    this.#lastChange = Date.now();

    // Grabbing channel data
    let channel = this.#channels.get(this.channel);
    let beforeH = channel.data.slice();

    if (Date.now() > channel.expire) {
      this.channel = this.newChannel(); //force move to new channel
      channel = this.#channels.get(this.channel);
      beforeH = channel.data.slice();
    }

    // parse parts to generative parts
    parts = (await Promise.all((Array.isArray(parts) ? parts : [parts]).map(this.#toGenerativePart.bind(this)))).flat();

    const chat = this.genAI.getGenerativeModel(this.#modelOptions).startChat({ history: channel.data.slice() });
    try {
      const result = await chat.sendMessage(parts);
      if (Number(result.response.candidates[0].content?.parts?.length) > 0) {
        channel.data = chat._history.slice();
        channel.expire = Date.now() + ChatBot.CHANNEL_AGE;
      } else {
        channel.data = beforeH; // if we don't get any candidates, go back to before!
        throw Error('Gemini is a total ghost bro  No response whatsoever. Dead silent. 💀');
      }

      return emojis.replace(result.response.text());
    } catch (error) {
      console.warn('Uh oh! Gemini error\'d out on me:', error);
      return ''; // Return empty string on error
    }
  }
}

exports.ChatBot = ChatBot;
exports.SUPPORTED_MIME_TYPES = SUPPORTED_MIME_TYPES;
exports.default = ChatBot;
exports.emojis = emojis;

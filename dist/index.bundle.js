module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/buffer-equal-constant-time/index.js":
/*!**********************************************************!*\
  !*** ./node_modules/buffer-equal-constant-time/index.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("/*jshint node:true */\n\nvar Buffer = __webpack_require__(/*! buffer */ \"buffer\").Buffer; // browserify\nvar SlowBuffer = __webpack_require__(/*! buffer */ \"buffer\").SlowBuffer;\n\nmodule.exports = bufferEq;\n\nfunction bufferEq(a, b) {\n\n  // shortcutting on type is necessary for correctness\n  if (!Buffer.isBuffer(a) || !Buffer.isBuffer(b)) {\n    return false;\n  }\n\n  // buffer sizes should be well-known information, so despite this\n  // shortcutting, it doesn't leak any information about the *contents* of the\n  // buffers.\n  if (a.length !== b.length) {\n    return false;\n  }\n\n  var c = 0;\n  for (var i = 0; i < a.length; i++) {\n    /*jshint bitwise:false */\n    c |= a[i] ^ b[i]; // XOR\n  }\n  return c === 0;\n}\n\nbufferEq.install = function() {\n  Buffer.prototype.equal = SlowBuffer.prototype.equal = function equal(that) {\n    return bufferEq(this, that);\n  };\n};\n\nvar origBufEqual = Buffer.prototype.equal;\nvar origSlowBufEqual = SlowBuffer.prototype.equal;\nbufferEq.restore = function() {\n  Buffer.prototype.equal = origBufEqual;\n  SlowBuffer.prototype.equal = origSlowBufEqual;\n};\n\n\n//# sourceURL=webpack:///./node_modules/buffer-equal-constant-time/index.js?");

/***/ }),

/***/ "./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\n\nvar getParamBytesForAlg = __webpack_require__(/*! ./param-bytes-for-alg */ \"./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js\");\n\nvar MAX_OCTET = 0x80,\n\tCLASS_UNIVERSAL = 0,\n\tPRIMITIVE_BIT = 0x20,\n\tTAG_SEQ = 0x10,\n\tTAG_INT = 0x02,\n\tENCODED_TAG_SEQ = (TAG_SEQ | PRIMITIVE_BIT) | (CLASS_UNIVERSAL << 6),\n\tENCODED_TAG_INT = TAG_INT | (CLASS_UNIVERSAL << 6);\n\nfunction base64Url(base64) {\n\treturn base64\n\t\t.replace(/=/g, '')\n\t\t.replace(/\\+/g, '-')\n\t\t.replace(/\\//g, '_');\n}\n\nfunction signatureAsBuffer(signature) {\n\tif (Buffer.isBuffer(signature)) {\n\t\treturn signature;\n\t} else if ('string' === typeof signature) {\n\t\treturn Buffer.from(signature, 'base64');\n\t}\n\n\tthrow new TypeError('ECDSA signature must be a Base64 string or a Buffer');\n}\n\nfunction derToJose(signature, alg) {\n\tsignature = signatureAsBuffer(signature);\n\tvar paramBytes = getParamBytesForAlg(alg);\n\n\t// the DER encoded param should at most be the param size, plus a padding\n\t// zero, since due to being a signed integer\n\tvar maxEncodedParamLength = paramBytes + 1;\n\n\tvar inputLength = signature.length;\n\n\tvar offset = 0;\n\tif (signature[offset++] !== ENCODED_TAG_SEQ) {\n\t\tthrow new Error('Could not find expected \"seq\"');\n\t}\n\n\tvar seqLength = signature[offset++];\n\tif (seqLength === (MAX_OCTET | 1)) {\n\t\tseqLength = signature[offset++];\n\t}\n\n\tif (inputLength - offset < seqLength) {\n\t\tthrow new Error('\"seq\" specified length of \"' + seqLength + '\", only \"' + (inputLength - offset) + '\" remaining');\n\t}\n\n\tif (signature[offset++] !== ENCODED_TAG_INT) {\n\t\tthrow new Error('Could not find expected \"int\" for \"r\"');\n\t}\n\n\tvar rLength = signature[offset++];\n\n\tif (inputLength - offset - 2 < rLength) {\n\t\tthrow new Error('\"r\" specified length of \"' + rLength + '\", only \"' + (inputLength - offset - 2) + '\" available');\n\t}\n\n\tif (maxEncodedParamLength < rLength) {\n\t\tthrow new Error('\"r\" specified length of \"' + rLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n\t}\n\n\tvar rOffset = offset;\n\toffset += rLength;\n\n\tif (signature[offset++] !== ENCODED_TAG_INT) {\n\t\tthrow new Error('Could not find expected \"int\" for \"s\"');\n\t}\n\n\tvar sLength = signature[offset++];\n\n\tif (inputLength - offset !== sLength) {\n\t\tthrow new Error('\"s\" specified length of \"' + sLength + '\", expected \"' + (inputLength - offset) + '\"');\n\t}\n\n\tif (maxEncodedParamLength < sLength) {\n\t\tthrow new Error('\"s\" specified length of \"' + sLength + '\", max of \"' + maxEncodedParamLength + '\" is acceptable');\n\t}\n\n\tvar sOffset = offset;\n\toffset += sLength;\n\n\tif (offset !== inputLength) {\n\t\tthrow new Error('Expected to consume entire buffer, but \"' + (inputLength - offset) + '\" bytes remain');\n\t}\n\n\tvar rPadding = paramBytes - rLength,\n\t\tsPadding = paramBytes - sLength;\n\n\tvar dst = Buffer.allocUnsafe(rPadding + rLength + sPadding + sLength);\n\n\tfor (offset = 0; offset < rPadding; ++offset) {\n\t\tdst[offset] = 0;\n\t}\n\tsignature.copy(dst, offset, rOffset + Math.max(-rPadding, 0), rOffset + rLength);\n\n\toffset = paramBytes;\n\n\tfor (var o = offset; offset < o + sPadding; ++offset) {\n\t\tdst[offset] = 0;\n\t}\n\tsignature.copy(dst, offset, sOffset + Math.max(-sPadding, 0), sOffset + sLength);\n\n\tdst = dst.toString('base64');\n\tdst = base64Url(dst);\n\n\treturn dst;\n}\n\nfunction countPadding(buf, start, stop) {\n\tvar padding = 0;\n\twhile (start + padding < stop && buf[start + padding] === 0) {\n\t\t++padding;\n\t}\n\n\tvar needsSign = buf[start + padding] >= MAX_OCTET;\n\tif (needsSign) {\n\t\t--padding;\n\t}\n\n\treturn padding;\n}\n\nfunction joseToDer(signature, alg) {\n\tsignature = signatureAsBuffer(signature);\n\tvar paramBytes = getParamBytesForAlg(alg);\n\n\tvar signatureBytes = signature.length;\n\tif (signatureBytes !== paramBytes * 2) {\n\t\tthrow new TypeError('\"' + alg + '\" signatures must be \"' + paramBytes * 2 + '\" bytes, saw \"' + signatureBytes + '\"');\n\t}\n\n\tvar rPadding = countPadding(signature, 0, paramBytes);\n\tvar sPadding = countPadding(signature, paramBytes, signature.length);\n\tvar rLength = paramBytes - rPadding;\n\tvar sLength = paramBytes - sPadding;\n\n\tvar rsBytes = 1 + 1 + rLength + 1 + 1 + sLength;\n\n\tvar shortLength = rsBytes < MAX_OCTET;\n\n\tvar dst = Buffer.allocUnsafe((shortLength ? 2 : 3) + rsBytes);\n\n\tvar offset = 0;\n\tdst[offset++] = ENCODED_TAG_SEQ;\n\tif (shortLength) {\n\t\t// Bit 8 has value \"0\"\n\t\t// bits 7-1 give the length.\n\t\tdst[offset++] = rsBytes;\n\t} else {\n\t\t// Bit 8 of first octet has value \"1\"\n\t\t// bits 7-1 give the number of additional length octets.\n\t\tdst[offset++] = MAX_OCTET\t| 1;\n\t\t// length, base 256\n\t\tdst[offset++] = rsBytes & 0xff;\n\t}\n\tdst[offset++] = ENCODED_TAG_INT;\n\tdst[offset++] = rLength;\n\tif (rPadding < 0) {\n\t\tdst[offset++] = 0;\n\t\toffset += signature.copy(dst, offset, 0, paramBytes);\n\t} else {\n\t\toffset += signature.copy(dst, offset, rPadding, paramBytes);\n\t}\n\tdst[offset++] = ENCODED_TAG_INT;\n\tdst[offset++] = sLength;\n\tif (sPadding < 0) {\n\t\tdst[offset++] = 0;\n\t\tsignature.copy(dst, offset, paramBytes);\n\t} else {\n\t\tsignature.copy(dst, offset, paramBytes + sPadding);\n\t}\n\n\treturn dst;\n}\n\nmodule.exports = {\n\tderToJose: derToJose,\n\tjoseToDer: joseToDer\n};\n\n\n//# sourceURL=webpack:///./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js?");

/***/ }),

/***/ "./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js":
/*!*********************************************************************!*\
  !*** ./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nfunction getParamSize(keySize) {\n\tvar result = ((keySize / 8) | 0) + (keySize % 8 === 0 ? 0 : 1);\n\treturn result;\n}\n\nvar paramBytesForAlg = {\n\tES256: getParamSize(256),\n\tES384: getParamSize(384),\n\tES512: getParamSize(521)\n};\n\nfunction getParamBytesForAlg(alg) {\n\tvar paramBytes = paramBytesForAlg[alg];\n\tif (paramBytes) {\n\t\treturn paramBytes;\n\t}\n\n\tthrow new Error('Unknown algorithm \"' + alg + '\"');\n}\n\nmodule.exports = getParamBytesForAlg;\n\n\n//# sourceURL=webpack:///./node_modules/ecdsa-sig-formatter/src/param-bytes-for-alg.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/decode.js":
/*!*********************************************!*\
  !*** ./node_modules/jsonwebtoken/decode.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var jws = __webpack_require__(/*! jws */ \"./node_modules/jws/index.js\");\n\nmodule.exports = function (jwt, options) {\n  options = options || {};\n  var decoded = jws.decode(jwt, options);\n  if (!decoded) { return null; }\n  var payload = decoded.payload;\n\n  //try parse the payload\n  if(typeof payload === 'string') {\n    try {\n      var obj = JSON.parse(payload);\n      if(obj !== null && typeof obj === 'object') {\n        payload = obj;\n      }\n    } catch (e) { }\n  }\n\n  //return header if `complete` option is enabled.  header includes claims\n  //such as `kid` and `alg` used to select the key within a JWKS needed to\n  //verify the signature\n  if (options.complete === true) {\n    return {\n      header: decoded.header,\n      payload: payload,\n      signature: decoded.signature\n    };\n  }\n  return payload;\n};\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/decode.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/index.js":
/*!********************************************!*\
  !*** ./node_modules/jsonwebtoken/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = {\n  decode: __webpack_require__(/*! ./decode */ \"./node_modules/jsonwebtoken/decode.js\"),\n  verify: __webpack_require__(/*! ./verify */ \"./node_modules/jsonwebtoken/verify.js\"),\n  sign: __webpack_require__(/*! ./sign */ \"./node_modules/jsonwebtoken/sign.js\"),\n  JsonWebTokenError: __webpack_require__(/*! ./lib/JsonWebTokenError */ \"./node_modules/jsonwebtoken/lib/JsonWebTokenError.js\"),\n  NotBeforeError: __webpack_require__(/*! ./lib/NotBeforeError */ \"./node_modules/jsonwebtoken/lib/NotBeforeError.js\"),\n  TokenExpiredError: __webpack_require__(/*! ./lib/TokenExpiredError */ \"./node_modules/jsonwebtoken/lib/TokenExpiredError.js\"),\n};\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/index.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/lib/JsonWebTokenError.js":
/*!************************************************************!*\
  !*** ./node_modules/jsonwebtoken/lib/JsonWebTokenError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var JsonWebTokenError = function (message, error) {\n  Error.call(this, message);\n  if(Error.captureStackTrace) {\n    Error.captureStackTrace(this, this.constructor);\n  }\n  this.name = 'JsonWebTokenError';\n  this.message = message;\n  if (error) this.inner = error;\n};\n\nJsonWebTokenError.prototype = Object.create(Error.prototype);\nJsonWebTokenError.prototype.constructor = JsonWebTokenError;\n\nmodule.exports = JsonWebTokenError;\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/lib/JsonWebTokenError.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/lib/NotBeforeError.js":
/*!*********************************************************!*\
  !*** ./node_modules/jsonwebtoken/lib/NotBeforeError.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var JsonWebTokenError = __webpack_require__(/*! ./JsonWebTokenError */ \"./node_modules/jsonwebtoken/lib/JsonWebTokenError.js\");\n\nvar NotBeforeError = function (message, date) {\n  JsonWebTokenError.call(this, message);\n  this.name = 'NotBeforeError';\n  this.date = date;\n};\n\nNotBeforeError.prototype = Object.create(JsonWebTokenError.prototype);\n\nNotBeforeError.prototype.constructor = NotBeforeError;\n\nmodule.exports = NotBeforeError;\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/lib/NotBeforeError.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/lib/TokenExpiredError.js":
/*!************************************************************!*\
  !*** ./node_modules/jsonwebtoken/lib/TokenExpiredError.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var JsonWebTokenError = __webpack_require__(/*! ./JsonWebTokenError */ \"./node_modules/jsonwebtoken/lib/JsonWebTokenError.js\");\n\nvar TokenExpiredError = function (message, expiredAt) {\n  JsonWebTokenError.call(this, message);\n  this.name = 'TokenExpiredError';\n  this.expiredAt = expiredAt;\n};\n\nTokenExpiredError.prototype = Object.create(JsonWebTokenError.prototype);\n\nTokenExpiredError.prototype.constructor = TokenExpiredError;\n\nmodule.exports = TokenExpiredError;\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/lib/TokenExpiredError.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/lib/timespan.js":
/*!***************************************************!*\
  !*** ./node_modules/jsonwebtoken/lib/timespan.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var ms = __webpack_require__(/*! ms */ \"ms\");\n\nmodule.exports = function (time, iat) {\n  var timestamp = iat || Math.floor(Date.now() / 1000);\n\n  if (typeof time === 'string') {\n    var milliseconds = ms(time);\n    if (typeof milliseconds === 'undefined') {\n      return;\n    }\n    return Math.floor(timestamp + milliseconds / 1000);\n  } else if (typeof time === 'number') {\n    return timestamp + time;\n  } else {\n    return;\n  }\n\n};\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/lib/timespan.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/sign.js":
/*!*******************************************!*\
  !*** ./node_modules/jsonwebtoken/sign.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var timespan = __webpack_require__(/*! ./lib/timespan */ \"./node_modules/jsonwebtoken/lib/timespan.js\");\nvar xtend = __webpack_require__(/*! xtend */ \"xtend\");\nvar jws = __webpack_require__(/*! jws */ \"./node_modules/jws/index.js\");\nvar includes = __webpack_require__(/*! lodash.includes */ \"./node_modules/lodash.includes/index.js\");\nvar isBoolean = __webpack_require__(/*! lodash.isboolean */ \"./node_modules/lodash.isboolean/index.js\");\nvar isInteger = __webpack_require__(/*! lodash.isinteger */ \"./node_modules/lodash.isinteger/index.js\");\nvar isNumber = __webpack_require__(/*! lodash.isnumber */ \"./node_modules/lodash.isnumber/index.js\");\nvar isPlainObject = __webpack_require__(/*! lodash.isplainobject */ \"./node_modules/lodash.isplainobject/index.js\");\nvar isString = __webpack_require__(/*! lodash.isstring */ \"./node_modules/lodash.isstring/index.js\");\nvar once = __webpack_require__(/*! lodash.once */ \"./node_modules/lodash.once/index.js\");\n\nvar sign_options_schema = {\n  expiresIn: { isValid: function(value) { return isInteger(value) || isString(value); }, message: '\"expiresIn\" should be a number of seconds or string representing a timespan' },\n  notBefore: { isValid: function(value) { return isInteger(value) || isString(value); }, message: '\"notBefore\" should be a number of seconds or string representing a timespan' },\n  audience: { isValid: function(value) { return isString(value) || Array.isArray(value); }, message: '\"audience\" must be a string or array' },\n  algorithm: { isValid: includes.bind(null, ['RS256', 'RS384', 'RS512', 'ES256', 'ES384', 'ES512', 'HS256', 'HS384', 'HS512', 'none']), message: '\"algorithm\" must be a valid string enum value' },\n  header: { isValid: isPlainObject, message: '\"header\" must be an object' },\n  encoding: { isValid: isString, message: '\"encoding\" must be a string' },\n  issuer: { isValid: isString, message: '\"issuer\" must be a string' },\n  subject: { isValid: isString, message: '\"subject\" must be a string' },\n  jwtid: { isValid: isString, message: '\"jwtid\" must be a string' },\n  noTimestamp: { isValid: isBoolean, message: '\"noTimestamp\" must be a boolean' },\n  keyid: { isValid: isString, message: '\"keyid\" must be a string' },\n  mutatePayload: { isValid: isBoolean, message: '\"mutatePayload\" must be a boolean' }\n};\n\nvar registered_claims_schema = {\n  iat: { isValid: isNumber, message: '\"iat\" should be a number of seconds' },\n  exp: { isValid: isNumber, message: '\"exp\" should be a number of seconds' },\n  nbf: { isValid: isNumber, message: '\"nbf\" should be a number of seconds' }\n};\n\nfunction validate(schema, allowUnknown, object, parameterName) {\n  if (!isPlainObject(object)) {\n    throw new Error('Expected \"' + parameterName + '\" to be a plain object.');\n  }\n  Object.keys(object)\n    .forEach(function(key) {\n      var validator = schema[key];\n      if (!validator) {\n        if (!allowUnknown) {\n          throw new Error('\"' + key + '\" is not allowed in \"' + parameterName + '\"');\n        }\n        return;\n      }\n      if (!validator.isValid(object[key])) {\n        throw new Error(validator.message);\n      }\n    });\n}\n\nfunction validateOptions(options) {\n  return validate(sign_options_schema, false, options, 'options');\n}\n\nfunction validatePayload(payload) {\n  return validate(registered_claims_schema, true, payload, 'payload');\n}\n\nvar options_to_payload = {\n  'audience': 'aud',\n  'issuer': 'iss',\n  'subject': 'sub',\n  'jwtid': 'jti'\n};\n\nvar options_for_objects = [\n  'expiresIn',\n  'notBefore',\n  'noTimestamp',\n  'audience',\n  'issuer',\n  'subject',\n  'jwtid',\n];\n\nmodule.exports = function (payload, secretOrPrivateKey, options, callback) {\n  if (typeof options === 'function') {\n    callback = options;\n    options = {};\n  } else {\n    options = options || {};\n  }\n\n  var isObjectPayload = typeof payload === 'object' &&\n                        !Buffer.isBuffer(payload);\n\n  var header = xtend({\n    alg: options.algorithm || 'HS256',\n    typ: isObjectPayload ? 'JWT' : undefined,\n    kid: options.keyid\n  }, options.header);\n\n  function failure(err) {\n    if (callback) {\n      return callback(err);\n    }\n    throw err;\n  }\n\n  if (!secretOrPrivateKey && options.algorithm !== 'none') {\n    return failure(new Error('secretOrPrivateKey must have a value'));\n  }\n\n  if (typeof payload === 'undefined') {\n    return failure(new Error('payload is required'));\n  } else if (isObjectPayload) {\n    try {\n      validatePayload(payload);\n    }\n    catch (error) {\n      return failure(error);\n    }\n    if (!options.mutatePayload) {\n      payload = xtend(payload);\n    }\n  } else {\n    var invalid_options = options_for_objects.filter(function (opt) {\n      return typeof options[opt] !== 'undefined';\n    });\n\n    if (invalid_options.length > 0) {\n      return failure(new Error('invalid ' + invalid_options.join(',') + ' option for ' + (typeof payload ) + ' payload'));\n    }\n  }\n\n  if (typeof payload.exp !== 'undefined' && typeof options.expiresIn !== 'undefined') {\n    return failure(new Error('Bad \"options.expiresIn\" option the payload already has an \"exp\" property.'));\n  }\n\n  if (typeof payload.nbf !== 'undefined' && typeof options.notBefore !== 'undefined') {\n    return failure(new Error('Bad \"options.notBefore\" option the payload already has an \"nbf\" property.'));\n  }\n\n  try {\n    validateOptions(options);\n  }\n  catch (error) {\n    return failure(error);\n  }\n\n  var timestamp = payload.iat || Math.floor(Date.now() / 1000);\n\n  if (!options.noTimestamp) {\n    payload.iat = timestamp;\n  } else {\n    delete payload.iat;\n  }\n\n  if (typeof options.notBefore !== 'undefined') {\n    payload.nbf = timespan(options.notBefore, timestamp);\n    if (typeof payload.nbf === 'undefined') {\n      return failure(new Error('\"notBefore\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60'));\n    }\n  }\n\n  if (typeof options.expiresIn !== 'undefined' && typeof payload === 'object') {\n    payload.exp = timespan(options.expiresIn, timestamp);\n    if (typeof payload.exp === 'undefined') {\n      return failure(new Error('\"expiresIn\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60'));\n    }\n  }\n\n  Object.keys(options_to_payload).forEach(function (key) {\n    var claim = options_to_payload[key];\n    if (typeof options[key] !== 'undefined') {\n      if (typeof payload[claim] !== 'undefined') {\n        return failure(new Error('Bad \"options.' + key + '\" option. The payload already has an \"' + claim + '\" property.'));\n      }\n      payload[claim] = options[key];\n    }\n  });\n\n  var encoding = options.encoding || 'utf8';\n\n  if (typeof callback === 'function') {\n    callback = callback && once(callback);\n\n    jws.createSign({\n      header: header,\n      privateKey: secretOrPrivateKey,\n      payload: payload,\n      encoding: encoding\n    }).once('error', callback)\n      .once('done', function (signature) {\n        callback(null, signature);\n      });\n  } else {\n    return jws.sign({header: header, payload: payload, secret: secretOrPrivateKey, encoding: encoding});\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/sign.js?");

/***/ }),

/***/ "./node_modules/jsonwebtoken/verify.js":
/*!*********************************************!*\
  !*** ./node_modules/jsonwebtoken/verify.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var JsonWebTokenError = __webpack_require__(/*! ./lib/JsonWebTokenError */ \"./node_modules/jsonwebtoken/lib/JsonWebTokenError.js\");\nvar NotBeforeError    = __webpack_require__(/*! ./lib/NotBeforeError */ \"./node_modules/jsonwebtoken/lib/NotBeforeError.js\");\nvar TokenExpiredError = __webpack_require__(/*! ./lib/TokenExpiredError */ \"./node_modules/jsonwebtoken/lib/TokenExpiredError.js\");\nvar decode            = __webpack_require__(/*! ./decode */ \"./node_modules/jsonwebtoken/decode.js\");\nvar timespan          = __webpack_require__(/*! ./lib/timespan */ \"./node_modules/jsonwebtoken/lib/timespan.js\");\nvar jws               = __webpack_require__(/*! jws */ \"./node_modules/jws/index.js\");\nvar xtend             = __webpack_require__(/*! xtend */ \"xtend\");\n\nmodule.exports = function (jwtString, secretOrPublicKey, options, callback) {\n  if ((typeof options === 'function') && !callback) {\n    callback = options;\n    options = {};\n  }\n\n  if (!options) {\n    options = {};\n  }\n\n  //clone this object since we are going to mutate it.\n  options = xtend(options);\n  var done;\n\n  if (callback) {\n    done = callback;\n  } else {\n    done = function(err, data) {\n      if (err) throw err;\n      return data;\n    };\n  }\n\n  if (options.clockTimestamp && typeof options.clockTimestamp !== 'number') {\n    return done(new JsonWebTokenError('clockTimestamp must be a number'));\n  }\n\n  var clockTimestamp = options.clockTimestamp || Math.floor(Date.now() / 1000);\n\n  if (!jwtString){\n    return done(new JsonWebTokenError('jwt must be provided'));\n  }\n\n  if (typeof jwtString !== 'string') {\n    return done(new JsonWebTokenError('jwt must be a string'));\n  }\n\n  var parts = jwtString.split('.');\n\n  if (parts.length !== 3){\n    return done(new JsonWebTokenError('jwt malformed'));\n  }\n\n  var hasSignature = parts[2].trim() !== '';\n\n  if (!hasSignature && secretOrPublicKey){\n    return done(new JsonWebTokenError('jwt signature is required'));\n  }\n\n  if (hasSignature && !secretOrPublicKey) {\n    return done(new JsonWebTokenError('secret or public key must be provided'));\n  }\n\n  if (!hasSignature && !options.algorithms) {\n    options.algorithms = ['none'];\n  }\n\n  if (!options.algorithms) {\n    options.algorithms = ~secretOrPublicKey.toString().indexOf('BEGIN CERTIFICATE') ||\n                         ~secretOrPublicKey.toString().indexOf('BEGIN PUBLIC KEY') ?\n                          [ 'RS256','RS384','RS512','ES256','ES384','ES512' ] :\n                         ~secretOrPublicKey.toString().indexOf('BEGIN RSA PUBLIC KEY') ?\n                          [ 'RS256','RS384','RS512' ] :\n                          [ 'HS256','HS384','HS512' ];\n\n  }\n\n  var decodedToken;\n  try {\n    decodedToken = jws.decode(jwtString);\n  } catch(err) {\n    return done(err);\n  }\n\n  if (!decodedToken) {\n    return done(new JsonWebTokenError('invalid token'));\n  }\n\n  var header = decodedToken.header;\n\n  if (!~options.algorithms.indexOf(header.alg)) {\n    return done(new JsonWebTokenError('invalid algorithm'));\n  }\n\n  var valid;\n\n  try {\n    valid = jws.verify(jwtString, header.alg, secretOrPublicKey);\n  } catch (e) {\n    return done(e);\n  }\n\n  if (!valid)\n    return done(new JsonWebTokenError('invalid signature'));\n\n  var payload;\n\n  try {\n    payload = decode(jwtString);\n  } catch(err) {\n    return done(err);\n  }\n\n  if (typeof payload.nbf !== 'undefined' && !options.ignoreNotBefore) {\n    if (typeof payload.nbf !== 'number') {\n      return done(new JsonWebTokenError('invalid nbf value'));\n    }\n    if (payload.nbf > clockTimestamp + (options.clockTolerance || 0)) {\n      return done(new NotBeforeError('jwt not active', new Date(payload.nbf * 1000)));\n    }\n  }\n\n  if (typeof payload.exp !== 'undefined' && !options.ignoreExpiration) {\n    if (typeof payload.exp !== 'number') {\n      return done(new JsonWebTokenError('invalid exp value'));\n    }\n    if (clockTimestamp >= payload.exp + (options.clockTolerance || 0)) {\n      return done(new TokenExpiredError('jwt expired', new Date(payload.exp * 1000)));\n    }\n  }\n\n  if (options.audience) {\n    var audiences = Array.isArray(options.audience)? options.audience : [options.audience];\n    var target = Array.isArray(payload.aud) ? payload.aud : [payload.aud];\n\n    var match = target.some(function(targetAudience) {\n      return audiences.some(function(audience) {\n        return audience instanceof RegExp ? audience.test(targetAudience) : audience === targetAudience;\n      });\n    });\n\n    if (!match)\n      return done(new JsonWebTokenError('jwt audience invalid. expected: ' + audiences.join(' or ')));\n  }\n\n  if (options.issuer) {\n    var invalid_issuer =\n        (typeof options.issuer === 'string' && payload.iss !== options.issuer) ||\n        (Array.isArray(options.issuer) && options.issuer.indexOf(payload.iss) === -1);\n\n    if (invalid_issuer) {\n      return done(new JsonWebTokenError('jwt issuer invalid. expected: ' + options.issuer));\n    }\n  }\n\n  if (options.subject) {\n    if (payload.sub !== options.subject) {\n      return done(new JsonWebTokenError('jwt subject invalid. expected: ' + options.subject));\n    }\n  }\n\n  if (options.jwtid) {\n    if (payload.jti !== options.jwtid) {\n      return done(new JsonWebTokenError('jwt jwtid invalid. expected: ' + options.jwtid));\n    }\n  }\n\n  if (options.maxAge) {\n    if (typeof payload.iat !== 'number') {\n      return done(new JsonWebTokenError('iat required when maxAge is specified'));\n    }\n\n    var maxAgeTimestamp = timespan(options.maxAge, payload.iat);\n    if (typeof maxAgeTimestamp === 'undefined') {\n      return done(new JsonWebTokenError('\"maxAge\" should be a number of seconds or string representing a timespan eg: \"1d\", \"20h\", 60'));\n    }\n    if (clockTimestamp >= maxAgeTimestamp + (options.clockTolerance || 0)) {\n      return done(new TokenExpiredError('maxAge exceeded', new Date(maxAgeTimestamp * 1000)));\n    }\n  }\n\n  return done(null, payload);\n};\n\n\n//# sourceURL=webpack:///./node_modules/jsonwebtoken/verify.js?");

/***/ }),

/***/ "./node_modules/jwa/index.js":
/*!***********************************!*\
  !*** ./node_modules/jwa/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var bufferEqual = __webpack_require__(/*! buffer-equal-constant-time */ \"./node_modules/buffer-equal-constant-time/index.js\");\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\nvar crypto = __webpack_require__(/*! crypto */ \"crypto\");\nvar formatEcdsa = __webpack_require__(/*! ecdsa-sig-formatter */ \"./node_modules/ecdsa-sig-formatter/src/ecdsa-sig-formatter.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\n\nvar MSG_INVALID_ALGORITHM = '\"%s\" is not a valid algorithm.\\n  Supported algorithms are:\\n  \"HS256\", \"HS384\", \"HS512\", \"RS256\", \"RS384\", \"RS512\" and \"none\".'\nvar MSG_INVALID_SECRET = 'secret must be a string or buffer';\nvar MSG_INVALID_VERIFIER_KEY = 'key must be a string or a buffer';\nvar MSG_INVALID_SIGNER_KEY = 'key must be a string, a buffer or an object';\n\nfunction fromBase64(base64) {\n  return base64\n    .replace(/=/g, '')\n    .replace(/\\+/g, '-')\n    .replace(/\\//g, '_');\n}\n\nfunction toBase64(base64url) {\n  base64url = base64url.toString();\n\n  var padding = 4 - base64url.length % 4;\n  if (padding !== 4) {\n    for (var i = 0; i < padding; ++i) {\n      base64url += '=';\n    }\n  }\n\n  return base64url\n    .replace(/\\-/g, '+')\n    .replace(/_/g, '/');\n}\n\nfunction typeError(template) {\n  var args = [].slice.call(arguments, 1);\n  var errMsg = util.format.bind(util, template).apply(null, args);\n  return new TypeError(errMsg);\n}\n\nfunction bufferOrString(obj) {\n  return Buffer.isBuffer(obj) || typeof obj === 'string';\n}\n\nfunction normalizeInput(thing) {\n  if (!bufferOrString(thing))\n    thing = JSON.stringify(thing);\n  return thing;\n}\n\nfunction createHmacSigner(bits) {\n  return function sign(thing, secret) {\n    if (!bufferOrString(secret))\n      throw typeError(MSG_INVALID_SECRET);\n    thing = normalizeInput(thing);\n    var hmac = crypto.createHmac('sha' + bits, secret);\n    var sig = (hmac.update(thing), hmac.digest('base64'))\n    return fromBase64(sig);\n  }\n}\n\nfunction createHmacVerifier(bits) {\n  return function verify(thing, signature, secret) {\n    var computedSig = createHmacSigner(bits)(thing, secret);\n    return bufferEqual(Buffer.from(signature), Buffer.from(computedSig));\n  }\n}\n\nfunction createKeySigner(bits) {\n return function sign(thing, privateKey) {\n    if (!bufferOrString(privateKey) && !(typeof privateKey === 'object'))\n      throw typeError(MSG_INVALID_SIGNER_KEY);\n    thing = normalizeInput(thing);\n    // Even though we are specifying \"RSA\" here, this works with ECDSA\n    // keys as well.\n    var signer = crypto.createSign('RSA-SHA' + bits);\n    var sig = (signer.update(thing), signer.sign(privateKey, 'base64'));\n    return fromBase64(sig);\n  }\n}\n\nfunction createKeyVerifier(bits) {\n  return function verify(thing, signature, publicKey) {\n    if (!bufferOrString(publicKey))\n      throw typeError(MSG_INVALID_VERIFIER_KEY);\n    thing = normalizeInput(thing);\n    signature = toBase64(signature);\n    var verifier = crypto.createVerify('RSA-SHA' + bits);\n    verifier.update(thing);\n    return verifier.verify(publicKey, signature, 'base64');\n  }\n}\n\nfunction createECDSASigner(bits) {\n  var inner = createKeySigner(bits);\n  return function sign() {\n    var signature = inner.apply(null, arguments);\n    signature = formatEcdsa.derToJose(signature, 'ES' + bits);\n    return signature;\n  };\n}\n\nfunction createECDSAVerifer(bits) {\n  var inner = createKeyVerifier(bits);\n  return function verify(thing, signature, publicKey) {\n    signature = formatEcdsa.joseToDer(signature, 'ES' + bits).toString('base64');\n    var result = inner(thing, signature, publicKey);\n    return result;\n  };\n}\n\nfunction createNoneSigner() {\n  return function sign() {\n    return '';\n  }\n}\n\nfunction createNoneVerifier() {\n  return function verify(thing, signature) {\n    return signature === '';\n  }\n}\n\nmodule.exports = function jwa(algorithm) {\n  var signerFactories = {\n    hs: createHmacSigner,\n    rs: createKeySigner,\n    es: createECDSASigner,\n    none: createNoneSigner,\n  }\n  var verifierFactories = {\n    hs: createHmacVerifier,\n    rs: createKeyVerifier,\n    es: createECDSAVerifer,\n    none: createNoneVerifier,\n  }\n  var match = algorithm.match(/^(RS|ES|HS)(256|384|512)$|^(none)$/i);\n  if (!match)\n    throw typeError(MSG_INVALID_ALGORITHM, algorithm);\n  var algo = (match[1] || match[3]).toLowerCase();\n  var bits = match[2];\n\n  return {\n    sign: signerFactories[algo](bits),\n    verify: verifierFactories[algo](bits),\n  }\n};\n\n\n//# sourceURL=webpack:///./node_modules/jwa/index.js?");

/***/ }),

/***/ "./node_modules/jws/index.js":
/*!***********************************!*\
  !*** ./node_modules/jws/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global exports*/\nvar SignStream = __webpack_require__(/*! ./lib/sign-stream */ \"./node_modules/jws/lib/sign-stream.js\");\nvar VerifyStream = __webpack_require__(/*! ./lib/verify-stream */ \"./node_modules/jws/lib/verify-stream.js\");\n\nvar ALGORITHMS = [\n  'HS256', 'HS384', 'HS512',\n  'RS256', 'RS384', 'RS512',\n  'ES256', 'ES384', 'ES512'\n];\n\nexports.ALGORITHMS = ALGORITHMS;\nexports.sign = SignStream.sign;\nexports.verify = VerifyStream.verify;\nexports.decode = VerifyStream.decode;\nexports.isValid = VerifyStream.isValid;\nexports.createSign = function createSign(opts) {\n  return new SignStream(opts);\n};\nexports.createVerify = function createVerify(opts) {\n  return new VerifyStream(opts);\n};\n\n\n//# sourceURL=webpack:///./node_modules/jws/index.js?");

/***/ }),

/***/ "./node_modules/jws/lib/data-stream.js":
/*!*********************************************!*\
  !*** ./node_modules/jws/lib/data-stream.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global module, process*/\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar util = __webpack_require__(/*! util */ \"util\");\n\nfunction DataStream(data) {\n  this.buffer = null;\n  this.writable = true;\n  this.readable = true;\n\n  // No input\n  if (!data) {\n    this.buffer = Buffer.alloc(0);\n    return this;\n  }\n\n  // Stream\n  if (typeof data.pipe === 'function') {\n    this.buffer = Buffer.alloc(0);\n    data.pipe(this);\n    return this;\n  }\n\n  // Buffer or String\n  // or Object (assumedly a passworded key)\n  if (data.length || typeof data === 'object') {\n    this.buffer = data;\n    this.writable = false;\n    process.nextTick(function () {\n      this.emit('end', data);\n      this.readable = false;\n      this.emit('close');\n    }.bind(this));\n    return this;\n  }\n\n  throw new TypeError('Unexpected data type ('+ typeof data + ')');\n}\nutil.inherits(DataStream, Stream);\n\nDataStream.prototype.write = function write(data) {\n  this.buffer = Buffer.concat([this.buffer, Buffer.from(data)]);\n  this.emit('data', data);\n};\n\nDataStream.prototype.end = function end(data) {\n  if (data)\n    this.write(data);\n  this.emit('end', data);\n  this.emit('close');\n  this.writable = false;\n  this.readable = false;\n};\n\nmodule.exports = DataStream;\n\n\n//# sourceURL=webpack:///./node_modules/jws/lib/data-stream.js?");

/***/ }),

/***/ "./node_modules/jws/lib/sign-stream.js":
/*!*********************************************!*\
  !*** ./node_modules/jws/lib/sign-stream.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global module*/\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\nvar DataStream = __webpack_require__(/*! ./data-stream */ \"./node_modules/jws/lib/data-stream.js\");\nvar jwa = __webpack_require__(/*! jwa */ \"./node_modules/jwa/index.js\");\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar toString = __webpack_require__(/*! ./tostring */ \"./node_modules/jws/lib/tostring.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\n\nfunction base64url(string, encoding) {\n  return Buffer\n    .from(string, encoding)\n    .toString('base64')\n    .replace(/=/g, '')\n    .replace(/\\+/g, '-')\n    .replace(/\\//g, '_');\n}\n\nfunction jwsSecuredInput(header, payload, encoding) {\n  encoding = encoding || 'utf8';\n  var encodedHeader = base64url(toString(header), 'binary');\n  var encodedPayload = base64url(toString(payload), encoding);\n  return util.format('%s.%s', encodedHeader, encodedPayload);\n}\n\nfunction jwsSign(opts) {\n  var header = opts.header;\n  var payload = opts.payload;\n  var secretOrKey = opts.secret || opts.privateKey;\n  var encoding = opts.encoding;\n  var algo = jwa(header.alg);\n  var securedInput = jwsSecuredInput(header, payload, encoding);\n  var signature = algo.sign(securedInput, secretOrKey);\n  return util.format('%s.%s', securedInput, signature);\n}\n\nfunction SignStream(opts) {\n  var secret = opts.secret||opts.privateKey||opts.key;\n  var secretStream = new DataStream(secret);\n  this.readable = true;\n  this.header = opts.header;\n  this.encoding = opts.encoding;\n  this.secret = this.privateKey = this.key = secretStream;\n  this.payload = new DataStream(opts.payload);\n  this.secret.once('close', function () {\n    if (!this.payload.writable && this.readable)\n      this.sign();\n  }.bind(this));\n\n  this.payload.once('close', function () {\n    if (!this.secret.writable && this.readable)\n      this.sign();\n  }.bind(this));\n}\nutil.inherits(SignStream, Stream);\n\nSignStream.prototype.sign = function sign() {\n  try {\n    var signature = jwsSign({\n      header: this.header,\n      payload: this.payload.buffer,\n      secret: this.secret.buffer,\n      encoding: this.encoding\n    });\n    this.emit('done', signature);\n    this.emit('data', signature);\n    this.emit('end');\n    this.readable = false;\n    return signature;\n  } catch (e) {\n    this.readable = false;\n    this.emit('error', e);\n    this.emit('close');\n  }\n};\n\nSignStream.sign = jwsSign;\n\nmodule.exports = SignStream;\n\n\n//# sourceURL=webpack:///./node_modules/jws/lib/sign-stream.js?");

/***/ }),

/***/ "./node_modules/jws/lib/tostring.js":
/*!******************************************!*\
  !*** ./node_modules/jws/lib/tostring.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global module*/\nvar Buffer = __webpack_require__(/*! buffer */ \"buffer\").Buffer;\n\nmodule.exports = function toString(obj) {\n  if (typeof obj === 'string')\n    return obj;\n  if (typeof obj === 'number' || Buffer.isBuffer(obj))\n    return obj.toString();\n  return JSON.stringify(obj);\n};\n\n\n//# sourceURL=webpack:///./node_modules/jws/lib/tostring.js?");

/***/ }),

/***/ "./node_modules/jws/lib/verify-stream.js":
/*!***********************************************!*\
  !*** ./node_modules/jws/lib/verify-stream.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/*global module*/\nvar Buffer = __webpack_require__(/*! safe-buffer */ \"safe-buffer\").Buffer;\nvar DataStream = __webpack_require__(/*! ./data-stream */ \"./node_modules/jws/lib/data-stream.js\");\nvar jwa = __webpack_require__(/*! jwa */ \"./node_modules/jwa/index.js\");\nvar Stream = __webpack_require__(/*! stream */ \"stream\");\nvar toString = __webpack_require__(/*! ./tostring */ \"./node_modules/jws/lib/tostring.js\");\nvar util = __webpack_require__(/*! util */ \"util\");\nvar JWS_REGEX = /^[a-zA-Z0-9\\-_]+?\\.[a-zA-Z0-9\\-_]+?\\.([a-zA-Z0-9\\-_]+)?$/;\n\nfunction isObject(thing) {\n  return Object.prototype.toString.call(thing) === '[object Object]';\n}\n\nfunction safeJsonParse(thing) {\n  if (isObject(thing))\n    return thing;\n  try { return JSON.parse(thing); }\n  catch (e) { return undefined; }\n}\n\nfunction headerFromJWS(jwsSig) {\n  var encodedHeader = jwsSig.split('.', 1)[0];\n  return safeJsonParse(Buffer.from(encodedHeader, 'base64').toString('binary'));\n}\n\nfunction securedInputFromJWS(jwsSig) {\n  return jwsSig.split('.', 2).join('.');\n}\n\nfunction signatureFromJWS(jwsSig) {\n  return jwsSig.split('.')[2];\n}\n\nfunction payloadFromJWS(jwsSig, encoding) {\n  encoding = encoding || 'utf8';\n  var payload = jwsSig.split('.')[1];\n  return Buffer.from(payload, 'base64').toString(encoding);\n}\n\nfunction isValidJws(string) {\n  return JWS_REGEX.test(string) && !!headerFromJWS(string);\n}\n\nfunction jwsVerify(jwsSig, algorithm, secretOrKey) {\n  if (!algorithm) {\n    var err = new Error(\"Missing algorithm parameter for jws.verify\");\n    err.code = \"MISSING_ALGORITHM\";\n    throw err;\n  }\n  jwsSig = toString(jwsSig);\n  var signature = signatureFromJWS(jwsSig);\n  var securedInput = securedInputFromJWS(jwsSig);\n  var algo = jwa(algorithm);\n  return algo.verify(securedInput, signature, secretOrKey);\n}\n\nfunction jwsDecode(jwsSig, opts) {\n  opts = opts || {};\n  jwsSig = toString(jwsSig);\n\n  if (!isValidJws(jwsSig))\n    return null;\n\n  var header = headerFromJWS(jwsSig);\n\n  if (!header)\n    return null;\n\n  var payload = payloadFromJWS(jwsSig);\n  if (header.typ === 'JWT' || opts.json)\n    payload = JSON.parse(payload, opts.encoding);\n\n  return {\n    header: header,\n    payload: payload,\n    signature: signatureFromJWS(jwsSig)\n  };\n}\n\nfunction VerifyStream(opts) {\n  opts = opts || {};\n  var secretOrKey = opts.secret||opts.publicKey||opts.key;\n  var secretStream = new DataStream(secretOrKey);\n  this.readable = true;\n  this.algorithm = opts.algorithm;\n  this.encoding = opts.encoding;\n  this.secret = this.publicKey = this.key = secretStream;\n  this.signature = new DataStream(opts.signature);\n  this.secret.once('close', function () {\n    if (!this.signature.writable && this.readable)\n      this.verify();\n  }.bind(this));\n\n  this.signature.once('close', function () {\n    if (!this.secret.writable && this.readable)\n      this.verify();\n  }.bind(this));\n}\nutil.inherits(VerifyStream, Stream);\nVerifyStream.prototype.verify = function verify() {\n  try {\n    var valid = jwsVerify(this.signature.buffer, this.algorithm, this.key.buffer);\n    var obj = jwsDecode(this.signature.buffer, this.encoding);\n    this.emit('done', valid, obj);\n    this.emit('data', valid);\n    this.emit('end');\n    this.readable = false;\n    return valid;\n  } catch (e) {\n    this.readable = false;\n    this.emit('error', e);\n    this.emit('close');\n  }\n};\n\nVerifyStream.decode = jwsDecode;\nVerifyStream.isValid = isValidJws;\nVerifyStream.verify = jwsVerify;\n\nmodule.exports = VerifyStream;\n\n\n//# sourceURL=webpack:///./node_modules/jws/lib/verify-stream.js?");

/***/ }),

/***/ "./node_modules/lodash.includes/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.includes/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_SAFE_INTEGER = 9007199254740991,\n    MAX_INTEGER = 1.7976931348623157e+308,\n    NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar argsTag = '[object Arguments]',\n    funcTag = '[object Function]',\n    genTag = '[object GeneratorFunction]',\n    stringTag = '[object String]',\n    symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Used to detect unsigned integer values. */\nvar reIsUint = /^(?:0|[1-9]\\d*)$/;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/**\n * A specialized version of `_.map` for arrays without support for iteratee\n * shorthands.\n *\n * @private\n * @param {Array} [array] The array to iterate over.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the new mapped array.\n */\nfunction arrayMap(array, iteratee) {\n  var index = -1,\n      length = array ? array.length : 0,\n      result = Array(length);\n\n  while (++index < length) {\n    result[index] = iteratee(array[index], index, array);\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.findIndex` and `_.findLastIndex` without\n * support for iteratee shorthands.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {Function} predicate The function invoked per iteration.\n * @param {number} fromIndex The index to search from.\n * @param {boolean} [fromRight] Specify iterating from right to left.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseFindIndex(array, predicate, fromIndex, fromRight) {\n  var length = array.length,\n      index = fromIndex + (fromRight ? 1 : -1);\n\n  while ((fromRight ? index-- : ++index < length)) {\n    if (predicate(array[index], index, array)) {\n      return index;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `_.indexOf` without `fromIndex` bounds checks.\n *\n * @private\n * @param {Array} array The array to inspect.\n * @param {*} value The value to search for.\n * @param {number} fromIndex The index to search from.\n * @returns {number} Returns the index of the matched value, else `-1`.\n */\nfunction baseIndexOf(array, value, fromIndex) {\n  if (value !== value) {\n    return baseFindIndex(array, baseIsNaN, fromIndex);\n  }\n  var index = fromIndex - 1,\n      length = array.length;\n\n  while (++index < length) {\n    if (array[index] === value) {\n      return index;\n    }\n  }\n  return -1;\n}\n\n/**\n * The base implementation of `_.isNaN` without support for number objects.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is `NaN`, else `false`.\n */\nfunction baseIsNaN(value) {\n  return value !== value;\n}\n\n/**\n * The base implementation of `_.times` without support for iteratee shorthands\n * or max array length checks.\n *\n * @private\n * @param {number} n The number of times to invoke `iteratee`.\n * @param {Function} iteratee The function invoked per iteration.\n * @returns {Array} Returns the array of results.\n */\nfunction baseTimes(n, iteratee) {\n  var index = -1,\n      result = Array(n);\n\n  while (++index < n) {\n    result[index] = iteratee(index);\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.values` and `_.valuesIn` which creates an\n * array of `object` property values corresponding to the property names\n * of `props`.\n *\n * @private\n * @param {Object} object The object to query.\n * @param {Array} props The property names to get values for.\n * @returns {Object} Returns the array of property values.\n */\nfunction baseValues(object, props) {\n  return arrayMap(props, function(key) {\n    return object[key];\n  });\n}\n\n/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar propertyIsEnumerable = objectProto.propertyIsEnumerable;\n\n/* Built-in method references for those with the same name as other `lodash` methods. */\nvar nativeKeys = overArg(Object.keys, Object),\n    nativeMax = Math.max;\n\n/**\n * Creates an array of the enumerable property names of the array-like `value`.\n *\n * @private\n * @param {*} value The value to query.\n * @param {boolean} inherited Specify returning inherited property names.\n * @returns {Array} Returns the array of property names.\n */\nfunction arrayLikeKeys(value, inherited) {\n  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.\n  // Safari 9 makes `arguments.length` enumerable in strict mode.\n  var result = (isArray(value) || isArguments(value))\n    ? baseTimes(value.length, String)\n    : [];\n\n  var length = result.length,\n      skipIndexes = !!length;\n\n  for (var key in value) {\n    if ((inherited || hasOwnProperty.call(value, key)) &&\n        !(skipIndexes && (key == 'length' || isIndex(key, length)))) {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.\n *\n * @private\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n */\nfunction baseKeys(object) {\n  if (!isPrototype(object)) {\n    return nativeKeys(object);\n  }\n  var result = [];\n  for (var key in Object(object)) {\n    if (hasOwnProperty.call(object, key) && key != 'constructor') {\n      result.push(key);\n    }\n  }\n  return result;\n}\n\n/**\n * Checks if `value` is a valid array-like index.\n *\n * @private\n * @param {*} value The value to check.\n * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.\n * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.\n */\nfunction isIndex(value, length) {\n  length = length == null ? MAX_SAFE_INTEGER : length;\n  return !!length &&\n    (typeof value == 'number' || reIsUint.test(value)) &&\n    (value > -1 && value % 1 == 0 && value < length);\n}\n\n/**\n * Checks if `value` is likely a prototype object.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.\n */\nfunction isPrototype(value) {\n  var Ctor = value && value.constructor,\n      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;\n\n  return value === proto;\n}\n\n/**\n * Checks if `value` is in `collection`. If `collection` is a string, it's\n * checked for a substring of `value`, otherwise\n * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)\n * is used for equality comparisons. If `fromIndex` is negative, it's used as\n * the offset from the end of `collection`.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Collection\n * @param {Array|Object|string} collection The collection to inspect.\n * @param {*} value The value to search for.\n * @param {number} [fromIndex=0] The index to search from.\n * @param- {Object} [guard] Enables use as an iteratee for methods like `_.reduce`.\n * @returns {boolean} Returns `true` if `value` is found, else `false`.\n * @example\n *\n * _.includes([1, 2, 3], 1);\n * // => true\n *\n * _.includes([1, 2, 3], 1, 2);\n * // => false\n *\n * _.includes({ 'a': 1, 'b': 2 }, 1);\n * // => true\n *\n * _.includes('abcd', 'bc');\n * // => true\n */\nfunction includes(collection, value, fromIndex, guard) {\n  collection = isArrayLike(collection) ? collection : values(collection);\n  fromIndex = (fromIndex && !guard) ? toInteger(fromIndex) : 0;\n\n  var length = collection.length;\n  if (fromIndex < 0) {\n    fromIndex = nativeMax(length + fromIndex, 0);\n  }\n  return isString(collection)\n    ? (fromIndex <= length && collection.indexOf(value, fromIndex) > -1)\n    : (!!length && baseIndexOf(collection, value, fromIndex) > -1);\n}\n\n/**\n * Checks if `value` is likely an `arguments` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an `arguments` object,\n *  else `false`.\n * @example\n *\n * _.isArguments(function() { return arguments; }());\n * // => true\n *\n * _.isArguments([1, 2, 3]);\n * // => false\n */\nfunction isArguments(value) {\n  // Safari 8.1 makes `arguments.callee` enumerable in strict mode.\n  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&\n    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);\n}\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\n/**\n * Checks if `value` is array-like. A value is considered array-like if it's\n * not a function and has a `value.length` that's an integer greater than or\n * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is array-like, else `false`.\n * @example\n *\n * _.isArrayLike([1, 2, 3]);\n * // => true\n *\n * _.isArrayLike(document.body.children);\n * // => true\n *\n * _.isArrayLike('abc');\n * // => true\n *\n * _.isArrayLike(_.noop);\n * // => false\n */\nfunction isArrayLike(value) {\n  return value != null && isLength(value.length) && !isFunction(value);\n}\n\n/**\n * This method is like `_.isArrayLike` except that it also checks if `value`\n * is an object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an array-like object,\n *  else `false`.\n * @example\n *\n * _.isArrayLikeObject([1, 2, 3]);\n * // => true\n *\n * _.isArrayLikeObject(document.body.children);\n * // => true\n *\n * _.isArrayLikeObject('abc');\n * // => false\n *\n * _.isArrayLikeObject(_.noop);\n * // => false\n */\nfunction isArrayLikeObject(value) {\n  return isObjectLike(value) && isArrayLike(value);\n}\n\n/**\n * Checks if `value` is classified as a `Function` object.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a function, else `false`.\n * @example\n *\n * _.isFunction(_);\n * // => true\n *\n * _.isFunction(/abc/);\n * // => false\n */\nfunction isFunction(value) {\n  // The use of `Object#toString` avoids issues with the `typeof` operator\n  // in Safari 8-9 which returns 'object' for typed array and other constructors.\n  var tag = isObject(value) ? objectToString.call(value) : '';\n  return tag == funcTag || tag == genTag;\n}\n\n/**\n * Checks if `value` is a valid array-like length.\n *\n * **Note:** This method is loosely based on\n * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.\n * @example\n *\n * _.isLength(3);\n * // => true\n *\n * _.isLength(Number.MIN_VALUE);\n * // => false\n *\n * _.isLength(Infinity);\n * // => false\n *\n * _.isLength('3');\n * // => false\n */\nfunction isLength(value) {\n  return typeof value == 'number' &&\n    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `String` primitive or object.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a string, else `false`.\n * @example\n *\n * _.isString('abc');\n * // => true\n *\n * _.isString(1);\n * // => false\n */\nfunction isString(value) {\n  return typeof value == 'string' ||\n    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\n/**\n * Creates an array of the own enumerable property names of `object`.\n *\n * **Note:** Non-object values are coerced to objects. See the\n * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)\n * for more details.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property names.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.keys(new Foo);\n * // => ['a', 'b'] (iteration order is not guaranteed)\n *\n * _.keys('hi');\n * // => ['0', '1']\n */\nfunction keys(object) {\n  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);\n}\n\n/**\n * Creates an array of the own enumerable string keyed property values of `object`.\n *\n * **Note:** Non-object values are coerced to objects.\n *\n * @static\n * @since 0.1.0\n * @memberOf _\n * @category Object\n * @param {Object} object The object to query.\n * @returns {Array} Returns the array of property values.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n *   this.b = 2;\n * }\n *\n * Foo.prototype.c = 3;\n *\n * _.values(new Foo);\n * // => [1, 2] (iteration order is not guaranteed)\n *\n * _.values('hi');\n * // => ['h', 'i']\n */\nfunction values(object) {\n  return object ? baseValues(object, keys(object)) : [];\n}\n\nmodule.exports = includes;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.includes/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isboolean/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.isboolean/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash 3.0.3 (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar boolTag = '[object Boolean]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as a boolean primitive or object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isBoolean(false);\n * // => true\n *\n * _.isBoolean(null);\n * // => false\n */\nfunction isBoolean(value) {\n  return value === true || value === false ||\n    (isObjectLike(value) && objectToString.call(value) == boolTag);\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\nmodule.exports = isBoolean;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isboolean/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isinteger/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.isinteger/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308,\n    NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Checks if `value` is an integer.\n *\n * **Note:** This method is based on\n * [`Number.isInteger`](https://mdn.io/Number/isInteger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an integer, else `false`.\n * @example\n *\n * _.isInteger(3);\n * // => true\n *\n * _.isInteger(Number.MIN_VALUE);\n * // => false\n *\n * _.isInteger(Infinity);\n * // => false\n *\n * _.isInteger('3');\n * // => false\n */\nfunction isInteger(value) {\n  return typeof value == 'number' && value == toInteger(value);\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = isInteger;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isinteger/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isnumber/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isnumber/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash 3.0.3 (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar numberTag = '[object Number]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Number` primitive or object.\n *\n * **Note:** To exclude `Infinity`, `-Infinity`, and `NaN`, which are classified\n * as numbers, use the `_.isFinite` method.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isNumber(3);\n * // => true\n *\n * _.isNumber(Number.MIN_VALUE);\n * // => true\n *\n * _.isNumber(Infinity);\n * // => true\n *\n * _.isNumber('3');\n * // => false\n */\nfunction isNumber(value) {\n  return typeof value == 'number' ||\n    (isObjectLike(value) && objectToString.call(value) == numberTag);\n}\n\nmodule.exports = isNumber;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isnumber/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isplainobject/index.js":
/*!****************************************************!*\
  !*** ./node_modules/lodash.isplainobject/index.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** `Object#toString` result references. */\nvar objectTag = '[object Object]';\n\n/**\n * Checks if `value` is a host object in IE < 9.\n *\n * @private\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a host object, else `false`.\n */\nfunction isHostObject(value) {\n  // Many host objects are `Object` objects that can coerce to strings\n  // despite having improperly defined `toString` methods.\n  var result = false;\n  if (value != null && typeof value.toString != 'function') {\n    try {\n      result = !!(value + '');\n    } catch (e) {}\n  }\n  return result;\n}\n\n/**\n * Creates a unary function that invokes `func` with its argument transformed.\n *\n * @private\n * @param {Function} func The function to wrap.\n * @param {Function} transform The argument transform.\n * @returns {Function} Returns the new function.\n */\nfunction overArg(func, transform) {\n  return function(arg) {\n    return func(transform(arg));\n  };\n}\n\n/** Used for built-in method references. */\nvar funcProto = Function.prototype,\n    objectProto = Object.prototype;\n\n/** Used to resolve the decompiled source of functions. */\nvar funcToString = funcProto.toString;\n\n/** Used to check objects for own properties. */\nvar hasOwnProperty = objectProto.hasOwnProperty;\n\n/** Used to infer the `Object` constructor. */\nvar objectCtorString = funcToString.call(Object);\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/** Built-in value references. */\nvar getPrototype = overArg(Object.getPrototypeOf, Object);\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is a plain object, that is, an object created by the\n * `Object` constructor or one with a `[[Prototype]]` of `null`.\n *\n * @static\n * @memberOf _\n * @since 0.8.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.\n * @example\n *\n * function Foo() {\n *   this.a = 1;\n * }\n *\n * _.isPlainObject(new Foo);\n * // => false\n *\n * _.isPlainObject([1, 2, 3]);\n * // => false\n *\n * _.isPlainObject({ 'x': 0, 'y': 0 });\n * // => true\n *\n * _.isPlainObject(Object.create(null));\n * // => true\n */\nfunction isPlainObject(value) {\n  if (!isObjectLike(value) ||\n      objectToString.call(value) != objectTag || isHostObject(value)) {\n    return false;\n  }\n  var proto = getPrototype(value);\n  if (proto === null) {\n    return true;\n  }\n  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;\n  return (typeof Ctor == 'function' &&\n    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);\n}\n\nmodule.exports = isPlainObject;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isplainobject/index.js?");

/***/ }),

/***/ "./node_modules/lodash.isstring/index.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash.isstring/index.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash 4.0.1 (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright 2012-2016 The Dojo Foundation <http://dojofoundation.org/>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright 2009-2016 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n * Available under MIT license <https://lodash.com/license>\n */\n\n/** `Object#toString` result references. */\nvar stringTag = '[object String]';\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Checks if `value` is classified as an `Array` object.\n *\n * @static\n * @memberOf _\n * @type Function\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isArray([1, 2, 3]);\n * // => true\n *\n * _.isArray(document.body.children);\n * // => false\n *\n * _.isArray('abc');\n * // => false\n *\n * _.isArray(_.noop);\n * // => false\n */\nvar isArray = Array.isArray;\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `String` primitive or object.\n *\n * @static\n * @memberOf _\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.\n * @example\n *\n * _.isString('abc');\n * // => true\n *\n * _.isString(1);\n * // => false\n */\nfunction isString(value) {\n  return typeof value == 'string' ||\n    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);\n}\n\nmodule.exports = isString;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.isstring/index.js?");

/***/ }),

/***/ "./node_modules/lodash.once/index.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash.once/index.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * lodash (Custom Build) <https://lodash.com/>\n * Build: `lodash modularize exports=\"npm\" -o ./`\n * Copyright jQuery Foundation and other contributors <https://jquery.org/>\n * Released under MIT license <https://lodash.com/license>\n * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>\n * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors\n */\n\n/** Used as the `TypeError` message for \"Functions\" methods. */\nvar FUNC_ERROR_TEXT = 'Expected a function';\n\n/** Used as references for various `Number` constants. */\nvar INFINITY = 1 / 0,\n    MAX_INTEGER = 1.7976931348623157e+308,\n    NAN = 0 / 0;\n\n/** `Object#toString` result references. */\nvar symbolTag = '[object Symbol]';\n\n/** Used to match leading and trailing whitespace. */\nvar reTrim = /^\\s+|\\s+$/g;\n\n/** Used to detect bad signed hexadecimal string values. */\nvar reIsBadHex = /^[-+]0x[0-9a-f]+$/i;\n\n/** Used to detect binary string values. */\nvar reIsBinary = /^0b[01]+$/i;\n\n/** Used to detect octal string values. */\nvar reIsOctal = /^0o[0-7]+$/i;\n\n/** Built-in method references without a dependency on `root`. */\nvar freeParseInt = parseInt;\n\n/** Used for built-in method references. */\nvar objectProto = Object.prototype;\n\n/**\n * Used to resolve the\n * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)\n * of values.\n */\nvar objectToString = objectProto.toString;\n\n/**\n * Creates a function that invokes `func`, with the `this` binding and arguments\n * of the created function, while it's called less than `n` times. Subsequent\n * calls to the created function return the result of the last `func` invocation.\n *\n * @static\n * @memberOf _\n * @since 3.0.0\n * @category Function\n * @param {number} n The number of calls at which `func` is no longer invoked.\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new restricted function.\n * @example\n *\n * jQuery(element).on('click', _.before(5, addContactToList));\n * // => Allows adding up to 4 contacts to the list.\n */\nfunction before(n, func) {\n  var result;\n  if (typeof func != 'function') {\n    throw new TypeError(FUNC_ERROR_TEXT);\n  }\n  n = toInteger(n);\n  return function() {\n    if (--n > 0) {\n      result = func.apply(this, arguments);\n    }\n    if (n <= 1) {\n      func = undefined;\n    }\n    return result;\n  };\n}\n\n/**\n * Creates a function that is restricted to invoking `func` once. Repeat calls\n * to the function return the value of the first invocation. The `func` is\n * invoked with the `this` binding and arguments of the created function.\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Function\n * @param {Function} func The function to restrict.\n * @returns {Function} Returns the new restricted function.\n * @example\n *\n * var initialize = _.once(createApplication);\n * initialize();\n * initialize();\n * // => `createApplication` is invoked once\n */\nfunction once(func) {\n  return before(2, func);\n}\n\n/**\n * Checks if `value` is the\n * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)\n * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)\n *\n * @static\n * @memberOf _\n * @since 0.1.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is an object, else `false`.\n * @example\n *\n * _.isObject({});\n * // => true\n *\n * _.isObject([1, 2, 3]);\n * // => true\n *\n * _.isObject(_.noop);\n * // => true\n *\n * _.isObject(null);\n * // => false\n */\nfunction isObject(value) {\n  var type = typeof value;\n  return !!value && (type == 'object' || type == 'function');\n}\n\n/**\n * Checks if `value` is object-like. A value is object-like if it's not `null`\n * and has a `typeof` result of \"object\".\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is object-like, else `false`.\n * @example\n *\n * _.isObjectLike({});\n * // => true\n *\n * _.isObjectLike([1, 2, 3]);\n * // => true\n *\n * _.isObjectLike(_.noop);\n * // => false\n *\n * _.isObjectLike(null);\n * // => false\n */\nfunction isObjectLike(value) {\n  return !!value && typeof value == 'object';\n}\n\n/**\n * Checks if `value` is classified as a `Symbol` primitive or object.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to check.\n * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.\n * @example\n *\n * _.isSymbol(Symbol.iterator);\n * // => true\n *\n * _.isSymbol('abc');\n * // => false\n */\nfunction isSymbol(value) {\n  return typeof value == 'symbol' ||\n    (isObjectLike(value) && objectToString.call(value) == symbolTag);\n}\n\n/**\n * Converts `value` to a finite number.\n *\n * @static\n * @memberOf _\n * @since 4.12.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted number.\n * @example\n *\n * _.toFinite(3.2);\n * // => 3.2\n *\n * _.toFinite(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toFinite(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toFinite('3.2');\n * // => 3.2\n */\nfunction toFinite(value) {\n  if (!value) {\n    return value === 0 ? value : 0;\n  }\n  value = toNumber(value);\n  if (value === INFINITY || value === -INFINITY) {\n    var sign = (value < 0 ? -1 : 1);\n    return sign * MAX_INTEGER;\n  }\n  return value === value ? value : 0;\n}\n\n/**\n * Converts `value` to an integer.\n *\n * **Note:** This method is loosely based on\n * [`ToInteger`](http://www.ecma-international.org/ecma-262/7.0/#sec-tointeger).\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to convert.\n * @returns {number} Returns the converted integer.\n * @example\n *\n * _.toInteger(3.2);\n * // => 3\n *\n * _.toInteger(Number.MIN_VALUE);\n * // => 0\n *\n * _.toInteger(Infinity);\n * // => 1.7976931348623157e+308\n *\n * _.toInteger('3.2');\n * // => 3\n */\nfunction toInteger(value) {\n  var result = toFinite(value),\n      remainder = result % 1;\n\n  return result === result ? (remainder ? result - remainder : result) : 0;\n}\n\n/**\n * Converts `value` to a number.\n *\n * @static\n * @memberOf _\n * @since 4.0.0\n * @category Lang\n * @param {*} value The value to process.\n * @returns {number} Returns the number.\n * @example\n *\n * _.toNumber(3.2);\n * // => 3.2\n *\n * _.toNumber(Number.MIN_VALUE);\n * // => 5e-324\n *\n * _.toNumber(Infinity);\n * // => Infinity\n *\n * _.toNumber('3.2');\n * // => 3.2\n */\nfunction toNumber(value) {\n  if (typeof value == 'number') {\n    return value;\n  }\n  if (isSymbol(value)) {\n    return NAN;\n  }\n  if (isObject(value)) {\n    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;\n    value = isObject(other) ? (other + '') : other;\n  }\n  if (typeof value != 'string') {\n    return value === 0 ? value : +value;\n  }\n  value = value.replace(reTrim, '');\n  var isBinary = reIsBinary.test(value);\n  return (isBinary || reIsOctal.test(value))\n    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)\n    : (reIsBadHex.test(value) ? NAN : +value);\n}\n\nmodule.exports = once;\n\n\n//# sourceURL=webpack:///./node_modules/lodash.once/index.js?");

/***/ }),

/***/ "./node_modules/passport-local/lib/index.js":
/*!**************************************************!*\
  !*** ./node_modules/passport-local/lib/index.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Strategy = __webpack_require__(/*! ./strategy */ \"./node_modules/passport-local/lib/strategy.js\");\n\n\n/**\n * Expose `Strategy` directly from package.\n */\nexports = module.exports = Strategy;\n\n/**\n * Export constructors.\n */\nexports.Strategy = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport-local/lib/strategy.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport-local/lib/strategy.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar passport = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\")\n  , util = __webpack_require__(/*! util */ \"util\")\n  , lookup = __webpack_require__(/*! ./utils */ \"./node_modules/passport-local/lib/utils.js\").lookup;\n\n\n/**\n * `Strategy` constructor.\n *\n * The local authentication strategy authenticates requests based on the\n * credentials submitted through an HTML-based login form.\n *\n * Applications must supply a `verify` callback which accepts `username` and\n * `password` credentials, and then calls the `done` callback supplying a\n * `user`, which should be set to `false` if the credentials are not valid.\n * If an exception occured, `err` should be set.\n *\n * Optionally, `options` can be used to change the fields in which the\n * credentials are found.\n *\n * Options:\n *   - `usernameField`  field name where the username is found, defaults to _username_\n *   - `passwordField`  field name where the password is found, defaults to _password_\n *   - `passReqToCallback`  when `true`, `req` is the first argument to the verify callback (default: `false`)\n *\n * Examples:\n *\n *     passport.use(new LocalStrategy(\n *       function(username, password, done) {\n *         User.findOne({ username: username, password: password }, function (err, user) {\n *           done(err, user);\n *         });\n *       }\n *     ));\n *\n * @param {Object} options\n * @param {Function} verify\n * @api public\n */\nfunction Strategy(options, verify) {\n  if (typeof options == 'function') {\n    verify = options;\n    options = {};\n  }\n  if (!verify) { throw new TypeError('LocalStrategy requires a verify callback'); }\n  \n  this._usernameField = options.usernameField || 'username';\n  this._passwordField = options.passwordField || 'password';\n  \n  passport.Strategy.call(this);\n  this.name = 'local';\n  this._verify = verify;\n  this._passReqToCallback = options.passReqToCallback;\n}\n\n/**\n * Inherit from `passport.Strategy`.\n */\nutil.inherits(Strategy, passport.Strategy);\n\n/**\n * Authenticate request based on the contents of a form submission.\n *\n * @param {Object} req\n * @api protected\n */\nStrategy.prototype.authenticate = function(req, options) {\n  options = options || {};\n  var username = lookup(req.body, this._usernameField) || lookup(req.query, this._usernameField);\n  var password = lookup(req.body, this._passwordField) || lookup(req.query, this._passwordField);\n  \n  if (!username || !password) {\n    return this.fail({ message: options.badRequestMessage || 'Missing credentials' }, 400);\n  }\n  \n  var self = this;\n  \n  function verified(err, user, info) {\n    if (err) { return self.error(err); }\n    if (!user) { return self.fail(info); }\n    self.success(user, info);\n  }\n  \n  try {\n    if (self._passReqToCallback) {\n      this._verify(req, username, password, verified);\n    } else {\n      this._verify(username, password, verified);\n    }\n  } catch (ex) {\n    return self.error(ex);\n  }\n};\n\n\n/**\n * Expose `Strategy`.\n */\nmodule.exports = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/strategy.js?");

/***/ }),

/***/ "./node_modules/passport-local/lib/utils.js":
/*!**************************************************!*\
  !*** ./node_modules/passport-local/lib/utils.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("exports.lookup = function(obj, field) {\n  if (!obj) { return null; }\n  var chain = field.split(']').join('').split('[');\n  for (var i = 0, len = chain.length; i < len; i++) {\n    var prop = obj[chain[i]];\n    if (typeof(prop) === 'undefined') { return null; }\n    if (typeof(prop) !== 'object') { return prop; }\n    obj = prop;\n  }\n  return null;\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport-local/lib/utils.js?");

/***/ }),

/***/ "./node_modules/passport-strategy/lib/index.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport-strategy/lib/index.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Strategy = __webpack_require__(/*! ./strategy */ \"./node_modules/passport-strategy/lib/strategy.js\");\n\n\n/**\n * Expose `Strategy` directly from package.\n */\nexports = module.exports = Strategy;\n\n/**\n * Export constructors.\n */\nexports.Strategy = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-strategy/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport-strategy/lib/strategy.js":
/*!********************************************************!*\
  !*** ./node_modules/passport-strategy/lib/strategy.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Creates an instance of `Strategy`.\n *\n * @constructor\n * @api public\n */\nfunction Strategy() {\n}\n\n/**\n * Authenticate request.\n *\n * This function must be overridden by subclasses.  In abstract form, it always\n * throws an exception.\n *\n * @param {Object} req The request to authenticate.\n * @param {Object} [options] Strategy-specific options.\n * @api public\n */\nStrategy.prototype.authenticate = function(req, options) {\n  throw new Error('Strategy#authenticate must be overridden by subclass');\n};\n\n\n/**\n * Expose `Strategy`.\n */\nmodule.exports = Strategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport-strategy/lib/strategy.js?");

/***/ }),

/***/ "./node_modules/passport/lib/authenticator.js":
/*!****************************************************!*\
  !*** ./node_modules/passport/lib/authenticator.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar SessionStrategy = __webpack_require__(/*! ./strategies/session */ \"./node_modules/passport/lib/strategies/session.js\")\n  , SessionManager = __webpack_require__(/*! ./sessionmanager */ \"./node_modules/passport/lib/sessionmanager.js\");\n\n\n/**\n * `Authenticator` constructor.\n *\n * @api public\n */\nfunction Authenticator() {\n  this._key = 'passport';\n  this._strategies = {};\n  this._serializers = [];\n  this._deserializers = [];\n  this._infoTransformers = [];\n  this._framework = null;\n  this._userProperty = 'user';\n  \n  this.init();\n}\n\n/**\n * Initialize authenticator.\n *\n * @api protected\n */\nAuthenticator.prototype.init = function() {\n  this.framework(__webpack_require__(/*! ./framework/connect */ \"./node_modules/passport/lib/framework/connect.js\")());\n  this.use(new SessionStrategy(this.deserializeUser.bind(this)));\n  this._sm = new SessionManager({ key: this._key }, this.serializeUser.bind(this));\n};\n\n/**\n * Utilize the given `strategy` with optional `name`, overridding the strategy's\n * default name.\n *\n * Examples:\n *\n *     passport.use(new TwitterStrategy(...));\n *\n *     passport.use('api', new http.BasicStrategy(...));\n *\n * @param {String|Strategy} name\n * @param {Strategy} strategy\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.use = function(name, strategy) {\n  if (!strategy) {\n    strategy = name;\n    name = strategy.name;\n  }\n  if (!name) { throw new Error('Authentication strategies must have a name'); }\n  \n  this._strategies[name] = strategy;\n  return this;\n};\n\n/**\n * Un-utilize the `strategy` with given `name`.\n *\n * In typical applications, the necessary authentication strategies are static,\n * configured once and always available.  As such, there is often no need to\n * invoke this function.\n *\n * However, in certain situations, applications may need dynamically configure\n * and de-configure authentication strategies.  The `use()`/`unuse()`\n * combination satisfies these scenarios.\n *\n * Examples:\n *\n *     passport.unuse('legacy-api');\n *\n * @param {String} name\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.unuse = function(name) {\n  delete this._strategies[name];\n  return this;\n};\n\n/**\n * Setup Passport to be used under framework.\n *\n * By default, Passport exposes middleware that operate using Connect-style\n * middleware using a `fn(req, res, next)` signature.  Other popular frameworks\n * have different expectations, and this function allows Passport to be adapted\n * to operate within such environments.\n *\n * If you are using a Connect-compatible framework, including Express, there is\n * no need to invoke this function.\n *\n * Examples:\n *\n *     passport.framework(require('hapi-passport')());\n *\n * @param {Object} name\n * @return {Authenticator} for chaining\n * @api public\n */\nAuthenticator.prototype.framework = function(fw) {\n  this._framework = fw;\n  return this;\n};\n\n/**\n * Passport's primary initialization middleware.\n *\n * This middleware must be in use by the Connect/Express application for\n * Passport to operate.\n *\n * Options:\n *   - `userProperty`  Property to set on `req` upon login, defaults to _user_\n *\n * Examples:\n *\n *     app.use(passport.initialize());\n *\n *     app.use(passport.initialize({ userProperty: 'currentUser' }));\n *\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.initialize = function(options) {\n  options = options || {};\n  this._userProperty = options.userProperty || 'user';\n  \n  return this._framework.initialize(this, options);\n};\n\n/**\n * Middleware that will authenticate a request using the given `strategy` name,\n * with optional `options` and `callback`.\n *\n * Examples:\n *\n *     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' })(req, res);\n *\n *     passport.authenticate('local', function(err, user) {\n *       if (!user) { return res.redirect('/login'); }\n *       res.end('Authenticated!');\n *     })(req, res);\n *\n *     passport.authenticate('basic', { session: false })(req, res);\n *\n *     app.get('/auth/twitter', passport.authenticate('twitter'), function(req, res) {\n *       // request will be redirected to Twitter\n *     });\n *     app.get('/auth/twitter/callback', passport.authenticate('twitter'), function(req, res) {\n *       res.json(req.user);\n *     });\n *\n * @param {String} strategy\n * @param {Object} options\n * @param {Function} callback\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.authenticate = function(strategy, options, callback) {\n  return this._framework.authenticate(this, strategy, options, callback);\n};\n\n/**\n * Middleware that will authorize a third-party account using the given\n * `strategy` name, with optional `options`.\n *\n * If authorization is successful, the result provided by the strategy's verify\n * callback will be assigned to `req.account`.  The existing login session and\n * `req.user` will be unaffected.\n *\n * This function is particularly useful when connecting third-party accounts\n * to the local account of a user that is currently authenticated.\n *\n * Examples:\n *\n *    passport.authorize('twitter-authz', { failureRedirect: '/account' });\n *\n * @param {String} strategy\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.authorize = function(strategy, options, callback) {\n  options = options || {};\n  options.assignProperty = 'account';\n  \n  var fn = this._framework.authorize || this._framework.authenticate;\n  return fn(this, strategy, options, callback);\n};\n\n/**\n * Middleware that will restore login state from a session.\n *\n * Web applications typically use sessions to maintain login state between\n * requests.  For example, a user will authenticate by entering credentials into\n * a form which is submitted to the server.  If the credentials are valid, a\n * login session is established by setting a cookie containing a session\n * identifier in the user's web browser.  The web browser will send this cookie\n * in subsequent requests to the server, allowing a session to be maintained.\n *\n * If sessions are being utilized, and a login session has been established,\n * this middleware will populate `req.user` with the current user.\n *\n * Note that sessions are not strictly required for Passport to operate.\n * However, as a general rule, most web applications will make use of sessions.\n * An exception to this rule would be an API server, which expects each HTTP\n * request to provide credentials in an Authorization header.\n *\n * Examples:\n *\n *     app.use(connect.cookieParser());\n *     app.use(connect.session({ secret: 'keyboard cat' }));\n *     app.use(passport.initialize());\n *     app.use(passport.session());\n *\n * Options:\n *   - `pauseStream`      Pause the request stream before deserializing the user\n *                        object from the session.  Defaults to _false_.  Should\n *                        be set to true in cases where middleware consuming the\n *                        request body is configured after passport and the\n *                        deserializeUser method is asynchronous.\n *\n * @param {Object} options\n * @return {Function} middleware\n * @api public\n */\nAuthenticator.prototype.session = function(options) {\n  return this.authenticate('session', options);\n};\n\n// TODO: Make session manager pluggable\n/*\nAuthenticator.prototype.sessionManager = function(mgr) {\n  this._sm = mgr;\n  return this;\n}\n*/\n\n/**\n * Registers a function used to serialize user objects into the session.\n *\n * Examples:\n *\n *     passport.serializeUser(function(user, done) {\n *       done(null, user.id);\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.serializeUser = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._serializers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of serializers, attempting\n  // to serialize a user\n  var user = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._serializers;\n  (function pass(i, err, obj) {\n    // serializers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or serialized object was obtained, done\n    if (err || obj || obj === 0) { return done(err, obj); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      return done(new Error('Failed to serialize user into session'));\n    }\n    \n    \n    function serialized(e, o) {\n      pass(i + 1, e, o);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 3) {\n        layer(req, user, serialized);\n      } else {\n        layer(user, serialized);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Registers a function used to deserialize user objects out of the session.\n *\n * Examples:\n *\n *     passport.deserializeUser(function(id, done) {\n *       User.findById(id, function (err, user) {\n *         done(err, user);\n *       });\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.deserializeUser = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._deserializers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of deserializers,\n  // attempting to deserialize a user\n  var obj = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._deserializers;\n  (function pass(i, err, user) {\n    // deserializers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or deserialized user was obtained, done\n    if (err || user) { return done(err, user); }\n    // a valid user existed when establishing the session, but that user has\n    // since been removed\n    if (user === null || user === false) { return done(null, false); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      return done(new Error('Failed to deserialize user out of session'));\n    }\n    \n    \n    function deserialized(e, u) {\n      pass(i + 1, e, u);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 3) {\n        layer(req, obj, deserialized);\n      } else {\n        layer(obj, deserialized);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Registers a function used to transform auth info.\n *\n * In some circumstances authorization details are contained in authentication\n * credentials or loaded as part of verification.\n *\n * For example, when using bearer tokens for API authentication, the tokens may\n * encode (either directly or indirectly in a database), details such as scope\n * of access or the client to which the token was issued.\n *\n * Such authorization details should be enforced separately from authentication.\n * Because Passport deals only with the latter, this is the responsiblity of\n * middleware or routes further along the chain.  However, it is not optimal to\n * decode the same data or execute the same database query later.  To avoid\n * this, Passport accepts optional `info` along with the authenticated `user`\n * in a strategy's `success()` action.  This info is set at `req.authInfo`,\n * where said later middlware or routes can access it.\n *\n * Optionally, applications can register transforms to proccess this info,\n * which take effect prior to `req.authInfo` being set.  This is useful, for\n * example, when the info contains a client ID.  The transform can load the\n * client from the database and include the instance in the transformed info,\n * allowing the full set of client properties to be convieniently accessed.\n *\n * If no transforms are registered, `info` supplied by the strategy will be left\n * unmodified.\n *\n * Examples:\n *\n *     passport.transformAuthInfo(function(info, done) {\n *       Client.findById(info.clientID, function (err, client) {\n *         info.client = client;\n *         done(err, info);\n *       });\n *     });\n *\n * @api public\n */\nAuthenticator.prototype.transformAuthInfo = function(fn, req, done) {\n  if (typeof fn === 'function') {\n    return this._infoTransformers.push(fn);\n  }\n  \n  // private implementation that traverses the chain of transformers,\n  // attempting to transform auth info\n  var info = fn;\n\n  // For backwards compatibility\n  if (typeof req === 'function') {\n    done = req;\n    req = undefined;\n  }\n  \n  var stack = this._infoTransformers;\n  (function pass(i, err, tinfo) {\n    // transformers use 'pass' as an error to skip processing\n    if ('pass' === err) {\n      err = undefined;\n    }\n    // an error or transformed info was obtained, done\n    if (err || tinfo) { return done(err, tinfo); }\n    \n    var layer = stack[i];\n    if (!layer) {\n      // if no transformers are registered (or they all pass), the default\n      // behavior is to use the un-transformed info as-is\n      return done(null, info);\n    }\n    \n    \n    function transformed(e, t) {\n      pass(i + 1, e, t);\n    }\n    \n    try {\n      var arity = layer.length;\n      if (arity == 1) {\n        // sync\n        var t = layer(info);\n        transformed(null, t);\n      } else if (arity == 3) {\n        layer(req, info, transformed);\n      } else {\n        layer(info, transformed);\n      }\n    } catch(e) {\n      return done(e);\n    }\n  })(0);\n};\n\n/**\n * Return strategy with given `name`. \n *\n * @param {String} name\n * @return {Strategy}\n * @api private\n */\nAuthenticator.prototype._strategy = function(name) {\n  return this._strategies[name];\n};\n\n\n/**\n * Expose `Authenticator`.\n */\nmodule.exports = Authenticator;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/authenticator.js?");

/***/ }),

/***/ "./node_modules/passport/lib/errors/authenticationerror.js":
/*!*****************************************************************!*\
  !*** ./node_modules/passport/lib/errors/authenticationerror.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * `AuthenticationError` error.\n *\n * @constructor\n * @api private\n */\nfunction AuthenticationError(message, status) {\n  Error.call(this);\n  Error.captureStackTrace(this, arguments.callee);\n  this.name = 'AuthenticationError';\n  this.message = message;\n  this.status = status || 401;\n}\n\n// Inherit from `Error`.\nAuthenticationError.prototype.__proto__ = Error.prototype;\n\n\n// Expose constructor.\nmodule.exports = AuthenticationError;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/errors/authenticationerror.js?");

/***/ }),

/***/ "./node_modules/passport/lib/framework/connect.js":
/*!********************************************************!*\
  !*** ./node_modules/passport/lib/framework/connect.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar initialize = __webpack_require__(/*! ../middleware/initialize */ \"./node_modules/passport/lib/middleware/initialize.js\")\n  , authenticate = __webpack_require__(/*! ../middleware/authenticate */ \"./node_modules/passport/lib/middleware/authenticate.js\");\n  \n/**\n * Framework support for Connect/Express.\n *\n * This module provides support for using Passport with Express.  It exposes\n * middleware that conform to the `fn(req, res, next)` signature and extends\n * Node's built-in HTTP request object with useful authentication-related\n * functions.\n *\n * @return {Object}\n * @api protected\n */\nexports = module.exports = function() {\n  \n  // HTTP extensions.\n  exports.__monkeypatchNode();\n  \n  return {\n    initialize: initialize,\n    authenticate: authenticate\n  };\n};\n\nexports.__monkeypatchNode = function() {\n  var http = __webpack_require__(/*! http */ \"http\");\n  var IncomingMessageExt = __webpack_require__(/*! ../http/request */ \"./node_modules/passport/lib/http/request.js\");\n  \n  http.IncomingMessage.prototype.login =\n  http.IncomingMessage.prototype.logIn = IncomingMessageExt.logIn;\n  http.IncomingMessage.prototype.logout =\n  http.IncomingMessage.prototype.logOut = IncomingMessageExt.logOut;\n  http.IncomingMessage.prototype.isAuthenticated = IncomingMessageExt.isAuthenticated;\n  http.IncomingMessage.prototype.isUnauthenticated = IncomingMessageExt.isUnauthenticated;\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/framework/connect.js?");

/***/ }),

/***/ "./node_modules/passport/lib/http/request.js":
/*!***************************************************!*\
  !*** ./node_modules/passport/lib/http/request.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Module dependencies.\n */\n//var http = require('http')\n//  , req = http.IncomingMessage.prototype;\n\n\nvar req = exports = module.exports = {};\n\n/**\n * Initiate a login session for `user`.\n *\n * Options:\n *   - `session`  Save login state in session, defaults to _true_\n *\n * Examples:\n *\n *     req.logIn(user, { session: false });\n *\n *     req.logIn(user, function(err) {\n *       if (err) { throw err; }\n *       // session saved\n *     });\n *\n * @param {User} user\n * @param {Object} options\n * @param {Function} done\n * @api public\n */\nreq.login =\nreq.logIn = function(user, options, done) {\n  if (typeof options == 'function') {\n    done = options;\n    options = {};\n  }\n  options = options || {};\n  \n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  var session = (options.session === undefined) ? true : options.session;\n  \n  this[property] = user;\n  if (session) {\n    if (!this._passport) { throw new Error('passport.initialize() middleware not in use'); }\n    if (typeof done != 'function') { throw new Error('req#login requires a callback function'); }\n    \n    var self = this;\n    this._passport.instance._sm.logIn(this, user, function(err) {\n      if (err) { self[property] = null; return done(err); }\n      done();\n    });\n  } else {\n    done && done();\n  }\n};\n\n/**\n * Terminate an existing login session.\n *\n * @api public\n */\nreq.logout =\nreq.logOut = function() {\n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  \n  this[property] = null;\n  if (this._passport) {\n    this._passport.instance._sm.logOut(this);\n  }\n};\n\n/**\n * Test if request is authenticated.\n *\n * @return {Boolean}\n * @api public\n */\nreq.isAuthenticated = function() {\n  var property = 'user';\n  if (this._passport && this._passport.instance) {\n    property = this._passport.instance._userProperty || 'user';\n  }\n  \n  return (this[property]) ? true : false;\n};\n\n/**\n * Test if request is unauthenticated.\n *\n * @return {Boolean}\n * @api public\n */\nreq.isUnauthenticated = function() {\n  return !this.isAuthenticated();\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/http/request.js?");

/***/ }),

/***/ "./node_modules/passport/lib/index.js":
/*!********************************************!*\
  !*** ./node_modules/passport/lib/index.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar Passport = __webpack_require__(/*! ./authenticator */ \"./node_modules/passport/lib/authenticator.js\")\n  , SessionStrategy = __webpack_require__(/*! ./strategies/session */ \"./node_modules/passport/lib/strategies/session.js\");\n\n\n/**\n * Export default singleton.\n *\n * @api public\n */\nexports = module.exports = new Passport();\n\n/**\n * Expose constructors.\n */\nexports.Passport =\nexports.Authenticator = Passport;\nexports.Strategy = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\");\n\n/**\n * Expose strategies.\n */\nexports.strategies = {};\nexports.strategies.SessionStrategy = SessionStrategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/index.js?");

/***/ }),

/***/ "./node_modules/passport/lib/middleware/authenticate.js":
/*!**************************************************************!*\
  !*** ./node_modules/passport/lib/middleware/authenticate.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar http = __webpack_require__(/*! http */ \"http\")\n  , IncomingMessageExt = __webpack_require__(/*! ../http/request */ \"./node_modules/passport/lib/http/request.js\")\n  , AuthenticationError = __webpack_require__(/*! ../errors/authenticationerror */ \"./node_modules/passport/lib/errors/authenticationerror.js\");\n\n\n/**\n * Authenticates requests.\n *\n * Applies the `name`ed strategy (or strategies) to the incoming request, in\n * order to authenticate the request.  If authentication is successful, the user\n * will be logged in and populated at `req.user` and a session will be\n * established by default.  If authentication fails, an unauthorized response\n * will be sent.\n *\n * Options:\n *   - `session`          Save login state in session, defaults to _true_\n *   - `successRedirect`  After successful login, redirect to given URL\n *   - `successMessage`   True to store success message in\n *                        req.session.messages, or a string to use as override\n *                        message for success.\n *   - `successFlash`     True to flash success messages or a string to use as a flash\n *                        message for success (overrides any from the strategy itself).\n *   - `failureRedirect`  After failed login, redirect to given URL\n *   - `failureMessage`   True to store failure message in\n *                        req.session.messages, or a string to use as override\n *                        message for failure.\n *   - `failureFlash`     True to flash failure messages or a string to use as a flash\n *                        message for failures (overrides any from the strategy itself).\n *   - `assignProperty`   Assign the object provided by the verify callback to given property\n *\n * An optional `callback` can be supplied to allow the application to override\n * the default manner in which authentication attempts are handled.  The\n * callback has the following signature, where `user` will be set to the\n * authenticated user on a successful authentication attempt, or `false`\n * otherwise.  An optional `info` argument will be passed, containing additional\n * details provided by the strategy's verify callback - this could be information about\n * a successful authentication or a challenge message for a failed authentication.\n * An optional `status` argument will be passed when authentication fails - this could\n * be a HTTP response code for a remote authentication failure or similar.\n *\n *     app.get('/protected', function(req, res, next) {\n *       passport.authenticate('local', function(err, user, info, status) {\n *         if (err) { return next(err) }\n *         if (!user) { return res.redirect('/signin') }\n *         res.redirect('/account');\n *       })(req, res, next);\n *     });\n *\n * Note that if a callback is supplied, it becomes the application's\n * responsibility to log-in the user, establish a session, and otherwise perform\n * the desired operations.\n *\n * Examples:\n *\n *     passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' });\n *\n *     passport.authenticate('basic', { session: false });\n *\n *     passport.authenticate('twitter');\n *\n * @param {String|Array} name\n * @param {Object} options\n * @param {Function} callback\n * @return {Function}\n * @api public\n */\nmodule.exports = function authenticate(passport, name, options, callback) {\n  if (typeof options == 'function') {\n    callback = options;\n    options = {};\n  }\n  options = options || {};\n  \n  var multi = true;\n  \n  // Cast `name` to an array, allowing authentication to pass through a chain of\n  // strategies.  The first strategy to succeed, redirect, or error will halt\n  // the chain.  Authentication failures will proceed through each strategy in\n  // series, ultimately failing if all strategies fail.\n  //\n  // This is typically used on API endpoints to allow clients to authenticate\n  // using their preferred choice of Basic, Digest, token-based schemes, etc.\n  // It is not feasible to construct a chain of multiple strategies that involve\n  // redirection (for example both Facebook and Twitter), since the first one to\n  // redirect will halt the chain.\n  if (!Array.isArray(name)) {\n    name = [ name ];\n    multi = false;\n  }\n  \n  return function authenticate(req, res, next) {\n    if (http.IncomingMessage.prototype.logIn\n        && http.IncomingMessage.prototype.logIn !== IncomingMessageExt.logIn) {\n      __webpack_require__(/*! ../framework/connect */ \"./node_modules/passport/lib/framework/connect.js\").__monkeypatchNode();\n    }\n    \n    \n    // accumulator for failures from each strategy in the chain\n    var failures = [];\n    \n    function allFailed() {\n      if (callback) {\n        if (!multi) {\n          return callback(null, false, failures[0].challenge, failures[0].status);\n        } else {\n          var challenges = failures.map(function(f) { return f.challenge; });\n          var statuses = failures.map(function(f) { return f.status; });\n          return callback(null, false, challenges, statuses);\n        }\n      }\n      \n      // Strategies are ordered by priority.  For the purpose of flashing a\n      // message, the first failure will be displayed.\n      var failure = failures[0] || {}\n        , challenge = failure.challenge || {}\n        , msg;\n    \n      if (options.failureFlash) {\n        var flash = options.failureFlash;\n        if (typeof flash == 'string') {\n          flash = { type: 'error', message: flash };\n        }\n        flash.type = flash.type || 'error';\n      \n        var type = flash.type || challenge.type || 'error';\n        msg = flash.message || challenge.message || challenge;\n        if (typeof msg == 'string') {\n          req.flash(type, msg);\n        }\n      }\n      if (options.failureMessage) {\n        msg = options.failureMessage;\n        if (typeof msg == 'boolean') {\n          msg = challenge.message || challenge;\n        }\n        if (typeof msg == 'string') {\n          req.session.messages = req.session.messages || [];\n          req.session.messages.push(msg);\n        }\n      }\n      if (options.failureRedirect) {\n        return res.redirect(options.failureRedirect);\n      }\n    \n      // When failure handling is not delegated to the application, the default\n      // is to respond with 401 Unauthorized.  Note that the WWW-Authenticate\n      // header will be set according to the strategies in use (see\n      // actions#fail).  If multiple strategies failed, each of their challenges\n      // will be included in the response.\n      var rchallenge = []\n        , rstatus, status;\n      \n      for (var j = 0, len = failures.length; j < len; j++) {\n        failure = failures[j];\n        challenge = failure.challenge;\n        status = failure.status;\n          \n        rstatus = rstatus || status;\n        if (typeof challenge == 'string') {\n          rchallenge.push(challenge);\n        }\n      }\n    \n      res.statusCode = rstatus || 401;\n      if (res.statusCode == 401 && rchallenge.length) {\n        res.setHeader('WWW-Authenticate', rchallenge);\n      }\n      if (options.failWithError) {\n        return next(new AuthenticationError(http.STATUS_CODES[res.statusCode], rstatus));\n      }\n      res.end(http.STATUS_CODES[res.statusCode]);\n    }\n    \n    (function attempt(i) {\n      var layer = name[i];\n      // If no more strategies exist in the chain, authentication has failed.\n      if (!layer) { return allFailed(); }\n    \n      // Get the strategy, which will be used as prototype from which to create\n      // a new instance.  Action functions will then be bound to the strategy\n      // within the context of the HTTP request/response pair.\n      var prototype = passport._strategy(layer);\n      if (!prototype) { return next(new Error('Unknown authentication strategy \"' + layer + '\"')); }\n    \n      var strategy = Object.create(prototype);\n      \n      \n      // ----- BEGIN STRATEGY AUGMENTATION -----\n      // Augment the new strategy instance with action functions.  These action\n      // functions are bound via closure the the request/response pair.  The end\n      // goal of the strategy is to invoke *one* of these action methods, in\n      // order to indicate successful or failed authentication, redirect to a\n      // third-party identity provider, etc.\n      \n      /**\n       * Authenticate `user`, with optional `info`.\n       *\n       * Strategies should call this function to successfully authenticate a\n       * user.  `user` should be an object supplied by the application after it\n       * has been given an opportunity to verify credentials.  `info` is an\n       * optional argument containing additional user information.  This is\n       * useful for third-party authentication strategies to pass profile\n       * details.\n       *\n       * @param {Object} user\n       * @param {Object} info\n       * @api public\n       */\n      strategy.success = function(user, info) {\n        if (callback) {\n          return callback(null, user, info);\n        }\n      \n        info = info || {};\n        var msg;\n      \n        if (options.successFlash) {\n          var flash = options.successFlash;\n          if (typeof flash == 'string') {\n            flash = { type: 'success', message: flash };\n          }\n          flash.type = flash.type || 'success';\n        \n          var type = flash.type || info.type || 'success';\n          msg = flash.message || info.message || info;\n          if (typeof msg == 'string') {\n            req.flash(type, msg);\n          }\n        }\n        if (options.successMessage) {\n          msg = options.successMessage;\n          if (typeof msg == 'boolean') {\n            msg = info.message || info;\n          }\n          if (typeof msg == 'string') {\n            req.session.messages = req.session.messages || [];\n            req.session.messages.push(msg);\n          }\n        }\n        if (options.assignProperty) {\n          req[options.assignProperty] = user;\n          return next();\n        }\n      \n        req.logIn(user, options, function(err) {\n          if (err) { return next(err); }\n          \n          function complete() {\n            if (options.successReturnToOrRedirect) {\n              var url = options.successReturnToOrRedirect;\n              if (req.session && req.session.returnTo) {\n                url = req.session.returnTo;\n                delete req.session.returnTo;\n              }\n              return res.redirect(url);\n            }\n            if (options.successRedirect) {\n              return res.redirect(options.successRedirect);\n            }\n            next();\n          }\n          \n          if (options.authInfo !== false) {\n            passport.transformAuthInfo(info, req, function(err, tinfo) {\n              if (err) { return next(err); }\n              req.authInfo = tinfo;\n              complete();\n            });\n          } else {\n            complete();\n          }\n        });\n      };\n      \n      /**\n       * Fail authentication, with optional `challenge` and `status`, defaulting\n       * to 401.\n       *\n       * Strategies should call this function to fail an authentication attempt.\n       *\n       * @param {String} challenge\n       * @param {Number} status\n       * @api public\n       */\n      strategy.fail = function(challenge, status) {\n        if (typeof challenge == 'number') {\n          status = challenge;\n          challenge = undefined;\n        }\n        \n        // push this failure into the accumulator and attempt authentication\n        // using the next strategy\n        failures.push({ challenge: challenge, status: status });\n        attempt(i + 1);\n      };\n      \n      /**\n       * Redirect to `url` with optional `status`, defaulting to 302.\n       *\n       * Strategies should call this function to redirect the user (via their\n       * user agent) to a third-party website for authentication.\n       *\n       * @param {String} url\n       * @param {Number} status\n       * @api public\n       */\n      strategy.redirect = function(url, status) {\n        // NOTE: Do not use `res.redirect` from Express, because it can't decide\n        //       what it wants.\n        //\n        //       Express 2.x: res.redirect(url, status)\n        //       Express 3.x: res.redirect(status, url) -OR- res.redirect(url, status)\n        //         - as of 3.14.0, deprecated warnings are issued if res.redirect(url, status)\n        //           is used\n        //       Express 4.x: res.redirect(status, url)\n        //         - all versions (as of 4.8.7) continue to accept res.redirect(url, status)\n        //           but issue deprecated versions\n        \n        res.statusCode = status || 302;\n        res.setHeader('Location', url);\n        res.setHeader('Content-Length', '0');\n        res.end();\n      };\n      \n      /**\n       * Pass without making a success or fail decision.\n       *\n       * Under most circumstances, Strategies should not need to call this\n       * function.  It exists primarily to allow previous authentication state\n       * to be restored, for example from an HTTP session.\n       *\n       * @api public\n       */\n      strategy.pass = function() {\n        next();\n      };\n      \n      /**\n       * Internal error while performing authentication.\n       *\n       * Strategies should call this function when an internal error occurs\n       * during the process of performing authentication; for example, if the\n       * user directory is not available.\n       *\n       * @param {Error} err\n       * @api public\n       */\n      strategy.error = function(err) {\n        if (callback) {\n          return callback(err);\n        }\n        \n        next(err);\n      };\n      \n      // ----- END STRATEGY AUGMENTATION -----\n    \n      strategy.authenticate(req, options);\n    })(0); // attempt\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/middleware/authenticate.js?");

/***/ }),

/***/ "./node_modules/passport/lib/middleware/initialize.js":
/*!************************************************************!*\
  !*** ./node_modules/passport/lib/middleware/initialize.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("/**\n * Passport initialization.\n *\n * Intializes Passport for incoming requests, allowing authentication strategies\n * to be applied.\n *\n * If sessions are being utilized, applications must set up Passport with\n * functions to serialize a user into and out of a session.  For example, a\n * common pattern is to serialize just the user ID into the session (due to the\n * fact that it is desirable to store the minimum amount of data in a session).\n * When a subsequent request arrives for the session, the full User object can\n * be loaded from the database by ID.\n *\n * Note that additional middleware is required to persist login state, so we\n * must use the `connect.session()` middleware _before_ `passport.initialize()`.\n *\n * If sessions are being used, this middleware must be in use by the\n * Connect/Express application for Passport to operate.  If the application is\n * entirely stateless (not using sessions), this middleware is not necessary,\n * but its use will not have any adverse impact.\n *\n * Examples:\n *\n *     app.use(connect.cookieParser());\n *     app.use(connect.session({ secret: 'keyboard cat' }));\n *     app.use(passport.initialize());\n *     app.use(passport.session());\n *\n *     passport.serializeUser(function(user, done) {\n *       done(null, user.id);\n *     });\n *\n *     passport.deserializeUser(function(id, done) {\n *       User.findById(id, function (err, user) {\n *         done(err, user);\n *       });\n *     });\n *\n * @return {Function}\n * @api public\n */\nmodule.exports = function initialize(passport) {\n  \n  return function initialize(req, res, next) {\n    req._passport = {};\n    req._passport.instance = passport;\n\n    if (req.session && req.session[passport._key]) {\n      // load data from existing session\n      req._passport.session = req.session[passport._key];\n    }\n\n    next();\n  };\n};\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/middleware/initialize.js?");

/***/ }),

/***/ "./node_modules/passport/lib/sessionmanager.js":
/*!*****************************************************!*\
  !*** ./node_modules/passport/lib/sessionmanager.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("function SessionManager(options, serializeUser) {\n  if (typeof options == 'function') {\n    serializeUser = options;\n    options = undefined;\n  }\n  options = options || {};\n  \n  this._key = options.key || 'passport';\n  this._serializeUser = serializeUser;\n}\n\nSessionManager.prototype.logIn = function(req, user, cb) {\n  var self = this;\n  this._serializeUser(user, req, function(err, obj) {\n    if (err) {\n      return cb(err);\n    }\n    if (!req._passport.session) {\n      req._passport.session = {};\n    }\n    req._passport.session.user = obj;\n    if (!req.session) {\n      req.session = {};\n    }\n    req.session[self._key] = req._passport.session;\n    cb();\n  });\n}\n\nSessionManager.prototype.logOut = function(req, cb) {\n  if (req._passport && req._passport.session) {\n    delete req._passport.session.user;\n  }\n  cb && cb();\n}\n\n\nmodule.exports = SessionManager;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/sessionmanager.js?");

/***/ }),

/***/ "./node_modules/passport/lib/strategies/session.js":
/*!*********************************************************!*\
  !*** ./node_modules/passport/lib/strategies/session.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/**\n * Module dependencies.\n */\nvar pause = __webpack_require__(/*! pause */ \"./node_modules/pause/index.js\")\n  , util = __webpack_require__(/*! util */ \"util\")\n  , Strategy = __webpack_require__(/*! passport-strategy */ \"./node_modules/passport-strategy/lib/index.js\");\n\n\n/**\n * `SessionStrategy` constructor.\n *\n * @api public\n */\nfunction SessionStrategy(options, deserializeUser) {\n  if (typeof options == 'function') {\n    deserializeUser = options;\n    options = undefined;\n  }\n  options = options || {};\n  \n  Strategy.call(this);\n  this.name = 'session';\n  this._deserializeUser = deserializeUser;\n}\n\n/**\n * Inherit from `Strategy`.\n */\nutil.inherits(SessionStrategy, Strategy);\n\n/**\n * Authenticate request based on the current session state.\n *\n * The session authentication strategy uses the session to restore any login\n * state across requests.  If a login session has been established, `req.user`\n * will be populated with the current user.\n *\n * This strategy is registered automatically by Passport.\n *\n * @param {Object} req\n * @param {Object} options\n * @api protected\n */\nSessionStrategy.prototype.authenticate = function(req, options) {\n  if (!req._passport) { return this.error(new Error('passport.initialize() middleware not in use')); }\n  options = options || {};\n\n  var self = this, \n      su;\n  if (req._passport.session) {\n    su = req._passport.session.user;\n  }\n\n  if (su || su === 0) {\n    // NOTE: Stream pausing is desirable in the case where later middleware is\n    //       listening for events emitted from request.  For discussion on the\n    //       matter, refer to: https://github.com/jaredhanson/passport/pull/106\n    \n    var paused = options.pauseStream ? pause(req) : null;\n    this._deserializeUser(su, req, function(err, user) {\n      if (err) { return self.error(err); }\n      if (!user) {\n        delete req._passport.session.user;\n      } else {\n        // TODO: Remove instance access\n        var property = req._passport.instance._userProperty || 'user';\n        req[property] = user;\n      }\n      self.pass();\n      if (paused) {\n        paused.resume();\n      }\n    });\n  } else {\n    self.pass();\n  }\n};\n\n\n/**\n * Expose `SessionStrategy`.\n */\nmodule.exports = SessionStrategy;\n\n\n//# sourceURL=webpack:///./node_modules/passport/lib/strategies/session.js?");

/***/ }),

/***/ "./node_modules/pause/index.js":
/*!*************************************!*\
  !*** ./node_modules/pause/index.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("\nmodule.exports = function(obj){\n  var onData\n    , onEnd\n    , events = [];\n\n  // buffer data\n  obj.on('data', onData = function(data, encoding){\n    events.push(['data', data, encoding]);\n  });\n\n  // buffer end\n  obj.on('end', onEnd = function(data, encoding){\n    events.push(['end', data, encoding]);\n  });\n\n  return {\n    end: function(){\n      obj.removeListener('data', onData);\n      obj.removeListener('end', onEnd);\n    },\n    resume: function(){\n      this.end();\n      for (var i = 0, len = events.length; i < len; ++i) {\n        obj.emit.apply(obj, events[i]);\n      }\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/pause/index.js?");

/***/ }),

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  MONGO_URL: 'mongodb://localhost/blogate-dev',\n  JWT_SECRET: 'thisismysecretecode'\n};\n\nconst testConfig = {\n  MONGO_URL: 'mongodb://localhost/blogate-test'\n};\n\nconst prodConfig = {\n  MONGO_URL: 'mongodb://localhost/blogate-prod'\n};\n\nconst defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n    case 'test':\n      return testConfig;\n    default:\n      return prodConfig;\n  }\n}\n\nexports.default = Object.assign({}, defaultConfig, envConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

/***/ }),

/***/ "./src/config/database.js":
/*!********************************!*\
  !*** ./src/config/database.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n/* eslint-disable no-console*/\n_mongoose2.default.Promise = global.Promise;\n\ntry {\n  _mongoose2.default.connect(_constants2.default.MONGO_URL);\n} catch (e) {\n  _mongoose2.default.createConnection(_constants2.default.MONGO_URL);\n}\n\n_mongoose2.default.connection.once('open', () => console.log('MongoDB running!')).on('error', err => {\n  throw err;\n});\n\n//# sourceURL=webpack:///./src/config/database.js?");

/***/ }),

/***/ "./src/config/middlewares.js":
/*!***********************************!*\
  !*** ./src/config/middlewares.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"./node_modules/passport/lib/index.js\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isDev = \"development\" === 'development';\nconst isProd = \"development\" === 'production';\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_passport2.default.initialize());\n  if (isDev) {\n    app.use((0, _morgan2.default)('dev'));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _constants = __webpack_require__(/*! ./config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\n__webpack_require__(/*! ./config/database */ \"./src/config/database.js\");\n\nvar _middlewares = __webpack_require__(/*! ./config/middlewares */ \"./src/config/middlewares.js\");\n\nvar _middlewares2 = _interopRequireDefault(_middlewares);\n\nvar _modules = __webpack_require__(/*! ./modules */ \"./src/modules/index.js\");\n\nvar _modules2 = _interopRequireDefault(_modules);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst app = (0, _express2.default)(); /* eslint-disable no-console*/\n\n(0, _middlewares2.default)(app);\n\napp.get('/', (req, res) => {\n  res.send('Hello world!');\n});\n\n(0, _modules2.default)(app);\n\nconst PORT = _constants2.default.PORT;\napp.listen(PORT, err => {\n  if (err) {\n    throw err;\n  } else {\n    console.log(`\n      Server running on port ${PORT}\n      ------------------------\n      Running on ${\"development\"}\n      ------------------------\n      Welcome to Blogate Server :)\n    `);\n  }\n});\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = app => {\n  app.use('/api/v1/users', _user2.default);\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/users/user.controllers.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.controllers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.login = login;\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n  try {\n    const user = await _user2.default.create(req.body);\n    return res.status(201).json(user);\n  } catch (err) {\n    return res.status(500).json(err);\n  }\n}\n\nfunction login(req, res, next) {\n  res.status(200).json(req.user.toJSON());\n  return next();\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controllers.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"./node_modules/jsonwebtoken/index.js\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _user = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst UserSchema = new _mongoose.Schema({\n  email: {\n    type: String,\n    unique: true,\n    required: [true, 'Email is required!'],\n    trim: true,\n    validate: {\n      validator(email) {\n        return _validator2.default.isEmail(email);\n      },\n      message: '{VALUE} is not a valid email!'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First name is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'Last name is required!'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'User name is required!'],\n    unique: true,\n    trim: true\n  },\n  password: {\n    type: String,\n    required: [true, 'Password is required!'],\n    trim: true,\n    minLength: [6, 'Password needs to be longer!'],\n    validate: {\n      validator(password) {\n        _user.passwordReg.test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  }\n});\n\nUserSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n  }\n  return next();\n});\n\nUserSchema.methods = {\n  _hashPassword(password) {\n    return (0, _bcryptNodejs.hashSync)(password);\n  },\n  authenticateUser(password) {\n    return (0, _bcryptNodejs.compareSync)(password, this.password);\n  },\n  createToken() {\n    return _jsonwebtoken2.default.sign({ _id: this._id }, _constants2.default.JWT_SECRET);\n  },\n  toJSON() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      token: `JWT ${this.createToken()}`\n    };\n  }\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nvar _user = __webpack_require__(/*! ./user.controllers */ \"./src/modules/users/user.controllers.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\n\nroutes.post('/signup', (0, _expressValidation2.default)(_user3.default.signup), userController.signUp);\nroutes.post('/login', _auth.authLocal, userController.login);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validations.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.validations.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n\nexports.default = {\n  signup: {\n    email: _joi2.default.string().email().required(),\n    password: _joi2.default.string().regex(passwordReg).required(),\n    firstName: _joi2.default.string().required(),\n    lastName: _joi2.default.string().required(),\n    userName: _joi2.default.string().required()\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/users/user.validations.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"./node_modules/passport/lib/index.js\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"./node_modules/passport-local/lib/index.js\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _user = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst localOpts = {\n  usernameField: 'email'\n};\n\nconst localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _user2.default.findOne({ email });\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n    return done(null, user);\n  } catch (err) {\n    return done(err, false);\n  }\n});\n\n_passport2.default.use(localStrategy);\nconst authLocal = exports.authLocal = _passport2.default.authenticate('local', { session: false });\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "bcrypt-nodejs":
/*!********************************!*\
  !*** external "bcrypt-nodejs" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt-nodejs\");\n\n//# sourceURL=webpack:///external_%22bcrypt-nodejs%22?");

/***/ }),

/***/ "body-parser":
/*!******************************!*\
  !*** external "body-parser" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"body-parser\");\n\n//# sourceURL=webpack:///external_%22body-parser%22?");

/***/ }),

/***/ "buffer":
/*!*************************!*\
  !*** external "buffer" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"buffer\");\n\n//# sourceURL=webpack:///external_%22buffer%22?");

/***/ }),

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "crypto":
/*!*************************!*\
  !*** external "crypto" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"crypto\");\n\n//# sourceURL=webpack:///external_%22crypto%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-validation":
/*!*************************************!*\
  !*** external "express-validation" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-validation\");\n\n//# sourceURL=webpack:///external_%22express-validation%22?");

/***/ }),

/***/ "helmet":
/*!*************************!*\
  !*** external "helmet" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"helmet\");\n\n//# sourceURL=webpack:///external_%22helmet%22?");

/***/ }),

/***/ "http":
/*!***********************!*\
  !*** external "http" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http\");\n\n//# sourceURL=webpack:///external_%22http%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "ms":
/*!*********************!*\
  !*** external "ms" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"ms\");\n\n//# sourceURL=webpack:///external_%22ms%22?");

/***/ }),

/***/ "safe-buffer":
/*!******************************!*\
  !*** external "safe-buffer" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"safe-buffer\");\n\n//# sourceURL=webpack:///external_%22safe-buffer%22?");

/***/ }),

/***/ "stream":
/*!*************************!*\
  !*** external "stream" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"stream\");\n\n//# sourceURL=webpack:///external_%22stream%22?");

/***/ }),

/***/ "util":
/*!***********************!*\
  !*** external "util" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"util\");\n\n//# sourceURL=webpack:///external_%22util%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ }),

/***/ "xtend":
/*!************************!*\
  !*** external "xtend" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"xtend\");\n\n//# sourceURL=webpack:///external_%22xtend%22?");

/***/ })

/******/ });
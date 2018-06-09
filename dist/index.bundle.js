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

/***/ "./src/config/constants.js":
/*!*********************************!*\
  !*** ./src/config/constants.js ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nconst devConfig = {\n  MONGO_URL: 'mongodb://localhost/blogate-dev',\n  JWT_SECRET: 'thisismysecretecode',\n  TWITTER_CONSUMER_KEY: 'EGLoBrQWNNtCDLYQKh6pupRO1',\n  TWITTER_CONSUMER_SECRET: '9FNzG4LlhCOhnNOf9VGS2SHQXAILjiLXTWfOrr9MT7W6nV05ww',\n  TWITTER_CALLBACK_URL: 'http://127.0.0.1:3000/api/v1/users/auth/twitter/callback'\n};\n\nconst testConfig = {\n  MONGO_URL: 'mongodb://localhost/blogate-test'\n};\n\nconst prodConfig = {\n  MONGO_URL: 'mongodb://localhost/blogate-prod'\n};\n\nconst defaultConfig = {\n  PORT: process.env.PORT || 3000\n};\n\nfunction envConfig(env) {\n  switch (env) {\n    case 'development':\n      return devConfig;\n    case 'test':\n      return testConfig;\n    default:\n      return prodConfig;\n  }\n}\n\nexports.default = Object.assign({}, defaultConfig, envConfig(\"development\"));\n\n//# sourceURL=webpack:///./src/config/constants.js?");

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
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _morgan = __webpack_require__(/*! morgan */ \"morgan\");\n\nvar _morgan2 = _interopRequireDefault(_morgan);\n\nvar _bodyParser = __webpack_require__(/*! body-parser */ \"body-parser\");\n\nvar _bodyParser2 = _interopRequireDefault(_bodyParser);\n\nvar _compression = __webpack_require__(/*! compression */ \"compression\");\n\nvar _compression2 = _interopRequireDefault(_compression);\n\nvar _helmet = __webpack_require__(/*! helmet */ \"helmet\");\n\nvar _helmet2 = _interopRequireDefault(_helmet);\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _expressSession = __webpack_require__(/*! express-session */ \"express-session\");\n\nvar _expressSession2 = _interopRequireDefault(_expressSession);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst isDev = \"development\" === 'development';\nconst isProd = \"development\" === 'production';\n\nexports.default = app => {\n  if (isProd) {\n    app.use((0, _compression2.default)());\n    app.use((0, _helmet2.default)());\n  }\n  app.use(_bodyParser2.default.json());\n  app.use(_bodyParser2.default.urlencoded({ extended: true }));\n  app.use(_passport2.default.initialize());\n  app.use((0, _expressSession2.default)({\n    secret: process.env.SESSION_SECRET || '<mysecret>',\n    resave: true,\n    saveUninitialized: true\n  }));\n  if (isDev) {\n    app.use((0, _morgan2.default)('dev'));\n  }\n};\n\n//# sourceURL=webpack:///./src/config/middlewares.js?");

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

/***/ "./src/modules/articles/article.controllers.js":
/*!*****************************************************!*\
  !*** ./src/modules/articles/article.controllers.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createArticle = createArticle;\nexports.getArticleById = getArticleById;\nexports.getArticlesList = getArticlesList;\nexports.updateArticle = updateArticle;\nexports.deleteArticle = deleteArticle;\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _article = __webpack_require__(/*! ./article.model */ \"./src/modules/articles/article.model.js\");\n\nvar _article2 = _interopRequireDefault(_article);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// import User from '../users/user.model';\nasync function createArticle(req, res) {\n  try {\n    const article = await _article2.default.createArticle(req.body, req.user._id);\n    return res.status(_httpStatus2.default.CREATED).json(article);\n  } catch (e) {\n    return res.status(400).json(e);\n  }\n}\n\nasync function getArticleById(req, res) {\n  try {\n    const article = await _article2.default.findById(req.params.id).populate('user');\n    return res.status(_httpStatus2.default.OK).json(article);\n  } catch (e) {\n    return res.status(400).json(e);\n  }\n}\n\nasync function getArticlesList(req, res) {\n  const skip = parseInt(req.query.skip, 0);\n  const limit = parseInt(req.query.limit, 0);\n  try {\n    const articles = await _article2.default.articlesList({ skip, limit });\n    return res.status(_httpStatus2.default.OK).json(articles).populate('user');\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function updateArticle(req, res) {\n  try {\n    const article = await _article2.default.findById(req.params.id);\n    if (!article.user.equals(req.user._id)) {\n      return res.status(_httpStatus2.default.UNAUTHORIZED);\n    }\n    Object.keys(req.body).forEach(key => {\n      article[key] = req.body[key];\n    });\n    return res.status(_httpStatus2.default.OK).json((await article.save()));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nasync function deleteArticle(req, res) {\n  try {\n    const article = await _article2.default.findById(req.params.id);\n    if (!article.user.equals(req.user._id)) {\n      return res.sendStatus(_httpStatus2.default.UNAUTHORIZED);\n    }\n    await article.remove();\n    return res.sendStatus(_httpStatus2.default.OK);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/articles/article.controllers.js?");

/***/ }),

/***/ "./src/modules/articles/article.model.js":
/*!***********************************************!*\
  !*** ./src/modules/articles/article.model.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _slug = __webpack_require__(/*! slug */ \"slug\");\n\nvar _slug2 = _interopRequireDefault(_slug);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst ArticleSchema = new _mongoose.Schema({\n  title: {\n    type: String,\n    trim: true,\n    required: [true, 'Title is required!'],\n    minlength: [5, 'Title need to be longer!'],\n    unique: true\n  },\n  text: {\n    type: String,\n    trim: true,\n    required: [true, 'Text is required!'],\n    minlength: [15, 'Text need to be longer!']\n  },\n  slug: {\n    type: String,\n    trim: true,\n    lowercase: true\n  },\n  user: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'User'\n  }\n}, { timestamps: true });\n\nArticleSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: '{VALUE} already taken!'\n});\n\nArticleSchema.pre('validate', function (next) {\n  this._slugify();\n\n  next();\n});\n\nArticleSchema.methods = {\n  _slugify() {\n    this.slug = (0, _slug2.default)(this.title);\n  },\n  toJSON() {\n    return {\n      _id: this._id,\n      title: this.title,\n      text: this.text,\n      slug: this.slug,\n      user: this.user\n    };\n  }\n};\n\nArticleSchema.statics = {\n  createArticle(args, user) {\n    return this.create(Object.assign({}, args, {\n      user\n    }));\n  },\n  articlesList({ skip = 0, limit = 5 } = {}) {\n    return this.find().sort().skip(skip).limit(limit).populate('user');\n  }\n};\n\nexports.default = _mongoose2.default.model('Article', ArticleSchema);\n\n//# sourceURL=webpack:///./src/modules/articles/article.model.js?");

/***/ }),

/***/ "./src/modules/articles/article.routes.js":
/*!************************************************!*\
  !*** ./src/modules/articles/article.routes.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _jwt = __webpack_require__(/*! ../../services/jwt.services */ \"./src/services/jwt.services.js\");\n\nvar _article = __webpack_require__(/*! ./article.validations */ \"./src/modules/articles/article.validations.js\");\n\nvar _article2 = _interopRequireDefault(_article);\n\nvar _article3 = __webpack_require__(/*! ./article.controllers */ \"./src/modules/articles/article.controllers.js\");\n\nvar articleController = _interopRequireWildcard(_article3);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\n\nroutes.post('/', _jwt.authJwt, (0, _expressValidation2.default)(_article2.default.createArticle), articleController.createArticle);\nroutes.get('/:id', _jwt.authJwt, articleController.getArticleById);\nroutes.get('/', _jwt.authJwt, articleController.getArticlesList);\nroutes.patch('/:id', _jwt.authJwt, (0, _expressValidation2.default)(_article2.default.updateArticle), articleController.updateArticle);\nroutes.delete('/:id', _jwt.authJwt, articleController.deleteArticle);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/articles/article.routes.js?");

/***/ }),

/***/ "./src/modules/articles/article.validations.js":
/*!*****************************************************!*\
  !*** ./src/modules/articles/article.validations.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = {\n  createArticle: {\n    body: {\n      title: _joi2.default.string().required().min(5).max(50),\n      text: _joi2.default.string().required().min(15)\n    }\n  },\n  updateArticle: {\n    body: {\n      title: _joi2.default.string().min(5).max(50),\n      text: _joi2.default.string().min(15)\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/articles/article.validations.js?");

/***/ }),

/***/ "./src/modules/events/event.controllers.js":
/*!*************************************************!*\
  !*** ./src/modules/events/event.controllers.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.createEvent = createEvent;\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _event = __webpack_require__(/*! ./event.model */ \"./src/modules/events/event.model.js\");\n\nvar _event2 = _interopRequireDefault(_event);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function createEvent(req, res) {\n  try {\n    const article = await _event2.default.createEvent(req.body, req.params._id);\n    return res.status(_httpStatus2.default.CREATED).json(article);\n  } catch (e) {\n    return res.status(400).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/events/event.controllers.js?");

/***/ }),

/***/ "./src/modules/events/event.model.js":
/*!*******************************************!*\
  !*** ./src/modules/events/event.model.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst EventSchema = new _mongoose.Schema({\n  title: {\n    type: String,\n    required: [true, 'Event title is required!'],\n    trim: true,\n    minlength: [5, 'Event title need to be longer!'],\n    maxlength: [50, 'Event title need to be shorter!']\n  },\n  description: {\n    type: String,\n    trim: true,\n    minlength: [10, 'Event description need to be longer!'],\n    maxlength: [200, 'Event description need to be shorter!']\n  },\n  startDate: {\n    type: Date,\n    required: [true, 'Begin date is required!'],\n    trim: true\n  },\n  endDate: {\n    type: Date,\n    trim: true\n  },\n  user: {\n    type: _mongoose.Schema.Types.ObjectId,\n    ref: 'User'\n  }\n}, { timestamps: true });\n\nEventSchema.pre('save', function (next) {\n  if (!this.endDate) {\n    this.endDate = this.startDate;\n  }\n  next();\n});\n\nEventSchema.methods = {\n  toJson() {\n    return {\n      _id: this._id,\n      title: this.title,\n      description: this.description,\n      startDate: this.startDate,\n      endDate: this.endDate,\n      user: this.user\n    };\n  }\n};\n\nEventSchema.statics = {\n  createEvent(args, user) {\n    return this.create(Object.assign({}, args, {\n      user\n    }));\n  }\n};\n\nexports.default = _mongoose2.default.model('Event', EventSchema);\n\n//# sourceURL=webpack:///./src/modules/events/event.model.js?");

/***/ }),

/***/ "./src/modules/events/event.routes.js":
/*!********************************************!*\
  !*** ./src/modules/events/event.routes.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _event = __webpack_require__(/*! ./event.controllers */ \"./src/modules/events/event.controllers.js\");\n\nvar eventController = _interopRequireWildcard(_event);\n\nvar _event2 = __webpack_require__(/*! ./event.validations */ \"./src/modules/events/event.validations.js\");\n\nvar _event3 = _interopRequireDefault(_event2);\n\nvar _jwt = __webpack_require__(/*! ../../services/jwt.services */ \"./src/services/jwt.services.js\");\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\n\nroutes.post('/', _jwt.authJwt, (0, _expressValidation2.default)(_event3.default.createEvent), eventController.createEvent);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/events/event.routes.js?");

/***/ }),

/***/ "./src/modules/events/event.validations.js":
/*!*************************************************!*\
  !*** ./src/modules/events/event.validations.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nvar _joiDateExtensions = __webpack_require__(/*! joi-date-extensions */ \"joi-date-extensions\");\n\nvar _joiDateExtensions2 = _interopRequireDefault(_joiDateExtensions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst Joi = _joi2.default.extend(_joiDateExtensions2.default);\n\nexports.default = {\n  createEvent: {\n    body: {\n      title: _joi2.default.string().min(5).max(50).required(),\n      description: _joi2.default.string().min(10).max(200),\n      startDate: Joi.date().format('YYYY-MM-DD'),\n      endDate: Joi.date().format('YYYY-MM-DD')\n    }\n  },\n  updateEvent: {\n    body: {\n      title: _joi2.default.string().min(5).max(50),\n      description: _joi2.default.string().min(10).max(200),\n      startDate: Joi.date().format('YYYY-MM-DD'),\n      endDate: Joi.date().format('YYYY-MM-DD')\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/events/event.validations.js?");

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _user = __webpack_require__(/*! ./users/user.routes */ \"./src/modules/users/user.routes.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _article = __webpack_require__(/*! ./articles/article.routes */ \"./src/modules/articles/article.routes.js\");\n\nvar _article2 = _interopRequireDefault(_article);\n\nvar _event = __webpack_require__(/*! ./events/event.routes */ \"./src/modules/events/event.routes.js\");\n\nvar _event2 = _interopRequireDefault(_event);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.default = app => {\n  app.use('/api/v1/users', _user2.default);\n  app.use('/api/v1/articles', _article2.default);\n  app.use('/api/v1/events', _event2.default);\n};\n\n//# sourceURL=webpack:///./src/modules/index.js?");

/***/ }),

/***/ "./src/modules/users/user.controllers.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.controllers.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.signUp = signUp;\nexports.twitterSignup = twitterSignup;\nexports.login = login;\nexports.update = update;\n\nvar _httpStatus = __webpack_require__(/*! http-status */ \"http-status\");\n\nvar _httpStatus2 = _interopRequireDefault(_httpStatus);\n\nvar _user = __webpack_require__(/*! ./user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nasync function signUp(req, res) {\n  try {\n    const user = await _user2.default.create(req.body);\n    return res.status(_httpStatus2.default.CREATED).json(user);\n  } catch (err) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(err);\n  }\n}\n\nfunction upsertUser(profile, res) {\n  return _user2.default.findOne({ twitterId: profile.id }, (err, user) => {\n    if (!user) {\n      const fullName = profile.displayName.split(' ');\n      const newUser = new _user2.default({\n        firstName: fullName[0],\n        lastName: fullName[1],\n        userName: profile.username,\n        twitterId: profile.id\n      });\n      newUser.save((error, savedUser) => {\n        if (error) {\n          return res.status(_httpStatus2.default.BAD_REQUEST);\n        }\n        return res.status(_httpStatus2.default.CREATED).json(savedUser.toJsonAuth());\n      });\n    } else {\n      return res.status(_httpStatus2.default.OK).json(user.toJsonAuth());\n    }\n  });\n}\n\nasync function twitterSignup(req, res) {\n  try {\n    upsertUser(req.user, res);\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\nfunction login(req, res, next) {\n  res.status(_httpStatus2.default.OK).json(req.user.toJsonAuth());\n  return next();\n}\n\nasync function update(req, res) {\n  try {\n    const user = await _user2.default.findById(req.user._id);\n    Object.keys(req.body).forEach(key => {\n      user[key] = req.body[key];\n    });\n    return res.status(_httpStatus2.default.OK).json((await user.save()));\n  } catch (e) {\n    return res.status(_httpStatus2.default.BAD_REQUEST).json(e);\n  }\n}\n\n//# sourceURL=webpack:///./src/modules/users/user.controllers.js?");

/***/ }),

/***/ "./src/modules/users/user.model.js":
/*!*****************************************!*\
  !*** ./src/modules/users/user.model.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _mongoose = __webpack_require__(/*! mongoose */ \"mongoose\");\n\nvar _mongoose2 = _interopRequireDefault(_mongoose);\n\nvar _validator = __webpack_require__(/*! validator */ \"validator\");\n\nvar _validator2 = _interopRequireDefault(_validator);\n\nvar _bcryptNodejs = __webpack_require__(/*! bcrypt-nodejs */ \"bcrypt-nodejs\");\n\nvar _jsonwebtoken = __webpack_require__(/*! jsonwebtoken */ \"jsonwebtoken\");\n\nvar _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);\n\nvar _mongooseUniqueValidator = __webpack_require__(/*! mongoose-unique-validator */ \"mongoose-unique-validator\");\n\nvar _mongooseUniqueValidator2 = _interopRequireDefault(_mongooseUniqueValidator);\n\nvar _user = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _constants = __webpack_require__(/*! ../../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst UserSchema = new _mongoose.Schema({\n  email: {\n    type: String,\n    unique: true,\n    trim: true,\n    validate: {\n      validator(email) {\n        return _validator2.default.isEmail(email);\n      },\n      message: '{VALUE} is not a valid email!'\n    }\n  },\n  firstName: {\n    type: String,\n    required: [true, 'First name is required!'],\n    trim: true\n  },\n  lastName: {\n    type: String,\n    required: [true, 'Last name is required!'],\n    trim: true\n  },\n  userName: {\n    type: String,\n    required: [true, 'User name is required!'],\n    unique: true,\n    trim: true\n  },\n  password: {\n    type: String,\n    trim: true,\n    minLength: [6, 'Password needs to be longer!'],\n    validate: {\n      validator(password) {\n        _user.passwordReg.test(password);\n      },\n      message: '{VALUE} is not a valid password!'\n    }\n  },\n  twitterId: {\n    type: String,\n    trim: true,\n    unique: true\n  }\n}, {\n  timestamps: true\n});\n\nUserSchema.plugin(_mongooseUniqueValidator2.default, {\n  message: '{VALUE} already taken!'\n});\n\nUserSchema.pre('save', function (next) {\n  if (this.isModified('password')) {\n    this.password = this._hashPassword(this.password);\n  }\n  return next();\n});\n\nUserSchema.methods = {\n  _hashPassword(password) {\n    return (0, _bcryptNodejs.hashSync)(password);\n  },\n  authenticateUser(password) {\n    return (0, _bcryptNodejs.compareSync)(password, this.password);\n  },\n  createToken() {\n    return _jsonwebtoken2.default.sign({ _id: this._id }, _constants2.default.JWT_SECRET);\n  },\n  toJSON() {\n    return {\n      userName: this.userName,\n      firstName: this.firstName,\n      lastName: this.lastName\n    };\n  },\n  toJsonAuth() {\n    return {\n      _id: this._id,\n      userName: this.userName,\n      token: `JWT ${this.createToken()}`\n    };\n  }\n};\n\nexports.default = _mongoose2.default.model('User', UserSchema);\n\n//# sourceURL=webpack:///./src/modules/users/user.model.js?");

/***/ }),

/***/ "./src/modules/users/user.routes.js":
/*!******************************************!*\
  !*** ./src/modules/users/user.routes.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _expressValidation = __webpack_require__(/*! express-validation */ \"express-validation\");\n\nvar _expressValidation2 = _interopRequireDefault(_expressValidation);\n\nvar _auth = __webpack_require__(/*! ../../services/auth.services */ \"./src/services/auth.services.js\");\n\nvar _jwt = __webpack_require__(/*! ../../services/jwt.services */ \"./src/services/jwt.services.js\");\n\nvar _twitter = __webpack_require__(/*! ../../services/twitter.services */ \"./src/services/twitter.services.js\");\n\nvar _user = __webpack_require__(/*! ./user.controllers */ \"./src/modules/users/user.controllers.js\");\n\nvar userController = _interopRequireWildcard(_user);\n\nvar _user2 = __webpack_require__(/*! ./user.validations */ \"./src/modules/users/user.validations.js\");\n\nvar _user3 = _interopRequireDefault(_user2);\n\nfunction _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst routes = new _express.Router();\n\nroutes.post('/signup', (0, _expressValidation2.default)(_user3.default.signup), userController.signUp);\nroutes.post('/login', _auth.authLocal, userController.login);\nroutes.get('/login/twitter', _twitter.authTwitter);\nroutes.get('/auth/twitter/callback', _twitter.authTwitterCallback, userController.twitterSignup);\nroutes.patch('/update', _jwt.authJwt, userController.update);\n\nexports.default = routes;\n\n//# sourceURL=webpack:///./src/modules/users/user.routes.js?");

/***/ }),

/***/ "./src/modules/users/user.validations.js":
/*!***********************************************!*\
  !*** ./src/modules/users/user.validations.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.passwordReg = undefined;\n\nvar _joi = __webpack_require__(/*! joi */ \"joi\");\n\nvar _joi2 = _interopRequireDefault(_joi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst passwordReg = exports.passwordReg = /(?=.*\\d)(?=.*[a-z])(?=.*[A-Z]).{6,}/;\n\nexports.default = {\n  signup: {\n    body: {\n      email: _joi2.default.string().email().required(),\n      password: _joi2.default.string().regex(passwordReg).required(),\n      firstName: _joi2.default.string().required(),\n      lastName: _joi2.default.string().required(),\n      userName: _joi2.default.string().required()\n    }\n  }\n};\n\n//# sourceURL=webpack:///./src/modules/users/user.validations.js?");

/***/ }),

/***/ "./src/services/auth.services.js":
/*!***************************************!*\
  !*** ./src/services/auth.services.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authLocal = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportLocal = __webpack_require__(/*! passport-local */ \"passport-local\");\n\nvar _passportLocal2 = _interopRequireDefault(_passportLocal);\n\nvar _user = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst localOpts = {\n  usernameField: 'email'\n};\n\nconst localStrategy = new _passportLocal2.default(localOpts, async (email, password, done) => {\n  try {\n    const user = await _user2.default.findOne({ email });\n    if (!user) {\n      return done(null, false);\n    } else if (!user.authenticateUser(password)) {\n      return done(null, false);\n    }\n    return done(null, user);\n  } catch (err) {\n    return done(err, false);\n  }\n});\n\n_passport2.default.use(localStrategy);\nconst authLocal = exports.authLocal = _passport2.default.authenticate('local', { session: false });\n\n//# sourceURL=webpack:///./src/services/auth.services.js?");

/***/ }),

/***/ "./src/services/jwt.services.js":
/*!**************************************!*\
  !*** ./src/services/jwt.services.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authJwt = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportJwt = __webpack_require__(/*! passport-jwt */ \"passport-jwt\");\n\nvar _user = __webpack_require__(/*! ../modules/users/user.model */ \"./src/modules/users/user.model.js\");\n\nvar _user2 = _interopRequireDefault(_user);\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst jwtOpts = {\n  jwtFromRequest: _passportJwt.ExtractJwt.fromAuthHeaderWithScheme('jwt'),\n  secretOrKey: _constants2.default.JWT_SECRET\n};\n\nconst jwtStrategy = new _passportJwt.Strategy(jwtOpts, async (payload, done) => {\n  try {\n    const user = await _user2.default.findById(payload._id);\n    if (!user) {\n      return done(null, false);\n    }\n    return done(null, user);\n  } catch (err) {\n    return done(err, false);\n  }\n});\n\n_passport2.default.use(jwtStrategy);\nconst authJwt = exports.authJwt = _passport2.default.authenticate('jwt', { session: false });\n\n//# sourceURL=webpack:///./src/services/jwt.services.js?");

/***/ }),

/***/ "./src/services/twitter.services.js":
/*!******************************************!*\
  !*** ./src/services/twitter.services.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.authTwitterCallback = exports.authTwitter = undefined;\n\nvar _passport = __webpack_require__(/*! passport */ \"passport\");\n\nvar _passport2 = _interopRequireDefault(_passport);\n\nvar _passportTwitter = __webpack_require__(/*! passport-twitter */ \"passport-twitter\");\n\nvar _constants = __webpack_require__(/*! ../config/constants */ \"./src/config/constants.js\");\n\nvar _constants2 = _interopRequireDefault(_constants);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nconst twitterOpts = {\n  consumerKey: _constants2.default.TWITTER_CONSUMER_KEY,\n  consumerSecret: _constants2.default.TWITTER_CONSUMER_SECRET,\n  callbackURL: _constants2.default.TWITTER_CALLBACK_URL\n};\n\nconst twitterStrategy = new _passportTwitter.Strategy(twitterOpts, async (accessToken, refreshToken, profile, done) => {\n  try {\n    return done(null, profile);\n  } catch (err) {\n    return done(err, false);\n  }\n});\n\n_passport2.default.use(twitterStrategy);\n\nconst authTwitter = exports.authTwitter = _passport2.default.authenticate('twitter', { session: false });\nconst authTwitterCallback = exports.authTwitterCallback = _passport2.default.authenticate('twitter', { session: false, failureRedirect: '/' });\n\n//# sourceURL=webpack:///./src/services/twitter.services.js?");

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

/***/ "compression":
/*!******************************!*\
  !*** external "compression" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"compression\");\n\n//# sourceURL=webpack:///external_%22compression%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-session":
/*!**********************************!*\
  !*** external "express-session" ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-session\");\n\n//# sourceURL=webpack:///external_%22express-session%22?");

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

/***/ "http-status":
/*!******************************!*\
  !*** external "http-status" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"http-status\");\n\n//# sourceURL=webpack:///external_%22http-status%22?");

/***/ }),

/***/ "joi":
/*!**********************!*\
  !*** external "joi" ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi\");\n\n//# sourceURL=webpack:///external_%22joi%22?");

/***/ }),

/***/ "joi-date-extensions":
/*!**************************************!*\
  !*** external "joi-date-extensions" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"joi-date-extensions\");\n\n//# sourceURL=webpack:///external_%22joi-date-extensions%22?");

/***/ }),

/***/ "jsonwebtoken":
/*!*******************************!*\
  !*** external "jsonwebtoken" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"jsonwebtoken\");\n\n//# sourceURL=webpack:///external_%22jsonwebtoken%22?");

/***/ }),

/***/ "mongoose":
/*!***************************!*\
  !*** external "mongoose" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose\");\n\n//# sourceURL=webpack:///external_%22mongoose%22?");

/***/ }),

/***/ "mongoose-unique-validator":
/*!********************************************!*\
  !*** external "mongoose-unique-validator" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"mongoose-unique-validator\");\n\n//# sourceURL=webpack:///external_%22mongoose-unique-validator%22?");

/***/ }),

/***/ "morgan":
/*!*************************!*\
  !*** external "morgan" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"morgan\");\n\n//# sourceURL=webpack:///external_%22morgan%22?");

/***/ }),

/***/ "passport":
/*!***************************!*\
  !*** external "passport" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport\");\n\n//# sourceURL=webpack:///external_%22passport%22?");

/***/ }),

/***/ "passport-jwt":
/*!*******************************!*\
  !*** external "passport-jwt" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-jwt\");\n\n//# sourceURL=webpack:///external_%22passport-jwt%22?");

/***/ }),

/***/ "passport-local":
/*!*********************************!*\
  !*** external "passport-local" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-local\");\n\n//# sourceURL=webpack:///external_%22passport-local%22?");

/***/ }),

/***/ "passport-twitter":
/*!***********************************!*\
  !*** external "passport-twitter" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"passport-twitter\");\n\n//# sourceURL=webpack:///external_%22passport-twitter%22?");

/***/ }),

/***/ "slug":
/*!***********************!*\
  !*** external "slug" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"slug\");\n\n//# sourceURL=webpack:///external_%22slug%22?");

/***/ }),

/***/ "validator":
/*!****************************!*\
  !*** external "validator" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"validator\");\n\n//# sourceURL=webpack:///external_%22validator%22?");

/***/ })

/******/ });
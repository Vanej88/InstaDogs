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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/gallery.js":
/*!***************************!*\
  !*** ./src/js/gallery.js ***!
  \***************************/
/*! exports provided: main */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "main", function() { return main; });
function main() {
  var lista = document.querySelector("#selectRazas");
  fetch("https://dog.ceo/api/breeds/list/all").then(response => response.json()).then(data => {
    var dog = Object.keys(data.message);

    for (var item of dog) {
      var option = document.createElement('option');
      option.setAttribute('class', 'raza-option');
      option.setAttribute('value', item);
      option.innerHTML = item;
      lista.appendChild(option);
    }

    var buttom = document.querySelector(".hero__btn-primary");
    buttom.onclick = callback;

    function callback(event) {
      var raza = lista.value;
      var galeria = document.querySelector('.gallery__container');
      galeria.innerHTML = "";
      fetch("https://dog.ceo/api/breed/".concat(raza, "/images/random/8")).then(response => response.json()).then(data => {
        var dogImg = data.message;
        console.log(dogImg);

        for (var _item of dogImg) {
          var title = document.querySelector('#galleryTitle');
          var contenedorCol = document.createElement("div");
          var contenedorBoxImg = document.createElement("div");
          var card = document.createElement("img");
          title.innerHTML = "Galer\xEDa de ".concat(raza);
          contenedorCol.classList.add('gallery__col');
          contenedorBoxImg.classList.add('gallery__box-img');
          card.classList.add('gallery__img');
          card.setAttribute('src', _item);
          contenedorBoxImg.appendChild(card);
          contenedorCol.appendChild(contenedorBoxImg);
          galeria.appendChild(contenedorCol);
        }

        window.scrollTo(0, window.innerHeight);
      });
    }
  });
}

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _gallery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gallery */ "./src/js/gallery.js");
/* harmony import */ var _responsive__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./responsive */ "./src/js/responsive.js");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/main.scss */ "./src/styles/main.scss");
/* harmony import */ var _styles_main_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_styles_main_scss__WEBPACK_IMPORTED_MODULE_2__);
//import "@babel/polyfill"



Object(_gallery__WEBPACK_IMPORTED_MODULE_0__["main"])();
Object(_responsive__WEBPACK_IMPORTED_MODULE_1__["showMenu"])();

/***/ }),

/***/ "./src/js/responsive.js":
/*!******************************!*\
  !*** ./src/js/responsive.js ***!
  \******************************/
/*! exports provided: showMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "showMenu", function() { return showMenu; });
var toggleBtn = document.querySelector('.menu__btn');
var menuResponsive = document.querySelector('.menu__list');
var galleryResponsive = document.querySelector('.gallery');
var heroResponsive = document.querySelector('.hero');
var selectResponsive = document.querySelector('.select');
var footerResponsive = document.querySelector('.footer');
function showMenu() {
  toggleBtn.addEventListener('click', () => {
    menuResponsive.classList.toggle('menu__list-visible');
    galleryResponsive.classList.toggle('gallery-hidden');
    heroResponsive.classList.toggle('hero-hidden');
    heroResponsive.classList.add('background-hero');
    selectResponsive.classList.toggle('select-hidden');
    footerResponsive.classList.toggle('footer-hidden');
  });
}
;

/***/ }),

/***/ "./src/styles/main.scss":
/*!******************************!*\
  !*** ./src/styles/main.scss ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ })

/******/ });
//# sourceMappingURL=build.js.map
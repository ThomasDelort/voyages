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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var _buildAllTravels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _buildAllMarks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2);




function init() {
  Object(_map__WEBPACK_IMPORTED_MODULE_0__["initMap"])();
  Object(_buildAllTravels__WEBPACK_IMPORTED_MODULE_1__["buildAllTravels"])();
  Object(_buildAllMarks__WEBPACK_IMPORTED_MODULE_2__["buildAllMarks"])();
}

window.init = init;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initMap", function() { return initMap; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "map", function() { return map; });
/* harmony import */ var _buildAllMarks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _buildAllTravels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);


var map;
var resetMapButton = document.querySelector("#reset-map");
/* Initialisation de la map google */

function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 34.559371,
      lng: 13.252210
    },
    zoom: 2.7,
    styles: [{
      "featureType": "administrative.land_parcel",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative.neighborhood",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.business",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    }]
  });
} // bouton reset map 


resetMapButton.addEventListener("click", function () {
  initMap();
  Object(_buildAllTravels__WEBPACK_IMPORTED_MODULE_1__["buildAllTravels"])();
  Object(_buildAllMarks__WEBPACK_IMPORTED_MODULE_0__["buildAllMarks"])();
});


/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAllMarks", function() { return buildAllMarks; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allMarkers", function() { return allMarkers; });
/* harmony import */ var _destinations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3);
/* harmony import */ var _buildAllTravels__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
// Ajoute les marks sur la carte



var allMarkers = [];

function buildAllMarks() {
  _destinations__WEBPACK_IMPORTED_MODULE_0__["destinations"].forEach(function (mark) {
    var marker = new google.maps.Marker({
      position: mark.coordinates,
      map: _map__WEBPACK_IMPORTED_MODULE_2__["map"],
      title: mark.title,
      icon: "./images/purple.png",
      clickOn: false
    });
    allMarkers.push(marker);
    marker.addListener('mouseover', function () {
      document.getElementById('lieu').innerHTML = '<p>' + mark.title + '</p>';
    });
    marker.addListener('mouseout', function () {
      document.getElementById('lieu').innerHTML = '';
    });
    /* Lorsque l'on clique sur une mark */

    marker.addListener('click', function () {
      /* Je remet tous les markers en violet et le click en rouge */

      /* Je lui met une variable clickOn à true et je met les autres sur false */
      for (var _i = 0; _i < allMarkers.length; _i++) {
        var _mark = allMarkers[_i];

        if (_mark.clickOn = true) {
          _mark.setIcon("./images/purple.png");

          _mark.clickOn = false;
        }
      }

      marker.setIcon("./images/red.png");
      marker.clickOn = true;
      /* Je zoom si nécessaire et je slide */

      if (_map__WEBPACK_IMPORTED_MODULE_2__["map"].getZoom() < 5) {
        _map__WEBPACK_IMPORTED_MODULE_2__["map"].setZoom(5);
      }

      _map__WEBPACK_IMPORTED_MODULE_2__["map"].panTo(marker.getPosition());
      Object(_buildAllTravels__WEBPACK_IMPORTED_MODULE_1__["buildAllTravels"])();
      var listfilter = document.querySelectorAll(".card");
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = listfilter[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var card = _step.value;
          var destinationslist = card.getAttribute("destinations").split(",");

          if (!destinationslist.includes(marker.title)) {
            card.classList.add("hide");
          } else {
            card.classList.add("show");
          }
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }
    });
  });
}



/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "destinations", function() { return destinations; });
var destinations = [{
  title: "Rome",
  coordinates: {
    lat: 41.902721,
    lng: 12.496259
  }
}, {
  title: "Londres",
  coordinates: {
    lat: 51.512002,
    lng: -0.122763
  }
}, {
  title: "Strasbourg",
  coordinates: {
    lat: 48.571854,
    lng: 7.751861
  }
}, {
  title: "New York",
  coordinates: {
    lat: 40.714226,
    lng: -74.008502
  }
}, {
  title: "Las Vegas",
  coordinates: {
    lat: 36.171033,
    lng: -115.140388
  }
}, {
  title: "Prague",
  coordinates: {
    lat: 50.074503,
    lng: 14.438861
  }
}, {
  title: "Ko Samui",
  coordinates: {
    lat: 9.507231,
    lng: 99.997214
  }
}, {
  title: "Bangkok",
  coordinates: {
    lat: 13.754919,
    lng: 100.504797
  }
}, {
  title: "Venise",
  coordinates: {
    lat: 45.441062,
    lng: 12.312563
  }
}, {
  title: "Stockholm",
  coordinates: {
    lat: 59.329467,
    lng: 18.068545
  }
}, {
  title: "Amsterdam",
  coordinates: {
    lat: 52.372329,
    lng: 4.896230
  }
}, {
  title: "Rosay",
  coordinates: {
    lat: 48.917115,
    lng: 1.685643
  }
}, {
  title: "Bruxelles",
  coordinates: {
    lat: 50.846735,
    lng: 4.352412
  }
}, {
  title: "Tokyo",
  coordinates: {
    lat: 35.708953,
    lng: 139.731753
  }
}, {
  title: "Osaka",
  coordinates: {
    lat: 34.693913,
    lng: 135.502048
  }
}, {
  title: "Kyoto",
  coordinates: {
    lat: 35.004579,
    lng: 135.770603
  }
}, {
  title: "Miyajima",
  coordinates: {
    lat: 34.295890,
    lng: 132.319901
  }
}, {
  title: "Milan",
  coordinates: {
    lat: 45.464165,
    lng: 9.191905
  }
}, {
  title: "Madère",
  coordinates: {
    lat: 32.668651,
    lng: -16.923537
  }
}, {
  title: "Lisbonne",
  coordinates: {
    lat: 38.722945,
    lng: -9.139444
  }
}, {
  title: "Avignon",
  coordinates: {
    lat: 43.948430,
    lng: 4.808136
  }
}, {
  title: "Fukuoka",
  coordinates: {
    lat: 33.591590,
    lng: 130.401200
  }
}];


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAllTravels", function() { return buildAllTravels; });
/* harmony import */ var _travels__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5);
/* harmony import */ var _buildAllMarks__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
// Construire la liste des voyages 



var travelsContainer = document.querySelector("#travels-container");

function buildAllTravels() {
  while (travelsContainer.hasChildNodes()) {
    travelsContainer.removeChild(travelsContainer.lastChild);
  }

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    var _loop = function _loop() {
      var travel = _step.value;
      var travelElement = document.createElement("div");
      var destlist = "";
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = travel.etapes[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var destination = _step2.value;
          destlist += destination + ",";
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }

      destlist = destlist.substring(0, destlist.length - 1);
      travelElement.innerHTML = "<div class=\"card text-center\" destinations=\"".concat(destlist, "\">\n        <h4 class=\"card-header font-weight-bold\">\n            ").concat(travel.description, "\n        </h4>\n        <a href=\"https://photos.app.goo.gl/").concat(travel.link, "\" target=\"_blank\"><img class=\"card-img\" src=\"").concat(travel.imagePath, "\" alt=\"\"></a>\n        <div class=\"card-body\">\n            <a href=\"https://photos.app.goo.gl/").concat(travel.link, "\" class=\"btn btn-danger btn-block\" target=\"_blank\">Voir l'album</a>\n        </div>\n    </div>");
      travelsContainer.appendChild(travelElement);
      /* mouseover des cards */

      travelElement.addEventListener("mouseenter", function () {
        travelElement.classList.add("over");
        var zoomYetDone = 0;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = _buildAllMarks__WEBPACK_IMPORTED_MODULE_1__["allMarkers"][Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var mark = _step3.value;

            if (travel.etapes.includes(mark.title)) {
              mark.setIcon("./images/red.png");

              if (zoomYetDone === 0) {
                if (_map__WEBPACK_IMPORTED_MODULE_2__["map"].getZoom() < 5) {
                  _map__WEBPACK_IMPORTED_MODULE_2__["map"].setZoom(5);
                }

                _map__WEBPACK_IMPORTED_MODULE_2__["map"].panTo(mark.getPosition());
                zoomYetDone = 1;
              }
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
              _iterator3.return();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      });
      /* on quitte le mouseover des cards */

      travelElement.addEventListener("mouseleave", function () {
        travelElement.classList.remove("over");
        /* Je remet tous les markers en rouge, sauf si un est clické */

        var _iteratorNormalCompletion4 = true;
        var _didIteratorError4 = false;
        var _iteratorError4 = undefined;

        try {
          for (var _iterator4 = _buildAllMarks__WEBPACK_IMPORTED_MODULE_1__["allMarkers"][Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
            var mark = _step4.value;

            if ((mark.icon = "./images/red.png") && mark.clickOn == false) {
              mark.setIcon("./images/purple.png");
            }
          }
        } catch (err) {
          _didIteratorError4 = true;
          _iteratorError4 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
              _iterator4.return();
            }
          } finally {
            if (_didIteratorError4) {
              throw _iteratorError4;
            }
          }
        }
      });
    };

    for (var _iterator = _travels__WEBPACK_IMPORTED_MODULE_0__["data"][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      _loop();
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return != null) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  ;
}



/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "data", function() { return data; });
var data = [{
  id: 1,
  imagePath: "images/2018-japon.jpg",
  description: "Japon, Mai 2018",
  link: "kmPCUAWSbUsdAkki9",
  etapes: ["Osaka", "Tokyo", "Fukuoka"]
}, {
  id: 2,
  imagePath: "images/2016-londres.jpg",
  description: "Londres, Novembre 2016",
  link: "VG4fieKK7EB1Tu1K7",
  etapes: ["Londres"]
}, {
  id: 3,
  imagePath: "images/2016-provence.jpg",
  description: "Provence, Septembre 2016",
  link: "H5E1GMfaobn1JCh88",
  etapes: ["Avignon"]
}, {
  id: 4,
  imagePath: "images/2016-lisbonne.jpg",
  description: "Lisbonne, Août 2016",
  link: "g4xc6weLr4ALNT59A",
  etapes: ["Lisbonne"]
}, {
  id: 5,
  imagePath: "images/2016-japon.jpg",
  description: "Japon, Avril 2016",
  link: "eYTvAhGDM8Hmccmr9",
  etapes: ["Kyoto", "Tokyo"]
}, {
  id: 6,
  imagePath: "images/2015-londres-dec.jpg",
  description: "Londres, décembre 2015",
  link: "mLzS2nmbqcy2XNKm8",
  etapes: ["Londres"]
}, {
  id: 7,
  imagePath: "images/2015-madere.jpg",
  description: "Madère, octobre 2015",
  link: "kCgfGyUwcAm1Kt827",
  etapes: ["Madère"]
}, {
  id: 8,
  imagePath: "images/2015-newyork.jpg",
  description: "New York, août 2015",
  link: "7Hs1Vi17t3yTCRPz7",
  etapes: ["New York"]
}, {
  id: 9,
  imagePath: "images/2015-londres-mai.jpg",
  description: "Londres, mai 2015",
  link: "aDdaErFLb6N8H4fk6",
  etapes: ["Londres"]
}, {
  id: 10,
  imagePath: "images/2015-milan.jpg",
  description: "Milan (Expo Universelle), mai 2015",
  link: "WHHmWQ1VpKTHUfEh8",
  etapes: ["Milan"]
}, {
  id: 11,
  imagePath: "images/2014-japon.jpg",
  description: "Japon, novembre 2014",
  link: "ugeeWgTLPYKtR3dj6",
  etapes: ["Osaka", "Tokyo", "Kyoto", "Miyajima"]
}, {
  id: 12,
  imagePath: "images/2014-belgique.jpg",
  description: "Belgique, août 2014",
  link: "34vGvSLRJZQVHwTA8",
  etapes: ["Bruxelles"]
}, {
  id: 13,
  imagePath: "images/2014-mariage.jpg",
  description: "Mariage, 28 juin 2014",
  link: "Ek4vx3wtpYtdcNfG6",
  etapes: ["Rosay"]
}, {
  id: 14,
  imagePath: "images/2013-amsterdam.jpg",
  description: "Amsterdam, août 2013",
  link: "bzqbzzfQ61qoVuke9",
  etapes: ["Amsterdam"]
}, {
  id: 15,
  imagePath: "images/2013-stockholm.jpg",
  description: "Stockholm, août 2013",
  link: "YvUS8VggbAPMjGGP6",
  etapes: ["Stockholm"]
}, {
  id: 16,
  imagePath: "images/2013-venise.jpg",
  description: "Venise, mai 2013",
  link: "dnUy6RYYKGzzT8w28",
  etapes: ["Venise"]
}, {
  id: 17,
  imagePath: "images/2012-thailande.jpg",
  description: "Thaïlande, août 2012",
  link: "UoW17a4U3PHV9ATv5",
  etapes: ["Ko Samui", "Bangkok"]
}, {
  id: 18,
  imagePath: "images/2012-londres.jpg",
  description: "Londres, mai 2012",
  link: "sUvwvQjGj36D5mmK6",
  etapes: ["Londres"]
}, {
  id: 19,
  imagePath: "images/2011-prague.jpg",
  description: "Prague, décembre 2011",
  link: "Cb84GrzXAG4ctoZ17",
  etapes: ["Prague"]
}, {
  id: 20,
  imagePath: "images/2011-usa.jpg",
  description: "États-Unis, septembre 2011",
  link: "uZJJX5KywPjkGTNh7",
  etapes: ["New York", "Las Vegas"]
}, {
  id: 21,
  imagePath: "images/2010-strasbourg.jpg",
  description: "Strasbourg, décembre 2010",
  link: "obTydedTKhLpQfMMA",
  etapes: ["Strasbourg"]
}, {
  id: 22,
  imagePath: "images/2010-londres.jpg",
  description: "Londres, juillet 2010",
  link: "MqYuNd15E4L9ZAdN7",
  etapes: ["Londres"]
}, {
  id: 23,
  imagePath: "images/2008-rome.jpg",
  description: "Rome, avril 2008",
  link: "MzSoPLrDYwRDgmuX9",
  etapes: ["Rome"]
}];


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map
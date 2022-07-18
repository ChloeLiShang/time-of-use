(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <app-schedule></app-schedule> -->\n<app-schedule-table></app-schedule-table>\n<!-- <app-schedule-minutes></app-schedule-minutes> -->\n<button class=\"btn btn-sm btn-outline-primary\">ok</button>\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'interval-select';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _schedule_table_schedule_table_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./schedule-table/schedule-table.component */ "./src/app/schedule-table/schedule-table.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _schedule_table_schedule_table_component__WEBPACK_IMPORTED_MODULE_4__["ScheduleTableComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/schedule-table/schedule-table.component.css":
/*!*************************************************************!*\
  !*** ./src/app/schedule-table/schedule-table.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".btn-container {\r\n    text-align: center;\r\n}\r\n\r\n.btn-caption {\r\n    margin: 0;\r\n}\r\n\r\n.cell {\r\n    margin-bottom: 0;\r\n}\r\n\r\ntd {\r\n    border-style: none;\r\n    text-align: center;\r\n}\r\n\r\n.tooltip-text {\r\n    margin: 0;\r\n}"

/***/ }),

/***/ "./src/app/schedule-table/schedule-table.component.html":
/*!**************************************************************!*\
  !*** ./src/app/schedule-table/schedule-table.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  schedule-table works!\n</p>\n<div class=\"container\">\n  <table class=\"table table-striped table-sm\">\n    <caption>\n      <div class=\"container\">\n        <div class=\"btn-group\" role=\"group\" aria-label=\"Basic radio toggle button group\">\n          <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio1\" autocomplete=\"off\">\n          <label class=\"btn btn-outline-secondary\" for=\"btnradio1\" (click)=\"onSelectTier(OFF_PEAK)\">\n            <div class=\"btn-container\">\n              <p class=\"btn-caption\">Off Peak</p>\n              <p class=\"btn btn-lg btn-caption\" [style.backgroundColor]=\"OFF_PEAK_COLOR\"></p>\n            </div>\n          </label>\n\n          <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio2\" autocomplete=\"off\">\n          <label class=\"btn btn-outline-secondary\" for=\"btnradio2\" (click)=\"onSelectTier(SHOULDER_2)\">\n            <div class=\"btn-container\">\n              <p class=\"btn-caption\">Shoulder 2</p>\n              <p class=\"btn btn-lg btn-caption\" [style.backgroundColor]=\"SHOULDER_2_COLOR\"></p>\n            </div>\n          </label>\n\n          <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio3\" autocomplete=\"off\">\n          <label class=\"btn btn-outline-secondary\" for=\"btnradio3\" (click)=\"onSelectTier(SHOULDER_1)\">\n            <div class=\"btn-container\">\n              <p class=\"btn-caption\">Shoulder 1</p>\n              <p class=\"btn btn-lg btn-caption\" [style.backgroundColor]=\"SHOULDER_1_COLOR\"></p>\n            </div>\n          </label>\n\n          <input type=\"radio\" class=\"btn-check\" name=\"btnradio\" id=\"btnradio4\" autocomplete=\"off\">\n          <label class=\"btn btn-outline-secondary\" for=\"btnradio4\" (click)=\"onSelectTier(PEAK)\">\n            <div class=\"btn-container\">\n              <p class=\"btn-caption\">Peak</p>\n              <p class=\"btn btn-lg btn-caption\" [style.backgroundColor]=\"PEAK_COLOR\"></p>\n            </div>\n          </label>\n        </div>\n      </div>\n    </caption>\n    <thead>\n    <tr>\n      <th scope=\"col\"></th>\n      <th scope=\"col\" colspan=\"5\"></th>\n      <th scope=\"col\" colspan=\"6\">6 am</th>\n      <th scope=\"col\" colspan=\"6\">noon</th>\n      <th scope=\"col\" colspan=\"6\">6 pm</th>\n      <th scope=\"col\" colspan=\"7\">midnight</th>\n\n    </tr>\n    </thead>\n    <tbody>\n    <tr>\n      <th scope=\"row\">Weekdays</th>\n      <td *ngFor=\"let hour of weekdaysDisplay; let i = index\" [style.backgroundColor]=\"hour.color\" (click)=\"onSelectHour(WEEKDAYS, i)\">\n        <div>\n          <ng-template #tipContent>\n            <div>\n              <p class=\"tooltip-text\">{{TIER_STRING[weekdaysDisplay[i].interval.tierId]}}</p>\n              <P class=\"tooltip-text\">Start: {{weekdaysDisplay[i].interval.start}}:00 - End: {{weekdaysDisplay[i].interval.end}}:00</P>\n              {{i}}:00 - {{i+1}}:00\n            </div>\n          </ng-template>\n          <p class=\"cell\" [ngbTooltip]=\"tipContent\">{{hour.hour}}</p>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Saturdays</th>\n      <td *ngFor=\"let hour of saturdaysDisplay; let i = index\" [style.backgroundColor]=\"hour.color\" (click)=\"onSelectHour(SATURDAYS, i)\">\n        <div>\n          <ng-template #tipContent>\n            <div>\n              <p class=\"tooltip-text\">{{TIER_STRING[saturdaysDisplay[i].interval.tierId]}}</p>\n              <P class=\"tooltip-text\">Start: {{saturdaysDisplay[i].interval.start}}:00 - End: {{saturdaysDisplay[i].interval.end}}:00</P>\n              {{i}}:00 - {{i+1}}:00\n            </div>\n          </ng-template>\n          <p class=\"cell\" [ngbTooltip]=\"tipContent\">{{hour.hour}}</p>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Sundays</th>\n      <td *ngFor=\"let hour of sundaysDisplay; let i = index\" [style.backgroundColor]=\"hour.color\" (click)=\"onSelectHour(SUNDAYS, i)\">\n        <div>\n          <ng-template #tipContent>\n            <div>\n              <p class=\"tooltip-text\">{{TIER_STRING[sundaysDisplay[i].interval.tierId]}}</p>\n              <P class=\"tooltip-text\">Start: {{sundaysDisplay[i].interval.start}}:00 - End: {{sundaysDisplay[i].interval.end}}:00</P>\n              {{i}}:00 - {{i+1}}:00\n            </div>\n          </ng-template>\n          <p class=\"cell\" [ngbTooltip]=\"tipContent\">{{hour.hour}}</p>\n        </div>\n      </td>\n    </tr>\n    <tr>\n      <th scope=\"row\">Holidays</th>\n      <td *ngFor=\"let hour of holidaysDisplay; let i = index\" [style.backgroundColor]=\"hour.color\" (click)=\"onSelectHour(HOLIDAYS, i)\">\n        <div>\n          <ng-template #tipContent>\n            <div>\n              <p class=\"tooltip-text\">{{TIER_STRING[holidaysDisplay[i].interval.tierId]}}</p>\n              <P class=\"tooltip-text\">Start: {{holidaysDisplay[i].interval.start}}:00 - End: {{holidaysDisplay[i].interval.end}}:00</P>\n              {{i}}:00 - {{i+1}}:00\n            </div>\n          </ng-template>\n          <p class=\"cell\" [ngbTooltip]=\"tipContent\">{{hour.hour}}</p>\n        </div>\n      </td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n      <td></td>\n    </tr>\n    </tbody>\n  </table>\n</div>\n"

/***/ }),

/***/ "./src/app/schedule-table/schedule-table.component.ts":
/*!************************************************************!*\
  !*** ./src/app/schedule-table/schedule-table.component.ts ***!
  \************************************************************/
/*! exports provided: ScheduleTableComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ScheduleTableComponent", function() { return ScheduleTableComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ScheduleTableComponent = /** @class */ (function () {
    function ScheduleTableComponent() {
        this.WEEKDAYS = 0;
        this.SATURDAYS = 1;
        this.SUNDAYS = 2;
        this.HOLIDAYS = 3;
        this.OFF_PEAK_COLOR = '#6bd06b';
        this.SHOULDER_2_COLOR = 'cyan';
        this.SHOULDER_1_COLOR = 'orange';
        this.PEAK_COLOR = 'rgb(242 93 121)';
        this.TIER_COLOR = [this.OFF_PEAK_COLOR, this.SHOULDER_2_COLOR, this.SHOULDER_1_COLOR, this.PEAK_COLOR];
        this.OFF_PEAK = 0;
        this.SHOULDER_2 = 1;
        this.SHOULDER_1 = 2;
        this.PEAK = 3;
        this.TIER_STRING = ['Off Peak', 'Shoulder 2', 'Shoulder 1', 'Peak'];
        this.weekdaysDisplay = [];
        this.saturdaysDisplay = [];
        this.sundaysDisplay = [];
        this.holidaysDisplay = [];
        this.selectedTier = -1;
    }
    ScheduleTableComponent.prototype.ngOnInit = function () {
        this.populateData();
        this.sortIntervals();
        this.generateDataForDisplay(this.weekdaysIntervals, this.weekdaysDisplay);
        this.generateDataForDisplay(this.saturdaysIntervals, this.saturdaysDisplay);
        this.generateDataForDisplay(this.sundaysIntervals, this.sundaysDisplay);
        this.generateDataForDisplay(this.holidaysIntervals, this.holidaysDisplay);
        this.createdBy = 0;
        this.priceSeasonId = 0;
    };
    ScheduleTableComponent.prototype.populateData = function () {
        this.weekdaysIntervals = [{
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.WEEKDAYS,
                priceSeasonId: this.WEEKDAYS,
                startMinute: 0,
                tierId: 0
            },
            {
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.WEEKDAYS,
                priceSeasonId: this.WEEKDAYS,
                startMinute: 600,
                tierId: 3
            },
            {
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.WEEKDAYS,
                priceSeasonId: this.WEEKDAYS,
                startMinute: 1200,
                tierId: 0
            }];
        this.saturdaysIntervals = [{
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.SATURDAYS,
                priceSeasonId: this.SATURDAYS,
                startMinute: 0,
                tierId: 0
            },
            {
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.SATURDAYS,
                priceSeasonId: this.SATURDAYS,
                startMinute: 1440,
                tierId: 0
            }];
        this.sundaysIntervals = [{
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.SUNDAYS,
                priceSeasonId: this.SUNDAYS,
                startMinute: 0,
                tierId: 0
            },
            {
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.SUNDAYS,
                priceSeasonId: this.SUNDAYS,
                startMinute: 1440,
                tierId: 0
            }];
        this.holidaysIntervals = [{
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.HOLIDAYS,
                priceSeasonId: this.HOLIDAYS,
                startMinute: 0,
                tierId: 0
            },
            {
                createdBy: new Date().getTime(),
                createdUtc: new Date().getTime(),
                dayType: this.HOLIDAYS,
                priceSeasonId: this.HOLIDAYS,
                startMinute: 1380,
                tierId: 1
            }];
    };
    ScheduleTableComponent.prototype.sortIntervals = function () {
        this.weekdaysIntervals.sort(function (a, b) {
            return a.startMinute - b.startMinute;
        });
        this.saturdaysIntervals.sort(function (a, b) {
            return a.startMinute - b.startMinute;
        });
        this.sundaysIntervals.sort(function (a, b) {
            return a.startMinute - b.startMinute;
        });
        this.holidaysIntervals.sort(function (a, b) {
            return a.startMinute - b.startMinute;
        });
    };
    ScheduleTableComponent.prototype.generateDataForDisplay = function (dayTypeIntervals, dayTypeDisplay) {
        for (var i = 0; i < dayTypeIntervals.length; i++) {
            var color = this.TIER_COLOR[dayTypeIntervals[i].tierId];
            var start = dayTypeIntervals[i].startMinute / 60;
            if (i + 1 === dayTypeIntervals.length) { // last interval ends at 24:00
                for (var j = dayTypeIntervals[i].startMinute; j < 1440; j += 60) {
                    dayTypeDisplay.push({
                        color: color,
                        hour: j / 60 + 1,
                        interval: {
                            start: start,
                            end: 24,
                            tierId: dayTypeIntervals[i].tierId
                        }
                    });
                }
            }
            else {
                for (var j = dayTypeIntervals[i].startMinute; j < dayTypeIntervals[i + 1].startMinute; j += 60) {
                    dayTypeDisplay.push({
                        color: color,
                        hour: j / 60 + 1,
                        interval: {
                            start: start,
                            end: dayTypeIntervals[i + 1].startMinute / 60,
                            tierId: dayTypeIntervals[i].tierId
                        }
                    });
                }
            }
        }
    };
    ScheduleTableComponent.prototype.updateInterval = function (dayTypeDisplay, hourIdx, newTier) {
        var hour = dayTypeDisplay[hourIdx];
        if (hourIdx !== 0 && hourIdx !== 23 && newTier === dayTypeDisplay[hourIdx - 1].interval.tierId
            && newTier === dayTypeDisplay[hourIdx + 1].interval.tierId) { // connects two intervals
            for (var i = dayTypeDisplay[hourIdx - 1].interval.start; i < dayTypeDisplay[hourIdx + 1].interval.end; i++) {
                dayTypeDisplay[i].interval = {
                    start: dayTypeDisplay[hourIdx - 1].interval.start,
                    end: dayTypeDisplay[hourIdx + 1].interval.end,
                    tierId: newTier
                };
            }
        }
        else if (hourIdx === 0) { // selected hour is hour 1
            if (dayTypeDisplay[1].interval.tierId === newTier) {
                for (var i = 0; i < dayTypeDisplay[1].interval.end; i++) {
                    dayTypeDisplay[i].interval = {
                        start: 0,
                        end: dayTypeDisplay[1].interval.end,
                        tierId: newTier
                    };
                }
            }
            else {
                dayTypeDisplay[hourIdx].interval = {
                    start: 0,
                    end: 1,
                    tierId: newTier
                };
                for (var i = 1; i < dayTypeDisplay[1].interval.end; i++) { // update right interval
                    dayTypeDisplay[i].interval.start = 1;
                }
            }
        }
        else if (hourIdx === 23) { // selected hour is hour 24
            if (dayTypeDisplay[22].interval.tierId === newTier) {
                for (var i = dayTypeDisplay[22].interval.start; i < 24; i++) {
                    dayTypeDisplay[i].interval = {
                        start: dayTypeDisplay[22].interval.start,
                        end: 24,
                        tierId: newTier
                    };
                }
            }
            else {
                dayTypeDisplay[hourIdx].interval = {
                    start: 23,
                    end: 24,
                    tierId: newTier
                };
                for (var i = dayTypeDisplay[22].interval.start; i < 23; i++) { // update left interval
                    dayTypeDisplay[i].interval.end = 23;
                }
            }
        }
        else { // selected hour is between hour 1 and hour 24
            if (newTier === dayTypeDisplay[hourIdx - 1].interval.tierId) { // new tier is the same as the left interval tier
                for (var i = dayTypeDisplay[hourIdx - 1].interval.start; i < hour.hour; i++) { // add to left interval
                    dayTypeDisplay[i].interval = {
                        start: dayTypeDisplay[hourIdx - 1].interval.start,
                        end: hour.hour,
                        tierId: newTier
                    };
                }
                for (var i = hourIdx + 1; i < dayTypeDisplay[hourIdx + 1].interval.end; i++) { // update right interval
                    dayTypeDisplay[i].interval.start = hour.hour;
                }
            }
            else if (newTier === dayTypeDisplay[hourIdx + 1].interval.tierId) { // new tier is the same as the right interval tier
                for (var i = hourIdx; i < dayTypeDisplay[hourIdx + 1].interval.end; i++) { // add to right interval
                    dayTypeDisplay[i].interval = {
                        start: hour.hour - 1,
                        end: dayTypeDisplay[hourIdx + 1].interval.end,
                        tierId: newTier
                    };
                }
                for (var i = dayTypeDisplay[hourIdx - 1].interval.start; i < hourIdx; i++) { // update left interval
                    dayTypeDisplay[i].interval.end = hour.hour - 1;
                }
            }
            else {
                dayTypeDisplay[hourIdx].interval = {
                    start: hour.hour - 1,
                    end: hour.hour,
                    tierId: newTier
                };
                for (var i = dayTypeDisplay[hourIdx - 1].interval.start; i < hourIdx; i++) { // update left interval
                    dayTypeDisplay[i].interval.end = hour.hour - 1;
                }
                for (var i = hourIdx + 1; i < dayTypeDisplay[hourIdx + 1].interval.end; i++) { // update right interval
                    dayTypeDisplay[i].interval.start = hour.hour;
                }
            }
        }
    };
    ScheduleTableComponent.prototype.onSelectTier = function (tierId) {
        this.selectedTier = tierId;
    };
    ScheduleTableComponent.prototype.onSelectHour = function (dayType, index) {
        if (this.selectedTier !== -1) {
            switch (dayType) {
                case this.WEEKDAYS: {
                    if (this.weekdaysDisplay[index].interval.tierId !== this.selectedTier) {
                        this.weekdaysDisplay[index].color = this.TIER_COLOR[this.selectedTier];
                        this.updateInterval(this.weekdaysDisplay, index, this.selectedTier);
                    }
                    break;
                }
                case this.SATURDAYS: {
                    if (this.saturdaysDisplay[index].interval.tierId !== this.selectedTier) {
                        this.saturdaysDisplay[index].color = this.TIER_COLOR[this.selectedTier];
                        this.updateInterval(this.saturdaysDisplay, index, this.selectedTier);
                    }
                    break;
                }
                case this.SUNDAYS: {
                    if (this.sundaysDisplay[index].interval.tierId !== this.selectedTier) {
                        this.sundaysDisplay[index].color = this.TIER_COLOR[this.selectedTier];
                        this.updateInterval(this.sundaysDisplay, index, this.selectedTier);
                    }
                    break;
                }
                case this.HOLIDAYS: {
                    if (this.holidaysDisplay[index].interval.tierId !== this.selectedTier)
                        this.holidaysDisplay[index].color = this.TIER_COLOR[this.selectedTier];
                    this.updateInterval(this.holidaysDisplay, index, this.selectedTier);
                    break;
                }
            }
        }
    };
    ScheduleTableComponent.prototype.saveIntervals = function () {
        this.weekdaysIntervals = [];
        for (var i = 0; i < 24;) {
            this.weekdaysIntervals.push({
                createdBy: this.createdBy,
                createdUtc: Date.now(),
                dayType: this.WEEKDAYS,
                priceSeasonId: this.priceSeasonId,
                startMinute: this.weekdaysDisplay[i].interval.start * 60,
                tierId: this.weekdaysDisplay[i].interval.tierId
            });
            i = this.weekdaysDisplay[i].interval.end;
        }
    };
    ScheduleTableComponent.prototype.getDayTypes = function () {
        return [this.WEEKDAYS, this.SATURDAYS, this.SUNDAYS, this.HOLIDAYS];
    };
    ScheduleTableComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-schedule-table',
            template: __webpack_require__(/*! ./schedule-table.component.html */ "./src/app/schedule-table/schedule-table.component.html"),
            styles: [__webpack_require__(/*! ./schedule-table.component.css */ "./src/app/schedule-table/schedule-table.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ScheduleTableComponent);
    return ScheduleTableComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\LiShang\Desktop\interval-select\interval-select\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map
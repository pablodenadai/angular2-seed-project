System.register(['angular2/core'], function(exports_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var LogElement;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            LogElement = (function () {
                function LogElement(element) {
                    console.log('directive [logElement]', element);
                }
                LogElement = __decorate([
                    core_1.Directive({
                        selector: '[logElement]'
                    }), 
                    __metadata('design:paramtypes', [core_1.ElementRef])
                ], LogElement);
                return LogElement;
            })();
            exports_1("LogElement", LogElement);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9kaXJlY3RpdmVzL2xvZy1lbGVtZW50LmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBVUE7Z0JBQ0Msb0JBQVksT0FBbUI7b0JBQzlCLE9BQU8sQ0FBQyxHQUFHLENBQUMsd0JBQXdCLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ2hELENBQUM7Z0JBTkY7b0JBQUMsZ0JBQVMsQ0FBQzt3QkFDVixRQUFRLEVBQUUsY0FBYztxQkFDeEIsQ0FBQzs7OEJBQUE7Z0JBS0YsaUJBQUM7WUFBRCxDQUpBLEFBSUMsSUFBQTtZQUpELG1DQUlDLENBQUEiLCJmaWxlIjoic2hhcmVkL2RpcmVjdGl2ZXMvbG9nLWVsZW1lbnQuZGlyZWN0aXZlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUsIEVsZW1lbnRSZWZ9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuXG4vKipcbiAqIEJhc2ljIGRpcmVjdGl2ZSBzYW1wbGUuXG4gKiBGb3IgbW9yZSBpbmZvIHNlZSBvZmZpY2lhbCBkb2NzOlxuICogaHR0cHM6Ly9hbmd1bGFyLmlvL2RvY3MvdHMvbGF0ZXN0L2FwaS9jb3JlL0RpcmVjdGl2ZS12YXIuaHRtbFxuICovXG5ARGlyZWN0aXZlKHtcblx0c2VsZWN0b3I6ICdbbG9nRWxlbWVudF0nIC8vIHVzaW5nIFsgXSBtZWFucyBzZWxlY3RpbmcgYXR0cmlidXRlc1xufSlcbmV4cG9ydCBjbGFzcyBMb2dFbGVtZW50IHtcblx0Y29uc3RydWN0b3IoZWxlbWVudDogRWxlbWVudFJlZikge1xuXHRcdGNvbnNvbGUubG9nKCdkaXJlY3RpdmUgW2xvZ0VsZW1lbnRdJywgZWxlbWVudCk7XG5cdH1cbn1cbiJdLCJzb3VyY2VSb290IjoiQzpcXGFuZ3VsYXIyLXNlZWQtcHJvamVjdFxcc3JjXFxzY3JpcHRzIn0=

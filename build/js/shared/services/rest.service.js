System.register(['rxjs/add/operator/map', 'angular2/core', 'angular2/http'], function(exports_1) {
    "use strict";
    var __extends = (this && this.__extends) || function (d, b) {
        for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, http_1;
    var RestOptions, RestService;
    return {
        setters:[
            function (_1) {},
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (http_1_1) {
                http_1 = http_1_1;
            }],
        execute: function() {
            RestOptions = (function (_super) {
                __extends(RestOptions, _super);
                function RestOptions() {
                    _super.call(this);
                    this.url = '//jsonplaceholder.typicode.com';
                    this.headers.append('Content-Type', 'application/json');
                }
                return RestOptions;
            })(http_1.BaseRequestOptions);
            exports_1("RestOptions", RestOptions);
            RestService = (function () {
                function RestService(http, restOptions) {
                    this.http = http;
                    this.restOptions = restOptions;
                }
                RestService.prototype.create = function (path, body) {
                    return this.request(path, http_1.RequestMethod.Post, body);
                };
                RestService.prototype.read = function (path, search) {
                    return this.request(path, http_1.RequestMethod.Get, null, search);
                };
                RestService.prototype.update = function (path, body) {
                    return this.request(path, http_1.RequestMethod.Put, body);
                };
                RestService.prototype.delete = function (path) {
                    return this.request(path, http_1.RequestMethod.Delete);
                };
                RestService.prototype.request = function (path, method, body, search) {
                    var options = new http_1.RequestOptions(this.restOptions.merge({
                        method: method,
                        url: this.restOptions.url + path,
                        body: JSON.stringify(body),
                        search: this.serialize(search)
                    }));
                    return this.http.request(new http_1.Request(options));
                };
                RestService.prototype.serialize = function (obj) {
                    var str = [];
                    for (var p in obj) {
                        if (obj.hasOwnProperty(p)) {
                            str.push(encodeURIComponent(p) + '=' + encodeURIComponent(obj[p]));
                        }
                    }
                    return str.join('&');
                };
                RestService = __decorate([
                    core_1.Injectable(), 
                    __metadata('design:paramtypes', [http_1.Http, RestOptions])
                ], RestService);
                return RestService;
            })();
            exports_1("RestService", RestService);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztZQU1BO2dCQUFpQywrQkFBa0I7Z0JBQ2xEO29CQUNDLGlCQUFPLENBQUM7b0JBQ1IsSUFBSSxDQUFDLEdBQUcsR0FBRyxnQ0FBZ0MsQ0FBQztvQkFDNUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxNQUFNLENBQUMsY0FBYyxFQUFFLGtCQUFrQixDQUFDLENBQUM7Z0JBQ3pELENBQUM7Z0JBQ0Ysa0JBQUM7WUFBRCxDQU5BLEFBTUMsRUFOZ0MseUJBQWtCLEVBTWxEO1lBTkQscUNBTUMsQ0FBQTtZQUdEO2dCQUNDLHFCQUNTLElBQVUsRUFDVixXQUF3QjtvQkFEeEIsU0FBSSxHQUFKLElBQUksQ0FBTTtvQkFDVixnQkFBVyxHQUFYLFdBQVcsQ0FBYTtnQkFDOUIsQ0FBQztnQkFFSiw0QkFBTSxHQUFOLFVBQU8sSUFBWSxFQUFFLElBQVk7b0JBQ2hDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxvQkFBYSxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDckQsQ0FBQztnQkFFRCwwQkFBSSxHQUFKLFVBQUssSUFBWSxFQUFFLE1BQWU7b0JBQ2pDLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxvQkFBYSxDQUFDLEdBQUcsRUFBRSxJQUFJLEVBQUUsTUFBTSxDQUFDLENBQUM7Z0JBQzVELENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLElBQVksRUFBRSxJQUFZO29CQUNoQyxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEVBQUUsb0JBQWEsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7Z0JBQ3BELENBQUM7Z0JBRUQsNEJBQU0sR0FBTixVQUFPLElBQVk7b0JBQ2xCLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxvQkFBYSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2dCQUNqRCxDQUFDO2dCQUVPLDZCQUFPLEdBQWYsVUFBZ0IsSUFBWSxFQUFFLE1BQXFCLEVBQUUsSUFBYSxFQUFFLE1BQWU7b0JBQ2xGLElBQUksT0FBTyxHQUFHLElBQUkscUJBQWMsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQzt3QkFDdkQsTUFBTSxFQUFFLE1BQU07d0JBQ2QsR0FBRyxFQUFFLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxHQUFHLElBQUk7d0JBQ2hDLElBQUksRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQzt3QkFDMUIsTUFBTSxFQUFFLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDO3FCQUM5QixDQUFDLENBQUMsQ0FBQztvQkFFSixNQUFNLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxjQUFPLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQztnQkFDaEQsQ0FBQztnQkFFTywrQkFBUyxHQUFqQixVQUFrQixHQUFXO29CQUM1QixJQUFJLEdBQUcsR0FBRyxFQUFFLENBQUM7b0JBRWIsR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxHQUFHLENBQUMsQ0FBQyxDQUFDO3dCQUNuQixFQUFFLENBQUMsQ0FBQyxHQUFHLENBQUMsY0FBYyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs0QkFDM0IsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsa0JBQWtCLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDcEUsQ0FBQztvQkFDRixDQUFDO29CQUVELE1BQU0sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUN0QixDQUFDO2dCQTVDRjtvQkFBQyxpQkFBVSxFQUFFOzsrQkFBQTtnQkE2Q2Isa0JBQUM7WUFBRCxDQTVDQSxBQTRDQyxJQUFBO1lBNUNELHFDQTRDQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9zZXJ2aWNlcy9yZXN0LnNlcnZpY2UuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJ3J4anMvYWRkL29wZXJhdG9yL21hcCc7XG5cbmltcG9ydCB7T2JzZXJ2YWJsZX0gZnJvbSAncnhqcyc7XG5pbXBvcnQge0luamVjdGFibGV9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0IHtIdHRwLCBSZXF1ZXN0LCBSZXNwb25zZSwgUmVxdWVzdE1ldGhvZCwgUmVxdWVzdE9wdGlvbnMsIEJhc2VSZXF1ZXN0T3B0aW9uc30gZnJvbSAnYW5ndWxhcjIvaHR0cCc7XG5cbmV4cG9ydCBjbGFzcyBSZXN0T3B0aW9ucyBleHRlbmRzIEJhc2VSZXF1ZXN0T3B0aW9ucyB7XG5cdGNvbnN0cnVjdG9yKCkge1xuXHRcdHN1cGVyKCk7XG5cdFx0dGhpcy51cmwgPSAnLy9qc29ucGxhY2Vob2xkZXIudHlwaWNvZGUuY29tJztcblx0XHR0aGlzLmhlYWRlcnMuYXBwZW5kKCdDb250ZW50LVR5cGUnLCAnYXBwbGljYXRpb24vanNvbicpO1xuXHR9XG59XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBSZXN0U2VydmljZSB7XG5cdGNvbnN0cnVjdG9yKFxuXHRcdHByaXZhdGUgaHR0cDogSHR0cCxcblx0XHRwcml2YXRlIHJlc3RPcHRpb25zOiBSZXN0T3B0aW9uc1xuXHQpIHt9XG5cblx0Y3JlYXRlKHBhdGg6IHN0cmluZywgYm9keTogT2JqZWN0KTogT2JzZXJ2YWJsZTxSZXNwb25zZT4ge1xuXHRcdHJldHVybiB0aGlzLnJlcXVlc3QocGF0aCwgUmVxdWVzdE1ldGhvZC5Qb3N0LCBib2R5KTtcblx0fVxuXG5cdHJlYWQocGF0aDogc3RyaW5nLCBzZWFyY2g/OiBPYmplY3QpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChwYXRoLCBSZXF1ZXN0TWV0aG9kLkdldCwgbnVsbCwgc2VhcmNoKTtcblx0fVxuXG5cdHVwZGF0ZShwYXRoOiBzdHJpbmcsIGJvZHk6IE9iamVjdCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblx0XHRyZXR1cm4gdGhpcy5yZXF1ZXN0KHBhdGgsIFJlcXVlc3RNZXRob2QuUHV0LCBib2R5KTtcblx0fVxuXG5cdGRlbGV0ZShwYXRoOiBzdHJpbmcpOiBPYnNlcnZhYmxlPFJlc3BvbnNlPiB7XG5cdFx0cmV0dXJuIHRoaXMucmVxdWVzdChwYXRoLCBSZXF1ZXN0TWV0aG9kLkRlbGV0ZSk7XG5cdH1cblxuXHRwcml2YXRlIHJlcXVlc3QocGF0aDogc3RyaW5nLCBtZXRob2Q6IFJlcXVlc3RNZXRob2QsIGJvZHk/OiBPYmplY3QsIHNlYXJjaD86IE9iamVjdCk6IE9ic2VydmFibGU8UmVzcG9uc2U+IHtcblx0XHRsZXQgb3B0aW9ucyA9IG5ldyBSZXF1ZXN0T3B0aW9ucyh0aGlzLnJlc3RPcHRpb25zLm1lcmdlKHtcblx0XHRcdG1ldGhvZDogbWV0aG9kLFxuXHRcdFx0dXJsOiB0aGlzLnJlc3RPcHRpb25zLnVybCArIHBhdGgsXG5cdFx0XHRib2R5OiBKU09OLnN0cmluZ2lmeShib2R5KSxcblx0XHRcdHNlYXJjaDogdGhpcy5zZXJpYWxpemUoc2VhcmNoKVxuXHRcdH0pKTtcblxuXHRcdHJldHVybiB0aGlzLmh0dHAucmVxdWVzdChuZXcgUmVxdWVzdChvcHRpb25zKSk7XG5cdH1cblxuXHRwcml2YXRlIHNlcmlhbGl6ZShvYmo6IE9iamVjdCk6IHN0cmluZyB7XG5cdFx0dmFyIHN0ciA9IFtdO1xuXG5cdFx0Zm9yIChsZXQgcCBpbiBvYmopIHtcblx0XHRcdGlmIChvYmouaGFzT3duUHJvcGVydHkocCkpIHtcblx0XHRcdFx0c3RyLnB1c2goZW5jb2RlVVJJQ29tcG9uZW50KHApICsgJz0nICsgZW5jb2RlVVJJQ29tcG9uZW50KG9ialtwXSkpO1xuXHRcdFx0fVxuXHRcdH1cblxuXHRcdHJldHVybiBzdHIuam9pbignJicpO1xuXHR9XG59XG4iXSwic291cmNlUm9vdCI6IkM6XFxhbmd1bGFyMi1zZWVkLXByb2plY3RcXHNyY1xcc2NyaXB0cyJ9

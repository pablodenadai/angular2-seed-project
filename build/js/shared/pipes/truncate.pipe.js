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
    var TruncatePipe;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            TruncatePipe = (function () {
                function TruncatePipe() {
                }
                TruncatePipe.prototype.transform = function (value, args) {
                    var length = parseInt(args[0] || '20', 10), suffix = args[1] || '';
                    if (value.length <= length) {
                        return value;
                    }
                    return value.substring(0, length) + suffix;
                };
                TruncatePipe = __decorate([
                    core_1.Pipe({ name: 'truncate' }), 
                    __metadata('design:paramtypes', [])
                ], TruncatePipe);
                return TruncatePipe;
            })();
            exports_1("TruncatePipe", TruncatePipe);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy90cnVuY2F0ZS5waXBlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7WUFhQTtnQkFBQTtnQkFXQSxDQUFDO2dCQVZBLGdDQUFTLEdBQVQsVUFBVSxLQUFhLEVBQUUsSUFBYztvQkFDdEMsSUFBSSxNQUFNLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxJQUFJLEVBQUUsRUFBRSxDQUFDLEVBQ3pDLE1BQU0sR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksRUFBRSxDQUFDO29CQUV4QixFQUFFLENBQUMsQ0FBQyxLQUFLLENBQUMsTUFBTSxJQUFJLE1BQU0sQ0FBQyxDQUFDLENBQUM7d0JBQzVCLE1BQU0sQ0FBQyxLQUFLLENBQUM7b0JBQ2QsQ0FBQztvQkFFRCxNQUFNLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLEdBQUcsTUFBTSxDQUFDO2dCQUM1QyxDQUFDO2dCQVhGO29CQUFDLFdBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUUsQ0FBQzs7Z0NBQUE7Z0JBWTNCLG1CQUFDO1lBQUQsQ0FYQSxBQVdDLElBQUE7WUFYRCx1Q0FXQyxDQUFBIiwiZmlsZSI6InNoYXJlZC9waXBlcy90cnVuY2F0ZS5waXBlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtQaXBlfSBmcm9tICdhbmd1bGFyMi9jb3JlJztcblxuLyoqXG4gKiBUcnVuY2F0ZSBhIHN0cmluZyB0byB0aGUgZ2l2ZW4gbGVuZ3RoIGFuZCBhcHBlbmQgc3VmZml4LlxuICogQHBhcmFtXHRsZW5ndGggVGV4dCBtYXggbGVuZ3RoLiBEZWZhdWx0IDIwLlxuICogQHBhcmFtXHRzdWZmaXggQXBwZW5kZWQgdG8gdGhlIGVuZCBvZiB0aGUgc3RyaW5nIGlmIHRydW5jdGVkLiBEZWZhdWx0ICcnLlxuICogQGV4YW1wbGUgVXNhZ2U6XG4gKiBgYGBodG1sXG4gKiA8cD57eyAnSGVsbG8gd29ybGQnIHwgdHJ1bmNhdGU6NTonLi4uJyB9fTwvcD5cbiAqIDwhLS0gRm9ybWF0cyB0bzogJ0hlbGxvLi4uJyAtLT5cbiAqIGBgYFxuICovXG5AUGlwZSh7IG5hbWU6ICd0cnVuY2F0ZScgfSlcbmV4cG9ydCBjbGFzcyBUcnVuY2F0ZVBpcGUge1xuXHR0cmFuc2Zvcm0odmFsdWU6IHN0cmluZywgYXJnczogc3RyaW5nW10pOiBhbnkge1xuXHRcdGxldCBsZW5ndGggPSBwYXJzZUludChhcmdzWzBdIHx8ICcyMCcsIDEwKSxcblx0XHRcdHN1ZmZpeCA9IGFyZ3NbMV0gfHwgJyc7XG5cblx0XHRpZiAodmFsdWUubGVuZ3RoIDw9IGxlbmd0aCkge1xuXHRcdFx0cmV0dXJuIHZhbHVlO1xuXHRcdH1cblxuXHRcdHJldHVybiB2YWx1ZS5zdWJzdHJpbmcoMCwgbGVuZ3RoKSArIHN1ZmZpeDtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiJDOlxcYW5ndWxhcjItc2VlZC1wcm9qZWN0XFxzcmNcXHNjcmlwdHMifQ==

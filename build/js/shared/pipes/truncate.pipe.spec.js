System.register(['angular2/testing', './truncate.pipe'], function(exports_1) {
    "use strict";
    var testing_1, truncate_pipe_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (truncate_pipe_1_1) {
                truncate_pipe_1 = truncate_pipe_1_1;
            }],
        execute: function() {
            testing_1.describe('TruncatePipe', function () {
                var pipe;
                beforeEach(function () {
                    pipe = new truncate_pipe_1.TruncatePipe();
                });
                testing_1.it('transforms "Hello World!" to "Hello"', function () {
                    testing_1.expect(pipe.transform('Hello World!', ['5'])).toEqual('Hello');
                });
                testing_1.it('transforms "Hello World!" to "Hello..."', function () {
                    testing_1.expect(pipe.transform('Hello World!', ['5', '...'])).toEqual('Hello...');
                });
                testing_1.it('leaves "Hello World!" unchanged', function () {
                    testing_1.expect(pipe.transform('Hello World!', [])).toEqual('Hello World!');
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNoYXJlZC9waXBlcy90cnVuY2F0ZS5waXBlLnNwZWMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7O1lBSUEsa0JBQVEsQ0FBQyxjQUFjLEVBQUU7Z0JBQ3hCLElBQUksSUFBa0IsQ0FBQztnQkFFdkIsVUFBVSxDQUFDO29CQUNWLElBQUksR0FBRyxJQUFJLDRCQUFZLEVBQUUsQ0FBQztnQkFDM0IsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsWUFBRSxDQUFDLHNDQUFzQyxFQUFFO29CQUMxQyxnQkFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsQ0FBQztnQkFDaEUsQ0FBQyxDQUFDLENBQUM7Z0JBRUgsWUFBRSxDQUFDLHlDQUF5QyxFQUFFO29CQUM3QyxnQkFBTSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsY0FBYyxFQUFFLENBQUMsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7Z0JBQzFFLENBQUMsQ0FBQyxDQUFDO2dCQUVILFlBQUUsQ0FBQyxpQ0FBaUMsRUFBRTtvQkFDckMsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLGNBQWMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxjQUFjLENBQUMsQ0FBQztnQkFDcEUsQ0FBQyxDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQyIsImZpbGUiOiJzaGFyZWQvcGlwZXMvdHJ1bmNhdGUucGlwZS5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpdCwgZGVzY3JpYmUsIGV4cGVjdH0gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5cbmltcG9ydCB7VHJ1bmNhdGVQaXBlfSBmcm9tICcuL3RydW5jYXRlLnBpcGUnO1xuXG5kZXNjcmliZSgnVHJ1bmNhdGVQaXBlJywgKCkgPT4ge1xuXHRsZXQgcGlwZTogVHJ1bmNhdGVQaXBlO1xuXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdHBpcGUgPSBuZXcgVHJ1bmNhdGVQaXBlKCk7XG5cdH0pO1xuXG5cdGl0KCd0cmFuc2Zvcm1zIFwiSGVsbG8gV29ybGQhXCIgdG8gXCJIZWxsb1wiJywgKCkgPT4ge1xuXHRcdGV4cGVjdChwaXBlLnRyYW5zZm9ybSgnSGVsbG8gV29ybGQhJywgWyc1J10pKS50b0VxdWFsKCdIZWxsbycpO1xuXHR9KTtcblxuXHRpdCgndHJhbnNmb3JtcyBcIkhlbGxvIFdvcmxkIVwiIHRvIFwiSGVsbG8uLi5cIicsICgpID0+IHtcblx0XHRleHBlY3QocGlwZS50cmFuc2Zvcm0oJ0hlbGxvIFdvcmxkIScsIFsnNScsICcuLi4nXSkpLnRvRXF1YWwoJ0hlbGxvLi4uJyk7XG5cdH0pO1xuXG5cdGl0KCdsZWF2ZXMgXCJIZWxsbyBXb3JsZCFcIiB1bmNoYW5nZWQnLCAoKSA9PiB7XG5cdFx0ZXhwZWN0KHBpcGUudHJhbnNmb3JtKCdIZWxsbyBXb3JsZCEnLCBbXSkpLnRvRXF1YWwoJ0hlbGxvIFdvcmxkIScpO1xuXHR9KTtcbn0pO1xuIl0sInNvdXJjZVJvb3QiOiJDOlxcYW5ndWxhcjItc2VlZC1wcm9qZWN0XFxzcmNcXHNjcmlwdHMifQ==

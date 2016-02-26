System.register(['angular2/testing', './todo'], function(exports_1) {
    "use strict";
    var testing_1, todo_1;
    return {
        setters:[
            function (testing_1_1) {
                testing_1 = testing_1_1;
            },
            function (todo_1_1) {
                todo_1 = todo_1_1;
            }],
        execute: function() {
            testing_1.describe('Todo', function () {
                var todo;
                beforeEach(function () {
                    todo = new todo_1.Todo();
                });
                testing_1.it('should instantiate with no arguments', function () {
                    todo = new todo_1.Todo();
                    testing_1.expect(todo).toBeDefined();
                });
                testing_1.it('should generate random `id`', function () {
                    todo = new todo_1.Todo();
                    testing_1.expect(todo.id).toBeGreaterThan(-1);
                });
                testing_1.it('should instantiate with `title` argument', function () {
                    todo = new todo_1.Todo('foo');
                    testing_1.expect(todo.title).toBe('foo');
                });
            });
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kby5zcGVjLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztZQUlBLGtCQUFRLENBQUMsTUFBTSxFQUFFO2dCQUNoQixJQUFJLElBQVUsQ0FBQztnQkFFZixVQUFVLENBQUM7b0JBQ1YsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDO2dCQUVILFlBQUUsQ0FBQyxzQ0FBc0MsRUFBRTtvQkFDMUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7b0JBQ2xCLGdCQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDO2dCQUVILFlBQUUsQ0FBQyw2QkFBNkIsRUFBRTtvQkFDakMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7b0JBQ2xCLGdCQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLGVBQWUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNyQyxDQUFDLENBQUMsQ0FBQztnQkFFSCxZQUFFLENBQUMsMENBQTBDLEVBQUU7b0JBQzlDLElBQUksR0FBRyxJQUFJLFdBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDdkIsZ0JBQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2dCQUNoQyxDQUFDLENBQUMsQ0FBQztZQUNKLENBQUMsQ0FBQyxDQUFDIiwiZmlsZSI6InRvZG8vdG9kby5zcGVjLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtpdCwgZGVzY3JpYmUsIGV4cGVjdH0gZnJvbSAnYW5ndWxhcjIvdGVzdGluZyc7XG5cbmltcG9ydCB7VG9kb30gZnJvbSAnLi90b2RvJztcblxuZGVzY3JpYmUoJ1RvZG8nLCAoKSA9PiB7XG5cdGxldCB0b2RvOiBUb2RvO1xuXG5cdGJlZm9yZUVhY2goKCkgPT4ge1xuXHRcdHRvZG8gPSBuZXcgVG9kbygpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIGluc3RhbnRpYXRlIHdpdGggbm8gYXJndW1lbnRzJywgKCkgPT4ge1xuXHRcdHRvZG8gPSBuZXcgVG9kbygpO1xuXHRcdGV4cGVjdCh0b2RvKS50b0JlRGVmaW5lZCgpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIGdlbmVyYXRlIHJhbmRvbSBgaWRgJywgKCkgPT4ge1xuXHRcdHRvZG8gPSBuZXcgVG9kbygpO1xuXHRcdGV4cGVjdCh0b2RvLmlkKS50b0JlR3JlYXRlclRoYW4oLTEpO1xuXHR9KTtcblxuXHRpdCgnc2hvdWxkIGluc3RhbnRpYXRlIHdpdGggYHRpdGxlYCBhcmd1bWVudCcsICgpID0+IHtcblx0XHR0b2RvID0gbmV3IFRvZG8oJ2ZvbycpO1xuXHRcdGV4cGVjdCh0b2RvLnRpdGxlKS50b0JlKCdmb28nKTtcblx0fSk7XG59KTtcbiJdLCJzb3VyY2VSb290IjoiQzpcXGFuZ3VsYXIyLXNlZWQtcHJvamVjdFxcc3JjXFxzY3JpcHRzIn0=

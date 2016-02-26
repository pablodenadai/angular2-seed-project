System.register([], function(exports_1) {
    "use strict";
    var Todo;
    return {
        setters:[],
        execute: function() {
            Todo = (function () {
                function Todo(title) {
                    this.id = Math.floor(Math.random() * 11);
                    this.title = title;
                }
                return Todo;
            })();
            exports_1("Todo", Todo);
        }
    }
});

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRvZG8vdG9kby50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7WUFFQTtnQkFLQyxjQUFZLEtBQWM7b0JBQ3pCLElBQUksQ0FBQyxFQUFFLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsTUFBTSxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7b0JBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO2dCQUNwQixDQUFDO2dCQUNGLFdBQUM7WUFBRCxDQVRBLEFBU0MsSUFBQTtZQVRELHVCQVNDLENBQUEiLCJmaWxlIjoidG9kby90b2RvLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJVG9kb30gZnJvbSAnLi90b2RvLmludGVyZmFjZSc7XG5cbmV4cG9ydCBjbGFzcyBUb2RvIGltcGxlbWVudHMgSVRvZG8ge1xuXHRwdWJsaWMgaWQ6IG51bWJlcjtcblx0cHVibGljIHRpdGxlOiBzdHJpbmc7XG5cdHB1YmxpYyBjb21wbGV0ZWQ6IGJvb2xlYW47XG5cblx0Y29uc3RydWN0b3IodGl0bGU/OiBzdHJpbmcpIHtcblx0XHR0aGlzLmlkID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTEpO1xuXHRcdHRoaXMudGl0bGUgPSB0aXRsZTtcblx0fVxufVxuIl0sInNvdXJjZVJvb3QiOiJDOlxcYW5ndWxhcjItc2VlZC1wcm9qZWN0XFxzcmNcXHNjcmlwdHMifQ==

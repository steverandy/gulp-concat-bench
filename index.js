var Benchmark, concat, gulp, suite;

Benchmark = require("benchmark");

gulp = require("gulp");

concat = require("gulp-concat");

suite = new Benchmark.Suite;

suite.add("gulp-concat", {
  "defer": true,
  "fn": function(deferred) {
    var files, i, _i;
    files = [];
    for (i = _i = 1; _i <= 60; i = ++_i) {
      files.push("src/underscore" + i + ".js");
    }
    return gulp.src(files).pipe(concat("bundle.js")).pipe(gulp.dest("dest")).on("end", function() {
      return deferred.resolve();
    });
  }
}).on("cycle", function(event) {
  return console.log(String(event.target));
}).run();

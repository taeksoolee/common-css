const gulp = require("gulp");
const sass = require("gulp-dart-sass");
const watch = require("gulp-watch");
// const minify = require("gulp-minify");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

gulp.task("default", function () {
  console.log("hello gulp ✋");
  return gulp.src("./package.json").pipe(gulp.dest("./"));
});

gulp.task("build", function () {
  return (
    gulp
      .src("./style.scss")
      .pipe(sass().on("error", sass.logError))
      .pipe(rename({ basename: "common" }))
      .pipe(gulp.dest("./dist"))
      // .pipe(minify())
      .pipe(cleanCSS({ compatibility: "ie8" }))
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest("./dist"))
  );
});

gulp.task("watch-build", function () {
  watch("./**/*.scss", function () {
    return (
      gulp
        .src("./style.scss")
        .pipe(sass().on("error", sass.logError))
        .pipe(rename({ basename: "common" }))
        .pipe(gulp.dest("./dist"))
        // .pipe(minify())
        .pipe(cleanCSS({ compatibility: "ie8" }))
        .pipe(rename({ suffix: ".min" }))
        .pipe(gulp.dest("./dist"))
    );
  });
});

import {join} from 'path';
import {PATH} from '../workflow.config';
import {BOOTSTRAP} from '../workflow.config';

export = function (gulp) {
  return function () {
    return gulp.src(
      [
        join(PATH.src.all, '**/*.html'),
        join(PATH.src.all, '**/*.css'),
        join(BOOTSTRAP, '**/*.css'),
        join(PATH.src.all, '**/*.json'),
        join(PATH.src.all, '**/*.png')
      ])
      .pipe(gulp.dest(PATH.dest.dev.all));
  };
};

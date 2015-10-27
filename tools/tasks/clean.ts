import * as async from 'async';
import * as del from 'del';
import {join} from 'path';
import {PATH} from '../workflow.config';

export = function (gulp, plugins, option) {
  return function (done) {

    switch(option) {
      case 'clean'        : cleanAll(done);     break;
      case 'clean.dist'   : cleanDist(done);    break;
      case 'clean.app.dev': cleanAppDev(done);  break;
      case 'test'         : cleanTest(done);    break;
      default: done();
    }

  };
};

function cleanAll(done) {
  async.parallel([
    cb => cleanDist(cb),
    cb => cleanTest(cb)
  ], done);
}
function cleanDist(done) {
  del(PATH.dest.all, done);
}
function cleanAppDev(done) {
  del([
    join(PATH.dest.dev.all, '**/*'),
    '!' + PATH.dest.dev.lib,
    '!' + join(PATH.dest.dev.lib, '*')
  ], done);
}
function cleanTest(done) {
  del(PATH.dest.test, done);
}

function defaultTask(cb) {
  cb();
}

function build(cb) {
  cb();
  console.log("build");
}

exports.default = defaultTask;
exports.build = build;

import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dragula')
    .plugin('aurelia-animator-css');

  aurelia.start().then(() => aurelia.setRoot());
}

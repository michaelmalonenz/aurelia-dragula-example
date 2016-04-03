import 'bootstrap';

export function configure(aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-dragula')
    .plugin('aurelia-animator-css')
    .globalResources('nbspvalueconverter');

  aurelia.start().then(() => aurelia.setRoot());
}

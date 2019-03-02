export class App {
  configureRouter (config, router) {
    config.title = 'Aurelia'
    config.map([
      { route: ['', 'welcome'], name: 'welcome', moduleId: 'welcome', nav: true, title: 'Welcome' },
      { route: 'multiarray', name: 'multi', moduleId: 'multiarray', nav: true, title: 'Multi Array' }
    ])

    this.router = router
  }
}

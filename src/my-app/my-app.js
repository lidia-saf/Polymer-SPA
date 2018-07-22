import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/app-route/app-route.js'
import '@polymer/app-route/app-location.js'
import '@polymer/iron-pages/iron-pages.js'
import * as myMainPage from './my-main-page.js';
import * as eventPrivatePage from './event-private-page.js';


/**
 * @customElement
 * @polymer
 */

class MyApp extends PolymerElement {
  static get properties() {
    return {
      email:{
        type: String,
        notify: true,
        readonly: false
      },
      password: {
        type: String,
        notify: true,
        readonly: false
      },
      view: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      routeData: Object,
      subroute: Object
    }
  }

  static get template() {
    return html`
    <app-location route="{{route}}"></app-location>
    <app-route
      route="{{route}}"
      pattern="/:view"
      data="{{routeData}}"
      tail="{{subroute}}">
    </app-route>
    <app-route
      route="{{route}}"
      pattern="/event-private-page/:view"
      data="{{subrouteData}}"
      tail="{{subsubroute}}">
    </app-route>

    <iron-pages selected="{{routeData.view}}" attr-for-selected="name" fallback-selection="my-main-page">
      <my-main-page name="my-main-page" route="{{routeData.view}}" password="{{password}}" email="{{email}}"></my-main-page>
      <event-private-page name="event-private-page" route="{{subrouteData.view}}" password="{{password}}" email="{{email}}"></event-private-page>
    </iron-pages>
    `
  }

  _pageChanged(view) {
    switch(view) {
      case 'my-main-page':
        import('./my-main-page.js');
        break;
      case 'event-private-page':
        import('./event-private-page.js');
        break;
  }
}

}

window.customElements.define("my-app", MyApp);



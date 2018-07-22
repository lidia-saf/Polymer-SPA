import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/app-route/app-route.js';
import '@polymer/app-route/app-location.js'
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-layout.js';
import '@polymer/app-layout/app-drawer/app-drawer.js';
import '@polymer/app-layout/app-drawer-layout/app-drawer-layout.js';
import * as myDetails from './my-details.js';
import * as myPassword from './my-password.js';



class EventPrivatePage extends PolymerElement {
  static get properties () {
    return {
      password: {
        type: String,
        notify: true
      },
      email: {
        type: String,
        notify: true
      },
      routeData: Object,
      subroute: Object
    }
  }
  static get template() {
    return html`
    <style>
    :host {
      display: block;
    }
    body {
        margin: 0;
      }
    app-toolbar {
        background-color: #131722;
        font-family: sans-serif;
        color: white;
        --app-toolbar-font-size: 24px;
      }
    a {
      font-size: 0.7em;
      color: #FFF5F5;
    }
    }
  </style>
  <app-header-layout>
    <app-header reveals effects="waterfall" slot="header">
      <app-toolbar class="toolbar">
        <div main-title>PROFILE</div>
        <iron-selector attr-for-selected="name" role="navigation">
          <a name="my-details" href="/event-private-page/my-details" password="{{password}}" email="{{email}}">DETAILS</a>
          <a name="my-password" href="/event-private-page/my-password" password="{{password}}" email="{{email}}">CHANGE PASSWORD</a>
        </iron-selector>
      </app-toolbar>
    </app-header>
  
  </app-header-layout>

  <iron-pages selected="{{route}}" attr-for-selected="name" fallback-selection="my-details">
    <my-details name="my-details"></my-details>
    <my-password name="my-password" password="{{password}}" email="{{email}}"></my-password>
  </iron-pages>
    `
  };

}

window.customElements.define("event-private-page", EventPrivatePage);
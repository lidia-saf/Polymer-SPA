import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import * as myAppEvent from './my-app-event.js';
import * as eventForm from './event-form.js';


class MyMainPage extends PolymerElement {
  static get properties () {
    return {
      page: {
        type: String,
        reflectToAttribute: true
      },
      email: {
        type: String,
        notify: true
      },
      password: {
        type: String,
        notify: true
      },
      view: {
        type: String,
        notify: true,
        reflectToAttribute: true
      },
      routeData: Object,
      subroute: Object
    };
  }

  static get template() {
    return html`
    <style>
    app-header-layout {
      font-family: sans-serif;
    }
    a {
      text-decoration: none;
      font-size: inherit;
      color: inherit;
    }
    .tabs {
      height: 100%;
      @apply --layout-horizontal;
    }
    .tabs > a {
      @apply --layout-vertical;
      @apply --layout-center-center;
      margin: 12px 16px 12px;
      border-bottom: 1px solid #222;
    }
    .toolbar {
      @apply --layout-horizontal;
      @apply --layout-end-justified;
      background-color: rgba(255, 255, 255, 0.95);
    }
    </style>
    <app-header-layout>
      <app-header reveals effects="waterfall" slot="header">

        <app-toolbar class="toolbar">
          <div class="tabs">
            <a href="#event" on-click="_onClickAnchor">Event</a>
            <a href="#registration" on-click="_onClickAnchor">Registration</a>
          </div>
        </app-toolbar>

      </app-header>
        <div id="event">
          <my-app-event></my-app-event>
        </div>
        <div id="registration">
          <event-form password={{password}} email="{{email}}"></event-form>
        </div>

    </app-header-layout>
    `
  };
  _onClickAnchor (e) {
    let anchor = e.target.attributes.href.value;
    console.log(this.shadowRoot.querySelector(anchor));
    this.shadowRoot.querySelector(anchor).scrollIntoView();
  }
  }

window.customElements.define("my-main-page", MyMainPage);
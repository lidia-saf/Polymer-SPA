import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/app-layout/app-header/app-header.js';
import '@polymer/app-layout/app-toolbar/app-toolbar.js';
import '@polymer/app-layout/app-header-layout/app-header-layout.js';
import '@polymer/app-layout/app-scroll-effects/effects/waterfall.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-route.js'
import '@polymer/app-route/app-location.js'
import '@polymer/iron-pages/iron-pages.js'
import '@polymer/iron-form/iron-form.js'

/**
 * @customElement
 * @polymer
 */


class MyApp extends PolymerElement {
  static get template() {
    return html`
    <app-location route="{{route}}"></app-location>
    <app-route
      route="{{route}}"
      pattern="/:view"
      data="{{routeData}}"
      tail="{{subroute}}">
    </app-route>

    <iron-pages selected="{{routeData.view}}" attr-for-selected="page" fallback-selection="my-main-page">
      <my-main-page page="my-main-page" route="{{routeData}}"></my-main-page>
      <event-private-page page="event-private-page" route="{{routeData}}"></event-private-page>
    </iron-pages>
    `
  }
}

class MyMainPage extends PolymerElement {
  static get properties () {
    return {
      page: {
        type: String,
        reflectToAttribute: true
      }
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
          <event-form></event-form>
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

class MyAppEvent extends PolymerElement {
  static get properties () {
    return {
    };
  }

  static get template() {
    return html`
      <style>
       :host {
          display: block;
        }
        .app-container {
          text-align: center;
        }
        #event-container {
          display: flex;
          font-size: 1.7em;
          margin-top: 10%;
          justify-content: flex-end;
        }
        header {
          @apply --layout-vertical;
          @apply --layout-center-center;
          height: calc(100vh - 64px);
          padding: 0 36px;
          background-image: url('https://newsroom.mohegansun.com/wp-content/uploads/2016/04/social-photo.jpg');
          background-repeat: no-repeat;
          background-size: cover;
          color: white;
          text-align: center;
        }
        h1 {
          font-size: 2.6em;
          letter-spacing: 0.15em;
        }
        #date, #location, #time {
          width: 33%
        }
        event-form {
          display: none;
        }

        :host([hidden]) event-form {
          display: block;
        }
      </style>
      <header>
          <div class="app-container">
            <div id="event-container">
              <div id="date">[[date]]</div>
              <div id="time">[[time]]</div>
              <div id="location">[[location]]</div>
            </div>
            <h1>[[event]]</h1>
        </div>
      </header>
    `;
  }

  constructor(date, event, location, time) {
    super();
    this.date = "15 July 2018";
    this.event = "The Killers Concert";
    this.location = "Moscow, Luzhniki Stadium";
    this.time = "21:00";
  }
}

class EventPrivatePage extends PolymerElement {
  static get template() {
    return html`
      <style>
      h1 {
        margin: 5%;
        color: #4B0F0F;
      }
      img {
        display: block;
        margin-left: auto;
        margin-right: auto;
        width: 50%;
      }
      </style>
      <h1>You have successfully logged into the event private page for the event!</h1>
      <img src="https://i.gifer.com/E16i.gif" alt="The Killers concert gif">
    `
  };
}

class EventForm extends PolymerElement {
  static get template() {
    return html`
    <style>

    .precontainer {
      display: grid;
      grid-template rows: 15px 15px;
      justify-items: center;
    }
    .form-container {
      display: grid;
      flex-direction: column;
      background-color: #E6E2E1;
      padding: 3% 7% 3%;
    }

    form {
      font-family: sans-serif;
    }
    p {
      font-size: 150%;
    }
    .button {
      background: transparent;
      border: 2px solid #201D1D;
      border-radius: 5px;
      -webkit-border-radius: 5;
      -moz-border-radius: 5;
      transition-duration: 0.4s;
      -webkit-transition-duratin: 0.4s;
      cursor: pointer;
      text-decoration: none;
      font-family: sans-serif;
      color: #201D1D;
      font-size: 1.2em;
      padding: 2%;
    }
    .button:hover {
      background-color: #201D1D;
      color: #fff;
    }
    </style>
    <app-location route="{{route}}"></app-location>
    <div>
      <div class="precontainer">
        <p>Register to get the full experience of the event!</p>
        <p>Fill in the details:</p>
      </div>
      <div class="form-container">
        <iron-form id="ironform"></iron-form>
          <form class="registration-form" method="post" action="https://httpbin.org/post">
            <paper-input type='text' id='name' name='name' label='Name' required auto-validate> </paper-input>
            <br>
            <br>
            <paper-input type='email' id='email' name='email' label='Email' required auto-validate pattern="[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+" error-message="please indicate similar to, e.g., 123@gmail.com"></paper-input>
            <br>
            <br>
            <paper-input type='password' id='password' name='password' label='Password' required="true" auto-validate></paper-input>
            <br>
            <br>
            <paper-button raised class="button" on-click="_submitForm">Submit</paper-button>
          </form>
        </iron-form>
      </div>
    </div>`
  }
  static get properties() {
    return {
      properties: {
        name: {
          type: String,
          notify: true
        },
        email: {
          type: String,
          notify: true
        },
        password: {
          type: String,
          notify: true
        }
      }
    }
  }

  _submitPromise() {
    return new Promise(resolve => {
      this.shadowRoot.querySelector("#ironform").submit();
      return resolve("resolved");
      });
  };

  async _submitForm(e) {
    e.preventDefault();
    console.log("calling")
    var result = await this._submitPromise();
    this.set("route.path", "/event-private-page");
  }

};


window.customElements.define("event-form", EventForm);
window.customElements.define("event-private-page", EventPrivatePage);
window.customElements.define("my-app", MyApp);
window.customElements.define("my-app-event", MyAppEvent);
window.customElements.define("my-main-page", MyMainPage);


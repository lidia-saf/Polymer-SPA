import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

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

window.customElements.define("my-app-event", MyAppEvent);
import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import { _scrollEffects } from '@polymer/app-layout/helpers/helpers';
import '@polymer/paper-card/paper-card.js';
import '@polymer/iron-flex-layout/iron-flex-layout-classes.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js'

class MyDetails extends PolymerElement {
  static get properties() {
      return {
        title: {
          type: String,
          value: ""
        },
        description: {
          type: String,
          value: ""
        },
        date: {
          type: String,
          value: ""
        },
        amountOfAttendees:{
          type: Number
        },
        imageLink: {
          type: String,
          value: "https://res.cloudinary.com/lidia-saf/image/upload/v1530715634/The_Killers.jpg"
        }
      }
  }
    static get template() {
    return html`
      <style>
        .card-content {
          font-size: 1.1em;

        }
        .flexible {
          @apply(--layout-horizontal);
        }
        .date {
          @apply(--layout-self-center);
          padding: 10px;
        }
        paper-card {
          --paper-card-header-color: white !important;
        }
        .attend {
          @apply(--layout-self-center);
          padding: 10px;
        }
      </style>
      <paper-card heading="[[title]]" image=[[imageLink]] >
        <div class="card-content">
          [[description]]
          <br>
          <br>
          <div class="flexible">
            <img src="https://res.cloudinary.com/lidia-saf/image/upload/v1530781003/if_calendar_1287530.png" alt="calendar icon">
            <div class="date">[[date]]</div>
          </div>
          <div class="flexible">
            <img src="https://res.cloudinary.com/lidia-saf/image/upload/v1530782530/if_simpline_13_2305639.png" alt="people icon">
            <div class="attend">[[amountOfAttendees]] persons attend the event</div>
          </div>
        </div>
      </paper-card>

    `
  };

  ready() {
    super.ready();
    fetch("https://cors-anywhere.herokuapp.com/http://test.pieter-sandbox.dev.kube.agilians.io/api/events/tjfluuuvsj", {
      method: "GET",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        return response.json();
      } else {
        Promise.reject({code: response.status})
      }
      })
    .then(response => {
        this.set('title', response.event.title);
        this.set('amountOfAttendees', response.event.amountofattendees);
        this.set('description', response.event.description);
        this.set('date', response.event.date);
        console.log(response);
    })
  }
}



window.customElements.define("my-details", MyDetails);
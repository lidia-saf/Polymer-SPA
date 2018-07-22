import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/iron-flex-layout/iron-flex-layout.js'
import '@polymer/paper-input/paper-input.js';
import '@polymer/paper-button/paper-button.js';
import '@polymer/app-route/app-route.js'
import '@polymer/app-route/app-location.js'
import '@polymer/iron-form/iron-form.js'

class EventForm extends PolymerElement {
  static get properties() {
    return {
      name: {
        type: String
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
    }
}
  
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
        <iron-form id="ironform">
          <form class="registration-form" method="post" action="https://httpbin.org/post">
            <paper-input type="text" id="name" value="{{name}}" label="Name" required on-value-changed="_revalidate"> </paper-input>
            <br>
            <br>
            <paper-input type="email" id="email" value="{{email}}" label="Email" on-value-changed="_revalidate" required pattern="[A-Za-z0-9]+@[A-Za-z]+\.[A-Za-z]+" error-message="please indicate similar to, e.g., 123@gmail.com"></paper-input>
            <br>
            <br>
            <paper-input type="password" id="password" value="{{password}}" label="Password" on-value-changed="_revalidate" required></paper-input>
            <br>
            <br>
            <paper-button id="button" raised class="button" on-click="_postDataFunction">Submit</paper-button>
          </form>
        </iron-form>
      </div>
    </div>`
  }

  _validate() {
    let nameValid = this.$.name.validate();
    let emailValid = this.$.email.validate();
    let passwordValid = this.$.password.validate();
    return nameValid && emailValid && passwordValid;
  }

   _revalidate(e) {
    e.target.invalid = false;
   }

  _postDataFunction() {
    if (!this._validate()) return;
    fetch("https://cors-anywhere.herokuapp.com/http://test.pieter-sandbox.dev.kube.agilians.io/api/login", {
      method: "POST",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: this.email,
        password: this.password}),
      })
    .then(response => {
      if (response.ok) {
        console.log(response);
        this.set("route.path", "/event-private-page");
      } else {
        Promise.reject({code: response})
      }
    })
    console.log(this.password);
  }
}


window.customElements.define("event-form", EventForm);
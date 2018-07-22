import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';
import '@polymer/paper-input/paper-input.js';
import '@polymer/iron-form/iron-form.js';

class MyPassword extends PolymerElement {
  static get properties() {
    return {
      email: {
        type: String,
        notify: true,
        readonly: true
      },
      oldPassword: {
        type: String,
        value: ""
      },
      newPassword: {
        type: String,
        value: ""
      },
      confirmNewPassword: {
        type: String,
        value: ""
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
        p {
          font-size: 1.2em;
          font-family: 'Roboto', sans-serif;
          text-align: center;
        }
      </style>
      <p>Change the password below</p>
      <iron-form>
        <form>
          <paper-input type="password" id="oldPassword" value="{{oldPassword}}" label="Old password" on-value-changed="_revalidate"></paper-input>
          <br>
          <br>
          <paper-input type="password" id="newPassword" value="{{newPassword}}" label="New password" on-value-changed="_revalidate"></paper-input>
          <br>
          <br>
          <paper-input type="password" id="confirmNewPassword" value="{{confirmNewPassword}}" label="Confirm new password" on-value-changed="_revalidate"></paper-input>
          <paper-button id="button" raised class="button" on-click="_postDataFunction">Submit</paper-button>
        </form>
      </iron-form>
    `
  };

  _validate() {
    console.log(document.querySelector("my-app").password);
    console.log(this.oldPassword);
    if (document.querySelector("my-app").password === this.oldPassword && this.oldPassword != this.newPassword && this.newPassword != null && this.confirmNewPassword != null &&this.newPassword === this.confirmNewPassword) {
      return true;
    } else {
      return false;
    }
  }

  _revalidate(e) {
    return e.target.invalid = false;
   }

  _postDataFunction() {
    if (!this._validate()) return;
    fetch("https://cors-anywhere.herokuapp.com/http://test.pieter-sandbox.dev.kube.agilians.io/api/login", {
      method: "PUT",
      mode: "cors",
      cache: "no-cache",
      headers: {
        "Content-type": "application/json"
      },
      body: JSON.stringify({
        email: this.email,
        password: this.newPassword,
        id: "bhlutjgudqpucktnqwty",
        rev: "123-lsknr"
      }),
      })
    .then(response => {
      if (response.ok) {
        console.log(response);
      } else {
        Promise.reject({code: response.status})
        console.log(error)
      }
    })
  }
}


window.customElements.define("my-password", MyPassword);
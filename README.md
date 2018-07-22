# \<my-app\>

This is a simple one page application for registering for an event as test assignment for Polymer 3.0 use

#Description

## Run '$ npm install'

Download the package with the dependenies to run the application using npm

## Viewing application 

Run '$ npm start'

The package.json file includes the script to serve the application using polymer.serve

## Workings

Application consists of two pages:

1. My Main Page (default page shown to the user) with the following two sections:
  1. Event description details (time, date, location, name of the event);
  2. Registration form for the event with 'Submit' button

2. Event Private Page

  Event Private Page is imperatively shown to the user by the use of event listener attached to the Submit input field in the registration form.

The changes between My Main Page and Event Private Page are executed with the use of <app-route> and <app-location>.

The jump to the Event details or Registration form sections on the Main Page are executed with the use of the .scrollIntoView() method.

## Dependencies

The application uses the following dependencies to run:

  1. "dependencies": {
    "@polymer/app-layout": "^3.0.0-pre.19",
    "@polymer/iron-pages": "^3.0.0-pre.19",
    "@polymer/paper-input": "^3.0.0-pre.19",
    "@polymer/polymer": "^3.0.0"
  },
  2. "devDependencies": {
    "@polymer/app-route": "^3.0.0-pre.19",
    "@polymer/iron-form": "^3.0.0-pre.19",
    "@polymer/paper-button": "^3.0.0-pre.19",
    "@webcomponents/webcomponentsjs": "^2.0.0",
    "polymer-cli": "^1.7.4",
    "wct-browser-legacy": "^1.0.0

## Screenshots

![Screenshot1](https://github.com/lidia-saf/Polymer-SPA/blob/master/Screenshot1.png "Screenshot 1")

![Screenshot2](https://github.com/lidia-saf/Polymer-SPA/blob/master/Screenshot2.png "Screenshot 2")




# Polymer-SPA

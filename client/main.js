import { Meteor } from 'meteor/meteor';
import App from '../imports/App.svelte';


Meteor.startup(() => {
  new App({
    target: document.body,
  })
}) 
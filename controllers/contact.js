Blogger.ContactController = Ember.Controller.extend ({
  messageSent: false,

  actions: {
    secretMessage: function() {
      var message = prompt('Enter yo message:');
      this.set('confirmationNumber', Math.round(Math.random() * 10000));
      this.set('messageSent', true);
    }
  }

});

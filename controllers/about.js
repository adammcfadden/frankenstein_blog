Blogger.AboutController = Ember.Controller.extend({
  isPictureShowing: false,
  actions: {
    annoyingAlert: function() {
      alert("I can't beleive we're using alerts.");
    },
    showPicture: function() {
      this.set('isPictureShowing', true);
    },
    hidePicture: function() {
      this.set('isPictureShowing', false);
    }
  }
});

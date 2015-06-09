Blogger.RecentCommentsRoute = Ember.Route.extend({
  // controller is automatically generated,
  controllerName: 'recent-comments',
  renderTemplate: function() {
    this.render('recent-comments');
  },
  model: function() {
    return comments;
  }
});

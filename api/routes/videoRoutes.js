'use strict';
module.exports = function(app) {
  var videos = require('../controllers/videoController');
/*
  app.route('/')
  .get(function(req, res) {
    res.sendFile('../index.html');
  }); */

  app.route('/api/videos')
    .get(videos.list_all_videos)
    .post(videos.create_a_video);

  app.route('/api/videos/:page?/:limit?/:search?')
    .get(videos.list_all_videos);

  app.route('/api/video/:videoId')
    .get(videos.read_a_video)
    .put(videos.update_a_video)
    .delete(videos.delete_a_video);
};
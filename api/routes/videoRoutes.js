'use strict';
module.exports = function(app) {
  var videos = require('../controllers/videoController');


  app.route('/')
  .get(videos.main_route);

  // videos Routes
  app.route('/videos')
    .get(videos.list_all_videos)
    .post(videos.create_a_video);

  app.route('/videos/:page?/:limit?')
    .get(videos.list_all_videos);


  app.route('/video/:videoId')
    .get(videos.read_a_video)
    .put(videos.update_a_video)
    .delete(videos.delete_a_video);
};
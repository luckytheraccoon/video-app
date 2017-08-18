'use strict';

var mongoose = require('mongoose'),
    Video = mongoose.model('Videos');

exports.list_all_videos = function (req, res) {
    var videoCount;
    Video.count({}, function(err, count){
        videoCount = count;
    });

    Video.find({}, function (err, video) {
        var data ={"videos":video, "resultsCount":videoCount};
        if (err)
            res.send(err);
        res.json(data);
    }).limit(1);
};

exports.create_a_video = function (req, res) {
    var new_video = new Video(req.body);
    new_video.save(function (err, video) {
        if (err)
            res.send(err);
        res.json(video);
    });
};

exports.read_a_video = function (req, res) {
    Video.findById(req.params.videoId, function (err, video) {
        if (err)
            res.send(err);
        res.json(video);
    });
};

exports.update_a_video = function (req, res) {
    Video.findOneAndUpdate({ _id: req.params.videoId }, req.body, { new: true }, function (err, video) {
        if (err)
            res.send(err);
        res.json(video);
    });
};

exports.delete_a_video = function (req, res) {
    Video.remove({
        _id: req.params.videoId
    }, function (err, video) {
        if (err)
            res.send(err);
        res.json({ message: 'video successfully deleted' });
    });
};
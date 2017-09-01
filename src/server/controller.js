'use strict';

var mongoose = require('mongoose'),
    Video = mongoose.model('Videos'),
    path = require('path');


exports.main_route = function (req, res) {
    res.sendFile(path.join(__dirname, "..", "..", 'index.html'));
};


exports.list_all_videos = function (req, res) {
   
    var videoCount,
        pageDefault = 0,
        limitDefault = 9,
        page = pageDefault,
        limit = limitDefault;

    if(req.params.page) {
        page = parseInt(req.params.page);
        page = page > 0 ? page : pageDefault;
    }

    if(req.params.limit) {
        limit = parseInt(req.params.limit);
        limit = limit > 0 && limit <= 100 ? limit : limitDefault;
    }

    Video.count({}, function(err, count){
        videoCount = count;
    });

    Video.find({}, function (err, video) {
        var data ={"videos":video, "total":videoCount};
        if (err)
            res.send(err);
        res.json(data);
    }).skip(page).limit(limit);
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
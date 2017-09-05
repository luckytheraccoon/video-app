import mongoose from "mongoose";
import path from "path";

const Video = mongoose.model('Videos');

exports.main_route = function (req, res) {
    res.sendFile(path.join(__dirname, "..", "..", 'index.html'));
};

exports.list_all_videos = function (req, res) {
   
    var videoCount,
        pageDefault = 0,
        limitDefault = 9,
        page = pageDefault,
        limit = limitDefault,
        findQuery = {};

    if(req.params.page) {
        page = parseInt(req.params.page);
        page = page > 0 ? page : pageDefault;
    }

    if(req.params.limit) {
        limit = parseInt(req.params.limit);
        limit = limit > 0 && limit <= 100 ? limit : limitDefault;
    }

    if(req.params.excludeId) {
        findQuery._id = { $ne: req.params.excludeId };
    }

    if(req.params.searchTerm) {
        findQuery.title = new RegExp(req.params.searchTerm, "i");
    }
    
    Video.count(findQuery, function(err, count){
        videoCount = count;
    });

    Video.find(findQuery, function (err, video) {
        var data ={"items":video, "total":videoCount};
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
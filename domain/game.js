var _ = require('underscore');
var fs = require('fs');

function Game() {
    'use strict';

    var self = this;

    var games = [
        {id:1, name:'Geography - Countries and Capitals', file:'geocapitals.json'},
        {id:2, name:'Geography - Rivers and Sources', file:'georiversandsources.json'},
				{id:3, name:'Music - Bands and Genres', file:'musicbandsandgenres.json'},
				{id:4, name:'Sports - Football Players and Countries', file:'sportfootballplayers.json'},
				{id:5, name:'Various - Car Manufacturers and Origins', file:'varcarmanandorigin.json'}
    ];

    self.get = function (id, callback) {
        callback(null, games[0]);
    };

    self.getAll = function (callback) {
        callback(games);
    };

    self.getGame = function (gameId, callback) {
        var game = _.find(games, function (g) {
            return g.id === gameId;
        });

        if (game) {
            callback(null, game);
        }
        else {
            callback('No game');
        }
    };

    self.getQuestions = function (gameId, callback) {

        var game = _.find(games, function (g) {
            return g.id === gameId;
        });

        fs.readFile('./json/newfiles/' + game.file, function (err, data) {

            var gameData = JSON.parse(data.toString());

            callback(gameData.gameQuestions);
        });

    };

    self.getQuestion = function (gameId, id, callback) {

        var game = _.find(games, function (g) {
            return g.id === gameId;
        });

        fs.readFile('./json/newfiles/' + game.file, function (err, data) {

            var gameData = JSON.parse(data.toString());

            var question = _.find(gameData.gameQuestions, function (question) {
                return question.id === parseInt(id, 10);
            });

            callback(question);

        });
    };

}

module.exports = new Game();
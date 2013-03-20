$(function () {

    my.LeaderBoardModel = function () {

        var self = this;

        self.player = ko.observable();
        self.email = ko.observable();
        self.duration = ko.observable();
        self.gameId = ko.observable();
        self.gameDescription = ko.observable();
        self.score = ko.observable();
        self.date = ko.observable();

        self.mapped = function () {
            return {
                player:self.player(),
                email:self.email(),
                duration:self.duration(),
                game_id:self.gameId(),
                game_description:self.gameDescription(),
                score:self.score(),
                date:self.date()
            };
        };

    }
});
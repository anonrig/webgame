
$(function () {

    my.QuestionModel = function () {

        var self = this;

        self.id = ko.observable();
        self.question = ko.observable();
        self.gameId = ko.observable();
        self.answers = ko.observableArray();

    }
});
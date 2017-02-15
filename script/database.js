$(function () {
    // Hide situation detail on load.
    $('#situationDetail').hide();

    // Back button

    $('#backToSituation').click(function () {
        $('#situationDetail').hide();
        $('#situationListContainer').show();

        caseIndex = '';
        actorIndex = '';
        eventIndex = '';
        operationIndex = '';

        $("#situationActors").html('');
        $("#situationEvents").html('');
        $("#situationSolutions").html('');
    });

    // Init var
    var caseIndex = '';
    var actorIndex = '';
    var eventIndex = '';
    var operationIndex = '';

    $('.situation_item').click(function () {
        caseIndex = $(this).attr('id');

        if (cases[caseIndex]) {
            $('#situationListContainer').hide();
            $('#situationDetail').show();

            // Show situation title
            $("#situationName").html(cases[caseIndex].name);

            // Show situations actors => "who" in excel.
            var inHTML = "";

            $.each(cases[caseIndex].actors, function (index, value) {
                var newItem =
                    "<div class='situation-actors' id='" + index + "'>" +
                        "<div class='situation-actors-picture " + value.cssClass + "'></div>" +
                        "<div class='situation-actors-name'>" +
                            value.name +
                        "</div>" +
                    "</div>";

                inHTML += newItem;
            });

            $("#situationActors").html(inHTML);
            $("#situationEvents").html('');
            $("#situationSolutions").html('');
        } else {
            $('#situationDetail').hide();
        }
    });

    $('#situationActors').on("click", ".situation-actors", function () {
        actorIndex = $(this).attr('id');
        $(this).addClass('situationActif').siblings().removeClass('situationActif');


        // Show events and operations.
        var inHTML = "";

        $.each(cases[caseIndex].actors[actorIndex].events, function (index, value) {
            var newItem = "<div class='situation-event' id='" + index + "'>" +
                "<div class='situation-event-name'>" + value.name + "</div>" +
                "<div class='situation-operations-container'>";

            $.each(value.operations, function (i, obj) {
                newItem += "<div class='situation-operation' id='" + i + "'>" + obj.name + "</div>"

            });
            newItem += "</div>";
            newItem += "</div>";
            inHTML += newItem;
        });

        $("#situationEvents").html(inHTML);
        $("#situationSolutions").html('');
    });

    $('#situationEvents').on("click", ".situation-operation", function (event) {
        operationIndex = $(this).attr('id');
        eventIndex = $(this).closest('.situation-event').attr('id');
        $('.situation-operation').removeClass('situationActif');
        $(this).addClass('situationActif');

        // Show solutions
        var inHTML = "";

        $.each(cases[caseIndex].actors[actorIndex].events[eventIndex].operations[operationIndex].solutions, function (index, value) {
            var newItem = "<div class='situation-solution " + value + "' id='" + index + "'></div>";
            inHTML += newItem;
        });

        $("#situationSolutions").html(inHTML);
    });
});

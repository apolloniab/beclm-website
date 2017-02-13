$(function () {
    // DATA
    var cases = [
        {
            "name": "NOUVELLE AFFAIRE A L’AGENCE AVEC UN PROSPECT NON RISQUÉ",
            "actors": [
                {
                    "name": "Le conseiller avec son prospect",
                    "events": [
                        {
                            "name": "Rendez vous à l'agence",
                            "operations": [
                                {
                                    "name": "Entrée en relation avec présentation et signature du DER (document d'entrée en relation)",
                                    "solutions": [
                                        "beclm_cloud"
                                    ]
                                },
                                {
                                    "name": "Vérification automatique de l'inscription ORIAS du conseiller",
                                    "solutions": [
                                        "beclm_compliance"
                                    ]
                                }
                            ]
                        },
                        {
                            "name": "Test en cas de 2 quand",
                            "operations": [
                                {
                                    "name": "Opération 1",
                                    "solutions": [
                                        "solution_for_operation_1"
                                    ]
                                },
                                {
                                    "name": "Opération 2",
                                    "solutions": [
                                        "solution_for_operation_2"
                                    ]
                                }
                            ]
                        }
                    ]
                },
                {
                    "name": "Gestionnaire Back office",
                    "events": []
                }
            ]
        }
    ];

    // Hide situation detail on load.
    $('#situationDetail').hide();

    // Back button

    $('#backToSituation').click(function () {
        $('#situationDetail').hide();
        $('#situationListContainer').show();
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

            $.each(cases[caseIndex].actors, function(index, value){
                var newItem = "<div class='situation-actors' id='"+ index +"'>"+ value.name + "</div>";
                inHTML += newItem;
            });

            $("#situationActors").html(inHTML);
        } else  {
            $('#situationDetail').hide();
        }
    });

    $('#situationActors').on("click", ".situation-actors", function () {
        actorIndex = $(this).attr('id');
        $(this).addClass('situationActif').siblings().removeClass('situationActif');


        // Show events and operations.
        var inHTML = "";

        $.each(cases[caseIndex].actors[actorIndex].events, function(index, value){
            var newItem = "<div class='situation-event' id='" + index + "'>"+
                          "<div class='situation-event-name'>" + value.name + "</div>";

            $.each(value.operations, function (i, obj) {
                newItem += "<div class='situation-operation' id='"+ i +"'>" + obj.name + "</div>"

            });
            newItem += "</div>";
            inHTML += newItem;
        });

        $("#situationEvents").html(inHTML);
    });

    $('#situationEvents').on("click", ".situation-operation", function (event) {
        operationIndex = $(this).attr('id');
        eventIndex = $(this).closest('.situation-event').attr('id');
        $('.situation-operation').removeClass('situationActif');
        $(this).addClass('situationActif');

        // Show solutions
        var inHTML = "";

        $.each(cases[caseIndex].actors[actorIndex].events[eventIndex].operations[operationIndex].solutions, function(index, value){
            var newItem = "<div class='situation-solution "+  value +"' id='"+ index +"'></div>";
            inHTML += newItem;
        });

        $("#situationSolutions").html(inHTML);
    });
});

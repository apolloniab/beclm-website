var baseUrl = 'https://mailservice.4sh.fr';

var config = {
    withCredentials: false,
    headers: {
        'Authorization': 'Basic ' + btoa('beclm:a76abeee46a157d278402d9f2b668b42'),
        'Content-Type' : 'application/x-www-form-urlencoded'
    },
    subject : '[BeCLM] Demande de renseignements'
};

$('#contactForm').submit(function (event) {
    var body = 'Nom société / Personne à contacter : ' + $('#company').val() + '\n \n'
                + 'Email : ' + $('#email').val() + '\n \n'
                + 'Téléphone : ' + $('#phone').val() + '\n \n'
                + 'Message : \n' + $('#message').val();

    $.ajax({
        url : baseUrl + '/api/messages',
        method: 'POST',
        data: JSON.stringify({
            subject: config.subject,
            body: body
        }),
        headers: config.headers,
        xhrFields: {
            withCredentials: config.withCredentials
        },
        dataType: 'json',
        success: function () {
            alertify.success('Votre demande à bien été envoyée');
            $('#contactForm').trigger("reset");
        },
        error: function () {
            alertify.error('Une erreur s\'est produite');
        }
    });

    event.preventDefault();
});
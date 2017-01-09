var baseUrl = 'http://mailservice.4sh.fr';

var config = {
    withCredentials: false,
    headers: {
        'Authorization': 'Basic ' + btoa('beclm:207769c7aa31aa7568a3c5f16d890a7a'),
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
            alertify.success('Votre demande à bien été envoyé');
            $('#contactForm').find("input, textarea").val('')
        }
    });

    event.preventDefault();
});
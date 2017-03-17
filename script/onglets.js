$(function() {
    $('#contenu').css({"visibility":"visible"});
    $('#onglets').css({"visibility":"visible"});
    $('#onglets').click(function(event) {
        var actuel = event.target;
        if (!/li/i.test(actuel.nodeName) || actuel.className.indexOf('actif') > -1) {
            (actuel.nodeName)
            return;
        }
        $(actuel).addClass('actif').siblings().removeClass('actif');
        setDisplay();
    });
    function setDisplay() {
        var modeAffichage;
        $('#onglets li').each(function(rang) {
            modeAffichage = $(this).hasClass('actif') ? 'block' : 'none';
            $('.item').eq(rang).fadeIn(400).css('display', modeAffichage);
        });
    }
    setDisplay();

    $('#goTab2').click(function (event) {
        $('#onglets li:nth-child(2)').addClass('actif').siblings().removeClass('actif');
        $('#onglets2 li:nth-child(2)').addClass('actif').siblings().removeClass('actif');

        setDisplay();
    });
});

$(function() {
    $('#onglets2').css('display', 'block');
    $('#onglets2').click(function(event) {
        var actuel = event.target;
        if (!/li/i.test(actuel.nodeName) || actuel.className.indexOf('actif') > -1) {
            (actuel.nodeName)
            return;
        }
        $(actuel).addClass('actif').siblings().removeClass('actif');
        setDisplay();
    });
    function setDisplay() {
        var modeAffichage;
        $('#onglets2 li').each(function(rang) {
            modeAffichage = $(this).hasClass('actif') ? 'block' : 'none';
            $('.item').eq(rang).fadeIn(400).css('display', modeAffichage);
        });
    }
    setDisplay();
});

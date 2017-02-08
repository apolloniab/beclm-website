function adpaterALaTailleDeLaFenetre(){
var largeur = document.documentElement.clientWidth,
hauteur = document.documentElement.clientHeight;
var source = document.getElementById('monDiv'); // récupère l'id source
source.style.height = hauteur/1.152+'px'; // applique la hauteur de la page
}
// Une fonction de compatibilité pour gérer les évènements
function addEvent(element, type, listener){
if(element.addEventListener){
element.addEventListener(type, listener, false);
}else if(element.attachEvent){
element.attachEvent("on"+type, listener);
}}
// On exécute la fonction une première fois au chargement de la page
addEvent(window, "load", adpaterALaTailleDeLaFenetre);
// Puis à chaque fois que la fenêtre est redimensionnée
addEvent(window, "resize", adpaterALaTailleDeLaFenetre);

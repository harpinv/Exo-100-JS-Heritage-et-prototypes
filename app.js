//Création d'un objet véhicule
let vehicule = function (myCouleur, myRoues, myMarque) {
    this.couleur = myCouleur;
    this.roues = myRoues;
    this.marque = myMarque;
}

vehicule.prototype.demarrer = function () {
    return "Je démarre";
}

vehicule.prototype.arreter = function () {
    return "Je m'arrète";
}

console.log(vehicule.prototype.demarrer());
console.log(vehicule.prototype.arreter());

//Création d'un objet velo qui hérite de l'objet véhicule
let velo = function (myCouleur, myRoues, myMarque, myRayonRoues, myTypePeinture) {
    vehicule.call(this, myCouleur, myRoues, myMarque);
    this.rayonRoues = myRayonRoues;
    this.typePeinture = myTypePeinture;
}

velo.prototype = Object.create(vehicule.prototype);
velo.prototype.constructor = velo;

velo.prototype.monter = function () {
    return "Je monte en voiture";
}

console.log(velo.prototype.monter());

//Création d'un objet voiture qui hérite de l'objet véhicule
let voiture = function (myCouleur, myRoues, myMarque, myAssurance, myProprietaire) {
    vehicule.call(this, myCouleur, myRoues, myMarque);
    this.assurance = myAssurance;
    this.proprietaire = myProprietaire;
}

voiture.prototype = Object.create(vehicule.prototype);
voiture.prototype.constructor = voiture;

voiture.prototype.passerAuCarWash = function () {
    return "Hello Word!";
}

console.log(voiture.prototype.passerAuCarWash());
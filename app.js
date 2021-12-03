let Personne = function(nom, prenom, age, sexe){
    this.nom = nom;
    this.prenom = prenom;
    this.age = age;
    this.sexe = sexe;
// premiere methode
    this.getPersonne = function (){
        return "Ma personne s'appelle " + this.nom + this.prenom + " elle a " + this.age + " et est de sexe " + this.sexe;
    }
    // deuxieme methode
    this.getNewNomPrenom = function (NewPre, NewNom){
       this.nom = NewNom;
       this.prenom = NewPre;
    }
}
// creation personnnages
let Hocine = new Personne('Hassaini', ' Hocine', '20', 'Homme');
let Arnold = new Personne('Schwarzenegger', ' Arnold', '45', 'Homme');

// afficher dans les divs
document.getElementById('propriete1').innerHTML = Hocine.nom;
document.getElementById('propriete2').innerHTML = Hocine.prenom;
document.getElementById('propriete3').innerHTML = Hocine.age;
document.getElementById('propriete4').innerHTML = Hocine.sexe;

document.getElementById('propriete5').innerHTML = Arnold.nom;
document.getElementById('propriete6').innerHTML = Arnold.prenom;
document.getElementById('propriete7').innerHTML = Arnold.age;
document.getElementById('propriete8').innerHTML = Arnold.sexe;
// modification du nom et prenoms des persos
document.getElementById('method1').innerHTML = Hocine.getPersonne();
document.getElementById('method3').innerHTML = Arnold.getPersonne();





function doublerNombres (nombres) {
var result=[]
    each(nombres,function(el,i){
result.push(el.i)
});

return result
}


function doublerNombres (nombres) {
   return nombres.map(function(el,i){
return el*2;
});
}

function carreNombres (nombres) {
var result=[]
    each(nombres,function(el,i){
result.push(el.i)
});

return result;
}

function doublerNombres (nombres) {
   return nombres.map(function(el,i){
return el*el;
});
}

function nombresEnTexte (nombres) {
var result=[]
    each(nombres,function(el){
result.push(String)
});
return result;
}

function doublerNombres (nombres) {
   return nombres.map(function(el){
return String(el);
});
}
function  nomsEnMajuscules(noms) {
var result=[]
    each(noms,function(el){
result.push(noms.toUpperCase())
});
return result;
}

function nomsEnMajuscules(noms) {
  return noms.map(function(el) {
    return el.toUpperCase();
  });
}
function premiereLettreMajuscule (mots) {
var result=[]
    each(mots,function(el){
if(el===""){
  result.push("")
  
}else{
    result.push(el[0])+toUpperCase+el(slice(1))
}       
});
return result;
}
function premiereLettreMajuscule(mots) {
  return mots.map(function(el) {
    return el[0].toUpperCase() + el.slice(1);
  });
}

function troisPremieresLettres (pays) {
var result=[]
    each(pays,function(el){
if(el.length<3){
  result.push(el.toUpperCase())
  
}else{
    result.push(el(0,3))+toUpperCase+(el.slice(3))
}       
});
return result;
}

function troisPremieresLettres(pays) {
  return pays.map(function(el) {
    return (el.slice(0,3)).toUpperCase() + (el.slice(3));
  });
}

function obtenirNoms(utilisateurs) {
  var result = [];
  each(utilisateurs, function(el) {
    result.push(el.nom); 
  });
  return result;
}



function obtenirNoms(utilisateurs) {
  return utilisateurs.map(function(el) {
    return el.nom;  
  });
}
function agesPlusTen(utilisateurs) {
  var result = [];
  
  each(utilisateurs, function(el) {
    result.push({
      nom: el.nom,          
      age: el.age + 10      
    });
  });
  
  return result;  
}

function agesPlusTen(utilisateurs) {
  return utilisateurs.map(function(el) {
    return {          
      nom: el.nom,     
      age: el.age + 10
    };
  });
}
function utilisateursEnTexteEach(utilisateurs) {
  var result = [];  

  each(utilisateurs, function(el) {
    result.push(el.nom + " a " + el.age + " ans"); // ajouter chaque chaîne
  });

  return result;
}
function utilisateursEnTexte(utilisateurs) {
  return utilisateurs.map(function(el) {
    return el.nom + " a " + el.age + " ans"; // transforme chaque objet en chaîne
  });
}

console.log(utilisateursEnTexte(utilisateurs));

  function ajouterTaxe(prix) {
  var result = [];
  each(prix, function(el) {
    result.push(el * 1.2);
  });
  return result;
}
function ajouterTaxe(prix) {
  return prix.map(function(el) {
    return el * 1.2; 
  });
}

function formaterPrix(prix) {
  return prix.map(function(p) {
    return "Prix: " + p + " DT";
  });
}

console.log(formaterPrix([10, 20, 50]));

function formaterPrix(prix) {
  return prix.map(function(p) {
    return "Prix: " + p + " DT";
  });
}

console.log(formaterPrix([10, 20, 50]));

function reductionProduitsEach(produits) {
  var result = [];
  each(produits, function(el) {
    result.push({
      nom: el.nom,
      prix: el.prix * 0.9
    });
  });
  return result;
}
function reductionProduits(produits) {
  return produits.map(function(el) {
    return {
      nom: el.nom,           // garder le nom
      prix: el.prix * 0.9     // appliquer 10% de réduction
    };
  });
}
function etiquettesProduits(produits) {

}
function etiquettesProduitsEach(produits) {
  var result = [];
  each(produits, function(el) {
    result.push(el.nom + " - " + el.prix + " DT");
  });
  return result;
}

function etiquettesProduits(produits) {
  return produits.map(function(el) {
    return el.nom + " - " + el.prix + " DT";
  });
}

function prixAvecDeviseEach(produits) {
  var result = [];
  each(produits, function(el) {
    result.push(el.prix + " TND");
  });
  return result;
}
function prixAvecDevise(produits) {
  return produits.map(function(el) {
    return el.prix + " TND";
  });
}

function notesSur20Each(notes) {
  var result = [];
  each(notes, function(n) {
    result.push(n + "/20");
  });
  return result;
}
function notesSur20(notes) {
  return notes.map(function(n) {
    return n + "/20";
  });
}
function notesAvecMentionEach(notes) {
  var result = [];
  each(notes, function(n) {
    var mention = "";

    if (n < 10) {
      mention = "Insuffisant";
    } else if (n < 13) {
      mention = "Passable";
    } else if (n < 16) {
      mention = "Bien";
    } else if (n < 20) {
      mention = "Très Bien";
    } else if (n === 20) {
      mention = "Excellent";
    }

    result.push(n + " : " + mention);
  });

  return result;
}
function notesAvecMention(notes) {
  return notes.map(function(n) {
    var mention = "";

    if (n < 10) {
      mention = "Insuffisant";
    } else if (n < 13) {
      mention = "Passable";
    } else if (n < 16) {
      mention = "Bien";
    } else if (n < 20) {
      mention = "Très Bien";
    } else if (n === 20) {
      mention = "Excellent";
    }

    return n + " : " + mention;
  });
}

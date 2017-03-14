function verifier(f){
	alert("Verification");
	return true;
}

function surligne(champ, erreur) {
	if(erreur)
		champ.style.backgroundColor = "#fba";
	else
		champ.style.backgroundColor = "";
}

function verifNom(champ){
	if(champ.value.length < 2 || champ.value.length > 25){
		surligne(champ, true);
		return false;
	}
	else{
		surligne(champ, false);
		return true;
	}
}

function verifPrenom(champ){
	if(champ.value.length < 2 || champ.value.length > 25){
		surligne(champ, true);
		return false;
	}
	else{
		surligne(champ, false);
		return true;
	}
}

function verifPassword(champ){
	if(champ.value.length < 5 || champ.value.length > 35){
		surligne(champ, true);
		return false;
	}
	else{
		surligne(champ, false);
		return true;
	}
}

function verifTexte(champ){
	if(champ.value.length < 5 || champ.value.length > 100){
		surligne(champ, true);
		return false;
	}
	else{
		surligne(champ, false);
		return true;
	}
}

function verifUsername(champ){
	if(champ.value.length < 5 || champ.value.length > 25){
		surligne(champ, true);
		return false;
	}
	else{
		surligne(champ, false);
		return true;
	}
}

function verifMail(champ) {
var regex = /[a-zA-Z0-9._-]+@[a-z0-9._-]{2,}[a-z]{2,4}$/;
if(!regex.test(champ.value)) {
surligne(champ, true);
return false;
}
else {
surligne(champ, false);
return true;
}
}

function verifInteret(champ){
	if(champ.value == ""){
		alert("Veuillez choisir un interet")
		return true;
	}
	else{
		return false;
	}
}


function verifForm(f) {
var NomOk = verifNom(f.name);
var PrenomOk = verifPrenom(f.name2);
var AdresseOk = verifMail(f.adresse);
var passwordOk = verifPassword(f.password);
var texteOK = verifTexte(f.texte);
var UsernameOK = verifUsername(f.username);
var interetOK = verifInteret(f.interet);
if(NomOk && PrenomOk && AdresseOk && passwordOk && texteOK && UsernameOK && interet)
return true;
else {
alert("Veuillez remplir correctement tous les champs");
return false;
}
}function confirmation(){
	
}

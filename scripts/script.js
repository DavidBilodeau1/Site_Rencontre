var cptNotifications = 0;
var interet = "sports";
function notification(){

document.getElementById("notification").innerText= cptNotifications;}
function match(){  //fait apparaitre le coeur
	var img = new Image();
	img.style.display = "block";
	img.src= "images/heart.png"
	document.body.appendChild(img);
}
function checkNotif(){ //remet le compteur a zero
	cptNotifications = 0;
	document.getElementById('notification').style.visibility = "hidden";
}
function toggleMenu() { //fait apparaitre le menu notifications
  var menuBox = document.getElementById('menu-box');    
  if(menuBox.style.display == "block") { // if is menuBox displayed, hide it
    menuBox.style.display = "none";
  }
  else { // if is menuBox hidden, display it
    menuBox.style.display = "block";
  }
}
function allowDrop(ev) { //permet de dropper
    ev.preventDefault();
	var sp1 = document.createElement("span");
	sp1.appendChild(document.getElementById("thumbsUp"));
}

function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
			
	
}
function submitting(){
	var user = document.getElementById("user").value;
	var pass = document.getElementById("pass").value;
	var likes = document.getElementById("select").value;
	if(user == "Mickey" && pass == "password" && likes == "sports"){
		var pp = document.getElementById("profilePic");
		document.getElementById("profilePic").img.src= 'images/heart.png';
		return false;
	}
	if(user && pass && likes){
		return true;
		
	}
	else{
		document.getElementById("user").style.backgroundColor = "pink";
		document.getElementById("pass").style.backgroundColor = "pink";
		alert("Veuillez remplir les champs obligatoires.");
		return false;

	}
}
function verification(champ){
	if(champ.value == ""){
		champ.style.backgroundColor = "pink";
	}
	else if(champ.value != ""){
		champ.style.backgroundColor = "white";
	}

}
function drop(ev) {
    ev.preventDefault();
	var profPic = document.getElementsByClassName('profilePic');
	var selection = document.getElementById('select');
	var matching = ev.target;
	profPic.name = selection.value;
    var data = ev.dataTransfer.getData("text");
		var img = new Image();
	img.setAttribute("id", "thumbsUp");	
	img.name = interet;
	img.src= "images/heart.png";
if(profPic.name == matching.className){
	ev.target.appendChild(img);
	cptNotifications++;
	document.getElementById('notification').style.visibility = "visible";
}	//tue le kid
var sp2 = document.getElementById("dropPic");
var parentDiv = sp2.parentNode;
parentDiv.replaceChild(sp1,sp2);
}

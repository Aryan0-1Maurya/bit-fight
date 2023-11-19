/* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/

//I wrote this so I dont have to write document.getElementById("") a bunch of times
function i (x) { 
    //It takes the id of a page element and returns it.
    //Basically shortens the line below.
    return document.getElementById(x);

}
//catch my errors and do nothing about it...
window.onerror=function(messageOrEvent, source, lineno, colno, error){
//If the game throws errors, first jot them down in the comments, then
//...uncomment the next 2 lines:
//confirm(messageOrEvent)
 return true; 
// the error stops here
}
function initialize () {
i("loading2").style.transition = "3s";
   i("loading").style.transition = "15s";
document.getElementsByTagName("article")[0].style.left = "100vw";/*startATB()*/
loader()
i("attackBlocker").style.display = "none";
if(party[0].Hp < 1) {i('p1display').style.visibility = "hidden"; deathCount++}
if(party[1].Hp < 1) {i('p2display').style.visibility = "hidden"; deathCount++}
if(party[2].Hp < 1) {i('p3display').style.visibility = "hidden"; deathCount++}
if(party[3].Hp < 1) {i('p4display').style.visibility = "hidden"; deathCount++}
if(party[0].Hp < 1) {i('p1display').style.display = "none"}
if(party[1].Hp < 1) {i('p2display').style.display = "none"}
if(party[2].Hp < 1) {i('p3display').style.display = "none"}
if(party[3].Hp < 1) {i('p4display').style.display = "none"}

i("HPDamage").style.width = party[0].Hp/party[0].HpMax*100+"%";
    i("HPDamageTwo").style.width = party[1].Hp/party[1].HpMax*100+"%";
    i("HPDamageThree").style.width = party[2].Hp/party[2].HpMax*100+"%";
    i("HPDamageFour").style.width = party[3].Hp/party[3].HpMax*100+"%";
    
    i("HPDamageE").style.width = enemy[0].Hp/enemy[0].HpMax*100+"%";
    i("HPDamageETwo").style.width = enemy[1].Hp/enemy[1].HpMax*100+"%";
    i("HPDamageEThree").style.width = enemy[2].Hp/enemy[2].HpMax*100+"%";
    i("HPDamageEFour").style.width = enemy[3].Hp/enemy[3].HpMax*100+"%";
    
i("p0name").innerHTML = pcName(0);
i("P0Img").src = party[0].Img
i("p1name").innerHTML = pcName(1);
i("P1Img").src = party[1].Img
i("p2name").innerHTML = pcName(2);
i("P2Img").src = party[2].Img
i("p3name").innerHTML = pcName(3);
i("P3Img").src = party[3].Img

i("e0name").innerHTML = npcName(0);
i("E0Img").src = enemy[0].Img;
i("e1name").innerHTML = npcName(1);
i("E1Img").src = enemy[1].Img;
i("e2name").innerHTML = npcName(2);
i("E2Img").src = enemy[2].Img;
i("e3name").innerHTML = npcName(3);
i("E3Img").src = enemy[3].Img;

//Fixing enemy color pallete

for (x=0;x<enemy.length;x++){
if (enemy[x].Name === "Blue Slime") {
        i("E"+x+"Img").style.filter = "hue-rotate(90deg)";
}
if (enemy[x].Name === "Slime") {
        i("E"+x+"Img").style.filter = "hue-rotate(0deg)";
}
if (enemy[x].Name === "Red Slime") {
        i("E"+x+"Img").style.filter = "hue-rotate(230deg)";
}
if (enemy[x].Name === "Yellow Slime") {
        i("E"+x+"Img").style.filter = "hue-rotate(-30deg)";
}
if (enemy[x].Name === "Green Goomba") {
        i("E"+x+"Img").style.filter = "hue-rotate(90deg)";
       // i("E"+x+"Img").src = "http://koji.uphero.com/games/sprites/Mushroom.png"
}
if (enemy[x].Name === "Purple Goomba") {
        i("E"+x+"Img").style.filter = "hue-rotate(230deg)";
      // i("E"+x+"Img").src = "http://koji.uphero.com/games/sprites/Mushroom.png"
}
if (enemy[x].Name === "Pink Goomba") {
        i("E"+x+"Img").style.filter = "hue-rotate(-80deg)";
     //   i("E"+x+"Img").src = "http://koji.uphero.com/games/sprites/Mushroom.png";
}   
if (enemy[x].Name === "Goomba") {
i("E"+x+"Img").style.filter = "hue-rotate(0deg)";
     //  i("E"+x+"Img").src = "http://koji.uphero.com/games/sprites/Mushroom.png"
} 
}

    //Creating the alert function in a variable since I declared it that way earlier.
alert = function(x){
    i("aText").innerHTML += x+"<br/>";
    i("aText").scrollTop = i("aText").scrollHeight;
//Moves the box into view
    i("aBox").style.bottom = "1px";
//Delays the appearance of the close button until the alert is fully into view.

};
console.log = function(x) {
    i("aText").innerHTML += "<b>"+x+"</b><br/>";
    i("aText").scrollTop = i("aText").scrollHeight;
}
console.error = function(x) {
    i("aText").innerHTML += "<b style='color:red;'>"+x+"</b><br/>";
    i("aText").scrollTop = i("aText").scrollHeight;
}
//This function hides the alert when you click close
function hideAlert(){
    i("aBox").style.bottom= "-45vh";
    i("X").style.display = "none";
}
//Adds the event that hides the alert
i("X").addEventListener("click", hideAlert);
}



var spnDeg = 207;
var hueDeg = 2205;
function loader() {
i("loading").style.transform = "rotateY("+spnDeg+"deg)";
i("loading").style.filter = "hue-rotate("+hueDeg+"deg)";
}

var entry;
entry = "Give it a second to load. \nRe-run the code for another random set of enemies."
alert(entry)
var Alert = alert;
var Tog = console
//Heh
setTimeout(function(){alert = function(){};},10)
var console = function(){};
console.log = function(){}
console.error = function(){};
/*================================================/

              Party and Inventory
                    
/================================================*/
var party =     new Array( 3 ); var partyGroup = party.length; //Four members in the party
var character = new Array ( 6 ); //Seven characters to pick from
function pcName(x) {
    return party[x].Name + " Lvl:" + party[x].Lvl +"<br/>HP: "+party[x].Hp+" / "+party[x].HpMax}

var enemy =   new Array( enemyGroup); var enemyGroup = 3; //4 enemies in a potential battle
var enemies = new Array(1000); //1000 enemies in the potential bestiary
function npcName(x) {
    return enemy[x].Name +"<br/>HP: "+enemy[x].Hp+" / "+enemy[x].HpMax}
    
    
//400 potential pieces of equipmemt
var weapon = new Array( 100 );   var armor = new Array( 100 ); 
var garb =   new Array( 100 );   var accessory = new Array( 100 );

//500 potential inventory items (consumables or key items)
var inventory = new Array( 500 );


//Constructor for a character
function pc( name, hp, hpmax, atk, def, spd, spc, wpn, arm, grb, acc, img, cls, lvl) 
{this.Hp = hp; this.HpMax = hpmax; this.Atk = atk; this.Def = def;  this.Spd = spd; this.Spc = spc; this.Wpn = wpn; this.Arm = arm, this.Grb = grb; this.Acc = acc; this.Img = img; this.Name = name;
this.Cls = cls; this.Lvl = lvl;}


//Constructor for an enemy
function npc( name, hp, hpmax, atk, def, spd, spc, img, tech, spec) 
{this.Hp = hp; this.HpMax = hpmax; this.Atk = atk; this.Def = def;  this.Spd = spd; this.Spc = spc; this.Img = img; this.Tech = tech; this.Spec = spec; this.Name = name;}


//Constructor for equipment
function equipment(name, atk, def, spd, spc, img, type) 
{this.Name = name; this.Atk = atk; this.Def = def;    this.Spd = spd;    this.Spc = spc; this.Img = img; this.Type = type;}

//Constructor for inventory
function inventory(name, type, property, value, price, effect) 
{this.Name = name; this.Type = type; this.Prop = property;    this.Value = value;    this.Price = price; this.effect = effect;}

//Constructing each character's stats and equipment, name and image.
var fighterClass = new pc("Hero", 400, 400, 65, 20, 14, 6, "Sword", "Bronze Breastplate", "Samurai Kimono", "Red Sash", "https://assets.rpgsite.net/images/images/000/038/342/original/GK_Jul092015_A01.png",  "Fighter",1);

var thiefClass = new pc("Bastard", 300, 300, 35, 10, 35, 9, "Knife", "Leather Armor", "Black Robe", "","https://vignette.wikia.nocookie.net/logres-jrpg/images/e/e6/Fighter.png/revision/latest?cb=20170621042717", "Thief",1);

var casterClass = new pc("Sage", 300, 300, 115, 12, 4, 40, "Staff", "Wooden Breastplate", "Blue Robe", "","https://cdn.weasyl.com/static/media/7e/b0/99/7eb0998e55bea428776675f0983d7db56632299fc977fb0d8e715205a80e0c99.png",  "Caster",1);

var soldierClass = new pc("Samurai", 290, 290, 160, 25, 9, 50, "Katana", "Wooden Breastplate", "Samurai Kimono", "Samurai Headplate", "https://assets.rpgsite.net/images/images/000/040/337/original/GK_Aug102015_A06.png", "Soldier", 1);

var priestClass = new pc("Odd Man", 180, 180, 40, 5, 23, 10, "Mace", "Wooden Breastplate", "Samurai Kimono", "Samurai Headplate","https://fireemblemwiki.org/w/images/7/75/FERD_Sephiran.png", "Priest", 1);

var archerClass = new pc("Hunter", 380, 380, 60, 5, 25, 5, "Bow and Arrow", "Wooden Breastplate", "Hunter Outfit", "Red Sash","https://assets.rpgsite.net/images/images/000/058/486/original/Fire-Emblem-Warriors_Sakura.png", "Archer", 1);

var royalClass = new pc("Princess", 500, 500, 30, 17, 15, 25, "Sword", "Golden Breastplate", "Royal Robe", "Royal Crown","https://vignette.wikia.nocookie.net/typemoon/images/b/b5/Len_mbaa.png/revision/latest?cb=20091205235942", "Royal", 1);

var royaltyClass = new pc("Vull Noid", 1930, 1930, 330, 17, 45, 25, "Sword", "Golden Breastplate", "Royal Robe", "Royal Crown","https://assets.rpgsite.net/images/images/000/038/342/original/GK_Jul092015_A01.png", "Royal", 30);

//Add the characters to the list
character = [fighterClass, thiefClass, archerClass, royalClass, priestClass, soldierClass, casterClass, royaltyClass];

//Create the party
//Change these character[values] and the characters will now change in the display
party = [character[Math.floor(7)], character[Math.floor(Math.random()*2)+1], character[Math.floor(Math.random()*2+3)], character[Math.floor(Math.random()*2+5)]];

//Create enemies

enemies[0] = new npc('Blue Slime', 100, 100, 16, 10, 8, 10, "https://cdn.pixabay.com/photo/2013/07/13/13/33/blob-161097_960_720.png");
enemies[1] = new npc("Red Slime", 50, 50, 14, 4, 7, 10, "https://cdn.pixabay.com/photo/2013/07/13/13/33/blob-161097_960_720.png");
enemies[2] = new npc('Yellow Slime', 999, 999, 109, 3, 8, 10, "https://cdn.pixabay.com/photo/2013/07/13/13/33/blob-161097_960_720.png");
enemies[3] = new npc("Slime", 80, 80, 6, 6, 23, 10,"https://cdn.pixabay.com/photo/2013/07/13/13/33/blob-161097_960_720.png");
enemies[4] = new npc('Green Goomba', 100, 100, 18, 8, 15, 10, "https://static.wikia.nocookie.net/nintendo/images/d/d5/GoombaNSMB.png/revision/latest?cb=20110724131649&path-prefix=en");
enemies[5] = new npc("Purple Goomba", 50, 50, 10, 6, 12, 10, "https://static.wikia.nocookie.net/nintendo/images/d/d5/GoombaNSMB.png/revision/latest?cb=20110724131649&path-prefix=en");
enemies[6] = new npc('Pink Goomba', 40, 40, 30, 4, 30, 10, "https://static.wikia.nocookie.net/nintendo/images/d/d5/GoombaNSMB.png/revision/latest?cb=20110724131649&path-prefix=en");
enemies[7] = new npc("Goomba", 130, 130, 20, 2, 20, 10, "https://static.wikia.nocookie.net/nintendo/images/d/d5/GoombaNSMB.png/revision/latest?cb=20110724131649&path-prefix=en");

//Creating the enemy party
function newNpcFromList(x) {
    return new npc(enemies[x].Name, enemies[x].Hp, enemies[x].HpMax, enemies[x].Atk, enemies[x].Def, enemies[x].Spd+Math.random()*5.5, enemies[x].Spc, enemies[x].Img);
}
enemy[0] = newNpcFromList(Math.floor(Math.random()*8));
enemy[1] = newNpcFromList(Math.floor(Math.random()*8));
enemy[2] = newNpcFromList(Math.floor(Math.random()*8));
enemy[3] = newNpcFromList(Math.floor(Math.random()*8));

/*================================================/

              Party and Enemy Actions

/================================================*/

var dmg,  tar, target, attacker;
var slimeColor = ["hue-rotate(90deg);", "hue-rotate(230deg)", "hue-rotate(-38deg)",""]
tar = ["", "Two", "Three", "Four"] 
tDisplayX = [0,75,150,225]
tDisplayY = [0,75,150,225]

//Dismiss loadscreen onload, small buffer for stats to initialize.
window.onload = function () {

//Initializing player and enemy stats

var str="\n";
function targets() {
    if(str!=="\n"){ str = "\n";}
for (var e in enemy) {
       if(enemy[e]) {str += Math.floor(1+eval(e)) +". "+enemy[e].Name+"\n";}
        }
        return str; }
 function selectTarget(x) {
 setTimeout(function() { initMovement(mySpd[x], speed[x])}, 150);
 for (var e in enemy){
 if (enemy[e]) {
 document.getElementsByClassName("target")[eval(e)].style.display = "block";  
 attacker = x; }}
 document.getElementsByClassName("header")[0].style.display = "block";
 document.getElementById("P"+attacker+"Img").style.bottom = "45vh";
 }
 
 
function attack(x,y){
kill = false;
target = y;
i("swordAttack").style.display = "block"
i("dmgDisplay").style.display = "block"
i("swordAttack").style.top  = "13vh"
i("swordAttack").style.left = tDisplayX[target] + "px"
i("dmgDisplay").style.left = tDisplayX[target]+7 + "px"
setTimeout(function(){ i("swordAttack").style.display = "none";document.getElementById("P"+attacker+"Img").style.bottom = "42vh"; i("dmgDisplay").style.display = "none"}, 750)
document.getElementsByClassName("header")[0].style.display = "none";
for (var e in enemy){
if (enemy[e]) {
 document.getElementsByClassName("target")[eval(e)].style.display = "none";   }}
 if (enemyGroup>=0) {
//target = prompt("Which enemy?"+targets()+"\nLeave blank to defend.")-1;
targets.str = "";
if (enemy[target]){alert(party[x].Name+" attacks Enemy "+(target+1)+". "+enemy[target].Name)}
if (target===""-1){ alert(party[x].Name+" defending."); 
return; } 
 
 if (!enemy[target]) {console.error("You missed."); return;} 
     } 
     dmg = Math.floor((party[x].Atk/2)+(Math.random()*party[x].Atk));
     if (dmg <= 0) {dmg = 1}
     i("dmgDisplay").innerHTML = dmg
enemy[target].Hp = (enemy[target].Hp-dmg);
i("e"+target+"name").innerHTML = npcName(target);
if (enemy[target].Hp <= 0 ) {
    enemy[target].Hp=0;
    kill = true;
    i("e"+target+"name").innerHTML = npcName(target);
    
   
i("HPDamageE"+tar[target]).style.width = (enemy[target].Hp/enemy[target].HpMax)*100+"%";
alert("Damage: "+dmg+"\nEnemy HP: "+enemy[target].Hp+"/"+enemy[target].HpMax);
alert("You killed "+enemy[target].Name); 
    enemyGroup--;
    enemy.splice(target,1,null);
    
    alert(enemyGroup+1+" enemies left.");
    
if(enemyGroup >= 0){
    if (target===0) {
    t = 0;
    i("E0Img").style.transition = "1s"
    i("E0Img").style.height = "0px"
    i("E0Img").style.opacity = "0"
    i("E0Img").style.transform = "rotateY(540deg)";
    setTimeout(function(){i("hpE0display").style.display = "none"; i("atbE1display").style.display = "none"; i("E0Img").style.display = "none"},1200)
    } else {
    t = target;
    i("E"+t+"Img").style.transition = "1s";
    i("E"+t+"Img").style.height = "0px";
    i("E"+t+"Img").style.opacity = "0";
    i("E"+t+"Img").style.transform = "rotateY(540deg)";
    setTimeout(function(){i("atbE"+(t+1)+"display").style.display = "none"; i("hpE"+t+"display").style.display = "none"; i("E"+t+"Img").style.display = "none"},1200)
    }
} else {if (target===0) {
    i("E0Img").style.transition = "1s"
    i("E0Img").style.height = "0px"
    i("E0Img").style.opacity = "0"
    i("E0Img").style.transform = "rotateY(540deg)";
} else {
    t = target;
    i("E"+t+"Img").style.transition = "1s";
    i("E"+t+"Img").style.height = "0px"
    i("E"+t+"Img").style.opacity = "0"
    i("E"+t+"Img").style.transform = "rotateY(540deg)"}
    setTimeout(startOver, 100)
}}
if (!kill){
i("HPDamageE"+tar[target]).style.width = (enemy[target].Hp/enemy[target].HpMax)*100+"%";
alert("Damage: "+dmg+"\nEnemy HP: "+enemy[target].Hp+"/"+enemy[target].HpMax); }

}


i("confirmTurn_ATBProgress").addEventListener("click",  function(){selectTarget(0);});
i("confirmTurn_ATBProgressTwo").addEventListener("click",  function(){selectTarget(1);});
i("confirmTurn_ATBProgressThree").addEventListener("click",  function(){selectTarget(2);});
i("confirmTurn_ATBProgressFour").addEventListener("click",  function(){selectTarget(3);});


i("target"+(3)).addEventListener("click",  function(){attack(attacker,3);});
i("target"+(2)).addEventListener("click",  function(){attack(attacker,2);});
i("target"+(1)).addEventListener("click",  function(){attack(attacker,1);});
i("target"+(0)).addEventListener("click",  function(){attack(attacker,0);});



};
var target = 0;
function targetAttack(x) {
target = Math.floor((Math.random()*32)/8)

setTimeout(function(){ i("enemy"+x+"Attack").style.display = "none" }, 750);
setTimeout(function(){
if (party[target].Hp === 0) {
target = Math.floor((Math.random()*32)/8)
if (party[target].Hp === 0) {
for (d = 0; d < 4; d++) {
    target = d;
    if (party[target].Hp === 0)
    { }
      else { break; }
    }
}

} else { 

}},100)
dmg = Math.ceil(enemy[x].Atk-Math.floor(party[target].Def*0.5))+2;  if (dmg <= 0) {dmg = 1}
i("dmgDisplayE"+x).innerHTML = dmg;{}

setTimeout(function(){
if (party[target].Hp === 0) {return}
i("dmgDisplayE"+x).style.display = "block"
i("dmgDisplayE"+x).style.bottom = "42vh"
i("dmgDisplayE"+x).style.left = tDisplayX[target]+12 + "px"
i("enemy"+x+"Attack").style.display = "block"
i("enemy"+x+"Attack").style.bottom  = "42vh"
i("enemy"+x+"Attack").style.left = tDisplayX[target] + "px"

var color
var t = target;
color = i("E"+x+"Img").style.filter

i("E"+x+"Img").style.filter += "brightness(133%)";
i("E"+x+"Img").style.filter += "saturate(200%)";
i("E"+x+"Img").style.top = "20vh";
setTimeout(function(){ i("E"+x+"Img").style.top = "13vh"; i("E"+x+"Img").style.filter = "brightness(100%)"; i("E"+x+"Img").style.filter += "saturate(100%)"; i("E"+x+"Img").style.filter += color; i("P"+t+"Img").style.filter = "hue-rotate(0)"; i("P"+t+"Img").style.filter += "saturate(100%)"; i("dmgDisplayE"+x).style.display = "none"},750)
i("P"+target+"Img").style.filter = "hue-rotate(212%)";
i("P"+target+"Img").style.filter += "saturate(600%)";



if (dmg < 0) dmg = 0;

party[target].Hp = (party[target].Hp-dmg);
if(party[target].Hp <= 0) {party[target].Hp = 0;
deathCount++
if(target === 0) {setTimeout(function(){i('p1display').style.visibility = "hidden";
i('p1display').style.display = "none";
},1000)}
if(target === 1) {setTimeout(function(){i('p2display').style.visibility = "hidden"
i('p2display').style.display = "none"
},1000)}
if(target === 2) {setTimeout(function(){i('p3display').style.visibility = "hidden";
i('p3display').style.display = "none"
},1000)}
if(target === 3) {setTimeout(function(){i('p4display').style.visibility = "hidden"
i('p4display').style.display = "none"
},1000)}
        i("confirmTurn_ATBProgress"+tar[target]).style.visibility = "hidden"; 
        
    if (deathCount===4) {
    i("HPDamage").style.width = party[target].Hp/party[target].HpMax*100+"%";
    i("HPDamageTwo").style.width = party[target].Hp/party[target].HpMax*100+"%";
    i("HPDamageThree").style.width = party[target].Hp/party[target].HpMax*100+"%";
    i("HPDamageFour").style.width = party[target].Hp/party[target].HpMax*100+"%";
    end = true;
    startOver()
 
}

}
  
if (target === 0) {i("HPDamage").style.width = party[target].Hp/party[target].HpMax*100+"%";}
if (target === 1) {i("HPDamageTwo").style.width = party[target].Hp/party[target].HpMax*100+"%";}
if (target === 2) {i("HPDamageThree").style.width = party[target].Hp/party[target].HpMax*100+"%";}
if (target === 3) {i("HPDamageFour").style.width = party[target].Hp/party[target].HpMax*100+"%";}
alert(enemy[x].Name+" attacks Target: "+party[target].Name+"\nDamage: "+dmg);
i("p"+target+"name").innerHTML = pcName(target);
if (party[target].Hp === 0){

    console.error(party[target].Name+" dies.");
 //   clearInterval(interval[[mySpd[target]]])
    

}
}, 101) 

}

function startOver(){
   i("loading2").style.transition = "0s";
   i("loading").style.transition = "0s";
   i("loading").style.transform = "rotateY(0deg)";
   i("loading").style.filter = "hue-rotate(0deg)";

    setTimeout(function(){i("menuScreen").style.display = "block";
   
i("loading2").style.left = "0vw";
     end = false;
    i(myATB1).style.visibility = "hidden";
    i(myATB2).style.visibility = "hidden";
    i(myATB3).style.visibility = "hidden";
    i(myATB4).style.visibility = "hidden";
       
     //   clearInterval(interval[[mySpd[0]]]);
    //    clearInterval(interval[[mySpd[1]]]);
    //    clearInterval(interval[[mySpd[2]]]);
    //  clearInterval(interval[[mySpd[3]]]);
        
        clearInterval(interval[[mySpd_E[0]]]);
        clearInterval(interval[[mySpd_E[1]]]);
        clearInterval(interval[[mySpd_E[2]]]);
        clearInterval(interval[[mySpd_E[3]]]);
    stopATB();

for (o = 0; o < 4; o++) {
 enemy[o] = newNpcFromList(Math.floor(Math.random()*8)); 
 enemy[o].Hp = enemy[o].HpMax;
 
 
//party[o].Hp += party[o].HpMax
//if (party[o].Hp >= party[o].HpMax) party[o].Hp = party[o].HpMax
 
    

        i('p'+(o+1)+'display').style.visibility = "visible";
        i('p'+(o+1)+'display').style.display = "block";
        i('P'+(o)+'Img').style.visibility = "visible";
        i('P'+(o)+'Img').style.display = "block";
        i('p'+(o+1)+'display').style.visibility = "visible";
        i('p'+(o+1)+'display').style.display = "block";
        
        i('atbE'+(o+1)+'display').style.visibility = "visible";
        i('atbE'+(o+1)+'display').style.display = "block";
       i('hpE'+(o)+'display').style.visibility = "visible";
        i('hpE'+(o)+'display').style.display = "block";
    i("E"+o+"Img").style.transition = "";
    i("E"+o+"Img").style.display = "block";
    i("E"+o+"Img").style.viaibility = "visible";
    i("E"+o+"Img").style.height = "75px";
    i("E"+o+"Img").style.opacity = "1";
    i("E"+o+"Img").style.transform = "rotateY(0deg)";
        }
        
        
    },1750)
        clearInterval(interval[[mySpd[0]]]);
        clearInterval(interval[[mySpd[1]]]);
        clearInterval(interval[[mySpd[2]]]);
        clearInterval(interval[[mySpd[3]]]);
        
        //clearInterval(interval[[mySpd_E[0]]]);
      //  clearInterval(interval[[mySpd_E[1]]]);
      //  clearInterval(interval[[mySpd_E[2]]]);
       // clearInterval(interval[[mySpd_E[3]]]);
        
        deathCount = 0;
        enemyGroup = 3;
        partyGroup = 3;}
        
var deathCount;
deathCount = 0;
/*================================================/

              Active Time Battle Module
              - Runs the ATB interval
              - Tracks turns and rounds
              

/================================================*/
var mySpd = [mySpd1, mySpd2, mySpd3, mySpd4];
var mySpd1 = "ATBProgress";
var mySpd2 = "ATBProgressTwo";
var mySpd3 = "ATBProgressThree";
var mySpd4 = "ATBProgressFour";

var myATB = [myATB1, myATB2, myATB3, myATB4];
var myATB1 = "confirmTurn_ATBProgress";
var myATB2 = "confirmTurn_ATBProgressTwo";
var myATB3 = "confirmTurn_ATBProgressThree";
var myATB4 = "confirmTurn_ATBProgressFour";

var mySpd_E = ["ATBProgress_EOne","ATBProgress_ETwo",
"ATBProgress_EThree","ATBProgress_EFour"]

var speed = [party[0].Spd, party[1].Spd, party[2].Spd, party[3].Spd];
var speed1 = party[0].Spd;
var speed2 = party[1].Spd;
var speed3 = party[2].Spd;
var speed4 = party[3].Spd;

var speedE = []
for (x = 0; x <= enemyGroup; x++){
    speedE[x] = enemy[x].Spd;
}
//Code Inspired By the SoloLearn Account's Car Race Code, rebuilt as a ATB module for my Dungeon Battler
var whoseTurn, Speed, Progress;
var turn = 0;
var round = 0;
var interval = {};
function initMovement(spdBar, speed) {
    
   /* document.getElementById("systemDebugDisplay").style.display = "block";
    document.getElementById("systemDebugDisplay").innerHTML = turn + " turns have passed in Round " + round;*/
    var spdObj = document.getElementById(spdBar);
    var progress = 0;
    interval[spdBar] = setInterval(function()
    {
        progress += speed/100;
       if(spdObj) {spdObj.style.width = progress+"%";}
        
        if(progress > 100) //finish
        {       progress = 0;
                clearInterval(interval[spdBar]);
                whoseTurn = spdBar;
                Speed = speed;
                Progress = progress;
        if(!mySpd_E.includes(spdBar))     { document.getElementById("confirmTurn_"+spdBar).style.visibility = "visible";     }
                
        if (mySpd_E.includes(whoseTurn)){
//Enemy Attacks if it is its turn
          for (x = 0; x<=3; x++){
        if(whoseTurn === mySpd_E[x]) {
        if ((!enemy[x])||(enemy[x].Hp <= 0)) {} else { confirmTurn(mySpd_E[x], speedE[x]);}
    }}
    } else { 
//The turn count increases if its not the enemy's turn 
//or the round count increases if you have taken as 
//many attacks as you have party members.
//Checks to see if the enemy has HP, stops ATB for that enemy if not    
    turn++; if (turn===partyGroup) {turn=0;                           
             for (x = 0; x>=speedE.length; x++){
                 if(enemy[x].Hp <= 0){   
             clearInterval(interval[mySpd_E[x]]); }
             else if (x ==5 ){}else {  }
             }
    round++; } }
                 } else {
                for (x = 0; x>=3; x++){
                if(party[x].Hp <= 0){
            clearInterval(interval[mySpd[x]]); }     
                                       }
                        }
    },10);
}

var mySpd = [mySpd1, mySpd2, mySpd3, mySpd4];
var mySpd1 = "ATBProgress";
var mySpd2 = "ATBProgressTwo";
var mySpd3 = "ATBProgressThree";
var mySpd4 = "ATBProgressFour";

var mySpd_E = ["ATBProgress_EOne","ATBProgress_ETwo",
"ATBProgress_EThree","ATBProgress_EFour"]

var speed = [party[0].Spd, party[1].Spd, party[2].Spd, party[3].Spd];
var speed1 = party[0].Spd;
var speed2 = party[1].Spd;
var speed3 = party[2].Spd;
var speed4 = party[3].Spd;

var speedE = []
for (x = 0; x <= enemyGroup; x++){
    speedE[x] = enemy[x].Spd;
}
function startATB(){
 speedE = []
for (x = 0; x <= enemyGroup; x++){
    speedE[x] = enemy[x].Spd;
}
    initMovement("ATBProgress", speed1);
    initMovement("ATBProgressTwo", speed2);
    initMovement("ATBProgressThree", speed3);
    initMovement("ATBProgressFour", speed4);
    for(x = 0; x <= speedE.length; x++){
    initMovement(mySpd_E[x], speedE[x]);}
}
function stopATB() {
for (var o in interval){
    clearInterval(interval[o]);
     }
    
}
function confirmTurn(spdBar, speed) 
    {
    for (e in enemy) {
    if (spdBar === mySpd_E[e]){
    targetAttack(e);}
    }
   if(document.getElementById(spdBar)){ document.getElementById(spdBar).style.width = 0;}
if(!mySpd_E.includes(spdBar)){ document.getElementById("confirmTurn_"+spdBar).style.visibility = "hidden";} 
if(mySpd_E.includes(spdBar)){
   setTimeout(function() { initMovement(spdBar, speed)}, 1500);
    }}
    
    //Kirk Schafer Commented:
    /*@Russel Reeder - It's an average-ish tablet with recent OS but the system-on-chip is in some way custom / transitional and does not support some assembly opcodes -- so I am locked by my ROM maker at a compatible webview (old) inside Sololearn (fine outside). This makes for some amusing disparities where I can (or can't) do things in a way that doesn't match up with my OS security model, so when I report issues in codes, I try to be very careful to check that they are issues other older model mobiles will also have.

Here's a polyfill for includes, just fyi:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes#Polyfill
*/

//Thanks Kirk! And MDN.
    if (!Array.prototype.includes) { Object.defineProperty(Array.prototype, 'includes', { value: function(searchElement, fromIndex) { if (this == null) { throw new TypeError('"this" is null or not defined'); }
     // 1. Let O be ? ToObject(this value).
     var o = Object(this); 
    // 2. Let len be ? ToLength(?) Get(O, "length")).
    var len = o.length >>> 0; 
    // 3. If len is 0, return false. 
    if (len === 0) { return false; } 
    // 4. Let n be ? ToInteger(fromIndex). 
    // (If fromIndex is undefined, this step produces the value 0.) 
    var n = fromIndex | 0; // 5. If n ≥ 0, then // a. Let k be n. // 6. Else n < 0, // a. Let k be len + n. // b. If k < 0, let k be 0. 
    var k = Math.max(n >= 0 ? n : len - Math.abs(n), 0); 
    function sameValueZero(x, y) {
     return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y)); } 
    // 7. Repeat, while k < len 
    while (k < len) { 
    // a. Let elementK be the result of ?  Get(O, ! ToString(k)). 
    // b. If SameValueZero(searchElement, elementK) is true, return true. 
    if (sameValueZero(o[k], searchElement)) { 
    return true;} 
    // c. Increase k by 1. 
    k++; } 
    // 8. Return false
     return false; } }); }


     /* 

    #############################################################
      
          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

(   By ~Aryan Maurya Mr.perfect https://amsrportfolio.netlify.app  )

          @@@@@@@@@@    &&&&&&&&&&&&&&&&&&&    %%%%%%%%%%

    #############################################################

*/
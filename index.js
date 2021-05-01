var ClanElement = document.getElementById("Clan");
var MembersElement = document.getElementById("Members");
var LootElement = document.getElementById("Loot");
var BaseElement = document.getElementById("Base");
var RelationsElement = document.getElementById("Relations");
var InfoElement = document.getElementById("Info");

var TestClanIdentity = new Identity();
var TestClanLoot = new Loot();
var TestClanBase = new Base();
var TestClanRelations = new Relations();

var TestClanMemberOne = new Member();
var TestClanMemberTwo = new Member();
var TestClanMemberThree = new Member();
var TestClanMemberFour = new Member();

TestClanIdentity.setName("Cum Gobblins");

TestClanMemberOne.setName("NOT_COLE");
TestClanMemberOne.setSkillSet("Farming");

TestClanMemberTwo.setName("Senpai Hamma");
TestClanMemberTwo.setSkillSet("PvP");

TestClanMemberThree.setName("Opifex");
TestClanMemberThree.setSkillSet("Goofy");

TestClanMemberFour.setName("Lezzapen");
TestClanMemberFour.setSkillSet("Smart");

TestClanIdentity.addMember(TestClanMemberOne);
TestClanIdentity.addMember(TestClanMemberTwo);
TestClanIdentity.addMember(TestClanMemberThree);
TestClanIdentity.addMember(TestClanMemberFour);

var TestClan = new RustCiv(TestClanIdentity,TestClanLoot,TestClanBase,TestClanRelations);

ClanElement.onclick = function() {
  InfoElement.innerHTML = "";
  var clanName = document.createElement("H4");
  clanName.innerHTML = "Clan Name:<input class=\"form-control\" type=\"text\" placeholder=\"" + TestClan.identity.getName() + "\" readonly>";
  InfoElement.appendChild(clanName);
  for (var i = 0; i < TestClan.identity.getMembers().length; i++) {
    var tempMember = document.createElement("Button");
    tempMember.setAttribute("class", "btn btn-outline-primary")
    tempMember.innerHTML = TestClan.identity.getMembers()[i].getName();
    InfoElement.appendChild(tempMember);
  }
}

MembersElement.onclick = function() {
  console.log("the event fired");
  InfoElement.innerHTML = "";
  for (var i = 0; i < TestClan.identity.getMembers().length; i++){
    var newCard = document.createElement("div");
    var newCardBody = document.createElement("div");
    var newCardTitle = document.createElement("h5");
    var newCardProgressBarOutter = document.createElement("div");
    var newCardProgressBarInner = document.createElement("div");
    var newCardMemberSkillButton = document.createElement("button");
    var newCardMemberName = document.createTextNode(TestClan.identity.getMembers()[i].getName() + "\t");
    var newCardMemberSkill = document.createTextNode(TestClan.identity.getMembers()[i].getSkillSet());
    var newCardHealthValue = document.createTextNode(TestClan.identity.getMembers()[i].getHealth().toString());
    newCard.setAttribute("class", "card");
    newCardBody.setAttribute("class", "card-body");
    newCardTitle.setAttribute("class", "card-title");
    newCardProgressBarOutter.setAttribute("class", "progress");
    newCardProgressBarInner.setAttribute("class", "progress-bar");
    newCardMemberSkillButton.setAttribute("class", "btn btn-outline-warning");
    newCardProgressBarInner.setAttribute("role", "progressbar");
    newCardProgressBarInner.setAttribute("aria-valuenow", TestClan.identity.getMembers()[i].getHealth().toString());
    newCardProgressBarInner.setAttribute("aria-valuemin", "0");
    newCardProgressBarInner.setAttribute("aria-valuemax", "100");
    newCardProgressBarInner.setAttribute("style", "width:" + TestClan.identity.getMembers()[i].getHealth().toString() + "%;");
    newCardProgressBarInner.appendChild(newCardHealthValue);
    newCard.appendChild(newCardBody);
    newCardBody.appendChild(newCardTitle);
    newCardTitle.appendChild(newCardMemberName);
    newCardTitle.appendChild(newCardMemberSkillButton);
    newCardMemberSkillButton.appendChild(newCardMemberSkill);
    newCardProgressBarOutter.appendChild(newCardProgressBarInner);
    newCardBody.appendChild(newCardProgressBarOutter);
    InfoElement.appendChild(newCard);
  }
}

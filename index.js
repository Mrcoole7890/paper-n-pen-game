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

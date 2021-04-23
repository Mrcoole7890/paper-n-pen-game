function RustCiv() {
  //Highest level object for a rust clan
  //Every RustCiv should have an Identity,
  //Loot, Base, Relations
}

function Identity() {
  //Each rust civ should have a name,
  //a set of members, and possibly more.
  this.members;
  this.name;

  this.getMembers = function() {
    return this.members;
  };

  this.addMember = function(member) {
    this.members[this.members.length] = member;
  };

  this.removeMember = function(name) {
    for(var i = 0; i < this.members.length; i++){
      if (this.members[i].getName == name) {
        this.members.splice(i,1);
      }
    }
  };

  this.getName = function() {
    return this.name;
  }

  this.setName = function(name) {
    this.name = name;
  }
}

function Member() {
  //Each member should have a skillset, name, and possibly more
  this.skillset;
  this.name;

  this.setSkillSet  = function(skillset) {
    this.skillset = skillset;
  };

  this.getSkillSet = function() {
    return this.skillset;
  };

  this.setName = function(name) {
    this.name = name;
  };

  this.getName = function() {
    return this.name;
  };
}

function Loot() {
  //Raw reasources, comps, weapons, ammor, meds, ect.
  this.rawReasources; // 2d array of reasources names and their quantity
  this.componets; // 2d array of componet names and their quantity
  this.weapons; // array of weapon objects
  this.ammor; // array of ammor objects
  this.meds; // 2d array of meds and their quantity

  this.getRawResources = function() {return this.rawReasources;}
  this.getComponets = function() {return this.componets;}
  this.getWeapons = function() {return this.weapons;}
  this.getAmmor = function() {return this.ammor;}
  this.getMeds = function() {return this.meds;}

  //ToDo: implement these
  this.addRawResources = function(nameOfResource, quantity) {}
  this.addComponets = function(nameOfComponet, quantity) {}
  this.addWeapon = function(weapon) {}
  this.addAmmor = function(ammor) {}
  this.addMeds = function(nameOfMeds, quantity) {}

  //ToDo: implement these
  this.removeRawResources = function(nameOfResource, quantity) {}
  this.removeComponets = function(nameOfComponet, quantity) {}
  this.removeWeapon = function(idOfWeapon) {}
  this.removeMeds = function(nameOfMeds, quantity) {}
  this.removeAmmor = function(idOfAmmor) {}

}

function Base() {
  //Base type, size, storage
  this.type;
  this.size;
  this.storage;

  //ToDo: implement these
  this.getType = function() {}
  this.getSize = function() {}
  this.getStorage = function() {}

  //ToDo: implement these
  this.setType = function() {}
  this.setSize = function() {}
  this.getStorage = function() {}
}

function Relations() {
  //relations ships with other clans
  this.clans;
}

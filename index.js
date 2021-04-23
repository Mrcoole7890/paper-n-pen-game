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
  this.addRawResources = function(nameOfResource, quantity) {
    for(var i = 0; i < this.rawReasources.length; i++){
      if (this.rawReasources[i][0] == nameOfResource) {
          this.rawReasources[i][1] += quantity;
          return;
      }
    }
    this.rawReasources.push([nameOfResource, quantity]);
  };
  this.addComponets = function(nameOfComponet, quantity) {
    for(var i = 0; i < this.componets.length; i++){
      if (this.componets[i][0] == nameOfResource) {
          this.componets[i][1] += quantity;
          return;
      }
    }
    this.componets.push([nameOfResource, quantity]);
  };
  this.addWeapon = function(weapon) {this.weapons.push(weapon)};
  this.addAmmor = function(ammor) {this.ammor.push(ammor)};
  this.addMeds = function(nameOfMeds, quantity) {
    for(var i = 0; i < this.meds.length; i++){
      if (this.meds[i][0] == nameOfResource) {
          this.meds[i][1] += quantity;
          return;
      }
    }
    this.meds.push([nameOfResource, quantity]);
  }

  //ToDo: implement these
  this.removeRawResources = function(nameOfResource, quantity) {
    for(var i = 0; i < this.meds.length; i++){
      if (this.meds[i][0] == nameOfResource) {
          if( this.meds[i][1] - quantity < 0)
              return "Not Enough" + nameOfResource;
          this.med[i][1] -= quantity;
          return;
      }
    }
    return "No " + nameOfResource + "ready";
  }
  this.removeComponets = function(nameOfComponet, quantity) {
    for(var i = 0; i < this.componets.length; i++){
      if (this.componets[i][0] == nameOfComponet) {
          if( this.componets[i][1] - quantity < 0)
              return "Not Enough" + nameOfComponet;
          this.componets[i][1] -= quantity;
          return;
      }
    }
    return "No " + nameOfComponet + "ready";
  }
  this.removeWeapon = function(idOfWeapon) {
    for(var i = 0; i < this.weapons.length; i++){
      if (this.weapons[i].getID() == idOfWeapon) {
        this.weapons.splice(i,1);
        return;
      }
    }
    return "Weapon id:" + idOfWeapon + "not found";
  }
  this.removeMeds = function(nameOfMeds, quantity) {
    for(var i = 0; i < this.meds.length; i++){
      if (this.meds[i][0] == nameOfMeds) {
          if( this.componets[i][1] - quantity < 0)
              return "Not Enough" + nameOfMeds;
          this.meds[i][1] -= quantity;
          return;
      }
    }
    return "No " + nameOfMeds + "ready";
  }
  this.removeAmmor = function(idOfAmmor) {
    for(var i = 0; i < this.ammor.length; i++){
      if (this.ammor[i].getID() == idOfWeapon) {
        this.ammor.splice(i,1);
        return;
      }
    }
    return "Ammor id:" + idOfAmmor + "not found";
  }
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
  this.clans; //List Of Clans and their accociated feeling towards this clan
}

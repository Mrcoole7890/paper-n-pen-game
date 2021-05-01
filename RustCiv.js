function RustCiv(identityObj, lootObj, baseObj, relationsObj) {
  //Highest level object for a rust clan
  //Every RustCiv should have an Identity,
  //Loot, Base, Relations

  this.identity = identityObj;
  this.loot = lootObj;
  this.base = baseObj;
  this.relations = relationsObj;

}

function Identity() {
  //Each rust civ should have a name,
  //a set of members, and possibly more.
  this.members = [];
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
  this.health = 100; // Default should be 100
  this.armmor = "none"; // All humans are born naked
  this.weapon = "none"; // Unarmed

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

  this.getHealth = function() {
    return this.health;
  };

  this.setHealth = function(newHealth) {
    if (newHealth > 0) {
      this.health = newHealth;
      return true;
    }
    else return false;
  };

  this.getWeapon = function() {
    return this.weapon;
  };

  this.setWeapon = function(newWeapon) {
    if (this.weapon == "none") {
      this.weapon = newWeapon;
      return true;
    }
    else return false;
  };

  this.getAmmor = function() {
    return this.ammor;
  }

  this.setAmmor = function(newAmmor) {
    if (this.ammor == "none") {
      this.ammor = newAmmor;
      return true;
    }
    else return false;
  }
}

function Loot() {
  //Raw reasources, comps, weapons, ammor, meds, ect.
  this.rawReasources = []; // 2d array of reasources names and their quantity
  this.componets = []; // 2d array of componet names and their quantity
  this.weapons = []; // array of weapon objects
  this.ammor = []; // array of ammor objects
  this.meds = []; // 2d array of meds and their quantity

  this.getRawResources = function() {return this.rawReasources;}
  this.getComponets = function() {return this.componets;}
  this.getWeapons = function() {return this.weapons;}
  this.getAmmor = function() {return this.ammor;}
  this.getMeds = function() {return this.meds;}

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

  this.getType = function() {
    return this.type;
  }
  this.getSize = function() {
    return this.size;
  }
  this.getStorage = function() {
    return this.storage;
  }

  this.setType = function(type) {
    this.type = type;
  }
  this.setSize = function(size) {
    this.size = size;
  }
  this.getStorage = function(storage) {
    this.storage = storage;
  }
}

function Relations() {
  //relations ships with other clans
  this.clans; //List Of Clans and their accociated feeling towards this clan
}

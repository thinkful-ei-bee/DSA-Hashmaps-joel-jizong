const HashMap = require('./hashMap');

function main() {
  // 1>)
  let hm = new HashMap;

  hm.set("Hobbit", "Bilbo");
  //console.log('capacity: ' + hm._capacity);
  hm.set("Hobbit", "Frodo");
  //console.log('capacity: ' + hm._capacity);
  hm.set("Wizard", "Gandolf");
  //console.log('capacity: ' + hm._capacity);
  hm.set("Human", "Aragon");
  //console.log('capacity: ' + hm._capacity);
  hm.set("Elf", "Legolas");
  //console.log('capacity: ' + hm._capacity);
  hm.set("Maiar", "The Necromancer");
  //console.log('capacity: ' + hm._capacity);
  hm.set("Maiar", "Sauron");
  //console.log('capacity: ' + hm._capacity);
  hm.set("RingBearer", "Gollum");
  //console.log('capacity: ' + hm._capacity);
  hm.set("LadyOfLight", "Galadriel");
  //console.log('capacity: ' + hm._capacity);
  hm.set("HalfElven", "Arwen");
  //console.log('capacity: ' + hm._capacity);
  hm.set("Ent", "Treebeard");
  //console.log('capacity: ' + hm._capacity);

  console.log(hm);

  console.log(hm.get("Maiar"));
  console.log(hm.get("Hobbit"));

  /* 
    The key of Maiar is set twice, it is not a collision. Therefore,
    Maiar changes from "The Necromancer" to "Sauron"
    The key Hobbit is for the same reason. If a key is the same, it is
    meant to be replaced
  */

  console.log(hm._capacity);

  /*
    const loadRatio = (this.length + this._deleted + 1) / this._capacity;
    console.log(loadRatio);
    if (loadRatio > HashMap.MAX_LOAD_RATIO) {
      this._resize(this._capacity * HashMap.SIZE_RATIO);
    }
  */

  /*
    Resizing occurs when loadRatio is greater than MAX_LOAD_RATIO.

    On the 5th call of hm.set() the capicity is increated because
    loadRatio becomes greater than MAX_LOAD_RATIO of 0.5. At that time
    capacity is 8. 8 is multiplied by SIZE_RATIO of 3, increasing capacity to 24.
  */

  
}

main();
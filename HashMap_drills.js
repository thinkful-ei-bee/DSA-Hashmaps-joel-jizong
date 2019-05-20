const HashMap = require('./hashMap');

function main() {
  // 1>)
  const objs = [{"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
{"Wizard": "Gandolf"}, {"Human": "Aragon"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
{"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
{"Ent": "Treebeard"}]

  let hm = new HashMap;

  const lor = new HashMap(initialCapacity=8);
  objs.forEach(obj=>lor.set(Object.keys(obj)[0],obj[Object.keys(obj)]))

  console.log(lor);

  console.log(lor.get("Maiar"));
  console.log(lor.get("Hobbit"));




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
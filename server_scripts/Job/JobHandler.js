/**
 * @class
 * @param {int} id
 * @param {array} next
 * @param {function} tickFunction
 * @param  {function} itemrclickfunction
 *
 */
class job {
  constructor(id, next, tickFunction, itemrclickfunction) {
    this.id = id;
    this.next = next;
    this.tickFunction = tickFunction;
    this.itemRclickFunction = itemrclickfunction;
  }
  Upgrade(index, player) {
    player.persistentData.job = setJob(next[index]);
  }
}

PlayerEvents.tick((event) => {
  event.player.persistentData.job.tickFunction(event);
});

ItemEvents.rightClicked((event) => {
  event.player.persistentData.job.itemRclickFunction(event);
});

let a = new job();

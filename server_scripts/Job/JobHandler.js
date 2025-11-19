function getJob(id) {
	let data = JsonIO.read(`kkubejs/server_scripts/Job/jobs/${id}.json`.replace(/[^{}]/, "").replace("literal", ""))
	let tickFunction = new Function("event", data.tickfn)
	let itemRclickFunction = new Function("event", data.rclick)
	let next = data.next
	return new job(id, next, tickFunction, itemRclickFunction)
}

function findJob(player) {
	return getJob(player.persistentData.job)
}
/**
 * @class
 * @param {int} id
 * @param {array} next
 * @param {function} tickFunction
 * @param  {function} itemrclickfunction
 *
 */
function job(id, next, tickFunction, itemrclickfunction) {
	this.id = id;
	this.next = next;
	this.tickFunction = tickFunction;
	this.rclickFunction = itemrclickfunction;

	this.Upgrade = function(index, player) {
		player.persistentData.job = getJob(this.next[index]);
	}
}

PlayerEvents.tick((event) => {
	console.log(findJob(event.player).tickFunction(event))
});

ItemEvents.rightClicked((event) => {
	console.log(findJob(event.player).rclickFunction(event))

});

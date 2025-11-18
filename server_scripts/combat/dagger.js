let dagger = function(event) {
	event.player.persistentData.block = 5
	event.player.cooldowns.addCooldown(event.item, 10)
}

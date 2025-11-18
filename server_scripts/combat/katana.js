let katana = {}
/**
 * @param {Internal.ItemClickedEventJS} event
 */
katana.rclick = function(event) {
	event.player.persistentData.block = 10
	event.player.persistentData.weapon = "katana"
	event.player.cooldowns.addCooldown(event.item, 60)
	if (event.getEntity().crouching == true && event.item.nbt.get("AbsorbedSpell") != "none") {
		event.entity.getName
		event.level.runCommandSilent((`cast ${event.entity.getName()} ${event.item.nbt.get("AbsorbedSpell").asString}`).replace("literal", "").replace("{", "").replace("}", ""))
		event.item.nbt.merge({ "AbsorbedSpell": "none" })
	}
}


/**
 *  @param {Internal.LivingEntityHurtEventJS} event
 */
katana.block = function(event) {
	console.info(event.getSource().getType())
	if (event.getSource().getType() == "mob" || event.getSource().getType() == "player") {
		event.source.getActual().attack(event.damage / 2)
		event.cancel()

	}
	if (event.getSource().getType() == "arrow") {
		event.cancel()
	}
	if (/.+magic/.test(event.getSource().getType())) {
		event.entity.getMainHandItem().nbt.merge({ "AbsorbedSpell": event.source.getActual().persistentData.LastSpell })
		console.info("Stored a Spell")
		console.info(event.source.getActual().getName())
		console.info(event.entity.getMainHandItem().nbt.get("AbsorbedSpell"))
	}
}

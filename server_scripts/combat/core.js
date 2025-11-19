ItemEvents.rightClicked((event) => {
	event.player.persistentData.job = getJob("test").id
	if (event.item.hasTag("combat:katana")) katana.rclick(event);
});

EntityEvents.hurt("minecraft:player", (event) => {
	if (event.player.persistentData.block > 0) {
		if (event.player.persistentData.weapon == "katana") {
			katana.block(event);
		}
	}
});

PlayerEvents.tick((event) => {
	if (event.player.persistentData.block > 0) {
		event.player.persistentData.block -= 1;
	}
});

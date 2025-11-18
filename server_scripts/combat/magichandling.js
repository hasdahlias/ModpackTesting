EntityEvents.spellOnCast(event => {
	let spellid = event.getSpell().spellId
	event.entity.persistentData.LastSpell = spellid
})

EntityEvents.spellPreCast(event => {
	let spellid = event.getSpell().spellId
	event.entity.persistentData.LastSpell = spellid
})

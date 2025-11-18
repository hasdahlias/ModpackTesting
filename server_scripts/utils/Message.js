let $TextAPI = Java.loadClass('net.tysontheember.emberstextapi.EmbersTextAPI')
let $ImmersiveMessage = Java.loadClass('net.tysontheember.emberstextapi.immersivemessages.api.ImmersiveMessage')
let $TextAnchor = Java.loadClass('net.tysontheember.emberstextapi.immersivemessages.api.TextAnchor')
/**
 * @param {}
 */
let ConstructMessage = function(text, duration, anchor, background) {
	return new $ImmersiveMessage(text, duration).anchor(anchor).background(background)
}

let SendMessage = function(player, msg) {
	$TextAPI.sendMessage(player, msg)
}

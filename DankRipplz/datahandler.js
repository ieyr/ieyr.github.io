var Firebase = require("firebase")

var ref = new Firebase('https://dankripplz.firebaseio.com')
var count = 0
ref.child('totaldanks').once('value', function(snapshot){
	count = snapshot.val()
	ref.on('child_added', function(snapshot){
	if(snapshot.key() != 'totaldanks' && snapshot.key() != 'presence'){
		ref.child(snapshot.key()).remove()
		count++
	}
	ref.child('totaldanks').set(count)
})
})


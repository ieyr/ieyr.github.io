var ref = new Firebase('https://rohaniyer.firebaseio.com')
ref.child('porfolio').on('child_added', function(snapshot){
	var value = snapshot.val()
	var name = value["name"]
	var link = value["link"]
	var desc = value["description"]
	var prize = value["prize"]
	console.log(name)
	//$('#features').append('<div id="project"><div id="projecttitle"><a href="' + link + '">' + name+ '</a></div></div>')
	$('#features').append('<div id="project"><div id="projecttitle"><a href="'+ link +'">' + name + '</a></div><p id="text">' + desc + ' ' + prize + '</p><a href="' + link + '"><button id="goToProject">LEARN MORE</button></a>	</div>')
})
var ref = new Firebase('https://rohaniyer.firebaseio.com')
ref.child('porfolio').on('child_added', function(snapshot){
	var value = snapshot.val()
	var name = value["name"]
	var link = value["link"]
	var desc = value["description"]
	var prize = value["prize"]
	var color = value["color"]
	console.log(name)
	//$('#features').append('<div id="project"><div id="projecttitle"><a href="' + link + '">' + name+ '</a></div></div>')
	$('#features').append('<div id="project" class="' + color + '"><div id="projecttitle"><a href="'+ link +'">' + name + '</a></div><p id="text">' + desc + ' ' + prize + '</p><div class="buttonDiv"><a href="' + link + '"><button id="goToProject">LEARN MORE</button></a></div></div>')
})


// Handle Scrolling to show Nav
$(window).scroll(function(event){
	$(document.body).clearQueue()
	var scrollHeight = $(document).scrollTop()
    if(scrollHeight > 10){
    	$('#nav').addClass('scrolled')

    }else{
    	$('#nav').removeClass('scrolled')
    }
});

//Handle Resize For Hamburger Menu
$( window ).resize(function() {
  	$( "#log" ).append( "<div>Handler for .resize() called.</div>" );
  	if(window.innerWidth < 800){
  		showHamburger()
  	}else{
  		hideHamburger()
  	}
});

function showHamburger(){
	$('#navcontent').empty()
	$('#navcontent').append('<span id="ri" onclick="scrollToTop()">RI</span><a onclick="showMenu()" class="hamburger"><i class="icon-menu"></i></a>')
}

function hideHamburger(){
	$('#navcontent').empty()

	$('#navcontent').append('<span id="ri" onclick="scrollToTop()">RI</span><a id="contactlink" class="far">CONTACT</a><a id="portlink">PORTFOLIO</a><a id="aboutlink">ABOUT</a>')
}

function showMenu(){

}

function scrollToTop(){
	$(document.body).clearQueue()
	$('html, body').animate({
	    scrollTop: $(document.body).offset().top
	}, 1000)
}


function scrollContact(){
	$(document.body).clearQueue()
	$('html, body').animate({
	    scrollTop: $("#contact").offset().top-70
	}, 1000)
}

function scrollAbout(){
	$(document.body).clearQueue()
	$('html, body').animate({
	    scrollTop: $("#about").offset().top-70
	}, 1000)
}

function scrollPortfolio(){
	$(document.body).clearQueue()
	$('html, body').animate({
	    scrollTop: $("#features").offset().top-70
	}, 1000)
}

function scrollPortfolio(){
	$(document.body).clearQueue()
	$('html, body').animate({
	    scrollTop: $("#contact").offset().top-70
	}, 1000)
}





$( document ).ready(function() {
    $('#portlink').click(function(e){
    	scrollPortfolio()
    })
    $('#aboutlink').click(function(e){
    	scrollAbout()
    })

    $('#contactlink').click(function(e){
    	scrollContact()
    })

    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
     	if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
      		$("html,body").stop();
     	}
    })

    if(window.innerWidth < 600){
    	showHamburger()
    }else{
    	hideHamburger()
    }
    
});

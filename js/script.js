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
	window.scrollTo(0,$(document.body).scrollTop());
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

	$('#navcontent').append('<span id="ri" onclick="scrollToTop()">RI</span><a onclick="scrollContact()" class="far">CONTACT</a><a onclick="scrollPortfolio()">PORTFOLIO</a><a onclick="scrollAbout()">ABOUT</a>')
}

function showMenu(){
	console.log('show menu')


}
function closeMenu(){
	console.log('close menu')
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


function isMobile() {
  try{ document.createEvent("TouchEvent"); return true; }
  catch(e){ return false; }
}


$('#portlink').click(function(e){
	scrollPortfolio()
})
$('#aboutlink').click(function(e){
	scrollAbout()
})

$('#contactlink').click(function(e){
	scrollContact()
})
$( document ).ready(function() {


	

	$('body').click(function(evt){

	      if(evt.target.id == "#navcontent")
	         return;
	      //For descendants of menu_content being clicked, remove this check if you do not want to put constraint on descendants.
	      if($(evt.target).closest('#navcontent').length)
	         return;

	      closeMenu()
	      //Do processing of click event here for every element except with id menu_content

	});
    $('body,html').bind('scroll mousedown wheel DOMMouseScroll mousewheel keyup', function(e){
     	if ( e.which > 0 || e.type == "mousedown" || e.type == "mousewheel"){
      		$("html,body").stop();
     	}
    })

    if(isMobile()){
    	showHamburger()
    }else{
	    if(window.innerWidth < 600){
	    	showHamburger()
	    }else{
	    	hideHamburger()
	    }
	}

});

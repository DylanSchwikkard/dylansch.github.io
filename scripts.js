$(document).ready(function(){
	var first = false;
	var second = false;
	var third = false;
	var middleLeft;
	var middleMiddle;
	var rightLeft;

	$( "#skill-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: ($('#Skills').offset().top-59) },500);
    });
    
    $( "#profile-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: $('#Profile').offset().top }, 500);
	});
	$( "#edu-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: ($('#Education').offset().top-59) }, 500);
	});
	$( "#project-link" ).click(function( event ) {
		event.preventDefault();
		$("html, body").animate({ scrollTop: ($('#Projects').offset().top-59) }, 500);
	});
	$( ".project-tile" ).click(function( event ) {
		 var id = event.target.id;
		 var i = id.substring(2);
		 var mod = i % 3;
		 
		 if(screen.width < 768){
			if (first == false){
				doMobile(i);
			}
			else{
				undoMobile(i);
			}
			
		}

		 else if(mod == 1)
		 {		
			
			if (first == false){				
				doFirst(i);
			}
			else{
				undoFirst(i);
			}
		 }
		 else if(mod == 2){
			 if (second == false){
				doMiddle(i);
			 }
			 else{
				undoMiddle(i);
			 }
			
		 }

		 else if(mod == 0){
			if (third == false){
				doThird(i);
			 }
			 else{
				undoThird(i);
			 }
		 }
		 
	});

	function hidePrev(i){		
		var counter = 0;
		if ((i%3) == 1){
			counter = i +2;
			while(counter > i)
			{
				if(counter!=i){
					
					$('#pt' +counter).toggle();
				}
				counter=counter-1;
			}
		}
		else if ((i%3) == 2){
			counter = i +1;
			while(counter > (i-2))
			{
				if(counter!=i){
					
					$('#pt' +counter).toggle();
				}
				counter=counter-1;
			}
		}
		else{
			counter = i;
			while(counter > (i-3))
			{
				if(counter!=i){
					
					$('#pt' +counter).toggle();
				}
				counter=counter-1;
			}
		}		
	}

	function showOthers(i){		
		var counter = 0;
		if ((i%3) == 1){
			counter = i +2;
			
			while(counter > i)
			{
				
				if(counter!=i){
					
					$('#pt' +counter).toggle();
				}
				counter=counter-1;
			}
		}
		else if ((i%3) == 2){
			counter = i +1;
			while(counter > (i-2))
			{
				if(counter!=i){
					
					$('#pt' +counter).toggle();
				}
				counter=counter-1;
			}
		}
		else{
			counter = i;
			while(counter > (i-3))
			{
				if(counter!=i){
					
					$('#pt' +counter).toggle();
				}
				counter=counter-1;
			}
		}		
	}

	
	function doFirst(i){
		
		var conWidth = screen.width - Math.round($('#pt1').offset().left) - Math.round($('#pt3').offset().right);
		
		 id = Number(i);
		 var pos = Math.round($('#pt' + id).offset().left);
		 positionLeft = Math.round($('#pt1').offset().left);

			
			
			$('#pt' + (id+1)).animate({
				opacity : 0}, 500
			);
			
			$('#pt' + (id+2)).animate({
				
				opacity : 0}, 500
			);
			
		 
		setTimeout(function() {hidePrev(id);
			
		},500);
		
		setTimeout(function (){$('#pt' + id).addClass('active-project');}, 700);
		$('.project-text#protext'+i).addClass('visible-text');
		setTimeout(function (){$('#pt' + id).addClass('row')}, 700);
		first = true;

	}
	function undoFirst(i){
		$('.project-text#protext'+i).removeClass('visible-text');
		setTimeout(function() {
		 id = Number(i);
		 $('#pt' + (id+1)).animate({
			opacity : 1}, 500
		);		
		$('#pt' + (id+2)).animate({			
			opacity : 1}, 500
		);
		},500);
			
			
		setTimeout(function() {
		showOthers(id);},500);
		
		
		setTimeout(function (){$('#pt' + id).removeClass('active-project');}, 0);
		$('#pt' + id).addClass('shrink-33');
		setTimeout(function (){$('#pt' + id).removeClass('row')}, 0);
		setTimeout(function() { $('#pt' + id).removeClass('shrink-33')}, 500)
		
		first = false;

	}

	function undoMiddle(i){
		$('#pt' + id).removeClass('row');
		$('#pt' + id).addClass('shrink-33');
		$('#pt' + id).removeClass('active-project');
		$('.project-text#protext'+i).removeClass('visible-text');
		
		id = Number(i);
		setTimeout(function() {
			id = Number(i);		
		   showOthers(id);
		},500);
		
		setTimeout(function (){
		$('#pt' + (id-1)).animate({
			left : -middleLeft + "px",
			
		},0);
		$('#pt' + (id)).animate({
			left : -middleLeft + "px"
		},0);
		$('#pt' + (id+1)).animate({
			left : -middleLeft + "px",
			
		},0)}, 500 );

		setTimeout(function (){
				$('#pt' + (id-1)).animate({	
					left : 0 + "px",			
				   	opacity : 1}, 500
			   );	
			   $('#pt' + (id)).animate({
					left:  0 + "px"}, 500
				);
			   $('#pt' + (id+1)).animate({
				   left : 0 + "px",	 			
				   opacity : 1}, 500
			   );


		},500)

		


		
		
		setTimeout(function() { $('#pt' + id).removeClass('shrink-33')}, 500)
		second = false;
	}

	function doThird(i){
		var conWidth = screen.width - Math.round($('#pt1').offset().left) - Math.round($('#pt3').offset().right);
		 id = Number(i);
		 var pos = Math.round($('#pt' + id).offset().left);
		 
		 positionLeft = Math.round($('#pt1').offset().left);
		 
		 rightLeft = pos-positionLeft;
		

			$('#pt' + (id-2)).animate({
				left : "-=" + (pos-positionLeft) +"px",
				opacity : 0
			}, 500
			);
			$('#pt' + (id-1)).animate({
				left : "-=" + (pos-positionLeft) +"px",
				opacity : 0}, 500
			);
			
			$('#pt' + (id)).animate({
				left : "-=" + (pos-positionLeft) +"px",
				
			}, 500
			);
			
		 
		setTimeout(function() {hidePrev(id);
			$('#pt' + id).animate({
				left : "+=" + (pos-positionLeft) +"px"
			},0)
		},500);
		
		setTimeout(function (){$('#pt' + id).addClass('active-project');}, 700);
		$('.project-text#protext'+i).addClass('visible-text');
		setTimeout(function (){$('#pt' + id).addClass('row')}, 700);
		third = true;
	}

	function undoThird(i){
		$('.project-text#protext'+i).removeClass('visible-text');
		$('#pt' + id).removeClass('row');
		$('#pt' + id).addClass('shrink-33');
		$('#pt' + id).removeClass('active-project');

		
		id = Number(i);
		setTimeout(function() {
			id = Number(i);		
		   showOthers(id);
		},500);
		
		setTimeout(function (){
		$('#pt' + (id-1)).animate({
			left : -rightLeft + "px",
			
		},0);
		$('#pt' + (id)).animate({
			left : -rightLeft + "px"
		},0);
		$('#pt' + (id+1)).animate({
			left : -rightLeft + "px",
			
		},0)}, 500 );

		setTimeout(function (){
				$('#pt' + (id-2)).animate({	
					left : 0 + "px",			
				   	opacity : 1}, 500
			   );	
			   $('#pt' + (id-1)).animate({
					left:  0 + "px",
					opacity : 1}, 500
				);
			   $('#pt' + (id)).animate({
				   left : 0 + "px"}, 500
			   );


		},500)

		


		
		
		setTimeout(function() { $('#pt' + id).removeClass('shrink-33')}, 500)
		third = false;
	}

	function doMiddle(i){
		
		var conWidth = screen.width - Math.round($('#pt1').offset().left) - Math.round($('#pt3').offset().right);
		 id = Number(i);
		 var pos = Math.round($('#pt' + id).offset().left);
		 
		 positionLeft = Math.round($('#pt1').offset().left);
		 
		 middleLeft = pos-positionLeft;
		

			$('#pt' + (id-1)).animate({
				left : "-=" + (pos-positionLeft) +"px",
				opacity : 0
			}, 500
			);
			$('#pt' + id).animate({
				left : "-=" + (pos-positionLeft) +"px",
				width: "50px"}, 500
			);
			
			$('#pt' + (id+1)).animate({
				left : "-=" + (pos-positionLeft) +"px",
				opacity : 0
			}, 500
			);
			
		 
		setTimeout(function() {hidePrev(id);
			$('#pt' + id).animate({
				left : "+=" + (pos-positionLeft) +"px"
			},0)
		},500);
		
		setTimeout(function (){$('#pt' + id).addClass('active-project');}, 700);
		$('.project-text#protext'+i).addClass('visible-text');
		setTimeout(function (){$('#pt' + id).addClass('row')}, 700);
		second = true;
		
	}



	$('.navbar-nav>a').on('click', function(){
		$('.navbar-collapse').collapse('hide');
	});


	function doMobile(i){
		
		 var id = Number(i);
		 
		 
		
		$("html, body").animate({ scrollTop: ($('#pt' + id).offset().top-59) },500);
		setTimeout(function (){$('#pt' + id).addClass('active-project');}, 700);
		$('.project-text#protext'+i).addClass('visible-text');
		setTimeout(function (){$('#pt' + id).addClass('row')}, 700);
		first = true;
	}
	function undoMobile(i){
		var id = Number(i);
		 
		 
		
		
		$('#pt' + id).removeClass('active-project');
		
		
		setTimeout(function() { $('.project-text#protext'+i).removeClass('visible-text');
								$('#pt' + id).removeClass('row');  }, 500)
		$('#pt' + id).addClass('shrink-33');
		setTimeout(function() { $('#pt' + id).removeClass('shrink-33')}, 500)
		first = false;

	}

	
	
});
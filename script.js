$(function(){
		$("text").hide();
		$("circle").hide();
		let mousedown=0;
		
		$(".white-tangent").on('mousedown', function(){
			mousedown=1;
			let tangent=$(this).attr("id");
			$("#lyd").attr("src",tangent+".mp3");
			$("#"+tangent).css({fill: "grey"});
			$("#lyd")[0].play();
			$("#"+tangent+"Circle").fadeIn(100).css({fill: 'lightgrey'});
			$("#"+tangent+"Text").fadeIn(100);
			
		});
		
		$(".white-tangent").on('mouseover', function(){
		if(mousedown==1){
			let tangent=$(this).attr("id");
			$("#lyd").attr("src",tangent+".mp3");
			$("#"+tangent).css({fill: "grey"});
			$("#lyd")[0].play();
			$("#"+tangent+"Circle").fadeIn(100).css({fill: 'lightgrey'});
			$("#"+tangent+"Text").fadeIn(100);
			}
		});
		
		$(".white-tangent").on("mouseup", function(){
			mousedown=0;
			let tangent=$(this).attr("id");
			$('#'+tangent).css({fill: "white"});
			$("#lyd")[0].pause();
			$("#lyd")[0].currentTime=0;
			$("#"+tangent+"Circle").fadeOut(100).css({fill: 'lightgrey'});
			$("#"+tangent+"Text").fadeOut(100);
			});		
		
		$(".white-tangent").on("mouseout", function(){
			let tangent=$(this).attr("id");
			$('#'+tangent).css({fill: "white"});
			$("#lyd")[0].pause();
			$("#lyd")[0].currentTime=0;
			$("#"+tangent+"Circle").fadeOut(100).css({fill: 'lightgrey'});
			$("#"+tangent+"Text").fadeOut(100);
			});		
			
			
			
			
		$(".black-tangent").on("mousedown", function(){
			mousedown=1;
			let tangent=$(this).attr("id");
			$("#lyd").attr("src",tangent+".mp3");
			$("#"+tangent).css({fill: "grey"});
			$("#lyd")[0].play();
			$("#"+tangent+"Circle").fadeIn(100).css({fill: 'lightgrey'});
			$("#"+tangent+"Text").fadeIn(100);
		});
		
		$(".black-tangent").on("mouseover", function(){
		if(mousedown==1){
			let tangent=$(this).attr("id");
			$("#lyd").attr("src",tangent+".mp3");
			$("#"+tangent).css({fill: "grey"});
			$("#lyd")[0].play();
			$("#"+tangent+"Circle").fadeIn(100).css({fill: 'lightgrey'});
			$("#"+tangent+"Text").fadeIn(100);
			}
		});
		
		$(".black-tangent").on("mouseup", function(){
			mousedown=0;
			let tangent=$(this).attr("id");
			$('#'+tangent).css({fill: "black"});
			$("#lyd")[0].pause();
			$("#lyd")[0].currentTime=0;
			$("#"+tangent+"Circle").fadeOut(100).css({fill: 'lightgrey'});
			$("#"+tangent+"Text").fadeOut(100);
			});	
			
		$(".black-tangent").on("mouseout", function(){
			let tangent=$(this).attr("id");
			$('#'+tangent).css({fill: "black"});
			$("#lyd")[0].pause();
			$("#lyd")[0].currentTime=0;
			$("#"+tangent+"Circle").fadeOut(100).css({fill: 'lightgrey'});
			$("#"+tangent+"Text").fadeOut(100);
			});	
			

		
	});
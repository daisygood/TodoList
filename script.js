var format = function(text){
	return  "<li class='display unfinished'><input type='checkbox'><span>"+text+"</span><i class = 'glyphicon glyphicon-remove'></i></li>";
}

$(document).ready(function(){
	//add to display
	$('form').submit(function(){
		var text = $('#userinput').val();
		if(text === ""){
			$("#error").text('Please enter your task');
		}else{
			$('#error').text('');
			$('#content').append(format(text));
			$('#userinput').val('');
		}
		return false;
	});
	//check to add complete class
	$(document).on('change','input[type="checkbox"]',function(){
		if(this.checked){
			$(this).parent('li').removeClass('unfinished');
			$(this).parent('li').addClass('finished');

		}else{
			$(this).parent('li').removeClass('finished');
			$(this).parent('li').addClass('unfinished');
		}
	});
	//remove to delete
	$(document).on('click','.glyphicon-remove',function(){
		$(this).parent('li').remove();
	});
	//display completed task
	$('#showCompleted').click(function(){
		$('.finished').show();
		$('.unfinished').hide();
	})
	//display all
	$('#displayAll').click(function(){
		$('.display').show();
	});
	$('#showUnfinished').click(function(){
		$('.finished').hide();
		$('.unfinished').show();
	})

});


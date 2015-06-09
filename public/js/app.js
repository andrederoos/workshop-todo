var todos = {
	create : function() {

	},
	update : function() {

	},
	delete : function() {

	}
}

$(document).ready(function() {
	//get all the todo's we have
	$.get('/api/todos',function (result) {
		
		$.each(result,function (key,value){
			clone = $('.clone').clone();
			
			clone.removeClass('clone')
			clone.find('label').html(value.label);
			clone.attr('data-id',value.id);

			//bind checkbox and delete button

			//and add it to the list
			$('#todo-list').append(clone);
		});
		console.log(result);
	})
})
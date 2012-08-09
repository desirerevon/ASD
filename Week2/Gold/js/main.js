$("#noteForm").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});
	
 // SAVE MY DATA!!

$('#submit').on('click', function saveData(id) {
    var d = new Date();
    var friend = $("#friend").val();
    var important = $("#important").val();
    var reminder = $("#reminder").val();
    var date= $("#date").val();
    var note = $("#note").val();
	var favorite;
    if ($('#favorite').is(":checked")){
	favorite = "Yes";
	}else{
	favorite = "No";
	}
    var item = [
    friend, important, favorite, reminder, date, note];

    //localStorage.setItem(key, item);
    location.reload();
    alert("Note Saved!");
});	

function toggleControls(n) {
    switch (n) {
    case "on":
        $('#noteForm').css('display', 'none');
        $('#clearLink').css('display', 'inline');
        break;
    case "off":
        $('#noteForm').css('display', 'block');
        $('#clearLink').css('display', 'inline');
        $('#list').css('display', 'none');
        break;
    default:
        return false;
    }
}

// GET MY DATA!

$('#displayLink').on('click', function getData() {
	toggleControls("on");
    var getListdiv = $('#list')[0];
    for (var i = 0, j = localStorage.length; i < j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        value = value.split(',');

        $('<div>').attr({
            'class': 'listDiv'
        }).appendTo('#list');
        $('<p>').html('Friend: ' + value[0]).appendTo('.listDiv');
        $('<p>').html('Important: ' + value[1]).appendTo('.listDiv');
        $('<p>').html('Favorite: ' + value[2]).appendTo('.listDiv');
        $('<p>').html('Reminder: ' + value[3]).appendTo('.listDiv');
        $('<p>').html('Date: ' + value[4]).appendTo('.listDiv');
        $('<p>').html('Note: ' + value[5]).appendTo('.listDiv');
		$('<p>').html($('<a>').attr({
            'href': '#',
            'onclick': 'deleteItem(' + key + ');'
        }).html('Delete Note')).appendTo('.listDiv');
        $('<p>').html($('<a>').attr({
            'href': '#',
            'onclick': 'editItem(' + key + ');'
        }).html('Edit Note')).appendTo('.listDiv');

    }
});


// EDIT MY DATA!!

function editItem(id) {
    var itemId = id;
	var value = localStorage.getItem(itemId);
	value = value.split(',');
	toggleControls("off");
    var friend = value[0];
    var important = value[1];
    var reminder = value[2];
    var date = value[3];
    var notes = value[4];
    var feature;
	$('#friend').val(friend);
    $('#important').val(important);
    $('#reminder').val(reminder);
    $('#date').val(date);
    $('#notes').val(notes);
	if ($('#favorite').is(":checked")){
	feature = "Yes";
	}else{
	feature = "No";
	}
	// show edit item button, hide submit button
    var editButton = $('#edit-item-button').css('display', 'block');
    var subresButtons = $('#submit-reset-buttons').css('display', 'none');
    var itemList = $('#list').css('display', 'none');

    // when clicking editItem button
    $('#edit-item').live('click', function clickEdit() {
        var friend = $('#friend').val();
        var important = $('#important').val();
        var reminder = $('#reminder').val();
        var date = $('#date').val();
        var notes = $('#notes').val();
		var favorite;
        if ($('#favorite').is(":checked")){
		favorite = "Yes";
		}else{
		favorite = "No";
		}
        var item = [
    	friend, important, favorite, reminder, date, notes];
     
        localStorage.setItem(itemId, item);           
        location.reload();
        alert("Note Edited!");
        
    });

}


// DELETE AN ITEM

function deleteItem(id) {
    var ask = confirm("Are you sure you want to delete this note?");
    if (ask) {
        localStorage.removeItem(id);
        window.location.reload();
    } else {
        alert("Your note was not removed.");
    }
}


// CLEAR MY DATA!

function clearLocal() {
    if (localStorage.length === 0) {
        alert("There is no data to clear.");
    } else {
        localStorage.clear();
        alert("All notes has been removed from local storage!");
        window.location.reload();
        return false;
    }
}

// LOAD DATA FROM OUTSIDE APP
//STATIC DATA///////////////////////////////////////////////////////////////////////////////////////

//JSON
//Most data is by default dynamic but my vars can change at any time so i set to dynamic
$('#json').bind('click', function(){
	$('#notedata').empty();
	$.ajax({
		async:false,
		url:'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
		for(var i=0, j=response.notes.length; i<j; i++){
	            var jdata = response.notes[i];
	            $(''+
					'<div class="notetitle">'+
					   	'<p>Friend: '+ jdata.friend +'</p>'+
						'<p>Important: '+ jdata.important +'</p>'+
						'<p>Favorite: '+ jdata.favorite +'</p>'+
						'<p>Reminder: '+ jdata.reminder +'</p>'+
						'<p>Date: '+ jdata.date +'</p>'+
						'<p>Notes: '+ jdata.notes +'</p>'+
					'</div>'
				).appendTo('#notedata');
				console.log(response);
			}
		}
	});
	return false;
});



//XML
$('#xml').bind('click', function(){
	$('#notedata').empty();
	$('<p>').html('XML').appendTo('#notedata');
	$.ajax({
		url: 'xhr/data.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(xml){
			$(xml).find("noteBlock").each(function(){
   				var friend     = $(this).find('friend').text();
   				var important  = $(this).find('important').text();
   				var favorite   = $(this).find('favorite').text();
   				var reminder   = $(this).find('reminder').text();
   				var date       = $(this).find('date').text();
   				var notes      = $(this).find('notes').text();
    			$(''+
					'<div class="notetitle">'+
						'<p>Friend: '+ friend +'</p>'+
						'<p>Important: '+ important +'</p>'+
						'<p>Favorite: '+ favorite +'</p>'+
						'<p>Reminder: '+ reminder +'</p>'+
						'<p>Date: '+ date +'</p>'+
						'<p>Notes: '+ notes +'</p>'+
					'</div>'
				).appendTo('#notedata');
				console.log(xml);
			});
		}
	});
	return false;
});


//CSV DATA
$('#csv').bind('click', function(){
	$('#notedata').empty();
	$('<p>').html('CSV').appendTo('#notedata');
	 $.ajax({
        type: "GET",
        url: "xhr/data.csv",
        dataType: "text",
        success: function(data) {
        	var allTextLines = data.split(/\r\n|\n/);
    		var headers = allTextLines[0].split(',');
    		var lines = []; // main array 

			for (var i=1; i<allTextLines.length; i++) {
				data = allTextLines[i].split(',');
				if (data.length == headers.length) {
					var notes = []; // blank array 

					for (var j=0; j<headers.length; j++) {
						notes.push(data[j]); 
					}
					lines.push(notes); 
				}

			}

			for (var m=0; m<lines.length; m++){
				var dnote = lines[m];
			$(''+
					'<div class="notetitle">'+
						'<p>Friend: '+ dnote[0] +'</p>'+
						'<p>Important: '+ dnote[1] +'</p>'+
						'<p>Favorite: '+ dnote[2] +'</p>'+
						'<p>Reminder: '+ dnote[3] +'</p>'+
						'<p>Date: '+ dnote[4] +'</p>'+
						'<p>Notes: '+ dnote[5] +'</p>'+
					'</div>'
				).appendTo('#notedata');
			console.log(lines);	
			}
        }
	});
	return false;
});
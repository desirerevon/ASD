// $("#note").on('pageinit', function(){
// 	function saveNotes(){
// 		 alert("Note Saved");
// 
// 			var nData = $('#noteform');
// 
// 			nData.validate({
// 				invalidHandler: function(form, validator) {},
// 				submitHandler: function() {
// 					
// 					var data = nData.serializeArray();
// 						saveData();
// 				}
// 		});
// 	
// 	};
// 	
//   function saveData(key){
//   		alert("Note Saved!");
// 	 	//If there is no key, this is a brand new item and we need a new key.
// 		if (!key){
// 				var id = Math.floor(Math.random()*100000001);
// 		}else{
// 			//Set the id to the existing key we're editing so that it will save our data.
// 			//The key is the same that's been passed along from the editSubmit event handler
// 			//to the validate function, and the passed here, into the storeData function.
// 			id = key;
// 
// 		}
// 
//          getSelectedRadio();
//          //getCheckboxValue();
//          var item          	    = {};
//          	 item.friend	  	= ["Choose A Friend:", $("#friend").value];
//              item.important 	    = ["How important is this:", importantValue];
//              item.favorite   	= ["Is right friend:", favoriteValue];
//              item.reminder		= ["Reminder:", $("#reminder").value];
//              item.date     		= ["Date:", $("#date").value];
//              item.notes       	= ["Note:", $("#notes").value];
//           //Save data into local storage. Use stringify to convert object to a string(local storage only stores strings). 
//           localStorage.setItem(id, JSON.stringify(item));
// 			
// 			
// 	}
// 	
// var displayLink = $('#displayLink');
// displayLink.on("click", getData);
// 
// var clearLink = $('#clearLink');
// clearLink.on("click", clearLocal);
// 
// var save = $("#save");
// save.on("click", storeData);
// 
// });
// 	
// 	
// // 		
// // 		
// // 		
// //      //Variable Defaults
// //      var friendType = ["--Choose Friend--", "Girlfriend", "Boyfriend", "Fiance", "Friend", "Sibling", "Parent", "Other"];
// //      var importantValue;
// //      var favoriteValue = "No";
// //      var errMsg = $("#errors");
// // 
// //  
// //      //Create select field element and populate with options.
// //     var makeField= function() {
// //          var formTag = $("form"),
// //              selectLi = $('<select>'),
// //              makeSelect = $('<select>');
// //              makeSelect.attr("id", "friends");
// //           for(var i=0, j=friendType.each; i<j; i++){
// //               var makeOption = $('option');
// //               var optText = friendType[i]; //Saying this is not defined, causing error in local storage
// //               makeOption.attr("value", optText);
// //               makeOption.text = (optText);
// //               makeSelect.append(makeOption);    
// //           }
// //       };
// //   	
//   	//Find value of selected radio button.
// 		var getSelectedRadio = function(){
// 				return($('input:radio[name="important"]:checked').val());
// 
// 			};
// 
// //   	//Get Selected CheckBox Value
// // //  function getCheckboxValue() {
// // //          if(ge("fav").checked){
// // //            favoriteValue = ge("fav").value;
// // //          } else {
// // //              favoriteValue = "No";
// // //          }
// // //      }
// //      
//       //Turn on and off form by use of case during getData()
//       function toggleControls(n) {
//          switch(n){
//              case "on":
//              	 $("#noteform").hide();
//                  $("#clearLink").show();
//                  $("#displayLink").hide();
//                  $("#addNew").show();
//                  break;
//              case "off":
//              	 $("#noteform").show();
//                  $("#clearLink").show();
//                  $("#displayLink").show();
//                  $("#addNew").hide();//addNew
//                  $("#items").hide();
//                  break;
//              default:
//                  return false;
//          }
//      }
//      
// //   //Create visiable storage
// //   //getData 
//   
// 	 	var getData = function(){
//  				toggleControls("on");
// 				if(localStorage.length === 0){
//  						alert("There is no data in Local Storage so default data was added.");
// 						autoFillData();
// }         
// 
// 
//         var makeDiv = $("<div>");
//           makeDiv.attr("id", "items");
//           var makeList = $("<ul>");
//           makeDiv.append(makeList);
//           document.body.appendChild(createDiv);
// 		  // Set 'items' display
//           $("#notes").show();
//          	 for(var i = 0, len=localStorage.each; i < len; i++){
//              	var makeLi = $("<li>");
//              	var linksLi = $("<li>");
//              	makeList.append(makeLi);
//              	var key = localStorage.key(i);
//              	var value = localStorage.getItem(key);
// //Convert the string from local storage value back to an object using JSON.parse()
//              	var obj = JSON.parse(value);
//              	var makeSubList = $("<ul>");
//              	makeLi.append(makeSubList);
// // // //getImage(obj.friend[1], makeSubList);
//              for(var n in obj){
//              	var makeSubLi = $("<li>");
//              	makeSubList.append(makeSubLi);
//              	var optSubText = obj[n][0] + " " + obj[n][1];
//              	makeSubLi.text = (optSubText);
//              	makeSubLi.append(linksLi); 
//              }
//              	makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons/links for each item in local storage.
//          }
//      };
//   
// //   	  // Autofill test data
//    		function autoFillData(){
// 					//Store JSON Object into local storage
// 				  for(var n in json){
// 			var id 				= Math.floor(Math.random()*10000001);
// 			localStorage.setItem(id, JSON.stringify(json[n]));
// 		}
// 
// 	}
//      
//       //Make item Links
//       //Create edit and delete links for each stored item when displayed 
//      function makeItemLinks(key, linksLi){
//      		//add edit single item link
//     	    	var editLink = $('<a>');
//     	    		editLink.attr("href","#");
//     	 			editLink.attr("key", key);
//     	 		var editText = "Edit Note";
//     	 			editLink.on("click", editItem);  
//     	 			editLink.text = editText;
//     	 			linksLi.append(editLink);
//     	 	
//     	 		//add line break
//     	 		var breakTag = $("<br>");
//     	 			linksLi.append(breakTag);
//     	 	
//     	 		//add delete single item link
//     	 		var deleteLink = $('<a>');
//     	 			deleteLink.attr("href", "#");
//     	 			deleteLink.attr("key", key);
//     	 		var deleteText = "Delete Note";
//     	 			deleteLink.on("click", deleteItem);
//     	 			deleteLink.text = deleteText;
//     	 			linksLi.append(deleteLink);
//     	 
//     	 }
//     	 
// //     	function editItem(){
// //     		 	/grabs data from local storage
// 				var value = localStorage.getItem(this.key);
// 				var item = JSON.parse(value);
//      		
//     		//Show the form so we can edit item.
//    		    toggleControls("off");
// //     		
// //     		//Populate form fields with the current localStorage values.
//     		$('#friend').val     = item.friend[1];
// 			 var radios          = $('input:radio[name="important"]:checked').val();
//     	    $("#favorite").val   = item.favorite[1];//checkbox
//     		$('#reminder').val   = item.reminder[1];
//     		$('#date').val       = item.date[1];
//     		$('#notes').val      = item.notes[1];
//     		
// //     		//Remove the inital listener from the input "save note" button 
// 			save.off("click", storeData);
// //     		//Change submit button value to say edit button
//     		$("#save").attr("value", "Edit Note");
//     		var editSubmit = $("#save");
// //     		//Save the key value established in this function as a property of the edit submit event
// //     		//So we can use that value when we save the data edited
// 			editSubmit.on("click", saveData());
// 			editSubmit.attr('key', this.key);
// // 			//console.log("save called");
// //     	  storeData(thiskey);
// //   });
// //   
// //   				editSubmit.attr("key", this.key);
// //   	}
// // 
// // 		
// // 		
//  		var clearLocal=function(){
//  		if( localStorage.length === 0 ){
//  			alert( "There are no saved notes." );
//  		}else{
//  			localStorage.clear();
//  			alert( "All notes have been deleted!" );
//  			window.location.reload();
//  			return false;
//  		}
//  	};
//   	
//   function deleteItem(id){
// 	var ask = confirm("Are you sure you want to delete this note?");
// 	if(ask){
// 		localStorage.removeItem(id);
// 		window.location.reload();
// 	}else{
// 		alert("Note was note deleted.");
// 	}
// }
// // 
// //      makeField();
// //   

////Had to refactor my code because it would not stop breaking/////
// SAVE MY DATA

$('#submit').on('click', function saveData(id) {
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

// GET MY DATA

$('#displayLink').on('click', function getData() {
	toggleControls("on");
    var getListdiv = $('#list')[0];
    for (var i = 0, j = localStorage.length; i < j; i++) {
        var key = localStorage.key(i);
        var value = localStorage.getItem(key);
        value = value.split(',');

        $('<div>').attr({'class': 'listDiv'}).appendTo('#list');
        $('<p>').html('Friend: ' + value[0]).appendTo('.listDiv');
        $('<p>').html('Important: ' + value[1]).appendTo('.listDiv');
        $('<p>').html('Favorite: ' + value[2]).appendTo('.listDiv');
        $('<p>').html('Reminder: ' + value[3]).appendTo('.listDiv');
        $('<p>').html('Date: ' + value[4]).appendTo('.listDiv');
        $('<p>').html('Note: ' + value[5]).appendTo('.listDiv');
		$('<p>').html($('<a>').attr({
            'href': '#',
            'onclick': 'deleteItem(' + key + ');'}).html('Delete Note')).appendTo('.listDiv');
        $('<p>').html($('<a>').attr({'href': '#','onclick': 'editItem(' + key + ');'}).html('Edit Note')).appendTo('.listDiv');

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


// DELETE A NOTE

function deleteItem(id) {
    var ask = confirm("Are you sure you want to delete this note?");
    if (ask) {
        localStorage.removeItem(id);
        window.location.reload();
    } else {
        alert("Your note was not removed.");
    }
}


// CLEAR MY DATA

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

$("#noteForm").validate({
    submitHandler: function(form) {
        console.log("Call Action");
    }
});

// LOAD DATA FROM OUTSIDE APP
//STATIC DATA///////////////////////////////////////////////////////////////////////////////////////

//JSON
$('#jsonB').on('click', function(){
	$('#notes').empty();
	$('#xmldiv').empty();
	$('<h3>').html('JSON Loaded').appendTo('#notedata');
	$.ajax({
		async:false,
		url:'xhr/data.json',
		type: 'GET',
		dataType: 'json',
		success: function(response){
				//console.log(response.notes[0]);
		for(var i=0, j=response.notes.length; i<j; i++){
	            var ndata  = response.notes[i];
	            $(''+
					'<div class="notetitle">'+
					   	'<p>Friend: '+ ndata.friend +'</p>'+
						'<p>Important: '+ ndata.important +'</p>'+
						'<p>Favorite: '+ ndata.favorite +'</p>'+
						'<p>Reminder: '+ ndata.reminder +'</p>'+
						'<p>Date: '+ ndata.date +'</p>'+
						'<p>Notes: '+ ndata.notes +'</p>'+
					'</div>'
				).appendTo('#notedata');
				console.log(response);
			}
		}
	});
	return false;
});



//XML
$('#xmlB').on('click', function(){
	$('#notes').empty();
	$('#xmldiv').empty();
	$('<h3>').html('XML Loaded').appendTo('#notedata');
	$.ajax({
		url: 'xhr/data.xml',
		type: 'GET',
		dataType: 'xml',
		success: function(xml){
			$(xml).find("note").each(function(){
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
$('#csvB').on('click', function(){
	$('#notes').empty();
	$('#xmldiv').empty();
	$('<h3>').html('CSV Loaded').appendTo('#notedata');
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

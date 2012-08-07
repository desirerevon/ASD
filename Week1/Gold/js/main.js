$("#logo").on('pageinit', function){
		   //code for logo goes here
		   
		   
		}
		
		$("#home").on('pageinit', function){
		   //code for home goes here
		
		}
		
		$("#friendtype").on('pageinit', function){
		   //code for friendtype goes here
		
		}
		
		$("#prioritytype").on('pageinit', function){
		   //code for prioritytype goes here
		
		}
		
		$("#notetype").on('pageinit', function){
		   //code for notetype goes here
		
		}




//Form: Note Page
				var parseNoteForm = function(data) {
//uses form data here;

//console.log(data);
		};

		$(document).on('pageinit', function(){

			var nform = $('#noteform');

//jQuery.validator.messages.required = "Required";
			nform.validate({
				invalidHandler: function(form, validator) {},
				submitHandler: function() {
					var data = nform.serializeArray();
					parseNoteForm(data);
				},
		
		
		
     //Variable Defaults
     var friendType = ["--Choose Friend--", "Girlfriend", "Boyfriend", "Fiance", "Friend", "Sibling", "Parent", "Other"];
     var importantValue;
     var favoriteValue = "No";
     var errMsg = $("#errors");

 
     //Create select field element and populate with options.
    var makeField= function() {
         var formTag = $("form"),
             selectLi = $('<select>'),
             makeSelect = $('<select>');
             makeSelect.attr("id", "friends");
          for(var i=0, j=friendType.each; i<j; i++){
              var makeOption = $('option');
              var optText = friendType[i]; //Saying this is not defined, causing error in local storage
              makeOption.attr("value", optText);
              makeOption.text = (optText);
              makeSelect.append(makeOption);    
          }
      };
  	
  	//Find value of selected radio button.
		var getSelectedRadio = function(){
			var radios = function (){
				$('input:radio[name="important"]:checked').val();
				return($('input:radio[name="important"]:checked').val());

			};
		};

  
  	//Get Selected CheckBox Value
//  function getCheckboxValue() {
//          if(ge("fav").checked){
//            favoriteValue = ge("fav").value;
//          } else {
//              favoriteValue = "No";
//          }
//      }
     
      //Turn on and off form by use of case during getData()
      function toggleControls(n) {
         switch(n){
             case "on":
             	 $("#noteform").hide();
                 $("#clearLink").show();
                 $("#displayLink").hide();
                 $("#addNew").show();
                 break;
             case "off":
             	 $("#noteform").show();
                 $("#clearLink").show();
                 $("#displayLink").show();
                 $("#addNew").hide();//addNew
                 $("#items").hide();
                 break;
             default:
                 return false;
         }
     };
     
    var storeData = function(key){
	 	//If there is no key, this is a brand new item and we need a new key.
		if (!key){
				var id = Math.floor(Math.random()*100000001);
		}else{
			//Set the id to the existing key we're editing so that it will save our data.
			//The key is the same that's been passed along from the editSubmit event handler
			//to the validate function, and the passed here, into the storeData function.
			id = key;

		}

         getSelectedRadio();
         //getCheckboxValue();
         var item          	    = {};
         	 item.friend	  	= ["Choose A Friend:", $("#friend").value];
             item.important 	= ["How important is this:", importantValue];
             item.favorite   	= ["Is right friend:", favoriteValue];
             item.reminder		= ["Reminder:", $("#reminder").value];
             item.date     		= ["Date:", $("#date").value];
             item.notes       	= ["Note:", $("#notes").value];
          //Save data into local storage. Use stringify to convert object to a string(local storage only stores strings). 
          localStorage.setItem(id, JSON.stringify(item));
			alert(" Note Saved!");
			save.off("click");
				save.on("click", storeData);
			window.location.reload();
		};

  //Create visiable storage
  //getData 
  
			var getData = function(){
//console.log("id");

				$("#notepage").get();
				toggleControls("on");
				if(localStorage.length === 0){
						alert("There is no data in Local Storage so default data was added.");
						autoFillData();
}
         
//Write Data Local-->Browser
         var makeDiv = $("<div>");
         makeDiv.attr("id", "items");
         var makeList = $("<ul>");
         makeDiv.append(makeList);
         $("#listN").append(makeDiv); //doc.body.append
         // Set 'items' display
         $("#items").show();
         	 for(var i = 0, len=localStorage.each; i < len; i++){
             	var makeLi = $("<li>");
             	var linksLi = $("<li>");
             	makeList.append(makeLi);
             	var key = localStorage.key(i);
             	var value = localStorage.getItem(key);
//Convert the string from local storage value back to an object using JSON.parse()
             	var obj = JSON.parse(value);
             	var makeSubList = $("<ul>");
             	makeLi.append(makeSubList);
//getImage(obj.friend[1], makeSubList);
             for(var n in obj){
             	var makeSubLi = $("<li>");
             	makeSubList.append(makeSubLi);
             	var optSubText = obj[n][0] + " " + obj[n][1];
             	makeSubLi.text = (optSubText);
             	makeSubLi.append(linksLi); 
             }
             	makeItemLinks(localStorage.key(i), linksLi); //Create edit and delete buttons/links for each item in local storage.
         }
     };
    
  	  // Autofill test data
   		function autoFillData(json){

				 	for(var n in json){
						var id = Math.floor(Math.random()*100000001);
					localStorage.setItem(id, JSON.stringify(json[n]));
			}
		}

      
     //Make item Links
     //Create edit and delete links for each stored item when displayed 
     function makeItemLinks(key, linksLi){
     		//add edit single item link
    	    	var editLink = $('<a>');
    	    		editLink.attr("href","#");
    	 			editLink.attr("key", key);
    	 		var editText = "Edit Note";
    	 			editLink.on("click", editItem);  
    	 			editLink.text = editText;
    	 			linksLi.append(editLink);
    	 	
    	 		//add line break
    	 		var breakTag = $("<br>");
    	 			linksLi.append(breakTag);
    	 	
    	 		//add delete single item link
    	 		var deleteLink = $('<a>');
    	 			deleteLink.attr("href", "#");
    	 			deleteLink.attr("key", key);
    	 		var deleteText = "Delete Note";
    	 			deleteLink.on("click", deleteItem);
    	 			deleteLink.text = deleteText;
    	 			linksLi.append(deleteLink);
    	 
    	 }
    	 
    	function editItem(){
    		 	var thiskey= $(this).attr("key");
    //Grab the data from our item from Local Storage
				var value = localStorage.getItem($(this).attr("key"));
			    var item = JSON.parse(value);
    		
    		//Show the form so we can edit item.
    		toggleControls("on");
    		
    		//Populate form fields with the current localStorage values.
    		$('#friend').val     = item.friend[1];
			 var radios          = $('input:radio[name="important"]:checked').val();
    	    $("#favorite").val   = item.favorite[1];//checkbox
    		$('#reminder').val   = item.reminder[1];
    		$('#date').val       = item.date[1];
    		$('#notes').val      = item.notes[1];
    		
    		//Remove the inital listener from the input "save note" button 
			save.off("click", storeData);
    		//Change submit button value to say edit button
    		$("#save").attr("value", "Edit Note");
    		var editSubmit = $("#save");
    		//Save the key value established in this function as a property of the edit submit event
    		//So we can use that value when we save the data edited
			save.one("click", function(){
			//console.log("save called");
    	  storeData(thiskey);
  });
  
  				editSubmit.attr("key", this.key);
  	}

		
		
		var clearLocal=function(){
 		if( localStorage.length === 0 ){
 			alert( "There are no saved notes." );
 		}else{
 			localStorage.clear();
 			alert( "All notes have been deleted!" );
 			window.location.reload();
 			return false;
 		}
 	};
 	
 	    function deleteItem(){
 		var ask = confirm("Would you like to delete this note?");
 		if(ask){	
 			localStorage.removeItem(this.key);
 			alert("Note was deleted!");
 			window.location.reload();
 		}else{
 			alert("Note was not deleted");
 		}
 	}
 

     makeField();
  
var displayLink = $('#displayLink');
displayLink.on("click", getData);

var clearLink = $('#clearLink');
clearLink.on("click", clearLocal);

var save = $("#save");
save.on("click", storeData);

};
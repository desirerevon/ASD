//Form: Note Page
				var parseNoteForm = function(data) {
//uses form data here;

//console.log(data);
		};

		$(document).bind('pageinit', function(){

			var nform = $('#noteform');

//jQuery.validator.messages.required = "Required";
			nform.validate({
				invalidHandler: function(form, validator) {},
				submitHandler: function() {
					var data = nform.serializeArray();
					parseNoteForm(data);
				}
			});

		});
		
		
		// $("#logo").on('pageinit', function){
// 		   //code for logo goes here
// 		   
// 		   
// 		}
// 		
// 		$("#home").on('pageinit', function){
// 		   //code for home goes here
// 		
// 		}
// 		
// 		$("#friendtype").on('pageinit', function){
// 		   //code for friendtype goes here
// 		
// 		}
// 		
// 		$("#prioritytype").on('pageinit', function){
// 		   //code for prioritytype goes here
// 		
// 		}
// 		
// 		$("#notetype").on('pageinit', function){
// 		   //code for notetype goes here
// 		
// 		}


 
     //Create select field element and populate with options.
    var makeField= function() {
         var formTag = $("form"),
             selectLi = $('<select>'),
             makeSelect = $('<select>');
             makeSelect.attr("id", "friends");
          for(var i=0; i<friendType.length; i++){
              var makeOption = $('option');
              var optText = friendType[i]; //Saying this is not defined, causing error in local storage
              makeOption.attr("value", optText);
              makeOption.text = optText;
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
         	 item.friend	  	= ["Choose A Friend:", $("#friends").value];
             item.importance 	= ["Importance:", importanceValue];
             item.favorite   	= ["Is right friend:", favoriteValue];
             item.reminder		= ["Reminder:", $("reminder").value];
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
			var getData = function(){
//console.log("id");
				$("#notepage").empty();
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
         $("#listN").append(makeDiv);
         // Set 'items' display
         $("#items").show();
         	 for(var i = 0, len=localStorage.length; i < len; i++){
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
      //Get the image for the right friend that's being displayed.
   // function getImage(imgName, makeSubList) {
//  		var imageLi = document.createElement('li');
//  		makeSubList.appendChild(imageLi);
//  		var newImage = document.createElement('img');
//  		var setSrc = newImage.setAttribute("src", "images/" + imgName + ".png");
//  		newImage.style.paddingTop = "10px";
//  		imageLi.appendChild(newImage);
//  	}
      
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
    		toggleControls("off ");
    		
    		//Populate form fields with the current localStorage values.
    		$('friends').val    = item.friend[1];
			 var radios         = $('input:radio[name="important"]:checked').val();
    	    $("favorite").val   = item.favorite[1];//checkbox
    		$('reminder').val   = item.reminder[1];
    		$('date').val       = item.date[1];
    		$('notes').val      = item.notes[1];
    		
    		//Remove the inital listener from the input "save note" button 
			save.off("click", storeData);
    		//Change submit button value to say edit button
    		$("#save").attr("value", "Edit Note");
    		var editSubmit = $("#save");
    		//Save the key value established in this function as a property of the edit submit event
    		//So we can use that value when we save the data edited
			save.one("click", function(){
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
 
    	
//      	//Validate form fields to reuse storeData function, modify and edit not save
//     	function validate(e){ // e stands for event data
//     		var getFriend   = $("#friends");
//     	
//      		
//     		//Reset Error Messages 
//     		errMsg.text ="";
//     		getFriend.style.border = "1px solid black";
//     		//getUsername.style.border = "1px solid black"; 
//   		
//     		//Get Error Messages; Store in an array to display them all on screen
//     		var messageAry =[];
//      		
//     		//Friend Validation 
//     		if(getFriend.value==="--Choose Friend--"){
//     			var friendError = "Please choose a friend";
//     			getFriend.style.border = "1px solid red";
//     			messageAry.push(friendError);
// 			}
//     		
// 							//Username Validation
// 						// var re = /^[A-Za-z0-9_]{6,8}ge/;
// 				//     		//User name can inlcuded Capital letter, lowercase letters, numbers and an _ . 
// 				//     		 if(!re.exec(getUsername.value)){
// 				//     			var usernameError = "Please enter a valid username";
// 				//     			getUsername.style.border = "1px solid red"; 
// 				//     			messageAry.push(usernameError);
// 				//      		}
// 
// 							//Password Validation
// 						// if(getPassword.value=== ""){
// 				//  			var passwordError = "Please enter your Password.";
// 				//  			getPassword.style.border = "1px solid red";
// 				//  			messageAry.push(passwordError);
// 				//  		}
// 				//    		
// 							//If there are errors display them on the screen
// 							//If there were errors, display them on the screen
//  		if(messageAry.length >= 1){
//  			for(var i=0, j=messageAry.length; i < j; i++){
//  				var txt = document.createElement('li');
//  				txt.innerHTML = messageAry[i];
//  				errMsg.appendChild(txt);
//  			}
//     			e.preventDefault();
//     		return false;
//     		}else{
//     			//If all is ok save our data! Send the key value that came from edit data function
//     			//Remember key value passed through editSubmit listener as a property
//     			storeData(this.key);
// 			}
//      		
//      }

     //Variable Defaults
     var friendType = ["--Choose Friend--", "Girlfriend", "Boyfriend", "Fiance", "Friend", "Sibling", "Parent", "Other"];
    		var importanceValue;
    	    favoriteValue = "No",
    	     errMsg = $("#errors");
    
    makeField();
  
var displayLink = $('#displayLink');
displayLink.on("click", getData);

var clearLink = $('#clearLink');
clearLink.on("click", clearLocal);

var submit = $("#save");
submit.on("click", storeData);
function(doc) {
  if (doc.id.substr(0,5) === "note") {
    emit(doc.id.substr(5),{
    	 "friend" = doc.friend,
		 "important" = doc.important,
		 "favorite" = doc.favorite,
		 "reminder" = doc.reminder,
		 "date" = doc.date,
		 "notes" = doc.notes
		 
		 });
    	
  }
};
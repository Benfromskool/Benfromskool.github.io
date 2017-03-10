function test(){
    
  //alert("This is a test!");
 
 var type = document.getElementById("restaurantType").value;
  var quality = document.getElementById("quality").value;

 
  if(type == "fancy" && quality == "good"){
   alert("Recommended Tip: 20%");
  }
  
 else if(type == "fancy" && quality == "great"){
   alert("Recommended Tip: 25%");
   
 }
  
  else if(type == "fancy" && quality == "mediocre"){
   alert("Recommended Tip: 10%");
   
 }
   
  else if(type == "fancy" && quality == "bad"){
   alert("Recommended Tip: 5%");
  }
 
  if(type == "Casual" && quality == "great"){
   alert("Recommended Tip: 20%");
  
  }
  
 else if(type == "Casual" && quality == "good"){
   alert("Recommended Tip: 15%");
  
  }
  
  else if(type == "Casual" && quality == "mediocre"){
   alert("Recommended Tip: 5%");
  
  }
  
  else if(type == "Casual" && quality == "bad"){
   alert("Recommended Tip: 0%");
  
  }
  
  if(type == "takeout" && quality == "great"){
   alert("Recommended Tip: 15%");
  
  }
  
 else if(type == "takeout" && quality == "good"){
   alert("Recommended Tip: 10%");
  
  }
  
  else if(type == "takeout" && quality == "mediocre"){
   alert("Recommended Tip: 5%");
  
  }
  
  else if(type == "takeout" && quality == "bad"){
   alert("Recommended Tip: 0%");
  }
  
  if(type == "Family" && quality == "great"){
   alert("Recommended Tip: 25%");
  
  }
  
 else if(type == "Family" && quality == "good"){
   alert("Recommended Tip: 15%");
  
  }
  
  else if(type == "Family" && quality == "mediocre"){
   alert("Recommended Tip: 10%");
  
  }
  
  else if(type == "Family" && quality == "bad"){
   alert("Recommended Tip: 0%");
  }
}
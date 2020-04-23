
  			var btn, cont , book;
  		save=document.querySelector(".save");
  		btn=document.querySelector(".btn");
  		book=document.querySelector(".book");
  		cont=document.querySelector(".contain");
  		local=document.querySelector(".local");
  		  btn.addEventListener('click',event=>{
  		    //we are good to go
  		    
  				setTimeout(()=>{
  				
  					cont.style.display="none";	
  					show=book.style.display="block";
  				     book.style.margin=`30px 0`;
  				     save.style.display="block";
  				     local.style.display="block"
 
  				   
  				       
  				     //action for save button
  					save.onclick=(action)=>{
  					   //save input to db
  					   put=book.value;
  					  var store=[];
  					  store.push(put);
  					  // insert
  					  localStorage.setItem("db",JSON.stringify(store));
  					  	  //convert bak to string
  					  	var refund=JSON.parse(localStorage.getItem("db"));

  					  
  						//create Element
  						var elem=document.createElement("li");
  							inner=document.createTextNode(refund);
  							 elem.appendChild(inner);
  							 saved=document.querySelector("ul");
  							 saved.appendChild(elem);
  							   // save item to local storage 
  							
  							 //now make it return empty when savdd
  							 if(book.value!="" || book.value==null){
  							 	book.value="";
  							 		//hide the node
  							 		msg=document.querySelector(".msg");
  							 		msg.style.display="none";
 								  //gif for inputed elem
 								swal('Note added',
 								"click on the save icon to view list of saved notes",
 								'success')
  							 }else{
  							   //gif for empty input 
  							 	swal({
  							 		icon:"error",
  							 		title:"u havnt writen any note",
  							 		text:"your input is empty"
  							 	});
  							 
  							 }
  							 // return false when empty
  								
  					// end of btn action
  					}
  					local.onclick=()=>{
  						app=document.querySelector(".app");
  						app.innerHTML=`TODAYS <img src='contract.png' width='40px' height='40px'>`
  						msg.style.display="block"
  						
  					}
  					//end of local btn
  					},1000);
  					  //end of set onterval btn	  
  				})
  		 	//end of general
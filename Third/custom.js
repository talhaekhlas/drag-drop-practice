
function onDragStart(e) {
  e.dataTransfer.setData("html", e.target.id);
}

function onDragEnter(e){
	 
}

function onDragOver(e) {
  e.preventDefault();

}

function onDrop(e) {
  e.preventDefault();

  
  var dragId = e.dataTransfer.getData("html")
  var dragData = document.getElementById(dragId)

  
  // e.target.appendChild(dragData)
   console.log(dragData)

   if(!e.target.contains(dragData)){

   	 console.log('node name',dragData.nodeName)

  	 e.target.appendChild(dragData)
  }else{
  	 console.log('has this child node')
  }



  // console.log(e.target.id,dragData);

  // prevParent = dragData.parentNode.id

  // if(prevParent == 'to'){
  	
  // 	var DroppedDiv = document.getElementById('from');
  // 	DroppedDiv.appendChild(dragData)
  	
  // }else{
  	
  // 	var DroppedDiv = document.getElementById('to');
  // 	DroppedDiv.appendChild(dragData)
    

  // }
  
}
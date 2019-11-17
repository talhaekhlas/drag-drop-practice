var LiParentNode = document.querySelector('li');

console.log(LiParentNode.parentNode.id);

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

  var dragParentId = dragData.parentNode.id;
  var targetId = e.target.id;

  
  console.log('target id:',targetId)
  console.log('target',e.target)

  if((targetId == 'from' || targetId == 'to') ){
      console.log('from or to')
      if(targetId!=dragParentId){
        e.target.appendChild(dragData)
      }

  }


  if(e.target.nodeName == 'LI'){
      console.log('li')
      if(targetId!=e.target.parentNode.id){
        e.target.parentNode.appendChild(dragData)
      }

      
      
  }

  if(e.target.nodeName == 'SPAN'){

    console.log('span')

      if(targetId!=e.target.parentNode.parentNode.id){
        e.target.parentNode.parentNode.appendChild(dragData)
      }

      
  }



  // if((targetId == 'from' || targetId == 'to') && targetId!=dragParentId){

  //     e.target.appendChild(dragData)


  // }else{
  //   var targetParentParent = e.target.parentNode.parentNode;

  //   if((targetParentParent != dragParentId) && (targetId!=dragParentId)){
  //     e.target.parentNode.parentNode.appendChild(dragData)
  //   }

  //   if(e.target.nodeName=="LI"){

  //       console.log('node name',e.target.nodeName)
  //       console.log('parentNodeId ',e.target.parentNode.id)

  //       document.querySelector(e.target.nodeName).parentNode.appendChild(dragData)



        

  //   }

    
    

    // console.log('parent parent node',targetParentParent)


  // }



  
  // e.target.appendChild(dragData)
   // console.log('target',e.target)

  //  if(!e.target.contains(dragData)){

  //  	 console.log('node name',dragData.nodeName)

  // 	 e.target.appendChild(dragData)
  // }else{
  // 	 console.log('has this child node')
  // }



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
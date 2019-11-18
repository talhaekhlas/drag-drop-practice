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
      if(dragParentId!=e.target.parentNode.id){
        e.target.parentNode.appendChild(dragData)
      }

      
      
  }

  if(e.target.nodeName == 'SPAN'){

    console.log('span')

      if(dragParentId!=e.target.parentNode.parentNode.id){
        e.target.parentNode.parentNode.appendChild(dragData)
      }

      
  }


  
}


function onDragStart(e) {
  e.dataTransfer.setData("html", e.target.id);

  // e.target.style.display = 'none'

  e.target.children[0].style.background = 'yellow'
  e.target.children[0].style.border = '1px solid black'
  // e.target.children[0].style.height = '25px'
  // e.target.children[0].style.width = '150px'

}

function onDragOver(e) {
  e.preventDefault();

  console.log('on drag over',e)

  var dragId = e.dataTransfer.getData("html")
  var dragData = document.getElementById(dragId)
  // console.log('drag id on drag over', e.dataTransfer)



  // if(e.clientX>100){
  //   dragData.style.background = black;
  // }else{
  //   dragData.style.background = 'red';
  // }


  if(e.target.nodeName == 'LI'){

    e.target.children[0].style.background='green'
    
    
  }

  if(e.target.nodeName == 'SPAN'){
    e.target.style.background='green'
    
  }
  
}

function onDragLeave(e){
     if(e.target.nodeName == 'LI'){
    e.target.children[0].style.background='red'
   
    
  }

  if(e.target.nodeName == 'SPAN'){
    e.target.style.background='red'
   
  }
}

function onDragEnter(e){
   
}



function onDragEnd(e){
  e.preventDefault();

  // console.log('on drag end')
}

function onDrop(e) {
  e.preventDefault();


  // drag data info
  var dragId = e.dataTransfer.getData("html")
  var dragData = document.getElementById(dragId)
  var dragParentId = dragData.parentNode.id;

  console.log('on drop drag id',dragId)


  var targetId = e.target.id;


  var mainUl = document.querySelector('#from');


  var dragDataIndex = Array.from(mainUl.children).indexOf(dragData)

  

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
      }else{
        console.log('same li parent');
      }

      
      
  }

  if(e.target.nodeName == 'SPAN'){

      console.log('span')

      if(dragParentId!=e.target.parentNode.parentNode.id){
        e.target.parentNode.parentNode.appendChild(dragData)
      }
      else{
        console.log('same span parent:');
        var droppedArea = e.target.parentNode;
        var droppedAreaHtml = e.target.parentNode.innerHTML;
        var droppedAreaIndex = Array.from(mainUl.children).indexOf(droppedArea);
       
        
        var dragHtml = dragData.innerHTML;
        mainUl.children[droppedAreaIndex].innerHTML = dragHtml;

        mainUl.children[droppedAreaIndex].children[0].style.background = 'red';
        mainUl.children[droppedAreaIndex].children[0].style.border = '';


        
       

        mainUl.children[dragDataIndex].innerHTML = droppedAreaHtml;

        mainUl.children[dragDataIndex].children[0].style.background = 'red';
        mainUl.children[dragDataIndex].children[0].style.border = '';
        
        

        
        console.log('drag drop index',dragDataIndex,droppedAreaIndex)
       
      }

      
  }


  
}
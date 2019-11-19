var LiParentNode = document.querySelector('li');


function onDragStart(e) {
  e.dataTransfer.setData("html", e.target.id);

  // e.target.style.display = 'none'

  e.target.childNodes[1].style.background = 'yellow'
}

function onDragOver(e) {
  e.preventDefault();

  // console.log('on drag over')
}

function onDragLeave(e){
    // console.log('on drag leave')
}

function onDragEnter(e){
   
}



function onDragEnd(e){
  e.preventDefault();

  // console.log('on drag end')
}

function onDrop(e) {
  e.preventDefault();
  var dragId = e.dataTransfer.getData("html")
  var dragData = document.getElementById(dragId)

  var dragParentId = dragData.parentNode.id;
  var targetId = e.target.id;




  var mainUl = document.querySelector('#from');

  console.log('main ul children:',mainUl.children[0])

  mainUl.children[0].innerHTML = 'test';

  return 0;

  var child = dragData;
  var parent = mainUl;

  var index = Array.from(mainUl.children).indexOf(child)

  Array.from(mainUl.children).map(item=>{
    console.log(item)
  })


  console.log('drag node index', index)

  // for(i = 0; i<Array.from(mainUl.children).length; i++){

  //    console.log('index '+i+':',mainUl.childNodes[i])
  // }






  // console.log('Main Ul Nodes: ',mainUl.childNodes)
  // console.log('Node 0: ',mainUl.childNodes[0])
  // console.log('Node 1: ',mainUl.childNodes[1])
  // console.log('Node 2: ',mainUl.childNodes[2])
  // console.log('Node 3: ',mainUl.childNodes[3])



  
 

  
  // console.log('target id:',targetId)
  // console.log('target',e.target)

  if((targetId == 'from' || targetId == 'to') ){
      // console.log('from or to')
      if(targetId!=dragParentId){
        e.target.appendChild(dragData)
      }

  }






  if(e.target.nodeName == 'LI'){
      // console.log('li')
      if(dragParentId!=e.target.parentNode.id){
        e.target.parentNode.appendChild(dragData)
      }else{
        // console.log('same li parent');
      }

      
      
  }

  if(e.target.nodeName == 'SPAN'){

      // console.log('span')

      if(dragParentId!=e.target.parentNode.parentNode.id){
        e.target.parentNode.parentNode.appendChild(dragData)
      }
      // else{

      //   var dropLiId = e.target.parentNode.nextSibling.nextSibling.insertAdjacentElement('beforebegin', dragData);


      //   console.log('same span parent:',dropLiId);
       
      // }

      
  }


  
}
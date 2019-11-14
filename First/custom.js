// var initialDragDiv = document.querySelector('#drag1');

//  initialDragDiv.parentNode.style.background =  'red'

 
function allowDrop(ev) {
  ev.preventDefault();
}

function dragEnter(e){

  if(e.target.className=='drop-target'){

    event.target.style.border = "3px dotted black";

  console.log('drag enter');}

}


function dragLeave(e){

  if(e.target.className=='drop-target'){

    event.target.style.border = "";

  console.log('drag leave');}

}



function drag(ev) {
  var dragedDiv = document.querySelector('#'+ev.target.id).parentNode;

  dragedDiv.style.background = "#D0D0D0";

  ev.dataTransfer.setData("html", ev.target.id);
}

function drop(ev,obj) {
  ev.preventDefault();
   
  var data = ev.dataTransfer.getData("html");

  console.log(document.getElementById(data))

  ev.target.appendChild(document.getElementById(data));

  

  var droppedDiv = document.querySelector('#'+ev.target.id);

  console.log(ev.target.id);
  droppedDiv.style.background = "red";
}







const treeArray = [{'name':'Beverages',
                   'child':[
                             {'name':'Water','child':null},
                             {'name':'tea','child':[
                                                      {'name':'Black tea','child':null},
                                                      {'name':'white tea','child':null},
                                                      {'name':'green tea','child':[
                                                                                    {'name':'khub valo','child':null},
                                                                                    {'name':'motamuli valo','child':null},
                                                                                    {'name':'Kharap','child':[
                                                                                            {'name':'khub valo1','child':null},
                                                                                         {'name':'motamuli valo1','child':null},
                                                                                        {'name':'Kharap1','child':null}
                                                                                        ]
                                                                                    }
                                                                                  ]
                                                      }
                                                  ]
                              },
                             {'name':'Coffee','child':null},
                             
                          ]
                   }
                   ]




//var treeList = '';
//var treeNumber = 0;
function treeGenerate(arrayForTraverse){

   var treeList = '';
      arrayForTraverse.map((item,index)=>{
        

        if(item.child!=null){
             treeList +='<li><span class="caret" draggable="true" ondragstart="drag(event)" id="drag1">'+ item.name +'</span><ul class="nested">'+ treeGenerate(item.child) +'</ul></li>';


        }else{

          treeList +='<li><span  draggable="true" ondragstart="drag(event)" id="drag1">'+item.name+'</span></li>';
        }


      })


      return treeList;

}


var customTree = treeGenerate(treeArray)

const listTree = document.querySelector('#sadUL');
listTree.innerHTML = customTree;

//console.log('custom tree',customTree);









var toggler = document.querySelectorAll(".caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
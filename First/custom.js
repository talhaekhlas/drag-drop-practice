var initialDragDiv = document.querySelector('#drag1');

 initialDragDiv.parentNode.style.background =  'red'

 
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

function drop(ev) {
  ev.preventDefault();
   
  var data = ev.dataTransfer.getData("html");

  ev.target.appendChild(document.getElementById(data));

  var droppedDiv = document.querySelector('#'+ev.target.id);

  console.log(ev.target.id);
  droppedDiv.style.background = "red";
}


// for tree view

// const demoArray = [
// {'name':'ekhlas'},
// {'name':'asad'},
// {'name':'nur'},
// {'name':'kafi'},
// {'name':'mishkat'},
// {'name':'mikdad'},
// ]

// var list = ''
// demoArray.map(item=>{

//   list +='<li>'+item.name+'</li>'

//   console.log(item.name)
// })

// const listItem = document.querySelector('#list-test');
// listItem.innerHTML = list




const treeArray = [{'name':'Beverages',
                   'child':[
                             {'name':'Water','child':null},
                             {'name':'tea','child':[
                               {'name':'Black tea','child':null},
                               {'name':'white tea','child':null},
                               {'name':'green tea','child':[
                                   {'name':'khub valo','child':null},
                                   {'name':'motamuli valo','child':null},
                                   {'name':'Kharap','child':null}
                               ]}
                             ]},
                             {'name':'Coffee','child':null},
                             
                          ]
                   }
                   ]




var treeList = '';
var treeNumber = 0;
function treeGenerate(arrayForTraverse){

      

      arrayForTraverse.map((item,index)=>{
        

        if(item.child!=null){

            treeNumber++;
            var childLength = item.child.length
            console.log('length check1',arrayForTraverse,index)
            treeList +='<li>'+item.name+'<ul>';
            
            treeGenerate(item.child)
        }else{


          
          console.log('length check2',arrayForTraverse,index)

          treeList +='<li>'+item.name+'</li>';
        }


      })

      return treeList

}


var customTree = treeGenerate(treeArray)

const listTree = document.querySelector('#list-tree');
listTree.innerHTML = customTree

console.log('custom tree',customTree)









var toggler = document.getElementsByClassName("caret");
var i;

for (i = 0; i < toggler.length; i++) {
  toggler[i].addEventListener("click", function() {
    this.parentElement.querySelector(".nested").classList.toggle("active");
    this.classList.toggle("caret-down");
  });
}
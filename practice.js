console.log('this is practice of notes website');
showNotes();
// targeting the elements of the html
let addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click', function () {
    let addTxt = document.getElementById('addTxt')
    let addTitle = document.getElementById('addTitle')
    let item = localStorage.getItem('item')
    let obj;
    if (item == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(item);
    }
    myobj = {// creating an object
        title: addTitle.value,
        text: addTxt.value
    }
    obj.push(myobj)//myobj(object) values will be pushed in th array obj
    localStorage.setItem('item', JSON.stringify(obj))
    console.log(obj)

    addTxt.value = ''
    addTitle.value = ''
    showNotes();
})

//creating function to show the added notes in the site
function showNotes() {
    // console.log('this is shownotes')
    let addTxt = document.getElementById('addTxt')
    let addTitle = document.getElementById('addTitle')
    let item = localStorage.getItem('item')
    let obj;
    if (item == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(item);
    }

    let html = '';
    obj.forEach(function (element, index, array) {
        html += `
      

      <div class="card">
      <h5 class="card-title">Form no- ${index+1}</h5>
      <div class="card-body">

        <div class="form-group">
          <h5 class="card-title">Add title</h5>
          <input type="email" class="form-control" id="addTitle" aria-describedby="emailHelp" placeholder="Enter title">
        </div>

        <h5 class="card-title">Add a Note</h5>
        <textarea class="form-control" id="addTxt" rows="3"></textarea>
        <button id=${index} onclick='removeThis(this.id)'  class="btn btn-primary">Delete Note</button>
      </div>
    </div>
        `
    })

    let Notes = document.getElementById('Notes')
    if (obj.length != 0) {
        Notes.innerHTML = html;
    }
    else{
        Notes.innerHTML=`Nothing is here to show you!`
    }
}

// function to remove the note
function removeThis(x){
    console.log('deleting this',x)
    let addTxt = document.getElementById('addTxt')
    let addTitle = document.getElementById('addTitle')
    let item = localStorage.getItem('item')
    let obj;
    if (item == null) {
        obj = [];
    }
    else {
        obj = JSON.parse(item);
    }
    obj.splice(x,1);
    localStorage.setItem('item',JSON.stringify(obj));

    showNotes();

}
 
// now we add a search functionality in it;
let search =document.getElementById('search')
search.addEventListener('input',function(){
    let inputval= search.value
    // console.log('searching',inputval)
 let cards = document.getElementsByClassName('cards')
    Array.from(cards).forEach(function(element,index,array){
        cardTitle= element.getElementsByTagName('h5')[0].innerHTML
        if(cardTitle.includes(inputval)){
            element.style.display='block'
        }
        else{
            element.style.display='none'
        }
    })
})

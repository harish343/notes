let addBTn = document.getElementById('addBtn')
ShowNotes()

addBTn.addEventListener("click",function(e){
    console.log("button fired")
    let addTxt = document.getElementById("addTxt");
    let AddTitle = document.getElementById("addTitle")


    let notes = localStorage.getItem("notes")
    if(notes==null){
        notesObj =[];
    }
    else{
        notesObj=JSON.parse(notes);
    }
    let myObj={
        title : addTitle.value,
        text : addTxt.value
    }
    notesObj.push(myObj);
    localStorage.setItem("notes",JSON.stringify(notesObj))
    addTxt.value="";
    AddTitle.value="";
    console.log(notesObj);
    ShowNotes();
})
function ShowNotes(){
    let notes = localStorage.getItem("notes")
    let html ="";
    if(notes==null){
        notesObj =[];
    }
    
    else{
        notesObj=JSON.parse(notes);
        }
        notesObj.forEach(function(element,index){
            // html +=` 
            // <div class="noteCard my-2 mx-2 card" style="width: 18rem;">
            //         <div class="card-body">
            //             <h5 class="card-title">Note ${element.title}</h5>
            //             <p class="card-text"> ${element.text}</p>
            //             <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
            //         </div>
            //     </div>`;
            html+=`
            <div class="card noteCard my-6 mx-6">
			<div class="card-header my-6 mx-6">
            Note <p>${element.title}</p>
            
			</div>
			<div class="card-body">
			  <blockquote class="blockquote mb-0">
				<p class="searchcard">${element.text}</p>
                <button id="${index}"onclick="deleteNote(this.id)" class="btn btn-primary">Delete Note</button>
				
			  </blockquote>
			</div>
		  </div>`
        });
        let notesELm = document.getElementById('notes')
        if(notesObj.legth!=0){
            notesELm.innerHTML =html;

        }
        else{
            notesELm.innerHTML=`Nothing to show ! use Add a note section above to add notes`;

        }
        
    }
    function deleteNote(index){
      let notes = localStorage.getItem("notes")  
      if(notes==null){
          notesObj=[];
      }
      else{
          notesObj = JSON.parse(notes);

      }
      notesObj.splice(index,1);
      localStorage.setItem("notes",JSON.stringify(notesObj));
      ShowNotes();

    }
let search = document.getElementById('searchTxt');
search.addEventListener("input",function(){
    let inputVal = search.value.toLowerCase();
    let notecards = document.getElementsByClassName('noteCard');
    Array.from(notecards).forEach(function(element){
        let cardTxt = element.getElementsByClassName("searchcard")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none"

        }
    })
})
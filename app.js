// localStorage.clear();

document.getElementById("entertext").addEventListener("focus",chng); //changes color of addNote button when input is being given
function chng()
{
    document.getElementById("addingNote").style.backgroundColor = "black";
    document.getElementById("addingNote").style.color = "white";
}

document.getElementsByClassName("box")[0].addEventListener("click",wbs); //page reloads when header is clicked.
function wbs(){
    location.reload();
}


document.getElementsByClassName("about")[0].onclick = function(){
   location.assign("https://shubham242000.github.io/AboutNotes/")
}



document.getElementById("addingNote").addEventListener("click", abc);
showNotes();
function abc() {
    // <div class="note">
    // 		<div class="area">

    // 		</div>
    // 		<div>
    // 			<button>
    // 				Delete Note
    // 			</button>
    // 		</div>
    // 	</div>
    let txt = document.getElementById("entertext");
    let notes = localStorage.getItem("notes");


    if(txt.value == "") {alert("Note is Empty! ");}
    
    else
    {
        console.log(txt.value);
        if(notes == null) notesObj = [];
        else notesObj = JSON.parse(notes);

        notesObj.push(txt.value);
        localStorage.setItem("notes",JSON.stringify(notesObj));
        
        txt.value = "";
   
    }
    showNotes();
}


function showNotes()
{
   
    let notes = localStorage.getItem("notes");
    
   
    if(notes == null)
    {
        notesObj = [];
    }
    else notesObj = JSON.parse(notes);

    
  

    let html = "";

    for (let index = notesObj.length-1; index >= 0 ; index--) {
        const element = notesObj[index];
        html += `  <div class="note">
         		<div class="area">
                    <p>  ${element} </p>
         		</div>
         		<div>
         			<button id = "${index}" onclick="deleteNote(this.id)">
         				Delete Note
         			</button>
         		</div>
         	</div>`;

    }
    let checknotes = document.getElementById("allnotes");
    if(notesObj.length!=0)
        checknotes.innerHTML = html;
    else
        checknotes.innerHTML = "<h1>Nothing to Show! Add a Note.</h1>";

}


function deleteNote(index)
{
    var x = confirm("Do you really want to Delete this Note?");
    if(x) deleteNote0(index);
}


function deleteNote0(index) {

    let notes = localStorage.getItem("notes");
    if(notes == null)
    {
        notesObj = [];
    }
    else
    {
        notesObj = JSON.parse(notes);
    }

    notesObj.splice(index,1);
    localStorage.setItem("notes",JSON.stringify(notesObj));
    showNotes();

}

var p = document.getElementById("allNote").addEventListener("click",delall);

function delall()
{
    let notes = localStorage.getItem("notes");
    if(notes == null) 
     alert("There are NO Notes!");
     else
     {
        if(confirm("Do you want to Delete All Notes?"))
        { 
            notesObj = JSON.parse(notes);
            notesObj = [];
            localStorage.clear();
            showNotes();
        }
     }
}


document.getElementsByTagName("footer")[0].addEventListener("click",linkedin);
function linkedin()
{
    window.open("https://www.linkedin.com/in/shubham-shrivastava-2000/");
}







// document.getElementsByClassName("search")[0].addEventListener("input",abc);
// function abc()
// {
//     var x = document.getElementsByClassName("search")[0];
//     var xval = x.val;

//     let notecards = document.getElementsByClassName("note");
//     for (let index = 0; index < notecards.length; index++) {
//         const element = notecards[index];

//         let cardTxt = element.getElementsByTagName("p")[0];
//         console.log(cardTxt);

//     }
// }

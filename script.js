//EVENTOS
document.querySelector("#creatNoteInput").addEventListener("click", ()=>{
    document.querySelector(".creatNoteDiv").style.display = "none"
    document.querySelector(".writeNoteBigDiv").style.display = "flex"
})

document.querySelector("button").addEventListener("click", ()=>{
    document.querySelector(".writeNoteBigDiv").style.display = "none"
    document.querySelector(".creatNoteDiv").style.display = "block"

    let inputTitle = document.querySelector("#writeNoteTitle").value
    let inputContent = document.querySelector("#writeNoteContent").value

    if(inputTitle.length > 0){
        let notesArea = document.createElement("div")
        notesArea.innerHTML = 
            `<div class="note">
                <div class="noteTitle">${inputTitle}</div>
                <div class="noteContent">${inputContent}</div>
            </div>`

        document.querySelector(".notesCreatedArea").append(notesArea)
        document.querySelector(".notesCreatedArea").style.display = "flex"

        document.querySelector("#writeNoteTitle").value = ""
        document.querySelector("#writeNoteContent").value = ""

        
        document.querySelectorAll(".note").forEach((e)=>{
            if(e.querySelector(".noteDelete")){
                
            }
            else{
                let divButton = document.createElement("div")
                divButton.innerHTML = 
                `<div class="noteDelete">
                    <button>Excluir</button>
                </div>`

                e.append(divButton)

                e.querySelector(".noteDelete").addEventListener("click",()=>{
                    e.style.display = "none" 
                })
            }
        })
    }
    else if(inputContent.length > 0){
        let notesArea = document.createElement("div")
        notesArea.innerHTML = 
            `<div class="note">
                <div class="noteTitle">${inputTitle}</div>
                <div class="noteContent">${inputContent}</div>
            </div>`


        document.querySelector(".notesCreatedArea").append(notesArea)
        document.querySelector(".notesCreatedArea").style.display = "flex"

        document.querySelector("#writeNoteTitle").value = ""
        document.querySelector("#writeNoteContent").value = ""

        document.querySelectorAll(".note").forEach((e)=>{
            if(e.querySelector(".noteDelete")){
                
            }
            else{
                let divButton = document.createElement("div")
                divButton.innerHTML = 
                `<div class="noteDelete">
                    <button>Excluir</button>
                </div>`

                e.append(divButton)

                e.querySelector(".noteDelete").addEventListener("click",()=>{
                    e.style.display = "none" 
                })
            }
        })
    }
})





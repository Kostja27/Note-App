import { render, remove, renderArchive,addInput,removeInput,takeDataInput,changeInput } from "./render.js";


//Initial Information
let store = [
     { Name: "Shopping list", Craeted: "2022-08-24", Categori: "Task", Content: "Milk", Dates: "", Statuse:  true },
     { Name: 'City', Craeted: "2022-04-23", Categori: "Random Thought", Content: "Go to the museum", Dates: "", Statuse: false },
     { Name: "Book", Craeted: "2022-09-17", Categori: "Random Thought", Content: "Read something", Dates: "", Statuse: true },
     { Name: "life", Craeted: "2022-03-28", Categori: "Target", Content: "Run 1 km", Dates:" 3/5/2021, 5/5/2021", Statuse: true },
     { Name: "Create App", Craeted: "2022-01-26", Categori: "Idea", Content:"Create to do list", Dates: "", Statuse:false },
     { Name: "Shopping list", Craeted: "2022-05-18", Categori: "Task", Content: "Porridge", Dates: "", Statuse: true },
     { Name: "life", Craeted: "2022-03-24", Categori: "Random Thought", Content: "I am the best", Dates: "", Statuse: true },
]

//initial rendering
render(store, true)
eventDelegation()


//Button which add new row
let addButton = document.querySelector(".addTabele")
function showInput(){
    addInput();
    addButton.addEventListener("click", addDate)
    addButton.removeEventListener("click",showInput)
    eventDelegation()
}
function addDate(){
    remove(store, true)
    let a=takeDataInput()
    store.push(a)
    removeInput()
    render(store, true)
    eventDelegation()
    addButton.addEventListener("click",  showInput)
    addButton.removeEventListener("click",  addDate)
}
addButton.addEventListener("click", showInput)


//show and hide archive button
let archiveButton = document.querySelector(".archive")
function showArchive() {
    archiveButton.addEventListener("click", hideArchive)
    archiveButton.removeEventListener("click", showArchive)
    remove(store, true)
    renderArchive(store,false)
    eventDelegation()
}
function hideArchive() {
    archiveButton.addEventListener("click", showArchive)
    archiveButton.removeEventListener("click", hideArchive)
    remove(store, false)
    render(store, true)
    eventDelegation()
}
archiveButton.addEventListener("click", showArchive)



///eventDelegation for others button 
function eventDelegation() {

    //Button which remove row
    let removeButton = document.querySelectorAll(".remove")
    function deleteItems() {
        let a = event.currentTarget.closest(".row").id.substring(6);
        if (store[a].Statuse) {
            remove(store, true)
            store.splice(a, 1)
            render(store, true)
            eventDelegation()
        } else if (store[a].Statuse == false) {
            remove(store, false)
            store.splice(a, 1)
            renderArchive(store, false)
            eventDelegation()
        }
    }
    removeButton.forEach(it => {
        it.addEventListener("click", deleteItems)
    })

     //Button which change row
    let changeButton = document.querySelectorAll(".change")
    function changeItems() {
         let a = event.currentTarget.closest(".row").id.substring(6);
         changeInput(a, store,true)
        eventDelegation()
    }
    changeButton.forEach(it => {
        it.addEventListener("click", changeItems)
    })

    //Button which add change in current row
   let addChange = document.querySelectorAll(".add")
    function changeDate() {
         let a = event.currentTarget.closest(".row").id.substring(6);
        let data= changeInput(a, store,false)
        store[a]=data
        console.log(data)
        remove(store, true)
         render(store, true)
        eventDelegation()
    }
    addChange.forEach(it => {
        it.addEventListener("click",changeDate)
    })

    //Button which add row in archive 
    let archiveButton = document.querySelectorAll(".onArchive")
    function onArchive() {
        let a = event.currentTarget.closest(".row").id.substring(6);
        if (store[a].Statuse != false) {
            remove(store,true)
            store[a].Statuse = false
            render(store,true)
            eventDelegation()
        } else if (store[a].Statuse == false) {
            remove(store, false)
            store[a].Statuse = true
            renderArchive(store, false)
            eventDelegation()
        }
    }
    archiveButton.forEach(it => {
        it.addEventListener("click", onArchive)
    })
}



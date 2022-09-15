
// function which render row 
function render(store, condition) {
    if (condition) {
        store.map(function (items, id) {
            if (items.Statuse == true) {
                const elem = document.querySelector(".TabeleDateInfo")
                const newElement = document.createElement("div");
                newElement.id = `items_${id}`
                newElement.classList.add("row")
                newElement.innerHTML = `<span class="rowDate">${items.Name}</span> <span class="rowDate">${items.Craeted}</span><span class="rowDate">${items.Categori}</span><span class="rowDate">
       ${items.Content}</span><span class="rowDate">${items.Dates}</span><span class="rowDate"><button class='change'>change</button><button class='onArchive'>arch</button><button class='remove'>Del</button></span>`;
                elem.after(newElement)
            }
        })
    } else if (condition == false) {
        store.map(function (items, id) {
            if (items.Statuse == true) {
                const elem = document.querySelector(".TabeleDateInfo")
                const newElement = document.createElement("div");
                newElement.id = `items_${id}`
                newElement.classList.add("row")
                newElement.innerHTML = `<span class="rowDate">${items.Name}</span> <span class="rowDate">${items.Craeted}</span><span class="rowDate">${items.Categori}</span><span class="rowDate">
       ${items.Content}</span><span class="rowDate">${items.Dates}</span><span class="rowDate"><button class='change'>change</button><button class='onArchive'>arch</button><button class='remove'>Del</button></span>`;
                elem.after(newElement)
            }
        })
    }
    const elem = document.querySelector(".addTabele")
    elem.classList.remove("disappear")
    renderStatistics(store)
}
export { render }



// function which render Archive 
function renderArchive(store, condition) {
    if (condition) {
        store.map(function (items, id) {
            if (items.Statuse == true) {
                const elem = document.querySelector(".TabeleDateInfo")
                const newElement = document.createElement("div");
                newElement.id = `items_${id}`
                newElement.classList.add("row")
                newElement.innerHTML = `<span class="rowDate">${items.Name}</span> <span class="rowDate">${items.Craeted}</span><span class="rowDate">${items.Categori}</span><span class="rowDate">
           ${items.Content}</span><span class="rowDate">${items.Dates}</span><span class="rowDate"><button class='onArchive'>arch</button><button class='remove'>Del</button></span>`;
                elem.after(newElement)
            }
        })
    } else if (condition == false) {
        store.map(function (items, id) {
            if (items.Statuse == false) {
                const elem = document.querySelector(".TabeleDateInfo")
                const newElement = document.createElement("div");
                newElement.id = `items_${id}`
                newElement.classList.add("row")
                newElement.innerHTML = `<span class="rowDate">${items.Name}</span> <span class="rowDate">${items.Craeted}</span><span class="rowDate">${items.Categori}</span><span class="rowDate">
           ${items.Content}</span><span class="rowDate">${items.Dates}</span><span class="rowDate"><button class='onArchive'>arch</button><button class='remove'>Del</button></span>`;
                elem.after(newElement)
            }
        })
    }
    const elem = document.querySelector(".addTabele")
    elem.classList.add("disappear")
    renderStatistics(store)
}
export { renderArchive }



// function which render row which show Statistics
function renderStatistics(store) {
    let numberCategori = [
     {name:"Task",Active:0,Archived:0},
    { name:"Random Thought",Active:0,Archived:0},
    {name:'Target',Active:0,Archived:0},
    {name:'Idea',Active:0,Archived:0}
    ];
    numberCategori.map(function(item){ 
        item.Active+=store.reduce(function(data,items){
           if(item.name==items.Categori&&items.Statuse==true){return data+1}else{return data}
        },  0)
        item.Archived+=store.reduce(function(data,items){
            if(item.name==items.Categori&&items.Statuse!=true){return data+1}else{return data}
         },  0)
    })
    numberCategori.forEach(function(items){
        const elem = document.querySelector(".TabeleStatistics")
        const newElement = document.createElement("div");
        newElement.classList.add("rowStatistics")
        newElement.innerHTML = `<span class="rowDate">${items.name}</span> 
        <span class="rowDate">${items.Active}</span>
        <span class="rowDate">${items.Archived}</span>`;
             elem.after(newElement)
    })
}

// function which render Input for add row
function addInput(){
                const elem = document.querySelector(".addTabele")
                const newElement = document.createElement("div");
                newElement.id = `input`
                newElement.classList.add("rowInput")
                newElement.innerHTML=`<input style="width: 15%" class="input1"></input><input class="input2" type="date"></input><select class="input3">
                <option>Task </option>
                <option>Random Thought</option>
                <option>Target</option>
                <option>Idea</option>
              </select><textarea  class="input4"></textarea><textarea class="input5"></textarea><div></div>`
                elem.before(newElement)
}
export { addInput }


//function which take date for row whith Statistics 
function takeDataInput(){
    let a={ Name:null, Craeted: null, Categori: null, Content: null, Dates:"", Statuse: null }
    let data1 = document.querySelector(".input1")
    a.Name=data1.value
    let data2 = document.querySelector(".input2")
    a.Craeted=data2.value
    let data3 = document.querySelector(".input3")
    a.Categori=data3.value
    let data4 = document.querySelector(".input4")
    a.Content=data4.value
    let data5 = document.querySelector(".input5")
    a.Dates=data5.value
    a. Statuse=true
    return  a
}
export { takeDataInput}


// function which render Input to change current row
function changeInput(a,store,booleon){
    if(booleon){
        let elem = document.querySelector(`#items_${a}`)
        elem.innerHTML=`<input style="width: 15%" value="${store[a].Name}" class="input1"></input><input class="input2" value="${store[a].Craeted}" type="date"></input><select  class="input3">
        <option>Task </option>
        <option>Random Thought</option>
        <option>Target</option>
        <option selected="selected" value="${store[a].Categori}">${store[a].Categori}</option>
        <option>Idea</option>
      </select><textarea class="input4">${store[a].Content}</textarea><textarea class="input5"></textarea><button class='add'>change</button><div></div>`      
    }else if(booleon==false){
        let date=takeDataInput()
        return date
    }
    }
export { changeInput}


// function which delete Input which  change  row
function removeInput (){
    const newElement = document.getElementById("input")
    newElement.remove()
}
export { removeInput }



// function which  delete row 
function remove(store, condition) {
    if (condition) {
        store.map(function (items, id) {
            if (items.Statuse == true) {
                let elem = document.querySelector(`#items_${id}`)
                elem.remove()
            }
        })
    } else if (condition == false) {
        store.map(function (items, id) {
            if (items.Statuse == false) {
                let elem = document.querySelector(`#items_${id}`)
                elem.remove()
            }
        })
    }
    for(let i=0;i<4;i++){
        const TabeleStatistics = document.querySelector(".rowStatistics")
        TabeleStatistics.remove()  
    }
    const elem = document.querySelector(".addTabele")
    elem.classList.remove("disappear")
}
export { remove }

















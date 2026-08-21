let urlArr = []

const input_id = document.getElementById("input-el")
const btn_id = document.getElementById("saveBtn")
const ul_id = document.getElementById("ul-id")
const con_id = document.getElementById("container")

let lsArray = JSON.parse(localStorage.getItem("Array"))

btn_id.addEventListener("click", function(){
    add(input_id.value)
    logArray()
    input_id.value = ""
    
})

function add(str){
    if(str != ""){
        urlArr.push(str)
    }
}

function logArray(){
    let listItems = ""
    for (let i=0; i<urlArr.length; i++){
        listItems += `<li><a target='_blank' href='${urlArr[i]} '>${urlArr[i]}</a></li>`
        ul_id.innerHTML = listItems
        localStorage.setItem("Array", JSON.stringify(urlArr[i]))
    }
}

function buy(){
    document.body.innerHTML += "<p>Thank you for buying</p>"
}


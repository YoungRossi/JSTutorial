let urlArr = ["Batman", "Superman", "Wolverine"] 
let inputVal = ""

const input_id = document.getElementById("input-el")
const btn_id = document.getElementById("saveBtn")
const ul_id = document.getElementById("ul-id")
const body_id = document.getElementById("body-id")

//maybe add content into a div

btn_id.addEventListener("click", function(){
    inputVal = input_id.value 
    urlArr.push(inputVal)
    logArray()
    input_id.value = ""
})

function logArray(){
    for (let i=0; i<urlArr.length; i++){
        let li = document.createElement("li")
        li.textContent = urlArr[i]
        ul_id.append(li)
        console.log(urlArr[i])

    }
}

function buy(){
    document.body.innerHTML += "<p>Thank you for buying</p>"
}
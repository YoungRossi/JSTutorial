let urlArr = [] 
let inputVal = ""

const input_id = document.getElementById("input-el")
const btn_id = document.getElementById("saveBtn")


btn_id.addEventListener("click", function(){
    inputVal = input_id.value 
    urlArr.push(inputVal)
    console.log(urlArr)
})
//document.getElementById("count").innerText = 5
let count = 0
let message = "You have tree new notifications"

function increment(){
count += 1
document.getElementById("count").innerText = count
console.log(count)
}

function save(){
    console.log(count)
    document.getElementById("save_text").innerText = "Amount of people " + count + "-"
}

function reset(){
    count = 0
    document.getElementById("count").innerText = count
}

const btnElement = document.getElementById("dblclickBtn");

btnElement.addEventListener("dblclick", function(){
    document.body.style.backgroundColor = "lightblue"
    alert("You double click me ☺")
})
let inputs = document.getElementById("ip");
let text = document.querySelector(".text");

function Add(){
    if(inputs.value == ""){
        alert("Please Enter Task")
    }else{
        let Element = document.createElement("ul");
        Element.innerHTML=`${inputs.value} <i class="fa-solid fa-trash"></i>`;
        text.appendChild(Element);
        inputs.value="";
        Element.querySelector("i").addEventListener("click" , remove);
        function remove(){
            Element.remove()
        }
    }
}

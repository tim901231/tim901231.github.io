const text=document.getElementById("text");
const btn=document.getElementById("btn");
const word=document.getElementById("word");
let node = document.createTextNode("This is a new paragraph.");

console.log(word);
let x=1;
btn.onclick = () =>{
    text.style.color="red";
    //window.alert("hey");
    let node2 = document.createTextNode(x);
    let node3 = document.createElement("div");
    node3.appendChild(node2);
    word.appendChild(node3);
    x += 1;
}

text.onmouseover = () =>{
    text.innerText = "Take away";
}
text.onmouseout = () =>{
    text.innerText = "hi";
}

function changeColor(){
    let color=document.getElementById("container1");
    let color1=document.getElementById("input1");
    console.log(color1.value)
    document.getElementById(color).innerHTML=color1
}
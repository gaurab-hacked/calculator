let display = document.getElementById("display");

let screen = "";
const btnclick=(e)=>{
    display.innerText = "";
    screen += e;
    display.innerText=screen;
    if(e==="c"){
        screen="";
        display.innerText = "";
    }
}

const btnclickisequal = ()=>{
    if(screen!==""){
        display.innerText = "";
        try{
            let ans = eval(screen);
            display.innerText=ans;
            screen = ans;
        }
        catch{
            display.innerText="Error!";
        }
    }

}

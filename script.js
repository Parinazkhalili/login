

let input=document.querySelector(".input-1");
let password=document.querySelector(".input-2");



const showHandler= () => {

    console.log(input)
    input.className="inp";
   
    password.className=""
  
  
}
const passwordHandler= () => {
   

    password.className="inp"
    input.className=""

    
  
}

input.addEventListener("click", showHandler)


password.addEventListener("click", passwordHandler)








showBtn1 = document.querySelector('#show1');
abstract1 = document.querySelector('#abstract1');
showBtn2 = document.querySelector('#show2');
abstract2 = document.querySelector('#abstract2');
listBtn = document.querySelector('#listBtn');
list = document.querySelector('#list');

listBtn.addEventListener("click", ()=>{
    if(listBtn.innerHTML == "[Show list of courses]"){
        listBtn.innerHTML = "[Hide list of courses]"
    }
    else{
        listBtn.innerHTML = "[Show list of courses]"
    }
    list.classList.toggle('block')
    list.classList.toggle('hidden')
})

showBtn1.addEventListener("click", ()=> {
    if(showBtn1.innerHTML == "(Hide)"){
        showBtn1.innerHTML = "(Show Abstract)"
    }
    else{
        showBtn1.innerHTML = "(Hide)"
    }
    abstract1.classList.toggle('block')
    abstract1.classList.toggle('hidden')
})

showBtn2.addEventListener("click", ()=> {
    if(showBtn2.innerHTML == "(Hide)"){
        showBtn2.innerHTML = "(Show Abstract)"
    }
    else{
        showBtn2.innerHTML = "(Hide)"
    }
    abstract2.classList.toggle('block')
    abstract2.classList.toggle('hidden')
})

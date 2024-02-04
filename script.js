
let project = document.querySelectorAll('.working');

project.forEach((value)=>{
    value.addEventListener('click' ,function(event){
        console.log(event.target);
        event.preventDefault();
        alert('Coming Soon..')   
    },false)
})
function toggleHover(element) {
    element.classList.toggle('hover');
}
document.querySelector('#counter').addEventListener('click' ,function(event){
    event.preventDefault();
},false)

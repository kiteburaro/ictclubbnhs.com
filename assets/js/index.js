
let fruits = document.getElementsByName("fruits");

fruits.forEach(fruit =>{
    if(fruit.checked){
        console.log(fruit.value)
    }

})

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}
function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}
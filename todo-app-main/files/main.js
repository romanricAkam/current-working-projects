// links section
const form = document.querySelector('#myform')
let todo = document.querySelector('.todo-listing')
const error = document.querySelector('.error')


const active_todo = document.querySelector('.active-todo')
const completed_todo = document.querySelector('.completed-todo')
const all_todo = document.querySelector('.all-todo')


// data collected from the form

form.addEventListener('submit', e=>{
    e.preventDefault();
    const text = form.input_text.value.trim().toLowerCase()
    form.reset();

    if(text == ""){
        error.classList.remove('not-visible');
        error.classList.add('visible');
    }else{
        generateTodo(text);
    }
})

form.addEventListener("click", e => {
    e.preventDefault();
    if(error.classList.contains('visible')){
        error.classList.remove('visible');
        error.classList.add('not-visible');
    }
})


//  function to create a new todo
function generateTodo(term){
   const html =  `
    <div class="todo">
    <div class="todo-name">
        <div class="checker">

        </div>
        <h2>${term}</h2>
    </div>
    </div>
    `
  todo.innerHTML += html;

}


//marking a dodo as completed
// console.log(todo)
todo.addEventListener('click' , e =>{
    // console.log(e.target)
    if(e.target.classList.contains('cross')){
        e.target.classList.remove('cross')
        e.target.querySelector('.checker').classList.remove('bg-checker')

    }else{
        e.target.classList.add('cross')
        e.target.querySelector('.checker').classList.add('bg-checker')
    }
})

// filter the todos based on active and not active
    // console.log(todo)
    // todos = Array.from(todo.children)
    //         .filter(todo => todo.classList.contains('cross'))
    //         .forEach(todo => todo.classList.add('not-visible'))

// todos.forEach(todo =>(Array.from(todo.children))
//     .filter(tod => todo.classList.contains('cross')))
//     .forEach(tod => tod.classList.add('not-visible'))


active_todo.addEventListener('click', e => { 

    // console.log("active clicked")
    todos = Array.from(todo.children)
            .filter(todo => todo.classList.contains('cross'))
            .forEach(todo => todo.classList.add('not-visible'))

    todos = Array.from(todo.children)
            .filter(todo => !todo.classList.contains('cross'))
            .forEach(todo => todo.classList.remove('not-visible'))
})



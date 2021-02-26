const toggler = document.querySelector('.icon')
const todo_search =document.querySelector('input')
const bottom_section_bg = document.querySelector(".bottom-section")
const todo_listing = document.querySelector(".todo-listing")
const todo_control  = document.querySelector(".todo-control")

toggler.addEventListener("click", e =>{
    if(toggler.classList.contains("icon-switcher")){
        toggler.classList.remove("icon-switcher")
        toggler.classList.add("icon-switcher-light")

        todo_search.classList.remove(".todo-search-dark")
        todo_search.classList.add(".todo-search-light")


        bottom_section_bg.classList.remove("bottom-section-dark")
        bottom_section_bg.classList.add("bottom-section-light")
        
        todo_listing.classList.remove('todo-listing-dark')
        todo_listing.classList.add('box-shadow')
        todo_listing.classList.add('todo-listing-light')

        todo_control.classList.remove('todo-control-dark')
        todo_control.classList.add('todo-control-light')
        todo_listing.classList.add('control-shadow')
    }
    else{
        toggler.classList.remove('icon-switcher-light')
        toggler.classList.add("icon-switcher")

        bottom_section_bg.classList.remove("bottom-section-light")
        bottom_section_bg.classList.add("bottom-section-dark")

        todo_search.classList.remove(".todo-search-light")
        todo_search.classList.add(".todo-search-dark")

        todo_listing.classList.remove('todo-listing-light')
        todo_listing.classList.remove('box-shadow')
        todo_listing.classList.add('todo-listing-dark')

        todo_control.classList.remove('todo-control-light')
        todo_control.classList.add('todo-control-dark')
        todo_listing.classList.remove('control-shadow')

    }
})


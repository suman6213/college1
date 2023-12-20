const courseBtn = document.querySelectorAll('.two-course--btn .course-btn');
const Nav = document.querySelector('.nav-section');
const bachelorCourses = document.querySelector('.bachelor-courses');
const masterCourses = document.querySelector('.master-courses');

window.onscroll = function(){
    this.scrollY > 50? Nav.classList.add('shadow') : Nav.classList.remove('shadow');
}

courseBtn.forEach(Option => {
    Option.addEventListener('click', () =>{
        document.querySelector('.two-course--btn .bachelor').classList.remove('bachelor');
        Option.classList.add('bachelor');
    })
})

document.querySelector('.bachelor').addEventListener('click', () =>{
    masterCourses.style.display = 'none';
    bachelorCourses.style.display = 'block';
})

document.querySelector('.master').addEventListener('click', () =>{
    masterCourses.style.display = 'block';
    bachelorCourses.style.display = 'none';
})






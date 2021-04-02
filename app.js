//get the  nav items
const burger = document.querySelector('.lines');
const navLinks = document.querySelector('.nav-bar__items')
const open = document.querySelector('.nav-bar__show');
const links = document.querySelectorAll('.nav-bar__links')
const date = document.getElementById('date');

//auto date generate
date.innerHTML = new Date().getFullYear();

// toggle when click
burger.addEventListener('click', () => {
    navLinks.classList.toggle('nav-bar__show');
});




const contactForm = document.querySelector('.contact');

let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

contactForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value
    }

    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function() {
        console.log(xhr.responseText);
        if(xhr.responseText == 'success'){
            alert('Email sent');
            name.value = '';
            email.value = '';
            subject.value = '';
            message.value = '';
        }
        else {
            alert('something went wrong')
        }
    } 
    
    xhr.send(JSON.stringify(formData));
});
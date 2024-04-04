function burgerNavigation(event) {
    event.preventDefault();
    let hamburger = document.getElementById("nav-menu");
    hamburger.classList.toggle("active");
}

document.querySelector('.hamburger').addEventListener('click', burgerNavigation);



document.getElementById("sub").addEventListener("submit", function(event) {
    let fname = document.getElementById("fname").value;
    let lname = document.getElementById("lname").value;
    let phone = document.getElementById("phone").value;
    let radio = document.querySelector('input[name="sub-type"]:checked');

    if (fname === "" || lname === "" || phone === "" || radio === null) {
        alert("Please fill out all fields.");
        event.preventDefault(); 
    }
});

document.getElementById("sub2").addEventListener("submit", function(event) {
    let fname2 = document.getElementById("fname2").value;
    let lname2 = document.getElementById("lname2").value;
    let phone2 = document.getElementById("phone2").value;
    let radio2 = document.querySelector('input[name="contact-info"]:checked');
    
    if (fname2 === "" || lname2 === "" || phone2 === "" || radio2 === null) {
        alert("Please fill out all fields.");
        event.preventDefault(); 
    }
});

document.addEventListener("DOMContentLoaded", function() {
    var navLinks = document.querySelectorAll('#nav-menu a');
    navLinks.forEach(function(navLink) {
        navLink.addEventListener('click', function(event) {
            event.preventDefault();
            
            var targetId = this.getAttribute('href').substring(1);
            
            var targetSection = document.getElementById(targetId);
            
            var setTop = targetSection.offsetTop;
            
            window.scrollTo({
                top: setTop,
                behavior: 'smooth'
            });
        });
    });
});



const squares = document.querySelectorAll('.square');
const h2Element = document.querySelector('.transitioning-text h2');
const paragraphs = document.querySelectorAll('.transitioning-text p');

function handleSquareClick(event) {
    const index = Array.from(squares).indexOf(event.target);
    const h2Content = [
        "REGISTER",
        "APPLY",
        "RECEIVE"
    ];

    const pContents = [
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo."],
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet."],
        ["Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean euismod bibendum.", "Proin gravida dolor sit amet lacus accumsan et viverra."]
    ];

    h2Element.textContent = h2Content[index];
    paragraphs.forEach((paragraph, i) => {
        paragraph.textContent = pContents[index][i];
    });
}

squares.forEach(square => {
    square.addEventListener('click', handleSquareClick);
});








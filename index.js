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
            
            let targetId = this.getAttribute('href').substring(1);
            
            let targetSection = document.getElementById(targetId);
            
            let setTop = targetSection.offsetTop;
            
            window.scrollTo({
                top: setTop,
                behavior: 'smooth'
            });
        });
    });
});



const squares = document.querySelectorAll('.square');
const h2Element = document.querySelector('.transitioning-text h2');
const paragraphs = document.querySelectorAll('.tab-para');
console.log(paragraphs)
console.log(paragraphs[0])


function handleSquareClick(event) {
    const index = Array.from(squares).indexOf(event.target);
    const transitioningImages = document.querySelector('.transitioning-images');

    if (index === 0) {
        h2Element.textContent = "REGISTER";
        paragraphs[0].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.";
        paragraphs[1].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit Aenean euismod bibendum.";
    } else if (index === 1) {
        h2Element.textContent = "APPLY";
        paragraphs[0].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita repellat similique odio aspernatur ex.";
        paragraphs[1].textContent = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus accusamus expedita.";
    } else if (index === 2) {
        h2Element.textContent = "RECEIVE";
        paragraphs[0].textContent = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo.";
        paragraphs[1].textContent = "Proin gravida dolor sit amet lacus accumsan et viverra.";
    } else if (index === 3) {
        h2Element.textContent = "PHOTOS";
        paragraphs.forEach(paragraph => {
            paragraph.style.display = 'none';
        });
        transitioningImages.style.display = 'flex'; 
        return; 
    }

    
    paragraphs.forEach(paragraph => {
        paragraph.style.display = 'block';
    });
    /* transitioningImages.style.display = 'none'; */
}

squares.forEach(square => {
    square.addEventListener('click', handleSquareClick);
});









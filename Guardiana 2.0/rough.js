


function toggleSearchBar() {
    var searchBar = document.getElementById('searchBar');
    if (searchBar.style.display === 'none' || searchBar.style.display === '') {
        searchBar.style.display = 'block';
    } else {
        searchBar.style.display = 'none';
    }
}
function openLoginPage() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('loginForm').style.display = 'block';
    document.getElementById('signupForm').style.display = 'none';
}

function openSignUpPage() {
    document.getElementById('loginForm').style.display = 'none';
    document.getElementById('signupForm').style.display = 'block';
}

function closeModal() {
    document.getElementById('loginModal').style.display = 'none';
}

function login() {
    // Add login functionality here
    alert("Logged in!");
    closeModal();
}

function signup() {
    // Add signup functionality here
    alert("Signed up!");
    closeModal();
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('loginModal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
document.getElementById('searchForm').onsubmit = function() {
    var query = this.query.value;
    if (query) {
        // Redirect to search.html with query parameter
        this.action = 'search.html';
    } else {
        // Prevent form submission if query is empty
        return false;
    }
};
document.addEventListener("DOMContentLoaded", () => {
    const letters = document.querySelectorAll(".letter");

    function animateLetters() {
        letters.forEach((letter, index) => {
            letter.style.opacity = 0;  // Reset opacity
            letter.style.animation = 'none';  // Reset animation
            // Trigger reflow to restart the animation
            letter.offsetHeight;
            letter.style.animation = `fadeIn 0.5s forwards`;
            letter.style.animationDelay = `${index * 0.3}s`;
        });
    }

    animateLetters();  // Initial animation
    setInterval(animateLetters, 5000);  // Repeat animation every 5 seconds
});




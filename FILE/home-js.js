var counter = 1;
setInterval(() => {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 3){
        counter = 1;
    }
}, 5000);

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("loginModal");
    var loginLink = document.getElementById("login-link");
    var accountLink = document.getElementById("account-link");
    var span = document.getElementsByClassName("close")[0];
    var loginButton = document.getElementById("loginButton");

    function checkLoginStatus() {
        var isLoggedIn = localStorage.getItem("isLoggedIn");
        if (isLoggedIn === "true") {
            loginLink.style.display = "none";
            accountLink.style.display = "block";
        } else {
            loginLink.style.display = "flex";
            accountLink.style.display = "none";
        }
    }

    checkLoginStatus();

    loginLink.onclick = function(event) {
        event.preventDefault();
        modal.style.display = "block";
    }

    loginButton.onclick = function(event) {
        event.preventDefault();
        var nama_Admin = document.getElementById("username").value;
        var password_Admin = document.getElementById("password").value;

        var adminName = "admin"; 
        var adminPassword = "admin";

        if (nama_Admin === adminName && password_Admin === adminPassword) {
            localStorage.setItem("isLoggedIn", "true");
            modal.style.display = "none";
            checkLoginStatus();
        } else {
            alert("Invalid credentials");
        }
    }

    span.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    var accountlink = document.getElementById("account-link");
    accountlink.onclick = function () {
        window.location.href = "account.html";
    }

    var freetrial = document.getElementById("free-trial");
    freetrial.onclick = function () {
        window.location.href = "freetrial.html"; 
    }

    var home = document.getElementById("home");
    home.onclick = function () {
        window.location.href = "home.html";
    }

    var contact = document.getElementById("contact");
    contact.onclick = function () {
        window.location.href = "contact.html";
    }
});

function triggerFileInput() {
    document.getElementById('file-input').click();
}

function changeProfilePicture() {
    const fileInput = document.getElementById('file-input');
    const profileImage = document.getElementById('profile-image');
    
    const file = fileInput.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            profileImage.src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
}

function updateProfile() {
    var modal = document.getElementById('update-modal');
    var btn = document.getElementById('update');
    var span = document.getElementsByClassName('close')[0];
    var cancelbtn1 = document.getElementsByClassName('cancelbtn1')[0];
    var updateBtn = document.getElementsByClassName('updatebtn')[0];
    
    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    cancelbtn1.onclick = function() {
        modal.style.display = 'none';
    }

    updateBtn.onclick = function() {
        alert('Account Update');
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    localStorage.removeItem("isLoggedIn");
}

function deleteProfile() {
    var modal = document.getElementById('delete-modal');
    var btn = document.getElementById('delete');
    var span = document.getElementsByClassName('close')[0];
    var cancelBtn = document.getElementsByClassName('cancelbtn')[0];
    var deleteBtn = document.getElementsByClassName('deletebtn')[0];

    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }

    cancelBtn.onclick = function() {
        modal.style.display = 'none';
    }

    deleteBtn.onclick = function() {
        alert('Account deleted');
        modal.style.display = 'none';
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }
}

function daftarmodal() {
    var modal = document.getElementById('login-modal');
    var btn = document.getElementById('daftar');
    var span = document.getElementsByClassName('close')[0];
    
    btn.onclick = function() {
        modal.style.display = 'block';
    }

    span.onclick = function() {
        modal.style.display = 'none';
    }
}

var daftar = document.getElementById('daftar');
var form = document.getElementById('trialForm');

daftar.addEventListener('click', function() {
    if (form.checkValidity()) {
        alert('Tunggu Email dari Kami ya');
    } else {
        alert('Mohon isi semua bidang terlebih dahulu');
    }
});

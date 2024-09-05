// Function to handle the search
function searchFunction() {
    // Get the input field and convert its value to uppercase
    let input = document.getElementById('searchInput');
    let filter = input.value.toUpperCase();

    // Get all the vacation cards
    let vacationRequests = document.getElementById('vacationRequests');
    let cards = vacationRequests.getElementsByClassName('vacation-card');

    // Loop through all cards and hide those that don't match the search query
    for (let i = 0; i < cards.length; i++) {
        let name = cards[i].getElementsByTagName('h4')[0];
        if (name) {
            let txtValue = name.textContent || name.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                cards[i].classList.remove('hidden-card');  // Remove the hidden class
            } else {
                cards[i].classList.add('hidden-card');  // Add the hidden class
            }
        }
    }
}


// Function to handle "Select All" checkbox
function toggleSelectAll(source) {
    let checkboxes = document.querySelectorAll('.vacation-checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].checked = source.checked;
    }
}

// Function to manage the state of the "Select All" checkbox based on individual checkboxes
function toggleIndividualCheckbox() {
    let selectAll = document.getElementById('selectAll');
    let checkboxes = document.querySelectorAll('.vacation-checkbox');
    let allChecked = true;

    for (let i = 0; i < checkboxes.length; i++) {
        if (!checkboxes[i].checked) {
            allChecked = false;
            break;
        }
    }

    selectAll.checked = allChecked;
}

// Attach the individual checkbox toggle to each checkbox
document.addEventListener('DOMContentLoaded', function() {
    let checkboxes = document.querySelectorAll('.vacation-checkbox');
    for (let i = 0; i < checkboxes.length; i++) {
        checkboxes[i].addEventListener('click', toggleIndividualCheckbox);
    }
});

// Load the navbar from an external HTML file
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar-container').innerHTML = data;

        // Highlight the active link
        const currentPath = window.location.pathname.split('/').pop();
        document.querySelectorAll('.nav-link').forEach(link => {
            if (link.getAttribute('href') === currentPath) {
                link.classList.add('active');
                link.style.fontWeight = 'bold';
            }
        });
    })
    .catch(error => console.error('Error loading navbar:', error));

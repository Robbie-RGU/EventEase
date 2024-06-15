// session_selection.html
function proceedToRegistration(event) {
    event.preventDefault();
    const selectedSessions = [];
    
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(checkbox => {
        if (checkbox.checked) {
            selectedSessions.push(checkbox.nextElementSibling.textContent);
        }
    });
    
    if (selectedSessions.length > 0) {
        const params = new URLSearchParams({
            event: document.querySelector('#event-name').textContent,
            sessions: selectedSessions.join(',')
        });
        window.location.href = 'registration.html?' + params.toString();
    } else {
        alert('Please select at least one session.');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const eventName = params.get('event');
    if (eventName) {
        document.querySelector('#event-name').textContent = eventName;
    }
});

// registration.html
function submitForm(event) {
    event.preventDefault();
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const contact = document.querySelector('#contact').value;
    
    console.log('Form Submitted!', { name, email, contact });
    
    alert(Registration Successful! Name: ' + name + ', Email: ' + email + ', Contact: ' + contact);
    
    document.querySelector('#registration-form').reset();
}

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const eventName = params.get('event');
    const sessions = params.get('sessions');
    if (eventName) {
        document.querySelector('#event-name').textContent = eventName;
    }
    if (sessions) {
        document.querySelector('#sessions-selected').textContent = 'Selected Sessions: ' + sessions.split(',').join(', ');
    }
});
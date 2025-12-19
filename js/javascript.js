// Contact Page
// Create popup notification
function popup(message = "Default Message", type = "success") {
    let popupDiv = document.createElement('div');
    popupDiv.className = `alert alert-${type} alert-dismissible text-center fade show`;
    popupDiv.role = "alert";
    popupDiv.innerHTML = `
	<button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    <strong>${type.charAt(0).toUpperCase() + type.slice(1)}</strong> ${message}
	`
    const container = document.querySelector('#alertContainer');
    container.appendChild(popupDiv);

    setTimeout(() => {
        popupDiv.remove();
    }, 10000);
}

let formConfirm = document.querySelector('#contactForm');
formConfirm.addEventListener('submit', function(event) {
    event.preventDefault();
    popup("Sorry your message and been send into the void (Backend in development)", "success")
    // popup("Your message and been send accross space and time 🎉", "success")
});

/* Example from bootstrap
<div class="alert alert-success alert-dismissible">
  <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
  <strong>Success!</strong> This alert box could indicate a successful or positive action.
</div>
*/

// Calculate how many character type
let textarea = document.querySelector('#contactMessage');
let currentCount = document.querySelector('#currentCount');
let maxCount = document.querySelector('#maxCount');

maxCount.textContent = textarea.getAttribute('maxlength');

textarea.addEventListener('input', function() {
    currentCount.textContent = this.value.length;
});

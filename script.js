// Validate Form Data

let formBox = document.getElementById('form')
let usernameInput = document.getElementById('username')
let passwordInput = document.getElementById('password')
let passwordConfirmInput = document.getElementById('password_confirmation')
let errorsBox = document.getElementById('errors')

formBox.addEventListener('submit' , (e) => {
	let messages = []
	
	// Check Username Field
	if (usernameInput.value === '' || usernameInput == null) {
		messages.push('The Username is Required')
	}
  
	// Check Password Field
	if (passwordInput.value.length <= 6) {
		messages.push('The Minimum Value Must Be 6 Characters')
	}

	if (passwordInput.value.length > 20) {
		messages.push('The Maximum Value Must Be 20 Characters')
	}
  
	if (passwordInput.value == 'password') {
		messages.push('The Password Field Can not Hold the password value')
	}
	
	// Check PasswordConfirmation Field
	if (passwordInput.value != passwordConfirmInput.value) {
		messages.push('The Two Fields Are Not Consistents')
	}
  
	// if there're errors
	if (messages.length > 0) {
		errorsBox.innerText = messages.join(' ')    // insert a message.
		e.preventDefault() // Dont't Submit The Form.
	}
	
})


// Show and Hide Password
let eyeIcon = document.getElementById('eye')
let shown = false       

function toggle() {
	if (shown) {             // if shown password and the user clicked the eye icon .. hide the password.
		passwordConfirmInput.setAttribute("type", "password");
		eyeIcon.style.color = '#7a797e'
		shown = false
	} else {                 // if hidden password and the user clicked the eye icon .. show the password.
		passwordConfirmInput.setAttribute("type", "text");
		eyeIcon.style.color = '#5887ef'
		shown = true
	}
}
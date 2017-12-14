(function () {
	function init() {
		initFirebase();
		$(document).foundation();
		$('#registerForm').on('submit', onSubmittedRegisterForm);
		checkAuth()
	}

	function checkAuth() {
		firebase.auth().onAuthStateChanged(function(user) {
  			if (user) {
			   window.location = "tacoline.html";
			}
		});
	}

	function initFirebase() {
		var config = {
		    apiKey: "AIzaSyA4zIuBM5ZqHW5n5mme5NWGMW5s7rn24o4",
		    authDomain: "tacstagram.firebaseapp.com",
		    databaseURL: "https://tacstagram.firebaseio.com",
		    projectId: "tacstagram",
		    storageBucket: "tacstagram.appspot.com",
		    messagingSenderId: "528279984684"
		};
		firebase.initializeApp(config);
	}

	function saveUser(user) {
		firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
		.then(function (user) {
			console.log(user);
		})
		.catch(function(error) {
		  console.error(error);
		});
	}

	function validateForm(form) {
		var fields = form.querySelectorAll('.access-form__field');
		fields.forEach(validateField);
	}

	function validateField(field) {
		var input = field.querySelector('input');
		var iconContainer = field.querySelector('.container__icon--invalid');
		iconContainer.classList.add('hide');
		input.classList.remove('access-form__input--invalid');
		if (!input.checkValidity()) {
			iconContainer.classList.remove('hide');
			input.classList.add('access-form__input--invalid');
		}
	}

	function getUserFromForm(form) {
		var user = {};
		user.email = form.querySelector("[name='identifier']").value;
		user.password = form.querySelector("[name='password']").value;
		return user;
	}

	function onSubmittedRegisterForm(event) {
		event.preventDefault();
		var form = event.target;
		if (!form.checkValidity()) {
			validateForm(form);
		} else {
			saveUser(getUserFromForm(form));
		}
	}
	
	$(document).ready(init);
})();


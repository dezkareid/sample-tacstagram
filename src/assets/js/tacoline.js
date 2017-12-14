(function () {
	function init() {
		initFirebase();
		$(document).foundation();
		initStickyBar();
		checkAuth();
	}
	
	function initStickyBar() {
		$('.title-bar').on('sticky.zf.stuckto:top', function(){
	  		$(this).addClass('shrink');
	  		$("#logo").addClass('logo--invisible')
		})
		.on('sticky.zf.unstuckfrom:top', function(){
	  		$(this).removeClass('shrink');
	  		$("#logo").removeClass('logo--invisible')
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

	function checkAuth() {
		firebase.auth().onAuthStateChanged(function(user) {
  			if (!user) {
			   window.location = "index.html";
			}
		});
	}

	$(document).ready(init);
})()






// .popup-show
      var linkForm = document.querySelector(".page-form");
	  var modalForm = document.querySelector(".popup-show");
	   	  /*overlayForm = document.querySelector(".popup-overlay"),
		  closeAll = document.querySelector(".popup-show__close"),
		  formOpen = modalForm.querySelector("form");*/
		  
	  linkForm.addEventListener("click", function(event) {
		  event.preventDefault();
		  modalForm.classList.add("popup-show__open");
		  console.log("Я сделаю это!");
		  /*event.preventDefault();
		  modalForm.classList.add("popup-show__open");
		  overlayForm.classList.add("popup-overlay__open");*/
	  });
var link = document.querySelector(".login-link");
var mapLink = document.querySelector(".contacts-button-map"); 
/*var linkmap=document.querySelector(".map-link");*/
var popup = document.querySelector(".modal-login");
var mapPopup = document.querySelector (".modal-map");
/*var popupmap = document.querySelector(".modal-map");*/
var login = popup.querySelector("[name=login]");
var close = document.querySelector(".modal-close");
var mapClose = mapPopup.querySelector(".modal-close");
var form = popup.querySelector("form");
var password = popup.querySelector("[name=password]");

var isStorageSuport = true;
var storage= "";

try {
  storage = localStorage.getItem("login");
} catch(err) {
  isStorageSuport = false;
  
}

link.addEventListener("click",function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value=storage;
    password.focus();
  }
  else 
  login.focus();
}); 

mapLink.addEventListener("click",function(evt){
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
})

close.addEventListener("click",function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});  

mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
})
   
form.addEventListener("submit", function(evt){
  if (!login.value || !password.value) {
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth; 
    popup.classList.add("modal-error");
  } else {
    if (isStorageSuport) {
    localStorage.setItem("login", login.value);
    }
  }
});  

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains ("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

window.addEventListener("keydown",function(evt){
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
})


  
/*
var mapLinkA = document.querySelector(".contacts-button-mapA");
    

    mapLinkA.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.add("modal-show");
    });

    mapClose.addEventListener("click", function(evt) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    });

    window.addEventListener("keydown", function(evt) {
      if (evt.keyCode === 27) {
        if (mapPopupA.classList.contains("modal-show")) {
          evt.preventDefault();
          mapPopup.classList.remove("modal-show");
        }
      }
    });*/
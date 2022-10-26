// Client Review Slider **************
var swiper = new Swiper(".mySwiper", { spaceBetween: 30 });

// FAQ Accordion **************
const faqItem = document.querySelectorAll(".faq_content");

for (const faq of faqItem) {
  faq.addEventListener("click", function () {
    for (item of faqItem) {
      if (item) {
        item.classList.remove("active");
      }
    }
    faq.classList.toggle("active");
  });
}

/* ******************* Navbar Show Hide on Scroll  ******************* */
$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $("header").addClass("active");
  } else {
    $("header").removeClass("active");
  }
});

/* ******************* Responsive Navbar  ******************* */
const burgerMenu = document.querySelector(".burger_menu");
const navBar = document.querySelector(".nav_links");

burgerMenu.addEventListener("click", () => {
  navBar.classList.toggle("nav_menu_active");
  burgerMenu.classList.toggle("menu_open");
});

/* ******************************* POPUP CALLOUT ******************************* */
const callBtn = document.querySelectorAll("#popup_call"),
  closeBTN = document.querySelector(".close_btn"),
  mainPopup = document.querySelector(".popup"),
  popupOverlay = document.querySelector(".popup_overlay"),
  overflow = document.querySelector("body"),
  successMessage = document.querySelector(".form_success"),
  popupFromSubmit = document.querySelector("#popup_form_submit"),
  // form input*******

  allFormField = document.querySelectorAll(".p_field"),
  fullName = document.querySelector("#p_full_name"),
  emailAddress = document.querySelector("#p_email"),
  phoneNumber = document.querySelector("#p_phone"),
  webSite = document.querySelector("#p_website");

const popupClose = function () {
    mainPopup.classList.remove("popup_active"),
      overflow.classList.remove("popup_open");
  },
  popupOpen = function () {
    mainPopup.classList.add("popup_active"),
      overflow.classList.add("popup_open");
  };

if (callBtn !== null) {
  for (j = 0; j < callBtn.length; j++)
    callBtn[j].addEventListener("click", function (e) {
      e.preventDefault(), popupOpen();
    });
}

if (mainPopup !== null) {
  closeBTN.addEventListener("click", popupClose);
  popupOverlay.addEventListener("click", popupClose);

  popupFromSubmit.addEventListener("click", (e) => {
    e.preventDefault();

    for (var i = 0; i < allFormField.length; i++) {
      if (
        allFormField[i].value === "" &&
        allFormField[i].hasAttribute("required")
      ) {
        allFormField[i].classList.add("required");
        // alert("There are some required fields!");
        return false;
      } else {
        allFormField[i].classList.remove("required");
      }
    }

    popupFromSubmit.classList.add("disabled");
    setTimeout(function () {
      successMessage.classList.add("show");
      fullName.value = "";
      emailAddress.value = "";
      phoneNumber.value = "";
      webSite.value = "";
    }, 1500);

    setTimeout(function () {
      popupClose();
      successMessage.classList.remove("show");
      popupFromSubmit.classList.remove("disabled");
    }, 5000);
  });
}

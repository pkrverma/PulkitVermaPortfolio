/* ===================================== typing animation ===================================== */
var typed = new Typed(".typing", {
  strings: [
    "Web Developer",
    "App Developer",
    "Web Designer",
    "Frontend Developer",
  ],
  typeSpeed: 100,
  BackSpeed: 60,
  loop: true,
});

/* ===================================== Aside ===================================== */
const nav = document.querySelector(".nav"),
  navList = nav.querySelectorAll("li");
(totalNavList = navList.length),
  (allSelection = document.querySelectorAll(".section")),
  (totalSelection = allSelection.length);

for (let i = 0; i < totalNavList; i++) {
  const a = navList[i].querySelector("a");
  a.addEventListener("click", function () {
    removeBackSection();
    for (let j = 0; j < totalNavList; j++) {
      if (navList[j].querySelector("a").classList.contains("active")) {
        addBackSection(j);
      }
      navList[j].querySelector("a").classList.remove("active");
    }

    this.classList.add("active");
    showSection(this);
    if (window.innerWidth < 1200) {
      asideSectionTogglerBtn();
    }
  });
}
function showSection(element) {
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.remove("active");
  }

  const target = element.getAttribute("href").split("#")[1];
  document.querySelector("#" + target).classList.add("active");
}
function removeBackSection() {
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.remove("back-section");
  }
}
function addBackSection(num) {
  allSelection[num].classList.add("back-section");
}

function updateNav(element) {
  for (let i = 0; i < totalNavList; i++) {
    navList[i].querySelector("a").classList.remove("active");
    const target = element.getAttribute("href").split("#")[1];
    if (
      target ===
      navList[i].querySelector("a").getAttribute("href").split("#")[1]
    ) {
      navList[i].querySelector("a").classList.add("active");
    }
  }
}

document.querySelector(".hire-me").addEventListener("click", function () {
  const sectionIndex = this.getAttribute("data-section-index");

  showSection(this);
  updateNav(this);
  removeBackSection();
  addBackSection(sectionIndex);
});

const navTogglerBtn = document.querySelector(".nav-toggler"),
  aside = document.querySelector(".aside");
navTogglerBtn.addEventListener("click", () => {
  asideSectionTogglerBtn();
});

function asideSectionTogglerBtn() {
  aside.classList.toggle("open");
  navTogglerBtn.classList.toggle("open");
  for (let i = 0; i < totalSelection; i++) {
    allSelection[i].classList.toggle("open");
  }
}

/* ===================================== Contact Form ===================================== */

document
  .getElementById("contactForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name == "" || email == "" || message == "") {
      alert("Fill out the details completely!");
    } else {
      Email.send({
        Host: "smtp.elasticemail.com",
        Username: "contact.pkrverma@gmail.com",
        Password: "3ACAFF7161A4795B8633DE0F1CE63C21B80B",
        To: "contact.pkrverma@gmail.com",
        From: "contact.pkrverma@gmail.com",
        Subject: `${subject}`,
        Body: `<strong>Name: </strong>${name}<br><strong>E-mail: </strong>${email}<br><br><strong>Message: </strong>${message}`,
      }).then((message) =>
        alert(`Your Message is recieved. I will contact you shortly.Thank you!`)
      );
      resetForm();
    }
  });

function resetForm() {
  document.getElementById("contactForm").reset();
}

/* ===================================== Block Copy ===================================== */

document.addEventListener("copy", function (event) {
  const contactForm = document.getElementById("contactForm");
  if (!contactForm.contains(event.target)) {
    event.preventDefault();
    alert("Copying content is not allowed.");
  }
});

var modal = document.getElementById("myModal");
var btn = document.getElementById("openModal");
var span = document.getElementById("closeModal");
var submitBtn = document.getElementById("submitBtn");

btn.onclick = function () {
  modal.style.display = "block";
};

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

submitBtn.onclick = function () {
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;

  if (name && phone && email) {
    alert("Спасибо за запись");
    modal.style.display = "none";
  } else {
    alert("Пожалуйста, заполните все поля");
  }
};
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

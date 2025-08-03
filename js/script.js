document
  .getElementById("volunteerForm")
  .addEventListener("submit", function (e) {
    e.preventDefault();
    document.getElementById("thankYouMsg").classList.remove("d-none");
    this.reset();
  });

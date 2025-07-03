const stars = document.querySelectorAll(".stars span");

stars.forEach((star) => {
  star.addEventListener("click", () => {
    const rating = parseInt(star.getAttribute("data-star"));
    if (rating >= 4) {
      window.location.href = "https://maps.app.goo.gl/WWB4ZqHCcaKKPsJa8";
    } else {
      window.location.href = "mailto:tkebuchava16061991@gmail.com?subject=Відгук&body=Що вам не сподобалося?";
    }
  });
});

document.querySelector(".container").addEventListener("click", (e) => {
  if (
    !e.target.classList.contains("slide") ||
    e.target.classList.contains("active")
  )
    return;

  document.querySelector(".active").classList.toggle("active");
  e.target.classList.toggle("active");
});

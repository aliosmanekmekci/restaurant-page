export function setActiveTab(activeButton) {
  const allButtons = document.querySelectorAll(".tab-button");
  allButtons.forEach((button) => button.classList.remove("active"));
  activeButton.classList.add("active");
}

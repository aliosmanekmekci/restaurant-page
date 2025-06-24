import "../src/style.css";

import { LoadContactPage } from "./scripts/contact-page";
import { LoadHomePage } from "./scripts/home-page";
import { LoadMenuPage } from "./scripts/menu-page";
import { setActiveTab } from "./scripts/set-active-tab";

document.addEventListener("DOMContentLoaded", () => {
  console.log("Restaurant page loaded!");

  console.log(homeBtn, menuBtn, contactBtn);

  const homeBtn = document.getElementById("home");
  const menuBtn = document.getElementById("menu");
  const contactBtn = document.getElementById("contact");

  LoadHomePage();

  homeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    LoadHomePage();
    setActiveTab(homeBtn);
  });

  menuBtn.addEventListener("click", (e) => {
    e.preventDefault();
    LoadMenuPage();
    setActiveTab(menuBtn);
  });

  contactBtn.addEventListener("click", (e) => {
    e.preventDefault();
    LoadContactPage();
    setActiveTab(contactBtn);
  });
});

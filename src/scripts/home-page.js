export function LoadHomePage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const homeDiv = document.createElement("div");
  homeDiv.className = "page";

  const hero = document.createElement("div");
  hero.className = "hero";

  const title = document.createElement("h1");
  title.textContent = "Bella Vista";

  const subtitle = document.createElement("h2");
  subtitle.textContent = "Authentic Italian Cuisine Since 1952";

  const heroImage = document.createElement("div");
  heroImage.className = "hero-image";
  heroImage.innerHTML = "🍝";

  const description = document.createElement("div");
  description.className = "description";
  description.innerHTML = `
      <p>Welcome to Bella Vista, where tradition meets taste in every bite. For over 70 years, our family has been serving the finest Italian cuisine, crafted with recipes passed down through generations.</p>
      <br>
      <p>From our hand-rolled pasta to our wood-fired pizzas, every dish is prepared with love and the freshest ingredients imported directly from Italy. Come experience the warmth of Italian hospitality in our cozy, family-friendly atmosphere.</p>
      <br>
      <p>Join us for an unforgettable dining experience where every meal is a celebration of life, family, and exceptional food.</p>
    `;

  hero.appendChild(title);
  hero.appendChild(subtitle);
  hero.appendChild(heroImage);

  homeDiv.appendChild(hero);
  homeDiv.appendChild(description);

  content.appendChild(homeDiv);
}

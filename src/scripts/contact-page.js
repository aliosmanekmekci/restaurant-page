export function LoadContactPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const contactDiv = document.createElement("div");
  contactDiv.className = "page";

  const title = document.createElement("h1");
  title.textContent = "Contact Us";
  title.style.marginBottom = "2rem";
  title.style.color = "#8B4513";

  const contactInfo = document.createElement("div");
  contactInfo.className = "contact-info";

  function createContactSection(sectionTitle, items) {
    const section = document.createElement("div");
    section.className = "contact-section";

    const title = document.createElement("h3");
    title.textContent = sectionTitle;
    section.appendChild(title);

    items.forEach((item) => {
      const p = document.createElement("p");
      p.textContent = item;
      section.appendChild(p);
    });

    return section;
  }

  const location = createContactSection("Location", ["123 Via Roma", "Little Italy District", "New York, NY 10012"]);

  const hours = createContactSection("Hours", [
    "Monday - Thursday: 5:00 PM - 10:00 PM",
    "Friday - Saturday: 5:00 PM - 11:00 PM",
    "Sunday: 4:00 PM - 9:00 PM",
    "Closed on major holidays",
  ]);

  const details = createContactSection("Contact Details", [
    "Phone: (212) 555-BELLA",
    "Email: info@bellavistanyc.com",
    "Reservations: reservations@bellavistanyc.com",
    "Private Events: events@bellavistanyc.com",
  ]);

  contactInfo.appendChild(location);
  contactInfo.appendChild(hours);
  contactInfo.appendChild(details);

  contactDiv.appendChild(title);
  contactDiv.appendChild(contactInfo);
  content.appendChild(contactDiv);
}

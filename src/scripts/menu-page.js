export function LoadMenuPage() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const menuDiv = document.createElement("div");
  menuDiv.className = "page";

  const title = document.createElement("h1");
  title.textContent = "Our Menu";
  title.style.marginBottom = "2rem";
  title.style.color = "#8B4513";

  const menuGrid = document.createElement("div");
  menuGrid.className = "menu-grid";

  function createMenuCategory(categoryName, items) {
    const category = document.createElement("div");
    category.className = "menu-category";

    const categoryTitle = document.createElement("h3");
    categoryTitle.textContent = categoryName;
    category.appendChild(categoryTitle);

    items.forEach((item) => {
      const menuItem = document.createElement("div");
      menuItem.className = "menu-item";

      const itemName = document.createElement("span");
      itemName.className = "item-name";
      itemName.textContent = item.name;

      const itemPrice = document.createElement("span");
      itemPrice.className = "item-price";
      itemPrice.textContent = item.price;

      menuItem.appendChild(itemName);
      menuItem.appendChild(itemPrice);
      category.appendChild(menuItem);
    });

    return category;
  }

  const appetizers = createMenuCategory("Antipasti", [
    { name: "Bruschetta Tradizionale", price: "$12" },
    { name: "Antipasto Misto", price: "$18" },
    { name: "Calamari Fritti", price: "$16" },
    { name: "Caprese di Bufala", price: "$14" },
  ]);

  const mains = createMenuCategory("Primi Piatti", [
    { name: "Spaghetti Carbonara", price: "$22" },
    { name: "Lasagna della Nonna", price: "$24" },
    { name: "Risotto ai Porcini", price: "$26" },
    { name: "Osso Buco alla Milanese", price: "$32" },
  ]);

  const pizzas = createMenuCategory("Pizze", [
    { name: "Margherita DOC", price: "$18" },
    { name: "Quattro Stagioni", price: "$22" },
    { name: "Diavola", price: "$20" },
    { name: "Prosciutto e Funghi", price: "$24" },
  ]);

  const desserts = createMenuCategory("Dolci", [
    { name: "Tiramisu della Casa", price: "$9" },
    { name: "Panna Cotta ai Frutti", price: "$8" },
    { name: "Cannoli Siciliani", price: "$10" },
    { name: "Gelato Artigianale", price: "$7" },
  ]);

  menuGrid.appendChild(appetizers);
  menuGrid.appendChild(mains);
  menuGrid.appendChild(pizzas);
  menuGrid.appendChild(desserts);

  menuDiv.appendChild(title);
  menuDiv.appendChild(menuGrid);
  content.appendChild(menuDiv);
}

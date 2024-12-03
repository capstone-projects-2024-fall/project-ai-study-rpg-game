class Item {
  constructor({ name, type, description }) {
    this.name = name; // Name of the item
    this.type = type; // Type of the item (e.g., Weapon, Potion, etc.)
    this.description = description || "No description available."; // Default description
  }

  // Optional: Method to return formatted details
  getDetails() {
    return `Name: ${this.name}\nType: ${this.type}\nDescription: ${this.description}`;
  }
}

// Lance:
const sword = new Item({
  name: "Sword of Destiny",
  type: "Weapon",
  description: "A powerful lance with a legendary history."
});

console.log(sword.getDetails());

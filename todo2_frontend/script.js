document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("products");
  const productForm = document.getElementById("productForm");

  // Fetch all products
  const fetchProducts = async () => {
    try {
      const response = await fetch("/Product");
      const products = await response.json();
      productList.innerHTML = "";
      products.forEach((product) => {
        const productItem = document.createElement("div");
        productItem.classList.add("product-item");
        productItem.innerHTML = `
          <h3>${product.name}</h3>
          <p>${product.description}</p>
        `;
        productList.appendChild(productItem);
      });
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  fetchProducts();

  // Handle form submission
  productForm.addEventListener("submit", async (e) => {
    e.preventDefault();
    const productName = document.getElementById("productName").value;
    const productDescription =
      document.getElementById("productDescription").value;
    try {
      const response = await fetch("/Product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: productName,
          description: productDescription,
        }),
      });
      const newProduct = await response.json();
      console.log("New product added:", newProduct);
      fetchProducts();
      productForm.reset();
    } catch (error) {
      console.error("Error adding product:", error);
    }
  });
});

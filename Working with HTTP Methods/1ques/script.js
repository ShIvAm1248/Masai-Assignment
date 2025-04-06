function searchProducts() {
    const category = document.getElementById("category").value;
    const minPrice = document.getElementById("minPrice").value;
    const maxPrice = document.getElementById("maxPrice").value;
    const status = document.getElementById("status");
    const productGrid = document.getElementById("products");
  
    // Clear previous results
    productGrid.innerHTML = "";
    status.textContent = "Loading...";
  
    // Build API URL
    let url = `https://mockapi.io/products?`;
    const params = [];
  
    if (category) params.push(`category=${category}`);
    if (minPrice) params.push(`min_price=${minPrice}`);
    if (maxPrice) params.push(`max_price=${maxPrice}`);
    params.push(`sort=asc`);
  
    url += params.join("&");
  
    // Fetch and display data
    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Failed to fetch data");
        return res.json();
      })
      .then((data) => {
        status.textContent = "";
        if (data.length === 0) {
          status.textContent = "No products found.";
          return;
        }
  
        data.forEach((item) => {
          const card = document.createElement("div");
          card.className = "product-card";
          card.innerHTML = `
            <img src="${item.image}" alt="${item.name}" />
            <h4>${item.name}</h4>
            <p>₹${item.price}</p>
          `;
          productGrid.appendChild(card);
        });
      })
      .catch((err) => {
        status.textContent = "Something went wrong. Try again.";
        console.error(err);
      });
  }
  
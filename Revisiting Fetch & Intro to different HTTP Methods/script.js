const productList = document.getElementById('productList');
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const sortPrice = document.getElementById('sortPrice');
const productCount = document.getElementById('productCount');

let allProducts = [];

async function fetchProducts() {
    try {
        const response = await fetch('https://fakestoreapi.com/products');
        allProducts = await response.json();
        displayProducts(allProducts);
    } catch (error) {
        console.error("Error fetching products:", error);
    }
}

async function fetchCategories() {
    try {
        const response = await fetch('https://fakestoreapi.com/products/categories');
        const categories = await response.json();
        categories.forEach(category => {
            const option = document.createElement('option');
            option.value = category;
            option.textContent = category.charAt(0).toUpperCase() + category.slice(1);
            categoryFilter.appendChild(option);
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
    }
}

function displayProducts(products) {
    productList.innerHTML = "";
    productCount.textContent = `Showing ${products.length} products`;

    products.forEach(product => {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>$${product.price.toFixed(2)}</p>
        `;
        productList.appendChild(productCard);
    });
}

function applyFilters() {
    let filteredProducts = [...allProducts];

    const searchQuery = searchInput.value.toLowerCase();
    if (searchQuery) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(searchQuery)
        );
    }

    const selectedCategory = categoryFilter.value;
    if (selectedCategory) {
        filteredProducts = filteredProducts.filter(product =>
            product.category === selectedCategory
        );
    }

    const sortValue = sortPrice.value;
    if (sortValue === "asc") {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortValue === "desc") {
        filteredProducts.sort((a, b) => b.price - a.price);
    }

    displayProducts(filteredProducts);
}

searchInput.addEventListener('input', applyFilters);
categoryFilter.addEventListener('change', applyFilters);
sortPrice.addEventListener('change', applyFilters);

fetchProducts();
fetchCategories();

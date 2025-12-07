async function loadProducts() {
    try {
        const res = await fetch("https://fakestoreapi.com/products");
        if (!res.ok) throw new Error("API Error");

        const products = await res.json();

        // Log required info
        products.forEach(p => {
            console.log("Product:", p.title);
            console.log("Price: $" + p.price);
            console.log("Image:", p.image);
        });

        // Create product cards
        const container = document.getElementById("product-container");

        products.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("card");

            card.innerHTML = `
                <img src="${product.image}">
                <h3>${product.title}</h3>
                <div class="price">$${product.price}</div>
            `;

            container.appendChild(card);
        });

    } catch (error) {
        document.body.innerHTML += `<p style="color:red;">Failed to load products. Please try again.</p>`;
    }
}

loadProducts();

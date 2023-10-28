document.addEventListener("DOMContentLoaded", function() {
    const productDetails = document.getElementById("product-details");

    // Obtiene el nombre del producto de la URL
    const searchParams = new URLSearchParams(window.location.search);
    const productName = searchParams.get("product-name");

    // Realiza la solicitud a la API para buscar el producto por nombre
    fetch(`https://world.openfoodfacts.org/cgi/search.pl?search_terms=${productName}&json=1`)
        .then(response => {
            if (!response.ok) {
                throw new Error('No se pudo obtener el producto');
            }
            return response.json();
        })
        .then(data => {
            if (data.products.length > 0) {
                const productContainer = document.getElementById("product-container");

                // Dentro del bucle que itera a través de los productos
data.products.forEach(product => {
    const productContainer = document.getElementById("product-container");

    // Crea un enlace para mostrar los detalles del producto
    const productLink = document.createElement("a");
    productLink.href = `product-detail.html?product_id=${product._id}`; // Agrega un parámetro para identificar el producto
    productLink.innerHTML = `
        <div>
            <h2>${product.product_name}</h2>
            <img src="${product.image_url}" alt="${product.product_name}">
            <p>${product.generic_name}</p>
            <!-- Agrega más detalles aquí -->
        </div>
    `;
    productContainer.appendChild(productLink);
});

            } else {
                productDetails.textContent = "Producto no encontrado";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

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

                // Itera a través de los productos y crea elementos para mostrarlos
                data.products.forEach(product => {
                    const productElement = document.createElement("div");
                    productElement.innerHTML = `
                        <h2>${product.product_name}</h2>
                        <p>${product.generic_name}</p>
                        <!-- Agrega más detalles aquí -->
                    `;
                    productContainer.appendChild(productElement);
                });
            } else {
                productDetails.textContent = "Producto no encontrado";
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});

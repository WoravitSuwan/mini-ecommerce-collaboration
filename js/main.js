document.addEventListener('DOMContentLoaded', () => {
    const productList = document.getElementById('product-list');
    const searchInput = document.getElementById('searchInput');
    const loader = document.getElementById('loader');

    let allProducts = [];

    // แสดง Loader ก่อนโหลด
    loader.style.display = 'block';
    productList.style.display = 'none';

    // Fetch products from JSON
    fetch('js/products.json')
        .then(response => response.json())
        .then(data => {
            allProducts = data;
            displayProducts(allProducts);

            // ซ่อน Loader หลังโหลดเสร็จ
            loader.style.display = 'none';
            productList.style.display = 'flex';
        })
        .catch(error => {
            loader.innerText = 'เกิดข้อผิดพลาดในการโหลดสินค้า';
            console.error('Error fetching products:', error);
        });

    function displayProducts(products) {
        productList.innerHTML = '';
        products.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>ราคา: ${product.price.toLocaleString()} บาท</p>
            `;
            productList.appendChild(card);
        });
    }

    // Search
    searchInput.addEventListener('keyup', () => {
        const searchTerm = searchInput.value.toLowerCase();
        const filteredProducts = allProducts.filter(product =>
            product.name.toLowerCase().includes(searchTerm)
        );
        displayProducts(filteredProducts);
    });
});

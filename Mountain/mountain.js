let wishList = JSON.parse(localStorage.getItem('wishlist')) || [];
let mainContainer = document.getElementById("products");
let filterData = [];
let materailFilter = [];
let url = 'https://bicycle-shop-json-server.cyclic.app/bikes';

// Pagination variables
let pageNumber = 1;
let itemsPerPage = 15;

// Initialize the page
featchData();

function featchData() {
    fetch(url)
        .then(response => response.json())
        .then(data => {
            filterData = data;
            materailFilter = data;
            displayData(data);
            updatePagination();
        })
        .catch(error => console.error(error));
}

function displayData(data) {
    mainContainer.innerHTML = "";
    let start = (pageNumber - 1) * itemsPerPage;
    let end = start + itemsPerPage;
    let itemsToDisplay = data.slice(start, end);

    let productsContainer = document.getElementById('products');
    productsContainer.innerHTML = ''; 

    itemsToDisplay.forEach(item => {
        // Create and append elements for each item
        let container = document.createElement("div");
        container.setAttribute("class", "item");

        let image = document.createElement("img");
        image.src = item.large_img;

        let titlePriceDiv = document.createElement("div");
        titlePriceDiv.setAttribute("class", "titlePrice");

        let title = document.createElement("h3");
        title.textContent = item.title;

        let price = document.createElement("p");
        price.textContent = "₹ " + item.price;

        let button = document.createElement("button");
        button.setAttribute("class", "addItem");
        button.innerHTML = "🤍";
        button.addEventListener("click", () => toggleWishList(item, button));

        container.appendChild(image);
        titlePriceDiv.append(title, price, button);
        container.appendChild(titlePriceDiv);
        productsContainer.appendChild(container);
    });
}

// Add event listeners for filters and sorting
function setupFilterListeners() {
    // Material filter
    let material = document.getElementById("material");
    material.addEventListener("change", () => {
        filterDataByMaterial(material.value);
    });

    // Color filter
    let color = document.getElementById("color");
    color.addEventListener("change", () => {
        filterDataByColor(color.value);
    });

    // Brake type filter
    let brakeType = document.getElementById("break");
    brakeType.addEventListener("change", () => {
        filterDataByBrakeType(brakeType.value);
    });

    // Suspension filter
    let suspension = document.getElementById("suspension");
    suspension.addEventListener("change", () => {
        filterDataBySuspension(suspension.value);
    });
}

function setupSortingListeners() {
    // Sorting price functions (low and high)
    let low = document.getElementById("low");
    low.addEventListener("click", () => {
        sortDataByPriceLow();
    });

    let high = document.getElementById("high");
    high.addEventListener("click", () => {
        sortDataByPriceHigh();
    });
}

function filterDataByMaterial(materialValue) {
    let filtered = materailFilter.filter(item => item.material.toLowerCase() === materialValue.toLowerCase());
    displayData(filtered);
}

function filterDataByColor(colorValue) {
    let filtered = materailFilter.filter(item => item.color.toLowerCase() === colorValue.toLowerCase());
    displayData(filtered);
}

function filterDataByBrakeType(brakeTypeValue) {
    let filtered = materailFilter.filter(item => item.brakeType.toLowerCase() === brakeTypeValue.toLowerCase());
    displayData(filtered);
}

function filterDataBySuspension(suspensionValue) {
    let filtered = materailFilter.filter(item => item.suspension.toLowerCase() === suspensionValue.toLowerCase());
    displayData(filtered);
}

function sortDataByPriceLow() {
    filterData.sort((a, b) => a.price - b.price);
    displayData(filterData);
}

function sortDataByPriceHigh() {
    filterData.sort((a, b) => b.price - a.price);
    displayData(filterData);
}

function toggleWishList(item, button) {
    const index = wishList.findIndex(wishItem => wishItem.id === item.id);
    if (index !== -1) {
        // Remove from wishlist
        wishList.splice(index, 1);
        button.innerHTML = "🤍";
    } else {
        // Add to wishlist
        wishList.push(item);
        button.innerHTML = "❤️";
    }

    localStorage.setItem('wishlist', JSON.stringify(wishList));
}

// Pagination functionality
function updatePagination() {
    let pagination = document.getElementById("pagination1");
    pagination.innerHTML = "";
    let totalPages = Math.ceil(filterData.length / itemsPerPage);

    for (let i = 1; i <= totalPages; i++) {
        let btn = document.createElement("button");
        btn.setAttribute("class", "pagination-button");
        btn.textContent = i;

        btn.addEventListener("click", () => {
            pageNumber = i;
            displayData(filterData);
        });

        pagination.appendChild(btn);
    }
}

// Initialize filter and sorting listeners
setupFilterListeners();
setupSortingListeners();

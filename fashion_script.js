
// Function to display an alert when an item is clicked

function itemClick (perfumes){
    alert("You cicked on ${itemName}!");
}


// Function to show a popup about upcoming sales

function showSalesAlert(){
    alert("Don't miss out our upcoming sales on Diwali, Christmas, and New Year!");
}


// Adding an event listener to 'Subscribe' button

function subscribeAlert(){
    alert("Thankyou for subscribing! you will now get notification for fuuture sales.")
}


// When the page is loaded, the following code will run

// When the page is loaded, the following code will run
window.onload = function() {
    // Get all item tags and add a click event
    let items = document.getElementsByClassName('Item-tag');
    for(let i = 0; i < items.length; i++) {
        // When an item is clicked, call itemClick with the item's text
        items[i].addEventListener('click', function(event) {
            event.preventDefault();  // Prevent the default link behavior
            let itemName = this.textContent.trim(); // Get the item name
            itemClick(itemName);  // Show an alert for the clicked item
        });
    }

    // Adding event listener to the "OUR UPCOMING SALES" title
    let salesTitle = document.querySelector('h2');
    salesTitle.addEventListener('click', showSalesAlert);

    // You can also add a subscribe button dynamically
    let infoSection = document.querySelector('.Information');
    let subscribeButton = document.createElement('button');
    subscribeButton.textContent = "Subscribe for Sales Alerts";
    subscribeButton.addEventListener('click', subscribeAlert);
    infoSection.appendChild(subscribeButton);
}

// 1. Restaurant WhatsApp number
const phoneNumber = "255627062910";

// 2. Find all Order Now buttons
const orderButtons = document.querySelectorAll(".order-btn");

// 3. Add click event to every button
orderButtons.forEach(button => {

    button.addEventListener("click", function() {

        // Get the food name
        const dish = this.dataset.dish;

        // Create WhatsApp message
        const message = `Hello Ngassa Restaurant! I want to order ${dish}.`;

        // Create WhatsApp link
        const whatsappURL =
            `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

        // Open WhatsApp
        window.open(whatsappURL, "_blank");

    });

});

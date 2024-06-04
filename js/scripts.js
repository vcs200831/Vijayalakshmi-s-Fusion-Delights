document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Scroll-to-top button
    let scrollToTopBtn = document.createElement('button');
    scrollToTopBtn.innerHTML = '⬆';
    scrollToTopBtn.id = 'scrollToTopBtn';
    scrollToTopBtn.style.display = 'none'; // Hidden by default
    document.body.appendChild(scrollToTopBtn);

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'block';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Form Validation
    const form = document.querySelector('form');
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        let isValid = true;
        const name = document.getElementById('name');
        const email = document.getElementById('email');
        const message = document.getElementById('message');

        if (!name.value) {
            isValid = false;
            name.classList.add('is-invalid');
        } else {
            name.classList.remove('is-invalid');
        }

        if (!email.value || !validateEmail(email.value)) {
            isValid = false;
            email.classList.add('is-invalid');
        } else {
            email.classList.remove('is-invalid');
        }

        if (!message.value) {
            isValid = false;
            message.classList.add('is-invalid');
        } else {
            message.classList.remove('is-invalid');
        }

        if (isValid) {
            alert('Message sent successfully!');
            form.reset();
        }
    });

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }

    // Order functionality
    var orderButtons = document.querySelectorAll('.order-btn');
    var orderSummary = document.getElementById('order-summary');
    var totalPriceElement = document.getElementById('total-price');
    var totalPrice = 0;

    orderButtons.forEach(function(button) {
        button.addEventListener('click', function() {
            var dishName = button.getAttribute('data-dish');
            var dishPrice = parseFloat(button.getAttribute('data-price'));
            
            // Add the dish to the order summary
            var orderItem = document.createElement('li');
            orderItem.className = 'list-group-item';
            orderItem.textContent = `${dishName} - ₹${dishPrice.toFixed(2)}`;
            orderSummary.appendChild(orderItem);
            
            // Update the total price
            totalPrice += dishPrice;
            totalPriceElement.textContent = totalPrice.toFixed(2);
            
            // Show a confirmation alert
            alert('You have added ' + dishName + ' to your order!');
        });
    });
});

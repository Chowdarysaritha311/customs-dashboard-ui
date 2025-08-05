// Login Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const email = document.getElementById('email').value;
            const password = document.getElementById('password').value;
            
            // Simple validation
            if (!email || !password) {
                alert('Please fill in all fields');
                return;
            }
            
            // Simulate login - in a real app, this would be an API call
            console.log('Login attempt with:', { email, password });
            
            // Redirect to dashboard
            window.location.href = 'dashboard.html';
        });
    }
    
    // Dashboard functionality
    const newFilingBtn = document.getElementById('newFilingBtn');
    const newFilingModal = document.getElementById('newFilingModal');
    const closeModalBtns = document.querySelectorAll('.close-modal');
    const newFilingForm = document.getElementById('newFilingForm');
    
    if (newFilingBtn && newFilingModal) {
        newFilingBtn.addEventListener('click', function() {
            newFilingModal.classList.add('active');
        });
    }
    
    if (closeModalBtns) {
        closeModalBtns.forEach(btn => {
            btn.addEventListener('click', function() {
                newFilingModal.classList.remove('active');
            });
        });
    }
    
    if (newFilingModal) {
        newFilingModal.addEventListener('click', function(e) {
            if (e.target === newFilingModal) {
                newFilingModal.classList.remove('active');
            }
        });
    }
    
    if (newFilingForm) {
        newFilingForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form values
            const filingType = document.getElementById('filingType').value;
            const customer = document.getElementById('customer').value;
            const arrivalDate = document.getElementById('arrivalDate').value;
            const description = document.getElementById('description').value;
            
            // In a real app, this would be an API call
            console.log('New filing submitted:', { 
                filingType, 
                customer, 
                arrivalDate, 
                description 
            });
            
            // Show success message
            alert('New customs filing created successfully!');
            
            // Close modal
            newFilingModal.classList.remove('active');
            
            // Reset form
            newFilingForm.reset();
        });
    }
    
    // Simulate loading state for dashboard
    if (document.querySelector('.dashboard-content')) {
        // In a real app, you would fetch data here
        console.log('Fetching dashboard data...');
    }
});

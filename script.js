document.addEventListener('DOMContentLoaded', () => {
  // Modals
  const loginBtn = document.getElementById('loginBtn');
  const registerBtn = document.getElementById('registerBtn');
  const loginModal = document.getElementById('loginModal');
  const registerModal = document.getElementById('registerModal');
  const closeLogin = document.getElementById('closeLogin');
  const closeRegister = document.getElementById('closeRegister');

  loginBtn.addEventListener('click', () => loginModal.style.display = 'flex');
  registerBtn.addEventListener('click', () => registerModal.style.display = 'flex');
  closeLogin.addEventListener('click', () => loginModal.style.display = 'none');
  closeRegister.addEventListener('click', () => registerModal.style.display = 'none');
  window.addEventListener('click', e => {
    if (e.target === loginModal) loginModal.style.display = 'none';
    if (e.target === registerModal) registerModal.style.display = 'none';
  });

  // Animate elements on scroll
  const animatables = document.querySelectorAll('.info-card, .flowchart');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, { threshold: 0.1 });
  animatables.forEach(el => observer.observe(el));

  // Greeting message
  function showGreeting() {
    const hour = new Date().getHours();
    let greeting = '';
    if (hour < 12) greeting = 'Good Morning';
    else if (hour < 18) greeting = 'Good Afternoon';
    else greeting = 'Good Evening';
    const el = document.getElementById('greeting');
    if (el) el.textContent = greeting;
  }

  // Live date-time display
  function updateDateTime() {
    const dtElements = document.querySelectorAll('#footer-datetime');
    const now = new Date();
    const day = now.getDate();
    const month = now.toLocaleString('en-US', { month: 'long' });
    const year = now.getFullYear();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    const formattedTime = `${hours}.${minutes}.${seconds} ${ampm}`;
    const formattedDate = `${day} ${month}, ${year}`;
    const full = `${formattedDate} - ${formattedTime}`;
    dtElements.forEach(el => el.textContent = full);
  }

  showGreeting();
  updateDateTime();
  setInterval(updateDateTime, 1000);

  // /* ===== LOGIN SYSTEM USING users.js ===== */
  // const loginForm = document.getElementById('loginForm');

  // loginForm.addEventListener('submit', (e) => {
  //     e.preventDefault();
  //     const email = loginForm.querySelector('input[type="email"]').value;
  //     const password = loginForm.querySelector('input[type="password"]').value;

  //     const user = users.find(u => u.email === email && u.password === password);

  //     if (user) {
  //         localStorage.setItem('loggedInUser', JSON.stringify(user)); // store user info
  //         alert(`Welcome ${user.name}! Redirecting...`);
  //         // Redirect based on role
  //         if (user.role === 'farmer') window.location.href = 'farmer/dashboard.html';
  //         else if (user.role === 'buyer') window.location.href = 'buyer/dashboard.html';
  //         else if (user.role === 'admin') window.location.href = 'admin/dashboard.html';
  //     } else {
  //         alert('Invalid email or password');
  //     }
  // });
});

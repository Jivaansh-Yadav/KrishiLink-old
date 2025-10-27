document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("loginForm");
    const errorMsg = document.getElementById("errorMsg");

    if (!loginForm) {
        console.error("Login form not found! Check your form ID.");
        return;
    }

    loginForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const email = document.getElementById("email").value.trim();
        const password = document.getElementById("password").value.trim();

        if (!email || !password) {
            if (errorMsg) errorMsg.textContent = "Please fill in all fields.";
            return;
        }

        fetch("users.json")
            .then(res => {
                if (!res.ok) throw new Error("Failed to load users.json");
                return res.json();
            })
            .then(users => {
                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    // Store logged-in user
                    localStorage.setItem("loggedInUser", JSON.stringify(user));
                    console.log("User set successfully - loggedInUser");

                    // Redirect based on role
                    switch (user.role) {
                        case "admin":
                            console.log("Redirecting to admin dashboard...");
                            window.location.href = "dashboards/admin-dashboard.html";
                            break;
                        case "farmer":
                            console.log("Redirecting to farmer dashboard...");
                            window.location.href = "dashboards/farmer-dashboard.html";
                            break;
                        case "buyer":
                            console.log("Redirecting to buyer dashboard...");
                            window.location.href = "dashboards/buyer-dashboard.html";
                            break;
                        default:
                            if (errorMsg) errorMsg.textContent = "Unknown user role!";
                            console.warn("Unknown user role detected.");
                    }
                }
                else {
                    if (errorMsg) errorMsg.textContent = "Invalid email or password!";
                    console.error("Invalid email or password");
                }
            })
            .catch(err => {
                console.error("Login error:", err);
                if (errorMsg) errorMsg.textContent = "Error loading user data!";
            });
    });
});

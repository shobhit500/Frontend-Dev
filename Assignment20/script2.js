function registerUser() {
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const msg = document.getElementById("message");
    msg.innerHTML = "";

    if (!name || !email || !password) {
        msg.innerHTML = "<span class='error'>All fields are required.</span>";
        return;
    }

    if (password.length < 8) {
        msg.innerHTML = "<span class='error'>Password must be at least 8 characters.</span>";
        return;
    }

    // Check duplicate email
    axios.get(`http://localhost:6000/registeredUsers?email=${email}`)
        .then(res => {
            if (res.data.length > 0) {
                msg.innerHTML = "<span class='error'>Email already registered.</span>";
            } else {
                axios.post("http://localhost:6000/registeredUsers", {
                    name: name,
                    email: email,
                    password: password
                })
                .then(() => {
                    msg.innerHTML = "<span class='success'>Registration successful!</span>";

                    document.getElementById("name").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("password").value = "";
                })
                .catch(() => {
                    msg.innerHTML = "<span class='error'>Error registering user.</span>";
                });
            }
        })
        .catch(() => {
            msg.innerHTML = "<span class='error'>Error checking email.</span>";
        });
}

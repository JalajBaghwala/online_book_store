document.addEventListener("DOMContentLoaded", function () {
  const signupForm = document.getElementById("signupForm");
  const signinForm = document.getElementById("signinForm");

  function getUsers() {
    const users = localStorage.getItem("users");
    return users ? JSON.parse(users) : [];
  }

  function saveUser(user) {
    const users = getUsers();
    users.push(user);
    localStorage.setItem("users", JSON.stringify(users));
  }

  function create3DAnimation() {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    );
    const renderer = new THREE.WebGLRenderer();

    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const light = new THREE.HemisphereLight(0xffffff, 0x444444);
    light.position.set(0, 200, 0);
    scene.add(light);

    // Create a Torus Knot Geometry
    const geometry = new THREE.TorusKnotGeometry(1, 0.4, 100, 16);
    const material = new THREE.MeshPhongMaterial({
      color: 0x0077ff,
      shininess: 100,
    });
    const torusKnot = new THREE.Mesh(geometry, material);
    scene.add(torusKnot);

    torusKnot.position.y = -1;
    camera.position.z = 5;

    const animate = function () {
      requestAnimationFrame(animate);

      torusKnot.rotation.x += 0.01;
      torusKnot.rotation.y += 0.01;

      renderer.render(scene, camera);
    };

    animate();

    // Redirect after 3 seconds
    setTimeout(() => {
      window.location.href = "index.html";
    }, 3000);
  }

  if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const dob = document.getElementById("dob").value;
      const email = document.getElementById("email").value;
      const contact = document.getElementById("contact").value;
      const username = document.getElementById("username").value;
      const password = document.getElementById("password").value;

      if (!/^\d+$/.test(contact)) {
        alert("Contact Number should contain only numbers.");
        return;
      }

      const newUser = { dob, email, contact, username, password };
      saveUser(newUser);

      alert("Account created successfully! Please sign in.");
      window.location.href = "signin.html";
    });
  }

  if (signinForm) {
    signinForm.addEventListener("submit", function (event) {
      event.preventDefault();

      const signinUsername = document.getElementById("signinUsername").value;
      const signinPassword = document.getElementById("signinPassword").value;

      const users = getUsers();
      const user = users.find(
        (user) =>
          user.username === signinUsername && user.password === signinPassword
      );

      if (user) {
        alert("Sign in successful!");
        document.body.innerHTML = ""; // Clear the body
        create3DAnimation();
      } else {
        alert("Incorrect username or password.");
      }
    });
  }
});

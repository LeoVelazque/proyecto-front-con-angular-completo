//nav responsivo
  function responsiveMenu() {
      var x = document.getElementById("nav");
      if (x.className === "") {
          x.className = "responsive";
      }
      else (x.className = "")
  }

  //login
  function registrarse() {
      var x = document.getElementById("login");
      if (x.style.display === "none") {
          x.style.display = "block"
      }
      else (x.style.display = "none")
  }

  function salir() {
      document.getElementById("login").style.display = "none";
  }

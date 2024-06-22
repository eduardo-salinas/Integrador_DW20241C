/* ********** Alerta ********** */

((d) => {
    const $form = d.getElementById("contact-form");  
    $form.addEventListener("submit", (e) => {
        e.preventDefault();
        window.location.href = "index.html";
        alert("LOGIN CORRECTO!"); 
    });
  })(document);

/* ********** Lista ********** */

function toggleLink(id) {
    const allLinks = document.querySelectorAll('.hidden-link');
    allLinks.forEach(link => {
        if (link.id === id) {
            link.classList.toggle('show');
        } else {
            link.classList.remove('show');
        }
    });
}

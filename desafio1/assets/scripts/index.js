const icons = document.querySelectorAll('.icon');

icons.forEach(icon => {
    icon.onclick = () => {
        icon.classList.toggle("filled");
    };
});

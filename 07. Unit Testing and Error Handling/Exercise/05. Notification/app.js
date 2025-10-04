function notify(message) {
    const notf = document.getElementById('notification');
    notf.textContent = message;
    notf.style.display = 'block';

    notf.onclick = () => {
      notf.style.display = 'none';
    };
}
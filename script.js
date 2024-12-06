function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// Event listener untuk semua tombol "View Certificate"
document.querySelectorAll('.view-image-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const imageURL = button.dataset.image;
    const fileName = button.dataset.filename;

    const link = document.createElement('a');
    link.href = imageURL;
    link.download = fileName;

    link.click();
  });
});

// Event listener untuk semua tombol "Download Certificate"
document.querySelectorAll('.download-pdf-button').forEach((button) => {
  button.addEventListener('click', (event) => {
    const pdfURL = button.dataset.pdf;
    const fileName = button.dataset.filename;

    const link = document.createElement('a');
    link.href = pdfURL;
    link.download = fileName;

    link.click();
  });
});

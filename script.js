// Efek hover pada tombol atau link
const links = document.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('mouseover', () => {
    link.style.color = 'red';
  });
  link.addEventListener('mouseout', () => {
    link.style.color = 'black';
  });
});

// Efek animasi saat menggulir halaman
window.addEventListener('scroll', () => {
  const section = document.querySelector('#profil');
  if (window.scrollY > section.offsetTop) {
    section.classList.add('animate');
  }
});

// Validasi form
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
  e.preventDefault();
  const input = document.querySelector('#name');
  if (input.value === '') {
    alert('Nama harus diisi!');
  } else {
    form.submit();
  }
});

// Efek modal untuk menampilkan detail proyek
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
  project.addEventListener('click', () => {
    const modal = document.querySelector

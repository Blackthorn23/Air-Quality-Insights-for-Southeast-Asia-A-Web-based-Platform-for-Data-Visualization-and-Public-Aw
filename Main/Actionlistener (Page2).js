 const select = document.querySelector('.Choose1 select');

select.addEventListener('change', () => {
const targetId = select.value;
const targetSection = document.querySelector(targetId);

if (targetSection) {
 window.location.hash = targetId;
 }
});

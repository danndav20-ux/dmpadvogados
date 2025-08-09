
// smooth scroll
document.querySelectorAll('.nav a[href^="#"]').forEach(a=>{
  a.addEventListener('click',e=>{
    e.preventDefault();
    document.querySelector(a.getAttribute('href')).scrollIntoView({behavior:'smooth',block:'start'});
  });
});
// modal
const btn = document.getElementById('saibaMaisBtn');
const modal = document.getElementById('modal');
const closeBtn = document.getElementById('modalClose');
if(btn && modal && closeBtn){
  btn.addEventListener('click',()=> modal.classList.add('open'));
  closeBtn.addEventListener('click',()=> modal.classList.remove('open'));
  modal.addEventListener('click',(e)=>{ if(e.target===modal) modal.classList.remove('open'); });
}

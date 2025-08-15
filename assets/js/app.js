const themeToggle = document.getElementById('themeToggle');
const html = document.documentElement;
if(themeToggle){
  themeToggle.addEventListener('click', ()=>{
    if(html.classList.contains('bg-brand')){
      html.classList.remove('bg-brand');
      html.style.backgroundColor = 'white';
      document.body.style.color = '#0b1020';
    }else{
      html.classList.add('bg-brand');
      html.style.backgroundColor = '';
      document.body.style.color = '';
    }
  });
}
const mobileBtn = document.getElementById('mobileMenuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if(mobileBtn && mobileMenu){
  mobileBtn.addEventListener('click', ()=> mobileMenu.classList.toggle('hidden'));
}

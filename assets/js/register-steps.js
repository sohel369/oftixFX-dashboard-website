(function(){
  let step = 1;
  const total = 3;
  const stepNo = document.getElementById('stepNo');
  const panes = document.querySelectorAll('.step-pane');
  const steps = document.querySelectorAll('.step');
  const next = document.getElementById('nextBtn');
  const prev = document.getElementById('prevBtn');

  function update(){
    stepNo.textContent = step;
    panes.forEach(p => p.classList.toggle('hidden', Number(p.dataset.step)!==step));
    steps.forEach((s,i)=>{
      s.classList.toggle('active', i < step);
    });
    prev.disabled = (step===1);
    next.textContent = (step===total) ? 'Submit' : 'Next';
  }
  next.addEventListener('click', ()=>{
    if(step < total){ step++; update(); }
    else { window.location.href='/dashboard.html'; }
  });
  prev.addEventListener('click', ()=>{ if(step>1){ step--; update(); } });
  update();
})();

document.addEventListener('DOMContentLoaded', ()=>{
  const ctx = document.getElementById('equityCurve');
  if(!ctx) return;
  const base = 12000;
  let v = base;
  const data = Array.from({length: 30}, ()=> (v += (Math.random()-0.45)*120, Math.max(11000, v)));
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length:30}, (_,i)=>`Day ${i+1}`),
      datasets: [{
        label: 'Equity',
        data,
        borderWidth: 2,
        tension: .35,
        fill: false
      }]
    },
    options: {
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: 'rgba(255,255,255,.06)' } }
      }
    }
  });
});

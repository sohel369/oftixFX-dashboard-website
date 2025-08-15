document.addEventListener('DOMContentLoaded', ()=>{
  const ctx = document.getElementById('homeChart');
  if(!ctx) return;
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: Array.from({length: 24}, (_,i)=>`${i}:00`),
      datasets: [{
        label: 'Volatility (30d)',
        data: Array.from({length:24}, ()=>Math.random()*2+1),
        borderWidth: 2,
        tension: .35,
        fill: false
      }]
    },
    options: {
      responsive: true,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { display: false } },
        y: { grid: { color: 'rgba(255,255,255,.06)' } }
      }
    }
  });
});

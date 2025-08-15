document.addEventListener('DOMContentLoaded', ()=>{
  const monthlyPL = document.getElementById('monthlyPL');
  if(monthlyPL){
    new Chart(monthlyPL, {
      type: 'bar',
      data: {
        labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
        datasets: [{ label: 'P/L', data: Array.from({length:12}, ()=>Math.round((Math.random()-0.3)*800)), borderWidth: 1 }]
      },
      options: { plugins: { legend: { display:false } } }
    });
  }
  const winRate = document.getElementById('winRate');
  if(winRate){
    new Chart(winRate, {
      type: 'doughnut',
      data: {
        labels: ['Win','Loss'],
        datasets: [{ data: [Math.round(Math.random()*30+50), Math.round(Math.random()*20+20) ] }]
      },
      options: { plugins: { legend: { position: 'bottom' } } }
    });
  }
});

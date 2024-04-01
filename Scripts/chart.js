function getLastSixDays() {
  let result = [];
  for(let i=0; i<6; i++) {
    let d = new Date();
    d.setDate(d.getDate() - i);
    result.unshift(d.toISOString().slice(0,10));
  }
  return result;
}

const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: getLastSixDays(),
    datasets: [{
      label: 'Circumference (mm)',
      data: [12, 19, 3, 5, 2, 300],
    }]
  },
  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
      }
    }
  }
});

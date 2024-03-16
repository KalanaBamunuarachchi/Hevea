const ctx = document.getElementById('myChart');

new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['day1', 'day2', 'day3', 'day4', 'day5', 'day6'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
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


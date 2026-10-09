var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct']

var notInOrgData = [520, 505, 490, 470, 455, 450, 440, 435, 425, 420]
var inOrgData = [680,695,710,730,745,750,760,765,775,780]

var csData = [260, 270,280,290, 300,305,310,315,320,325]
var cyberData = [150,155,160,170,175,180,185,190,192,195]
var itData = [270, 270, 270,270,270,265,265,260,263,260]

new Chart(document.getElementById('notInOrg'), {
    type: 'line',
    data: {
        labels: months,
        datasets: [{
            label: 'Not in an org',
            data: notInOrgData,
            borderColor: '#e63946',
            backgroundColor: 'rgba(230,57,70,0.15)',
            fill: true,
            tension: 0.3
        }]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false
    }
})

new Chart(document.getElementById('inOrg'),{
  type:'line',
  data:{
    labels:months,
    datasets:[{
      label:'In an org',
      data:inOrgData,
      borderColor:'#2a9d8f',
      backgroundColor:'rgba(42,157,143,0.15)',
      fill:true,
      tension:0.3
    }]
  },
  options:{
    responsive:true,
    maintainAspectRatio:false
  }
});

new Chart(document.getElementById('perOrg'), {
    type: 'line',
    data: {
        labels: months,
        datasets: [
            {
                label: 'CS Org',
                data: csData,
                borderColor: '#1d3557',
                tension: 0.3
            },
            {
                label: 'Cybersecurity Org',
                data: cyberData,
                borderColor: '#f4a261',
                tension: 0.3
            },
            {
              label: 'IT Org',
              data: itData,
              borderColor: '#8338ec',
              tension: 0.3
            }
        ]
    },
    options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true
          }
        }
    }
});

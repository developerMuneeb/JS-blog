// Scroll Animation for Each Post
document.addEventListener('scroll', function() {
    const posts = document.querySelectorAll('.post');
    posts.forEach(post => {
        const rect = post.getBoundingClientRect();
        if (rect.top < window.innerHeight - 100) {
            post.style.opacity = '1';
            post.style.transform = 'translateY(0)';
        }
    });
});

// Chart.js Visualization for JavaScript Usage
window.onload = function() {
    const ctxHistory = document.getElementById('chartHistory').getContext('2d');
    new Chart(ctxHistory, {
        type: 'line',
        data: {
            labels: ['1995', '2000', '2005', '2010', '2015', '2020'],
            datasets: [{
                label: 'Popularity Over Time',
                data: [10, 30, 50, 70, 90, 100],
                borderColor: 'rgba(75, 192, 192, 1)',
                fill: false
            }]
        },
        options: {
            responsive: true,
            title: { display: true, text: 'JavaScript Popularity Over Time' },
        }
    });

    const ctxEvolution = document.getElementById('chartEvolution').getContext('2d');
    new Chart(ctxEvolution, {
        type: 'bar',
        data: {
            labels: ['ES3', 'ES5', 'ES6', 'ES7', 'ES8', 'ES9'],
            datasets: [{
                label: 'Feature Growth',
                data: [10, 20, 30, 40, 50, 60],
                backgroundColor: 'rgba(153, 102, 255, 0.6)'
            }]
        },
        options: {
            responsive: true,
            title: { display: true, text: 'JavaScript Evolution by Edition' },
        }
    });
};

// Animación GSAP
gsap.from(".hero h1", { duration: 1, y: -50, opacity: 0 });
gsap.from(".hero p", { duration: 1, y: 50, opacity: 0, delay: 0.5 });
gsap.from(".hero .btn", { duration: 1, scale: 0.5, opacity: 0, delay: 1 });

// Gráfico de habilidades (Chart.js)
const ctx = document.getElementById('skillsChart').getContext('2d');
new Chart(ctx, {
    type: 'radar',
    data: {
        labels: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
        datasets: [{
            label: 'Habilidades',
            data: [90, 85, 80, 75, 70],
            backgroundColor: 'rgba(255, 105, 97, 0.2)',
            borderColor: '#ff6f61',
            borderWidth: 2
        }]
    },
    options: {
        responsive: true,
        scale: {
            ticks: {
                beginAtZero: true,
                max: 100
            }
        }
    }
});

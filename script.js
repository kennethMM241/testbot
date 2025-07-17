// Simple stock data for different periods
const stockData = {
    '1D': {
        labels: ['9:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30', '16:00'],
        datasets: [{
            label: 'AAPL',
            data: [174.20, 175.30, 175.50, 175.80, 176.40, 175.24, 176.10, 175.24],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4
        }, {
            label: 'GOOGL',
            data: [142.10, 142.30, 142.85, 142.55, 142.95, 142.65, 142.70, 142.65],
            borderColor: '#f093fb',
            backgroundColor: 'rgba(240, 147, 251, 0.1)',
            tension: 0.4
        }]
    },
    '1W': {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
        datasets: [{
            label: 'AAPL',
            data: [173.50, 174.20, 175.80, 174.95, 175.24],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4
        }, {
            label: 'GOOGL',
            data: [141.80, 142.30, 142.90, 142.45, 142.65],
            borderColor: '#f093fb',
            backgroundColor: 'rgba(240, 147, 251, 0.1)',
            tension: 0.4
        }]
    },
    '1M': {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
        datasets: [{
            label: 'AAPL',
            data: [170.20, 172.50, 174.80, 175.24],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4
        }, {
            label: 'GOOGL',
            data: [138.90, 140.20, 141.50, 142.65],
            borderColor: '#f093fb',
            backgroundColor: 'rgba(240, 147, 251, 0.1)',
            tension: 0.4
        }]
    },
    '1Y': {
        labels: ['Q1', 'Q2', 'Q3', 'Q4'],
        datasets: [{
            label: 'AAPL',
            data: [160.20, 168.50, 172.80, 175.24],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4
        }, {
            label: 'GOOGL',
            data: [130.50, 135.90, 140.20, 142.65],
            borderColor: '#f093fb',
            backgroundColor: 'rgba(240, 147, 251, 0.1)',
            tension: 0.4
        }]
    }
};

// Chart instances
let stockChart, portfolioChart, performanceChart;

// Wait for page to fully load
window.addEventListener('load', function() {
    initializeCharts();
});

function initializeCharts() {
    // Stock Price Chart
    const stockCtx = document.getElementById('stockChart');
    if (stockCtx) {
        stockChart = new Chart(stockCtx, {
            type: 'line',
            data: stockData['1D'],
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false
                    }
                }
            }
        });
    }

    // Portfolio Allocation Chart
    const portfolioCtx = document.getElementById('portfolioChart');
    if (portfolioCtx) {
        portfolioChart = new Chart(portfolioCtx, {
            type: 'doughnut',
            data: {
                labels: ['Apple Inc.', 'Microsoft Corp.', 'Tesla Inc.', 'Alphabet Inc.', 'Cash'],
                datasets: [{
                    data: [30.2, 25.8, 15.3, 12.1, 16.6],
                    backgroundColor: [
                        '#667eea',
                        '#f093fb',
                        '#f5576c',
                        '#4ecdc4',
                        '#feca57'
                    ],
                    borderWidth: 2,
                    borderColor: '#fff'
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: {
                    legend: {
                        position: 'right'
                    }
                }
            }
        });
    }

    // Performance Chart
    const performanceCtx = document.getElementById('performanceChart');
    if (performanceCtx) {
        performanceChart = new Chart(performanceCtx, {
            type: 'line',
            data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
                datasets: [{
                    label: 'Portfolio',
                    data: [100, 103.5, 107.2, 105.8, 110.4, 114.7, 112.3, 116.8, 119.2, 122.1, 118.5, 125.4],
                    borderColor: '#667eea',
                    backgroundColor: 'rgba(102, 126, 234, 0.1)',
                    tension: 0.4,
                    fill: true
                }, {
                    label: 'S&P 500',
                    data: [100, 102.1, 104.8, 103.2, 106.9, 109.4, 107.8, 111.2, 113.6, 115.8, 112.3, 118.2],
                    borderColor: '#f093fb',
                    tension: 0.4,
                    fill: false
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                animation: false,
                plugins: {
                    legend: {
                        position: 'top'
                    }
                },
                scales: {
                    y: {
                        beginAtZero: false,
                        title: {
                            display: true,
                            text: 'Performance (%)'
                        }
                    }
                }
            }
        });
    }
}

// Update chart function
function updateChart(period) {
    // Remove active class from all buttons
    document.querySelectorAll('.btn-period').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Add active class to clicked button
    event.target.classList.add('active');
    
    // Update chart data
    if (stockChart && stockData[period]) {
        stockChart.data = stockData[period];
        stockChart.update('none');
    }
}
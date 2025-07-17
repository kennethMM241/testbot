// Sample financial data
const stockData = {
    '1D': {
        labels: ['9:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00'],
        datasets: [{
            label: 'AAPL',
            data: [174.20, 174.85, 175.30, 174.95, 175.50, 176.20, 175.80, 175.95, 176.40, 175.70, 175.24, 175.85, 176.10, 175.24],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4
        }, {
            label: 'GOOGL',
            data: [142.10, 142.45, 142.30, 142.60, 142.85, 142.70, 142.55, 142.80, 142.95, 142.40, 142.65, 142.85, 142.70, 142.65],
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
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [{
            label: 'AAPL',
            data: [155.20, 158.30, 162.10, 165.40, 168.20, 171.80, 169.30, 172.50, 174.20, 176.80, 173.90, 175.24],
            borderColor: '#667eea',
            backgroundColor: 'rgba(102, 126, 234, 0.1)',
            tension: 0.4
        }, {
            label: 'GOOGL',
            data: [125.50, 128.90, 132.20, 135.60, 138.40, 140.80, 139.20, 141.30, 142.10, 143.80, 141.90, 142.65],
            borderColor: '#f093fb',
            backgroundColor: 'rgba(240, 147, 251, 0.1)',
            tension: 0.4
        }]
    }
};

// Chart instances
let stockChart, portfolioChart, performanceChart, riskChart, returnsChart;

// Prevent auto-scrolling globally
let preventScroll = true;
const originalScrollTo = window.scrollTo;
const originalScrollIntoView = Element.prototype.scrollIntoView;

// Override scroll functions to prevent unwanted scrolling
window.scrollTo = function(x, y) {
    if (!preventScroll) {
        originalScrollTo.call(this, x, y);
    }
};

Element.prototype.scrollIntoView = function(options) {
    if (!preventScroll) {
        originalScrollIntoView.call(this, options);
    }
};

// Initialize all charts when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Keep scroll prevention active for longer
    setTimeout(() => {
        preventScroll = false;
    }, 5000); // 5 seconds should be enough for all charts to load
    
    initializeCharts();
    setupEventListeners();
});

function initializeCharts() {
    // Set chart heights first to prevent layout shifts
    setChartHeights();
    
    // Stock Price Chart
    const stockCtx = document.getElementById('stockChart').getContext('2d');
    stockChart = new Chart(stockCtx, {
        type: 'line',
        data: stockData['1D'],
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false, // Disable animations that might cause scrolling
            plugins: {
                legend: {
                    position: 'top',
                },
                title: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0,0,0,0.1)'
                    }
                }
            },
            elements: {
                point: {
                    radius: 3,
                    hoverRadius: 6
                }
            }
        }
    });

    // Portfolio Allocation Chart
    const portfolioCtx = document.getElementById('portfolioChart').getContext('2d');
    portfolioChart = new Chart(portfolioCtx, {
        type: 'doughnut',
        data: {
            labels: ['Apple Inc.', 'Microsoft Corp.', 'Tesla Inc.', 'Alphabet Inc.', 'Amazon.com', 'Meta Platforms', 'Cash'],
            datasets: [{
                data: [30.2, 25.8, 15.3, 12.1, 8.4, 5.2, 3.0],
                backgroundColor: [
                    '#667eea',
                    '#f093fb',
                    '#f5576c',
                    '#4ecdc4',
                    '#45b7d1',
                    '#96ceb4',
                    '#feca57'
                ],
                borderWidth: 3,
                borderColor: '#fff'
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false, // Disable animations
            plugins: {
                legend: {
                    position: 'right',
                },
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            return context.label + ': ' + context.parsed + '%';
                        }
                    }
                }
            }
        }
    });

    // Performance vs Market Chart
    const performanceCtx = document.getElementById('performanceChart').getContext('2d');
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
                backgroundColor: 'rgba(240, 147, 251, 0.05)',
                tension: 0.4,
                fill: false
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false, // Disable animations
            plugins: {
                legend: {
                    position: 'top',
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    title: {
                        display: true,
                        text: 'Normalized Performance (%)'
                    }
                }
            }
        }
    });

    // Risk Analysis Chart
    const riskCtx = document.getElementById('riskChart').getContext('2d');
    riskChart = new Chart(riskCtx, {
        type: 'scatter',
        data: {
            datasets: [{
                label: 'Holdings',
                data: [
                    {x: 15.2, y: 8.5, stock: 'AAPL'},
                    {x: 18.7, y: 12.3, stock: 'MSFT'},
                    {x: 35.4, y: 18.9, stock: 'TSLA'},
                    {x: 20.1, y: 10.7, stock: 'GOOGL'},
                    {x: 22.8, y: 14.2, stock: 'AMZN'},
                    {x: 28.3, y: 16.8, stock: 'META'}
                ],
                backgroundColor: [
                    '#667eea',
                    '#f093fb',
                    '#f5576c',
                    '#4ecdc4',
                    '#45b7d1',
                    '#96ceb4'
                ],
                borderColor: [
                    '#667eea',
                    '#f093fb',
                    '#f5576c',
                    '#4ecdc4',
                    '#45b7d1',
                    '#96ceb4'
                ],
                pointRadius: 8,
                pointHoverRadius: 10
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false, // Disable animations
            plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        title: function(context) {
                            return context[0].raw.stock;
                        },
                        label: function(context) {
                            return [
                                'Return: ' + context.parsed.y + '%',
                                'Risk: ' + context.parsed.x + '%'
                            ];
                        }
                    }
                }
            },
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Risk (Volatility %)'
                    }
                },
                y: {
                    title: {
                        display: true,
                        text: 'Expected Return (%)'
                    }
                }
            }
        }
    });

    // Monthly Returns Chart
    const returnsCtx = document.getElementById('returnsChart').getContext('2d');
    returnsChart = new Chart(returnsCtx, {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
            datasets: [{
                label: 'Monthly Returns (%)',
                data: [3.5, 3.7, -1.4, 4.6, 4.3, -2.4, 4.5, 2.4, 3.3, -3.6, 7.2, 2.8],
                backgroundColor: function(context) {
                    const value = context.parsed.y;
                    return value >= 0 ? 'rgba(40, 167, 69, 0.8)' : 'rgba(220, 53, 69, 0.8)';
                },
                borderColor: function(context) {
                    const value = context.parsed.y;
                    return value >= 0 ? 'rgba(40, 167, 69, 1)' : 'rgba(220, 53, 69, 1)';
                },
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            animation: false, // Disable animations
            plugins: {
                legend: {
                    display: false
                }
            },
            scales: {
                y: {
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Return (%)'
                    },
                    grid: {
                        color: function(context) {
                            if (context.tick.value === 0) {
                                return 'rgba(0, 0, 0, 0.3)';
                            }
                            return 'rgba(0, 0, 0, 0.1)';
                        }
                    }
                }
            }
        }
    });
}

function setChartHeights() {
    // Set specific heights for better visualization and prevent layout shifts
    const charts = [
        { id: 'stockChart', height: '400px' },
        { id: 'portfolioChart', height: '400px' },
        { id: 'performanceChart', height: '400px' },
        { id: 'riskChart', height: '350px' },
        { id: 'returnsChart', height: '350px' }
    ];
    
    charts.forEach(chart => {
        const element = document.getElementById(chart.id);
        if (element) {
            element.style.height = chart.height;
            element.style.minHeight = chart.height; // Prevent height changes
        }
    });
}

function setupEventListeners() {
    // Period buttons for stock chart
    const periodButtons = document.querySelectorAll('.btn-period');
    periodButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            periodButtons.forEach(btn => btn.classList.remove('active'));
            // Add active class to clicked button
            this.classList.add('active');
            
            // Update chart data
            const period = this.getAttribute('data-period');
            updateStockChart(period);
        });
    });

    // Navigation links - simple scroll without smooth behavior
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                // Use original scroll function for intentional navigation
                const offsetTop = targetSection.offsetTop - 100; // Account for fixed navbar
                originalScrollTo.call(window, 0, offsetTop);
            }
        });
    });
}

function updateStockChart(period) {
    if (stockChart && stockData[period]) {
        stockChart.data = stockData[period];
        stockChart.update('none'); // Use 'none' instead of 'active' to prevent animations
    }
}

// Simple number formatting without animation
function formatNumbers() {
    document.querySelectorAll('.stat-value').forEach(el => {
        const text = el.textContent;
        if (text.includes('$')) {
            const number = parseFloat(text.replace(/[^0-9.-]+/g,""));
            el.textContent = '$' + number.toLocaleString('en-US', {maximumFractionDigits: 0});
        }
    });
}

// Initialize number formatting when page loads
document.addEventListener('DOMContentLoaded', function() {
    setTimeout(formatNumbers, 500);
});
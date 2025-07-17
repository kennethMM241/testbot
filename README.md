# 📊 Finance Dashboard

A beautiful, interactive finance dashboard with real-time charts and analytics. Perfect for tracking your investment portfolio and market trends.

## 🌟 Features

- **Interactive Charts**: Multiple chart types including line charts, doughnut charts, scatter plots, and bar charts
- **Real-time Updates**: Simulated live data updates every 10 seconds
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Portfolio Analytics**: Track portfolio performance vs market benchmarks
- **Risk Analysis**: Visualize risk vs return for individual holdings
- **Time Period Controls**: Switch between 1D, 1W, 1M, and 1Y views

## 🚀 Demo

The website includes:
- Portfolio overview with key metrics
- Stock price trends with interactive time period controls
- Portfolio allocation visualization
- Performance comparison with S&P 500
- Risk analysis scatter plot
- Monthly returns bar chart
- Top holdings table

## 📈 Chart Types

1. **Stock Price Trends** - Line chart showing price movements over time
2. **Portfolio Allocation** - Doughnut chart showing asset distribution
3. **Performance vs Market** - Line chart comparing portfolio with S&P 500
4. **Risk Analysis** - Scatter plot showing risk vs return for each holding
5. **Monthly Returns** - Bar chart with positive/negative return indicators

## 🛠️ Technology Stack

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients, animations, and responsive design
- **JavaScript (ES6+)** - Interactive functionality
- **Chart.js** - Powerful charting library
- **GitHub Pages** - Free hosting

## 🌐 Deploying to GitHub Pages

### Option 1: Direct Upload

1. Create a new repository on GitHub
2. Upload these files to your repository:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Go to repository Settings > Pages
4. Select "Deploy from a branch"
5. Choose "main" branch and "/ (root)" folder
6. Click Save
7. Your website will be available at `https://yourusername.github.io/repository-name`

### Option 2: Using Git

```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit files
git commit -m "Initial commit: Finance Dashboard"

# Add your GitHub repository as origin
git remote add origin https://github.com/yourusername/your-repo-name.git

# Push to GitHub
git branch -M main
git push -u origin main
```

Then follow steps 3-7 from Option 1.

## 📱 Responsive Design

The dashboard is fully responsive and works on:
- Desktop computers (1200px+)
- Tablets (768px - 1199px)
- Mobile phones (< 768px)

## 🎨 Customization

### Colors
You can customize the color scheme by modifying the CSS variables in `styles.css`:
- Primary gradient: `#667eea` to `#764ba2`
- Chart colors: Various vibrant colors for different data series

### Data
Update the sample data in `script.js` to reflect your actual portfolio:
- Modify `stockData` object for different time periods
- Update portfolio allocation percentages
- Change company names and stock symbols

### Charts
Add more charts or modify existing ones by:
- Adding new canvas elements in `index.html`
- Creating chart instances in `script.js`
- Styling them in `styles.css`

## 🔧 Features Explained

### Interactive Elements
- **Time Period Buttons**: Switch between different time ranges for stock charts
- **Smooth Scrolling**: Navigation links smoothly scroll to sections
- **Animated Numbers**: Portfolio values animate when scrolling into view
- **Hover Effects**: Interactive chart tooltips and hover states

### Real-time Simulation
- Portfolio values update every 10 seconds with random fluctuations
- Change indicators update accordingly (positive/negative)
- Simulates a live trading environment

## 📊 Sample Data

The dashboard includes realistic sample data for:
- **AAPL** (Apple Inc.)
- **GOOGL** (Alphabet Inc.)
- **MSFT** (Microsoft Corp.)
- **TSLA** (Tesla Inc.)
- **AMZN** (Amazon.com)
- **META** (Meta Platforms)

## 🎯 Perfect For

- Personal portfolio tracking
- Investment presentations
- Finance education
- Demo applications
- Learning web development with charts

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and submit pull requests for any improvements!

## 📞 Support

If you encounter any issues or have questions, please open an issue on GitHub.

---

**Enjoy your new Finance Dashboard! 🚀📈**
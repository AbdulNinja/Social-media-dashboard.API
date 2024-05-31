
document.getElementById('dark-mode-toggle').addEventListener('change', function() {
    document.body.classList.toggle('dark-mode', this.checked);
});


let style = document.createElement('style');
style.innerHTML = `
    .dark-mode {
        background-color: #333;
        color: #f1f3f6;
    }
    .dark-mode .followers-card, .dark-mode .overview-card {
        background-color: #444;
        color: #f1f3f6;
    }
    .dark-mode .dashboard-header {
        color: #f1f3f6;
    }
    .dark-mode .positive {
        color: #8bc34a;
    }
    .dark-mode .negative {
        color: #e57373;
    }
`;
document.head.appendChild(style);


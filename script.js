// Simulated microbiome test data
        const microbiomeData = {
            markers: [
                { name: "Bifidobacteria", value: 15, optimal: "20-40%", status: "low" },
                { name: "Lactobacillus", value: 8, optimal: "10-25%", status: "low" },
                { name: "Clostridia", value: 45, optimal: "15-30%", status: "high" },
                { name: "Diversity Index", value: 2.1, optimal: "3.5-4.5", status: "low" },
                { name: "Akkermansia", value: 3, optimal: "1-5%", status: "optimal" },
                { name: "Firmicutes/Bacteroidetes", value: 4.2, optimal: "1.5-3.0", status: "high" }
            ],
            insights: [
                {
                    title: "Low Beneficial Bacteria",
                    description: "Your levels of Bifidobacteria and Lactobacillus are below optimal ranges. These bacteria support immune function and digestive health."
                },
                {
                    title: "Elevated Clostridia",
                    description: "Higher than optimal Clostridia levels may indicate digestive imbalance and could affect mood and inflammation."
                },
                {
                    title: "Reduced Diversity",
                    description: "Lower microbial diversity is associated with reduced resilience and may impact overall gut health."
                }
            ],
            recommendations: {
                diet: [
                    "Increase prebiotic fiber from vegetables, fruits, and whole grains",
                    "Add fermented foods like kefir, sauerkraut, and kimchi daily",
                    "Consider a high-quality probiotic supplement with Bifidobacteria",
                    "Reduce processed foods and added sugars",
                    "Include polyphenol-rich foods like berries and green tea"
                ],
                lifestyle: [
                    "Aim for 7-9 hours of quality sleep nightly",
                    "Engage in moderate exercise 3-4 times per week",
                    "Spend time in nature to diversify microbial exposure",
                    "Practice intermittent fasting (12-16 hours)",
                    "Avoid unnecessary antibiotic use"
                ],
                stress: [
                    "Practice daily meditation or deep breathing exercises",
                    "Try yoga or tai chi for mind-body connection",
                    "Maintain regular social connections",
                    "Consider adaptogenic herbs like ashwagandha",
                    "Establish consistent daily routines"
                ],
                environment: [
                    "Use natural cleaning products when possible",
                    "Filter drinking water to remove chlorine",
                    "Minimize exposure to artificial sweeteners",
                    "Choose organic produce for the 'Dirty Dozen' foods",
                    "Ensure adequate ventilation in living spaces"
                ]
            }
        };


        // Default configuration
        const defaultConfig = {
            main_title: "Your Microbiome Insights",
            patient_name: "Sarah M.",
            test_date: "December 2024",
            primary_color: "#4299e1",
            surface_color: "#ffffff",
            text_color: "#1a202c",
            accent_color: "#667eea",
            background_color: "#f7fafc",
            font_family: "Inter",
            font_size: 16
        };


        // Render functions
        function renderMarkers() {
            const container = document.getElementById('markers-container');
            container.innerHTML = microbiomeData.markers.map(marker => `
                <div class="marker-item ${marker.status}">
                    <div>
                        <div class="marker-name">${marker.name}</div>
                        <div style="font-size: 0.8rem; color: #718096;">Optimal: ${marker.optimal}</div>
                    </div>
                    <div class="marker-status status-${marker.status}">
                        ${marker.status.toUpperCase()}
                    </div>
                </div>
            `).join('');
        }


        function renderInsights() {
            const container = document.getElementById('insights-container');
            container.innerHTML = microbiomeData.insights.map(insight => `
                <div class="insight-item">
                    <div class="insight-title">${insight.title}</div>
                    <div class="insight-description">${insight.description}</div>
                </div>
            `).join('');
        }


        function renderRecommendations() {
            const container = document.getElementById('recommendations-container');
            const categories = [
                { 
                    key: 'diet', 
                    title: 'Diet & Nutrition', 
                    icon: '🍎', 
                    iconClass: 'diet-icon' 
                },
                { 
                    key: 'lifestyle', 
                    title: 'Lifestyle', 
                    icon: '🏃‍♀️', 
                    iconClass: 'lifestyle-icon' 
                },
                { 
                    key: 'stress', 
                    title: 'Stress & Nervous System', 
                    icon: '🧘‍♀️', 
                    iconClass: 'stress-icon' 
                },
                { 
                    key: 'environment', 
                    title: 'Environment', 
                    icon: '🌱', 
                    iconClass: 'environment-icon' 
                }
            ];


            container.innerHTML = categories.map(category => `
                <div class="recommendation-card">
                    <div class="card-header">
                        <div class="card-icon ${category.iconClass}">
                            ${category.icon}
                        </div>
                        <div class="card-title">${category.title}</div>
                    </div>
                    <ul class="recommendation-list">
                        ${microbiomeData.recommendations[category.key].map(rec => 
                            `<li>${rec}</li>`
                        ).join('')}
                    </ul>
                </div>
            `).join('');
        }


        // Element SDK implementation
        async function onConfigChange(config) {
            const mainTitle = config.main_title || defaultConfig.main_title;
            const patientName = config.patient_name || defaultConfig.patient_name;
            const testDate = config.test_date || defaultConfig.test_date;
            const primaryColor = config.primary_color || defaultConfig.primary_color;
            const surfaceColor = config.surface_color || defaultConfig.surface_color;
            const textColor = config.text_color || defaultConfig.text_color;
            const accentColor = config.accent_color || defaultConfig.accent_color;
            const backgroundColor = config.background_color || defaultConfig.background_color;
            const fontFamily = config.font_family || defaultConfig.font_family;
            const fontSize = config.font_size || defaultConfig.font_size;


            // Update text content on both pages
            document.getElementById('landing-title').textContent = `${mainTitle} Are Ready!`;
            document.getElementById('main-title').textContent = mainTitle;
            document.getElementById('landing-patient-name').textContent = patientName;
            document.getElementById('patient-name').textContent = patientName;
            document.getElementById('landing-test-date').textContent = testDate;
            document.getElementById('test-date').textContent = testDate;


            // Update colors
            document.body.style.background = `linear-gradient(135deg, ${accentColor} 0%, ${primaryColor} 100%)`;
            
            const whiteElements = document.querySelectorAll('.header, .markers-panel, .insights-panel, .recommendation-card, .results-ready-card');
            whiteElements.forEach(el => el.style.backgroundColor = surfaceColor);


            const textElements = document.querySelectorAll('.marker-name, .card-title');
            textElements.forEach(el => el.style.color = textColor);
            
            // Keep headings purple
            const headingElements = document.querySelectorAll('h1, h2, .panel-title');
            headingElements.forEach(el => el.style.color = '#6b46c1');


            // Update font
            const fontStack = `${fontFamily}, -apple-system, BlinkMacSystemFont, sans-serif`;
            document.body.style.fontFamily = fontStack;


            // Update font sizes proportionally
            document.querySelectorAll('h1').forEach(el => {
                el.style.fontSize = `${fontSize * 2}px`;
            });
            document.querySelectorAll('h2, .panel-title').forEach(el => {
                el.style.fontSize = `${fontSize * 1.25}px`;
            });
            document.querySelectorAll('.card-title').forEach(el => {
                el.style.fontSize = `${fontSize * 1.1}px`;
            });
            document.body.style.fontSize = `${fontSize}px`;
        }


        function mapToCapabilities(config) {
            return {
                recolorables: [
                    {
                        get: () => config.primary_color || defaultConfig.primary_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.setConfig({ primary_color: value });
                            }
                        }
                    },
                    {
                        get: () => config.surface_color || defaultConfig.surface_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.setConfig({ surface_color: value });
                            }
                        }
                    },
                    {
                        get: () => config.text_color || defaultConfig.text_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.setConfig({ text_color: value });
                            }
                        }
                    },
                    {
                        get: () => config.accent_color || defaultConfig.accent_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.setConfig({ accent_color: value });
                            }
                        }
                    },
                    {
                        get: () => config.background_color || defaultConfig.background_color,
                        set: (value) => {
                            if (window.elementSdk) {
                                window.elementSdk.setConfig({ background_color: value });
                            }
                        }
                    }
                ],
                borderables: [],
                fontEditable: {
                    get: () => config.font_family || defaultConfig.font_family,
                    set: (value) => {
                        if (window.elementSdk) {
                            window.elementSdk.setConfig({ font_family: value });
                        }
                    }
                },
                fontSizeable: {
                    get: () => config.font_size || defaultConfig.font_size,
                    set: (value) => {
                        if (window.elementSdk) {
                            window.elementSdk.setConfig({ font_size: value });
                        }
                    }
                }
            };
        }


        function mapToEditPanelValues(config) {
            return new Map([
                ["main_title", config.main_title || defaultConfig.main_title],
                ["patient_name", config.patient_name || defaultConfig.patient_name],
                ["test_date", config.test_date || defaultConfig.test_date]
            ]);
        }


        // Navigation functions
        function showDashboard() {
            document.getElementById('landing-page').style.display = 'none';
            document.getElementById('dashboard-page').style.display = 'block';
        }


        function showLanding() {
            document.getElementById('landing-page').style.display = 'block';
            document.getElementById('dashboard-page').style.display = 'none';
        }


        // Initialize the application
        function initializeApp() {
            renderMarkers();
            renderInsights();
            renderRecommendations();


            // Set up navigation
            document.getElementById('view-results-btn').addEventListener('click', showDashboard);
            document.getElementById('back-to-landing-btn').addEventListener('click', showLanding);


            // Initialize Element SDK if available
            if (window.elementSdk) {
                window.elementSdk.init({
                    defaultConfig,
                    onConfigChange,
                    mapToCapabilities,
                    mapToEditPanelValues
                });
            }
        }


        // Start the app when DOM is ready
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', initializeApp);
        } else {
            initializeApp();
        }
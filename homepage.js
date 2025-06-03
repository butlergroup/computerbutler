document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed.");  // ✅ Debug
    const themeToggle = document.getElementById("themeToggle");

    const app = document.getElementById("app");
    console.log("App container:", app);  // ✅ Debug

    const routes = {
        "/": renderHome,
        "/privacy-policy": () => loadModule("/privacy-policy.js"),
        "/terms-of-service": () => loadModule("/terms-of-service.js"),
    };

    // ✅ Router to handle path changes
    function router() {
        let path = window.location.pathname;
        console.log("Original path:", path);  // ✅ Debug

        // ✅ Redirect `/index.html` to `/`
        if (path === "/index.html") {
            console.log("Redirecting from /index.html to /");  // ✅ Debug
            path = "/";
            history.replaceState({}, "", "/");  // Update URL without reloading
        }

        const route = routes[path] || renderHome;  // ✅ Default to Home instead of 404
        console.log("Routing to:", path);  // ✅ Debug
        route();

        // Initialize Theme Toggle AFTER rendering the page
        initializeThemeToggle();
    }

    // ✅ Dynamic import for JS modules
    async function loadModule(scriptPath) {
        console.log(`Attempting to load module: ${scriptPath}`);  // ✅ Debug
        try {
            const module = await import(scriptPath);
            console.log(`Successfully loaded: ${scriptPath}`);  // ✅ Debug
            module.render(app); // Expect each module to export a `render()` function
        } catch (error) {
            console.error(`❌ Failed to load ${scriptPath}:`, error);  // ❌ Error Debug
            renderHome();  // ✅ Default to Home instead of 404
        }
    }

    // ✅ Home Page
    function renderHome() {
        console.log("Rendering Home Page");  // ✅ Debug
        app.innerHTML = `
            <style>
                :root {
                    --bg-color: #ffffff;
                    --text-color: #000000;
                }

                .dark-mode {
                    --bg-color: #1e1e1e;
                    --text-color: #ffffff;
                }

                body {
                    background-color: var(--bg-color);
                    color: var(--text-color);
                    transition: background-color 0.3s ease, color 0.3s ease;
                    margin: 0 auto;
                    max-width: 85%;
                }

                /* General mobile-friendly settings */
                * {
                    box-sizing: border-box;
                    max-width: 100%;
                }

                /* Container for the entire grid */
                .container {
                    display: flex;
                    flex-direction: column;
                    align-items: center; /* Center content horizontally */
                    gap: 20px; /* Spacing between rows */
                    margin-top: 20px;
                    position: relative;
                }

                /* First row: Three equal columns */
                .row {
                    display: flex;
                    justify-content: center;
                    gap: 20px; /* Space between items */
                }

                /* Second row: Two centered columns */
                .row.centered {
                    justify-content: center; /* Center the two columns */
                }

                /* Individual items */
                .box {
                    display: flex; /* Enables flexbox */
                    align-items: center; /* Centers vertically */
                    justify-content: center; /* Centers horizontally */
                    border: 1px solid black;
                    border-radius: 10px;
                    padding: 10px;
                    width: 150px; /* Adjust to ensure consistency */
                    height: 150px; /* Ensure a fixed height for vertical centering */
                    text-align: center;
                }

                .box:hover {
                    background-color:rgb(0, 157, 255);
                }

                /* Images */
                .box img {
                    width: 100%;
                    height: auto;
                    max-width: 150px; /* Ensures the image fits inside the box */
                    max-height: 100%; /* Ensures vertical centering works */
                    object-fit: contain; /* Keeps the aspect ratio */
                }

                /* Media query for smaller screens */
                @media screen and (max-width: 768px) {
                    .row {
                        flex-direction: column;
                        align-items: center;
                    }

                    /* Ensure the images in the boxes scale properly */
                    .box img {
                        max-width: 90%;
                    }

                    /* Make text and images fit smaller screens */
                    h1 {
                        font-size: 1.5rem;
                    }

                    p {
                        font-size: 1rem;
                        padding: 0 10px;
                    }

                    .box {
                        min-width: 100%; /* Full width on mobile */
                    }

                    /* Reduce large logo size */
                    img[alt="Computer Butler Logo"] {
                        width: 90%;
                        max-width: 500px;
                    }
                }

                @media screen and (max-width: 480px) {
                    h1 {
                        font-size: 1.2rem;
                    }

                    p {
                        font-size: 0.9rem;
                    }
                }

                footer {
                    text-align: center;
                    font-size: 14px;
                    color: #666;
                }
            </style>
            
            <div style="text-align: center; margin-top: 20px;">

                <div style="text-align: center; margin-top: 20px;">
                    <button id="themeToggle">☀️ Light /🌙 Dark Mode</button>
                </div>
            
                <img src="cblogo.gif" alt="Computer Butler Logo" style="width: 100%; max-width: 750px; height: auto;">
                
                <h1>Welcome to The Computer Butler</h1>
                
                <p>
                    <em>A Managed Information Technology and Cyber Security Service Provider serving small businesses, non-profits, and enterprises.</em>
                </p>
                <p>
                    We've provided best-in-class IT Service Management to our clients for over a decade. We believe in a proactive and preventive strategy to technology management. 
                    Human beings brush our teeth and bathe regularly. We also see a dentist and even indulge in a spa treatment occasionally. 
                    It's for these same reasons you should perform maintenance on your personal and professional technology regularly. 
                    If you don't know how to, you should hire a company to take care of it for you. That's where we come in.
                </p>
                <p>
                    We live in an increasingly digital world day by day. 
                    In an ongoing cyber security climate where incidents like the <a href="https://www.gao.gov/blog/solarwinds-cyberattack-demands-significant-federal-and-private-sector-response-infographic" target="_blank">SolarWinds compromise</a>
                     and the <a href="https://www.cisa.gov/news-events/alerts/2024/07/19/widespread-it-outage-due-crowdstrike-update" target="_blank">CrowdStrike outage</a> are occurring, 
                    there has never been a more important time to make sure your technology is secure and maintained. 
                    <a href="mailto:welcome@computerbutler.net">Contact us</a> today for a <b>free network assessment and up to 2 free hours of labor credited on your first invoice.</b>
                </p>
            </div>

            <div style="text-align: center">
                <p>
                    Running Windows 10 or Windows 11 and have a Microsoft account? <a href="https://support.microsoft.com/en-us/topic/faq-for-e-tree-on-microsoft-edge-msn-weather-and-microsoft-wallet-d6fde56e-b61d-4990-bd69-7a503ed64895" target="_blank">Use your weather app to grow trees!</a>
                </p>
                <p>
                    FYI: <a href="https://www.microsoft.com/en-us/windows/end-of-support" target="_blank">Windows 10 will stop receiving Microsoft Updates</a> on October 14, 2025. <a href="mailto:welcome@computerbutler.net">Contact us</a> to plan an upgrade for your organization today.
                </p>
                <p>
                    We know how to turn your network's free disk space into MRR (monthly recurring revenue). <a href="mailto:welcome@computerbutler.net">Ask us how.</a>
                </p>
                <p>
                    The Computer Butler LLC signed the 2015 Supreme Court Amicus Brief which resulted in marriage equality being granted to LGBT citizens: <a href="https://www.huffpost.com/entry/marriage-equality-amicus_n_6808260" target="_blank">https://www.huffpost.com/entry/marriage-equality-amicus_n_6808260</a>
                </p>
                <p>
                    We leverage the Berkeley Open Infrastructure for Networked Computing (<a href="https://boinc.berkeley.edu" target="_blank">BOINC</a>) and the World Community Grid to contribute processing power to help solve some of humanity's most intractable challenges - like researching treatments that can lead to a cure for diseases like cancer and COVID-19. Clients that wish to join us in this research can do so for free.
                </p>
                <p>
                    Interested in doing business? Contact us at <b><a href="tel:6157966556">(615) 796-6556</a></b> or <b><a href="mailto:welcome@computerbutler.net">welcome@computerbutler.net</a></b> and we'll be "at your service!" :)
                </p>
            </div>

            <div class="container">
                <!-- First row: Three items -->
                <div class="row">
                    <div class="box">
                        <a href="https://appsource.microsoft.com/en-US/marketplace/partner-dir/3baa70b5-6e07-43ba-8021-51ecc8f75fa4" target="_blank"><img src="msft.png" alt="Microsoft Partner"></a>
                    </div>
                    <div class="box">
                        <img src="goog.png" alt="Google Partner">
                    </div>
                    <div class="box">
                        <img src="uscc.png" alt="USCC Member">
                    </div>
                    <div class="box">
                        <img src="fortinet.png" alt="Fortinet Partner">
                    </div>
                    <div class="box">
                        <img src="sonicwall.png" alt="SonicWALL Partner">
                    </div>
                    <div class="box">
                        <img src="meraki.png" alt="Cisco Meraki Partner">
                    </div>
                </div>
            </div>
        <hr>
        <footer>
            <div style="text-align: center">
                <a href="https://climate.stripe.com/pDhV4Z" target="_blank"><img src="stripeclimate.png" alt="Stripe Climate Partner" style="width: 75px; height: auto;"></a><br />
                We partner with Stripe and contribute 1% of our revenue to carbon removal.
            </div>

            <div style="text-align: center">
                <a href="/privacy-policy">Privacy Policy</a> | <a href="/terms-of-service">Terms of Service</a><br />
                Copyright &copy; 2025 The Computer Butler, LLC. All rights reserved.
            </div>
        </footer>
        `;
    }

    // ✅ Handle back/forward browser buttons
    window.addEventListener("popstate", () => {
        console.log("Handling popstate event");  // ✅ Debug
        router();
    });

    // Handle link click events
    document.addEventListener("click", (event) => {
        const target = event.target.closest("a"); // Ensure it's a link
        if (target && target.href.startsWith(window.location.origin)) {
            event.preventDefault(); // Prevent full-page reload
            history.pushState({}, "", target.getAttribute("href")); // Update URL
            router(); // Handle navigation
        }
    });

    // Theme toggle between dark/light mode
    function initializeThemeToggle() {
        const themeToggle = document.getElementById("themeToggle");
        if (!themeToggle) return; // Ensure button exists before adding event listener

        // Load saved theme from localStorage
        if (localStorage.getItem("theme") === "dark") {
            document.body.classList.add("dark-mode");
            themeToggle.textContent = "☀️ Light Mode";
        }

        // Toggle theme on button click
        themeToggle.addEventListener("click", () => {
            document.body.classList.toggle("dark-mode");

            if (document.body.classList.contains("dark-mode")) {
                themeToggle.textContent = "☀️ Light Mode";
                localStorage.setItem("theme", "dark");
            } else {
                themeToggle.textContent = "🌙 Dark Mode";
                localStorage.setItem("theme", "light");
            }
        });
    }

    // ✅ Initial load
    router();
});
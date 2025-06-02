export function render(app) {
    app.innerHTML = `
        <div style="text-align: center; margin-top: 50px;">
        
            <button id="backBtn" style="margin: 10px; padding: 10px 20px; background-color: #008CBA; color: white; border: none; border-radius: 5px;">Back to Home</button>

            <h2>Privacy Policy</h2>
            
            <p>
                The Computer Butler, LLC respects your privacy. 
                In the course of providing our services we sometimes collect, store, and use your personal and business information for specifically defined purposes. 
                We use your information to support and enhance our relationship with you, to provide service and support, and to share product, service, and company news and offerings with you. 
                Under no circumstances do we sell your information to a third party. 
                We do however reserve the right to share your information outside the company as required by specific law, or if compelled to do so by a subpoena. 
                If it is deemed necessary to share your information with a third party, we will only do so with your express written consent, and then only with partners who are also legally bound to The Computer Butler, LLC to protect your privacy and data.
            </p>
            <p>
                Agents, employees, or contractors of The Computer Butler, LLC who have access to your information are required to keep the information confidential and not use it for any other purpose than to carry out the services they are performing for The Computer Butler, LLC. 
            </p>
            <p>
                The Computer Butler, LLC may be required to disclose your information in connection with law enforcement, fraud prevention, government regulation, or other legal action, or if The Computer Butler, LLC reasonably believes it is necessary to do so to protect itself, its customers, or the public.
            </p>
            <p>
                Embedded Content From Other Websites
            </p>
            <p>
                Articles on this site may include embedded content (e.g. videos, images, articles, etc.). 
                Embedded content from other websites behaves in the exact same way as if the visitor has visited the other website.
                These websites may collect data about you, use cookies, embed additional third-party tracking, and monitor your interaction with that embedded content, including tracking your interaction with the embedded content if you have an account and are logged in to that website.
            </p>
            <p>
                What Rights You Have Over Your Data
            </p>
            <p>
                If you have provided your personal information through this website or done business with us, 
                you can request to receive an exported file of the personal data we hold about you, including any data you have provided to us. 
                You can also request that we erase any personal data we hold about you. 
                This does not include any data we are obliged to keep for administrative, legal, or security purposes.
            </p>
            <p>
                Limitation of Liability
            </p>
            <p>
                Under no circumstances including but not limited to negligence shall The Computer Butler, LLC be liable for any direct, indirect, special, incidental, or consequential damages including but not limited to loss of data or profit arising out of any breach of this privacy policy even if The Computer Butler, LLC or one of its authorized agents have been advised of the possibility of such damages.        </p>
            <p>
                Privacy Policy Revisions
            </p>
            <p>
                The Computer Butler, LLC may at any time revise this Privacy Policy by updating this posting. 
                By using our services, you agree to be bound by any such revisions and should therefore periodically visit this page to determine the then current Privacy Policy to which you are bound.
            </p>
            <p>
                Questions about the Privacy Policy should be sent to us at <a href="mailto:welcome@computerbutler.net">welcome@computerbutler.net</a>
            </p>
        
        </div>
    `;

    document.getElementById('backBtn').addEventListener('click', () => {
        history.pushState({}, "", "/");
        window.dispatchEvent(new PopStateEvent("popstate"));
    });
}
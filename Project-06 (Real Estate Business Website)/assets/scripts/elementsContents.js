const elements = document.querySelectorAll("*")

function addContentToElement(tags){
    tags.forEach(element => {
        if(element.tagName.toLowerCase() === 'header'){
            const headerContent = `
                <div class="container">
                    <img src="assets/images/logos/Logo.svg" alt="Website logo">
                    <nav>
                        <span class="nav-links active">Home</span>
                        <span class="nav-links">About Us</span>
                        <span class="nav-links">Properties</span>
                        <span class="nav-links">Services</span>
                    </nav>
                    <button class="btn solid-dark">Contact Us</button>
                </div>
            `;

            element.innerHTML = headerContent
        }
        if(element.className === 'cta'){
            const ctaContent = `
                <img class="left" src="assets/images/left-bg.png" alt="">
                <img class="right" src="assets/images/right-bg.png" alt="">
                <div class="container">
                    <div class="content">
                        <h1 class="title">Start Your Real Estate Journey Today</h1>
                        <p class="paragraph">Your dream property is just a click away. Whether you're looking for a new home, a strategic investment, or expert real estate advice, Estatein is here to assist you every step of the way. Take the first step towards your real estate goals and explore our available properties or get in touch with our team for personalized assistance.</p>
                    </div>
                    <button class="btn solid-primary">Explore Properties</button>
                </div>
            `;
            
            element.innerHTML = ctaContent
        }
        if(element.tagName.toLowerCase() === 'footer'){
            const footerContent = `
                    <div class="footer">
                    <div class="container">
                        <div class="left">
                            <img class="logo" src="assets/images/logos/Logo.svg" alt="">
                            <label for="">
                                <img class="left-icon" src="assets/icons/email-icon.svg" alt="">
                                <input type="email" placeholder="Enter your email" name="email">
                                <img class="right-icon" src="assets/icons/send-icon.svg" alt="">
                            </label>
                        </div>
                        <div class="right">
                            <div class="sitemap">
                                <p class="paragraph page-name">Home</p>
                                <div class="sitemap-links">
                                    <a href="#hero" class="paragraph">Hero section</a>
                                    <a href="#features" class="paragraph">Features</a>
                                    <a href="#properties" class="paragraph">Properties</a>
                                    <a href="#testimonials" class="paragraph">Testimonials</a>
                                    <a href="#faqs" class="paragraph">FAQ'</a>
                                </div>
                            </div>
                            <div class="sitemap">
                                <p class="paragraph page-name">About Us</p>
                                <div class="sitemap-links">
                                    <a href="#our-story" class="paragraph">Our Story</a>
                                    <a href="#our-works" class="paragraph">Our Works</a>
                                    <a href="#how-it-works" class="paragraph">How It Works</a>
                                    <a href="#our-team" class="paragraph">Our Team</a>
                                    <a href="#our-clients" class="paragraph">Our Clients</a>
                                </div>
                            </div>
                            <div class="sitemap">
                                <p class="paragraph page-name">Properties</p>
                                <div class="sitemap-links">
                                    <a href="" class="paragraph">Portfolio</a>
                                    <a href="" class="paragraph">Categories</a>
                                </div>
                            </div>
                            <div class="sitemap">
                                <p class="paragraph page-name">Services</p>
                                <div class="sitemap-links">
                                    <a href="" class="paragraph">Valuation Mastery</a>
                                    <a href="" class="paragraph">Strategic Marketing</a>
                                    <a href="" class="paragraph">Negotiation Wizardry</a>
                                    <a href="" class="paragraph">Closing Success</a>
                                    <a href="" class="paragraph">Property Management</a>
                                </div>
                            </div>
                            <div class="sitemap">
                                <p class="paragraph page-name">Contact Us</p>
                                <div class="sitemap-links">
                                    <a href="" class="paragraph">Contact Form</a>
                                    <a href="" class="paragraph">Our Offices</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="end">
                    <div class="container">
                        <div class="left">
                            <p class="paragraph">@2023 Estatein. All Rights Reserved.</p>
                            <p class="paragraph">Terms & Conditions</p>
                        </div>
                        <div class="right">
                            <div class="social-icon">
                                <img src="assets/icons/facebook-icon.svg" alt="">
                            </div>
                            <div class="social-icon">
                                <img src="assets/icons/linkedin-icon.svg" alt="">
                            </div>
                            <div class="social-icon">
                                <img src="assets/icons/twiter-icon.svg" alt="">
                            </div>
                            <div class="social-icon">
                                <img src="assets/icons/youtube-icon.svg" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            `;

            element.innerHTML = footerContent
        }
        if(element === document.getElementById('features')){
            const serviceCardContent = `
                <div class="service-card">
                    <img class="card-icon" src="assets/icons/home-icon.svg" alt="Home icon">
                    <span>Find Your Dream Home</span>
                    <div class="icon">
                        <img src="assets/icons/arrow-top-right-icon.svg" alt="Arrow icon">
                    </div>
                </div>
                <div class="service-card">
                    <img class="card-icon" src="assets/icons/value-icon.svg" alt="Value icon">
                    <span>Unlock Property Value</span>
                    <div class="icon">
                        <img src="assets/icons/arrow-top-right-icon.svg" alt="Arrow icon">
                    </div>
                </div>
                <div class="service-card">
                    <img class="card-icon" src="assets/icons/management-icon.svg" alt="Home icon">
                    <span>Effortless Property Management</span>
                    <div class="icon">
                        <img src="assets/icons/arrow-top-right-icon.svg" alt="Arrow icon">
                    </div>
                </div>
                <div class="service-card">
                    <img class="card-icon" src="assets/icons/sun-icon.svg" alt="Home icon">
                    <span>Smart Investments, Informed Decisions</span>
                    <div class="icon">
                        <img src="assets/icons/arrow-top-right-icon.svg" alt="Arrow icon">
                    </div>
                </div>
            `
            
            element.innerHTML = serviceCardContent
        }
    });
}

addContentToElement(elements);
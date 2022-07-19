const createFooter = () => {
    let footer = document.querySelector('footer');

    footer.innerHTML = `
    <div class="footer-content">
        <img src="img/dark-logo3.png" class="logo" alt="">
        <div class="footer-ul-container">
            <ul class="category">
                <li class="category-title">bouquet</li>
                <li><a href="#" class="footer-link">Hand-tied</a></li>
                <li><a href="#" class="footer-link">Posy</a></li>
                <li><a href="#" class="footer-link">Cascade</a></li>
                <li><a href="#" class="footer-link">Round</a></li>
                <li><a href="#" class="footer-link">Nosegay</a></li>
                <li><a href="#" class="footer-link">Pomander</a></li>
                <li><a href="#" class="footer-link">Composite</a></li>
                <li><a href="#" class="footer-link">Small-green</a></li>
            </ul>
            <ul class="category">
                <li class="category-title">flowers</li>
                <li><a href="#" class="footer-link">Rose</a></li>
                <li><a href="#" class="footer-link">Lily</a></li>
                <li><a href="#" class="footer-link">Sunflower</a></li>
                <li><a href="#" class="footer-link">Lotus</a></li>
                <li><a href="#" class="footer-link">Alstroemeria</a></li>
                <li><a href="#" class="footer-link">Daisy</a></li>
                <li><a href="#" class="footer-link">Gardenia</a></li>
                <li><a href="#" class="footer-link">Orchid</a></li>
            </ul>
        </div>
    </div>
    <p class="footer-title">about company</p>
    <p class="info">HI, Myself  THILAK V from India, I have done a frontend page using html,css,javascript. The page is for showcasing of flowers for sale. The below given contact details are not true and also this project is for learning experiment only. Thanks for your valuable time. Have a great day...!!!!</p>
    <p class="info">support emails - help@florist.com, customersupport@thilak.com</p>
    <p class="info">telephone - +91-8553321057 , +91-9478123066</p>
    <div class="footer-social-container">
        <div>
            <a href="#" class="social-link">terms & services</a>
            <a href="#" class="social-link">privacy page</a>
        </div>
        <div>
            <a href="#" class="social-link">instagram</a>
            <a href="#" class="social-link">facebook</a>
            <a href="#" class="social-link">twitter</a>
        </div>
    </div>
    <p class="footer-credit">FLORIST, Best Floristry Online Store</p>
    `;
}

createFooter();
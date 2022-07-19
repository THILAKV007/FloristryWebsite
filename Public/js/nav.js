const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
    <div class="nav">
    <img src="img/dark-logo3a.png" class="brand-logo" alt="">
    <div class="nav-items">
        <div class="search">
            <input type="text" class="search-box" placeholder="Search THILAK's Variety of Flowers">
            <button class="search-btn">search</button>
        </div>
        <a href="#"><img src="img/user.png" alt=""></a>
        <a href="#"><img src="img/cart.png" alt=""></a>
    </div>
</div>
<ul class="links-container">
    <li class="link-item"><a href="#" class="link">Home</a></li>
    <li class="link-item"><a href="#" class="link">Bouquet</a></li>
    <li class="link-item"><a href="#" class="link">Rose</a></li>
    <li class="link-item"><a href="#" class="link">Tulips</a></li>
    <li class="link-item"><a href="#" class="link">Sunflower</a></li>
</ul>
    `;
}

createNav();
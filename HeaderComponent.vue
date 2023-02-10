<template>
    <header id="navbar">
        <a href="#"><img src="https://tourism.surabaya.go.id/assets/front/images/img-logo-sparkling.png" alt=""></a>
        <nav>
            <ul class="nav-menu">
                <li class="nav-item active-link">
                    <a href="#">Beranda</a>
                </li>
                <li class="nav-item">
                    <a href="#">Destinasi</a>
                </li>
                <li class="nav-item">
                    <a href="#">Event</a>
                </li>
                <li class="nav-item">
                    <a href="#">Akomodasi</a>
                </li>
                <li class="nav-item">
                    <a href="#">Informasi</a>
                </li>
            </ul>
            <button class="nav-toggle">
                <div class="line"></div>
            </button>
        </nav>
    </header>
</template>

<script setup>
window.onscroll = function() { scrollFunction() };
    function scrollFunction() {
        let navbar = document.getElementById('navbar');
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            navbar.style.boxShadow = "10px 10px 30px rgba(0, 0, 0, .5)";
            navbar.style.background = "rgba(200, 200, 200, .5)";
            navbar.style.backdropFilter = "blur(5px)";
        } else {
            navbar.style.boxShadow = "none";
            navbar.style.background = "none";
            navbar.style.backdropFilter = "none";
        }
}

window.onload = function() {
    const navToggle = document.querySelector('.nav-toggle')
    const navMenu = document.querySelector('.nav-menu')
    const activeLink = document.querySelectorAll('.nav-item')

    if (navToggle) {
        navToggle.addEventListener('click', function() {
        navToggle.classList.toggle('nav-toggle-active')
        navMenu.classList.toggle('nav-menu-active')
        })
    }

    activeLink.forEach(active => {
        active.addEventListener('click', function() {
            activeLink.forEach(active => active.classList.remove('active-link'))
            this.classList.add('active-link')
        })
    })

    document.querySelectorAll('.nav-item').forEach(n => n.addEventListener('click', () => {
        navToggle.classList.toggle('nav-toggle-active')
        navMenu.classList.toggle('nav-menu-active')
    }))
}
</script>

<style scoped>
.nav-item.active-link {
    background: #eee;
    padding: .25rem 3rem;
    border-radius: 2rem;
}
.nav-item.active-link > a {
    color: orange !important;
}
header {
    position: fixed;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0;
    z-index: 1;
    transition: 1s;
}
header img {
    width: 6.25rem;
    margin-left: 5rem;
    position: relative;
    display: inline-block;
    z-index: 2;
}
header img:hover {
    transform: rotate(-5deg)
}
nav {
    margin-right: 5rem;
    display: flex;
    position: relative;
}
.nav-menu {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
}
.nav-menu .nav-item {
    transition: 600ms ease-in-out;
}
.nav-menu .nav-item a:hover {
    color: orange;
}
.nav-menu .nav-item > a {
    color: white;
    font-size: 1.25rem;
}
.nav-toggle {
    width: 2rem;
    height: 2rem;
    border: 2px solid transparent;
    position: relative;
    display: none;
    z-index: 2;
    background: transparent;
}
.nav-toggle .line, .nav-toggle:after, .nav-toggle:before{
    content: '';
    display: block;
    margin: 3px auto;
    width: 1.5rem;
    height: .1875rem;
    border-radius: .25rem;
    background: orange;
    transition: 1s;
}
.nav-toggle-active:before {
    background: white;
    transform: rotate(45deg) translate(.25rem, .25rem)
}
.nav-toggle-active > .line {
    background: white;
    transform: translate(-.5rem);
    opacity: 0;
}
.nav-toggle-active:after {
    background: white;
    transform: rotate(-45deg) translate(.25rem, -.25rem)
}

@media only screen and (max-width: 764px) {
    header {
        padding: .5rem 0;
    }
    header img {
        margin-left: 1rem;
        width: 7.5rem;
    }
    .nav-toggle {
        display: block;
    }
    nav {
        margin-right: 1rem;
    }
    .nav-menu {
        position: fixed;
        flex-direction: column;
        top: 5.25rem;
        width: 100%;
        gap: 0;
        transition: 1s;
        background: transparent;
        text-align: center;
        right: -100%;
        opacity: 0;
    }
    .nav-menu-active {
        right: 0;
        opacity: 1;
    }
    .nav-item {
        width: 100%;
        padding: .25rem 0;
    }
    .nav-item > a {
        font-size: 1.5rem;
    }
}
</style>
<template>
    <section style="width:100%;height:100vh;">
        <div class="responsive-div" style="display:flex;">
            <ul style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;flex:1;margin: 15px auto 0 auto;list-style:none;">
                <li>
                    <a href="">
                    <fa-icon class="nav-icon" icon="fa-regular fa-calendar-plus"/>
                    Event
                    </a>
                </li>
                <li>
                    <a href="">
                    <fa-icon class="nav-icon" icon="fa-solid fa-map-location-dot"/>
                    Peta
                    </a>
                </li>
                <li>
                    <a href="">
                    <fa-icon class="nav-icon" icon="fa-solid fa-utensils"/>
                    Kuliner
                    </a>
                </li>
                <li>
                    <a href="">
                    <fa-icon class="nav-icon" icon="fa-solid fa-bag-shopping"/>
                    Shopping
                    </a>
                </li>
                <li>
                    <a href="">
                    <fa-icon class="nav-icon" icon="fa-solid fa-campground"/>
                    Outdoor
                    </a>
                </li>
                <li>
                    <a href="">
                    <fa-icon class="nav-icon" icon="fa-solid fa-briefcase"/>
                    Hotel
                    </a>
                </li>
                <li>
                    <a href="">
                    <fa-icon class="nav-icon" icon="fa-solid fa-torii-gate"/>
                    Heritage
                    </a>
                </li>
                <li>
                    <a href="">
                    <fa-icon class="nav-icon" icon="fa-regular fa-comments"/>
                    FAQ
                    </a>
                </li>
            </ul>
            <div style="flex:1;height:100%;margin: auto 0">
                <div style="display:flex;align-items:center;justify-content:space-between;font-size:28px;color:#039BE5;">
                    <div>
                        <h1>Explore <span>360</span></h1>
                        <h1><span>Wisata Surabaya</span></h1>
                    </div>
                    <h1>360<span>&deg;</span></h1>
                </div>
                <video style="width:100%;height:auto;object-fit:cover;margin-top:10px;" autoplay muted loop>
                    <source src="https://tourism.surabaya.go.id/assets/front/videos/360.mp4">
                </video>
            </div>
        </div>

    </section>
</template>

<style scoped>
ul li {
    margin: 15px 90px;
}
ul li a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    color: #6868AC;
    font-weight: 700;
    letter-spacing: -1px;
    transition: .3s ease-in-out;
}
ul li a:hover {
    color: #fd7e14;
}
ul li a .nav-icon {
    font-size: 70px;
    color:#6868AC;
}
@media screen and (max-width: 476px) {
    .responsive-div {
        display: flex;
        flex-direction: column
    }
    .responsive-div ul {
        display: flex;
        flex-wrap: nowrap;
        margin: 0;
    }
    .responsive-div ul li {
        margin: 20px 25px;
    }
}
</style>
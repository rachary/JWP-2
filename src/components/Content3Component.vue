<template>
    <section style="width:100%;margin-top:10px;height: 300vh;">
        <div class="responsive-div" style="display:flex;flex-direction:column;">
            <div style="display:flex;flex-direction:column;justify-content:center;align-items:center;color:#6868AC;font-size:32px;">
                <fa-icon style="font-size:120px;" icon="fa-solid fa-signs-post"/>
                <h1><span>Start Your Best</span></h1>
                <h1>Journey In <span>Surabaya</span></h1>
            </div>
            <div class="responsive-grid" style="width:85%;height:100vh;margin: 40px auto;">
                <ul  style="display:grid;grid-template-columns:1fr 1fr;grid-template-rows: 1fr 1fr 1fr 1fr 1fr;list-style:none;">
                    <li style="grid-area:1/1/3/1;margin:0 25px 0 0;">
                        <a href="#">
                            <div class="hover-zoom">
                                <img src="https://tourism.surabaya.go.id/storage/tour/1672116704_1.jpg" alt="">
                            </div>
                            <h6>History & Heritage</h6>
                            <h5>GEDUNG ESCOMPTO (Bank Mandiri KCP Kembang Jepun)</h5>
                            <p><span><fa-icon icon="fa-solid fa-location-dot"/></span> Jl. Kembang Jepun No 180</p>
                        </a>
                    </li>
                    <li style="grid-area:3/1/6/1;margin: 140px 25px 0 0">
                        <a href="#">
                            <div class="hover-zoom">
                                <img src="https://tourism.surabaya.go.id/storage/event/1652839309_1.jpg" alt="">
                            </div>
                            <h6>Event</h6>
                            <h5>Bromo KOM Challenge</h5>
                            <p><span><fa-icon icon="fa-solid fa-location-dot"/></span> Polda Jawa Timur | Jl. Ahmad Yani No. 116, Gayungan, Kec. Wonocolo, Kota Surabaya, Jawa Timur 60231</p>
                        </a>
                    </li>
                    <li style="grid-area:1/2/4/2;">
                        <a href="#">
                            <div class="hover-zoom">
                                <img src="https://tourism.surabaya.go.id/storage/accomodation/1653032386_1.jpg" alt="">
                            </div>
                            <h6>Hotel</h6>
                            <h5>Four Points by Sheraton</h5>
                            <p><span><fa-icon icon="fa-solid fa-location-dot"/></span> Jl. Embong Malang No. 7, 9, 11, Surabaya</p>
                        </a>
                    </li>
                    <li style="grid-area:4/2/6/2;margin-top: 140px">
                        <a href="#">
                            <div class="hover-zoom">
                                <img src="https://tourism.surabaya.go.id/storage/tour/1652779620_1.jpg" alt="">
                            </div>
                            <h6>Museum</h6>
                            <h5>Museum Blockbuster</h5>
                            <p><span><fa-icon icon="fa-solid fa-location-dot"/></span> Jl. Raya Kenjeran 463 - 465</p>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </section>
</template>

<style scoped>
ul li a {
    text-decoration: none;
    color: black;
    font-size: 18px;
}
ul li a h6 {
    margin: 10px 0;
    padding: 5px 7px;
    background: #6868AC;
    width: fit-content;
    color: white;
    letter-spacing: .5px;
    font-weight: 500;
    border-radius: 5px;
}
ul li a h5 {
    font-size: 18px;
    letter-spacing: -1px;
    font-weight: 600;
}
ul li a p {
    font-size: 16px;
    margin-top: 5px;
}
ul li a .hover-zoom {
    height: 100%;
    overflow: hidden;
    border-radius: 16px;
}
ul li a .hover-zoom img {
    height: 100%;
    width: 100%;
    object-fit: cover; 
    border-radius: 16px;
    transform-origin: 50% 65%;
    transition: transform 5s, filter 3s ease-in;
    z-index: -1;
    overflow: hidden;
}
ul li a img:hover {
    transform: scale(1.5);
}
@media screen and (max-width: 476px) {
    .responsive-div {
        margin-top: 100px;
        text-align: center;
    }
}
</style>
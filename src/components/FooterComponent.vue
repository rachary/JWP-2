<template>
    <footer>
        <div class="waves">
            <div class="wave" id="wave1"></div>
            <div class="wave" id="wave2"></div>
            <div class="wave" id="wave3"></div>
            <div class="wave" id="wave4"></div>
        </div>
        <div class="container">
            <div class=card>
                <h5>Find Us</h5>
                <p>Tourism Information Center Jl. Gubernur Suryo 15</p>
                <nav>
                    <a href="#"><i>Telp</i>Kontak kami</a>
                    <a href="#"><i>FB</i></a>
                    <a href="#"><i>IG</i></a>
                    <a href="#"><i>Twitter</i></a>
                </nav>
            </div>
            <div class="card">
                <h5>Contact Us</h5>
                <p>Dinas Kebudayaan, Kepemudaan dan Olahraga serta Pariwisata Kota Surabaya</p>
                <ul>
                    <li><i>Dot</i>Jl. Tunjungan No.1-3 Kelurahan Genteng
                    Kecamatan Genteng, Kota Surabaya
                    Jawa Timur, Indonesia, 60275</li>
                    <li><i>Telp</i>031-5318409</li>
                    <li><i>envelope</i>disbudporapar@surabaya.go.id</li>
                    
                </ul>
            </div>
            <div class="card">
                <h5>Our Other Sites</h5>
                <ul>
                    <li>
                        <a href="#">Disbudporapar</a>
                    </li>
                    <li>
                        <a href="#">360&deg; Surabaya</a>
                    </li>
                    <li>
                        <a href="#">Tiket Wisata Surabaya</a>
                    </li>
                    <li>
                        <a href="#">Katalog Museum Surabaya</a>
                    </li>
                    <li>
                        <a href="#">Bangga Surabaya</a>
                    </li>
                </ul>
            </div>
            <div class="card">
                <h5>Wisata Surabaya</h5>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    position: sticky;
    bottom: 0;
    padding: 2rem 4rem;
    background: #4A4A8A;
    color: white;
}
.container {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
}
.card {
    flex: 1;
}
.card:nth-child(1) {
    flex: .8;
}
.card:nth-child(2) {
    flex: 2;
}
.card h5 {
    margin-bottom: 2rem;
    font-size: 1.5rem;
}
footer .wave {
    position: absolute;
    top: -4.4rem;
    left: 0;
    width: 100%;
    height: 4.5rem;
    background: url(../assets/wave.png);
    background-size: 62.5rem 6.25rem;
}
footer .wave#wave1 {
    z-index: 10;
    opacity: 1;
    animation: animateWave 5s linear infinite;
}
footer .wave#wave2 {
    z-index: 10;
    opacity: .8;
    top: -4rem;
    animation: animateWave__2 4s linear infinite;
}
footer .wave#wave3 {
    z-index: 10;
    opacity: .5;
    top: -3.5rem;
    animation: animateWave__2 3.5s linear infinite;
}
footer .wave#wave4 {
    z-index: 9;
    opacity: .2;
    top: -3rem;
    animation: animateWave 3s linear infinite;
}
@keyframes animateWave {
    0% {
        background-position-x: 62.5rem;
    }
    100% {
        background-position-x: 0;
    }
}
@keyframes animateWave__2 {
    0% {
        background-position-x: 0;
    }
    100% {
        background-position-x: 62.5rem
    }
}
@media only screen and (max-width: 764px) {
    footer {
        padding: 4rem 2rem;
    }
    .container {
        flex-direction: column;
        text-align: center;
    }
    .card :not(h5){
        width: 100%;
        text-align: left;
    }
    .card h5 {
        margin: 1rem 0 .5rem 0;
    }
}
</style>
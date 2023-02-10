<template>
    <!-- Navigation Bar -->
    <HeaderComponent />

    <!-- Content -->
    <main id="Main">
        <section id="home">
            <video autoplay muted loop>
                <source src="https://tourism.surabaya.go.id/assets/front/videos/surabaya.mp4" type="video/mp4">
            </video>
            <div class="container">
                <h1>Wisata Surabaya</h1>
                <h2>You will love every corner of it</h2>
                <h3>Let's explore one of the biggest city in Indonesia with famous name called City of Heroes.</h3>
                <nav class="sub-menu">
                    <ul>
                        <li>
                            <a href="#">TES</a>
                        </li>
                        <li>
                            <a href="#">TES</a>
                        </li>
                        <li>
                            <a href="#">TES</a>
                        </li>
                        <li>
                            <a href="#">TES</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </section>
        <section id="section2">
            <div class="container">
                <h1>Explore Surabaya 360</h1>
                <div class="container-video">
                    <video autoplay muted loop>
                        <source src="https://tourism.surabaya.go.id/assets/front/videos/360.mp4">
                    </video>
                </div>
            </div>
        </section>
        <section id="section3">
            <div class="container">
                <h1>Let's Start</h1>
                <h1>Journey in Surabaya</h1>
                <div class="journey" >
                    <div class="journey__box" v-for="journey in dataStore.journey" :key="journey.name">
                        <a href="">
                            <div class="box-img">
                                <img :src="journey.imageUrl" alt="">
                            </div>
                            <h5>{{ journey.tag }}</h5>
                            <h4>{{ journey.name }}</h4>
                            <h6>{{ journey.address }}</h6>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Footer -->
    <div>
        <FooterComponent />
    </div>
</template>

<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';
import { useDataStore } from '../stores/dataStore'
import { computed, onMounted } from 'vue';

const dataStore = useDataStore()
computed(() => {
})
onMounted(() => {
    dataStore.randomJourney()
    console.log(dataStore.journey)
    console.log('tes')
})
</script>

<style scoped>
section {
    min-height: 100vh;
    width: 100%;
    display: block;
}

#home > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: absolute;
    z-index: -1;
    filter: brightness(30%)
}

#home {
    display: inline-block;
}

#home .container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    margin-top: 4.375rem;
}

#home .container h1 {
    font-size: 7rem;
}

#home .container h2 {
    margin-top: 2rem;
    font-size: 3rem;
}

#home .container h3 {
    margin-top: 1.5rem;
    font-size: 1rem;
}

#home .container .sub-menu {
    width: 100%;
}

#home .container .sub-menu ul {
    width: 50%;
    margin: 7rem auto 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    gap: .5rem;
}

#home .container .sub-menu ul li {
    background: white;
    padding: 3rem;
    border-radius: 100%;
    margin: .5rem;
}

#home .container .sub-menu > a {
    color: white;
}
#section2 .container {
    text-align: center;
    font-size: 2rem;
    padding: 3rem 0;
}

#section2 .container .container-video {
    padding: 1rem 5rem;
}

#section2 .container .container-video video {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    position: relative;
    z-index: -1;
}

#section3 {
    width: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
}

#section3 .journey {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 1fr .5fr 1fr .5fr 1fr;
    grid-template-areas:
        "journey__1 journey__3 journey__5"
        "journey__2 journey__3 journey__5"
        "journey__2 journey__4 journey__6"
        "journey__7 journey__8 journey__6"
        "journey__7 journey__8 journey__9";
    gap: 2rem;
    padding: 1rem 2rem 7rem 2rem;
}

#section3 .journey .journey__box {
    height: min-content;
}

#section3 .journey .journey__box a .box-img {
    border-radius: .8rem;
    overflow: hidden;
}
#section3 .journey .journey__box a .box-img img {
    width: 100%;
    height: 100%;
    transition: 2s ease-in-out;
    position: relative;
}
#section3 .journey .journey__box a img:hover {
    transform: scale(1.5)
}
#section3 .journey .journey__box:nth-child(1) {
    grid-area: journey__1;
}

#section3 .journey .journey__box:nth-child(2) {
    grid-area: journey__2;
}

#section3 .journey .journey__box:nth-child(3) {
    grid-area: journey__3;
}

#section3 .journey .journey__box:nth-child(4) {
    grid-area: journey__4;
}
#section3 .journey .journey__box:nth-child(5) {
    grid-area: journey__5;
}
#section3 .journey .journey__box:nth-child(6) {
    grid-area: journey__6;
}
#section3 .journey .journey__box:nth-child(7) {
    grid-area: journey__7;
}
#section3 .journey .journey__box:nth-child(8) {
    grid-area: journey__8;
}
#section3 .journey .journey__box:nth-child(9) {
    grid-area: journey__9;
}

@media only screen and (max-width: 764px) {
    #home .container h1 {
        margin-top: 5rem;
        font-size: 2.5rem;
    }

    #home .container h2 {
        margin-top: 1rem;
        font-size: 1.8rem;
    }

    #home .container h3 {
        margin-top: 1rem;
        font-size: 1rem;
    }

    #home .container .sub-menu ul {
        margin-top: 10rem;
        width: 100%;
        gap: 0;
    }

    #home .container .sub-menu ul li {
        padding: 1rem;
        margin: 0;
    }
    #section2 .container {
        padding: 2rem 0;
        font-size: 1.5rem;
    }

    #section2 .container .container-video {
        border-radius: 0;
        margin-top: 1rem;
        padding: 0;
    }

    #section2 .container .container-video video {
        border-radius: 0;
        height: 100vh;
    }
    #section3 .journey {
        display: grid;
        grid-template-columns: 1fr;
        grid-template-rows: repeat(9, 1fr);
        grid-template-areas:
            "journey__1"
            "journey__2"
            "journey__3"
            "journey__4"
            "journey__5"
            "journey__6"
            "journey__7"
            "journey__8"
            "journey__9";
        gap: 1rem;
    }
    #section3 .journey .journey__box {
        height: min-content;
    }

    #section3 .journey .journey__1 {
        grid-area: journey__1;
    }

    #section3 .journey .journey__2 {
        grid-area: journey__2;
    }

    #section3 .journey .journey__3 {
        grid-area: journey__3;
    }

    #section3 .journey .journey__4 {
        grid-area: journey__4;
    }
    #section3 .journey .journey__5 {
        grid-area: journey__5;
    }
    #section3 .journey .journey__6 {
        grid-area: journey__6;
    }
    #section3 .journey .journey__7 {
        grid-area: journey__7;
    }
    #section3 .journey .journey__8 {
        grid-area: journey__8;
    }
    #section3 .journey .journey__9 {
        grid-area: journey__9;
    }
}
</style>
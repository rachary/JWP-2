<template>
    <!-- Navigation Bar -->
    <NavbarComponent/>

    <section style="width:100%;margin:70px auto 0 auto;display:flex;flex-direction:column;justify-content:center;align-items:center;">

    <!-- Title Content -->
        <div style="margin:30px 0 10px 0;display:flex;flex-direction:column;justify-content:center;align-items:center;width:90%;color:#6868AC;text-align:center;">
            <h1 style="font-size:46px"><span>DESTINASI WISATA</span></h1>
                <div class="responsive-div" style="width:100%;display:flex;margin-top:5px;justify-content:right;">
                    <!-- Destination Input -->
                    <div class="responsive-button" style="display:flex;width:100%;justify-content:right;align-items:center;">
                        <div style="width:100%;" v-if="showSearch">
                            <input v-focus style="width:100%;outline:none;font-size:14px;padding:6px 10px;border:none;background:#6868AC;border-radius:4px 0 0 4px;color:white;" type="text" v-model="searchName" placeholder="Tujuan anda ke..." />
                        </div>
                        <!-- Toggle Show Destination Input -->
                        <button style="display:flex;align-items:center;padding:6px 10px;gap:10px;border:none;background:#6868AC;color:white;border-radius:0 4px 4px 0;font-weight:600;font-size:14px;margin-right:2px;width:max-content;cursor:pointer;outline:none;letter-spacing:1px;" @click="showSearch = !showSearch"><fa-icon icon="fa-solid fa-magnifying-glass"/>Destinasi</button>
                    </div>
                    <!-- Menu Dropwdown Tag -->
                    <select style="border:none;background:#6868AC;border-radius:4px;padding:5px 40px;font-size:14px;color:white;outline:none;cursor:pointer;font-weight:600;letter-spacing:1px;text-align:left;" v-model="selectedTag">
                        <option style="" value="">Semua Tag</option>
                        <option value="Museum">Museum</option>
                        <option value="Taman">Taman</option>
                        <option value="Kuliner">Kuliner</option>
                        <option value="Sport">Sport</option>
                    </select>
                </div>

        </div>

    <!-- Travel Content -->
    <div style="display:flex;flex-wrap:wrap;justify-content:center;align-items:center;width:90%;height:100vh;overflow:auto;padding: 0 30px;border: 1px solid black;border-radius:8px;">
        <div style="" v-for="destination in searchDestinations" :key="destination.name">
            <TravelContentComponent :destination="destination"/>
        </div>
    </div>

    </section>
    <FooterComponent/>
</template>

<script setup>
import NavbarComponent from '../components/NavbarComponent.vue';
import FooterComponent from '../components/FooterComponent.vue';

import TravelContentComponent from '../components/TravelContentComponent.vue';
import { computed, onUpdated, ref } from 'vue';

const searchName = ref('')
const selectedTag = ref('')
const showSearch = ref(false)


const destinations = ref([
    {
        tag: 'Museum',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1648709900_1.jpg',
        name: 'Museum Pendidikan Surabaya',
        address: 'Jl. Genteng Kali No. 10'
    },
    {
        tag: 'Museum',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1648710891_1.jpg',
        name: 'Museum Olahraga Surabaya',
        address: 'Jl. Indragiri No.6, Gelora Pancasila'
    },
    {
        tag: 'Museum',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1652779387_1.jpg',
        name: 'Gedung Nasional Indonesia (GNI) & Museum Dr. Soetomo',
        address: 'JL Bubutan no 85 - 87'
    },
    {
        tag: 'Museum',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1652779620_1.jpg',
        name: 'Museum Blockbuster',
        address: 'Jl. Raya Kenjeran 463-465'
    },
    {
        tag: 'Museum',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1652777982_1.jpg',
        name: 'Monumen Kapal Selam',
        address: 'Jl. Pemuda no. 39'
    },
    {
        tag: 'Kuliner',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1653019735_1.jpg',
        name: 'G Walk Citraland',
        address: 'Ruko Taman Gapura Jl. Niaga Gapura'
    },
    {
        tag: 'Kuliner',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1654139851_1.jpg',
        name: 'Sentra Ikan Bulak',
        address: 'Jl. Sukolilo 7 no.24, Surabaya'
    },
    {
        tag: 'Taman',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1654137105_1.jpg',
        name: 'Taman Bungkul',
        address: 'Jl. Taman Bungkul, Darmo'
    },
    {
        tag: 'Taman',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1648713405_1.jpg',
        name: 'Kebun Binatang Surabaya',
        address: 'Jl. Setail No. 1, Darmo, Wonokromo'
    },
    {
        tag: 'Taman',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1654136213_1.jpg',
        name: 'Taman Hiburan Pantai (THP) Kenjeran',
        address: 'Jl. Pantai Lama Kenjeran no. 1'
    },
    {
        tag: 'Sport',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1652844832_1.jpg',
        name: 'Stadion Gelora Bung Tomo (GBT)',
        address: 'Benowo, Pakal, Surabaya'
    },
    {
        tag: 'Sport',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1652844613_1.jpg',
        name: 'Lapangan Hockey - Softball',
        address: 'Jl. Lap. Dharmawangsa no. 56'
    },
    {
        tag: 'Sport',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1652844761_1.jpg',
        name: 'Gelora Pancasila',
        address: 'Jl. Indragiri no. 6'
    },
    {
        tag: 'Cagar Budaya',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1654761532_1.jpg',
        name: 'Gereja Katolik Kelahiran Santa Perawan Maria',
        address: 'Jl. Kepanjen 4-6'
    },
    {
        tag: 'Cagar Budaya',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1655198364_1.jpg',
        name: 'Jembatan Merah Arcade',
        address: 'Jl. Jembatan Merah 2'
    },
    {
        tag: 'Cagar Budaya',
        imageUrl: 'https://tourism.surabaya.go.id/storage/tour/1655194124_1.jpg',
        name: 'Makam Al Habib Muhammad Bin Idrus Al Habsyi',
        address: 'Jl. Ampel Gubah Lor'
    },
])

const searchDestinations = computed(() => {
        return destinations.value
            .filter(destination => selectedTag.value === '' || destination.tag === selectedTag.value )
            .filter(destination => destination.name.toLowerCase().includes(searchName.value.toLowerCase()))
})

</script>

<style scoped>
select option:hover{
    filter: brightness(150%);
}
@media screen and (max-width: 476px) {
    .responsive-div {
        flex-direction: column;
    }
    .responsive-button {
        flex-direction: column-reverse;
    }
    .responsive-button button{
        min-width: 100%;
        justify-content: center;
    }
    .responsive-div select option{
        width: min-content;
        display: inline-block;
        text-align: center;
        justify-content: center;
    }
}
</style>
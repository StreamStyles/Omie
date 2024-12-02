<template>
    <div class="bg-black max-w-4xl mx-auto p-4 rounded">
        <div class="pb-5">
            <h2>Recent VODs</h2>
        </div>
        <div class="flex flex-wrap -mx-2">
            <div v-for="(vod) in limitedVods" :key="vod.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4">
                <div class="border p-4 rounded cursor-pointer hover:bg-gray-100 flex flex-col h-full">
                    <img :src="vod.thumbnail" alt="Thumbnail" class="w-full mb-2 rounded">
                    <h3 class="text-lg font-bold mb-2">{{ vod.title }}</h3>
                    <button @click="goToVOD(vod.id)" class="watch-button">Watch ▶</button>
                    <!-- <p class="flex-grow">{{ vod.description }}</p> -->
                </div>
            </div>
        </div>
        <div class="flex justify-center mt-4">
            <router-link to="/vods" class="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-700">View All VODs</router-link>
        </div>
    </div>
</template>


<script>
import { getVODs } from '@/services/vodService';

export default {
    data() {
        return {
            vods: [],
        };
    },
    computed: {
        limitedVods() {
            return this.vods.slice(0, 4);
        },
    },
    async created() {
        this.vods = await getVODs();
    },
    methods: {
        goToVOD(vodId) {
            this.$router.push({ path: `/vod/${vodId}` });
        },
    },
};
</script>


<style scoped>
h3 {
    margin: 2px 0 0;
}

.bg-black {
    background-color: #1e1e1e;
}

.border {
    border-color: #505050; /* Replace with your desired color */
}

.watch-button {
    background-color: #e65a50;
    color: white;
    border: none;
    padding: 8px 16px;
    border-radius: 4px;
    margin-top: 8px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.watch-button:hover {
    background-color: #e65a50;
}
</style>

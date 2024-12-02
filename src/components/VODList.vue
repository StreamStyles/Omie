<template>
    <div class="container mx-auto p-4">
        <div class="flex flex-wrap -mx-2">
            <div v-for="vod in vods" :key="vod.id" class="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 px-2 mb-4"
                @click="goToVOD(vod.id)">
                <div class="border p-4 rounded cursor-pointer hover:bg-gray-100 flex flex-col h-full">
                    <img :src="vod.thumbnail" alt="Thumbnail" class="w-full thumbnail">
                    <h3 class="text-lg font-bold title">{{ vod.title }}</h3>
                    <button @click="goToVOD(vod.id)" class="watch-button">Watch</button>
                </div>
            </div>
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

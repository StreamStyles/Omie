<template>
    <div class="flex flex-col items-center p-4 h-screen">
        <div v-if="videoId" class="flex w-full h-full justify-center">
            <div id="youtube-embed" class="video-player"></div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['vodId'],
    data() {
        return {
            videoId: '',
            player: null,
            syncInterval: null,
        };
    },
    watch: {
        vodId: {
            immediate: true,
            handler(newVal) {
                if (newVal) {
                    this.loadVOD();
                }
            },
        },
    },
    methods: {
        async loadVOD() {
            this.videoId = this.vodId;
            await this.initializeYouTubePlayer();
        },
        initializeYouTubePlayer() {
            return new Promise((resolve) => {
                if (window.YT && window.YT.Player) {
                    this.createYouTubePlayer();
                    resolve();
                } else {
                    window.onYouTubeIframeAPIReady = () => {
                        this.createYouTubePlayer();
                        resolve();
                    };
                    if (!document.getElementById('youtube-player-script')) {
                        const tag = document.createElement('script');
                        tag.id = 'youtube-player-script';
                        tag.src = 'https://www.youtube.com/iframe_api';
                        document.body.appendChild(tag);
                    }
                }
            });
        },
        createYouTubePlayer() {
            this.player = new window.YT.Player('youtube-embed', {
                videoId: this.vodId,
                events: {
                    onStateChange: this.onPlayerStateChange,
                },
            });
        },
        onPlayerStateChange(event) {
            if (event.data === window.YT.PlayerState.PLAYING) {
                if (this.syncInterval) {
                    clearInterval(this.syncInterval);
                }
                this.syncInterval = setInterval(() => {
                    // Add any sync logic here if needed
                }, 1000);
            } else if (event.data === window.YT.PlayerState.PAUSED || event.data === window.YT.PlayerState.ENDED) {
                if (this.syncInterval) {
                    clearInterval(this.syncInterval);
                    this.syncInterval = null;
                }
            }
        },
    },
    mounted() {
        if (this.vodId) {
            this.loadVOD();
        }
    },
    beforeUnmount() {
        if (this.syncInterval) {
            clearInterval(this.syncInterval);
        }
        if (this.player) {
            this.player.destroy();
        }
    },
};
</script>

<style scoped>
.video-player {
    width: 100%;
    height: 100%;
    max-width: 100%; /* Ensure it doesn't exceed 100% of its container */
    background-color: black;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); /* Optional: Add a shadow for better visual effect */
}

.flex {
    display: flex;
}

.justify-center {
    justify-content: center;
}

.h-screen {
    height: 100vh; /* Make the container take up the full viewport height */
}
</style>

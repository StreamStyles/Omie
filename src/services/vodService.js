// Test api data
// const API_KEY = 'AIzaSyA6SwrD1d9OErbgbzAPP4Hp5k7kt0OMl3k'; // Replace with your YouTube API key
// const CHANNEL_ID = 'UCv_UWC68Bz1AAxr6DZ8hAHQ'; // Replace with your YouTube channel ID

const API_KEY = 'AIzaSyDRGFc13ioqDMrtHDmmDizTuzKdXJJwtmo'; // Replace with your YouTube API key
const CHANNEL_ID = 'UCy88b9xLHdqk-POZDn1_6uQ'; // Replace with your YouTube channel ID
const API_URL = `https://www.googleapis.com/youtube/v3/search?key=${API_KEY}&channelId=${CHANNEL_ID}&part=snippet&type=video&order=date&maxResults=10`;

export const getVODs = async () => {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        console.log(JSON.stringify(data))

        if (data.items) {
            return data.items.map(item => ({
                id: item.id.videoId,
                title: item.snippet.title,
                description: item.snippet.description,
                thumbnail: item.snippet.thumbnails.high.url,
            }));
        } else {
            console.error('No items found in the YouTube API response');
            return [];
        }
    } catch (error) {
        console.error('Error fetching data from YouTube API:', error);
        return [];
    }
};
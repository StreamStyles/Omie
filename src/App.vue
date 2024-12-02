<template>
  <div>
    <nav class="bg-blackNav" style="padding: 30px; display: flex; align-items: center;">
      <!-- Use router-link for internal navigation -->
      <router-link to="/">
        <img src="@/assets/omieL.png" alt="Home" style="margin: 0 10px;">
      </router-link>
      
      <div style="width: 1px; height: 30px; background-color: #505050; margin: 0 10px;"></div>
      
      <!-- External links that open in a new tab -->
      <a href="https://www.twitch.tv/omie" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/twitch.png" alt="Twitch" style="margin: 0 10px;">
      </a>
      <a href="https://twitter.com/123omie" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/twitter.png" alt="Twitter" style="margin: 0 10px;">
      </a>
      <a href="https://www.youtube.com/omie2" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/yt.png" alt="YouTube" style="margin: 0 10px;">
      </a>
      <a href="http://discord.gg/omie" target="_blank" rel="noopener noreferrer">
        <img src="@/assets/discord.png" alt="Discord" style="margin: 0 10px;">
      </a>
    </nav>
    <router-view />
  </div>
</template>

<style>

.bg-blackNav {
    background-color:#1e1e1e;
}

html {
  height: 100%;
  width: 100%;
  background: #121212;
}

.nav-container {
  padding: 30px;
  display: flex;
  align-items: center;
}

.nav-container img {
  margin: 0 5px; /* Adjust the value as needed for desired spacing */
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  height: 100%;
  /* color: #2c3e50; */
  color: white;
}

nav {
  padding: 30px;
  display: flex;
  align-items: center;
}

nav a {
  font-weight: bold;
  /* color: #2c3e50; */
  color: white;
}

nav a.router-link-exact-active {
  color: #ffffff;
}


</style>

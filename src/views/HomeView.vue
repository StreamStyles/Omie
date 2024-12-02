<template>
  <div class="home">
    <HelloWorld msg="Omie VODs" />
    <HomeVODList />
  </div>
</template>



<script>
import HelloWorld from '@/components/HelloWorld.vue';
import HomeVODList from '@/components/HomeVODList.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    HomeVODList,
  },
};
</script>


<style scoped>
.image-space {
  text-align: center;
  margin-top: 20px;
}

.image-space img {
  max-width: 100%;
  height: auto;
}
</style>



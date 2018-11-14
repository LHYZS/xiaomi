<template>
 <div>
   <v-carousel></v-carousel>
   <v-supreme></v-supreme>
   <v-recommend></v-recommend>
   <v-phone></v-phone>
   <v-flat></v-flat>
   <v-house></v-house>
 </div>
</template>

<script>
  import vCarousel from '../common/Carousel';
  import vSupreme from '../common/Supreme';
  import vRecommend from '../common/Recommend';
  import vPhone from '../common/Phone'
  import vFlat from '../common/Flat'
  import vHouse from '../common/House'
  export default {
    name: "Index",
    components: {
      vCarousel,
      vSupreme,
      vRecommend,
      vPhone,
      vFlat,
      vHouse,
    }
  }
</script>

<style scoped>

</style>

<template>
  <div class="b1">
    <b-carousel id="carousel1"
                style="text-shadow: 1px 1px 2px #333;"
                controls
                indicators
                background="#ababab"
                :interval="4000"
                img-width="1024"
                img-height="480"
                v-model="slide"
                @sliding-start="onSlideStart"
                @sliding-end="onSlideEnd">
      <!-- Slides with image only -->
      <b-carousel-slide v-for="image in imageList" :key="image.carouselId"
                        :img-src="image.carouselUrl">
      </b-carousel-slide>
    </b-carousel>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slide: 0,
        sliding: null,
        imageList: []
      }
    },
    created() {
      var that = this;
      this.$http
        .get('http://localhost:8080/carousel/all')
        .then(function (response) {
          that.imageList = response.data;
        })
    },
    methods: {
      onSlideStart(slide) {
        this.sliding = true
      },
      onSlideEnd(slide) {
        this.sliding = false
      }
    }
  }
</script>

<style scoped>
  .b1 {
    margin-bottom: 70px;
  }
</style>

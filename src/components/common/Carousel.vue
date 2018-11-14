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
      <b-carousel-slide v-for="image in imageList" :key="image.id"
                        :img-src="image.url">
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
        imageList: [
          {
            "id": 1,
            "url": "https://res.vmallres.com/pimages//sale/2018-10/20181031200403737.jpg"
          },
          {
            "id": 2,
            "url": "https://res.vmallres.com/pimages//sale/2018-10/20181008220608528.jpg"
          },
          {
            "id": 3,
            "url": "https://res.vmallres.com/pimages//sale/2018-10/20181031200209341.jpg"
          },
          {
            "id": 4,
            "url": "https://res.vmallres.com/pimages//sale/2018-11/20181101003815158.jpg"
          },
          {
            "id": 5,
            "url": "https://res.vmallres.com/pimages//sale/2018-10/20181031113628493.png"
          },
          {
            "id": 6,
            "url": "https://res.vmallres.com/pimages//sale/2018-10/20181026170049770.jpg"
          },
          {
            "id": 7,
            "url": "https://res.vmallres.com/pimages//sale/2018-10/20181031113644995.jpg"
          },
          {
            "id": 8,
            "url": "https://res.vmallres.com/pimages//sale/2018-10/2018103120033808.jpg"
          },
          {
            "id": 9,
            "url": "https://res.vmallres.com/pimages//sale/2018-10/20181031195415786.jpg"
          },
        ]
      }
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
   .b1{
     margin-bottom: 70px;
   }
</style>

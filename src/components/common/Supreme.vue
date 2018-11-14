<template>
  <div class="b1">
    <p>华为精品</p>
    <b-row>
      <b-col cols="3"  v-for="topic in topicList" :key="topic.id">
        <b-navbar>
          <router-link :to="'/c/'+topic.id">
            <b-img :src="topic.url"/>
          </router-link>
        </b-navbar>
      </b-col>
    </b-row>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        topicList :[
          {
            "id": 1,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/1916639/1540539988858.png",
          },
          {
            "id": 2,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/1916635/1536144754772.jpg",
          },
          {
            "id": 3,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/1970797/1536144773897.jpg",
          },
          {
            "id": 4,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/1983791/1540540019225.png",
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .b1{
    margin-left: 100px;
  }

  p{
    font-size: 40px;
    margin-left: 700px;
  }
</style>

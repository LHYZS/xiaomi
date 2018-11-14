<template>
  <div class="b4">
    <p>平板&穿戴</p>
    <b-row>
      <b-col  v-for="image in imageList" :key="image.id" class="b1">
        <b-navbar>
          <router-link :to="'/c/'+image.id">
            <b-img :src="image.url" width="400px" height="600px"/>
          </router-link>
        </b-navbar>
      </b-col>

      <b-col    v-for="item in itemList" :key="item.id" class="b2">
        <b-navbar>
          <router-link :to="'/c/'+item.id">
            <b-img :src="item.url"/>
          </router-link>
        </b-navbar>
      </b-col>

      <b-col cols="1"  v-for="topic in topicList" :key="topic.id" class="b3">
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
        imageList :[
          {
            "id": 14,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/4053259/1540626452375.png",
          },
        ],
        itemList :[
          {
            "id": 15,
            "url": "https://res2.vmallres.com/pimages//frontLocation/content/4053261/1540626521736.png",
          },
          {
            "id": 16,
            "url": "https://res2.vmallres.com/pimages//frontLocation/content/4053269/1539707274697.png",
          },
        ],
        topicList :[
          {
            "id": 17,
            "url": "https://res2.vmallres.com/pimages//frontLocation/content/4053263/1522306924151.jpg",
          },
          {
            "id": 18,
            "url": "https://res2.vmallres.com/pimages//frontLocation/content/4053267/1522306752572.jpg",
          },
          {
            "id": 19,
            "url": "https://res2.vmallres.com/pimages//frontLocation/content/4053265/1527298965935.jpg",
          },
        ]
      }
    }
  }
</script>

<style scoped>
  p{
    margin-left: 820px;
    font-size: 40px;
  }
  .b1{
    margin-left: 150px;
  }
  .b2{
    margin-left: -10px;
    margin-right: 100px;
  }
  .b3{
    margin-top: -305px;
    margin-left: 600px;
    margin-right: -380px;
  }
  .b4{
    margin-bottom: 80px;
  }
</style>

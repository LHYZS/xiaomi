<template>
  <div>
    <p>智能家居</p>
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
            "id": 20,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/1916703/1540626666387.png",
          },
        ],
        itemList :[
          {
            "id": 21,
            "url": "https://res3.vmallres.com/pimages//frontLocation/content/1916705/1540626766960.png",
          },
          {
            "id": 22,
            "url": "https://res3.vmallres.com/pimages//frontLocation/content/1916707/1540626889753.png",
          },
        ],
        topicList :[
          {
            "id": 23,
            "url": "https://res3.vmallres.com/pimages//sale/2017-05/20170521191214755.jpg",
          },
          {
            "id": 24,
            "url": "https://res3.vmallres.com/pimages//frontLocation/content/1916711/1521598330466.jpg",
          },
          {
            "id": 25,
            "url": "https://res3.vmallres.com/pimages//frontLocation/content/1916713/1500435840749.jpg",
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
</style>

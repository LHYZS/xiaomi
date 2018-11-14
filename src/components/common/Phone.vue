<template>
      <div class="b4">
        <p>手机</p>
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
            "id": 8,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/1916649/1540366468025.png",
          },
        ],
        itemList :[
          {
            "id": 9,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/4967371/1539962219224.png",
          },
          {
            "id": 10,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/5475000/1539589274473.png",
          },
        ],
        topicList :[
          {
            "id": 11,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/5562262/1540366584095.png",
          },
          {
            "id": 12,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/5562264/1540366630304.png",
          },
          {
            "id": 13,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/1916653/1523427123930.jpg",
          },
        ],

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

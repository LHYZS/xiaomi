<template>
  <div class="b1">
    <b-row>
      <b-col cols="4"  v-for="topic in topicList" :key="topic.id">
        <b-navbar>
          <router-link :to="'/c/'+topic.id">
            <b-card overlay
                    class="b2">
              {{topic.title}}<br>
              {{topic.info}}<br>
              {{topic.price}}
            </b-card>
            <b-img :src="topic.url" />
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
            "id": 5,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/5072137/1540625912699.png",
            "title": "HUAWEI WATCH GT",
            "info": "订金8元抵108元",
            "price": "￥1288"
          },
          {
            "id": 6,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/1916645/1540625971167.png",
            "title": "华为儿童手表 3 Pro",
            "info": "4G全网通 高清拍照",
            "price": "￥988"
          },
          {
            "id": 7,
            "url": "https://res0.vmallres.com/pimages//frontLocation/content/4831169/1539706053692.JPG",
            "title": "HUAWEI Mate 20 X",
            "info": "99元订金预定",
            "price": "￥1288"
          },
        ]
      }
    }
  }
</script>

<style scoped>
  .b1{
    margin-left: 140px;
    margin-bottom: 70px;
  }
  .b2{
    margin-left: 200px;
    font-size: 18px;
    color: gray;
  }
</style>

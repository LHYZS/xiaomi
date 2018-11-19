<template>
  <div class="content">
    <div class="right">
      <input type="text" v-model="formData.name" placeholder="商品" style="width: 300px;height: 50px"/>
      <button @click="search(formData)" style="width: 80px; height: 50px;background: cornflowerblue">搜索</button>
    </div>
    <br>
    <br>
    <div class="left">
      <b-row>
        <b-card v-for="(item,index) in  realList" :key="index">
          <b-img :src="item.url" height="250px" width="250px"/><br>
          <p>{{item.name}}</p>
        </b-card>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'styleTest',
    data() {
      return {
        formData: {
          name: '',
        },
        realList: [],
        list: [
          {
            url: "https://res.vmallres.com/pimages//product/6901443264780/428_428_1539244238246mp.png",
            name: 'Mate20',
          },
          {
            url: "https://res.vmallres.com/pimages//product/6901443263752/428_428_1538100198239mp.jpg",
            name: '畅享9',
          },
          {
            url: 'https://res.vmallres.com/pimages//product/6901443237784/428_428_1525340794041mp.jpg',
            name: "P20",
          },
          {
            url: 'https://res.vmallres.com/pimages//product/6901443250394/428_428_1531368379226mp.jpg',
            name:  "nove3",
          },
          {
            url: 'https://res.vmallres.com/pimages//product/6901443258000/428_428_1540630399670mp.png',
            name: "麦芒7",
          },
          {
            url: "https://res.vmallres.com/pimages//product/6901443264780/428_428_1539244238246mp.png",
            name: 'Mate20',
          },
          {
            url: "https://res.vmallres.com/pimages//product/6901443263752/428_428_1538100198239mp.jpg",
            name: '畅享9',
          },
          {
            url: 'https://res.vmallres.com/pimages//product/6901443237784/428_428_1525340794041mp.jpg',
            name: "P20",
          },
          {
            url: 'https://res.vmallres.com/pimages//product/6901443250394/428_428_1531368379226mp.jpg',
            name:  "nove3",
          },
          {
            url: 'https://res.vmallres.com/pimages//product/6901443258000/428_428_1540630399670mp.png',
            name: "麦芒7",
          },
          {
            url: "https://res.vmallres.com/pimages//product/6901443263752/428_428_1538100198239mp.jpg",
            name: '畅享9',
          },
          {
            url: 'https://res.vmallres.com/pimages//product/6901443237784/428_428_1525340794041mp.jpg',
            name: "P20",
          },
        ],
      };
    },
    created() {
      this.search({});
    },
    methods: {
      search({ name}) {
        this.realList = this.list.filter(item => {
          let matchName = true; // 姓名 筛选

          if (name) {
            // 模糊搜索;
            const keys = name
              .toUpperCase() // 转大写
              .replace(' ', '') // 删掉空格
              .split(''); // 切割成 单个字

            matchName = keys.every(key => item.name.toUpperCase().includes(key));
          }
          return matchName ;
        });
      },
    },
  };
</script>

<style scoped>
  p{
    margin-left: 100px;
  }

  .right{
    margin-left: 700px;
  }
</style>

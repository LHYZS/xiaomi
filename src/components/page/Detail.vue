<template>
  <div>
    <div class="center" v-for="item in product">
      <b-row>
        <b-col cols="5">
          <div class="fl left">
            <img :src="item.bigPic"/>
          </div>
        </b-col>
        <b-col cols="7">
          <div class="fl right">
            <h1>{{item.name}}</h1>
            <p class="price">
              <span class="color">价格 </span><span class="txt-style"> <s>￥{{item.price}}</s></span>
            </p>
            <p class="new-price">
              <span class="color">促销价</span><span class="txt-style2">￥{{item.newPrice}}</span>
            </p>
            <p class="integral">
              <span>月销量 <span> {{item.sales}}</span></span>|
              <span>累计评论 <span> {{item.comment}}</span></span>|
              <span>送天猫积分 <span class="change-color"> {{item.integral}}</span></span>
            </p>
            <div>
              <p class="size">
                <span class="color">尺码</span>
                <span v-for="(sizeList,index) in item.sizeList">
              <span class="size-style" :class="{'border-red' : active === index}" @click="getActive(sizeList,index)">{{sizeList.size}}</span>
            </span>
              </p>
              <p class="color-classification">
                <span class="color">颜色分类</span>
                <span v-for="(smallPicList,index) in item.smallPicList">
              <img class="small-img-style" :class="{'border-red' : activePic === index}"
                   @click="changeBigImg(index,smallPicList.img)" :src="smallPicList.img"
                   style="width: 100px;height: 100px"/>
            </span>
              </p>
              <p class="number">
                <span class="color">数量</span>
                <input type="number" value="1" v-model="number"/>
              </p>
              <p class="repertory">
                <span class="color">库存</span>
                <span>{{item.repertory}}件</span>
              </p>
              <button class="buy" @click="toCar()">立即购买</button>
              <button class="buy-car" @click="toCar(item)">加入购物车</button>
            </div>
          </div>
        </b-col>
      </b-row>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        product: [
          {
            "id": 1,
            "name": "HUAWEI Mate 20",
            "bigPic": "https://res.vmallres.com/pimages//product/6901443264780/428_428_1539244238246mp.png",
            "price": 888,
            "newPrice": 799,
            "sales": 310,
            "comment": 145,
            "integral": 123,
            "repertory": 1960,
            "sizeList": [
              {
                "id": 1,
                "size": "5XL",
              },
              {
                "id": 2,
                "size": "8XL",
              },
              {
                "id": 3,
                "size": "10XL",
              },
            ],
            "smallPicList": [
              {
                "id": 1,
                "img": "https://res.vmallres.com/pimages//product/6901443262182/428_428_1539222271816mp.png"
              },
              {
                "id": 2,
                "img": "https://res.vmallres.com/pimages//product/2601010009806/428_428_1518318930697mp.jpg"
              },
              {
                "id": 3,
                "img": "https://res.vmallres.com/pimages//product/6901443202027/428_428_1539940964596mp.png"
              },
            ],

          },
        ],
        id: this.$route.params.id,
        active: false,
        activePic: false,
        number: 1,
        size: '',
        img: ''
      }
    },
    methods: {
      getActive(sizeList, index) {
        this.active = index;
        this.size = sizeList.size;
      },
      changeBigImg(index, smallImg) {
        this.activePic = index;
        this.img = smallImg;
        this.product.map(function (e) {
          e.bigPic = smallImg;
        })
      },
      toCar(item) {
        if ((this.number < 1) || (this.size === '') || (this.img === '')) {
          alert('请认真商品规格~');
          return false;
        }
        this.$store.commit('getProductNum', 1);
        // 获取当前的订单信息，再加上购物车页面需要的参数，赋给state.car
        item.size = this.size;
        item.img = this.img;
        item.number = this.number;
        item.productNum = this.$store.state.productNum;
        console.log(item.productNum);
        this.$store.commit('addCar', item);
        this.$router.push({path: '/cart'});
      },
    }
  }
</script>
<style scoped>

  .center .left {
    margin-right: 20px;
    width: 420px;
    height: 420px;
    margin-left: 130px;
    margin-top: 50px;
  }

  .center .right h1 {
    color: #000;
    font-size: 30px;
    margin-left: 12px;
    margin-top: 50px;
  }

  .color {
    color: #999;
    font-size: 12px;
    width: 69px;
    margin-left: 8px;
    display: inline-block;
    vertical-align: top;
  }

  .txt-style {
    color: #333;
    font-size: 14px;
    margin-left: 8px;
  }

  .txt-style2 {
    color: #ff0036;
    font-size: 30px;
  }

  .center .right .price {
    margin-top: 18px;
    height: 24px;
    line-height: 24px;
  }

  .center .right .new-price {
    margin-top: 10px;
    height: 36px;
    line-height: 36px;
  }

  .integral {
    margin-top: 10px;
    height: 38px;
    line-height: 38px;
    border-top: 1px dotted #ccc;
    border-bottom: 1px dotted #ccc;
    color: #ccc;
  }

  .integral > span {
    width: 164px;
    display: inline-block;
    text-align: center;
    font-size: 12px;
  }

  .integral span span {
    color: #ff0036;
  }

  .integral span .change-color {
    color: #280;
  }

  .size-style {
    padding: 0 9px;
    text-align: center;
    border: 1px solid #000;
    display: inline-block;
    margin-right: 10px;
    cursor: pointer;
  }

  .container .border-red {
    border: 1px solid #ff0036;
  }

  .size {
    margin-top: 16px;
    height: 30px;
    line-height: 26px;
  }

  .small-img-style {
    border: 1px solid #000;
    margin-right: 4px;
    cursor: pointer;
    display: inline-block;
    vertical-align: middle;
  }

  .number {
    margin-top: 14px;
  }

  .repertory {
    margin-top: 12px;
    height: 30px;
    line-height: 30px;
  }

  .buy {
    width: 180px;
    height: 40px;
    line-height: 40px;
    border: 1px solid #ff0036;
    background: #ffeded;
    color: #ff0036;
    text-align: center;
    float: left;
    margin: 39px 20px 0 81px;
    cursor: pointer;
    font-size: 16px;
  }

  .buy-car {
    width: 180px;
    height: 40px;
    line-height: 40px;
    background: #ff0036;
    color: #fff;
    float: left;
    margin-top: 39px;
    border: 1px solid #ff0036;
    cursor: pointer;
    font-size: 16px;
  }

  .buy:hover, .buy-car:hover {
    color: #fff;
    background: orange;
    border: 1px solid yellow;
  }
</style>

/*
 * @Author: chenxing 
 * @Date: 2018-04-23 17:40:16 
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-04-24 10:30:49
 */
<template>
  <div>
    <sticky>
      <div class="header">
        <h2>{{userName}}</h2>
        <h3>欢迎登陆城市管家</h3>
        <div class="head-rightBtn" @click="loginOut">退出</div>
      </div>
    </sticky>
    <tab class="tabNav" bar-position="top">
      <tab-item selected >房源</tab-item>
      <tab-item >客控</tab-item>
    </tab>
    <div>
      <search :auto-fixed="false" ref="search"></search>
    </div>
    <ul class="userNav">
      <li v-for="item in listData">
        <div class="userLeft">
          <div class="line">
            <div class="name">{{item.name}}</div>
            <div class="gender">{{item.gender | genderStr}}</div>
          </div>
          <div class="mobile">{{item.mobile}}</div>
        </div>
        <div :class="['userStatus', item.status == 1 ? 'success' : item.status == 3 ? 'warn' : '']">
          {{item.status | statusStr}}
          </div>
        <div class="userRight">{{item.listStatus | listStatus}}</div>
        <i class="iconfont icon-youjiantou"></i>
      </li>
    </ul>
    <div class="addList">
      <i class=" iconfont icon-add"></i>
    </div>
    
  </div>
</template>

<script>
import { Sticky, Tab, TabItem, Search, Toast } from 'vux'
import { login } from '@/api/login'

export default {
  components: {
    Sticky,
    Tab,
    TabItem,
    Search,
    Toast
  },
  created() {
    login().then(res => {
      console.log(1)
    }).catch(res => {})
    console.log(this.$route.params.sessionId)
  },
  filters: {
    genderStr(val) {
      const gender = ['先生', '女士']
      return val ? gender[val - 1] : '先生'
    },
    statusStr(val) {
      const status = ['低', '中', '高']
      return val ? status[val - 1] : '中'
    },
    listStatus(val) {
      const status = ['电话-意向中', '电话-约带看', '电话-已签约', '电话-无效', '带看-带看中', '结束带看-未签约', '结束带看-已签约']
      return val ? status[val - 1] : '未知状态'
    }
  },
  data() {
    return {
      userName: '大都',
      listData: [{
        name: '张三',
        gender: 1,
        mobile: 18912344321,
        status: 1,
        listStatus: 1
      },
      {
        name: '李四',
        gender: 2,
        mobile: 18912344321,
        status: 2,
        listStatus: 2
      },
      {
        name: '王五',
        gender: 1,
        mobile: 18912344321,
        status: 3,
        listStatus: 3
      }]
    }
  },
  methods: {
    loginOut() {}
  }
}
</script>

<style rel="stylesheet/less" lang="less">
  .left {
    float: left;
  }
  .right {
    float: right;
  }
  .tabNav {
    margin-top:10px;
  }
  .userNav {
    li {
      width: 100%;
      float: left;
      margin-bottom: 10px;
      position: relative;
      padding: 10px 30px;
      box-sizing: border-box;
      background-color: #fff;
      display:flex;/*Flex布局*/
      align-items:center;/*指定垂直居中*/
      .icon-youjiantou {
        position: absolute;
        right: 10px;
        color: #ccc;
        top: 15px;
      }
      .userLeft {
        width: 240px;
        line-height: 40px;
        .left;
        .name{
          width: 120px;
          .left;
        }
        .gender{
          width: 100px;
          .left;
        }
        .mobile {
          color:#666;
        }
      }
      .userStatus {
        .left;
        width: 40px;
        height: 40px;
        background: #4680FF;
        line-height: 40px;
        text-align: center;
        color:#fff;
      }
      .warn {
        background: red
      }
      .success{
        background: rgb(56, 224, 40);
      }
      .userRight {
        width: 300px;
        text-align: center;
        line-height: 60px;
        padding-right: 10px;
        .right;
      }
    }
  }
  .addList { 
    position:fixed;
    width: 100px;
    height: 100px;
    bottom: 50px;
    left:50%;
    margin-left: -50px;
    color: #4680FF;
    i {
      font-size: 100px;
    }
  }
</style>

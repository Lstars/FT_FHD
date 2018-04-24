/*
 * @Author: chenxing 
 * @Date: 2018-04-23 17:40:16 
 * @Last Modified by: chenxing
 * @Last Modified time: 2018-04-24 15:35:46
 */
<template>
  <div>
    <sticky>
      <div class="header headDiv">
        <i class="iconfont icon-zuojiantou"></i>
        <div class="headerTitle">新增客源</div>       
      </div>
    </sticky>
    <div class="line">
      <div class="labelText">姓名</div>
      <input class="inputs" type="text" placeholder="请输入姓名">
      <div class="genderBox positionRight">
        <button-tab v-model="userForm.gender">
          <button-tab-item @on-item-click="changeGender()" :selected="userForm.gender == 1">先生</button-tab-item>
          <button-tab-item @on-item-click="changeGender()" :selected="userForm.gender == 2">女士</button-tab-item>
        </button-tab>
      </div>
    </div>
    <div class="line">
      <div class="labelText">手机号码</div>
      <input class="inputs" type="number" placeholder="请输入手机号码">
    </div>
    <div class="line">
      <div class="labelText">需求区域</div>
      <div class="textArea">需求区域1</div>
      <div class="positionRight">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="line">
      <div class="labelText"></div>
      <div class="textArea">需求区域2（非必选）</div>
      <div class="positionRight">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="line">
      <div class="labelText"></div>
      <div class="textArea">需求区域3（非必选）</div>
      <div class="positionRight">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="line">
      <div class="labelText">来源</div>
      <div class="textArea">请选择来源渠道</div>
      <div class="positionRight">
        <i class="iconfont icon-youjiantou"></i>
      </div>
    </div>
    <div class="line">
      <div class="labelText">意向度</div>
      <div class="status">
        <button-tab>
          <button-tab-item>低</button-tab-item>
          <button-tab-item selected>中</button-tab-item>
          <button-tab-item>高</button-tab-item>
        </button-tab>
      </div>
    </div>
    <div class="fixedBottm">
      <button type="button" class="btn" @click="saveData">完成</button>
    </div>
  </div>
</template>

<script>
import { Sticky, ButtonTab, ButtonTabItem, Toast } from 'vux'
import { login } from '@/api/login'

export default {
  components: {
    Sticky,
    ButtonTab,
    ButtonTabItem,
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
      userForm: {
        name: '',
        gender: 2,
        mobile: '',
        intentionality: 2,
        source: '',
        sourceType: '',
        areaAttribute1: '',
        areaAttribute2: '',
        areaAttribute3: ''
      }
    }
  },
  methods: {
    ChooseArea() {
      this.userForm.areaAttribute1 = 'haha'
      console.log(this.userForm)
    },
    changeGender(index) {
      console.log(console.log(this.userForm.gender))
    },
    saveData() {
      console.log(this.userForm)
    }
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
  .relative {
    position: relative;
  }
  .positionRight {
    position: absolute;
    right: 10px;
    color: #ccc;
  }
  .genderBox {
    width: 200px;
    top:10px;
  }
  .line {
    width: 100%;
    min-height: 80px;
    line-height: 80px;
    padding-left: 20px;
    border-bottom: 1px solid #eee;
    font-size: 0.35rem;
    background: #fff;
    position: relative;
    .labelText {
      width: 160px;
      height: 80px;
      .left;
    }
    .textArea {
      .left;
      line-height: 50px;
      padding: 15px 0;
      width: 500px;
      color: #999;
      font-size: 0.35rem;
    }
    .inputs {
      .left;
      border:none;
      background: none;
      padding: 15px 0;
      line-height: 50px;
      width: 500px;
      font-size: 0.35rem;
      &:focus{
        border: none;
        outline: none;
      }
    }
    .status {
      .left;
      width: 500px;
      margin-top: 10px;
    }
  }
</style>

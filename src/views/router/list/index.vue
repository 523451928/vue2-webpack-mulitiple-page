<template>
    <div id="app">
        <ul>
            <li v-for="(item, index) in list">{{item.name}}</li>
        </ul>
        <router-view></router-view>
    </div>
</template>

<script>

import Lib from 'assets/js/Lib';

import { Cell,Group,Divider } from 'vux'


export default {
  data() {
    return {
    	webname:5464,
		'list':[{
			'id':0,
			'name':'vue-router',
			'url':'../vuxDemo/alert.html'
		},{
			'id':1,
			'name':'vuex',
			'url':'../vuxDemo/calendar.html'
		},{
			'id':2,
			'name':'mint',
			'url':'../vuxDemo/button.html'
		}]
    }
  },
  components: {
	Cell,Group,Divider	
  },
  //实例初始化最之前，无法获取到data里的数据
  beforeCreate(){
  	
  	
  },  
  //在挂载开始之前被调用
  beforeMount(){
  	
  
  }, 
  //已成功挂载，相当ready()
  mounted(){
		console.log(Lib)
  },
  //相关操作事件
  methods: {
	
  }
}
</script>

<style lang="less">


.note{
	color:#666;
	padding:10px;
	font-size:12px;
}
.note p{
	line-height:25px;
}

.weui-cells{
font-size: 14px!important;	
}

/*
 * less 展示
 */ 
.lessTest{
	.listbox{
		border-radius: 10px;
		font-size: 14px;
	}
	.boxcontent{
		padding: 15px;
	}
}


</style>

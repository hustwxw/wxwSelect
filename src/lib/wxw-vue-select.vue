<template>
  <div :class="{'wxw-vue-select-container':true,'wxw-vue-select-slider':sliderClass}" ref="container" @click="list" onselectstart="return false;" data-wxw-vue-select="1">
    <span data-placeholder data-wxw-vue-select="1" class="plh">{{self_placeholder}}</span>
    <span data-text data-wxw-vue-select="1" style="display:inline-block">{{text}}</span>
    <input type="hidden" data-wxw-vue-select="1">
    <i data-wxw-vue-select="1"></i>
    <ul ref="ul" v-show="showList" data-wxw-vue-select="1" :class="{'wxw-vue-scroll':scrollClass}">
        <li data-wxw-vue-select="1" @click="select(item)" v-for="(item,index) in items"><a data-wxw-vue-select="1" href="javascript:void(0)">{{item.value}}</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'wxwVueSelect',
  data () {
    return {
      showList:false,//是否展示ul列表
      sliderClass:false,//是否展示框框左下角和右下角的圆角
      text:"",//选择显示的文本
      _selectItem:null,//选中的item数据对象
      self_placeholder:"",//copy 默认显示的文字
      scrollClass:false//是否ul滚动样式
    }
  },
  props:['items','placeholder'],
  methods:{
    select(item){
      this.text = item.value;
      this._selectItem = item;
      this.$emit("onchange",item);
      this.self_placeholder = "";
    },
    list(){
      var _this = this;
      this.showList = !this.showList;
      this.sliderClass= this.showList;
    }
  },
  mounted(){
    var _this = this;
    _this.self_placeholder = _this.placeholder;

    if(_this.items.length > 10){
      _this.scrollClass = true;
    }

    document.onclick = function(e){
      var target = e.target || e.srcElement;
      if(target.getAttribute("data-wxw-vue-select") != 1){
        _this.showList = false;
        _this.sliderClass = false;
      }
    };
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.wxw-vue-select-container{
  display: inline-block;
  width:200px;
  height:30px;
  border-radius: 6px;  
  border:1px solid #ddd;

  position: relative;
  cursor: pointer;
  text-align: center;
}

.wxw-vue-select-container.wxw-vue-select-slider{
  border-bottom-left-radius: 0px;
  border-bottom-right-radius: 0px;
}

.phl{
  line-height:30px;
  height:30px;
  color:rgb(169,169,169);
  font-family:\'Microsoft Yahei\';
}

[data-placeholder],[data-text]{
  display: inline-block;
  width:auto;
  height:30px;
  vertical-align: middle;
  line-height: 30px;
  font-size:14px;
}

ul{
  padding:0px;
  margin:0px;
  position: absolute;
  background-color: white;
  border: 1px solid #ddd;
  left: -1px;
  z-index: 1000;
  height: auto;
  width:100%;
}

ul.wxw-vue-scroll{
  height:150px;
  overflow-y: scroll;
}

ul li{
  list-style: none;
  width:100%;
  height:30px;
  line-height: 30px;
  text-align: center;
  font-size:14px;
  transition: all .3s linear;
  cursor: pointer;
}

ul li:hover{
  background-color:#ddd;
}

ul li a{
  color: black;
  text-decoration: none;
}

i{
  float: right;
  background: url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAYAAAAFCAYAAABmWJ3mAAAAAXNSR0IArs4c6QAAAERJREFUCB1j/O/kt4qBgSEUiJHBaiYGdvZsoMhrJNHXIDEmxu2rXzMwMeXAJYBssBhM4L+z/2oQhvFZYAwGZiaQkXAAAG5uEG+klpNKAAAAAElFTkSuQmCC") center center no-repeat;
  height:30px;
  width:30px;
  vertical-align: middle;
  position: absolute;
  right: 0px;
  cursor: pointer;
}
</style>

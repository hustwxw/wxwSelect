<template>
   <wxwVueSelect :items="items" :placeholder="placeholder"></wxwVueSelect>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      items:[{
        key : 'wuchangyu',
        value : '武昌鱼'
      },{
        key : 'huanghelou',
        value : '黄鹤楼'
      },{
        key : 'changjiang',
        value : '长江'
      },{
        key : 'huanghe',
        value : '黄河'
      },{
        key : 'kongmiao',
        value : '孔庙'
      },{
        key : 'changcheng',
        value : '长城'
      },{
        key : 'badaling',
        value : '八达岭'
      },{
        key : 'tianyahaijiao',
        value : '天涯海角'
      },{
        key : 'jinniuling',
        value : '金牛岭'
      },{
        key : 'nandujiang',
        value : '南渡江'
      },{
        key : 'haidiandao',
        value : '海甸岛'
      },{
        key : 'shilin',
        value : '石林'
      }],
      placeholder:"---请选择---",
      item:null
    }
  }
}
</script>

<style>

</style>

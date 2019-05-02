<template>
 <div class="container">
     <Pannel @sendsonurl="receivesonurl($event)"></Pannel>8898
 </div>
</template>
<script>
import Pannel from './pannel'
export default {
  name: 'HelloWorld',
  components:{
      Pannel
  },
  methods: {
      receivesonurl(sonurl){
          let that=this;
            // alert(JSON.stringify(sonurl));
            that.$emit('sendsonurl',sonurl)
        }
  },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
</style>

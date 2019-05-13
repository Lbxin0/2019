<template>
    <div class='index'>
        <router-view></router-view>
        <save-footer class="FooterNav"></save-footer>
        
    </div>
</template>
<script>
import SaveFooter from './SaveFooter'
export default {
    name: 'index',
    props: {
    
    },
    components:{
        SaveFooter
    }
}
</script>
<style scoped lang='less'>
    .index{
        width:100vw;
        .FooterNav{
            position: fixed;
            bottom: 0;
        }
    }
</style>
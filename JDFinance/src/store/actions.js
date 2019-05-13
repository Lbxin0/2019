import Vue from 'vue'
import Vuex from 'vuex';
import axios from 'axios'
Vue.use(Vuex);
const actions = {
    getVideo(context){
        axios.get(`/mv/detail?mvid=${context.state.MvId}`).then(res=>{
            // that.videoplay=true;
            // that.videoitem=res.data.data;
            // that.videosrc=res.data.data.brs[240]
            // that.userid=res.data.data.id;
            context.state.videoInfo=res.data;
            console.log(context.state.videoInfo);
            
        }).catch(
            err=>{
                console.log(err);
            }
        );
    },
}
export default actions
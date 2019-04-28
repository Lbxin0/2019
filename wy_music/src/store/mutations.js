
const mutations = {  //专门用于修改state里的属性的方法集合   修改公共状态
    SonIdPush(state,id){    //方法名(add)随便起，参数state是固定写法(首参)
        alert(state.SonId.indexOf(id))
        if(state.SonId.indexOf(id)==-1){  //判断歌曲ID是否在全局ID列表中
            state.ActiveId=id
            state.SonId.push(id)
            // console.log(state.SonId);
            // console.log(state.ActiveId);
        }else{
            alert("歌曲已在播放列表中");
        }
    },
    closeVideo(state){
        state.MvId='';
        state.videoplay=false;
        
    },
}
export default mutations
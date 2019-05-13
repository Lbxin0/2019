
const mutations = {  //专门用于修改state里的属性的方法集合   修改公共状态
    FooterHide(state){
        state.FooterNavShow=false
    },
    FooterShow(state){
        state.FooterNavShow=true
    },
}
export default mutations
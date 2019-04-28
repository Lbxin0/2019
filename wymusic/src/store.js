import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


const state = {   //仓库共有属性的集合，用于存储公共状态，只储存
  login:true,
  count:1
}

const mutations = {  //专门用于修改state里的属性的方法集合   修改公共状态
  add(state){  //方法名(add)随便起，参数state是固定写法(首参)
    state.count++
    },
}
export default new Vuex.Store({
  state,
  mutations,
  actions: {

  }
})

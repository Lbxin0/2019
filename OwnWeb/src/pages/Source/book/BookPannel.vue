<template>
    <div class='BookPannel'>
        <!-- {{$route.params.type}} -->
        <div class="BookList" v-for="(item,index) in DbookList" :key="index">
            <a :href="item.href" target="_blank">
                <img :src="item.src" :alt="item.title" >
                <h4>{{item.title}}</h4>
            </a>
        </div>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name: 'BookPannel',
    props: {
        
    },
    watch: {
        routeParams(newval){
            console.log(newval);
            this.DbookList=this.bookList[newval+"Books"];
            // console.log(this.bookList[newval+"Books"]);
            
        },
        $route(to,from){
            // console.log(to.path.split('/')[3]);
            this.routeParams=to.path.split('/')[3]
        }
    },
    data() {
        return {
            routeParams:'',
            books:[
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233256.jpg",title:"Python基础知识培训",href:"https://pan.baidu.com/s/1yJhHjwHe0Rd0HuvjN7oIKA"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233217.jpg",title:"vue2.0实战揭秘",href:"https://pan.baidu.com/s/13DAwa8tYrdJRNxD1KkngkA"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233306.jpg",title:"你不知道的JavaScript中卷",href:"https://pan.baidu.com/s/1iPVZKkNYycg6RVfV0H2nrg"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233337.jpg",title:"响应式Web设计-HTML5和CSS3实战",href:"https://pan.baidu.com/s/10gbUELkGp0H976PqBeab1A"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233420.jpg",title:"大型网站框架分析",href:"https://pan.baidu.com/s/1dcuNkFpkTohKvpTcLs2neg"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233447.jpg",title:"精彩绝伦的css",href:"https://pan.baidu.com/s/1WwxmAwzqRadAJmul4yWF0A"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233517.jpg",title:"NODE.js入门手册",href:"https://pan.baidu.com/s/1rOR5-mli38e8FV6BhGj2GQ"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233559.jpg",title:"Web标准之道",href:"https://pan.baidu.com/s/14mzMdvaVWiX7e6z_NzjNMw"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233636.jpg",title:"JavaScript框架高级编程",href:"https://pan.baidu.com/s/1uXcQAu2Xxg7KbNjInjgc-Q"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233719.jpg",title:"JavaScript.DOM高级程序设计",href:"https://pan.baidu.com/s/1kwl0nAPvtcbqY8QHflih9w"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-16_233769.jpg",title:"GitHub入门与实践",href:"https://pan.baidu.com/s/1w1pEXlg4xl78HaRZkgzO6g"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-28_223334.jpg",title:"Git版本控制管理 第2版",href:"https://pan.baidu.com/s/1Lx6IxMSRznE7oHVoPQjE1g"},
                {src:"https://x0516.github.io/Full-Stack/image/bookshelf/2018-05-28_224134.jpg",title:"廖雪峰 JavaScript Python Git 教程",href:"https://pan.baidu.com/s/1owSg3pfpKngCZGES1JTOeQ"},
              
              
            ],
            bookList:[],
            DbookList:'FrontEnd'
        }
    },
    mounted() {
        axios.get("https://x0516.github.io/SourceData/json/BookList.json#").then(res=>{
            // console.log(res.data);
            this.bookList=res.data;
            this.DbookList=this.bookList[this.DbookList+"Books"];
        }).catch(err=>{
            console.log(err);
        })
    },
}
</script>
<style scoped lang='less'>
.BookPannel{
    width:100%;
    .BookList{
        width:31%;
        height: 20rem;
        display:inline-block;
        margin:1%;
        box-sizing: border-box;
        box-shadow:0.2rem 0.2rem 0.3rem #ccc,
                   -0.2rem -0.2rem 0.3rem #ccc;
        position: relative;
        z-index: 0;
        a{  
            height: 100%;
            color: #fff;
            text-decoration: none;
            font-size: 1.2rem;
            transition-duration: 1s;
            &:hover{
                color: #ff2832;
            }
            img{
                height:85%;
                display: block;
                margin: 0 auto;
            }
            h4{
                width:90%;
                height: 14%;
                display: flex;
                align-items: center;
                justify-content: center;
                padding: 0 0.5rem;
                overflow: hidden;
                white-space: nowrap;
                text-overflow: ellipsis;
            }
        }
    }
}
</style>
<template>
    <div class='Check'>
        <div class="ILogin">
            <div class="Login">手机号码登录</div>
            <div class="Register">注册</div>
            <div class="NoLogin">游客试用</div>
        </div>
        <div class="OthLogin"></div>
    </div>
</template>
<script>
export default {
    name: 'Check',
    props: {
    
    }
}
</script>
<style scoped lang='less'>
    .Check{
        width:100vw;
        height:100vh;
        background: url('../../assets/images/bg/LGbg.jpg') center no-repeat / 100% 100%;
        background-size:cover;
        position: relative;
        .ILogin{
            width:95%;
            height:11rem;
            position: absolute;
            top:10%;
            left:0;
            right:0;
            bottom:0;
            margin:auto;
            font-size: 1.6rem;
            >div{
                height:3rem;
                line-height:3rem;
                width:80%;
                margin:0 auto;
                border-radius:1.5rem;
                margin-top:1.2rem;
                box-sizing: border-box;
            }
            .Login{
                background:red;
                color:#fff;
            }
            .Register{
                border:1px solid red;
                color: red;
                font-weight: bold;
            }
            .NoLogin{
                color:rgba(238, 238, 238,.8)
            }
        }
        
    }
</style>
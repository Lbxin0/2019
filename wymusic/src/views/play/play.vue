<template>
    <div class='playSon'>
        <div class="playHeade">
            <div class="back"></div>
            <div class="SonInfo"></div>
            <div class="SonShare"></div>
        </div>
        <div class="playBg">
            <!-- <img src="http://p2.music.126.net/5GKB5hfpls43lthCRkU1cA==/109951163984126389.jpg?param=140y140" alt=""> -->
        </div>
    </div>
</template>
<script>
export default {
    name: 'playSon',
    props: {
    
    }
}
</script>
<style scoped lang='less'>
    .playSon{
        width:100vw;
        height:100vh;
        position: relative;
        background:rgba(227, 228, 230, 1);
        .playHeade{
            height:4rem;
            line-height:4rem;
            width:100%;
            background:rgba(68, 74, 74, 0.75);
            position: absolute;
            z-index: 111;
            box-sizing: border-box;
            >div{
                display: inline-block;
                width:20%;
                height:100%;
            }
            .SonInfo{
                width:60%;
            }
            .back{
                background: url('../../assets/images/icon/back.png') left no-repeat / 100% 100%;
                background-size:35%;
            }
            .SonShare{
                background: url('../../assets/images/icon/share.png') right no-repeat / 100% 100%;
                background-size:35%;
            }
        }
        .playBg{
            width:20rem;
            height:20rem;
            background-color: rgba(24, 24, 24, 1);
            position: absolute;
            top: -16%;
            bottom: 0;
            right: 0;
            left: 0;
            margin: auto;
            border:2px solid rgba(227, 228, 230, 1);
            // border-radius: 50%;
            overflow: hidden;
            background: url('http://p2.music.126.net/5GKB5hfpls43lthCRkU1cA==/109951163984126389.jpg?param=140y140') center no-repeat / 100% 100%;
            background-size:80%;
            box-sizing: border-box;
            // animation: BgRotate 6s linear infinite; 
            @keyframes BgRotate {
                from{
                    transform: rotate(0)
                }
                to{
                    transform: rotate(360deg)
                }
            }
            &::before,
            &::after{
                content: " ";
                display: block;
                position: absolute;
                top:0;
                right:0;
                left:0;
                bottom:0;
                margin:-0.5rem;
                box-shadow: 0px 0px 1px 4px rgba(227, 228, 230, 1) inset;
                // border-radius: 50%;
            }
            &::after{
                margin:0rem;
                border:1.5rem solid rgba(90,90,87, .99);
            }
        }
    }
    
</style>
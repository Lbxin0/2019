<template>
    <div class='loading'>
        <div class="loadingBox"></div>
        <p class="loadingTxt">加载中。 。 。 。 。 </p>
    </div>
</template>
<script>
export default {
    name: 'loading',
    props: {
    
    }
}
</script>
<style scoped lang='less'>
    .loading{
        width:100vw;
        height:100vh;
        background:rgba(17, 17, 17,.9);
        p[class="loadingTxt"]{
            position: relative;
            width:40%;
            white-space: nowrap;
            overflow: hidden;
            text-align: left;
            top:20%;
            font-size: 1.4rem;
            margin:0 auto;
            // border:1px solid red; 
            animation: BGtranslate 3s linear infinite;
            -webkit-animation: BGtranslate 3s linear infinite;
            @keyframes BGtranslate {
                0%{
                    // right:30%;
                    width:40%;
                }
                50%{
                    width:20%;
                }
                100%{
                    // right:20%;
                    width:40%;
                }
            }
            // &::after{
            //     content: " ";
            //     display: block;
            //     width:5rem;
            //     height:1rem;
                
            //     background:#000;
            //     position: absolute;
            //     top: 50%;
            //     right:30%;
            //     animation: BGtranslate 3s linear infinite;
            //     -webkit-animation: BGtranslate 3s linear infinite;
            //     @keyframes BGtranslate {
            //         from{
            //             // right:30%;
            //         }
            //         to{
            //             // right:20%;
            //         }
            //     }
            // }
        }
        .loadingBox{
            width: 200px;
            height: 200px;
            line-height: 200px;
            font-size: 1.6rem;
            position: absolute;
            top: 50%;
            left: 50%;
            opacity: 0.7;
            background: url('http://pic.51yuansu.com/pic3/cover/00/71/07/58b03c9d9955d_610.jpg') center no-repeat / 100% 100%;
            background-size:cover;
            border-radius: 50%;
            animation: BGrotate 3s linear infinite;
            -webkit-animation: BGrotate 3s linear infinite;
            margin-top:-100px;
            margin-left:-100px;
            @keyframes BGrotate {
                from{
                    transform: rotate(0deg)
                }
                to{
                    transform: rotate(360deg)
                }
            }
            &::before,
            &::after{
                content: '';
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                bottom: 0;
                margin: -15px;
                border-radius: 50%;
                /* clip: rect(top, right, bottom, left) */
                -webkit-animation: borderClip 3s ease-in-out infinite;
                        animation: borderClip 3s ease-in-out infinite;
            }
            &::before{
                -webkit-animation-delay: 3s;
                animation-delay: 3s;
                border: 2px solid #eff309;
            }
            &::after{
                // -webkit-animation-play-state: paused;
                // animation-play-state: paused;
                -webkit-animation-delay: 1.5s;
                animation-delay: 1.5s;
                border: 2px solid #2ecc71;
            }
            @-webkit-keyframes borderClip {
                0%, 100% {
                    clip: rect(0px, 230px, 2px, 0px);
                }
                25% {
                    clip: rect(0px, 2px, 230px, 0px);
                }
                50% {
                    clip: rect(228px, 230px, 230px, 0px);
                }
                75% {
                    clip: rect(0px, 230px, 230px, 228px);
                }
                }
            @keyframes borderClip {
                0%, 100% {
                    clip: rect(0px, 230px, 2px, 0px);
                }
                25% {
                    clip: rect(0px, 2px, 230px, 0px);
                }
                50% {
                    clip: rect(228px, 230px, 230px, 0px);
                }
                75% {
                    clip: rect(0px, 230px, 230px, 228px);
                }
            }
        }
    }
</style>
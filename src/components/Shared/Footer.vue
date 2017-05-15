<template>
    <footer id="footer">
        <div class="footer-wrapper">
            <div class="footer-kv">
                <img src="../../assets/images/footer.png" alt="">
                <div class="seven-link js-ga-tracking"
                     data-href="http://www.7-11.com.tw/"
                     data-tracking="footer/7-11"
                     data-target="_blank"
                     title="7-ELEVEN 首頁">
                </div>
                <div class="icash-link js-ga-tracking"
                     data-href="https://www.icash.com.tw/"
                     data-tracking="footer/icash"
                     data-target="_blank"
                     title="icash">
                </div>
            </div>
        </div>
    </footer>
</template>

<script></script>

<style lang="scss">
    #footer {
        height: 276px;
        background-image: url("../../assets/images/footer_bg.jpg");
    }

    .footer-wrapper {
        position: relative;
        width: 1200px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);

        .footer-kv {
            display: block;
            position: absolute;
            left: 0;
            top: 0;

            .seven-link {
                position: absolute;
                left: 469px;
                bottom: 49px;
                width: 113px;
                height: 30px;
                cursor: pointer;
            }

            .icash-link {
                position: absolute;
                left: 581px;
                bottom: 49px;
                width: 52px;
                height: 30px;
                cursor: pointer;
            }

        }
    }
</style>
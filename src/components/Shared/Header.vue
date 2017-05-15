<template>
    <header id="header">
        <div class="header-wrapper">
            <div class="header-wrapper">
                <div class="header-kv">
                    <img src="../../assets/images/kv.png" alt="">
                </div>
                <div class="header-banner js-ga-tracking"
                     data-href="http://www.7-11.com.tw/openpoint_event1/15_CBCard/index.html"
                     data-tracking="header/week" data-target="_blank" title="優惠活動詳情">
                    <img src="../../assets/images/banner.png"
                         alt="">
                </div>
            </div>
        </div>
        <nav id="nav">
            <ul class="nav-item-list">
                <li :class="'nav-item nav-item-' + (index+1)" v-for="(item, index) in navItems">
                    <a
                            href="javascript:;"
                            :linkUrl="item.href"
                            :tracking="item.trackingItem"
                            :target="item.linkTarget"
                            :title="item.title"
                            @click="gaLinkTracking(item.linkUrl, item.trackingItem, item.linkTarget)">
                    </a>
                </li>
            </ul>
        </nav>
    </header>

</template>

<script>
    export default {
        data : function () {
            return {
                navItems : [
                    {
                        id : 1,
                        linkUrl : 'index',
                        trackingItem : 'menu/one',
                        linkTarget : '_self',
                        title : '買1送1'
                    },
                    {
                        id : 2,
                        linkUrl : 'p2',
                        trackingItem : 'menu/two',
                        linkTarget : '_self',
                        title : '買1送1'
                    },
                    {
                        id : 3,
                        linkUrl : 'https://www.openpoint.com.tw/SETMemberWebsite/Index.html',
                        trackingItem : 'menu/openpoint',
                        linkTarget : '_blank',
                        title : '更多OPENPOINT兌換優惠'
                    },
                    {
                        id : 4,
                        linkUrl : 'https://www.icash.com.tw/',
                        trackingItem : 'menu/icash',
                        linkTarget : '_blank',
                        title : 'icash官網優惠'
                    },
                ]
            }
        },
        methods : {
            gaLinkTracking( linkUrl, trackingItem, linkTarget ) {
                console.log( linkUrl );

                // GA
                ga( 'send', 'event', trackingItem, 'click' );

                // delay for opening window
                setTimeout( function () {
                    window.open( linkUrl, linkTarget );
                }, 250 );

            }
        }
    }
</script>


<style lang="scss">
    #header {
        position: relative;
        height: 450px;
        background-image: url("../../assets/images/kv_bg.jpg");
    }

    .header-wrapper {
        position: relative;
        width: 1200px;
        height: 100%;
        left: 50%;
        transform: translateX(-50%);

        .header-kv {
            display: block;
            position: absolute;
            left: 0;
            top: 0;
        }

        .header-banner {
            display: block;
            position: absolute;
            right: 35px;
            top: 15px;
            cursor: pointer;
        }
    }

    #nav {
        position: absolute;
        width: 1118px;
        height: 63px;
        left: 50%;
        bottom: 0;
        transform: translateX(-50%);

        .nav-item-list {
            list-style-type: none;
            font-size: 0;
        }

        .nav-item {
            display: inline-block;
            vertical-align: top;
            background-image: url("../../assets/images/menu.png");

            & a {
                display: block;
                height: 100%;
                cursor: pointer;
            }
        }

        .nav-item-1 {
            background-position: 0 63px;
            width: 274px;
            height: 63px;

            &.is-active,
            &:hover {
                background-position: 0 0;
            }
        }

        .nav-item-2 {
            background-position: -274px 63px;
            width: 274px;
            height: 63px;

            &.is-active,
            &:hover {
                background-position: -274px 0;
            }
        }

        .nav-item-3 {
            background-position: -822px 63px;
            width: 190px;
            height: 63px;
            margin-left: 274px;

            &.is-active,
            &:hover {
                background-position: -822px 0;
            }
        }

        .nav-item-4 {
            background-position: -1012px 63px;
            width: 106px;
            height: 63px;

            &.is-active,
            &:hover {
                background-position: -1012px 0;
            }
        }
    }

</style>
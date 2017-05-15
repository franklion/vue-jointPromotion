<template>
    <div>
        <app-header></app-header>
        <section class="main-section p2-bg-color">
            <div class="main-section-wrapper">
                <img src="./assets/images/p2.jpg" alt="">
            </div>
        </section>
        <app-footer></app-footer>
    </div>
</template>

<script>
    import Header from './components/Shared/Header.vue';
    import Footer from './components/Shared/Footer.vue';

    export default {
        components : {
            'app-header' : Header,
            'app-footer' : Footer,
        }
    }
</script>

<style lang="scss">
    @import './assets/scss/_normalize.scss';
    @import './assets/scss/_base.scss';
</style>

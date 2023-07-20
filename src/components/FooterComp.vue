<template>
    <!-- footer -->
    <div class="footer center">
        <div class="footer__logo">
            <div class="header_logo">
                <img :src=footer.imgSrc :alt=footer.imgAlt>
                <a :href=footer.logoLink> {{ footer.logoText }}</a>
            </div>
            <p class="text"> {{ footer.text }}</p>
            <img :src=footer.imgIconFacebook :alt="footer.imgIconFacebookAlt">
        </div>

        <div class="footer__pages">
            <p class="text" v-for="footerLink in footer.footerLinks" :key="footerLink.id">
                {{ footerLink }}
            </p>
        </div>

        <div class="footer__contact">
            <p class="text" v-for="contactText in footer.contactTexts" :key="contactText.id">
                {{ contactText }}
            </p>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'FooterComp',

    data() {
        return {
        };
    },

    computed: {
        ...mapState(['footer'])
    },
    methods: {

    },
};
</script>

<style lang="scss" scoped>
$widthSite-laptop: 1201px;
$widthSite-laptop-center: $widthSite-laptop / 2;
$colorHeader: #292F36;
$colorText: #4D5053;
$colorWhite: #FFFFFF;
$colorBackground: #F4F0EC;
$colorCounterBlock: #CDA274;
$colorBlock: #F4F0EC;

* {
    margin: 0px;
    padding: 0px;
}

a {
    text-decoration: none;
}

.center {
    padding-left: calc(50% - $widthSite-laptop-center);
    padding-right: calc(50% - $widthSite-laptop-center);
}

.text {
    font-family: 'Jost';
    font-style: normal;
    font-weight: 400;
    font-size: 22px;
    line-height: 150%;
    letter-spacing: 0.01em;
    color: $colorText;
    text-align: center;
}

.header_logo {
    display: flex;
    align-items: center;
    gap: 10px;
}

.footer {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 96px;

    &__logo {
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-start;
        gap: 31px
    }

    &__pages {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }

    &__contact {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 20px;
    }
}
</style>
<template>
  <div>
    <BannerComp :item="bannerInfo"></BannerComp>
    <h3 class="heading  center textAlignLeft margin-bottom-30">Latest Post</h3>
    <div class="post center">
      <img src="../assets/Blog_post_img.png" alt="Blog_post_img">
      <div class="post__rigth">
        <h2 class="project__item-bottom-heading">Low Cost Latest Invented Interior Designing Ideas</h2>
        <p class="text">Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere
          in.Contrary
          to popular
          belief.</p>
        <p class="text">Lorem Ipsum is not simply random text. It has roots in a piece of classica.</p>
        <div class="project__item-bottom">

          <div class="project__item-bottom-left">
            <p class="text">26 December,2022</p>
          </div>
          <img src="../assets/icon.svg" alt="item.imgSrcIconAlt" class="project__item-bottom-icon">
        </div>
      </div>

    </div>

    <h3 class="heading  center textAlignLeft margin-bottom-30">Articles & News</h3>

    <!-- секция блога -->
    <div id="app" class="blog center">
      <!-- картинка блога -->
      <div class="blog__wrapper" v-for="item in items" :key="item.id">
        <div class="blog__item">
          <img :src="item.imgSrc" :alt="item.imgAlt" class="blog__item-img">
          <h3 class="blog__item-title">{{ item.itemTitle }}</h3>
          <div class="project__item-bottom">
            <div class="project__item-bottom-left">
              <p class="text">{{ item.itemText }}</p>
            </div>
            <img :src="item.imgSrcIcon" :alt="item.imgSrcIconAlt" class="project__item-bottom-icon">
          </div>
          <!-- кнопка-тэг -->
          <button class="blog__item-btn">{{ item.btnText }}</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import BannerComp from '@/components/BannerComp.vue';
import { mapState } from 'vuex';
export default {
  name: "BlogView",
  data() {
    return {
      items: [
        {
          id: 1,
          imgSrc: require('../assets/projectImg/Blog_Image01.png'),
          imgAlt: 'Blog_Image01',
          itemTitle: 'Let’s Get Solution For Building Construction Work',
          itemText: '26 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgSrcIconAlt: 'icon',
          btnText: 'Kitchan Design'
        },
        {
          id: 2,
          imgSrc: require('../assets/projectImg/Blog_Image02.png'),
          imgAlt: 'Blog_Image02',
          itemTitle: 'Low Cost Latest Invented Interior Designing',
          itemText: '22 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgSrcIconAlt: 'icon',
          btnText: 'Living Design'
        },
        {
          id: 3,
          imgSrc: require('../assets/projectImg/Blog_Image03.png'),
          imgAlt: 'Blog_Image03',
          itemTitle: 'Best For Any Office & Business Interior',
          itemText: '25 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgSrcIconAlt: 'icon',
          btnText: 'Interior Design'
        },
        {
          id: 4,
          imgSrc: require('../assets/projectImg/Blog_Image01.png'),
          imgAlt: 'Blog_Image01',
          itemTitle: 'Let’s Get Solution For Building Construction Work',
          itemText: '26 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgSrcIconAlt: 'icon',
          btnText: 'Kitchan Design'
        },
        {
          id: 5,
          imgSrc: require('../assets/projectImg/Blog_Image02.png'),
          imgAlt: 'Blog_Image02',
          itemTitle: 'Low Cost Latest Invented Interior Designing',
          itemText: '22 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgSrcIconAlt: 'icon',
          btnText: 'Living Design'
        },
        {
          id: 6,
          imgSrc: require('../assets/projectImg/Blog_Image03.png'),
          imgAlt: 'Blog_Image03',
          itemTitle: 'Best For Any Office & Business Interior',
          itemText: '25 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgSrcIconAlt: 'icon',
          btnText: 'Interior Design'
        }
      ]
    };
  },
  mounted() {
  },
  methods: {},
  computed: {
    ...mapState(['bannerInfo'])
  },
  components: { BannerComp }
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

.heading {
    font-family: 'DM Serif Display';
    font-style: normal;
    font-weight: 400;
    font-size: 50px;
    line-height: 125%;
    color: $colorHeader;
    text-align: center;
}

.caption {
    display: flex;
    margin-left: 232px;
    margin-right: 232px;
    margin-bottom: 96px;
    gap: 8px;
    flex-wrap: wrap;
    justify-content: center;
}

.intro {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    border-radius: 37px 37px 0px 0px;
    background: $colorWhite;
    top: 41%;
    left: 35%;
    padding: 41px 78px;


}
// выравнивание текста по левому краю
.textAlignLeft {
    text-align: left;
}

// отступ нижний 30px
.margin-bottom-30 {
margin-bottom: 30px;
}

.header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 44px;
    margin-bottom: 57px;

    &_logo {
        display: flex;
        align-items: center;
        gap: 10px;

        & a {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 40px;
            line-height: 125%;
            color: $colorHeader
        }
    }

    &_menubar {
        display: flex;
        align-items: center;
        gap: 45px;

        & a {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 20px;
            line-height: 125%;
            color: $colorHeader;
        }
    }

}

.banner {
    position: relative;
    margin-bottom: 96px;

    & img {
        max-width: 100%;
        height: auto;

    }

    &__blog-img {
        width: 100%;
    }

    &_sub-content {
        position: absolute;
        top: 208px;
        margin: 52px;

        width: 434px;
        display: flex;
        flex-wrap: wrap;
        gap: 15px;

        &_title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 65px;
            line-height: 125%;
        }

        &_btn {
            background: #292F36;
            box-shadow: 0px 10px 20px rgba(192, 192, 192, 0.35);
            border-radius: 18px;
            padding: 26px 49px;
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            gap: 10px;

            & p {
                font-family: 'Jost';
                font-style: normal;
                font-weight: 600;
                font-size: 18px;
                line-height: 125%;
                letter-spacing: 0.02em;
                color: $colorWhite;
            }

        }
    }
}

.project {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    gap: 104px;
    margin-bottom: 96px;

    &__item {
        display: flex;
        flex-direction: column;
        gap: 28px;

        &-bottom {
            display: flex;
            justify-content: space-between;
            align-items: center;

            &-left {
                display: flex;
                flex-direction: column;
                gap: 4px;
            }

            &-heading {
                font-family: 'DM Serif Display';
                font-style: normal;
                font-weight: 400;
                font-size: 25px;
                line-height: 125%;
                color: $colorHeader;
            }

        }
    }
}

.wrapper {
    background-color: $colorBackground;
    margin-bottom: 96px;
}

.counter {
    display: flex;
    padding-top: 151px;
    padding-bottom: 151px;

    &__block {
        display: flex;
        padding-right: 60px;
        padding-left: 60px;
        border-right: 1px solid #CDA274;
        flex-wrap: wrap;
        justify-content: center;

        &-title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 85px;
            line-height: 125%;
            color: $colorCounterBlock;
        }

        &-text {
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 22px;
            line-height: 150%;
            color: $colorText;
        }
    }
}

.withoutLine {
    border: none;
}


.blog {
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 1fr 1fr;
    margin-bottom: 96px;


    &__wrapper {
        border-radius: 45px 45px 0px 0px;
        border: 1px solid #EAEAEA;
        padding: 20px;

        :hover {
            background: $colorBlock;
        }
    }

    &__item {
        position: relative;
        display: flex;
        flex-direction: column;

        &-title {
            font-family: 'DM Serif Display';
            font-style: normal;
            font-weight: 400;
            font-size: 30px;
            line-height: 125%;
            color: $colorHeader;
            width: 305px;
            margin-top: 30px;
            margin-bottom: 30px;
        }

        &-btn {
            position: absolute;
            background: $colorWhite;
            border-radius: 8px 8px 8px 0px;
            font-family: 'Jost';
            font-style: normal;
            font-weight: 400;
            font-size: 16px;
            line-height: 150%;
            color: $colorText;
            padding: 5px;
            top: 240px;
            left: 21px;

        }
    }
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

.post {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin-bottom: 150px;

    &__rigth {
        display: flex;
        flex-direction: column;
        gap: 40px;
    }
}
</style>

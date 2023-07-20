import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    header: {
      imgSrc: require('../assets/Logo.svg'),
      imgAlt: 'logotip',
      logoLink: '#',
      logoText: 'Interno'
    },
    footer:
    {
      imgSrc: require('../assets/Logo.svg'),
      imgAlt: 'logo',
      logoLink: '#',
      logoText: 'Interno',
      text: 'It is a long established fact that a reader will be distracted lookings.',
      imgIconFacebook: require('../assets/icon_facebook.svg'),
      imgIconFacebookAlt: 'icon_facebook',
      footerLinks: ['Pages', 'Home', 'Project', 'Blog'],
      contactTexts: ['Contact', '55 East Birchwood Ave. Brooklyn, New York 11201', 'contact@interno.com', '8(800) 999 - 000']
    },
    homeView:
    {
      banner: {
        imgSrc: require('../assets/Banner.jpg'),
        imgAlt: 'Banner',
        title: 'Let Your Home Be Unique',
        text: 'There are many variations of the passages of lorem Ipsum fromavailable, majority.',
        imgButton: require('../assets/Vector.svg'),
        imgAltButton: 'Vector'
      },
      projectItems: [
        {
          imgSrc: require('../assets/projectImg/Image01.png'),
          imgAlt: 'Image01',
          heading: 'Modern Kitchan',
          text: 'Decor / Artchitecture',
          imgSrcIcon: require('../assets/icon.svg'),
          imgAltIcon: 'icon'
        },
        {
          imgSrc: require('../assets/projectImg/Image02.png'),
          imgAlt: 'Image02',
          heading: 'Modern Kitchan',
          text: 'Decor / Artchitecture',
          imgSrcIcon: require('../assets/icon.svg'),
          imgAltIcon: 'icon'
        },
        {
          imgSrc: require('../assets/projectImg/Image03.png'),
          imgAlt: 'Image03',
          heading: 'Modern Kitchan',
          text: 'Decor / Artchitecture',
          imgSrcIcon: require('../assets/icon.svg'),
          imgAltIcon: 'icon'
        },
        {
          imgSrc: require('../assets/projectImg/Image04.png'),
          imgAlt: 'Image04',
          heading: 'Modern Kitchan',
          text: 'Decor / Artchitecture',
          imgSrcIcon: require('../assets/icon.svg'),
          imgAltIcon: 'icon'
        },

      ],

      blogItems: [
        {
          imgSrc: require('../assets/projectImg/Blog_Image01.png'),
          imgAlt: 'Blog_Image01',
          title: 'Let’s Get Solution For Building Construction Work',
          date: '26 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgAltIcon: 'icon',
          btnText: 'Kitchan Design'
        },
        {
          imgSrc: require('../assets/projectImg/Blog_Image02.png'),
          imgAlt: 'Blog_Image02',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgAltIcon: 'icon',
          btnText: 'Living Design'
        },
        {
          imgSrc: require('../assets/projectImg/Blog_Image03.png'),
          imgAlt: 'Blog_Image03',
          title: 'Low Cost Latest Invented Interior Designing Ideas.',
          date: '22 December,2022',
          imgSrcIcon: require('../assets/icon.svg'),
          imgAltIcon: 'icon',
          btnText: 'Interior Design'
        },

      ]
    },
    bathrooms: [
      {
        id: 1,
        imgSrc: require('../assets/bathroom/bathroom_1.jpg'),
        altSrc: 'bathroom_1',
        title: 'Modern Bathroom',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 2,
        imgSrc: require('../assets/bathroom/bathroom_2.jpg'),
        altSrc: 'bathroom_2',
        title: 'Modern Bathroom',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 3,
        imgSrc: require('../assets/bathroom/bathroom_3.jpg'),
        altSrc: 'bathroom_3',
        title: 'Modern Bathroom',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
    ],
    bedrooms: [
      {
        id: 1,
        imgSrc: require('../assets/bedroom/bedroom_1.png'),
        altSrc: 'bedroom_1',
        title: 'Modern Bedroom',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 2,
        imgSrc: require('../assets/bedroom/bedroom_2.png'),
        altSrc: 'bedroom_2',
        title: 'Modern Bedroom',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 3,
        imgSrc: require('../assets/bedroom/bedroom_3.png'),
        altSrc: 'bedroom_3',
        title: 'Modern Bedroom',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 4,
        imgSrc: require('../assets/bedroom/bedroom_4.png'),
        altSrc: 'bedroom_4',
        title: 'Modern Bedroom',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
    ],
    kitchens: [
      {
        id: 1,
        imgSrc: require('../assets/kitchen/kitchen_1.jpg'),
        altSrc: 'kitchen_1',
        title: 'Modern Kitchen',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 2,
        imgSrc: require('../assets/kitchen/kitchen_2.jpeg'),
        altSrc: 'kitchen_2',
        title: 'Modern Kitchen',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },

    ],
    livingAreas: [
      {
        id: 1,
        imgSrc: require('../assets/livingArea/livingArea_1.jpg'),
        altSrc: 'livingArea_1',
        title: 'Modern Living Area',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 2,
        imgSrc: require('../assets/livingArea/livingArea_2.jpg'),
        altSrc: 'livingArea_2',
        title: 'Modern Living Area',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 3,
        imgSrc: require('../assets/livingArea/livingArea_3.jpg'),
        altSrc: 'livingArea_3',
        title: 'Modern Living Area',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 4,
        imgSrc: require('../assets/livingArea/livingArea_4.jpg'),
        altSrc: 'livingArea_4',
        title: 'Modern Living Area',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
      {
        id: 5,
        imgSrc: require('../assets/livingArea/livingArea_5.jpg'),
        altSrc: 'livingArea_5',
        title: 'Modern Living Area',
        text: 'Decor / Artchitecture',
        imgIconSrc: require('../assets/icon.svg'),
        imgIconAlt: 'icon'
      },
    ],
    bannerInfo: {
      imgSrc: require('../assets/Banner_blog.jpg'),
      altSrc: 'banner',
      title: 'Articles & News',
      text: 'Home / Blog',
    }


  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})

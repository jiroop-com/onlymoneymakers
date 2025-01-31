/**
 * 另一个落地页主题
 */
const CONFIG = {
  // 默认只展示Logo文字，如果设置了logo图片，会在文字左侧显示图标
  STARTER_LOGO: '', // 普通logo图片 示例：/images/starter/logo/logo.svg
  STARTER_LOGO_WHITE: '', // 透明底浅色logo 示例： /images/starter/logo/logo-white.svg

  // MENU ， 菜单部分不在此处配置，请在Notion数据库中添加MENU

  // 英雄区块导航
  STARTER_HERO_ENABLE: true, // 开启英雄区
  STARTER_HERO_TITLE_1: 'Your OnlyFans Success Starts Here', // 英雄区文字
  STARTER_HERO_TITLE_2:
    'Empower your OnlyFans journey with expert strategies, marketing, and resources at OnlyMoneyMakers.', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  STARTER_HERO_BUTTON_1_TEXT: 'Start your journey now!', // 英雄区按钮
  STARTER_HERO_BUTTON_1_URL: 'https://onlymoneymakers.com/start', // 英雄区按钮
  STARTER_HERO_BUTTON_2_TEXT: 'Join our Community', // 英雄区按钮
  STARTER_HERO_BUTTON_2_URL:
    'https://discord.com/servers/onlymoneymakers-community', // 英雄区按钮
  STARTER_HERO_BUTTON_2_ICON: null, // 英雄区按钮2的图标，不需要则留空

  STARTER_HERO_PREVIEW_IMAGE: 'https://www.youtube.com/embed/bK67jubsjQc', // 产品预览图 ，默认读取public目录下图片
  STARTER_REVENUE_SLIDER_ENABLE: true,

  // 顶部右侧导航暗流
  STARTER_NAV_BUTTON_1_TEXT: 'Services',
  STARTER_NAV_BUTTON_1_URL: '/services',

  STARTER_NAV_BUTTON_2_TEXT: 'Join Now!',
  STARTER_NAV_BUTTON_2_URL: 'https://onlymoneymakers.com/join',

  // 特性区块
  STARTER_FEATURE_ENABLE: true, // 特性区块开关
  STARTER_FEATURE_TITLE: 'Our Services', // 特性
  STARTER_FEATURE_TEXT_1:
    'Maximize your OnlyFans success with our expert services.', // 特性
  STARTER_FEATURE_TEXT_2: null, // 特性

  STARTER_FEATURE_1_TITLE_1: 'Content Strategy', // 特性1
  STARTER_FEATURE_1_TEXT_1:
    'Custom strategies to grow your fanbase and earnings!', // 特性1
  STARTER_FEATURE_1_BUTTON_TEXT: 'Learn More', // 特性1
  STARTER_FEATURE_1_BUTTON_URL: 'https://onlymoneymakers.com/content-strategy', // 特性1

  STARTER_FEATURE_2_TITLE_1: 'Marketing & Monetization', // 特性2
  STARTER_FEATURE_2_TEXT_1:
    'Expert marketing tactics to boost your income and visibility.', // 特性2
  STARTER_FEATURE_2_BUTTON_TEXT: 'Learn More', // 特性2
  STARTER_FEATURE_2_BUTTON_URL:
    'https://onlymoneymakers.com/monetization-marketing', // 特性2

  STARTER_FEATURE_3_TITLE_1: 'Coaching & Support', // 特性3
  STARTER_FEATURE_3_TEXT_1:
    'One-on-one coaching to improve your content and performance.', // 特性3
  STARTER_FEATURE_3_BUTTON_TEXT: 'Learn More', // 特性3
  STARTER_FEATURE_3_BUTTON_URL: 'https://onlymoneymakers.com/coaching-support', // 特性3

  STARTER_FEATURE_4_TITLE_1: 'Challenges & Engagement', // 特性4
  STARTER_FEATURE_4_TEXT_1:
    'Join challenges to motivate growth and engage with fans!', // 特性4
  STARTER_FEATURE_4_BUTTON_TEXT: 'Learn More', // 特性4
  STARTER_FEATURE_4_BUTTON_URL: 'https://onlymoneymakers.com/challenges', // 特性4

  // 首页ABOUT区块
  STARTER_ABOUT_ENABLE: true, // ABOUT区块开关
  STARTER_ABOUT_TITLE: 'Who are we?',
  STARTER_ABOUT_TEXT:
    'Welcome to OnlyMoneyMakers.com, the leading OnlyFans agency with a reach of over XXX million and six-figure revenue generation. Our agency specializes in empowering content creators to maximize their earnings and build a loyal fanbase. With expert guidance in content strategy, marketing, and social media, we ensure our models achieve sustainable success. Join the hundreds of talented creators we’ve helped elevate to the top of the OnlyFans platform.',
  STARTER_ABOUT_BUTTON_TEXT: 'Join the Movement',
  STARTER_ABOUT_BUTTON_URL: 'https://onlymoneymakers.com/about',
  STARTER_ABOUT_IMAGE_1: '/images/starter/about/about-image-01.jpg',
  STARTER_ABOUT_IMAGE_2: '/images/starter/about/about-image-02.jpg',
  STARTER_ABOUT_TIPS_1: 'XXX Million',
  STARTER_ABOUT_TIPS_2: 'Reach',
  STARTER_ABOUT_TIPS_3: '6-Figure Revenue',

  // 首页价格区块
  STARTER_PRICING_ENABLE: false, // 价格区块开关
  STARTER_PRICING_TITLE: 'Price List',
  STARTER_PRICING_TEXT_1: null,
  STARTER_PRICING_TEXT_2: null,

  STARTER_PRICING_1_TITLE: 'Member Tier',
  STARTER_PRICING_1_PRICE: 'FREE',
  STARTER_PRICING_1_PRICE_CURRENCY: null,
  STARTER_PRICING_1_PRICE_PERIOD: null,
  STARTER_PRICING_1_HEADER: 'Access features',
  STARTER_PRICING_1_FEATURES: 'Chat Access, Unlocked Content', // 英文逗号隔开
  STARTER_PRICING_1_BUTTON_TEXT: 'Start Now',
  STARTER_PRICING_1_BUTTON_URL:
    'https://whop.com/checkout/plan_gEhXRPiJAAc8G?d2c=true',

  STARTER_PRICING_2_TAG: 'Popular',
  STARTER_PRICING_2_TITLE: 'Premium Member Tier',
  STARTER_PRICING_2_PRICE: '50',
  STARTER_PRICING_2_PRICE_CURRENCY: '$',
  STARTER_PRICING_2_PRICE_PERIOD: 'Monthly',
  STARTER_PRICING_2_HEADER: 'Access all features',
  STARTER_PRICING_2_FEATURES:
    'Chat Access,Courses,Digital Content,Early Content,Unlocked Content', // 英文逗号隔开
  STARTER_PRICING_2_BUTTON_TEXT: 'Join Now!',
  STARTER_PRICING_2_BUTTON_URL:
    'https://whop.com/checkout/plan_ABJqqwwzBoHc2?d2c=true',

  STARTER_PRICING_3_TITLE: 'Exclusive Member Tier',
  STARTER_PRICING_3_PRICE: '500',
  STARTER_PRICING_3_PRICE_CURRENCY: '$',
  STARTER_PRICING_3_PRICE_PERIOD: 'Monthly',
  STARTER_PRICING_3_HEADER: 'Access all features',
  STARTER_PRICING_3_FEATURES:
    'Chat Access,Courses,Digital Content,Early Content,Coaching,Unlocked Content', // 英文逗号隔开
  STARTER_PRICING_3_BUTTON_TEXT: 'Sign Up!',
  STARTER_PRICING_3_BUTTON_URL:
    'https://whop.com/checkout/plan_AOydhqLoQ7ks1?d2c=true',

  // 首页用户测评区块
  STARTER_TESTIMONIALS_ENABLE: true, // 测评区块开关
  STARTER_TESTIMONIALS_TITLE: 'Testimonials',
  STARTER_TESTIMONIALS_TEXT_1: 'What Our Members Are Saying',
  STARTER_TESTIMONIALS_TEXT_2: null,
  STARTER_TESTIMONIALS_STAR_ICON: '/images/starter/testimonials/icon-star.svg', // 评分图标

  STARTER_TESTIMONIALS_ITEMS: [
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Joining OnlyMoneyMakers was the best decision for my online business. The strategies and tools shared here helped me triple my earnings in just a few months. The community is full of serious entrepreneurs who push each other to succeed!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://onlymoneymakers.com/images/testimonials/avatar1.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Lisa M.',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Entrepreneur',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://onlymoneymakers.com'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'Before I joined, I was struggling to monetize my content properly. Thanks to the insider tips and coaching from OnlyMoneyMakers, I finally cracked the code to consistent revenue. 10/10 recommend!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://onlymoneymakers.com/images/testimonials/avatar2.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Jake T.',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Content Creator',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://onlymoneymakers.com'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        "This platform is a goldmine! The resources, templates, and mentorship available have taken my side hustle to a full-time income. If you're serious about making money online, this is the place to be!",
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://onlymoneymakers.com/images/testimonials/avatar3.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Sarah P.',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Online Marketer',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://onlymoneymakers.com'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'I used to waste time on outdated methods, but OnlyMoneyMakers keeps me ahead of the game with cutting-edge tactics. My profits have never been higher, and I owe it all to this incredible community!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://onlymoneymakers.com/images/testimonials/avatar4.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Chris D.',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'E-Commerce Seller',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://onlymoneymakers.com'
    },
    {
      STARTER_TESTIMONIALS_ITEM_TEXT:
        'From passive income streams to high-ticket sales strategies, OnlyMoneyMakers covers it all. The private network alone is worth the price. If you’re not here, you’re leaving money on the table!',
      STARTER_TESTIMONIALS_ITEM_AVATAR:
        'https://onlymoneymakers.com/images/testimonials/avatar5.png',
      STARTER_TESTIMONIALS_ITEM_NICKNAME: 'Emma R.',
      STARTER_TESTIMONIALS_ITEM_DESCRIPTION: 'Affiliate Marketer',
      STARTER_TESTIMONIALS_ITEM_URL: 'https://onlymoneymakers.com'
    }
  ],

  // FAQ Module for OnlyMoneyMaker.com OnlyFans Agency
  STARTER_FAQ_ENABLE: true, // FAQ module toggle
  STARTER_FAQ_TITLE: 'Frequently Asked Questions (FAQ)',
  STARTER_FAQ_TEXT_1: 'Have questions? Find your answers here.',
  STARTER_FAQ_TEXT_2:
    'These FAQs provide clarity on how OnlyMoneyMaker.com helps creators maximize their earnings and grow their audience.',

  STARTER_FAQ_1_QUESTION: 'How does OnlyMoneyMaker.com help OnlyFans creators?',
  STARTER_FAQ_1_ANSWER:
    'We provide full management services, including content strategy, audience growth, marketing, and monetization optimization. Our goal is to help creators increase their earnings while focusing on content creation.',

  STARTER_FAQ_2_QUESTION: 'Will I have full control over my OnlyFans account?',
  STARTER_FAQ_2_ANSWER:
    'To ensure maximum efficiency and growth, our team handles key aspects of account management, including messaging, promotions, and monetization strategies. Creators still have input on content direction and branding.',

  STARTER_FAQ_3_QUESTION:
    'How does revenue sharing work with OnlyMoneyMaker.com?',
  STARTER_FAQ_3_ANSWER:
    'We operate on a fair revenue-sharing model, ensuring both creators and our team benefit from growth. The exact details are discussed individually to align with each creator’s goals.',

  STARTER_FAQ_4_QUESTION: 'How do I get started with OnlyMoneyMaker.com?',
  STARTER_FAQ_4_ANSWER:
    'Getting started is easy! Apply through our website, and our team will review your profile. If selected, we’ll reach out to discuss the next steps and create a customized growth strategy for you.',

  // Team Members Section for OnlyMoneyMakers.com
  STARTER_TEAM_ENABLE: true, // Enable Team Members Section
  STARTER_TEAM_TITLE: 'Meet the Team',
  STARTER_TEAM_TEXT_1: 'The Experts Behind OnlyMoneyMakers.com',
  STARTER_TEAM_TEXT_2:
    'Our dedicated team specializes in OnlyFans account growth, monetization, and marketing strategies, helping creators maximize their success.',

  // Team Members
  STARTER_TEAM_ITEMS: [
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/account-manager.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Alex Carter',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Senior Account Manager'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/marketing-specialist.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Jessica Lane',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Marketing & Growth Specialist'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/content-strategist.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Michael Reed',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Content Strategy & Engagement'
    },
    {
      STARTER_TEAM_ITEM_AVATAR: '/images/team/brand-manager.png',
      STARTER_TEAM_ITEM_NICKNAME: 'Sophia Hayes',
      STARTER_TEAM_ITEM_DESCRIPTION: 'Brand & Social Media Manager'
    }
  ],

  // Blog Section for OnlyMoneyMakers.com
  STARTER_BLOG_ENABLE: true, // Enable Blog Section
  STARTER_BLOG_TITLE: 'Our Blog',
  STARTER_BLOG_COUNT: 3, // Show the latest 3 blog posts
  STARTER_BLOG_TEXT_1: 'Latest Updates',
  STARTER_BLOG_TEXT_2:
    'Stay informed with insights on OnlyFans growth, marketing strategies, and success stories from OnlyMoneyMakers.com.',

  // Contact Section
  STARTER_CONTACT_ENABLE: true, // Enable Contact Section
  STARTER_CONTACT_TITLE: 'Contact Us',
  STARTER_CONTACT_TEXT: 'Reach out for support, collaborations, or inquiries.',
  STARTER_CONTACT_LOCATION_TITLE: 'Our Reach',
  STARTER_CONTACT_LOCATION_TEXT: 'Worldwide',
  STARTER_CONTACT_EMAIL_TITLE: 'Need Assistance?',
  STARTER_CONTACT_EMAIL_TEXT: 'mail@onlymoneymakers.com',

  // 嵌入外部表单
  STARTER_CONTACT_MSG_EXTERNAL_URL:
    'https://noteforms.com/forms/noteforms-as9gc7', // 基于NoteForm创建，将留言数据存在Notion中
  //   自定义留言表单，以下几个配置暂时废弃
  //   STARTER_CONTACT_MSG_TITLE: '向我们留言',
  //   STARTER_CONTACT_MSG_NAME: '姓名',
  //   STARTER_CONTACT_MSG_EMAIL: '邮箱地址',
  //   STARTER_CONTACT_MSG_PHONE: '联系电话',
  //   STARTER_CONTACT_MSG_TEXT: '消息内容',
  //   STARTER_CONTACT_MSG_SEND: '发送消息',
  //   STARTER_CONTACT_MSG_THANKS: '感谢您的留言',

  // 合作伙伴的图标
  STARTER_BRANDS_ENABLE: false, // 合作伙伴开关
  STARTER_BRANDS: [
    {
      IMAGE: '/images/starter/brands/graygrids.svg',
      IMAGE_WHITE: '/images/starter/brands/graygrids-white.svg',
      URL: 'https://graygrids.com/',
      TITLE: 'graygrids'
    },
    {
      IMAGE: '/images/starter/brands/lineicons.svg',
      IMAGE_WHITE: '/images/starter/brands/lineicons-white.svg',
      URL: 'https://lineicons.com/',
      TITLE: 'lineicons'
    },
    {
      IMAGE: '/images/starter/brands/uideck.svg',
      IMAGE_WHITE: '/images/starter/brands/uideck-white.svg',
      URL: 'https://uideck.com/',
      TITLE: 'uideck'
    },
    {
      IMAGE: '/images/starter/brands/ayroui.svg',
      IMAGE_WHITE: '/images/starter/brands/ayroui-white.svg',
      URL: 'https://ayroui.com/',
      TITLE: 'ayroui'
    },
    {
      IMAGE: '/images/starter/brands/tailgrids.svg',
      IMAGE_WHITE: '/images/starter/brands/tailgrids-white.svg',
      URL: '"https://tailgrids.com/',
      TITLE: 'tailgrids'
    }
  ],

  STARTER_FOOTER_SLOGAN: '"Stay Focused, Stay Elevated, Mindset."',

  // Footer Menu Groups
  STARTER_FOOTER_LINK_GROUP: [
    {
      TITLE: 'About Us',
      LINK_GROUP: [
        { TITLE: 'Homepage', URL: '/#home' },
        { TITLE: 'Contact Us', URL: '/contact-us' },
        { TITLE: 'Join Us', URL: '#' }, // Placeholder
        { TITLE: 'Store', URL: '#' } // Placeholder
      ]
    },
    {
      TITLE: 'Social Media',
      LINK_GROUP: [
        {
          TITLE: 'Instagram',
          URL: 'https://www.instagram.com/onlymoneymakers/'
        },
        { TITLE: 'Twitter', URL: '#' }, // Placeholder
        { TITLE: 'TikTok', URL: '#' } // Placeholder
      ]
    },
    {
      TITLE: 'Websites',
      LINK_GROUP: [
        { TITLE: 'Blog', URL: '#' }, // Placeholder
        { TITLE: 'Resources', URL: '#' }, // Placeholder
        { TITLE: 'Community', URL: '#' } // Placeholder
      ]
    }
  ],

  STARTER_FOOTER_BLOG_LATEST_TITLE: 'Latest Articles',

  STARTER_FOOTER_PRIVACY_POLICY_TEXT: 'Privacy Policy',
  STARTER_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: 'Legal Disclaimer',
  STARTER_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: 'Terms of Service',
  STARTER_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  STARTER_404_TITLE:
    "We seem to be unable to find the page you're looking for.",
  STARTER_404_TEXT:
    "Sorry! The page you are looking for doesn't exist. It may have been moved or deleted.",
  STARTER_404_BACK: 'Back to Homepage',

  STARTER_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  STARTER_POST_REDIRECT_URL: 'https://jiroop.com', // 重定向域名
  STARTER_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_STARTER_NEWSLETTER || true // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG

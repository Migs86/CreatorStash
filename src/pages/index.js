import React from "react";
import HeroSection from "./../components/HeroSection";
import Categories from "./../components/Categories";
import UseCases from "./../components/UseCases";
import NewsletterSection from "./../components/NewsletterSection";
import ContentCardsSection from "./../components/ContentCardsSection";
import UsersSection from "./../components/UsersSection";

function IndexPage(props) {
  const items = {
    records: [
      {
        id: "recF9qGJ48bd6oFRn",
        fields: {
          Name: "2 Colors",
          Details: "2 Color Combinations\n",
          Category: ["Color"],
          Website: "https://2colors.colorion.co/",
          "Use Case": ["Inspiration"],
          Description: "Quickly browse 2-color combinations.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          Cost: ["Free"],
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:33.000Z",
      },
      {
        id: "reccgVhiqkKN7LASS",
        fields: {
          Name: "Amrit Pal Design",
          Details: "Series of iconic rooms illustrated in quarantine. ",
          Category: ["Illustration"],
          Website: "https://amritpaldesign.com/3d-rooms-project",
          "Use Case": ["Inspiration", "Downloads"],
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review:
            "Checking out Amrit's work will make you seriously contemplate micro-dosing. Mind-warping 3D illustrations, icons and characters.",
          "Top Pick": true,
          Cost: ["One-Time Fee", "Free"],
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:49:24.000Z",
      },
      {
        id: "recYNpm9TBUQcQwuw",
        fields: {
          Name: "Muzil",
          Details: "Discover color palettes and preview them on ",
          Category: ["Color"],
          Website: "https://colors.muz.li/",
          "Use Case": ["Inspiration"],
          Description:
            "Discover color palettes and preview them in a mock user interface.",
          Review:
            "The stand-out feature is the ability to preview the color scheme on a mock dashboard.\nIt's easy to use color palette generator from the makers of InVision prototyping software.",
          "Top Pick": true,
          screenshots: [
            {
              id: "attx3wmRzOnIXrNNU",
              url:
                "https://dl.airtable.com/.attachments/11253223512fa6a1b76a52e70f531a16/ecb43ea6/ScreenShot2021-01-31at4.23.56PM.png",
              filename: "full_screenshot_1.png",
              size: 1573537,
              type: "image/png",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/634ed09b38262d4a099b6ec9e39d01e4/525e0ff6",
                  width: 49,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/49ccc41b58668bcfa3456d552988e795/baad1f89",
                  width: 702,
                  height: 512,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/2c8e940096299b17f8ef5b987366a4f7/a2a902da",
                  width: 3000,
                  height: 3000,
                },
              },
            },
            {
              id: "attQcZ1btugiuo872",
              url:
                "https://dl.airtable.com/.attachments/133aec4a647d5e905622e7a8907aba95/b304ee63/full_screenshot_2.jpg",
              filename: "full_screenshot_2.jpg",
              size: 64573,
              type: "image/jpeg",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/19b8d4b331968b1d43821491f2de8910/afeaa9dc",
                  width: 58,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/f6d522d8f5588db775b91e37036b732a/ba875271",
                  width: 640,
                  height: 400,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/e335a2a2908205ee43bfa88523f8e509/d7a74242",
                  width: 3000,
                  height: 3000,
                },
              },
            },
          ],
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:17:38.000Z",
      },
      {
        id: "recUXHJBvTUWcVKwI",
        fields: {
          Name: "theforgesmith",
          Details: "300+ right mix of SVG icons for your project.\n",
          Category: ["Icons"],
          Website: "https://icons.theforgesmith.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:26:21.000Z",
      },
      {
        id: "recDGPRpp91zbqZXl",
        fields: {
          Name: "land-book",
          Details:
            "Design gallery with the best and most carefully collected websites. We help creatives find inspiration & motivation to do rad stuff.",
          Category: ["Landingpage"],
          Website: "https://land-book.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:24.000Z",
      },
      {
        id: "rec0LXFrbFdORSfFo",
        fields: {
          Name: "lawsofux",
          Details:
            "Users often perceive aesthetically pleasing design as design that’s more usable.\n\n",
          Category: ["Learn Design"],
          Website: "https://lawsofux.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:26:44.000Z",
      },
      {
        id: "reckK3I61Wx0yZQIJ",
        fields: {
          Name: "learnmobile",
          Details: "A curated list of mobile design resources\n",
          Category: ["Learn Design"],
          Website: "https://learnmobile.design/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:26:55.000Z",
      },
      {
        id: "recwiOCPHwe4rd99a",
        fields: {
          Name: "learnux",
          Details: "UI Design Tools\nVideo Courses\n",
          Category: ["Learn Design"],
          Website: "https://learnux.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:26:52.000Z",
      },
      {
        id: "recvqbCHXCiIpnzyd",
        fields: {
          Name: "lookup",
          Details:
            "Browse handpicked ui and ux design examples and find inspiration for your next website or app.\n",
          Category: ["Inspiration"],
          Website: "https://lookup.design/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:23.000Z",
      },
      {
        id: "recDC1XUj9ZXB4VSA",
        fields: {
          Name: "lukaszadam",
          Details:
            "Here you’ll find MIT licensed SVG illustration images in different shapes & styles. Completely free for commercial projects - no attribution required. Open Source Illustrations.\n\n",
          Category: ["Illustration"],
          Website: "https://lukaszadam.com/illustrations",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:51:14.000Z",
      },
      {
        id: "rec53TlsPF7dfuHBq",
        fields: {
          Name: "material",
          Details:
            "Create, share, and apply color palettes to your UI, as well as measure the accessibility level of any color combination",
          Category: ["Color"],
          Website: "https://material.io/resources/color/#!/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:08.000Z",
      },
      {
        id: "recGlSCkEjtZb7bPX",
        fields: {
          Name: "Mobbin ",
          Details:
            "Check out the hand-picked collection of latest mobile design patterns from apps that reflect the best in design.\n",
          Category: ["Inspiration"],
          Website: "https://mobbin.design.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:17:34.000Z",
      },
      {
        id: "recbv3CC86WVT1HHD",
        fields: {
          Name: "mobbin",
          Details:
            "Check out the hand-picked collection of latest mobile design patterns from apps that reflect the best in design.",
          Category: ["Inspiration", "Mobile"],
          Website: "https://mobbin.design/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:48:44.000Z",
      },
      {
        id: "recWbGmWj8BKAQUcZ",
        fields: {
          Name: "Overflow",
          Details:
            "The world's first user flow diagramming tool tailored for designers. Build and present beautiful user flow diagrams that tell a story.\n",
          Category: ["Prototyping "],
          Website: "https://overflow.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:25:25.000Z",
      },
      {
        id: "recNhS3NxHgBLQEic",
        fields: {
          Name: "Shopify Polaris",
          Details:
            "Our style guide helps us collaborate across disciplines to build a great experience for all of Shopify’s merchants.",
          Category: ["Design Systems"],
          Website: "https://polaris.shopify.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:23:48.000Z",
      },
      {
        id: "receEYAshdXKbzZXu",
        fields: {
          Name: "mesh-gradients",
          Details: "Free Mesh\nGradient Collection\n",
          Category: ["Color"],
          Website: "https://products.ls.graphics/mesh-gradients/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:38.000Z",
      },
      {
        id: "recwQZPlqgT1IwGe8",
        fields: {
          Name: "pttrns",
          Details:
            "Pttrns is the finest collection of design patterns, resources and inspiration.\n",
          Category: ["Inspiration"],
          Website: "https://pttrns.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:23.000Z",
      },
      {
        id: "recFU8m2Qf2iv9Lm7",
        fields: {
          Name: "shotstash",
          Details: "Free Stock Photos for Creative Professionals\n",
          Category: ["Stock Photos"],
          Website: "https://shotstash.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:00:50.000Z",
      },
      {
        id: "recVkrQ4jVNpicTKg",
        fields: {
          Name: "typespiration",
          Details:
            "Inspirational font combinations and color palettes free to use in your own designs.\n\n",
          Category: ["Font"],
          Website: "https://typespiration.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:05:13.000Z",
      },
      {
        id: "recTM295l4QV5tAI8",
        fields: {
          Name: "Abstrakt",
          Details:
            "Download our free and premium abstract illustrations for your next landing page, mobile app and presentation.\n",
          Category: ["Illustration"],
          Website: "https://www.abstrakt.design/",
          "Use Case": ["Inspiration"],
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:51:17.000Z",
      },
      {
        id: "rectT0BfAn9iyoWFh",
        fields: {
          Name: "Dribble ",
          Details:
            "Dribbble is where designers gain inspiration, feedback, community, and jobs and is your best resource to discover and connect with designers worldwide.\n",
          Category: ["Inspiration"],
          Website: "https://www.dribbble.com",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          screenshots: [
            {
              id: "attLmQNfcdJAcozuP",
              url:
                "https://dl.airtable.com/.attachments/e09fdf1177ea706ccb3f7d1535dce55c/404a83ee/dribbble_com_learn.png",
              filename: "dribbble_com_learn.png",
              size: 1596919,
              type: "image/png",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/a1254a0649675935f32d85a8a0c2a345/0e04acab",
                  width: 48,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/2600d92a898c89c9efa698725b242f14/ee77f547",
                  width: 683,
                  height: 512,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/989666ae597eb273070b1355c23dc3ba/90314d75",
                  width: 3000,
                  height: 3000,
                },
              },
            },
            {
              id: "attSGaJ8qTUxWYlpI",
              url:
                "https://dl.airtable.com/.attachments/a22cb1d9bbfa82c59ef78f4449b20beb/fc64605e/dribbble_com_.png",
              filename: "dribbble_com_.png",
              size: 1831749,
              type: "image/png",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/863d6971830ede467ec6da75349a912a/aa7147a2",
                  width: 48,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/1c9ad684b2d81e83ff2eac42368be3ce/454bf3f9",
                  width: 683,
                  height: 512,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/79b98b9649c1e4286f77c6b308eb2228/7b79d5f1",
                  width: 3000,
                  height: 3000,
                },
              },
            },
            {
              id: "attJeSSnuPta7QgiU",
              url:
                "https://dl.airtable.com/.attachments/b70d999fed9bd488cee8c4d838662bb3/544e5ca9/dribbble_com_shots_popular.png",
              filename: "dribbble_com_shots_popular.png",
              size: 2911038,
              type: "image/png",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/67dbe9ceb239ab7c3071fcd9fc0ee5c6/f149b691",
                  width: 48,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/882b1aafd1edd3dd9e2fb3ffcbe79542/fed3fece",
                  width: 683,
                  height: 512,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/63f2dc0073a88df7ccd1315be40606a4/377fd50f",
                  width: 3000,
                  height: 3000,
                },
              },
            },
          ],
          "Top Pick": true,
          "Use Case": ["Inspiration"],
          App: ["Figma", "Sketch", "Adobe XD"],
          Cost: ["Free"],
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:12:39.000Z",
      },
      {
        id: "rec7dpCBItYHYNgio",
        fields: {
          Name: "landingfolio",
          Details:
            "Landingfolio features the best landing page inspiration, templates, resources and examples on the web. Learn from a growing library of 1982 landing page ...\n",
          Category: ["Landingpage"],
          Website: "https://www.landingfolio.com/?offset=2",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:48:42.000Z",
      },
      {
        id: "rec5LwP1JUydOcuDq",
        fields: {
          Name: "lapa.ninja",
          Details:
            "The Best Landing Page Design Inspiration.\nLearn Design, Download Free Books & UI Kits\n",
          Category: ["Landingpage"],
          Website: "https://www.lapa.ninja/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:48:42.000Z",
      },
      {
        id: "recB03RLUQAC7i8zl",
        fields: {
          Name: "manypixels",
          Details:
            "Each week, discover royalty-free illustrations to power up your projects.",
          Category: ["Illustration"],
          Website: "https://www.manypixels.co/gallery/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:51:11.000Z",
      },
      {
        id: "recJQZ5F1l2tMTD6Z",
        fields: {
          Name: "Opendoodle ",
          Details:
            "A library of sketchy illustrations of people free for personal and commercial use.\n",
          Category: ["Illustration"],
          Website: "https://www.opendoodles.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:21:30.000Z",
      },
      {
        id: "reco2XQRARhs9tCSI",
        fields: {
          Name: "opendoodles",
          Details: "A Free Set of Sketchy Illustrations\n",
          Category: ["Illustration"],
          Website: "https://www.opendoodles.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:57:02.000Z",
      },
      {
        id: "rectRFPyPbRt3etqs",
        fields: {
          Name: "theiconof",
          Details:
            "Collection of 1100+ pixel perfect icons suitable for any  kind of project. All the symbols are available in most popular formats, including optimized webfont. Made with love.\n\n",
          Category: ["Icons"],
          Website: "https://www.theiconof.com/search",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:26:22.000Z",
      },
      {
        id: "recz2XFXT0DokVrK8",
        fields: {
          Name: "Typewolf",
          Details:
            "Typewolf helps designers choose the perfect font combination for their next design project—features web fonts in the wild, font recommendations and learning ...\n",
          Category: ["Font"],
          Website: "https://www.typewolf.com/",
          "Use Case": ["Inspiration"],
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          Featured: true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:25:21.000Z",
      },
      {
        id: "reclz75HYIr7mI7cB",
        fields: {
          Name: "Notion",
          Category: ["Productivity"],
          Website: "zz",
          "Use Case": ["Tools"],
          Description:
            "Notion is like the digital version of the color-coded 500-page notebook.  Oh, and pro-tip: it's the internet so you won't run out of pages.",
          Review: "People. I'm working on it, ok?",
          "Top Pick": true,
          Featured: true,
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-02-01T05:12:02.000Z",
      },
      {
        id: "recgQoonIyVsWBvYs",
        fields: {
          Name: "Colormind",
          Details:
            "Colormind is a color scheme generator that uses deep learning. It can learn color styles from photographs, movies, and popular art.",
          Category: ["Color"],
          Website: "http://colormind.io/",
          "Use Case": ["Inspiration"],
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          Cost: ["Free"],
          "Target Audience": ["Content Creator"],
          Rating: 4,
        },
        createdTime: "2021-01-03T13:12:27.000Z",
      },
      {
        id: "rec8OWAUO6jSVEPdd",
        fields: {
          Name: "Iconpark",
          Details:
            "IconPark gives access to more than 1,400 high-quality icons, and introduces an interface for customizing your icons.",
          Category: ["Icons"],
          Website: "http://iconpark.bytedance.com/official",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
          Cost: ["Free"],
          screenshots: [
            {
              id: "att9P4vCPtDCUKF04",
              url:
                "https://dl.airtable.com/.attachments/465a4462c63b50aec67b16c404307b88/bd075da9/iconpark_bytedance_com_.png",
              filename: "_iconpark_bytedance_com_.png",
              size: 711503,
              type: "image/png",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/0f358c8c7f8a176f8e34b27d257a9472/6cda73cc",
                  width: 48,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/c48b4f5e77b4b46a20080f842346929a/dd14dbce",
                  width: 683,
                  height: 512,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/2143c9c5fad5c6151e82294e3a7781ef/d4c2dc0c",
                  width: 3000,
                  height: 3000,
                },
              },
            },
            {
              id: "att7c0htrtQIdmjHx",
              url:
                "https://dl.airtable.com/.attachments/03aca7af63f2da32a461f711681fa3ca/7007888c/iconpark.bytedance.com_official.png",
              filename: "iconpark.bytedance.com_official.png",
              size: 355417,
              type: "image/png",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/eddd5829cee08ff84c80fd1de7f37d66/844fe975",
                  width: 48,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/66f7601b7cc11aea5de3568aec319cfb/54a5be81",
                  width: 683,
                  height: 512,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/092ebc84011f62cc04353a5554028607/d59a81ab",
                  width: 3000,
                  height: 3000,
                },
              },
            },
          ],
          "Use Case": ["Downloads"],
        },
        createdTime: "2021-01-03T01:13:48.000Z",
      },
      {
        id: "recg4bl3jnUYcAiMc",
        fields: {
          Name: "khroma",
          Details:
            "Khroma uses AI to learn which colors you like and creates limitless palettes for you to discover, search, and save.\n",
          Category: ["Color"],
          Website: "http://khroma.co/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
          Cost: ["Free"],
          screenshots: [
            {
              id: "attGBK0u0YtaVohFx",
              url:
                "https://dl.airtable.com/.attachments/6620a097b37d610e06d574c98d090cb7/e0105303/khroma_co_.png",
              filename: "khroma_co_.png",
              size: 283642,
              type: "image/png",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/ce87ade17d9d4c05791c0e3dd55af7f4/8dc4309e",
                  width: 48,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/76e068ea261905c4bffb1866bd8eebd2/cd3e332c",
                  width: 683,
                  height: 512,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/0a6f214e54e69f6ab06dcfaf241cca3b/241a66cf",
                  width: 3000,
                  height: 3000,
                },
              },
            },
            {
              id: "attKKuDs9KYjYlbBC",
              url:
                "https://dl.airtable.com/.attachments/fdba145d68382606d2b0d87178be8037/d13d7576/khroma_co_train_.png",
              filename: "khroma_co_train_.png",
              size: 212838,
              type: "image/png",
              thumbnails: {
                small: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/f3957a113f348788ebdfd2d358474ec0/22523f9c",
                  width: 48,
                  height: 36,
                },
                large: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/642b444bc8a31f73ddd56cf98a189c0c/48d14c2d",
                  width: 683,
                  height: 512,
                },
                full: {
                  url:
                    "https://dl.airtable.com/.attachmentThumbnails/7807a49811c8df90612d36c69fdd1850/b6a61602",
                  width: 3000,
                  height: 3000,
                },
              },
            },
          ],
          "Use Case": ["Inspiration"],
        },
        createdTime: "2021-01-03T13:12:29.000Z",
      },
      {
        id: "recaum4VRDfBtMLeK",
        fields: {
          Name: "Font Inspiration",
          Details: "Be better at typography.\n",
          Category: ["Font"],
          Website: "http://typ.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:25:23.000Z",
      },
      {
        id: "rec9hJzsYNMjlHNV0",
        fields: {
          Name: "figmafreebi",
          Details:
            "Figma Freebies is a collection of design resources for the figma community.\n",
          Category: ["Freebies"],
          Website: "http://www.figmafreebi.es/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:21.000Z",
      },
      {
        id: "recXn3kPYaZFR1RbU",
        fields: {
          Name: "Absurd Design",
          Details: "absurd illustrations that make sense",
          Category: ["Illustration"],
          Website: "https://absurd.design/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:55:00.000Z",
      },
      {
        id: "recTfsbm68paSQ5ts",
        fields: {
          Name: "Airbnb Design",
          Details:
            "Building a Visual Language\nBehind the scenes of our new design system\n",
          Category: ["Design Systems"],
          Website: "https://airbnb.design/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:23:45.000Z",
      },
      {
        id: "recqWzOl2vgdHizsn",
        fields: {
          Name: "Eva Icons",
          Details:
            "Eva Icons is a pack of 480 delightful icons available for free. Download Eva Icons to use them in your products for mobile and web apps.",
          Category: ["Icons"],
          Website: "https://akveo.github.io/eva-icons/#/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:45.000Z",
      },
      {
        id: "recP76u5fB3OOuaJL",
        fields: {
          Name: "Animockup",
          Details:
            "Create your free animated product mockup with Animockup. Make videos and animated GIFs for social media, landing pages, Dribbble, and more.",
          Category: ["Mockups"],
          Website: "https://animockup.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:59:53.000Z",
      },
      {
        id: "recXmWNvZZLAaWFPE",
        fields: {
          Name: "Archetype",
          Details:
            "Looking for a lovely, compatible pair of fonts for your project? Use this tool to find them.\n\n",
          Category: ["Font"],
          Website: "https://archetypeapp.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:05:24.000Z",
      },
      {
        id: "recaoGUc0DXLTtjDS",
        fields: {
          Name: "Atlassian Design",
          Details:
            "Use Atlassian’s end-to-end design language to create straightforward and beautiful experiences.",
          Category: ["Design Systems"],
          Website: "https://atlassian.design/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:23:48.000Z",
      },
      {
        id: "recxiELDMSRyf44bb",
        fields: {
          Name: "Avataaars",
          Details: "Mix & Match Avatars with a Sketch library\n",
          Category: ["Illustration"],
          Website: "https://avataaars.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:57:01.000Z",
      },
      {
        id: "recfKl6c2SENRIfn9",
        fields: {
          Name: "barnimages",
          Details: "Free high-resolution images for everyone.\n",
          Category: ["Stock Photos"],
          Website: "https://barnimages.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:00:53.000Z",
      },
      {
        id: "recClt4eH2RbT0cvK",
        fields: {
          Name: "basicons",
          Details: "Basic icons for product design & development\n",
          Category: ["Icons"],
          Website: "https://basicons.xyz/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:50.000Z",
      },
      {
        id: "rec9VvaHn6ZMN51E6",
        fields: {
          Name: "bigheads",
          Details: "Randomly Generated Characters for Your Apps & Games\n",
          Category: ["Illustration"],
          Website: "https://bigheads.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:57:02.000Z",
      },
      {
        id: "recYvjC5FzTNv7oGx",
        fields: {
          Name: "bottts",
          Details: "Mix & Match Robots with a Sketch library\n",
          Category: ["Illustration"],
          Website: "https://bottts.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:58:22.000Z",
      },
      {
        id: "recyAAOqE8VS8UF6I",
        fields: {
          Name: "Uber Design",
          Details:
            "With our company’s growth and new direction, we need a brand identity that is efficient to use, flexible across applications, and able to feature localized content in a globally consistent way. These guidelines cover 9 elements: logo, color, composition, iconography, illustration, motion, photography, tone of voice, and typography.\n",
          Category: ["Design Systems"],
          Website: "https://brand.uber.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:23:47.000Z",
      },
      {
        id: "recWSmjsn9bIs8VOY",
        fields: {
          Name: "Brand Colors",
          Details:
            "The biggest collection of official brand color codes around. Includes hex colors codes for 500+ brands including Facebook, Twitter, Instagram, and many more.\n",
          Category: ["Color"],
          Website: "https://brandcolors.net/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:17:41.000Z",
      },
      {
        id: "rect1BSeCvFmQQH9n",
        fields: {
          Name: "Burst By Shopify",
          Details:
            "Browse thousands of beautiful copyright-free images. All our pictures are free to download for personal and commercial use, no attribution required.\n",
          Category: ["Stock Photos"],
          Website: "https://burst.shopify.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:18.000Z",
      },
      {
        id: "recAL02jTOtPwMnKD",
        fields: {
          Name: "collectui",
          Details:
            "Daily inspiration collected from daily ui archive and beyond. Based on Dribbble shots, hand picked, updating daily.\n",
          Category: ["Inspiration"],
          Website: "https://collectui.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:23.000Z",
      },
      {
        id: "rectJk5EnFyvMHMcx",
        fields: {
          Name: "Adobe Color",
          Details:
            "Create color palettes with the color wheel or image, browse thousands of color combinations from the Adobe Color community.\n",
          Category: ["Color"],
          Website: "https://color.adobe.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:17:37.000Z",
      },
      {
        id: "recie9igaSw0T37Rt",
        fields: {
          Name: "Colorable ",
          Details:
            "Contrast is the difference in luminance or color that makes an object (or its representation in an image or display) distinguishable. In visual perception of the real ...\n",
          Category: ["Color"],
          Website: "https://colorable.jxnblk.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:17:39.000Z",
      },
      {
        id: "recGxWhFljnagDPUi",
        fields: {
          Name: "colordesigner",
          Details:
            "The main purpose of this tool is to help with building a color palette and generate tints and shades based on it. Just pick a color, and the app does the rest.\n",
          Category: ["Color"],
          Website: "https://colordesigner.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:28.000Z",
      },
      {
        id: "recZf3qYnFY9mNmOs",
        fields: {
          Name: "Color Hunt",
          Details:
            "Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes.\n",
          Category: ["Color"],
          Website: "https://colorhunt.co/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:20:36.000Z",
      },
      {
        id: "recC8aLU112dKPWUC",
        fields: {
          Name: "colorhunt",
          Details:
            "Color Hunt is a free and open platform for color inspiration with thousands of trendy hand-picked color palettes\n",
          Category: ["Color"],
          Website: "https://colorhunt.co/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:29.000Z",
      },
      {
        id: "recsLYF73PyH9jfpB",
        fields: {
          Name: "colorkit",
          Details:
            "ColorKit blends colors and generates a color's shades and tints.\n",
          Category: ["Color"],
          Website: "https://colorkit.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:28.000Z",
      },
      {
        id: "recZSnCZESVfYJD20",
        fields: {
          Name: "colorleap",
          Details: "Take a leap through time and see the colors of history.\n",
          Category: ["Color"],
          Website: "https://colorleap.app/home",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:29.000Z",
      },
      {
        id: "recfxezQlg2W5HvuK",
        fields: {
          Name: "colorsinspo",
          Details:
            "Thousands of beautiful color palettes you can use it directly by one click.\n",
          Category: ["Color"],
          Website: "https://colorsinspo.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:30.000Z",
      },
      {
        id: "recVFvhryNkaYC2by",
        fields: {
          Name: "Colourco",
          Details:
            "colourco.de is an online designer tool, which allows you to easily and intuitively combine colours.\n",
          Category: ["Color"],
          Website: "https://colourco.de/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:27.000Z",
      },
      {
        id: "recERwzOg45w1KJCL",
        fields: {
          Name: "coolicons",
          Details:
            "coolicons are perfect for use in web and mobile. Support for SVG, your favourite design tool and webfont. Completely free and open source. ",
          Category: ["Icons"],
          Website: "https://coolicons.cool/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:49.000Z",
      },
      {
        id: "recjFcMsl6bAIQweT",
        fields: {
          Name: "coolors",
          Details:
            "Get inspired by thousands of beautiful color schemes and make something cool!\n",
          Category: ["Color"],
          Website: "https://coolors.co/palettes/trending",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:29.000Z",
      },
      {
        id: "recPjjscVtULHo1Jq",
        fields: {
          Name: "craftwork",
          Details:
            "Discover nice objects created with Cinema 4D. Virtual reality tools and other gadgets are embodied in volumetric graphics. Customize any object in Cinema 4D to get your perfect one. All elements are fully editable. ",
          Category: ["Illustration"],
          Website: "https://craftwork.design/downloads/slam/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:49:25.000Z",
      },
      {
        id: "recE0FDbGi18hiOtf",
        fields: {
          Name: "css.gg",
          Details:
            "Pure CSS icons library, Customizable & Retina-Ready built 100% in pure CSS, SVG, SVG Sprite, styled-components, Figma and Adobe XD.",
          Category: ["Icons"],
          Website: "https://css.gg/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:50.000Z",
      },
      {
        id: "recutCnRKLZHC7JbM",
        fields: {
          Name: "cssgradient",
          Details:
            "As a free css gradient generator tool, this website lets you create a colorful gradient background for your website, blog, or social media profile.",
          Category: ["Color"],
          Website: "https://cssgradient.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:37.000Z",
      },
      {
        id: "recS0j3OmQuHrnvNO",
        fields: {
          Name: "Culrs App",
          Details:
            "We reimagined our web app into a mac app to simplify and accelerate the process of choosing colors for your design.\n\n",
          Category: ["Color"],
          Website: "https://culrs.app/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:24.000Z",
      },
      {
        id: "recy6r9seNLSOsHKU",
        fields: {
          Name: "delesign",
          Details:
            "Use our royalty-free designs for your website, social media, blog, email newsletters, and more. View our license for more information.",
          Category: ["Illustration"],
          Website: "https://delesign.com/free-designs/graphics/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:51:14.000Z",
      },
      {
        id: "rec3EFXi8xPnIb8Zg",
        fields: {
          Name: "Designers.Watch",
          Details: "The best documentaries for designers and artists.\n",
          Category: ["Learn Design"],
          Website: "https://designers.watch/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:26:52.000Z",
      },
      {
        id: "recRJSH8QWay5Ff2p",
        fields: {
          Name: "designvault",
          Details:
            "Mobile, desktop & web UI patterns and design insiration from real products.\n",
          Category: ["Inspiration"],
          Website: "https://designvault.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:23.000Z",
      },
      {
        id: "rec1jPD5jW8JvvXTV",
        fields: {
          Name: "iOS Human Interface Guideline - Apple",
          Details:
            "Find documentation and resources for designing great apps for Apple platforms.",
          Category: ["Design Systems"],
          Website: "https://developer.apple.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:23:44.000Z",
      },
      {
        id: "recFAoRvRmZJVc1NB",
        fields: {
          Name: "Apple",
          Details:
            "With over 2,400 configurable symbols, SF Symbols is designed to integrate seamlessly with San Francisco, the system font for Apple platforms",
          Category: ["Icons"],
          Website: "https://developer.apple.com/sf-symbols/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:44.000Z",
      },
      {
        id: "recxOVjGYhrNJD52z",
        fields: {
          Name: "deviceshots",
          Details:
            "Easily generate device mockups with your screenshot for social media! Choose between different device categories like phones, tablets, computers and more\n",
          Category: ["Mockups"],
          Website: "https://deviceshots.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:59:55.000Z",
      },
      {
        id: "rec3pduDyNMRHFstP",
        fields: {
          Name: "duo",
          Details:
            "Duo is a collection of colour combinations that I've curated from personal projects or that I've come across on the web.\n",
          Category: ["Color"],
          Website: "https://duo.alexpate.uk/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:32.000Z",
      },
      {
        id: "recaTtmuAPjGULoZw",
        fields: {
          Name: "Facebook Design — Devices ",
          Details: "Images and Sketch files of popular devices.",
          Category: ["Mockups"],
          Website: "https://facebook.design/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:21:32.000Z",
      },
      {
        id: "rec1BlAmizLGJUBhr",
        fields: {
          Name: "Facebook Design Tools and Resources",
          Details: "A collection of tools and resources from Facebook Design.",
          Category: ["Design Systems"],
          Website: "https://facebook.design/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:25:20.000Z",
      },
      {
        id: "recAdzTTuIz2vPpPp",
        fields: {
          Name: "feathericons",
          Details:
            "Feather is a collection of simply beautiful open source icons. Each icon is designed on a 24x24 grid with an emphasis on simplicity, consistency and readability.\n",
          Category: ["Icons"],
          Website: "https://feathericons.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:43.000Z",
      },
      {
        id: "recpHhrCbkOQbIlpv",
        fields: {
          Name: "fontjoy",
          Details: "Font pairing made simple",
          Category: ["Font"],
          Website: "https://fontjoy.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:05:22.000Z",
      },
      {
        id: "rec2Cl9U3PQeAQKSs",
        fields: {
          Name: "fontpair",
          Details:
            "Font Pair helps designers pair Google Fonts together. Beautiful Google Font combinations and pairs.\n",
          Category: ["Font"],
          Website: "https://fontpair.co/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:05:23.000Z",
      },
      {
        id: "recNkEkbnAa2nCKCy",
        fields: {
          Name: "fontpairings",
          Details:
            "Check typefaces and font pairings with this interactive tool\n",
          Category: ["Font"],
          Website: "https://fontpairings.bypeople.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:05:21.000Z",
      },
      {
        id: "rec3TwOG3yiSQGQin",
        fields: {
          Name: "Google Fonts",
          Details:
            "Making the web more beautiful, fast, and open through great typography",
          Category: ["Font"],
          Website: "https://fonts.google.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:25:21.000Z",
      },
      {
        id: "recy6rkW8owb4sV4V",
        fields: {
          Name: "fontsinuse",
          Details: "An independent archive of typography.\n",
          Category: ["Font"],
          Website: "https://fontsinuse.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:05:22.000Z",
      },
      {
        id: "recWpHhSsZl64JXdI",
        fields: {
          Name: "Freebies by People",
          Details:
            "A selection of free-for-comercial-use resources for designers and developers, conveniently collected and categorized in one place.",
          Category: ["Freebies"],
          Website: "https://freebies.bypeople.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:48:46.000Z",
      },
      {
        id: "recfHfVjcDwHQZmc8",
        fields: {
          Name: "freebiesbug",
          Details:
            "Freebiesbug is a web design blog showcasing free high-quality design resources like PSD files, HTML website templates, fonts and other cool stuff.\n",
          Category: ["Freebies"],
          Website: "https://freebiesbug.com/figma-freebies/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:21.000Z",
      },
      {
        id: "recLKbgpqR1SqoIE0",
        fields: {
          Name: "freebiesui",
          Details:
            "Are you looking for App Designs, UI Kits or Mockups? Download for free great freebies for Photoshop, Sketch, Principle & XD from FreebiesUI.\n",
          Category: ["Freebies"],
          Website: "https://freebiesui.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:33:19.000Z",
      },
      {
        id: "recN09sxCws7joV2a",
        fields: {
          Name: "freebiesupply",
          Details:
            "The freshest design resources for Adobe XD, Figma, Sketch, Photoshop and Adobe Illustrator.",
          Category: ["Freebies"],
          Website: "https://freebiesupply.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:48:46.000Z",
      },
      {
        id: "rectqZOv5Eg60cZ92",
        fields: {
          Name: "freetypography",
          Details:
            "FreeTypography.com is a blog about the best free fonts, typefaces and typography for free download.\n",
          Category: ["Font"],
          Website: "https://freetypography.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:05:24.000Z",
      },
      {
        id: "reclnP2BV0dKkE4NY",
        fields: {
          Name: "fresh-folk",
          Details: "an illustration library of\npeople and objects\n\n",
          Category: ["Illustration"],
          Website: "https://fresh-folk.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T12:58:22.000Z",
      },
      {
        id: "rectDtXFqUg71ri2h",
        fields: {
          Name: "Zendesk",
          Details:
            "The source of truth for tools, standards, and best practices when building products at Zendesk.\n\n",
          Category: ["Design Systems"],
          Website: "https://garden.zendesk.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:21:21.000Z",
      },
      {
        id: "recOmGZBT5wZaGArv",
        fields: {
          Name: "getloaf",
          Details: "Animated SVG icons that you'll love to use\n",
          Category: ["Icons"],
          Website: "https://getloaf.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:47.000Z",
      },
      {
        id: "recd5kbb0p29y6iIP",
        fields: {
          Name: "gradienta",
          Details:
            "Multicolor Gradients\nPure CSS Code, JPG Download, Open Source!\n\n",
          Category: ["Color"],
          Website: "https://gradienta.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:38.000Z",
      },
      {
        id: "reca2Uswgt48T1eG5",
        fields: {
          Name: "gradihunt",
          Details: "Beautiful gradient app to generate gradient color and css.",
          Category: ["Color"],
          Website: "https://gradihunt.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:12:36.000Z",
      },
      {
        id: "recq7Z6RZP6QqFyQ4",
        fields: {
          Name: "gratisography",
          Details:
            "The world's quirkiest collection of free high-resolution pictures you can use on your personal and commercial projects",
          Category: ["Stock Photos"],
          Website: "https://gratisography.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:00:55.000Z",
      },
      {
        id: "recJu3i1cMZ3ClKay",
        fields: {
          Name: "growth.design",
          Details:
            "Growth & UX case studies in a comic book format. Improve your product skills with real-world examples.\n\n",
          Category: ["Learn Design"],
          Website: "https://growth.design/case-studies",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:26:44.000Z",
      },
      {
        id: "recgtmJvPjA1detGv",
        fields: {
          Name: "heroicons",
          Details:
            "Beautiful hand-crafted SVG icons, by the makers of Tailwind CSS.\n\n",
          Category: ["Icons"],
          Website: "https://heroicons.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:45.000Z",
      },
      {
        id: "reccCw1o6K8mzHZGx",
        fields: {
          Name: "hicon",
          Details: "Web Friendly Icon Pack\n",
          Category: ["Icons"],
          Website: "https://hicon.me/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:49.000Z",
      },
      {
        id: "recpLCfnC1qpW2xwg",
        fields: {
          Name: "Humane by Design",
          Details:
            "A resource that provides guidance for designing ethically humane digital products through patterns focused on user well-being.\n\n",
          Category: ["Learn Design"],
          Website: "https://humanebydesign.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:26:57.000Z",
      },
      {
        id: "rec5aZi10xAmARlXR",
        fields: {
          Name: "iconhub",
          Details:
            "Save your penny and time creating from scratch, use these diverse Icon set to complete your awesome design.\n\n\n",
          Category: ["Icons"],
          Website: "https://iconhub.io/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:24:42.000Z",
      },
      {
        id: "recAw9ByuSsHPXNG6",
        fields: {
          Name: "iconmonstr",
          Details:
            "iconmonstr uses cookies to ensure you get the best experience on the website. Learn more. OK. You will need to accept the license agreement to get this icon.\n",
          Category: ["Icons"],
          Website: "https://iconmonstr.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:48.000Z",
      },
      {
        id: "rec5vu0vfBNxMCBx9",
        fields: {
          Name: "icons.mono",
          Details:
            "A simple, consistent open-source icon set designed to be used in a wide variety of digital products.\n",
          Category: ["Icons"],
          Website: "https://icons.mono.company/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:50.000Z",
      },
      {
        id: "recj43XmGUoL5ZNcG",
        fields: {
          Name: "icons.vzy",
          Details:
            "Beautiful SVG icons to enhance your apps and websites. Vzy icons are simple, consistent, and enjoyable to use in outline and solid styles.\n",
          Category: ["Icons"],
          Website: "https://icons.vzy.co/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T01:13:47.000Z",
      },
      {
        id: "recCazgprWZmuATLl",
        fields: {
          Name: "Ouch by Icons8",
          Details:
            "Download Ouch vector illustrations & images in 32 different styles for free. Find illustrations in PNG, SVG from top Dribbble artists for your design projects.\n",
          Category: ["Illustration"],
          Website: "https://icons8.com/",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T00:21:30.000Z",
      },
      {
        id: "recQhIFIaPkruvLUk",
        fields: {
          Name: "icons8",
          Details: "Fonts That People Actually Use\n",
          Category: ["Font"],
          Website: "https://icons8.com/fonts/roboto/arial",
          Description:
            "It helps you make better content. Seriously, though - i'm working on it.",
          Review: "People. I'm working on it, ok?",
          "Target Audience": ["Content Creator"],
        },
        createdTime: "2021-01-03T13:05:22.000Z",
      },
    ],
    offset: "itrD5qXo0mVbt2ByO/recQhIFIaPkruvLUk",
  };

  return (
    <>
      <HeroSection
        items={items}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Everything you need to succeed as a creator"
        subtitle="A massive compilation of resources to give fuel to your journey as a creator or entrepreneur."
        image="https://dl.airtable.com/.attachments/ca643f9a5257c1fd19297bf55123bde8/d9aabd5d/undraw_video_influencer_9oyy.svg"
        buttonText="Show Me Something Cool"
        buttonColor="primary"
        buttonInverted={false}
        buttonPath={
          "/link/" +
          items.records[
            Math.floor(Math.random() * Math.floor(items.records.length)) - 1
          ].fields.Name
        }
      />
      <Categories
        items={items.records}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Categories"
        subtitle="Find some cool resources for your next project."
      />
      <UseCases
        items={items.records}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Use Cases"
        subtitle="Find help for a specific problem."
      />
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        buttonInverted={false}
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
      <ContentCardsSection
        items={items.records}
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="All Top Picks"
        subtitle=""
      />
      <UsersSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Join other creators and entrepreneurs"
        subtitle=""
      />
      <NewsletterSection
        color="white"
        size="medium"
        backgroundImage=""
        backgroundImageOpacity={1}
        title="Stay in the know"
        subtitle="Receive our latest articles and feature updates"
        buttonText="Subscribe"
        buttonColor="primary"
        buttonInverted={false}
        inputPlaceholder="Enter your email"
        subscribedMessage="You are now subscribed!"
      />
    </>
  );
}

export default IndexPage;

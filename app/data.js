const posts = [
  {
    id: 1,
    image:
      "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/347405536_2474007542773184_3780863078864539499_n.jpg?_nc_cat=102&cb=99be929b-3346023f&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeGTAjlC053DiZnK0KIboawogaCzigpB-cuBoLOKCkH5y7J22mhIYX1AU5TVtnG3p82Nvdl7h1bZxViYGELPAKkN&_nc_ohc=RC28N8NhbGUAX-MfJGS&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDRYj61PQgEY_j-DGrOrGLDteSbUNd2xj8fgOemXsB1lg&oe=64ABE976",
    content: "ঢাকা টু নোয়াখালী। সকলে দোয়া করিও নিরাপদে যেন পৌছাতে পারি।",
    like: 350,
    comment: 20,
    timeAgo: "25 min",
    author: {
      name: "Belal Hossain Razu",
      photo:
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/347385440_2473825332791405_3552879443718731737_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=5cd70e&_nc_eui2=AeHdcF7I5JiimZplWh_ay6hPSnmSvEAaW-BKeZK8QBpb4Fy-ux7RZqS-8KqZfAnNpuw1oOiFwGgqCynetU9TL8e3&_nc_ohc=r9673aIb_moAX-huvTJ&_nc_ht=scontent.fdac24-2.fna&oh=00_AfBQkNgk1qY6DJadpDkCviPHILjwlvKcCVvV76y8xG4UCg&oe=64AD3B28",
    },
  },

  {
    id: 2,
    image:
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/358410487_256311923801082_5404616237023192443_n.jpg?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeFA1qCoOcCTi4B4bIDm7OUhXYjeGSWUMz9diN4ZJZQzP08mUQ0Y8mS2qJoCApkCizzXX-C5w520EYu5Z46LB488&_nc_ohc=4RKVk-lVcv0AX-XIEmg&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDkzo7ijlfH1D5jkOlcZNKQRC4uB_4eoHnCjrOG4O9Qiw&oe=64AD4A95",
    content: "কৃষি নির্ভর বাংলাদেশের একজন আদর্শ কৃষি খামারি ",
    like: 500,
    comment: 1200,
    timeAgo: "45 min",
    author: {
      name: "মাননীয় প্রধানমন্ত্রী শেখ হাসিনা",
      photo:
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/338578760_1895256467506705_7336407773071752309_n.jpg?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEZ_5A062EKbBuu-q8l89leeoMCskXDWnF6gwKyRcNacVwnKhjUmQp1Iu4iPL2XTUGsnDt8dFItcTaXtealVluz&_nc_ohc=FtTBnvTRyGAAX9Sg1l2&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDZ_FFgplFx5n5qcTkDbwDg7acsNiZSowhIYg0ZjdbqXQ&oe=64ADE006",
    },
  },

  {
    id: 3,
    image:
      "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/357731665_745905450872016_8903465955824463819_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHYKjmXayaztU_uBids3hrihY5WJ-gI3_GFjlYn6Ajf8a7rYsHW7rOj4Ln-Gp1PE5MJNa5UCThBTpv3koX53FXF&_nc_ohc=mVjZULeOxi0AX_PTEtd&_nc_ht=scontent.fdac24-3.fna&oh=00_AfA9qZ6foFovb5woganEsCFDvXvxvmArJOxQ9QAkbQbvgA&oe=64ADE617",
    content: "Painting by Aziz Sulaimanov.",
    like: 400,
    comment: 200,
    timeAgo: "55 min",
    author: {
      name: "Art Fans Zone",
      photo:
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/315094815_562344809228082_3681620245289695730_n.jpg?_nc_cat=1&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHNGzA5UoKc2Y5q4JeE0MapoD4aDvcqYqagPhoO9ypippn6rvzkeSHGq-qeilMwlVveV1Lz-olYd4CY6KmnlmRx&_nc_ohc=2y3gTWZh9LcAX9vODPH&_nc_ht=scontent.fdac24-2.fna&oh=00_AfCLgTh7KpRhbepprmPXgcVDpkXJcQjfVjm9a66gKE71Qw&oe=64ADB969",
    },
  },

  {
    id: 4,
    image:
      "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/358049410_10222064054140944_1291051707763671319_n.jpg?_nc_cat=110&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGlMF-jGLcnjFfJegVHdBlAOX62XyWvOm45frZfJa86btthjv_nt2Y6wf7NTj0rTo9DhsKzRZVTvrcj2XUmQwc1&_nc_ohc=72rXJROa4kcAX_u_u4X&_nc_ht=scontent.fdac24-1.fna&oh=00_AfDpQ4aBYYOO1xnQPGvUVZ-3IewLOuNUs08ZIKNTHGXPYA&oe=64ADABD0",
    content: `খুব সহজ করে যদি বলি তামিমের এমন বিদায় কাঙ্ক্ষিত নয়। 
    শুধু তামিম কেন, যে কোন খেলোয়াড়ই মাঠ থেকে বিদায় নিবে এটাই খেলোয়াড়দের জন্যে, ক্রীড়া সংস্কৃতির জন্যে কাঙ্ক্ষিত।`,
    like: 300,
    comment: 120,
    timeAgo: "40 min",
    author: {
      name: "Nazmul Hasan Rafee",
      photo:
        "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/357715263_10222048578714068_3888740729143454718_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGYpmHXXjl_q4uvy_f_YuQpd7S3ijo-dj13tLeKOj52PdfpqS1ssangCkw0ZFEW_tTjsB2nBZZEjNvknvvEW6ys&_nc_ohc=FMHEu7Mj5vQAX-Hj-fb&_nc_ht=scontent.fdac24-4.fna&oh=00_AfApkRU48JYvp30UOEwtSUwaiDjaX_3J7COFzgDOb0OsjA&oe=64ACE742",
    },
  },

  {
    id: 5,
    image:
      "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/358112165_1913373982378443_7684983891329316680_n.jpg?_nc_cat=101&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeHlIj55Mmz_9MKqwPbocgr3NGPwg1tHRl80Y_CDW0dGX7BLw0iDoLOIgnpHcoCB_4zotH3UL6Mtj3cX_OdMzl6j&_nc_ohc=J34B2hDCSmgAX-wqEhS&_nc_ht=scontent.fdac24-4.fna&oh=00_AfCGzrvXhYo52iu_wgJUL7cwToMcufrqxq0NTJeZ_-DB8g&oe=64AC5466",
    content: "Landscape Media - water color ",
    like: 200,
    comment: 120,
    timeAgo: "30 min",
    author: {
      name: "Preety Deb",
      photo:
        "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/343933981_1189536811744715_4089832728740873413_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeHThNNZ0aJWiuc_J7pp1UYt1ehGLDG0PjDV6EYsMbQ-MHBRwXeyN7V_byjTv6Ytwb2dFaPzwVOZRyJZ-8VzyAti&_nc_ohc=DWF4aDBlNwAAX9I2feU&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBg64T8kBaDkg9kcKtbjYZtXuOGFX04tg0IhKLKL9YNzQ&oe=64AD729E",
    },
  },

  {
    id: 6,
    image:
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/353400870_676603797812824_1123369579670826306_n.jpg?stp=cp6_dst-jpg&_nc_cat=111&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeGMLIOz2ioeVnWgRXoU7JWk3Xstlz63uv7dey2XPre6_qGXBI1saT-GVmSRqKYVttH7iieHU9HiCxw6P9Vzwbsd&_nc_ohc=hCSWNxeKX-4AX-5V3Am&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDHSBrdlzBc0t1F50ZSOWubAFh3UlDMA1UmQmX2yVGYMA&oe=64AC5C54",
    content: `আমার শহর রানীগঞ্জ (সিরিজ )
    স্বচ্ছ জলরঙ
    এটি বহু পুরানো দামোদর নদের উপর বাঁশ,কাঠ,মাটি দিয়ে তৈরী আস্থায়ী সেতু যেটা বর্ধমান ও বাঁকুড়া জেলার যোগসূত্র । আমি আমার ভাবনায় নিজের মতো করে এটির রূপ দেবার চেষ্টা করেছি মাত্র। ধন্যবাদ `,
    like: 400,
    comment: 200,
    timeAgo: "42 min",
    author: {
      name: "Artist Bikas",
      photo:
        "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/315311396_523449259794946_5763041602155172844_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFrxGZnaPIcLS1F47zGPHzMn_uFAt0AWOef-4UC3QBY50Y2YFYyqcD59T1NiuVnNCE9m4Si8xrNO22lXCWJRAjl&_nc_ohc=pT01EuL36TAAX80oEfz&_nc_ht=scontent.fdac24-4.fna&oh=00_AfBXfDU9KXeBZIeYBS1zQDsrzFRF5EArlY1H1pK7EjP0sA&oe=64AD3008",
    },
  },

  {
    id: 7,
    image:
      "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/355708117_6274931699287443_7260984410401655874_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=730e14&_nc_eui2=AeG52IavchyqZbDcDmXJvlHRvjKgBGJcsM--MqAEYlywz0HuvzwnRkmHo8ovCl4-JUs_EMxrGqSZR5tl6CQ7y6sH&_nc_ohc=cUYoRYZCHXAAX-FymJE&_nc_ht=scontent.fdac24-3.fna&oh=00_AfDPtYq6qQH5NfLA-yMdrZ_i8hnKJaGe9uBvvW9dL00Thg&oe=64ACEBC8",
    content: "৪০তম বিসিএস এর অনুজ কর্মকর্তাদের সাথে। শুভ কামনা সবার জন্য। ",
    like: 50,
    comment: 120,
    timeAgo: "44 min",
    author: {
      name: "Sabyasachee Mazumder Shimul",
      photo:
        "https://scontent.fdac24-1.fna.fbcdn.net/v/t39.30808-6/344866266_566003898754071_8958268737504210361_n.jpg?_nc_cat=100&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFMB3MiTL_SovKzScCRZEot-YNsOE_wksL5g2w4T_CSws0bWRhXNjpWDTA0Qr7zxz3suT-F8FS-gZ6MFV3vZBbR&_nc_ohc=7kdeRj_J4iEAX873NMK&_nc_ht=scontent.fdac24-1.fna&oh=00_AfCN_OZXkIv3BpZCQ_OWDArHWIMBZHdVrx01HfVFH0QN7g&oe=64AD7FDE",
    },
  },

  {
    id: 8,
    image:
      "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/357773465_1917796538604654_5479459105677361535_n.jpg?_nc_cat=105&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeH5trH9FOgUOKsgFHZ-mkTEDgkVPAyG6pUOCRU8DIbqlStrl4eOg3rMoCclq6ZO5g6OQeEcERgPN-IPCBovfD_B&_nc_ohc=sqnRM2rMleMAX_jBJ-Z&_nc_ht=scontent.fdac24-2.fna&oh=00_AfDHnEfDwLd1Wzpi2VKRnLMfrw4uqYbHQ-3mxbZV5trVvw&oe=64AE19BF",
    content: `বুনো (১০১) (স্পেশাল পর্ব)
    শাহ সাবরিনা মোয়াজ্জেম 
    বুনো,
    সালমা সেদিন কেঁদেছিলো
    আমার হাত ধরে!
    কতো বয়স হবে?  পঁয়ত্রিশ! 
    দু- দুটো বিয়ে হলো, শান্তি কোথাও ছিলোনা।
    স্বামীর পরকীয়ার বলি হয়ে বাপের বাড়ি!
    পঁয়তাল্লিশ দিন আগে আমার সাথে দেখা।
    আষাঢ় শ্রাবণ ভাসিয়ে কান্না!
    নদী মাটি দেশ যেভাবে নিলাম হয়
    দৃশ্যান্তরে সালমা সেভাবে
     নিলাম হয়েছিলো বিধির কালিতে!
    ঘুম থেকে জলের কুয়াশা! 
    নিবিড় সূর্যের বিপরীতে 
    চাঁদ হয়ে জোছনা মঙ্গলে!
    আজ তিন দিন হলো সে এখন জান্নাতি দরজায় পদার্পন করেছে!
    আফসোস শেষ দেখা হলোনা!
    বিষাদে মন বড্ড আছন্ন আমার!
    মরেই গেলি পাগলী!
    অনেক শোক থাকার চেয়ে মরে যাওয়া ই ভালো! 
    তবে তা ই হয়েছে!`,
    like: 300,
    comment: 100,
    timeAgo: "35 min",
    author: {
      name: "Shah Sabrina Moazzem",
      photo:
        "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/349943704_1370892953767495_5991209928490693132_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeGL1Glr9HSzhtf7ykF0oxv0K0JqrmKDO4orQmquYoM7ilaLt6yCYZOGE5ORauP9qcvVmy9jK6pbl72Qb1trBPPW&_nc_ohc=6ygUJWiGv0cAX8Bo97z&_nc_ht=scontent.fdac24-3.fna&oh=00_AfBkrPpgWrggqxYVkblLlQHUKdxqic4Dj-B5c9-kC0vCWg&oe=64AE022C",
    },
  },

  {
    id: 9,
    image:
      "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/357759868_9628426783896921_6577337403764338695_n.jpg?_nc_cat=106&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHDZzhHXKOo9PvxVMkP9IK1YkFsTa8PxrtiQWxNrw_Guz9dpx5-l_ga68WxFZhhB8QQW0gC-6qAW73pZRpgWihx&_nc_ohc=sd120aW1fQMAX8xkp2y&_nc_ht=scontent.fdac24-3.fna&oh=00_AfAFkLUghVQb5_8CF0HbfDBuSF6JbLVW4AqnXRnuD7tMMw&oe=64ACF915",
    content: "ঈদের ছুটিতে ঘোরাঘুরি। ",
    like: 800,
    comment: 320,
    timeAgo: "25 min",
    author: {
      name: "Neelufa Yesmin Neela",
      photo:
        "https://scontent.fdac24-2.fna.fbcdn.net/v/t39.30808-6/350676302_1445894789501925_6955897647700353651_n.jpg?_nc_cat=108&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeFvomtG-oDYCor0fmQv-rw2EbO1Wzcen2kRs7VbNx6faaiq_HGtlYMAp_93lCIkGkHqGFmIrvBP5z4QHCX_YnV8&_nc_ohc=na2_x9Y9lEoAX-okYGf&_nc_oc=AQmHpoW56RQRpRfXIYQVpIcQmDQjOvr2qgimfTxevnEdBVJZ1slT8PvIq3d7AGAH7Tc&_nc_ht=scontent.fdac24-2.fna&oh=00_AfD3VI4WE9FRbc-mGZV_gttiwkZGpQGCryWDThEYv_mD5w&oe=64ADFCCF",
    },
  },

  {
    id: 10,
    image:
      "https://scontent.fdac24-3.fna.fbcdn.net/v/t39.30808-6/358534260_2406291902885980_3122132225535139101_n.jpg?_nc_cat=109&cb=99be929b-3346023f&ccb=1-7&_nc_sid=8bfeb9&_nc_eui2=AeHaII-UCGZnTg6FYU4WopM7WH8sl0F84IZYfyyXQXzghjJ2NWEoGQH2XuL2VWHCsFe_7CBPAGQr0rRbNgfsA_5b&_nc_ohc=nbb5bE5KRxwAX-Vqeph&_nc_oc=AQkkOZeZh0m7w5uCJSCHSpBFSWyr0KEI6HFAGf2m99RLeMJz_paoc-I6VnDSMcmJIIA&_nc_ht=scontent.fdac24-3.fna&oh=00_AfCaHX_9jxyEN0VW4VSKeibKZ0uLEFXXUQcO1bjIg_-l_w&oe=64ADF092",
    content: "আবার দেখা হবে, এ দেখাই শেষ দেখা নয় ইনশাল্লাহ। ",
    like: 320,
    comment: 210,
    timeAgo: "36 min",
    author: {
      name: "Engr Ajaharul Islam Raja",
      photo:
        "https://scontent.fdac24-4.fna.fbcdn.net/v/t39.30808-6/344428944_254044940455852_2743087272844748372_n.jpg?_nc_cat=107&cb=99be929b-3346023f&ccb=1-7&_nc_sid=09cbfe&_nc_eui2=AeEGtewXMEyAQhPBB2p8NGS3h53KUWucig6HncpRa5yKDngihmF20iP0DwtKvg_Eo3UWG2CQdff4MKaajXhZv_jy&_nc_ohc=Ogx-E-T-E5QAX_KQQ8E&_nc_ht=scontent.fdac24-4.fna&oh=00_AfC9vSGp2GVjjfw0xs0WUmIIFYXxXMSR5mhEeQWsNuQCBA&oe=64ADE3EB",
    },
  },
];

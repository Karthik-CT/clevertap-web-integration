("use strict");
var precacheConfig = [
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/0.e3e7754d5c9cd9888015.chunk.js",
      "72533da32ba162b6cec896515c807a67",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/1-e3e7754d5c9cd9888015.css",
      "4c8cbee856ea45a5e432a210f946ef24",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/1.e3e7754d5c9cd9888015.chunk.js",
      "26f7f31c45096cb14f74bbadb6609f5a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/10-e3e7754d5c9cd9888015.css",
      "68e531f18dd631bd223613756bf36502",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/10.e3e7754d5c9cd9888015.chunk.js",
      "4c3f98e8d215df592026258ba98812d9",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/11-e3e7754d5c9cd9888015.css",
      "647dd19b7f7449166730e9bf48c6dc1a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/11.e3e7754d5c9cd9888015.chunk.js",
      "25351db84e805b6a935708de1c63af8b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/12-e3e7754d5c9cd9888015.css",
      "de0ad1ecb155c473962a5bb99b26afa9",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/12.e3e7754d5c9cd9888015.chunk.js",
      "c72730d041cb8209748e99b7df77e22a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/13-e3e7754d5c9cd9888015.css",
      "1c0ee1f60a4ad2a8867ff73c07a55120",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/13.e3e7754d5c9cd9888015.chunk.js",
      "8f7d693bcea23296e182d642e1129c78",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/14-e3e7754d5c9cd9888015.css",
      "72ded04a5cdbc2fab2d070dc0f84fa66",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/14.e3e7754d5c9cd9888015.chunk.js",
      "ab8fb49daaccd688e8a6bc43fed31ba3",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/15-e3e7754d5c9cd9888015.css",
      "ef3009c5cd1232835677c96a0cf7991e",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/15.e3e7754d5c9cd9888015.chunk.js",
      "3f12206137379067611b51667c2730a0",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/18.e3e7754d5c9cd9888015.chunk.js",
      "80162a4cf42581ce52320ec8ac05ccc3",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/19-e3e7754d5c9cd9888015.css",
      "fe0b7ec3fa593064e74b0a1101c133b2",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/19.e3e7754d5c9cd9888015.chunk.js",
      "573faa6a876f3fb6ccfbe4d1dcf3585b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/2.e3e7754d5c9cd9888015.chunk.js",
      "e14291f9bca2478eaf8b7a888c4a9473",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/20.e3e7754d5c9cd9888015.chunk.js",
      "488977d9e280440f0bf7a7ebc9d5efcc",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/21-e3e7754d5c9cd9888015.css",
      "9d30b0934871dbb9762d887ce9fd5c60",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/21.e3e7754d5c9cd9888015.chunk.js",
      "f6a5bb412537a337e8efb5cc1a160654",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/22-e3e7754d5c9cd9888015.css",
      "d35a8d4d1157eefc58fede5f4d6f2c7a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/22.e3e7754d5c9cd9888015.chunk.js",
      "534ccb3e4d0413af935b6749f0e83662",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/23-e3e7754d5c9cd9888015.css",
      "6d5f3429819cbe7155984cc93b4fc840",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/23.e3e7754d5c9cd9888015.chunk.js",
      "710201e73582c44719a9bf076cc75538",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/24-e3e7754d5c9cd9888015.css",
      "920d8e86e07cf5fa15b925394773447e",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/24.e3e7754d5c9cd9888015.chunk.js",
      "c02317523819d5ddb68f01182abdcd83",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/25-e3e7754d5c9cd9888015.css",
      "e0ba4b248bb2f80746b72762a0b02ac7",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/25.e3e7754d5c9cd9888015.chunk.js",
      "d117628a578d2c4418ac01b798a3d592",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/26-e3e7754d5c9cd9888015.css",
      "9ead7cd351f1dcc723ddca7db7331d35",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/26.e3e7754d5c9cd9888015.chunk.js",
      "d35f2d407aa9c22a698f4fcb2ca85ef7",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/27-e3e7754d5c9cd9888015.css",
      "022f36d7fa7d0ebd7f06ad22e952840e",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/27.e3e7754d5c9cd9888015.chunk.js",
      "d94d2bd4311f369a567c558908d8c79b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/28-e3e7754d5c9cd9888015.css",
      "6eb6d9348c9d5f702fe316c1613993f6",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/28.e3e7754d5c9cd9888015.chunk.js",
      "50ef2c80a5431c9266dff775571b6c6a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/29-e3e7754d5c9cd9888015.css",
      "fec06e63a08030ffa97b9199d2c8dc8e",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/29.e3e7754d5c9cd9888015.chunk.js",
      "25e963f44faf1c15260ab7a6d2bc7ebc",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/3-e3e7754d5c9cd9888015.css",
      "5f68e247bf77b5d715c1345361cf1247",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/3.e3e7754d5c9cd9888015.chunk.js",
      "e41e0cf3c7ea824a7721a621e60b0a78",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/30-e3e7754d5c9cd9888015.css",
      "49461ebad355db77c179b218088df302",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/30.e3e7754d5c9cd9888015.chunk.js",
      "aef4880255f1adce67a018bcf0a1be0b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/31-e3e7754d5c9cd9888015.css",
      "c397ecebd7a31245461607ef228ab9a2",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/31.e3e7754d5c9cd9888015.chunk.js",
      "5968d2b008dc4d658890fca08bff033a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/32-e3e7754d5c9cd9888015.css",
      "da9a4e21750e98dfa2b1d2e9a8ad820f",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/32.e3e7754d5c9cd9888015.chunk.js",
      "9016faff861e3f522bfd2b8828072b14",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/33-e3e7754d5c9cd9888015.css",
      "bfcbc6f549caf8b228bc7041a07c15b3",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/33.e3e7754d5c9cd9888015.chunk.js",
      "267f2d700e9086136bf6b88471c4470c",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/34-e3e7754d5c9cd9888015.css",
      "ed2e91dc4c7305cc2317e0f2a5c70720",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/34.e3e7754d5c9cd9888015.chunk.js",
      "c87eda026823e370d373708f9358cdf0",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/35-e3e7754d5c9cd9888015.css",
      "dd22608aa4bbc287aa8d7546d1becd32",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/35.e3e7754d5c9cd9888015.chunk.js",
      "650de010b91278c34bdf666615db105f",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/36-e3e7754d5c9cd9888015.css",
      "aa0fa1b6b93cd4192eaf56162f5f55c8",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/36.e3e7754d5c9cd9888015.chunk.js",
      "c7bca8b3a02e5789fdadb14882f4d341",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/37-e3e7754d5c9cd9888015.css",
      "9da3c43012b1a52ff89e47f66e0102c8",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/37.e3e7754d5c9cd9888015.chunk.js",
      "dda1832f88df325ce03618e2bdb667c1",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/38-e3e7754d5c9cd9888015.css",
      "a6a8176ca3f11a42b58329fc6a1ea29c",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/38.e3e7754d5c9cd9888015.chunk.js",
      "49c9e92eb422d7fb82b8e042e292e011",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/39-e3e7754d5c9cd9888015.css",
      "54faf1bbbe1394bc044d90a53ab4440b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/39.e3e7754d5c9cd9888015.chunk.js",
      "40dec45ade8607ca814c7f60d250d7b4",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/4-e3e7754d5c9cd9888015.css",
      "2c96e8d5d831a2a70de0d16c56d3dc24",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/4.e3e7754d5c9cd9888015.chunk.js",
      "ad0f6e993a72ead1e8b0d067ca8c8df6",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/40-e3e7754d5c9cd9888015.css",
      "1e7f09609b7efe03d8897f10f3290ecf",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/40.e3e7754d5c9cd9888015.chunk.js",
      "cc270fa6d0b1dfd7b47c0d443f934d25",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/41-e3e7754d5c9cd9888015.css",
      "65c97de0c2bc86965d42748815797daa",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/41.e3e7754d5c9cd9888015.chunk.js",
      "4ae234aa61167982fe5c459239a55ae0",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/42-e3e7754d5c9cd9888015.css",
      "0c39e09b581edf1c0faf355d30d9e5c5",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/42.e3e7754d5c9cd9888015.chunk.js",
      "5e804b9ca28f4b691380fa326d7d0efd",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/43-e3e7754d5c9cd9888015.css",
      "d9d450223857a5c4a588d91dabdd019c",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/43.e3e7754d5c9cd9888015.chunk.js",
      "e6e163ad074202a39f61cc28827b4148",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/44-e3e7754d5c9cd9888015.css",
      "0811e5a53aad64a35c89a34d19625399",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/44.e3e7754d5c9cd9888015.chunk.js",
      "7f63613137382b0a84d918f63a77298a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/45-e3e7754d5c9cd9888015.css",
      "99d23f35883a33d67cab581f0745903f",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/45.e3e7754d5c9cd9888015.chunk.js",
      "ca71d4a373704adc307e489dfc0498b6",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/46-e3e7754d5c9cd9888015.css",
      "b767fed0ac14bfab23ab5fe1f79a8c64",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/46.e3e7754d5c9cd9888015.chunk.js",
      "5c44eca848c178aaa169cc2f1cb40c30",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/47-e3e7754d5c9cd9888015.css",
      "466535fd5004b1578dcf9401a02d629f",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/47.e3e7754d5c9cd9888015.chunk.js",
      "fb1403f46b7fe218434c179c9a0be540",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/48-e3e7754d5c9cd9888015.css",
      "14e8529f20db27205270eaa60b5ca85b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/48.e3e7754d5c9cd9888015.chunk.js",
      "2fe6380e595fb0b2e817e4226d57ccff",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/49-e3e7754d5c9cd9888015.css",
      "4fd37ec22f26c6b447ab8ad2d47ad8bd",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/49.e3e7754d5c9cd9888015.chunk.js",
      "f1ee63a691f3ff967862bdfd89fcd812",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/5-e3e7754d5c9cd9888015.css",
      "32674482466ec170095bd611e5c94380",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/5.e3e7754d5c9cd9888015.chunk.js",
      "7846f95655a15b8f91c81f2abba277e3",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/50-e3e7754d5c9cd9888015.css",
      "54393e067c1d0e7dbf9dd48b2b629389",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/50.e3e7754d5c9cd9888015.chunk.js",
      "b56fa5daf518704ac3fd85c0df889603",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/51-e3e7754d5c9cd9888015.css",
      "a23ce3b77bcae091bda60285823c2d32",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/51.e3e7754d5c9cd9888015.chunk.js",
      "b8e205e98bd5e5c04de6bac33ca1b643",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/52-e3e7754d5c9cd9888015.css",
      "36a8c533661aac0412e8e15c4e0ab995",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/52.e3e7754d5c9cd9888015.chunk.js",
      "d85c9dd5871a25e12f91b76dbf1f605d",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/53-e3e7754d5c9cd9888015.css",
      "0d2dbe36074a5d727c76d353be5ee925",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/53.e3e7754d5c9cd9888015.chunk.js",
      "96008919423eaa7413d29fcf63a0a9d9",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/54-e3e7754d5c9cd9888015.css",
      "8357b236a446e05ef8c67b76da31ca3d",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/54.e3e7754d5c9cd9888015.chunk.js",
      "ae9b2b347a5f67e926a2a94b72fbbe43",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/55-e3e7754d5c9cd9888015.css",
      "cb3bf7cc0cd2e84a929c8f5fc42c5883",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/55.e3e7754d5c9cd9888015.chunk.js",
      "ee65d6e44a010b33ceea68fec463f0a3",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/56-e3e7754d5c9cd9888015.css",
      "01352c9aaea2bc64810579da21189397",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/56.e3e7754d5c9cd9888015.chunk.js",
      "bd828490d09c8a3579d45ba7bd866821",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/57-e3e7754d5c9cd9888015.css",
      "e8879743f5bebd5e41d60c6237422c1e",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/57.e3e7754d5c9cd9888015.chunk.js",
      "44c2645a4405e513dc7204a72dfc37cd",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/58-e3e7754d5c9cd9888015.css",
      "4df6b61552496c644cfe9c2849a13230",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/58.e3e7754d5c9cd9888015.chunk.js",
      "9a858c5ddb3eca20fb926238c9384f78",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/59-e3e7754d5c9cd9888015.css",
      "702155b21a9da5ea8b4a4e0c59631e12",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/59.e3e7754d5c9cd9888015.chunk.js",
      "cd0d6e60e4b0c57df7b95f03dae71b07",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/6-e3e7754d5c9cd9888015.css",
      "33c0d55aa57ed3f5ba4dbf8ba337e4db",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/6.e3e7754d5c9cd9888015.chunk.js",
      "26f567126dd36298785bb8e519e01680",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/60-e3e7754d5c9cd9888015.css",
      "7827a19f9ce0486df6fec3d1b18c8d36",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/60.e3e7754d5c9cd9888015.chunk.js",
      "7be479ec271fb7a156c784823718687f",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/61-e3e7754d5c9cd9888015.css",
      "ca03f8cdbdf09ed1c0f4d59dac4edbe1",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/61.e3e7754d5c9cd9888015.chunk.js",
      "5e8fa7ff77082ed05b1e8238568725b8",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/62-e3e7754d5c9cd9888015.css",
      "a81829d923c20814ee5ddcfb08a58044",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/62.e3e7754d5c9cd9888015.chunk.js",
      "671c910685ac33cccb59acb74b590608",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/63-e3e7754d5c9cd9888015.css",
      "3a573bcbd67ef5b29b6356742b3aa11b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/63.e3e7754d5c9cd9888015.chunk.js",
      "f31079ec67b2543eb6194a19cac0c259",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/64-e3e7754d5c9cd9888015.css",
      "4aed0f02cbc496c47ae4360c37da6606",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/64.e3e7754d5c9cd9888015.chunk.js",
      "432a3bb8998f191e64d67ffbc04b3cb2",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/65-e3e7754d5c9cd9888015.css",
      "8d681f060cacc5bf549a37115a43b72b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/65.e3e7754d5c9cd9888015.chunk.js",
      "24bc13d11e7147351fa34dade8917188",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/66-e3e7754d5c9cd9888015.css",
      "f08f1f196662571431e805f3d7a65a5c",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/66.e3e7754d5c9cd9888015.chunk.js",
      "22ca47da46ef6fe6cc1275e3836b5302",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/67-e3e7754d5c9cd9888015.css",
      "454ade71d17eabaaf8919d688c69f3e8",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/67.e3e7754d5c9cd9888015.chunk.js",
      "50108410d55997a3da40dc507dbdfd78",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/68-e3e7754d5c9cd9888015.css",
      "9566f8dacb44f113b0db504a2b7f08f4",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/68.e3e7754d5c9cd9888015.chunk.js",
      "abe1813079cb0b0bb00d7a3715d1bdd0",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/69-e3e7754d5c9cd9888015.css",
      "27bc5ea2045a7b66338d9e997487b7d2",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/69.e3e7754d5c9cd9888015.chunk.js",
      "f132c5c7fbc6da54abbb8cb2adde68a5",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/7.e3e7754d5c9cd9888015.chunk.js",
      "24c03957bbb08ce671f8588aee17097e",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/70-e3e7754d5c9cd9888015.css",
      "7cbea2c7534ce93cf235b0edf0625fb8",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/70.e3e7754d5c9cd9888015.chunk.js",
      "2c9605131cc8261f21f55aeec6f14ff9",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/71-e3e7754d5c9cd9888015.css",
      "b71fe69c06b3efa1f9d86b1a99e1a9d3",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/71.e3e7754d5c9cd9888015.chunk.js",
      "6ee0a0cfb141133752a205492991f323",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/72-e3e7754d5c9cd9888015.css",
      "620ee7d70b7a9abb508097bd439f1f90",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/72.e3e7754d5c9cd9888015.chunk.js",
      "8b33a907ea587e9442de69659749b8de",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/73-e3e7754d5c9cd9888015.css",
      "9d20a277a82059d1adb32e25b48404bb",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/73.e3e7754d5c9cd9888015.chunk.js",
      "2cb33e5f5c903ceabfa779f269ee75ce",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/74-e3e7754d5c9cd9888015.css",
      "bd78b09e8dcdbf5268158f1644d548f0",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/74.e3e7754d5c9cd9888015.chunk.js",
      "e278368dc0a7910d1973fb41c751a92f",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/75-e3e7754d5c9cd9888015.css",
      "cb0a5925481c6679023b8bd0f90b419b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/75.e3e7754d5c9cd9888015.chunk.js",
      "d992d0a81ad6e060279fde8f9ec435c4",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/76-e3e7754d5c9cd9888015.css",
      "9629fd1da396562c8c381596e49f8d10",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/76.e3e7754d5c9cd9888015.chunk.js",
      "68556e4ac1b817c7517467b4304884c6",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/77-e3e7754d5c9cd9888015.css",
      "812f1741d041d1e815283917cbc65956",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/77.e3e7754d5c9cd9888015.chunk.js",
      "d1e8daea2de1eec915e0994b90bc95c0",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/78-e3e7754d5c9cd9888015.css",
      "18f92c6b26f3f57c8928faedfbafdd47",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/78.e3e7754d5c9cd9888015.chunk.js",
      "f5597ac013fab9ad95b9682d367c848e",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/79-e3e7754d5c9cd9888015.css",
      "9497b0fae49ce6f8b46681aca7b72b22",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/79.e3e7754d5c9cd9888015.chunk.js",
      "7a29b15a045b4fed5bd2f3b527703eb9",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/8.e3e7754d5c9cd9888015.chunk.js",
      "df5c74ebc0721bbe4e622bead18cd1f0",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/80-e3e7754d5c9cd9888015.css",
      "c5e78cf1cf85e284fea6c2dc46b72ffa",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/80.e3e7754d5c9cd9888015.chunk.js",
      "e349931ae762593787e0ef25b38448dd",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/81-e3e7754d5c9cd9888015.css",
      "b4072af81c62e6196e11e86c037c32b5",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/81.e3e7754d5c9cd9888015.chunk.js",
      "3d560f391399502b954f4a22fee928b1",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/82-e3e7754d5c9cd9888015.css",
      "9e7f1509ce69af3d4dee77ae82f0699a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/82.e3e7754d5c9cd9888015.chunk.js",
      "cca5f6ec3b567555d05a523bfea62b13",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/83-e3e7754d5c9cd9888015.css",
      "3fd7f2198a54221729d59236fa3f9ead",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/83.e3e7754d5c9cd9888015.chunk.js",
      "805e77e43b84ba2adfa49c6170d42b0b",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/84-e3e7754d5c9cd9888015.css",
      "7fd324336cb34b055fb2f29c8fb3ac75",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/84.e3e7754d5c9cd9888015.chunk.js",
      "f36c830780535d916fe70f7d11d8ad25",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/85-e3e7754d5c9cd9888015.css",
      "66a6f2b8a1976e990603b7abe30d6278",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/85.e3e7754d5c9cd9888015.chunk.js",
      "0e43bced8c0187a1247c8eb1465d6835",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/86-e3e7754d5c9cd9888015.css",
      "322faf2c04109933c0b757af34f74aa9",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/86.e3e7754d5c9cd9888015.chunk.js",
      "a5f1ea4d2158c5800b030e4e56bc0896",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/87.e3e7754d5c9cd9888015.chunk.js",
      "ad6ed29a0d4328e985931411ab769952",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/88.e3e7754d5c9cd9888015.chunk.js",
      "27d933091a1434666577fa302d17346a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/89.e3e7754d5c9cd9888015.chunk.js",
      "fad6188cf4bcc60bf2d97142c88b6050",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/9-e3e7754d5c9cd9888015.css",
      "15fa862869c72f7023be536a9de903a6",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/9.e3e7754d5c9cd9888015.chunk.js",
      "9b63ddeed52e43e9242b74079005231a",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/90.e3e7754d5c9cd9888015.chunk.js",
      "1ebeeb4967b3f573bfec8430639ef68f",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/91.e3e7754d5c9cd9888015.chunk.js",
      "778cf1cdd513dd74d64691c8df2b6efe",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/i18n-ar.e3e7754d5c9cd9888015.chunk.js",
      "2620077e72945d144144482df4f1a1e8",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/main-bundle.e3e7754d5c9cd9888015.css",
      "c6d451301a252c47f74533f39fb04042",
    ],
    [
      "https://cdn.theluxurycloset.com/pwa/desktop/dist/main-bundle.e3e7754d5c9cd9888015.js",
      "966146b24b093b972443e7f750040a69",
    ],
  ],
  cacheName =
    "sw-precache-v3-tlc-" + (self.registration ? self.registration.scope : ""),
  ignoreUrlParametersMatching = [/^utm_/],
  addDirectoryIndex = function (c, e) {
    var d = new URL(c);
    return "/" === d.pathname.slice(-1) && (d.pathname += e), d.toString();
  },
  cleanResponse = function (c) {
    return c.redirected
      ? ("body" in c ? Promise.resolve(c.body) : c.blob()).then(function (e) {
          return new Response(e, {
            headers: c.headers,
            status: c.status,
            statusText: c.statusText,
          });
        })
      : Promise.resolve(c);
  },
  createCacheKey = function (c, e, d, t) {
    var s = new URL(c);
    return (
      (t && s.pathname.match(t)) ||
        (s.search +=
          (s.search ? "&" : "") +
          encodeURIComponent(e) +
          "=" +
          encodeURIComponent(d)),
      s.toString()
    );
  },
  isPathWhitelisted = function (c, e) {
    if (0 === c.length) return !0;
    var d = new URL(e).pathname;
    return c.some(function (c) {
      return d.match(c);
    });
  },
  stripIgnoredUrlParameters = function (c, e) {
    var d = new URL(c);
    return (
      (d.hash = ""),
      (d.search = d.search
        .slice(1)
        .split("&")
        .map(function (c) {
          return c.split("=");
        })
        .filter(function (c) {
          return e.every(function (e) {
            return !e.test(c[0]);
          });
        })
        .map(function (c) {
          return c.join("=");
        })
        .join("&")),
      d.toString()
    );
  },
  hashParamName = "_sw-precache",
  urlsToCacheKeys = new Map(
    precacheConfig.map(function (c) {
      var e = c[0],
        d = c[1],
        t = new URL(e, self.location),
        s = createCacheKey(t, hashParamName, d, !1);
      return [t.toString(), s];
    })
  );
function setOfCachedUrls(c) {
  return c
    .keys()
    .then(function (c) {
      return c.map(function (c) {
        return c.url;
      });
    })
    .then(function (c) {
      return new Set(c);
    });
}
self.addEventListener("install", function (c) {
  c.waitUntil(
    caches
      .open(cacheName)
      .then(function (c) {
        return setOfCachedUrls(c).then(function (e) {
          return Promise.all(
            Array.from(urlsToCacheKeys.values()).map(function (d) {
              if (!e.has(d)) {
                var t = new Request(d, { credentials: "same-origin" });
                return fetch(t).then(function (e) {
                  if (!e.ok)
                    throw new Error(
                      "Request for " +
                        d +
                        " returned a response with status " +
                        e.status
                    );
                  return cleanResponse(e).then(function (e) {
                    return c.put(d, e);
                  });
                });
              }
            })
          );
        });
      })
      .then(function () {
        return self.skipWaiting();
      })
  );
}),
  self.addEventListener("activate", function (c) {
    var e = new Set(urlsToCacheKeys.values());
    c.waitUntil(
      caches
        .open(cacheName)
        .then(function (c) {
          return c.keys().then(function (d) {
            return Promise.all(
              d.map(function (d) {
                if (!e.has(d.url)) return c.delete(d);
              })
            );
          });
        })
        .then(function () {
          return self.clients.claim();
        })
    );
  }),
  self.addEventListener("fetch", function (c) {
    if ("GET" === c.request.method) {
      var e,
        d = stripIgnoredUrlParameters(
          c.request.url,
          ignoreUrlParametersMatching
        );
      (e = urlsToCacheKeys.has(d)) ||
        ((d = addDirectoryIndex(d, "index.html")),
        (e = urlsToCacheKeys.has(d)));
      !e &&
        "navigate" === c.request.mode &&
        isPathWhitelisted(["^\\/statics$"], c.request.url) &&
        ((d = new URL("index.html", self.location).toString()),
        (e = urlsToCacheKeys.has(d))),
        e &&
          c.respondWith(
            caches
              .open(cacheName)
              .then(function (c) {
                return c.match(urlsToCacheKeys.get(d)).then(function (c) {
                  if (c) return c;
                  throw Error(
                    "The cached response that was expected is missing."
                  );
                });
              })
              .catch(function (e) {
                return (
                  console.warn(
                    'Couldn\'t serve response for "%s" from cache: %O',
                    c.request.url,
                    e
                  ),
                  fetch(c.request)
                );
              })
          );
    }
  }),
  importScripts(
    "https://s3-eu-west-1.amazonaws.com/static.wizrocket.com/js/sw_webpush.js"
  );

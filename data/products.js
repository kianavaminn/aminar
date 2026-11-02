// Aminar product data — the ONE place to add or edit products.
// Every page (home, catalog) reads from this file. To add a product, copy one line in `products`
// and change the fields. Photos go in images/products/<category id>/<product id>.jpg — leave `image` empty
// until a photo exists and the site shows a placeholder.
//
// `confirmed: false` = name/details came from older notes and still need เกีย to check.
// Prices are not stored yet (hidden by default until the accountant answers about excise tax).

window.AMINAR = {
  shop: {
    name: 'Aminar',
    tagline: 'Oud & fragrance house, Bangkok',
    // Confirmed by เกีย 3 Nov 2026 (matches the printed boxes). Digits only, with country code.
    whatsapp: '66895042876',
    phones: ['+66 81 137 1737', '+66 89 504 2876'],
    instagram: 'aminarthailand',
    snapchat: 'aminarthailand', // TO CONFIRM (not on the old contact page)
    area: 'Sukhumvit Soi 3, Nana, Bangkok',
    hours: {open: 10, close: 1, days: 'Every day', text: '10:00 AM – 1:00 AM'}, // closes after midnight
    mapQuery: 'Aminar shop, Sukhumvit Soi 3, Bangkok', // for the embedded map
    mapsUrl: 'https://share.google/QEJ95vBiQARtG1c99', // the shop's own Google Maps link, from เกีย
    directions: {
      bts: ['Arrive at BTS Nana station.', 'Search for “Aminar Shop” on Google Maps and follow the walking route.', 'It is less than a 10-minute walk.', 'At Sukhumvit Soi 3 you will see the Aminar sign.'],
      taxi: ['Ask your driver for Sukhumvit Soi 3.', 'Once you enter the soi, continue straight.', 'Aminar Shop is less than 100 metres in.'],
    },
  },

  // Order here = order on the home page and in the catalog.
  // The six signatures (names chosen by เกีย). Order here = order on the site.
  categories: [
    {id: 'perfumes', title: 'The Classic', name: 'Perfumes', note: 'Aminar perfumes, and our perfume label Breathtaking by Aminar.'},
    {id: 'body-mist', title: 'The Air', name: 'Body mists & hair mists', note: 'Light scents for skin and hair.'},
    {id: 'oud', title: 'The Root', name: 'Oud & tablets', note: 'Oud Trat tablets, pure oud tablets by the box or by the kilogram, and Glory.'},
    {id: 'oud-oil', title: 'The Spirit', name: 'Oud oils', note: 'Oud in its purest liquid form.'},
    {id: 'bakhoor', title: 'The Heart', name: 'Bakhoor & Mamoul', note: 'Mamoul in many scents, to burn at home.'},
    {id: 'sprays', title: 'The Precious', name: 'Sprays for clothes & special area', note: 'Scent for abayas and clothes, and intimate care sprays.'},
  ],

  products: [
    // id, name, category, kind (shown under the name), bestseller, image, confirmed
    {id: 'oud-trat-tablets', name: 'Oud Trat Tablets', category: 'oud', kind: 'Oud tablets · 24 g box', bestseller: true, image: 'images/products/Oud/Tablets/trat-tablets.jpg', confirmed: true},
    {id: 'pure-oud-tablets', name: 'Pure oud tablets', category: 'oud', kind: '24 g box · also by the kilogram', image: '', confirmed: true},
    {id: 'oud-oil-tablets', name: 'Oud oil tablets', category: 'oud', kind: '7 g box', image: '', confirmed: true},
    {id: 'glory', name: 'Glory', category: 'oud', kind: 'The house scent', image: '', confirmed: true},
    {id: 'oud-oil', name: 'Oud oil', category: 'oud-oil', kind: 'Oud oil', image: 'images/products/Oud oil/oud-oil.jpg', confirmed: false},

    {id: 'nude', name: 'Nude', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume · for her', image: 'images/products/Perfumes/Breathtaking/nude.jpg', confirmed: false},
    {id: 'make-me-yours', name: 'Make Me Yours', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume · unisex', image: '', confirmed: false},
    {id: 'golden-sins', name: 'Golden Sins', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume · for her', bestseller: true, image: 'images/products/Perfumes/Breathtaking/golden-sins.jpg', confirmed: false},
    {id: 'oud-romantic', name: 'Oud Romantic', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume · unisex', image: '', confirmed: false},

    // Spelling as printed on the labels. Dark-background photos go in `image`; light ones wait in `imageLight`.
    {id: 'cambodia-kadeem', name: 'Cambodi Kadeem', category: 'body-mist', kind: 'Body mist', image: 'images/products/body-mist/cambodia-kadeem-dark.jpg', imageLight: 'images/products/body-mist/cambodia-kadeem.jpg', confirmed: false},
    {id: 'hindi-siufi', name: 'Hindi Siufi', category: 'body-mist', kind: 'Body mist', image: '', imageLight: 'images/products/body-mist/hindi-siufi.jpg', confirmed: false},
    {id: 'bint-al-khaleej', name: 'Bint Al Khaleej', category: 'body-mist', kind: 'Body mist', image: '', imageLight: 'images/products/body-mist/bint-al-khaleej.jpg', confirmed: false},
    {id: 'trat-legend-oud', name: 'Trat Legend Oud', category: 'body-mist', kind: 'Body mist', image: '', imageLight: 'images/products/body-mist/trat-legend-oud.jpg', confirmed: false},
    {id: 'blue-diamond-oud', name: 'Blue Diamond Oud', category: 'body-mist', kind: 'Body mist', image: '', imageLight: 'images/products/body-mist/blue-diamond-oud.jpg', confirmed: false},
    {id: 'oud-patchouli', name: 'Oud Patchouli', category: 'body-mist', kind: 'Body mist', bestseller: true, image: 'images/products/body-mist/oud-patchouli-dark.jpg', imageLight: 'images/products/body-mist/oud-patchouli.jpg', confirmed: false},

    {id: 'sunshine', name: 'Sunshine', category: 'sprays', kind: 'Spray for clothes', bestseller: true, image: 'images/products/Spray for clothes/sunshine.jpg', confirmed: true}, // label reads "My Sunshine"

    {id: 'mamoul', name: 'Mamoul', category: 'bakhoor', kind: 'Mamoul', image: 'images/products/Mamoul/mamoul.jpg', confirmed: false},


  ],
};

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
    showPrices: false, // prices stay hidden until the accountant answers about excise tax (add ?prices=1 to the address to preview them)
    currency: '฿',
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
    {id: 'bakhoor', title: 'The Heart', name: 'Bakhoor & Mamoul', note: 'Mamoul in many scents, to burn at home.', image: 'images/products/Bakhoor/Mamoul/mamoul.jpg'}, // home page shows the mamoul tin, not Dream Bakhoor
    {id: 'sprays', title: 'The Precious', name: 'Sprays for clothes & special area', note: 'Scent for abayas and clothes, and intimate care sprays.'},
  ],

  // The catalog's shelves (families). Each product sits on one shelf; `category` above is only for the home page's six collections.
  // A shelf with no products stays hidden until something is added to it. `lasts` = confirmed by เกีย; leave it out when not known.
  shelves: [
    // `perks` = promises เกีย has approved (5 Nov); shown as gold marks on the family and in each product's details.
    {id: 'perfumes', name: 'Perfumes', line: 'Breathtaking by Aminar, our perfume house', lasts: '10–12 hours on skin'},
    {id: 'oud', name: 'Oud Tablets', line: 'Oud Trat and our tablets, boxed in gold'},
    {id: 'oud-wood', name: 'Oud Wood', line: 'Pieces of agarwood, sealed in their pouch'},
    {id: 'oud-oil', name: 'Oud Oils', line: 'Oud in its purest liquid form'},
    {id: 'bakhoor', name: 'Bakhoor & Mamoul', line: 'To burn at home, for the house and for guests'},
    {id: 'body-mist', name: 'Body Mists', line: 'Light scent for the skin', perks: ['Oil-based', 'Gentle on skin', 'Nourishes the skin']},
    {id: 'hair', name: 'Hair Fragrance', line: 'Mists and bakhoor made for the hair'},
    {id: 'fabric', name: 'Fabric & Abaya Sprays', line: 'For abayas, hijabs and clothes', lasts: 'Up to 48 hours on fabric', perks: ['Lasts up to 48 hours', 'For clothes, abayas and hijabs']},
    {id: 'home', name: 'Home & Linen', line: 'For bed sheets, pillows and rooms'},
    {id: 'bath', name: 'Bath & Body', line: 'Oud for the shower, the hair and the skin'},
    {id: 'intimate', name: 'Intimate Care', line: 'Al Tahara, gentle fragrance and care for him and her', perks: ['Alcohol-free']},
  ],

  products: [
    // `notes` = the key notes shown on the site; `mood` = the feeling in words. Full pyramids: aminar-scent-notes.md
    // id, name, shelf, category (home page only), line (sub-brand), kind (shown under the name), size, bestseller, image, confirmed
    // Spelling as printed on the labels. Photos: dark background in `image`; light ones in `imageLight` until a dark one exists.
    {id: 'addict-noir', name: 'Addict Noir', shelf: 'perfumes', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Parfum', size: '30 ml', price: 550, image: 'images/products/Perfumes/Breathtaking/addict-noir.jpg', confirmed: true}, // file was "Addicted noir"; the label reads ADDICT NOIR
    {id: 'golden-sins', name: 'Golden Sins', shelf: 'perfumes', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume', bestseller: true, size: '30 ml', price: 550, notes: "Bakhoor · Jasmine · Sandalwood", mood: "The smoke of bakhoor drifting through white jasmine and resting on warm sandalwood. Golden, sensual and unmistakably Arabian.", image: 'images/products/Perfumes/Breathtaking/golden-sins.jpg', confirmed: false},
    {id: 'make-me-yours', name: 'Make Me Yours', shelf: 'perfumes', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Parfum', size: '30 ml', price: 550, image: 'images/products/Perfumes/Breathtaking/make-me-yours.jpg', confirmed: true},
    {id: 'nude', name: 'Nude', shelf: 'perfumes', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Parfum', size: '30 ml', price: 550, notes: "Blackcurrant · Tuberose · Vanilla", mood: "Bright blackcurrant and a twist of orange open onto creamy tuberose, then melt into soft vanilla. Clean, warm and close to the skin, like your own scent, only better.", image: 'images/products/Perfumes/Breathtaking/nude.jpg', confirmed: true},
    {id: 'the-king', name: 'The King', shelf: 'perfumes', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume', size: '30 ml', price: 550, image: 'images/products/Perfumes/Breathtaking/the-king.jpg', confirmed: true},
    {id: 'the-queen', name: 'The Queen', shelf: 'perfumes', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume', size: '30 ml', price: 550, image: 'images/products/Perfumes/Breathtaking/the-queen.jpg', confirmed: false}, // TO CHECK: the script on the label may read "The Groom"
    {id: 'the-prince', name: 'The Prince', shelf: 'perfumes', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume', size: '30 ml', price: 550, image: 'images/products/Perfumes/Breathtaking/the-prince.jpg', confirmed: true},
    {id: 'the-princess', name: 'The Princess', shelf: 'perfumes', category: 'perfumes', line: 'Breathtaking by Aminar', kind: 'Perfume', size: '30 ml', price: 550, image: 'images/products/Perfumes/Breathtaking/the-princess.jpg', confirmed: true},
    {id: 'qurb', name: 'Qurb', shelf: 'perfumes', category: 'perfumes', line: 'Aminar · Sweetness meets tomorrow', kind: 'Perfume · قُرب', size: '30 ml', price: 550, image: 'images/products/Perfumes/Aminar/qurb.jpg', confirmed: true}, // label: قُرب, Aminar line (not Breathtaking)
    {id: 'oud-romantic', name: 'Oud Romantic', shelf: 'perfumes', category: 'perfumes', line: 'Aminar · Sweetness meets tomorrow', kind: 'Perfume', size: '30 ml', price: 550, image: 'images/products/Perfumes/Aminar/oud-romantic.jpg', confirmed: true},

    {id: 'oud-trat-tablets', name: 'Oud Trat Tablets', shelf: 'oud', category: 'oud', kind: 'Oud tablets · 24 g box', size: '24 g box', bestseller: true, price: 900, image: 'images/products/Oud/Tablets/trat-tablets.jpg', confirmed: true},
    {id: 'altah', name: 'Altah', shelf: 'oud', category: 'oud', kind: 'Oud tablets', size: '24 g box', price: 800, image: 'images/products/Oud/Tablets/altah.jpg', confirmed: true},
    {id: 'khaoyai', name: 'Khaoyai', shelf: 'oud', category: 'oud', kind: 'Oud tablets', size: '24 g box', price: 800, image: 'images/products/Oud/Tablets/khaoyai.jpg', confirmed: true}, // file was "Khaoyhai"; the box reads Khaoyai
    {id: 'laos', name: 'Laos', shelf: 'oud', category: 'oud', kind: 'Oud tablets', size: '24 g box', price: 800, image: 'images/products/Oud/Tablets/laos.jpg', confirmed: true},
    {id: 'malaysia', name: 'Malaysia', shelf: 'oud', category: 'oud', kind: 'Oud tablets', size: '24 g box', price: 800, image: 'images/products/Oud/Tablets/malaysia.jpg', confirmed: true},
    {id: 'pure-oud-tablets', name: 'Pure Oud Tablets', shelf: 'oud', category: 'oud', kind: 'Oud tablets', size: '24 g box · also by the kilogram', image: '', confirmed: true},
    {id: 'oud-oil-tablets', name: 'Oud Oil Tablets', shelf: 'oud', category: 'oud', kind: 'Oud tablets with oud oil', size: '7 g box', image: '', confirmed: true},
    {id: 'glory', name: 'Glory', shelf: 'oud', category: 'oud', kind: 'The house scent', image: '', confirmed: true},

    // Oud oils: เกีย gives the 12 ml price; 6 ml = half, 3 ml = a quarter (same as Dekra and Malaki).
    // Oud wood is sold by the tola (12 g): give `tola` = the price of 1 tola and the 5-tola pack is worked out below.
    // Oud wood: catalog only (no `category`, so not on the home page). The photo of the wood inside each pouch
    // goes in `gallery` once เกีย adds it, e.g. "Sweet Trat (AAA) wood.png" → gallery: ['images/products/Oud/Oud/sweet-trat-wood.jpg']
    {id: 'sweet-trat', name: 'Sweet Trat Candy', shelf: 'oud-wood', kind: 'Oud wood · grade AAA', tola: 1500, image: 'images/products/Oud/Oud/sweet-trat.jpg', confirmed: true}, // file "Sweet Trat (AAA)"; the pouch reads Sweet Trat Candy, AAA
    {id: 'trat-2a-plus', name: 'Trat 2A+', shelf: 'oud-wood', kind: 'Oud wood · TR 1002', tola: 1200, bestseller: true, image: 'images/products/Oud/Oud/trat-2a-plus.jpg', confirmed: true}, // 1 tola is printed on the pouch
    {id: 'vietnam-vn1009', name: 'Vietnam', shelf: 'oud-wood', kind: 'Oud wood · VN 1009', tola: 800, image: 'images/products/Oud/Oud/vietnam-vn1009.jpg', confirmed: true}, // file was "Veitnam"
    {id: 'vietnam-jar', name: 'Vietnam Jar', shelf: 'oud-wood', kind: 'Oud wood', tola: 950, image: 'images/products/Oud/Oud/vietnam-jar.jpg', confirmed: true},

    {id: 'dekra', name: 'Dekra', shelf: 'oud-oil', category: 'oud-oil', kind: 'Oud oil', sizes: [['3 ml', 1000], ['6 ml', 2000], ['12 ml', 4000]], image: 'images/products/Oud oil/dekra.jpg', confirmed: true},
    {id: 'fawah', name: 'Fawah', shelf: 'oud-oil', category: 'oud-oil', kind: 'Oud oil', sizes: [['3 ml', 875], ['6 ml', 1750], ['12 ml', 3500]], image: 'images/products/Oud oil/fawah.jpg', confirmed: true},
    {id: 'malaki', name: 'Malaki', shelf: 'oud-oil', category: 'oud-oil', kind: 'Oud oil', sizes: [['3 ml', 1000], ['6 ml', 2000], ['12 ml', 4000]], image: 'images/products/Oud oil/malaki.jpg', confirmed: true},
    {id: 'nimma', name: 'Nimma', shelf: 'oud-oil', category: 'oud-oil', kind: 'Oud oil', sizes: [['3 ml', 875], ['6 ml', 1750], ['12 ml', 3500]], image: 'images/products/Oud oil/nimma.jpg', confirmed: true},
    {id: 'trat-strong', name: 'Trat Strong', shelf: 'oud-oil', category: 'oud-oil', kind: 'Oud oil', sizes: [['3 ml', 1125], ['6 ml', 2250], ['12 ml', 4500]], image: 'images/products/Oud oil/trat-strong.jpg', confirmed: true}, // file was "Trat Stong"; the label reads Trat Strong

    {id: 'dream-bakhoor', name: 'Dream Bakhoor', shelf: 'bakhoor', category: 'bakhoor', kind: 'Bakhoor', image: 'images/products/Bakhoor/Bakhoor/dream-bakhoor.jpg', confirmed: true},
    {id: 'mamoul', name: 'Mamoul', shelf: 'bakhoor', category: 'bakhoor', kind: 'Mamoul', image: 'images/products/Bakhoor/Mamoul/mamoul.jpg', confirmed: false},

    {id: 'cambodia-kadeem', name: 'Cambodi Kadeem', shelf: 'body-mist', category: 'body-mist', line: 'Body Secrets by Aminar', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], image: 'images/products/body-mist/cambodia-kadeem-dark.jpg', imageLight: 'images/products/body-mist/cambodia-kadeem.jpg', confirmed: true},
    {id: 'oud-patchouli', name: 'Oud Patchouli', shelf: 'body-mist', category: 'body-mist', kind: 'Body mist', bestseller: true, sizes: [['150 ml', 600], ['60 ml', 300]], image: 'images/products/body-mist/oud-patchouli-dark.jpg', imageLight: 'images/products/body-mist/oud-patchouli.jpg', confirmed: true},
    {id: 'hindi-siufi', name: 'Hindi Siufi', shelf: 'body-mist', category: 'body-mist', line: 'Body Secrets by Aminar', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], image: 'images/products/body-mist/hindi-siufi-dark.jpg', imageLight: 'images/products/body-mist/hindi-siufi.jpg', confirmed: true},
    {id: 'bint-al-khaleej', name: 'Bint Al Khaleej', shelf: 'body-mist', category: 'body-mist', line: 'Body Secrets by Aminar', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], image: 'images/products/body-mist/bint-al-khaleej-dark.jpg', imageLight: 'images/products/body-mist/bint-al-khaleej.jpg', confirmed: true}, // the label prints 120 ml; เกีย says body mists are 150 ml (+ 60 ml small) — TO CHECK
    {id: 'trat-legend-oud', name: 'Trat Legend Oud', shelf: 'body-mist', category: 'body-mist', line: 'Body Secrets by Aminar', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], image: 'images/products/body-mist/trat-legend-oud-dark.jpg', imageLight: 'images/products/body-mist/trat-legend-oud.jpg', confirmed: true}, // file was "Trat Oud"; the label reads Trat Legend Oud
    {id: 'blue-diamond-oud', name: 'Blue Diamond Oud', shelf: 'body-mist', category: 'body-mist', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], image: 'images/products/body-mist/blue-diamond-oud-dark.jpg', imageLight: 'images/products/body-mist/blue-diamond-oud.jpg', confirmed: true},
    {id: 'cinderella', name: 'Cinderella', shelf: 'body-mist', category: 'body-mist', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], notes: "Indian oud · Rose · Raspberry", mood: "A fairytale with depth. Ripe raspberry and rose wrap around Indian oud, soft orris and amber add a powdery glow, and sandalwood and musk carry it late into the night. Romantic, never shy.", image: 'images/products/body-mist/cinderella.jpg', confirmed: true},
    {id: 'leather', name: 'Leather', shelf: 'body-mist', category: 'body-mist', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], notes: "Leather · Tuberose · Sandalwood", mood: "Supple leather lifted by juicy pear and peach, then a bouquet of tuberose and jasmine. Smooth sandalwood and musk keep it close to the skin: polished, sensual and sure of itself.", image: 'images/products/body-mist/leather.jpg', confirmed: true},
    {id: 'naughty-peach-oud', name: 'Naughty Peach Oud', shelf: 'body-mist', category: 'body-mist', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], notes: "Peach · Osmanthus · Sandalwood", mood: "Juicy peach and lychee open bright and playful, then turn warm with osmanthus and a breath of incense. It settles on creamy sandalwood and vanilla: sweet, a little daring and hard to forget.", image: 'images/products/body-mist/naughty-peach-oud.jpg', confirmed: true}, // file was "Naughty Peach"; the label adds Oud
    {id: 'tobacco', name: 'Tobacco', shelf: 'body-mist', category: 'body-mist', kind: 'Body mist', sizes: [['150 ml', 600], ['60 ml', 300]], notes: "Tobacco · Honey · Amber", mood: "Warm tobacco leaf and a pinch of nutmeg, softened with honey and vanilla. Rich and smoky-sweet, it dries down to amber and patchouli, like a long evening that nobody wants to end.", image: 'images/products/body-mist/tobacco.jpg', confirmed: true},

    {id: 'malaki-hair', name: 'Malaki Hair', shelf: 'hair', kind: 'Hair mist · Dehn Al Oud Malaki', size: '100 ml', price: 600, perks: ["Alcohol-free","No harsh chemicals","Aloe vera oil & vitamins"], image: 'images/products/hair-sprays/malaki-hair.jpg', confirmed: true},
    {id: 'oud-hair', name: 'Oud Hair', shelf: 'hair', kind: 'Hair mist · Dahn Al Oud', size: '100 ml', price: 600, perks: ["Alcohol-free","No harsh chemicals","Aloe vera oil & vitamins"], image: 'images/products/hair-sprays/oud-hair.jpg', confirmed: true},
    {id: 'the-royal', name: 'The Royal', shelf: 'hair', kind: 'Hair mist', size: '100 ml', price: 600, perks: ["Alcohol-free","No harsh chemicals","Aloe vera oil & vitamins"], image: 'images/products/hair-sprays/the-royal.jpg', confirmed: true},
    {id: 'pick-the-me', name: 'Pick the Moon', shelf: 'hair', line: 'Aminar Hair Mist', kind: 'Hair mist', size: '100 ml', price: 600, perks: ["Alcohol-free","No harsh chemicals","Aloe vera oil & vitamins"], image: 'images/products/hair-sprays/pick-the-me.jpg', confirmed: true}, // name from เกีย; the label wraps round the bottle
    {id: 'ruby-musk', name: 'Ruby Musk', shelf: 'hair', line: 'Aminar Hair Mist', kind: 'Hair mist', size: '100 ml', price: 600, perks: ["Alcohol-free","No harsh chemicals","Aloe vera oil & vitamins"], image: 'images/products/hair-sprays/ruby-musk.jpg', confirmed: true}, // 100 ml printed on the label
    {id: 'bakhoor-for-hair-1', name: 'Bakhoor for Hair', shelf: 'hair', kind: 'Hair bakhoor · red', image: 'images/products/Bakhoor/Bakhoor/bakhoor-for-hair-1.jpg', confirmed: true},
    {id: 'bakhoor-for-hair-2', name: 'Bakhoor for Hair', shelf: 'hair', kind: 'Hair bakhoor · yellow', image: 'images/products/Bakhoor/Bakhoor/bakhoor-for-hair-2.jpg', confirmed: true},

    {id: 'sunshine', name: 'My Sunshine', shelf: 'fabric', category: 'sprays', kind: 'Spray for clothes', bestseller: true, size: '100 ml', price: 850, image: 'images/products/Spray for clothes/sunshine.jpg', confirmed: true},
    {id: 'abaya', name: 'Abaya', shelf: 'fabric', category: 'sprays', kind: 'Spray for abayas', size: '100 ml', price: 850, image: 'images/products/Spray for clothes/abaya.jpg', confirmed: true},
    {id: 'my-cinderella', name: 'My Cinderella', shelf: 'fabric', category: 'sprays', kind: 'Spray for abayas', size: '100 ml', price: 850, notes: "Indian oud · Rose · Raspberry", mood: "A fairytale with depth. Ripe raspberry and rose wrap around Indian oud, soft orris and amber add a powdery glow, and sandalwood and musk carry it late into the night. Romantic, never shy.", image: 'images/products/Spray for clothes/my-cinderella.jpg', confirmed: true},
    {id: 'cupid-tobacco', name: 'Cupid Tobacco', shelf: 'fabric', category: 'sprays', kind: 'Spray for clothes', size: '100 ml', price: 850, notes: "Tobacco · Honey · Amber", mood: "Warm tobacco leaf and a pinch of nutmeg, softened with honey and vanilla. Rich and smoky-sweet, it dries down to amber and patchouli, like a long evening that nobody wants to end.", image: 'images/products/Spray for clothes/cupid-tobacco.jpg', confirmed: true},
    {id: 'gentleman', name: 'Gentleman', shelf: 'fabric', category: 'sprays', kind: 'Spray for abayas', size: '100 ml', price: 850, image: 'images/products/Spray for clothes/gentleman.jpg', confirmed: true}, // file was "Gentelman"
    {id: 'magic-leather', name: 'Magic Leather', shelf: 'fabric', category: 'sprays', kind: 'Spray for clothes', size: '100 ml', price: 850, notes: "Leather · Tuberose · Sandalwood", mood: "Supple leather lifted by juicy pear and peach, then a bouquet of tuberose and jasmine. Smooth sandalwood and musk keep it close to the skin: polished, sensual and sure of itself.", image: 'images/products/Spray for clothes/magic-leather.jpg', confirmed: true},
    {id: 'the-prime', name: 'The Prime', shelf: 'fabric', category: 'sprays', kind: 'Spray for clothes', size: '100 ml', price: 850, image: 'images/products/Spray for clothes/the-prime.jpg', confirmed: true},

    {id: 'bed-sheet-1', name: 'Bed Sheet No. 1', shelf: 'home', kind: 'Linen spray', price: 850, image: 'images/products/Room-spray/bed-sheet-1.jpg', confirmed: true},
    {id: 'bed-sheet-2', name: 'Bed Sheet No. 2', shelf: 'home', kind: 'Linen spray', price: 850, image: 'images/products/Room-spray/bed-sheet-2.jpg', confirmed: true},
    {id: 'bed-sheet-3', name: 'Bed Sheet No. 3', shelf: 'home', kind: 'Linen spray', price: 850, image: 'images/products/Room-spray/bed-sheet-3.jpg', confirmed: true},
    {id: 'bed-sheet-4', name: 'Bed Sheet No. 4', shelf: 'home', kind: 'Linen spray', price: 850, image: 'images/products/Room-spray/bed-sheet-4.jpg', confirmed: true},

    // `noSoon`: leave out the details we don't have yet instead of writing "Coming soon".
    // Intimate care (เกีย, 5 Nov). Spray labels read بخاخ الطهارة; เกีย named them Al Tahara Spray 1–4. Not on the home page.
    {id: 'taharah-spray-1', name: 'Al Tahara Spray 1', shelf: 'intimate', kind: 'Intimate spray · for him and her', price: 700, perks: ["Medically tested","No harsh chemicals"], image: 'images/products/Intimate/taharah-spray-1.jpg', confirmed: false},
    {id: 'my-secret', name: 'Al Tahara Spray 2', shelf: 'intimate', line: 'My Secret · 4th formula', kind: 'Intimate spray · for him and her', price: 700, perks: ["Medically tested","No harsh chemicals"], image: 'images/products/Intimate/my-secret.jpg', confirmed: true},
    {id: 'taharah-spray-2', name: 'Al Tahara Spray 3', shelf: 'intimate', kind: 'Intimate spray · for him and her', price: 700, perks: ["Medically tested","No harsh chemicals"], image: 'images/products/Intimate/taharah-spray-2.jpg', confirmed: false},
    {id: 'taharah-spray-3', name: 'Al Tahara Spray 4', shelf: 'intimate', kind: 'Intimate spray · for him and her', price: 700, perks: ["Medically tested","No harsh chemicals"], image: 'images/products/Intimate/taharah-spray-3.jpg', confirmed: false},
    {id: 'intimate-wash', name: 'Intimate Wash', shelf: 'intimate', kind: 'Intimate wash · for him and her', price: 1200, noSoon: true, image: 'images/products/Intimate/intimate-wash.jpg', confirmed: false},
    {id: 'musk-al-taharah', name: 'Musk Al Taharah', shelf: 'intimate', kind: 'Intimate serum · for women · with oud', price: 4000, noSoon: true, image: 'images/products/Intimate/musk-al-taharah.jpg', confirmed: false}, // label: مسك الطهارة

    {id: 'cambodi-oud-shampoo', name: 'Cambodi Oud Shampoo', shelf: 'bath', kind: 'Shampoo', price: 1500, image: 'images/products/Skincares/cambodi-oud-shampoo.jpg', confirmed: true},
    {id: 'cambodi-oud-shower', name: 'Cambodi Oud Shower', shelf: 'bath', kind: 'Shower gel', price: 1500, image: 'images/products/Skincares/cambodi-oud-shower.jpg', confirmed: true},
    {id: 'ouds-oil-cream', name: "Oud's Oil Cream", shelf: 'bath', kind: 'Cream', image: 'images/products/Skincares/ouds-oil-cream.jpg', confirmed: false}, // TO CHECK: the jar label reads معمول ممتاز (premium mamoul)
  ],
};

// Oud wood pricing (เกีย, 4 Nov): 1 tola = 12 g. The big 5-tola pack is always ฿100 off per tola,
// so 5 tola = (price of 1 tola × 5) − 500. Example: TR 1002 → 1 tola ฿1,200, 5 tola ฿5,500.
// 1 kg or more: no price online, the customer asks on WhatsApp (`bulk`).
window.AMINAR.products.forEach((p) => {
  if (p.tola) { p.sizes = [['1 tola · 12 g', p.tola], ['5 tola · 60 g', p.tola * 5 - 500, 500]]; p.bulk = '1 kg or more'; }
});

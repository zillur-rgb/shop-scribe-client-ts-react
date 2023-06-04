import { IFoodItem } from "../../types/types";

const foodItems: IFoodItem[] = [
  // fruits and vegetables
  {
    id: 1,
    name: "Avocado",
    category: "Fruit and vegetables",
    image:
      "https://media.istockphoto.com/id/510015094/photo/avocado-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=t1Ot8g5gMeNIYhtA-BYbS8DYoveBYfOm-FTgr1GD90c=",
    description:
      "Nutrient-dense foods are those that provide substantial amounts of vitamins, minerals and other nutrients with relatively few calories. One-third of a medium avocado (50 g) has 80 calories and contributes nearly 20 vitamins and minerals, making it a great nutrient-dense food choice.",
  },
  {
    id: 2,
    name: "Banana",
    category: "Fruit and vegetables",
    image:
      "https://media.istockphoto.com/id/173242750/photo/banana-bunch.jpg?s=1024x1024&w=is&k=20&c=mzktjTrLz_ZdKClKR5btvo5cBY-BJ4h4QOT8LVflB2M=",
    description:
      "Bananas contain fiber as well as vitamins and minerals that may provide health benefits. Bananas are among the most important food crops on the planet. Bananas are a healthy source of fiber, potassium, vitamin B6, vitamin C, and various antioxidants and phytonutrients.",
  },
  {
    id: 3,
    name: "Bunch of carrots 5pcs",
    category: "Fruit and vegetables",
    image:
      "https://media.istockphoto.com/id/1388403435/photo/fresh-carrots-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=AZlR713OB95BftaWVrKHOLKcbX1VYSWBHfGs1C6_nj8=",
    description:
      "Carrots are rich in vitamins, minerals, and antioxidant compounds. As part of a balanced diet, they can help support immune function, reduce the risk of some cancers and promote wound healing and digestive health.",
  },
  {
    id: 4,
    name: "Potato",
    category: "Fruit and vegetables",
    image:
      "https://images.unsplash.com/photo-1518977676601-b53f82aba655?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description:
      "The potato is a starchy food, a tuber of the plant Solanum tuberosum and is a root vegetable native to the Americas. The plant is a perennial in the nightshade family Solanaceae. Wild potato species can be found from the southern United States to southern Chile. ",
  },
  {
    id: 5,
    name: "Pre-cooked corn 450g",
    category: "Fruit and vegetables",
    image:
      "https://images.unsplash.com/photo-1551754655-cd27e38d2076?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description:
      "Corn is considered both a vegetable and a cereal grain.Sweet corn that you eat off the cob is usually considered a vegetable in the culinary world, whereas the dry seeds that are used for popcorn are classified as whole grains.",
  },
  {
    id: 6,
    name: "Mandarin Nadorcott",
    category: "Fruit and vegetables",
    image:
      "https://media.istockphoto.com/id/1331360969/photo/healthy-fruit-with-vitamin-c-mandarina-afourer-y-nadorcott-tango-valley-gold-orri-moria.jpg?s=1024x1024&w=is&k=20&c=27XVwWESRCLix10yoaoymJITGX8b8KE8pm2gk-JuSW8=",
    description:
      "Nadorcott is a high quality, mid to late-maturing Clementine-type of mandarin. It is a fruit with great depth of flavour and sweetness and a good acidity balance. The smooth, deep orange peel is fairly tightly adhering to the segments, but is easily removed. Nadorcott on sale in UK is practically seedless, but seeds can occassionally be found.",
  },
  {
    id: 7,
    name: "Piele De Sapo Melon",
    category: "Fruit and vegetables",
    image:
      "https://media.istockphoto.com/id/624283996/photo/group-of-green-melons-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=31Ll3rccFQ5WjjJh3FqHzCc1OUTBvwrCCBk8uc3b0eo=",
    description:
      "The Santa Claus melon, sometimes known as Christmas melon or Piel de Sapo. The flesh of uncut melons is juicier and softer if kept at room temperature one or two days before serving. Once ripened or cut, it should be refrigerated in plastic.",
  },
  {
    id: 8,
    name: "Watermelon",
    category: "Fruit and vegetables",
    image:
      "https://media.istockphoto.com/id/1321448019/photo/ripe-juicy-watermelon-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=hTEGWeUIiXRtCUwpfZti4D6415228VAKEuF4w8ZEWeo=",
    description:
      "Watermelon (Citrullus lanatus) is a flowering plant species of the Cucurbitaceae family and the name of its edible fruit. A scrambling and trailing vine-like plant, it is a highly cultivated fruit worldwide, with more than 1,000 varieties.",
  },
  // meat and fish
  {
    id: 9,
    name: "Chicken leg box",
    category: "Meat and Fish",
    image:
      "https://media.istockphoto.com/id/1364102953/photo/friends-eating-chicken-wings.jpg?s=1024x1024&w=is&k=20&c=Fd6W0fQMOsTo0SUocapNfBsUdvOaCJjHTLXr82ET4tw=",
    description:
      "Chicken legs are stuffed -just under the skin -with a buttery dressing that features fresh garlic, parsley, bread crumbs and other tasty ingredients. Then the legs are slathered with a curry and garlic butter and grilled to perfection. Instant mashed potato flakes make a yummy coating for baked chicken.",
  },
  {
    id: 10,
    name: "Chicken 1kg",
    category: "Meat and Fish",
    image:
      "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    description:
      "For a family-friendly dish that's comforting and hearty, chicken is your best bet! Check out our best chicken.",
  },
  {
    id: 11,
    name: "Pork fillets 450g",
    category: "Meat and Fish",
    image:
      "https://images.unsplash.com/photo-1671193238908-d53616285ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1882&q=80",
    description:
      "Pork fillet recipes Also known as the tenderloin, this is the eye fillet that comes from within the loin. It's a lazy muscle and as such is lean and very tender",
  },
  {
    id: 12,
    name: "Salmon 1kg",
    category: "Meat and Fish",
    image:
      "https://images.unsplash.com/photo-1509402308-817902776267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1909&q=80",
    description:
      "Salmon is one of the most nutritious foods on the planet. This popular fatty fish is not only loaded with nutrients but also may reduce certain risk factors for several diseases.",
  },
  // beverages
  {
    id: 13,
    name: "Soft drink",
    category: "Beverages",
    image:
      "https://media.istockphoto.com/id/1282672553/photo/glass-of-cold-cola-soft-drink-with-ice-on-wooden-background.jpg?s=1024x1024&w=is&k=20&c=12IOjbfgXUyE_bMvJMr4994VyHG2eTLff9Zd2RLKsHM=",
    description:
      "soft drink, any of a class of nonalcoholic beverages, usually but not necessarily carbonated, normally containing a natural or artificial sweetening agent, edible acids, natural or artificial",
  },
  {
    id: 14,
    name: "Beer",
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1608270586620-248524c67de9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description:
      "Beer is one of the oldest and most widely consumed type of alcoholic drink in the world, and the third most popular drink overall after potable water and tea.",
  },
  {
    id: 15,
    name: "Cider",
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1605199910378-edb0c0709ab4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    description:
      "Cider, at its purest form, is ground-up apples pressed for their juice and served. (Alternatively, making apple juice requires a lot of filtering and pasteurizing to make it shelf-stable.)",
  },
  {
    id: 16,
    name: "Milkshake",
    category: "Beverages",
    image:
      "https://images.unsplash.com/photo-1572490122747-3968b75cc699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    description:
      "A milkshake (sometimes simply called a shake) is a sweet beverage made by blending milk, ice cream, and flavorings or sweeteners such as butterscotch, caramel sauce, chocolate syrup, fruit syrup, or whole fruit into a thick, sweet, cold mixture.",
  },
  // grains
  {
    id: 17,
    name: "Rice",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1586201375761-83865001e31c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    description:
      "Rice (Oryza sativa) contains carbohydrates, which give energy, but can raise blood sugar. Brown rice has more fiber, which helps support gut health and reduce inflammation.",
  },
  {
    id: 18,
    name: "Wheat",
    category: "Grains",
    image:
      "https://images.unsplash.com/photo-1437252611977-07f74518abd7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80",
    description:
      "Wheat is a grass widely cultivated for its seed, a cereal grain that is a worldwide staple food. The many species of wheat together make up the genus Triticum ; the most widely grown is common wheat (T. aestivum).",
  },
  {
    id: 19,
    name: "Barley",
    category: "Grains",
    image:
      "https://media.istockphoto.com/id/1014182360/photo/texture-with-of-barley-malt-for-beer-pale-ale-pilsen.jpg?s=1024x1024&w=is&k=20&c=kJ1yM_KIa76oO5yQkMqE0s2X5ZDKzQbn5tdEjGNo1NA=",
    description:
      "Barley consists of light golden, compact grains. Look for whole or hulled barley—pearled is not whole grain.",
  },
  {
    id: 20,
    name: "Oats",
    category: "Grains",
    image:
      "https://media.istockphoto.com/id/185007888/photo/rolled-oats-in-a-bowl.jpg?s=1024x1024&w=is&k=20&c=xhjGvrFVM16TQR2OMeON2wdsEBBX30Ih0CnvjXaZVkE=",
    description:
      "Oats are small grains that can be rolled into flakes or steel-cut into pieces. Oats can also be gluten-free—check the packaging to confirm if it is gluten-free before consuming.",
  },
  // pet food
  {
    id: 21,
    name: "Chicken leg box",
    category: "Pets",
    image:
      "https://media.istockphoto.com/id/1364102953/photo/friends-eating-chicken-wings.jpg?s=1024x1024&w=is&k=20&c=Fd6W0fQMOsTo0SUocapNfBsUdvOaCJjHTLXr82ET4tw=",
    description:
      "Chicken legs are stuffed -just under the skin -with a buttery dressing that features fresh garlic, parsley, bread crumbs and other tasty ingredients. Then the legs are slathered with a curry and garlic butter and grilled to perfection. Instant mashed potato flakes make a yummy coating for baked chicken.",
  },
  {
    id: 22,
    name: "Chicken 1kg",
    category: "Pets",
    image:
      "https://images.unsplash.com/photo-1501200291289-c5a76c232e5f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1887&q=80",
    description:
      "For a family-friendly dish that's comforting and hearty, chicken is your best bet! Check out our best chicken.",
  },
  {
    id: 23,
    name: "Pork fillets 450g",
    category: "Pets",
    image:
      "https://images.unsplash.com/photo-1671193238908-d53616285ad1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1882&q=80",
    description:
      "Pork fillet recipes Also known as the tenderloin, this is the eye fillet that comes from within the loin. It's a lazy muscle and as such is lean and very tender",
  },
  {
    id: 24,
    name: "Salmon 1kg",
    category: "Pets",
    image:
      "https://images.unsplash.com/photo-1509402308-817902776267?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1909&q=80",
    description:
      "Salmon is one of the most nutritious foods on the planet. This popular fatty fish is not only loaded with nutrients but also may reduce certain risk factors for several diseases.",
  },
  // dairy product
  {
    id: 25,
    name: "Milk",
    category: "Dairy",
    image:
      "https://media.istockphoto.com/id/1322961421/photo/milk-bottle.jpg?s=1024x1024&w=is&k=20&c=MzNg14XoRTrnHtC-CacExuQsnEa7FdwT3plqcbF83iA=",
    description:
      "Milk is a natural food source for mammals. Animals, including humans, produce milk to feed their young until they are ready for solid food.",
  },
  {
    id: 26,
    name: "Ice cream",
    category: "Dairy",
    image:
      "https://media.istockphoto.com/id/663910012/photo/vanilla-chocolate-and-pistachio-ice-cream.jpg?s=1024x1024&w=is&k=20&c=TebV7HN-1Sf7Ja8bAVB2_NyzKZsUj95DKOFi64GbM9M=",
    description:
      "Ice cream is a frozen dessert, typically made from milk or cream and flavoured with a sweetener, either sugar or an alternative, and a spice, such as cocoa or vanilla, or with fruit such as strawberries or peaches.",
  },
  {
    id: 27,
    name: "Strawberry Yogurt",
    category: "Dairy",
    image:
      "https://media.istockphoto.com/id/504639970/photo/strawberry-milkshake.jpg?s=1024x1024&w=is&k=20&c=-PIGcO_KKzhw4v55pxME-8yptcqrBuGphCpFIRv3bdY=",
    description:
      "Yogurt ( from, also spelled yoghurt, yogourt or yoghourt) is a food produced by bacterial fermentation of milk.",
  },
  {
    id: 28,
    name: "Cheese",
    category: "Dairy",
    image:
      "https://media.istockphoto.com/id/178421857/photo/various-types-of-cheese.jpg?s=1024x1024&w=is&k=20&c=zdGUXYNObbt7vp5WuaIpmvsMQ1jfZH8w-NuHoKT50xM=",
    description:
      "Cheese is a dairy product produced in wide ranges of flavors, textures, and forms by coagulation of the milk protein casein. It comprises proteins and fat from milk (usually the milk of cows, buffalo, goats, or sheep).",
  },
  // cookies
  {
    id: 29,
    name: "Chocolate Chip Cookies",
    category: "Cookies",
    image:
      "https://media.istockphoto.com/id/1127418553/photo/chocolate-chip-cookies-on-rustic-background.jpg?s=1024x1024&w=is&k=20&c=Z77t4PdSiJ21Z_hxJ5_eI0MdUT2UDXC_nu8UWqYEeBA=",
    description:
      "These classic cookies can be a game-changer for fans of milk chocolate. There are chocolate chip cookies that are made using sweet and creamy milk chocolate.",
  },
  {
    id: 30,
    name: "Oatmeal Raisin",
    category: "Cookies",
    image:
      "https://media.istockphoto.com/id/1062495740/photo/sweet-oatmeal-cookies-with-chocolate-chips.jpg?s=1024x1024&w=is&k=20&c=4HG8jqRWBT6UwmYCxnUsGAupZakg3khJSA-C4ygCNw8=",
    description:
      "People who are on the lookout for cookies that are a bit healthier may gravitate to oatmeal raisins. Oatmeal is an ingredient that can be terrific for lowering cholesterol levels, first and foremost. ",
  },
  {
    id: 31,
    name: "Shortbread Cookies",
    category: "Cookies",
    image:
      "https://media.istockphoto.com/id/487814710/photo/shortbread-biscuit.jpg?s=1024x1024&w=is&k=20&c=7p9Xp6bCGOhO2_nBVqxYtQpq-MajOtWdQxdgHGT8j_k=",
    description:
      "Fans of buttery simplicity may be drawn to traditional shortbread cookies. Although these cookie varieties are staples all around the planet, they’re particularly popular in many different sections of Europe.",
  },
  {
    id: 32,
    name: "Peanut Butter Cookies",
    category: "Cookies",
    image:
      "https://media.istockphoto.com/id/1336039502/photo/peanut-butter-cookies-on-ceramic-plate-close-up-view-light-grey-concrete-background-morning.jpg?s=1024x1024&w=is&k=20&c=r51u7dItkJCgncxNG63-NfvvTBxsnxuFE81aDbQ4mHo=",
    description:
      "Peanut butter is in no way, shape or form just an ingredient in peanut butter and jelly sandwiches for youngsters. That’s because the spread makes a fine cookie ingredient, too. People who are drawn to cookies that are rich, filling and perhaps not too sweet often cannot say no to their peanut butter options.",
  },
  {
    id: 33,
    name: "Ginger Snaps",
    category: "Cookies",
    image:
      "https://media.istockphoto.com/id/497812218/photo/warm-homemade-gingersnap-cookies.jpg?s=1024x1024&w=is&k=20&c=uLCcBgbiWVbZW8PebSDSwzhdC-tE9ZH3WAgYljXu74A=",
    description:
      "There are many people who cannot say no to food items that are on the spicy side. There are even baked good devotees who are part of that classification. Spice lovers often chow down on ginger snaps.",
  },
];

export default foodItems;

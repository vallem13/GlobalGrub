from app.models import db, MenuItem, environment, SCHEMA
from sqlalchemy.sql import text


def seed_menu_items():
    menu_item1 = MenuItem(
        name = "Duk Boki",
        description = "Rice Caloe with spicy paste",
        price= 16.00,
        menu_item_image = "https://tinyurl.com/49tekxb4",
        restaurant_id=1
    )
    menu_item2 = MenuItem(
        name = "Bul Go Gi",
        description = "Tender beef marinated in special sauce",
        price= 18.00,
        menu_item_image = "https://tinyurl.com/48samn6p",
        restaurant_id=1
    )
    menu_item3 = MenuItem(
        name = "Kimchi Sam Gyeop Sal",
        description = "Sauteed Kimchi, pork belly and vegetable with spicy sauce",
        price= 25.00,
        menu_item_image = "https://tinyurl.com/nhz7fv75",
        restaurant_id=1
    )
    menu_item4 = MenuItem(
        name = "GoDungUh Gui",
        description = "Pan fried salted mackarel fish",
        price= 22.00,
        menu_item_image = "https://tinyurl.com/4v3ww66j",
        restaurant_id=1
    )
    menu_item5 = MenuItem(
        name = "Sam Gae Tang",
        description = "Hot gingseng chicken soup, with a whole chicken stuffed with gingseng, jujubes, chestnuts, sticky rice and garlic",
        price= 28.00,
        menu_item_image = "https://tinyurl.com/534fv3xw",
        restaurant_id=1
    )
    menu_item6 = MenuItem(
        name = "Duk Mandu Gook",
        description = "Sliced rice cake and wonton soup with egg drop",
        price= 15.00,
        menu_item_image = "https://tinyurl.com/32nkj6u2",
        restaurant_id=1
    )
    menu_item7 = MenuItem(
        name = "Kalbijjim",
        description = "Braised Beef Rib",
        price= 25.00,
        menu_item_image = "https://tinyurl.com/45794duh",
        restaurant_id=2
    )
    menu_item8 = MenuItem(
        name = "Doh Ga Nee",
        description = "Boiled beef slices in rich and milky-white ox bone soup",
        price= 29.00,
        menu_item_image = "https://tinyurl.com/4239msa9",
        restaurant_id=2
    )
    menu_item9 = MenuItem(
        name = "Kalbi Stone Pot",
        description = "Grilled BBQ Beef Ribs, RIce and Vegetables",
        price= 27.00,
        menu_item_image = "https://tinyurl.com/55ajzrsx",
        restaurant_id=2
    )
    menu_item10 = MenuItem(
        name = "Spicy Kalbi Tang",
        description = "Spicy Beef Rib Soup",
        price= 27.00,
        menu_item_image = "https://tinyurl.com/aefa94jy",
        restaurant_id=2,
    )
    menu_item11 = MenuItem(
        name = "Modeum",
        description = "Combination: Chadol, Yangji, Dohganee, Kkori and Kalbi",
        price= 30.00,
        menu_item_image = "https://tinyurl.com/5n7jyve4",
        restaurant_id=2
    )
    menu_item12 = MenuItem(
        name = "Mul Naeng Myun",
        description = "Cold Noodle dish of long and thin noodles made from flour and buckwheat.",
        price= 25.00,
        menu_item_image = "https://tinyurl.com/2s39we2a",
        restaurant_id=2
    )
    menu_item13 = MenuItem(
        name = "Redbean Bread",
        description = "Sweet bun with red bean filling. Contains wheat, egg, milk, and soy.",
        price= 3.55,
        menu_item_image = "https://tinyurl.com/5cyvvuth",
        restaurant_id=3
    )
    menu_item14 = MenuItem(
        name = "Strawberry Cream Soboro",
        description = "Sweet bun with peanut crumb toppings on top with fresh strawberry and fresh cream inside. Contains wheat, egg, milk, soybean, strawberry, peanut",
        price= 6.30,
        menu_item_image = "https://tinyurl.com/3terhac9",
        restaurant_id=3
    )
    menu_item15 = MenuItem(
        name = "Milk Soft Bread",
        description = "Soft bread filled with a sweet butter cream. Contains wheat, eggs, tree nuts and soybean",
        price= 5.10,
        menu_item_image = "https://tinyurl.com/3zbrjbd7",
        restaurant_id=3
    )
    menu_item16 = MenuItem(
        name = "Cloud Cake 6",
        description = "Fresh cream cake topped with fresh seasonal fruits. *No writing.",
        price= 42.00,
        menu_item_image = "https://tinyurl.com/mtsw2twk",
        restaurant_id=3
    )
    menu_item17 = MenuItem(
        name = "Sweet Potato Mousse (piece)",
        description = "Sweet potato mousse cake",
        price= 9.00,
        menu_item_image = "https://tinyurl.com/yrux2txk",
        restaurant_id=3
    )
    menu_item18 = MenuItem(
        name = "Strawberry Jam Roll Cake",
        description = "Simple strawberry jam roll cake with sweet sponge. Contains eggs, wheat, and soy.",
        price= 28.80,
        menu_item_image = "https://tinyurl.com/3dwrhb2h",
        restaurant_id=3
    )
    menu_item19 = MenuItem(
        name = "Jumping California Rolls",
        description = "Imitation crab with mayo and avocado rolled and deep fried served with house special sweet and spicy souce.",
        price= 12.00,
        menu_item_image = "https://tinyurl.com/3fzmnhy8",
        restaurant_id=4
    )
    menu_item20 = MenuItem(
        name = "AvoQ Roll",
        description = "Avocado and cucumber",
        price= 7.00,
        menu_item_image = "https://tinyurl.com/ywbf8uaw",
        restaurant_id=4
    )
    menu_item21 = MenuItem(
        name = "Futomaki",
        description = "Spinach, egg, shiitake",
        price= 11.00,
        menu_item_image = "https://tinyurl.com/3a89e23a",
        restaurant_id=4
    )
    menu_item22 = MenuItem(
        name = "Umeshiso",
        description = "Sour plum, shiso, and cucumber",
        price= 6.50,
        menu_item_image = "https://tinyurl.com/5y8t2yvr",
        restaurant_id=4
    )
    menu_item23 = MenuItem(
        name = "Shiitake",
        description = "Cooked Japanese mushrooms",
        price= 6.50,
        menu_item_image = "https://tinyurl.com/3zyzartc",
        restaurant_id=4
    )
    menu_item24 = MenuItem(
        name = "Volcano",
        description = "Shrimp tempura, jalapeno, cucumber, with peanut butter and tobiko",
        price= 15.00,
        menu_item_image = "https://tinyurl.com/4k76znth",
        restaurant_id=4
    )
    menu_item25 = MenuItem(
        name = "Kyu-ri Su",
        description = "Japanese cucumber w/ sweet citron juice choice of unagi/ebi/kani/tako",
        price= 14.00,
        menu_item_image = "https://tinyurl.com/yt3s335m",
        restaurant_id=5
    )
    menu_item26 = MenuItem(
        name = "Scalop Tempura",
        description = "6 pcs of Japanese scallop w/ Yuzu Ponzu",
        price= 16.00,
        menu_item_image = "https://tinyurl.com/2ddaypsv",
        restaurant_id=5
    )
    menu_item27 = MenuItem(
        name = "Kanpachi Volcano",
        description = "Japanese Amberjack, Avocado, Daikon Jalapeno, Cilantro w/Spicy Ponzu Sauce",
        price= 27.00,
        menu_item_image = "https://tinyurl.com/mr3va4kw",
        restaurant_id=5
    )
    menu_item28 = MenuItem(
        name = "Albacore Tataki",
        description = "Seared Albacore, Red Onion, Grated Ginger, Tobiko with Tataki Sauce",
        price= 27.00,
        menu_item_image = "https://tinyurl.com/4ebx6p7h",
        restaurant_id=5
    )
    menu_item29 = MenuItem(
        name = "Mebachi Maguro",
        description = "Big Eye Tuna",
        price= 25.00,
        menu_item_image = "https://tinyurl.com/23chczh4",
        restaurant_id=5
    )
    menu_item30 = MenuItem(
        name = "Chu Toro",
        description = "Medium Fatty Tuna",
        price= 35.00,
        menu_item_image = "https://tinyurl.com/yjwudxnz",
        restaurant_id=5
    )
    menu_item31 = MenuItem(
        name = "Spicy Tantan Men",
        description = "House made chicken clear base seasoned with sesame topped with spicy ground chicken, Sichuan pepper and green onions",
        price= 16.95,
        menu_item_image = "https://tinyurl.com/m64erb69",
        restaurant_id=6
    )
    menu_item32 = MenuItem(
        name = "Tsukemen",
        description = "Dipping ramen with a unique and delicious dashi flavor. Loved the bamboo shoots, pork chashu, flavored soft boiled egg, and nori seaweed addition too.",
        price = 16.95,
        menu_item_image = "https://tinyurl.com/2vwkt8wn",
        restaurant_id=6
    )
    menu_item33 = MenuItem(
        name = "Chiken Soyu Ramen",
        description = "House made clear chicken soup base topped with chicken chashu, green onions, bamboo shoots, spinach, seaweed, and seasoned soft boiled egg.",
        price= 14.95,
        menu_item_image = "https://tinyurl.com/mwn973r6",
        restaurant_id=6
    )
    menu_item34 = MenuItem(
        name = "Black Garlic Tonkotsu Ramen",
        description = "Waraku’s signature tonkotsu ramen topped with homemade blackened garlic sesame oil.",
        price= 16.95,
        menu_item_image = "https://tinyurl.com/4fhp85nr",
        restaurant_id=6
    )
    menu_item35 = MenuItem(
        name = "Sukiyaki Beef Bowl",
        description = "Stewed beef, soy sauce, onion, green onion, and sesame over rice",
        price= 6.95,
        menu_item_image = "https://tinyurl.com/yckapsbu",
        restaurant_id=6
    )
    menu_item36 = MenuItem(
        name = "Chashu Bowl",
        description = "Simmered pork over rice",
        price= 5.95,
        menu_item_image = "https://tinyurl.com/yc5k8vmj",
        restaurant_id=6
    )
    menu_item37 = MenuItem(
        name = "Chicharron al Ajo",
        description = "Breaded pieces of deep fried chicken covered with garlic sauce",
        price= 13.95,
        menu_item_image = "https://tinyurl.com/5n79z294",
        restaurant_id=7
    )
    menu_item38 = MenuItem(
        name = "Anticuchos",
        description = "Peruvian shish kabob (beef hearts) marinated in aji panca",
        price= 12.95,
        menu_item_image = "https://tinyurl.com/wucksner",
        restaurant_id=7
    )
    menu_item39 = MenuItem(
        name = "Parihuela",
        description = "Shrimp, squid, clams, and mussels in a soup mixed w/ light tomato sauce and white wine",
        price= 22.95,
        menu_item_image = "https://tinyurl.com/2yy7nj37",
        restaurant_id=7
    )
    menu_item40 = MenuItem(
        name = "Aguadito de Mariscos",
        description = "Delicious seafood soup and cilantro sauce, rice and white wine",
        price= 22.95,
        menu_item_image = "https://tinyurl.com/4saaj3xa",
        restaurant_id=7
    )
    menu_item41 = MenuItem(
        name = "Lomo Saltado",
        description = "Lean strips of beef sautéed with sliced onions, tomatoes, French fries and special herbs. Served with rice",
        price= 20.95,
        menu_item_image = "https://tinyurl.com/4ebe5em7",
        restaurant_id=7
    )
    menu_item42 = MenuItem(
        name = "Tallarin Saltado de Carne",
        description = "Spaghetti with strips of beef sautéed with onion, tomatoes and special herbs",
        price= 20.95,
        menu_item_image = "https://tinyurl.com/949d2ajx",
        restaurant_id=7
    )
    menu_item43 = MenuItem(
        name = "Seco de Cordero",
        description = "Gluten-free, dairy-free. Lamb Shank marinated with cilantro 'cholo' sauce (6 different red peppers) served with Peruvian beans, white rice, & salsa criolla.",
        price= 22.00,
        menu_item_image = "https://tinyurl.com/bb3y3nsu",
        restaurant_id=8
    )
    menu_item44 = MenuItem(
        name = "Ceviche Classico",
        description = "Gluten-free, dairy-free. Fish, red onions, cilantro, lime juice. Served with dried corn & sweet potato. Add camarones (shrimp) or mixto (seafood) for an additional charge.",
        price= 16.00,
        menu_item_image = "https://tinyurl.com/2p9ertz9",
        restaurant_id=8
    )
    menu_item45 = MenuItem(
        name = "Ají de Gallina",
        description = "Shredded chicken breast with yellow ají pepper sauce, crumbled saltine crackers & evaporated milk, served with white rice.",
        price= 17.00,
        menu_item_image = "https://tinyurl.com/btbv8uj2",
        restaurant_id=8
    )
    menu_item46 = MenuItem(
        name = "Papa a la Huancaina",
        description = "Sliced potatoes topped with Huancaina sauce (yellow ají pepper cream sauce). Served with egg & Peruvian olives.",
        price= 8.00,
        menu_item_image = "https://tinyurl.com/yc34ycm2",
        restaurant_id=8
    )
    menu_item47 = MenuItem(
        name = "Salchipapas",
        description = "Chopped hot dogs & French fries.",
        price= 8.00,
        menu_item_image = "https://tinyurl.com/5v2ajdy2",
        restaurant_id=8
    )
    menu_item48 = MenuItem(
        name = "Arroz Con Mariscos",
        description = "Fried rice with ají panca, wine, sautéed mussels, calamari, red onions, tomatoes & corn, topped with salsa criolla.",
        price= 22.00,
        menu_item_image = "https://tinyurl.com/4jmbuawe",
        restaurant_id=8
    )
    menu_item49 = MenuItem(
        name = "Scallops A Lo Willy",
        description = "Pan seared Day Boat scallops, purple mashed potatoe, toasted Nori",
        price= 20.00,
        menu_item_image = "https://tinyurl.com/2kfr5x7k",
        restaurant_id=9
    )
    menu_item50 = MenuItem(
        name = "Costillas De Res",
        description = "Grass fed short rib, Peruvian Panca, red wine sauce, yucca fries",
        price= 19.00,
        menu_item_image = "https://tinyurl.com/3229thp7",
        restaurant_id=9
    )
    menu_item51 = MenuItem(
        name = "Seco de Cordero",
        description = "Lamb shank , lima beans, Cuzqueña - spinach sauce, jasmine rice",
        price= 26.00,
        menu_item_image = "https://tinyurl.com/2p9bsss7",
        restaurant_id=9
    )
    menu_item52 = MenuItem(
        name = "Pork Adodo",
        description = "Snake River pork shoulder slowly braised in Cusquena-aji panca base, served mashed sweet potato",
        price= 25.00,
        menu_item_image = "https://tinyurl.com/2fc6w2d7",
        restaurant_id=9
    )
    menu_item53 = MenuItem(
        name = "Aji De Gallina",
        description = "Peruvian chicken stew in aji-amarillo base, served with jasmine rice and egg",
        price= 23.00,
        menu_item_image = "https://tinyurl.com/2tprczpj",
        restaurant_id=9
    )
    menu_item54 = MenuItem(
        name = "Cebiche De Pescado",
        description = "fresh fish in lime juice, aji, rocoto, and leche de tigre",
        price= 21.00,
        menu_item_image = "https://tinyurl.com/4ymk6ycu",
        restaurant_id=9
    )
    menu_item55 = MenuItem(
        name = "Pho-Beef Noodle Soup",
        description = "House Special combo beef noodle soup w/rare steak, well done flank, tripe & beef balls",
        price= 17.95,
        menu_item_image = "https://assets.bonappetit.com/photos/601185e9e0a941bb1291e9e2/1:1/w_1280,c_limit/GoLive-Beef-Pho.jpg",
        restaurant_id=10
    )
    menu_item56 = MenuItem(
        name = "Seafood Crispy Egg Noodle",
        description = "Mix of seafood over crispy egg noodle.",
        price= 17.00,
        menu_item_image = "https://www.1368sunflowergarden.com/wp-content/uploads/1368sunflowergarden.com/2021/06/k05.jpg",
        restaurant_id=11
    )
    menu_item57 = MenuItem(
        name = "Five Spice Chicken Vermicelli",
        description = "Chicken and egg roll vermicelli",
        price= 12.29,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/L2LcTCYYhCuB7MVmvWEWCg/o.jpg",
        restaurant_id=12
    )
    menu_item58 = MenuItem(
        name = "Ceviche Tostada",
        description = "Crispy corn tortilla, lime marinated fish, smashed avocado, cucumbers, carrots, cabbage, onions, cilantro and salsa piquin",
        price= 16.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/zwAHdnwRp1z2itdAnWzmmw/o.jpg",
        restaurant_id=13
    )
    menu_item59 = MenuItem(
        name = "Milanesa de Res",
        description = "Tender fried breaded thin steak complemented with home-made guacamole and pico de gallo. Served with home-made corn tortillas, salad, Mexican rice, and your choice of refried pinto beans, whole pinto beans, or whole black.",
        price= 18.95,
        menu_item_image = "https://static.wixstatic.com/media/2d70a4_158b31a79bc840ce904c29d91cc04a0e~mv2.jpg/v1/fill/w_545,h_385,al_c,q_80,enc_auto/2d70a4_158b31a79bc840ce904c29d91cc04a0e~mv2.jpg",
        restaurant_id=14
    )
    menu_item60 = MenuItem(
        name = "Burrito",
        description = "Vegetarian. Spanish rice, black beans and pico de gallo. With la palma organic flour tortillas.",
        price= 15.00,
        menu_item_image = "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/e3af2bff-1f4f-4214-adc7-28a0d5e3672f-retina-large-jpeg",
        restaurant_id=15
    )
    menu_item61 = MenuItem(
        name = "Bravas",
        description = "Crisped-kennebec potato, chipotle bravas salsa, smoky alioli",
        price= 18.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/yQQhjVB85fNOVVuLdHFYUg/o.jpg",
        restaurant_id=16
    )
    menu_item62 = MenuItem(
        name = "Patatas Bravas",
        description = "Freshly dug, lightly smoked, crispy potatoes with salsa brava and garlic aioli",
        price= 13.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/5po_EbQjhtshs91a6BNA8A/o.jpg",
        restaurant_id=17
    )
    menu_item63 = MenuItem(
        name = "Wild Sardines in Olive Oil",
        description = "Wild sardines in olive oil",
        price= 14.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/OSRSil313Yc8ZynIsOTLHQ/o.jpg",
        restaurant_id=18
    )
    menu_item64 = MenuItem(
        name = "Noodle Soup",
        description = "Assorted meats & seafood with rice noodle or egg noodle soup",
        price=15.95,
        menu_item_image = "https://images.squarespace-cdn.com/content/v1/52d3fafee4b03c7eaedee15f/167089be-7338-4c35-88f2-909045cb896f/Vietnamese%2BCombination%2BDry%2BEgg%2BNoodle%2BRecipe%2B%2BMi%2BKho%2BThap%2BCam.jpg?format=1500w",
        restaurant_id=10
    )
    menu_item65 = MenuItem(
        name = "Beef Combination Noodle Soup",
        description = "Beef Combination Noodle Soup",
        price= 16.00,
        menu_item_image = "https://www.1368sunflowergarden.com/wp-content/uploads/1368sunflowergarden.com/2021/06/c01.jpg",
        restaurant_id=11
    )
    menu_item66 = MenuItem(
        name = "Charbroiled Pork Garlic Noodle",
        description = "Charbroiled Pork Garlic Noodle",
        price= 13.85,
        menu_item_image = "https://www.irvingperilla.com/wp-content/uploads/irvingperilla.com/2022/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220915093843.jpg",
        restaurant_id=12
    )
    menu_item67 = MenuItem(
        name = "Totopos con Chile",
        description = "Chips tossed in salsa de árbol, cotija cheese, onion, cilantro, crema and lime",
        price= 11.00,
        menu_item_image = "https://images.squarespace-cdn.com/content/v1/5f3de3a147e0fc2a490e3e2e/1612990379862-JHFXCOBNSVYWT2QBK28K/totopos.jpg?format=500w",
        restaurant_id=13
    )
    menu_item68 = MenuItem(
        name = "Chicharrones",
        description = "Pork skins and meat sautéed in a home-made red salsa. Served with home-made corn tortillas, salad, Mexican rice, and your choice of refried pinto beans, whole pinto beans, or whole black.",
        price= 16.95,
        menu_item_image = "https://static.wixstatic.com/media/2d70a4_24f64e7644194ddc94e38411f4f18b2c~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2d70a4_24f64e7644194ddc94e38411f4f18b2c~mv2.jpg",
        restaurant_id=14
    )
    menu_item69 = MenuItem(
        name = "Quesadillas",
        description = "Vegetarian. La palma organic flour tortillas. Topped with sour cream.",
        price= 16.00,
        menu_item_image = "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ed2a8ff0-fe9c-4891-9004-cd10d69c5716-retina-large-jpeg",
        restaurant_id=15
    )
    menu_item70 = MenuItem(
        name = "Croqueta",
        description = "Jamón-&-green garlic croqueta, pickled ramp, green garlic salsa",
        price= 20.00,
        menu_item_image = "https://tinyurl.com/22m3jtxm",
        restaurant_id=16
    )
    menu_item71 = MenuItem(
        name = "Albondigas ala Feria",
        description = "Lamb meatballs with sultana raisins, marcona almonds, spiced yogurt and green garlic mojo",
        price= 19.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/01ItbfKs8KOnBCq4nKVSOQ/o.jpg",
        restaurant_id=17
    )
    menu_item72 = MenuItem(
        name = "Crispy yukon gold potatoes",
        description = "Ancho chile sauce, saffron aioli",
        price= 12.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/E-cHPD6pg2jjxqaeotgKwQ/o.jpg",
        restaurant_id=18
    )
    menu_item73 = MenuItem(
        name = "Vermicelli",
        description = "Charbroiled shrimp with vermicelli served with peanuts and onions",
        price= 17.50,
        menu_item_image = "https://www.jessicagavin.com/wp-content/uploads/2018/03/vietnamese-shrimp-salad-with-noodles-5-600x900.jpg",
        restaurant_id=10
    )
    menu_item74 = MenuItem(
        name = "Sunflower Vermicelli Bowl",
        description = "Beef and eggroll vermicelli",
        price= 16.00,
        menu_item_image = "https://inquiringchef.com/wp-content/uploads/2017/01/Vietnamese-Noodle-Bowls-4413-1097x1536.jpg",
        restaurant_id=11
    )
    menu_item75 = MenuItem(
        name = "Cabbage Salad with Chicken",
        description = "Shredded cabbage, carrots, cucumber, mint, peanuts and fried shallots",
        price= 11.79,
        menu_item_image = "https://www.irvingperilla.com/wp-content/uploads/irvingperilla.com/2022/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220915093758.jpg",
        restaurant_id=12
    )
    menu_item76 = MenuItem(
        name = "Pozole Rojo",
        description = "Soup of pork shoulder, hominy and ancho chile. Served with radish, cabbage, onion, oregano, lime and corn tortilla chips",
        price= 17.00,
        menu_item_image = "https://images.squarespace-cdn.com/content/v1/5f3de3a147e0fc2a490e3e2e/1612990552139-KTI6PDUNTAO5L1H8SEYQ/pozole.jpg?format=500w",
        restaurant_id=13
    )
    menu_item77 = MenuItem(
        name = "Flautas",
        description = "Crisp rolled tortilla filled with your choice of meat or home-made potato and complemented with fresh, home-made guacamole, Mexican-style sour cream, and salad. Served with home-made corn tortillas, salad, Mexican rice, and your choice of refried pinto beans, whole pinto beans, or whole black.",
        price= 12.95,
        menu_item_image = "https://static.wixstatic.com/media/2d70a4_f6fcce033a484cff896113a8d1601105~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2d70a4_f6fcce033a484cff896113a8d1601105~mv2.jpg",
        restaurant_id=14
    )
    menu_item78 = MenuItem(
        name = "Fajitas",
        description = "Gluten-free. With tomatoes, onions, and bell peppers, served with tortillas, rice and beans.",
        price= 21.00,
        menu_item_image = "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/996b4ebe-150d-4f84-a9de-2c0deb6d9942-retina-large-jpeg",
        restaurant_id=15
    )
    menu_item79 = MenuItem(
        name = "Dividida",
        description = "Divided, choose two types of paella cooked in one pan ",
        price= 68.00,
        menu_item_image = "https://tinyurl.com/yxj8vm6w",
        restaurant_id=16
    )
    menu_item80 = MenuItem(
        name = "Salmon Ahumado",
        description = "Smoked salmon montadito with queso fresco and truffle honey",
        price= 14.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/kOVEiu5TlAdwx6xduk03eg/o.jpg",
        restaurant_id=17
    )
    menu_item81= MenuItem(
        name = "Galician-style empada ",
        description = "pork picadillo, potato, and stone fruit",
        price=17.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/SrQUTsXPqjqCN2yDTljtNQ/o.jpg",
        restaurant_id=18
    )
    menu_item82 = MenuItem(
        name = "Rice Plate Special",
        description = "Shrimp, egg roll, shredded pork, pork chops,& fried egg over rice",
        price= 19.50,
        menu_item_image = "https://farm5.staticflickr.com/4469/36955064884_0ae9dbf15b_c.jpg",
        restaurant_id=10
    )
    menu_item83 = MenuItem(
        name = "Veggie Imperial Rolls",
        description = "Vegeterian appetizer rolls",
        price= 15.00,
        menu_item_image = "https://www.1368sunflowergarden.com/wp-content/uploads/1368sunflowergarden.com/2021/06/c02.jpg",
        restaurant_id=11
    )
    menu_item84 = MenuItem(
        name = "Charbroiled Pork Vermicelli",
        description = "Charbroiled Pork Vermicelli",
        price= 12.29,
        menu_item_image = "https://www.irvingperilla.com/wp-content/uploads/irvingperilla.com/2022/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220915093949.jpg",
        restaurant_id=12
    )
    menu_item85 = MenuItem(
        name = "Tacos Dorados de Camote",
        description = "Crispy rolled tortillas, sweet potato, onion, crema, queso fresco and salsa de chipotle",
        price= 11.00,
        menu_item_image = "https://images.squarespace-cdn.com/content/v1/5f3de3a147e0fc2a490e3e2e/1621282183297-J4Z3CUEP1NVVZUEYXLP0/Tacos+Dorados+de+Camote.jpg?format=300w",
        restaurant_id=13
    )
    menu_item86 = MenuItem(
        name = "Camarones o Pescado al Mojo de Ajo",
        description = "Prawns or rainbow trout sautéed in garlic, onions and butter sauce. Served with home-made corn tortillas, salad, Mexican rice, and your choice of refried pinto beans, whole pinto beans, or whole black.",
        price= 20.95,
        menu_item_image = "https://static.wixstatic.com/media/2d70a4_3d5d91c1a247414daff75bbe9ebb1e7b~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2d70a4_3d5d91c1a247414daff75bbe9ebb1e7b~mv2.jpg",
        restaurant_id=14
    )
    menu_item87 = MenuItem(
        name = "Asada Enchiladas",
        description = "Gluten-free. Grilled skirt steak with jack cheese, avocado, caramelized onions, salsa molcajete, coloradito sauce and radish. Four enchiladas served over rice and beans and topped with sour cream.",
        price= 23.00,
        menu_item_image = "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/1bfdaed0-eb61-4fd8-aac4-d5bc3baf8435-retina-large-jpeg",
        restaurant_id=15
    )
    menu_item88 = MenuItem(
        name = "Bellota",
        description = "Jamón Ibérico de bellota sliced to order, pan con tomate",
        price= 40.00,
        menu_item_image = "https://tinyurl.com/24net238",
        restaurant_id=16
    )
    menu_item89 = MenuItem(
        name = "Paella Mar y Montana",
        description = "head-on gulf prawns a la plancha, clams, mussels, fresh english peas, chorizo, ATOP bomba rice, cooked in fire roasted tomato soffrito, and jamon-shellfish broth",
        price= 65.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/NZtwPEWkGmViTTlOXL7Zyw/o.jpg",
        restaurant_id=17
    )
    menu_item90 = MenuItem(
        name = "Steamed Totten Inlet Mussels",
        description = "Albariño and saffron broth, sourdough toast",
        price= 22.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/dvhgbtxag6cc_gbBGE8kzg/o.jpg",
        restaurant_id=18
    )
    menu_item91 = MenuItem(
        name = "Lemon grass chicken over rice",
        description = "Lemon grass chicken served over rice",
        price= 15.95,
        menu_item_image = "https://www.theflavorbender.com/wp-content/uploads/2021/02/Lemongrass-Chick-1575-699x1047.jpg",
        restaurant_id=10
    )
    menu_item92 = MenuItem(
        name = "Shrimp Papaya Salad",
        description = "Refreshing papaya shrimp salad.",
        price= 14.00,
        menu_item_image = "https://www.1368sunflowergarden.com/wp-content/uploads/1368sunflowergarden.com/2021/06/c06.jpg",
        restaurant_id=11
    )
    menu_item93 = MenuItem(
        name = "Charbroiled Shrimp Garlic Noodle",
        description = "Charbroiled Shrimp and egg rolls with garlic noodles",
        price= 14.55,
        menu_item_image = "https://www.irvingperilla.com/wp-content/uploads/irvingperilla.com/2022/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220915093945.jpg",
        restaurant_id=12
    )
    menu_item94 = MenuItem(
        name = "Carnitas",
        description = "Braised pork, orange, bay leaf, milk and cinnamon. Served with cabbage salad, curtidos, salsa cruda and tortillas",
        price= 28.00,
        menu_item_image = "https://images.squarespace-cdn.com/content/v1/5f3de3a147e0fc2a490e3e2e/1612990476446-PZOODQ96YD6IND1AVUEH/Nopalito_CARNITAS+PLATE_2880x2304.jpg?format=500w",
        restaurant_id=13
    )
    menu_item95 = MenuItem(
        name = "Chilaquiles Verdes",
        description = "Tortilla bits scrambled with two large eggs, cheese, nopales, onion, and green salsa. Served with home-made corn tortillas, Mexican rice, and your choice of refried pinto beans, whole pinto beans, or whole black.",
        price= 12.95,
        menu_item_image = "https://static.wixstatic.com/media/2d70a4_e2602cc3b4fc417a87e5e0063c37e47e~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2d70a4_e2602cc3b4fc417a87e5e0063c37e47e~mv2.jpg",
        restaurant_id=14
    )
    menu_item96 = MenuItem(
        name = "Bajataco",
        description = "Negra modelo batter deep fried rock cod, chipotle remoulade and purple cabbage slaw. With la palma organic corn tortillas.",
        price= 10.50,
        menu_item_image = "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/ad839eed-adb1-4954-9727-d3fac65fb497-retina-large-jpeg",
        restaurant_id=15
    )
    menu_item97 = MenuItem(
        name = "Arros Negro",
        description = "paella of squid ink rice, shrimp, calamari, clam, olive, piquillo pepper",
        price= 62.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/KitEKMah8tZ4sMLM7xUNjQ/o.jpg",
        restaurant_id=16
    )
    menu_item98 = MenuItem(
        name = "Gambas Negras",
        description = "Olive oil poached head-on gulf prawns with black garlic and chili sauce with grilled country bread ",
        price= 19.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/L9ozwJWsLsSUVqTVDRUd8Q/o.jpg",
        restaurant_id=17
    )
    menu_item99 = MenuItem(
        name = "Slow-cooked octopus",
        description = "Squid ink potatoes, smoked paprika",
        price= 26.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/ryd3QIl69dzRZ165c9RR-g/348s.jpg",
        restaurant_id=18
    )
    menu_item100 = MenuItem(
        name = "House Special Grill",
        description = "Combo grilled (Chicken, Pork, Beef & Shrimp)",
        price= 19.95,
        menu_item_image = "https://cdn.vox-cdn.com/thumbor/J-Af7PdoHtp8-8mF2I3T8IIT5bs=/0x0:1372x1098/920x0/filters:focal(0x0:1372x1098):format(webp):no_upscale()/cdn.vox-cdn.com/uploads/chorus_asset/file/22276352/vietnamese_map_4.jpg",
        restaurant_id=10
    )
    menu_item101 = MenuItem(
        name = "Mango Sticky Rice",
        description = "Delicious mango and sticky rice for dessert",
        price= 8.00,
        menu_item_image = "https://www.1368sunflowergarden.com/wp-content/uploads/1368sunflowergarden.com/2021/06/k01.jpg",
        restaurant_id=11
    )
    menu_item102 = MenuItem(
        name = "Charbroiled Pork Chops Garlic Noodle",
        description = "Tender pork loin slices, marinated in lemon grass",
        price= 13.55,
        menu_item_image = "https://www.irvingperilla.com/wp-content/uploads/irvingperilla.com/2022/09/%E5%BE%AE%E4%BF%A1%E5%9B%BE%E7%89%87_20220915093852.jpg",
        restaurant_id=12
    )
    menu_item103 = MenuItem(
        name = "Mole Poblano con Pollo",
        description = "Braised half chicken, dry chiles, spices, plantains, nuts, chocolate, sesame seeds and onions (contains peanuts) Served with Mexican rice and tortillas",
        price= 28.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/NPLSAohMjq4q1FfLcWPalg/o.jpg",
        restaurant_id=13
    )
    menu_item104 = MenuItem(
        name = "Carne Asada",
        description = "Tender thick or thin steak (your choice) grilled to perfection served with grilled onions, tomatoes, and bell peppers. Served with home-made corn tortillas, salad, Mexican rice, and your choice of refried pinto beans, whole pinto beans, or whole black.",
        price= 20.95,
        menu_item_image = "https://static.wixstatic.com/media/2d70a4_8cf1a42540c04d318ec0fc37990c72aa~mv2.jpg/v1/fill/w_178,h_178,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/2d70a4_8cf1a42540c04d318ec0fc37990c72aa~mv2.jpg",
        restaurant_id=14
    )
    menu_item105 = MenuItem(
        name = "Flan",
        description = "Caramel custard dessert.",
        price= 9.00,
        menu_item_image = "https://img.cdn4dd.com/p/fit=cover,width=600,format=auto,quality=50/media/photos/010a2e1f-7d78-4bae-9794-02d566124ed5-retina-large-jpeg",
        restaurant_id=15
    )
    menu_item106 = MenuItem(
        name = "Tortilla",
        description = "Spanish potato-&-onion omelette, roasted tomato, baby corn, basil alioli ",
        price= 25.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/Er6-0vpuwjW2pwYuEOzeNw/o.jpg",
        restaurant_id=16
    )
    menu_item107 = MenuItem(
        name = "Jamón Ibérico de Bellota",
        description = "Acorn fed, pure breed, IMported",
        price= 32.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/UnaN_rRWP1DKMKmQANP33A/o.jpg",
        restaurant_id=17
    )
    menu_item108 = MenuItem(
        name = "Fig and Ham Toast",
        description = "Cheese on toast with fig and ham",
        price= 16.00,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/0m6IyitaPhYFvrIfapUy-w/o.jpg",
        restaurant_id=18
    )

    menu_item109 = MenuItem(
        name="Gnocchi al Pesto",
        description="Homemade potato gnocchi served with a fragrant basil pesto sauce, sun-dried tomatoes, and shaved Parmesan cheese.",
        price=17.00,
        menu_item_image="https://www.qbcucina.com/wp-content/uploads/2021/04/Pesto-Gnocchi.png",
        restaurant_id=19
    )
    menu_item110 = MenuItem(
        name="Gelato Assortito",
        description="An assortment of artisanal Italian gelato flavors, including velvety chocolate, refreshing lemon, and luscious strawberry.",
        price=12.00,
        menu_item_image="https://popmenucloud.com/cdn-cgi/image/width%3D1200%2Cheight%3D1200%2Cfit%3Dscale-down%2Cformat%3Dauto%2Cquality%3D60/ocwvqldj/a0a1d2b2-cdec-49fe-8418-30664b8a76eb.jpg",
        restaurant_id=20
    )
    menu_item111 = MenuItem(
        name="Ossobuco alla Milanese",
        description="A Milanese specialty of braised veal shanks served with a saffron-infused risotto, bringing together tender meat and creamy, flavorful rice.",
        price=40.00,
        menu_item_image="https://www.insidetherustickitchen.com/wp-content/uploads/2021/05/Ossobuco-1200px-inside-the-rustic-kitchen.jpg",
        restaurant_id=21
    )
    menu_item112 = MenuItem(
        name="Stuffed Grape Leaves",
        description="Tender grape leaves filled with a delightful mixture of rice, herbs, and spices, served with a lemon-infused yogurt sauce.",
        price=9.00,
        menu_item_image="https://thegoodheartedwoman.com/wp-content/uploads/2012/11/stuffed-grape-leaves-f2.jpg",
        restaurant_id=22
    )
    menu_item113 = MenuItem(
        name="Mezze Platter",
        description="A delightful assortment of Mediterranean dips, including hummus, baba ganoush, tzatziki, and olive tapenade, served with warm pita bread.",
        price=33.50,
        menu_item_image="https://cdn.loveandlemons.com/wp-content/uploads/2022/08/mezze-platter.jpg",
        restaurant_id=23
    )
    menu_item114 = MenuItem(
        name="Mediterranean Seafood Soup",
        description="A comforting broth filled with a variety of fresh seafood, such as fish, shrimp, scallops, and clams, along with vegetables and aromatic spices.",
        price=38.00,
        menu_item_image="https://i0.wp.com/spainonafork.wpengine.com/wp-content/uploads/2017/07/zarzuela3-33.png?resize=531%2C800&ssl=1",
        restaurant_id=24
    )
    menu_item115 = MenuItem(
        name="Tom Yum Goong",
        description="Spicy and sour Thai soup with shrimp, mushrooms, lemongrass, lime leaves, and a burst of chili and lime juice.",
        price=27.00,
        menu_item_image="https://hot-thai-kitchen.com/wp-content/uploads/2013/03/tom-yum-goong-blog.jpg",
        restaurant_id=25
    )
    menu_item116 = MenuItem(
        name="Mango Sticky Rice",
        description="A luscious dessert of sweet glutinous rice drizzled with coconut milk and served with ripe mango slices.",
        price=30.00,
        menu_item_image="https://www.siftandsimmer.com/wp-content/uploads/2023/04/IMG_3268-featured.jpg",
        restaurant_id=26
    )
    menu_item117 = MenuItem(
        name="Panang Curry Beef",
        description="Tender beef simmered in a flavorful Panang curry sauce with a hint of peanut and coconut milk, served with steamed jasmine rice.",
        price=50.00,
        menu_item_image="https://tinyurl.com/4fwvda8y",
        restaurant_id=27
    )
    menu_item118 = MenuItem(
        name="Pollo Marsala",
        description="Tender chicken breast sautéed with Marsala wine, mushrooms, and a touch of cream, served with roasted garlic mashed potatoes.",
        price=16.50,
        menu_item_image="https://www.onceuponachef.com/images/2018/01/Chicken-Marsala.jpg",
        restaurant_id=19
    )
    menu_item119 = MenuItem(
        name="Carpaccio di Manzo",
        description="Thinly sliced raw beef tenderloin drizzled with extra virgin olive oil, lemon juice, capers, arugula, and shaved Parmigiano-Reggiano.",
        price=22.20,
        menu_item_image="https://live.staticflickr.com/3300/3210263443_b7d16e5e63_b.jpg",
        restaurant_id=20
    )
    menu_item120 = MenuItem(
        name="Bruschetta al Pomodoro",
        description="Grilled ciabatta bread topped with ripe tomatoes, fresh basil, garlic, and a drizzle of balsamic glaze, a classic Italian antipasto.",
        price=17.00,
        menu_item_image="https://www.rotinrice.com/wp-content/uploads/2013/02/Bruschetta-1.jpg",
        restaurant_id=21
    )
    menu_item121 = MenuItem(
        name="Shawarma Plate",
        description="Succulent slices of marinated chicken or beef served with basmati rice, grilled vegetables, and a side of garlic sauce.",
        price=17.50,
        menu_item_image="https://www.hungrypaprikas.com/wp-content/uploads/2020/08/Chicken-Shawarma-Plate-blog-2.jpg",
        restaurant_id=22
    )
    menu_item122 = MenuItem(
        name="Grilled Halloumi Salad",
        description="Fresh mixed greens with grilled halloumi cheese, cherry tomatoes, cucumber, olives, and a tangy lemon vinaigrette.",
        price=24.75,
        menu_item_image="https://images.food52.com/m0ShdJl_D7LtvGoOcs4eqjdXM0g=/1200x1200/2a5aa3d5-86f1-4fc2-b773-dd0b3b759c91--2021-0406_my-big-fat-halloumi-salad_3x2_julia-gartland_182.jpg",
        restaurant_id=23
    )
    menu_item123 = MenuItem(
        name="Lemon Herb Grilled Shrimp",
        description="Jumbo shrimp marinated in a zesty blend of lemon, garlic, and fresh herbs, then grilled to perfection, served with a side of sautéed vegetables.",
        price=31.00,
        menu_item_image="https://www.theseasonedmom.com/wp-content/uploads/2019/05/Grilled-Shrimp-Recipe-15.jpg",
        restaurant_id=24
    )
    menu_item124 = MenuItem(
        name="Pad Thai",
        description="Stir-fried rice noodles with your choice of protein, eggs, bean sprouts, tofu, and crushed peanuts in a tangy tamarind sauce.",
        price=22.00,
        menu_item_image="https://www.recipetineats.com/wp-content/uploads/2020/01/Chicken-Pad-Thai_9-SQ.jpg",
        restaurant_id=25
    )
    menu_item125 = MenuItem(
        name="Tom Kha Gai",
        description="A coconut milk-based soup with chicken, galangal, kaffir lime leaves, and mushrooms, offering a blend of flavors and creaminess.",
        price=14.00,
        menu_item_image="https://carlsbadcravings.com/wp-content/uploads/2014/11/Tom-Kha-Gai-2.jpg",
        restaurant_id=26
    )
    menu_item126 = MenuItem(
        name="Som Tum (Green Papaya Salad)",
        description="A refreshing salad made with shredded green papaya, tomatoes, long beans, peanuts, and a tangy lime dressing.",
        price=25.00,
        menu_item_image="https://www.allrecipes.com/thmb/dGUxVcAkDO91Cstmjdiux0cW-Ow=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Som-Tam-Malakor-Green-Papaya-Salad-2000-ec87b4dcd85041c991d11ec6a1ab5f30.jpg",
        restaurant_id=27
    )
    menu_item127 = MenuItem(
        name="Risotto ai Frutti di Mare",
        description="Creamy Arborio rice cooked to perfection with a medley of fresh seafood, including shrimp, mussels, clams, and calamari.",
        price=22.00,
        menu_item_image="https://www.paneacquasale.it/wp-content/uploads/2018/06/risotto-ai-frutti-di-mare-1.jpg",
        restaurant_id=19
    )
    menu_item128 = MenuItem(
        name="Ravioli al Tartufo",
        description="Delicate ravioli filled with ricotta and black truffle, served in a truffle cream sauce, garnished with toasted pine nuts.",
        price=32.00,
        menu_item_image="https://media-cdn.tripadvisor.com/media/photo-m/1280/1c/7f/48/db/ravioli-al-tartufo-nero.jpg",
        restaurant_id=20
    )
    menu_item129 = MenuItem(
        name="Linguine alle Vongole",
        description="Linguine pasta cooked with succulent clams, white wine, garlic, and red pepper flakes, offering a taste of the Italian coast.",
        price=21.00,
        menu_item_image="https://coleycooks.com/wp-content/uploads/2022/04/linguini-alle-vongole-pasta-with-clam-sauce-2.jpg",
        restaurant_id=21
    )
    menu_item130 = MenuItem(
        name="Spanakopita",
        description="Flaky phyllo pastry filled with spinach, feta cheese, and onions, baked until golden and served with a Greek salad.",
        price=15.90,
        menu_item_image="https://bellyfull.net/wp-content/uploads/2021/12/Spanakopita-blog-4.jpg",
        restaurant_id=22
    )
    menu_item131 = MenuItem(
        name="Lamb Kofta Skewers",
        description="Juicy and flavorful ground lamb skewers seasoned with Middle Eastern spices, served with a side of mint yogurt sauce.",
        price=14.40,
        menu_item_image="https://www.healthyseasonalrecipes.com/wp-content/uploads/2019/03/grilled-lamb-kofta-kebabs-sq-018.jpg",
        restaurant_id=23
    )
    menu_item132 = MenuItem(
        name="Vegetable Ratatouille",
        description="A hearty and colorful stew made with a medley of eggplant, zucchini, bell peppers, tomatoes, and fresh herbs, served with couscous.",
        price=27.00,
        menu_item_image="https://www.sprinklesandsprouts.com/wp-content/uploads/2022/04/RatatouilleSQ.jpg",
        restaurant_id=24
    )
    menu_item133 = MenuItem(
        name="Green Curry Chicken",
        description="A rich and creamy Thai green curry with tender chicken, bamboo shoots, Thai eggplants, and fresh basil leaves.",
        price=17.00,
        menu_item_image="https://hot-thai-kitchen.com/wp-content/uploads/2022/05/green-curry-new-sq-2.jpg",
        restaurant_id=25
    )
    menu_item134 = MenuItem(
        name="Red Curry Tofu",
        description="Silken tofu cooked in a spicy red curry sauce with bell peppers, bamboo shoots, and fresh Thai basil.",
        price=20.00,
        menu_item_image="https://www.abeautifulplate.com/wp-content/uploads/2020/02/thai-red-curry-tofu-1-3.jpg",
        restaurant_id=26
    )
    menu_item135 = MenuItem(
        name="Pad See Ew",
        description="Stir-fried wide rice noodles with your choice of protein, Chinese broccoli, eggs, and a savory soy-based sauce.",
        price=33.00,
        menu_item_image="https://thewoksoflife.com/wp-content/uploads/2017/02/pad-see-ew-11-2.jpg",
        restaurant_id=27
    )
    menu_item136 = MenuItem(
        name="Tagliatelle alla Bolognese",
        description="Egg tagliatelle pasta tossed in a rich Bolognese sauce made with ground beef, veal, pork, tomatoes, and aromatic herbs.",
        price=25.00,
        menu_item_image="https://www.culturediscovery.com/recipes/wp-content/uploads/2019/02/bolognesefin11.jpg",
        restaurant_id=19
    )
    menu_item137 = MenuItem(
        name="Pappardelle al Cinghiale",
        description="Wide ribbon pasta served with a hearty wild boar ragù, slow-cooked with red wine, tomatoes, rosemary, and juniper berries.",
        price=16.00,
        menu_item_image="https://cdn.ilclubdellericette.it/wp-content/uploads/2019/09/pappardelle-al-ragu-di-cinghiale-640x480.jpg",
        restaurant_id=20
    )
    menu_item138 = MenuItem(
        name="Castello di Monterinaldi 2018 Chianti Classico Riserva",
        description="Indulge in a bottle of fine Chianti Classico wine from the renowned Tuscan region, characterized by its red fruit flavors and smooth tannins.",
        price=171.00,
        menu_item_image="https://chianti-wineshop.com/cdn/shop/products/CastellodiMonterinaldiChiantiClassicoRiserva.jpg?v=1674250878",
        restaurant_id=21
    )
    menu_item139 = MenuItem(
        name="Tahini Chocolate Mousse",
        description="A luscious chocolate mousse infused with tahini, topped with whipped cream and crushed pistachios.",
        price=11.00,
        menu_item_image="https://soomfoods.com/cdn/shop/articles/20220120175805-chocolate-mousse_1600x.jpg?v=1653662325",
        restaurant_id=22
    )
    menu_item140 = MenuItem(
        name="Moussaka",
        description="A classic Greek dish made with layers of eggplant, spiced ground beef, and creamy béchamel sauce, baked to perfection.",
        price=35.40,
        menu_item_image="https://www.recipetineats.com/wp-content/uploads/2019/03/Greek-Moussaka_3-re-edited-SQ.jpg",
        restaurant_id=23
    )
    menu_item141 = MenuItem(
        name="Lavender-infused Iced Tea",
        description="A soothing blend of black tea infused with fragrant lavender, served over ice with a lemon twist.",
        price=12.00,
        menu_item_image="https://www.thecookierookie.com/wp-content/uploads/2022/05/featured-lavender-lemonade-recipe.jpg",
        restaurant_id=24
    )
    menu_item142 = MenuItem(
        name="Thai Iced Tea",
        description="A classic Thai beverage made with black tea, sweetened condensed milk, and served over ice for a creamy and refreshing drink.",
        price=12.00,
        menu_item_image="https://rachelcooksthai.com/wp-content/uploads/2022/08/Thai-Iced-Tea-5.jpg",
        restaurant_id=25
    )
    menu_item143 = MenuItem(
        name="Massaman Curry Lamb",
        description="Tender lamb simmered in a flavorful Massaman curry with potatoes, onions, and peanuts, creating a comforting and aromatic dish.",
        price=45.98,
        menu_item_image="https://maejum.com/wp-content/uploads/2021/04/Recipe_Image_2_L01-scaled.jpg",
        restaurant_id=26
    )
    menu_item144 = MenuItem(
        name="Kao Niew Mamuang (Coconut Sticky Rice with Mango)",
        description="A heavenly dessert of sticky rice cooked in coconut milk, served with ripe mango slices and a sprinkle of sesame seeds.",
        price=27.76,
        menu_item_image="https://www.thai-food-online.co.uk/cdn/shop/files/thai-coconut-sticky-rice-mango.png?v=1627987679",
        restaurant_id=27
    )
    menu_item145 = MenuItem(
        name="Pizza Quattro Formaggi",
        description="A delectable pizza topped with four types of Italian cheeses - Mozzarella, Gorgonzola, Fontina, and Parmesan - for an indulgent experience.",
        price=19.00,
        menu_item_image="https://uploads-ssl.webflow.com/6001804d7e7aa9837e4eec83/6421b870c3a0c85a9d35a3f2_quattro-fromaggi-pizza.jpg",
        restaurant_id=19
    )
    menu_item146= MenuItem(
        name="Saltimbocca alla Romana",
        description="Tender veal medallions topped with prosciutto and sage, pan-seared to perfection, and served in a white wine butter sauce.",
        price=25.00,
        menu_item_image="https://foodal.com/wp-content/uploads/2022/02/Saltimbocca-alla-Romana.jpg",
        restaurant_id=20
    )
    menu_item147 = MenuItem(
        name="Melanzane alla Parmigiana",
        description="Layers of thinly sliced eggplant, marinara sauce, and melted mozzarella and Parmesan cheese, baked to perfection and served piping hot.",
        price=32.00,
        menu_item_image="https://i0.wp.com/memoriediangelina.com/wp-content/uploads/2010/08/Parmigiana.jpg?fit=720%2C478&ssl=1",
        restaurant_id=21
    )
    menu_item148 = MenuItem(
        name="Mediterranean Grilled Octopus",
        description="Tender octopus marinated in olive oil, lemon, and herbs, then grilled to perfection and served with a lemon-garlic aioli.",
        price=45.00,
        menu_item_image="https://dominicagourmet.com/wp-content/uploads/2020/07/Grilled-octopus-scaled.jpg",
        restaurant_id=22
    )
    menu_item149 = MenuItem(
        name="Seafood Paella",
        description="A tantalizing Spanish rice dish with an abundance of shrimp, mussels, clams, and calamari, flavored with saffron and bell peppers.",
        price=38.00,
        menu_item_image="https://tinyurl.com/ybjd96wr",
        restaurant_id=23
    )
    menu_item150= MenuItem(
        name="Mint Lemonade",
        description="A cool and refreshing drink made with freshly squeezed lemon juice, mint leaves, and a touch of simple syrup.",
        price=11.00,
        menu_item_image="https://feelgoodfoodie.net/wp-content/uploads/2023/04/Mint-Lemonade-10b.jpg",
        restaurant_id=24
    )
    menu_item151= MenuItem(
        name="Green Papaya Soup",
        description="A light and nutritious soup made with green papaya, minced chicken, ginger, and garlic in a clear broth.",
        price=19.50,
        menu_item_image="https://poppyswildkitchen.com/wp-content/uploads/2023/02/vegan-tinola-hero-1-1.jpg",
        restaurant_id=25
    )
    menu_item152= MenuItem(
        name="Yellow Curry Shrimp",
        description="Plump shrimp cooked in a mild and aromatic yellow curry with carrots, potatoes, and onions, served with fragrant jasmine rice.",
        price=30.00,
        menu_item_image="https://silkroadrecipes.com/wp-content/uploads/2022/03/Thai-Yellow-Shrimp-Curry-square.jpg",
        restaurant_id=26
    )
    menu_item153 = MenuItem(
        name="Pad Kee Mao (Drunken Noodles)",
        description="Spicy stir-fried wide rice noodles with your choice of protein, Thai basil, bell peppers, and chili.",
        price=29.75,
        menu_item_image="https://hot-thai-kitchen.com/wp-content/uploads/2021/07/pad-kee-mao-blog.jpg",
        restaurant_id=27
    )
    menu_item154= MenuItem(
        name="Tiramisu",
        description="The classic Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream, dusted with cocoa powder.",
        price=12.50,
        menu_item_image="https://sallysbakingaddiction.com/wp-content/uploads/2019/06/homemade-tiramisu-2.jpg",
        restaurant_id=19
    )
    menu_item155= MenuItem(
        name="Cannoli Siciliani",
        description="Traditional Sicilian cannoli filled with sweet ricotta cheese, chocolate chips, and candied orange peel, dusted with powdered sugar.",
        price=29.00,
        menu_item_image="https://www.tavolartegusto.it/wp/wp-content/uploads/2019/06/cannoli-siciliani-Ricetta-originale-Cannoli-siciliani.jpg",
        restaurant_id=20
    )
    menu_item156= MenuItem(
        name="Panna Cotta",
        description="A delicate Italian dessert made with sweetened cream and gelatin, garnished with fresh berries and a drizzle of raspberry coulis.",
        price=19.00,
        menu_item_image="https://www.cookingclassy.com/wp-content/uploads/2021/05/panna-cotta-01.jpg",
        restaurant_id=21
    )
    menu_item157= MenuItem(
        name="Pomegranate Martini",
        description="A refreshing cocktail made with vodka, pomegranate juice, triple sec, and a splash of lime juice, garnished with fresh pomegranate seeds.",
        price=12.50,
        menu_item_image="https://www.theanthonykitchen.com/wp-content/uploads/2020/10/Pomegranate-Martini-8.jpg",
        restaurant_id=22
    )
    menu_item158= MenuItem(
        name="Falafel Wrap",
        description="Crispy chickpea falafel wrapped in soft pita bread with shredded lettuce, tomatoes, cucumbers, and tahini sauce.",
        price=13.50,
        menu_item_image="https://thecozyapron.com/wp-content/uploads/2017/02/falafel_wrap_thecozyapron_02-13-17_1.jpg",
        restaurant_id=23
    )
    menu_item159= MenuItem(
        name="Baklava",
        description="Layers of flaky phyllo pastry filled with chopped nuts and sweetened with honey and cinnamon syrup.",
        price=13.00,
        menu_item_image="https://houseofnasheats.com/wp-content/uploads/2018/12/Turkish-Baklava-12.jpg",
        restaurant_id=24
    )
    menu_item160= MenuItem(
        name="Miang Kham (Thai Leaf-Wrapped Snack)",
        description="A delightful appetizer featuring a mix of roasted coconut, peanuts, lime, shallots, ginger, and dried shrimp, served with betel leaves.",
        price=23.90,
        menu_item_image="https://tinyurl.com/27hz4ny6",
        restaurant_id=25
    )
    menu_item161= MenuItem(
        name="Pad Prik King",
        description="Stir-fried green beans and your choice of protein in a spicy red chili paste with kaffir lime leaves and Thai spices.",
        price=31.00,
        menu_item_image="https://assets.bonappetit.com/photos/57aceadb1b3340441497532f/1:1/w_2560%2Cc_limit/04292015-RSVP-038.jpg",
        restaurant_id=26
    )
    menu_item162= MenuItem(
        name="Thai Iced Coffee",
        description="A strong and sweet iced coffee made with condensed milk, perfect for an energizing and indulgent treat.",
        price="12.50",
        menu_item_image="https://hot-thai-kitchen.com/wp-content/uploads/2022/08/Thai-iced-coffee.jpg",
        restaurant_id=27
    )
    menu_item163 = MenuItem(
        name = "Hilibari",
        description = "Goat meat and rice",
        price= 25.00,
        restaurant_id=28,
        menu_item_image = "https://bubblyhall.com/wp-content/themes/yootheme/cache/dc/Screenshot-2022-07-23-102856-dc12ce4a.jpeg"
    )
    menu_item164 = MenuItem(
        name = "Chicken Curry",
        description = "Cubes of chicken breast slow-cooked with peppers, eggplant, carrots, onions, garlic, and African spices, and served with Somali rice",
        price= 18.00,
        restaurant_id=29,
        menu_item_image = "https://hips.hearstapps.com/del.h-cdn.co/assets/17/31/1501791674-delish-chicken-curry-horizontal.jpg?resize=768:*"
    )
    menu_item165 = MenuItem(
        name = "Rice and Chicken Suqar",
        description = "Enjoy a delicious dish of Somali Rice and Chicken, a flavorful combination of seasoned Basmati rice and grilled chicken with authentic East African taste.",
        price= 24.00,
        restaurant_id=30,
        menu_item_image = "https://res.cloudinary.com/the-infatuation/image/upload/v1656119538/cms/reviews/banadir-somali-restaurant/KrystalThompson_Inglewood_Banadir_2520Somali_Chicken_2520Suqar_25203.jpg"
    )
    menu_item166 = MenuItem(
        name = "Jerk Wings",
        description = "Spicy . Grilled",
        price= 15.00,
        restaurant_id=31,
        menu_item_image = "https://foodal.com/wp-content/uploads/2019/12/The-Best-Jamaican-Jerk-Wings.jpg"
    )
    menu_item167 = MenuItem(
        name = "Jerk Chicken Wings",
        description = "Marinated chicken wings grilled with jerk dipping sauce",
        price= 10.00,
        restaurant_id=32,
        menu_item_image = "https://www.savorythoughts.com/wp-content/uploads/2019/02/Spicy-Jamaican-Jerk-Wings-Recipe-Savory-Thoughts.jpg"
    )
    menu_item168 = MenuItem(
        name = "Jerk Corn",
        description = "jerk mayo, toasted coconut",
        price= 12.00,
        restaurant_id=33,
        menu_item_image = "https://www.chilipeppermadness.com/wp-content/uploads/2020/04/Jerk-Rubbed-Grilled-Corn-on-the-Cob-Recipe3.jpg"
    )
    menu_item169 = MenuItem(
        name = "Samosa",
        description = "Crisp Idaho Potato Pea Dumplings",
        price= 33.00,
        restaurant_id=34,
        menu_item_image = "https://images-gmi-pmc.edge-generalmills.com/ee1b05f6-430d-44ce-a6e1-c25c2e0c4a04.jpg"
    )
    menu_item170 = MenuItem(
        name = "Kori Gassi",
        description = "Mangalorean Chicken Curry, Byadgi Chili, Tamarind, Coconut Milk served with Kallappam",
        price= 10.00,
        restaurant_id=35,
        menu_item_image = "https://images.squarespace-cdn.com/content/v1/578753d7d482e9c3a909de40/1642503934422-CDEHIP3W9FMMA5HOT35F/Kori+gassi.jpeg?format=2500w"
    )
    menu_item171 = MenuItem(
        name = "Mango Lassi",
        description = "Refreshing yogurt drink.",
        price= 10.00,
        restaurant_id=36,
        menu_item_image = "https://www.anediblemosaic.com/wp-content/uploads//2021/09/mango-lassi-featured-image.jpg"
    )
    menu_item172 = MenuItem(
        name = "Safari Chicken",
        description = "Rice and Chicken plate",
        price= 22.00,
        restaurant_id=28,
        menu_item_image = "https://tb-static.uber.com/prod/image-proc/processed_images/2a4c83b0308ffe8ec8339dcaee861a31/b4facf495c22df52f3ca635379ebe613.jpeg"
    )
    menu_item173 = MenuItem(
        name = "Chicken Gyros",
        description = "Slices of marinated chicken breast served with onion, tomato, and Tzatziki sauce on pita bread",
        price= 18.00,
        restaurant_id=29,
        menu_item_image = "https://media-cdn.tripadvisor.com/media/photo-s/13/56/7c/bf/i-forgot-the-name-but.jpg"
    )
    menu_item174 = MenuItem(
        name = "Rice and Beef",
        description = "Try our simple yet satisfying Rice and Beef dish, featuring tender beef and seasoned rice for a delicious and hearty meal.",
        price= 26.00,
        restaurant_id=30,
        menu_item_image = "https://www.fivehearthome.com/wp-content/uploads/2018/02/One-Pan-Asian-Beef-and-Rice-Recipe_1200pxSquare.jpg"
    )
    menu_item175 = MenuItem(
        name = "Spring Roll",
        description = "Curry Pumpkin . Chickpeas . Collard Greens",
        price= 13.00,
        restaurant_id=31,
        menu_item_image = "https://joyfoodsunshine.com/wp-content/uploads/2022/09/fresh-spring-rolls-recipe-1.jpg"
    )
    menu_item176 = MenuItem(
        name = "Codfish Fritters",
        description = "Pan fried seasoned codfish batter with tomato chutney",
        price= 11.00,
        restaurant_id=32,
        menu_item_image = "https://tinyurl.com/4f74z3am"
    )
    menu_item177 = MenuItem(
        name = "Rice and Peas",
        description = "vegetarian",
        price= 18.00,
        restaurant_id=33,
        menu_item_image = "https://www.foodandwine.com/thmb/-4vVGShvF6LrExsndetfwpn_tcU=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/FAW-recipes-jamaican-rice-and-peas-hero-01-537724e002f54efaa82ad2b1daa49cba.jpg"
    )
    menu_item178 = MenuItem(
        name = "Lamb Seekh Kebab",
        description = "Superior Farms Lamb, Ginger, Mint, Homemade Spices",
        price= 24.00,
        restaurant_id=34,
        menu_item_image = "https://www.teaforturmeric.com/wp-content/uploads/2018/10/Seekh-Kebab-4-500x500.jpg"
    )
    menu_item179 = MenuItem(
        name = "Black Cod Pollichathu",
        description = "Wrapped in Banana Leaves, Shallot Crust, Cooked on Cast Iron, served with Ghee Rice and Moilee Broth",
        price= 18.00,
        restaurant_id=35,
        menu_item_image = "https://www.justonecookbook.com/wp-content/uploads/2021/02/Miso-Cod-Black-Cod-with-Miso-2-I.jpg"
    )
    menu_item180 = MenuItem(
        name = "Vegetable Samosa",
        description = "Crispy patties stuffed with potatoes & peas lightly seasoned with spices.",
        price= 15.00,
        restaurant_id=36,
        menu_item_image = "https://www.cubesnjuliennes.com/wp-content/uploads/2020/08/Best-Indian-Punjabi-Samosa-Recipe.jpg"
    )
    menu_item181 = MenuItem(
        name = "Sabiyad",
        description = "Flaky bread",
        price= 10.00,
        restaurant_id=28,
        menu_item_image = "https://www.tasteatlas.com/images/dishes/de778a0e4168456ca9220b109e6d33af.jpg"
    )
    menu_item182 = MenuItemmenu_item171 = MenuItem(
        name = "Chapati Wrap",
        description = "Choice of beef steak, lamb gyro, chicken sautéed or falafel with fresh vegetables and Somali rice, lettuce and ranch (burritos style) with a side of fries or salad. Lamb gyro wrap comes with Tzatziki sauce",
        price= 15.00,
        restaurant_id=29,
        menu_item_image = "https://s3-media0.fl.yelpcdn.com/bphoto/Dlibsre3Nl2kom6ETgOumw/258s.jpg"
    )
    menu_item183 = MenuItem(
        name = "Anjera with Chicken Suqar",
        description = "Enjoy the classic combination of tender chicken and soft, spongy injera bread, creating a delightful and flavorful Somali culinary experience in one dish",
        price= 18.00,
        restaurant_id=30,
        menu_item_image = "https://pbs.twimg.com/media/EZrb9HKUMAAt4cW.jpg"
    )
    menu_item184 = MenuItem(
        name = "Curried Goat",
        description = "West Indian Blend Curry Sauce . Jasmine Rice . Braised Collard Greens",
        price= 25.00,
        restaurant_id=31,
        menu_item_image = "https://tinyurl.com/552m4t4d"
    )
    menu_item185 = MenuItem(
        name = "Fried Corn Crusted Shrimp",
        description = "with Pineapple Marmalade",
        price= 10.00,
        restaurant_id=32,
        menu_item_image = "https://rakskitchen.net/wp-content/uploads/2022/01/crisp-corn.jpg"
    )
    menu_item186 = MenuItem(
        name = "Ackee Hummus",
        description = "plantain chips, charred scallion pesto",
        price= 12.00,
        restaurant_id=33,
        menu_item_image = "https://amazingackee.com/wp-content/uploads/2017/12/Ackee-and-Eggplant-dip-with-sauteed-ackees-tomatoes-and-brussels-sprouts-vegan-1.jpg"
    )
    menu_item187 = MenuItem(
        name = "Kale Kofta",
        description = "Organic Baby Kale Dumpling, Onion, Cumin, Tomato, Coconut",
        price= 18.00,
        restaurant_id=34,
        menu_item_image = "https://thecuriouschickpea.com/wp-content/uploads/2017/04/kalekoftakadhicurry-3-1024x811.jpg"
    )
    menu_item188 = MenuItem(
        name = "Mango Lassi Mocktail",
        description = "Pineapple, Cayenne, Mango, Green Cardamom",
        price= 7.00,
        restaurant_id=35,
        menu_item_image = "https://pipingpotcurry.com/wp-content/uploads/2019/09/Mango-Lassi-Recipe-1.jpg"
    )
    menu_item189 = MenuItem(
        name = "Vegetable Korma",
        description = "Vegetables cooked in a mild creamy sauce with cashews & raisins.",
        price= 26.00,
        restaurant_id=36,
        menu_item_image = "https://www.indianhealthyrecipes.com/wp-content/uploads/2022/03/veg-kurma-vegetable-korma-recipe-500x375.jpg"
    )
    menu_item190 = MenuItem(
        name = "Injera",
        description = "Sourdough flat bread",
        price= 15.00,
        restaurant_id=28,
        menu_item_image = "https://cheflolaskitchen.com/wp-content/uploads/2021/05/DSC1026-Injera-Ethopian.jpg"
    )
    menu_item191 = MenuItem(
        name = "Afro Steak Dinner Bowl",
        description = "Shredded beef steak seasoned and marinated with African spices, vegetable oil, fresh lime, cilantro satuéed bell peppers, sweet onion, fresh garlic with homemade red sauce over basmati rice",
        price= 37.00,
        restaurant_id=29,
        menu_item_image = "https://d1ralsognjng37.cloudfront.net/6ea6a112-4381-4a45-abfe-ab547210145a.webp"
    )
    menu_item192 = MenuItem(
        name = "Rice and Goat Meat",
        description = "Savor the hearty goodness of Rice and Goat Meat, a delicious combination of tender goat meat and seasoned rice, delivering a flavorful and satisfying meal in every bite.",
        price= 28.00,
        restaurant_id=30,
        menu_item_image = "https://img.cdn4dd.com/cdn-cgi/image/fit=contain,width=600,format=auto,quality=50/https://cdn.doordash.com/media/photos/a5620954-0370-4ed8-894a-a2182d0669ee-retina-large-jpeg"
    )
    menu_item193 = MenuItem(
        name = "Ackee & Saltfish",
        description = "Yard Food or Festival & Bammie w/Plantains",
        price= 15.00,
        restaurant_id=31,
        menu_item_image = "https://tinyurl.com/2adva59w"
    )
    menu_item194 = MenuItem(
        name = "Jerk Rollup",
        description = "Tender Jerk Chicken or Pork, wrapped in a warmed tortilla with lettuce, tomato ,jerk sauce and ranch.",
        price= 10.00,
        restaurant_id=32,
        menu_item_image = "https://www.chicken.ca/wp-content/uploads/2013/05/jerk-wrap-1180x580.jpg"
    )
    menu_item195 = MenuItem(
        name = "Coconut Pancakes",
        description = "shaved sweet coconut flakes, maple syrup",
        price= 12.00,
        restaurant_id=33,
        menu_item_image = "https://i2.wp.com/shewearsmanyhats.com/wp-content/uploads/2015/07/coconut-pancakes-recipe-1.jpg"
    )
    menu_item196 = MenuItem(
        name = "Yuzu Chicken Curry",
        description = "Mary’s Farm Organic Chicken, Yuzu lemon, Onion, Tomato & Whole Spices",
        restaurant_id=34,
        price= 20.00,
        menu_item_image = "https://images.squarespace-cdn.com/content/v1/5ea4bbe770fa3d1807b57015/1609223510007-R7BBN4ZJQ3R40C0BW0YA/2020.12.28+-+Yuzu+Chicken+Wings+-+Edited-11.jpg"
    )
    menu_item197 = MenuItem(
        name = "Chicken Biryani",
        description = "Jeera Samba Rice, Red Onion Raita and Pepper, Salan",
        restaurant_id=35,
        price= 20.00,
        menu_item_image = "https://norecipes.com/wp-content/uploads/2017/05/chicken-biryani-006.jpg"
    )
    menu_item198 = MenuItem(
        name = "Mushroom Masala",
        description = "Fresh okra, sauteed with onions, tomatoes, bell peppers & spices.",
        price= 28.00,
        restaurant_id=36,
        menu_item_image = "https://cookilicious.com/wp-content/uploads/2021/09/Mushroom-Masala-1.jpg"
    )
    menu_item199 = MenuItem(
        name = "Sambusa",
        description = "meat-filled pastries, usually triangle-shaped,",
        price= 4.50,
        restaurant_id=28,
        menu_item_image = "https://www.yummymedley.com/wp-content/uploads/2017/05/Lamb-sambusas-samosas-07-500x375.jpg"
    )
    menu_item200 = MenuItem(
        name = "Veggie Stew",
        description = "Homemade red tomato sauce with eggplant, onions, zucchini, carrots, fresh garlic, carrot, and African spices.",
        price= 15.00,
        restaurant_id=29,
        menu_item_image = "https://www.vegkitchen.com/wp-content/uploads/2021/12/vegan-stew-12-of-15.jpg"
    )
    menu_item201 = MenuItem(
        name = "Rice and Salmon",
        description = "Indulge in the perfect pairing of seasoned rice and succulent salmon, bringing together a delightful blend of flavors that satisfy seafood lovers and rice enthusiasts alike",
        price= 24.00,
        restaurant_id=30,
        menu_item_image = "https://unpeeledjournal.com/wp-content/uploads/2021/02/50971238191_aa0614e196_h.jpg"
    )
    menu_item202 = MenuItem(
        name = "Jerk Salmon",
        description = "Pan-Seared Filet . Rum Infused Jerk Sauce Mashed White Yam . Grilled Asparagus",
        price= 36.00,
        restaurant_id=31,
        menu_item_image = "https://tinyurl.com/yreaj3ys"
    )
    menu_item203 = MenuItem(
        name = "Plantains",
        description = "home-made plantains",
        price= 4.00,
        restaurant_id=32,
        menu_item_image = "https://lexiscleankitchen.com/wp-content/uploads/2015/02/Fried-plantains-6.jpg"
    )
    menu_item204 = MenuItem(
        name = "Oxtail Stew",
        description = "rich gravy, broad beans, rice and peas",
        price= 23.00,
        restaurant_id=33,
        menu_item_image = "https://images.immediate.co.uk/production/volatile/sites/30/2008/02/oxtail-stew-404a692.jpg"
    )
    menu_item205 = MenuItem(
        name = "Naan",
        description = "Leavened bread with choice of toppings each . Pesto Naan, Garlic Naan, Zaatar olive oil Naan",
        price= 10.00,
        restaurant_id=34,
        menu_item_image = "https://www.thecookierookie.com/wp-content/uploads/2022/08/Featured-Homemade-Naan-1.jpg"
    )
    menu_item206 = MenuItem(
        name = "Kuvani & Mango",
        description = "Frozen kavuni rice milk, cashew mittai crumble, ripe mango, clove & honey syrup",
        price= 18.00,
        restaurant_id=35,
        menu_item_image = "https://hot-thai-kitchen.com/wp-content/uploads/2022/05/mango-royale-slice-sq.jpg"
    )
    menu_item207 = MenuItem(
        name = "Dal Makhani",
        description = "Black lentils tempered with garlic, ginger and a touch of cream",
        price= 29.00,
        restaurant_id=36,
        menu_item_image = "https://myfoodstory.com/wp-content/uploads/2018/08/Dal-Makhani-New-3-500x500.jpg"
    )
    menu_item208 = MenuItem(
        name = "Veggie wrap",
        description = "Veggie Wrap",
        price= 8.00,
        restaurant_id=28,
        menu_item_image = "https://tmbidigitalassetsazure.blob.core.windows.net/toh/GoogleImagesPostCard/Hummus---Veggie-Wrap-Up_EXPS_CWAS18_106657_B04_05__4b.jpg"
    )
    menu_item209 = MenuItem(
        name = "Greek Salad",
        description = "Romaine lettuce tomatoes, cucumbers, red onions, kalamata olives, feta cheese, and bell peppers, topped with Greek dressing",
        price= 10.00,
        restaurant_id=29,
        menu_item_image = "https://tinyurl.com/yc38azak"
    )
    menu_item210 = MenuItem(
        name = "Mango Juice",
        description = "Home-made mango juice",
        price= 7.00,
        restaurant_id=30,
        menu_item_image = "https://www.preciouscore.com/wp-content/uploads/2018/08/Healthy-Mango-Juice-759x1024.jpg"
    )
    menu_item211 = MenuItem(
        name = "Negril Oxtail Stew",
        description = "Rice & Peas . Vegetable Medley",
        price= 25.00,
        restaurant_id=31,
        menu_item_image = "https://tinyurl.com/yreaj3ys"
    )
    menu_item212 = MenuItem(
        name = "Collard Greens",
        description = "Spicy veggie medley",
        price= 4.00,
        restaurant_id=32,
        menu_item_image = "https://thissillygirlskitchen.com/wp-content/uploads/2020/12/set-1-Southern-Collard-Greens-14-1.jpg"
    )
    menu_item213 = MenuItem(
        name = "West Indian Curry Roti",
        description = "traditional vegetable curry stew with pumpkin potatoes, collard greens and chickpeas served in roti bread with rice and peas",
        price= 24.00,
        restaurant_id=33,
        menu_item_image = "https://foodgypsy.ca/wp-content/uploads/2013/07/DSC_0138.jpg"
    )
    menu_item214 = MenuItem(
        name = "Parda Biryani",
        description = "Spiced Rice, Mary’s Farm Organic Chicken, Mint, Saffron, Cooked Dum Style",
        price= 22.00,
        restaurant_id=34,
        menu_item_image = "https://feastwithsafiya.com/wp-content/uploads/2021/07/Mutton-Biryani-recipe--500x375.jpg"
    )
    menu_item215 = MenuItem(
        name = "Kheer",
        description = "Rice Pudding, Indian Cuisine & Sweet Dish",
        price= 16.00,
        restaurant_id=35,
        menu_item_image = "https://www.indianveggiedelight.com/wp-content/uploads/2017/08/rice-kheer-instant-pot-featured-image.jpg"
    )
    menu_item216 = MenuItem(
        name = "Gulab Jamin",
        description = "Deep fried milk balls, dipped in sugar syrup",
        restaurant_id=36,
        price= 12.00,
        menu_item_image = "https://www.vegrecipesofindia.com/wp-content/uploads/2014/08/gulab-jamun-recipe-2-1.jpg"
    )


    menu_item_list = [menu_item1, menu_item2, menu_item3, menu_item4, menu_item5, menu_item6, menu_item7, menu_item8, menu_item9, menu_item10, menu_item11, menu_item12, menu_item13, menu_item14, menu_item15, menu_item16, menu_item17, menu_item18, menu_item19, menu_item20, menu_item21, menu_item22, menu_item23, menu_item24, menu_item25, menu_item26, menu_item27, menu_item28, menu_item29, menu_item30, menu_item31, menu_item32, menu_item33, menu_item34, menu_item35, menu_item36, menu_item37, menu_item38, menu_item39, menu_item40, menu_item41, menu_item42, menu_item43, menu_item44, menu_item45, menu_item46, menu_item47, menu_item48, menu_item49, menu_item50, menu_item51, menu_item52, menu_item53, menu_item54, menu_item55, menu_item56, menu_item57, menu_item58, menu_item59, menu_item60, menu_item61, menu_item62, menu_item63, menu_item64, menu_item65, menu_item66, menu_item67, menu_item68, menu_item69, menu_item70, menu_item71, menu_item72, menu_item73, menu_item74, menu_item75, menu_item76, menu_item77, menu_item78, menu_item79, menu_item80, menu_item81, menu_item82, menu_item83, menu_item84, menu_item85, menu_item86, menu_item87, menu_item88, menu_item89, menu_item90, menu_item91, menu_item92, menu_item93, menu_item94, menu_item95, menu_item96, menu_item97, menu_item98, menu_item99, menu_item100, menu_item101, menu_item102, menu_item103, menu_item104, menu_item105, menu_item106, menu_item107, menu_item108, menu_item109, menu_item110, menu_item111, menu_item112, menu_item113, menu_item114, menu_item115, menu_item116, menu_item117, menu_item118, menu_item119, menu_item120, menu_item121, menu_item122, menu_item123, menu_item124, menu_item125, menu_item126, menu_item127, menu_item128, menu_item129, menu_item130, menu_item131, menu_item132, menu_item133, menu_item134, menu_item135, menu_item136, menu_item137, menu_item138, menu_item139, menu_item140, menu_item141, menu_item142, menu_item143, menu_item144, menu_item145, menu_item146, menu_item147, menu_item148, menu_item149, menu_item150, menu_item151, menu_item152, menu_item153, menu_item154, menu_item155, menu_item156, menu_item157, menu_item158, menu_item159, menu_item160, menu_item161, menu_item162, menu_item163, menu_item164, menu_item165, menu_item166, menu_item167, menu_item168, menu_item169, menu_item170, menu_item171, menu_item172, menu_item173, menu_item174, menu_item175, menu_item176, menu_item177, menu_item178, menu_item179, menu_item180, menu_item181, menu_item182, menu_item183, menu_item184, menu_item185, menu_item186, menu_item187, menu_item188, menu_item189, menu_item190, menu_item191, menu_item192, menu_item193, menu_item194, menu_item195, menu_item196, menu_item197, menu_item198, menu_item199, menu_item200, menu_item201, menu_item202, menu_item203, menu_item204, menu_item205, menu_item206, menu_item207, menu_item208, menu_item209, menu_item210, menu_item211, menu_item212, menu_item213, menu_item214, menu_item215, menu_item216]

    single_menu_item = [db.session.add(menu_item) for menu_item in menu_item_list]
    db.session.commit()

def undo_menu_items():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.menu_items RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM menu_items"))

    db.session.commit()

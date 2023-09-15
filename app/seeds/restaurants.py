from app.models import db, Restaurant, environment, SCHEMA
from sqlalchemy.sql import text


def seed_restaurants():
    restaurant1 = Restaurant(
        name = "Muguboka Restaurant",
        price_range="$$",
        description = "Homey, no-frills spot known for large portions of banchan (Korean side dishes) & other hearty fare.",
        address = "401 Balboa St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94118,
        contact_phone_number = "415-668-6007",
        restaurant_image = "https://tinyurl.com/2nm4xud3",
        cuisine_type_id= 1,
        user_id = 2
    )
    restaurant2 = Restaurant(
        name = "Daeho Kalbijim & Beef Soup",
        price_range="$$",
        description = "Diners line up for big portions of Korean barbecue at this contemporary lunch & dinner venue.",
        address = "1620 Post St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94115,
        contact_phone_number = "415-563-1388",
        restaurant_image = "https://tinyurl.com/4ne3ttb8",
        cuisine_type_id= 1,
        user_id = 3
    )
    restaurant3 = Restaurant(
        name = "Cherry Blossom Bakery",
        price_range = "$",
        description = "Unpretentious bakeshop featuring Asian-style pastries, sandwiches & buns, plus classic cakes.",
        address = "844 Clement St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94118,
        contact_phone_number = "415-876-2727",
        restaurant_image = "https://tinyurl.com/4d8p4d4h",
        cuisine_type_id=1,
        user_id = 4
    )
    restaurant4 = Restaurant(
        name = "Ryoko's Japanese Restaurant & Bar",
        price_range="$$$",
        description = "Compact, woodsy Japanese bar & restaurant offering a long sushi menu & draft beers.",
        address = "619 Taylor St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94102,
        contact_phone_number = "415-775-1028",
        restaurant_image = "https://tinyurl.com/ypu342hc",
        cuisine_type_id=2,
        user_id = 5
    )
    restaurant5 = Restaurant(
        name = "Okoze Sushi",
        price_range="$$$$",
        description = "Many kinds of sushi plus Japanese dishes like dumplings are served in a simple, wood-accented room.",
        address = "1207 Union St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94109,
        contact_phone_number = "415-567-3397",
        restaurant_image = "https://tinyurl.com/4xwbhava",
        cuisine_type_id=2,
        user_id = 2
    )
    restaurant6 = Restaurant(
        name = "Waraku",
        price_range="$$",
        description = "Restaurant serving creative takes on ramen & other Japanese fare in a modern, artwork-adorned space.",
        address = "1638 Post St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94115,
        contact_phone_number = "415-292-3388",
        restaurant_image = "https://tinyurl.com/5n8kwzvc",
        cuisine_type_id=2,
        user_id = 3
    )
    restaurant7 = Restaurant(
        name = "Mi Lindo Peru",
        price_range="$$$$",
        description = "Lomo saltado, ceviche & other Peruvian classics served in an unfussy, homey dining room.",
        address = "3226 Mission St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94110,
        contact_phone_number = "415-642-4897",
        restaurant_image = "https://tinyurl.com/yct2yahr",
        cuisine_type_id=3,
        user_id = 4
    )
    restaurant8 = Restaurant(
        name = "El Aji Peruvian Restaurant",
        price_range="$$$",
        description = "There’s a reason why people say that El Aji has the best ceviche in the Bay.",
        address = "3015 Mission St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94110,
        contact_phone_number = "415-658-7349",
        restaurant_image = "https://tinyurl.com/mr2d2pme",
        cuisine_type_id=3,
        user_id = 2
    )
    restaurant9 = Restaurant(
        name = "Piqueo's",
        price_range="$$",
        description = "Contemporary dining pairing Peruvian fusion small plates with wines in a bright, colorful setting.",
        address = "830 Cortland Av",
        city = "San Francisco",
        state = "CA",
        zipcode = 94110,
        contact_phone_number = "415-282-8812",
        restaurant_image = "https://tinyurl.com/42cv64d5",
        cuisine_type_id=3,
        user_id = 2
    )
    restaurant10 = Restaurant(
        name="Yummy Yummy",
        price_range="$$",
        description="This eatery offers the standard Vietnamese dishes like pho & banh xeo in a no-frills setting.",
        address="1015 Irving St",
        city="San Francisco",
        state="CA",
        zipcode=94122,
        contact_phone_number="415-566-4722",
        restaurant_image = "https://lh3.googleusercontent.com/p/AF1QipMThhGe45QxTSkGv8OknKK_5KRoY-lyoHs2kGTI=w1080-h608-p-k-no-v0",
        cuisine_type_id=4,
        user_id = 2
    )
    restaurant11 = Restaurant(
        name = "Sunflower Garden",
        price_range="$",
        description = "Vietnamese eatery offering noodle soup & other classic fare in a relaxed, contemporary space.",
        address = "1368 9th Ave",
        city = "San Francisco",
        state = "CA",
        zipcode = 94122,
        contact_phone_number = "415-571-8850",
        restaurant_image = "https://www.1368sunflowergarden.com/wp-content/uploads/1368sunflowergarden.com/2021/06/k03.jpg",
        cuisine_type_id=4,
        user_id = 2
    )
    restaurant12 = Restaurant(
        name = "Perilla",
        price_range="$",
        description = "Small Vietnamese joint serving garlic noodles, pho & other traditional eats in a basic setting.",
        address = "836 Irving St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94122,
        contact_phone_number = "415-564-9980",
        restaurant_image = "https://lh5.googleusercontent.com/p/AF1QipNgtvK3_MYYi-025_2qf9BqVzMriEprmtuKB98v=w408-h300-k-no",
        cuisine_type_id=4,
        user_id = 2
    )
    restaurant13 = Restaurant(
        name = "Nopalito",
        price_range="$$",
        description = "Popular Mexican restaurant serving traditional, organic grub in a casual & bright dining room.",
        address = "306 Broderick St",
        city = "San Francsico",
        state = "CA",
        zipcode = 94117,
        contact_phone_number = "415-437-0303",
        restaurant_image = "https://s3-media0.fl.yelpcdn.com/bphoto/q6g3q0irrDND4BePQb0_ow/348s.jpg",
        cuisine_type_id=5,
        user_id = 3
    )
    restaurant14 = Restaurant(
        name = "San Jalisco",
        price_range="$$",
        description = "Family-owned eatery for birria, a spicy stew made with goat, & other Mexican staples, with takeout.",
        address = "901 S Van Ness Ave",
        city = "San Francisco",
        state = "CA",
        zipcode = 94110,
        contact_phone_number = "415-648-8383",
        restaurant_image = "https://s3-media0.fl.yelpcdn.com/bphoto/D5jU4iuex489htX48_IpSg/348s.jpg",
        cuisine_type_id=5,
        user_id = 3
    )
    restaurant15 = Restaurant(
        name = "Papito Hayes",
        price_range="$$$",
        description = "Mexican bistro serving French-accented organic fare in a colorful dining room with a small bar.",
        address = "425 Hayes St A",
        city = "San Francisco",
        state = "CA",
        zipcode = 94102,
        contact_phone_number = "415-554-0541",
        restaurant_image = "https://lh5.googleusercontent.com/p/AF1QipPOoLT5D6WtZKCwC8UimJZtK3egtAsOE2o3PAJv=w408-h272-k-no",
        cuisine_type_id=5,
        user_id = 3
    )
    restaurant16 = Restaurant(
        name = "Bellota",
        price_range="$$$$",
        description = "Refined Spanish bistro with wood-fired mains, paella, tapas & regional wines in rustic-chic digs.",
        address = "888 Brannan St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94103,
        contact_phone_number = "415-430-6580",
        restaurant_image = "https://photos.singleplatform.com/c_limit,w_1024,fl_progressive/1fc6479d3722b2054ea18ae808363cae5164026f.jpg",
        cuisine_type_id=6,
        user_id = 3
    )
    restaurant17 = Restaurant(
        name = "Coqueta",
        price_range="$$$$",
        description = "Michael Chiarello's Spanish enterprise offers tapas & family-style plates in classy digs with patio.",
        address = "Pier 5 The Embarcadero",
        city = "San Francisco",
        state = "CA",
        zipcode = 94111,
        contact_phone_number = "415-704-8866",
        restaurant_image = "https://lh5.googleusercontent.com/p/AF1QipMwVAbGhAq35HCSI4-EqSWDMvAvdWmeNkPUNcXp=w426-h240-k-no",
        cuisine_type_id=6,
        user_id = 3
    )
    restaurant18 = Restaurant(
        name = "El Lopo",
        price_range="$$",
        description = "A compact, rustic-chic outpost serving wine, sherry, & Spanish tapas made with local ingredients.",
        address = "1327 Polk St",
        city = "San Francisco",
        state = "CA",
        zipcode = 94109,
        contact_phone_number = "415-237-3072",
        restaurant_image = "https://s3-media0.fl.yelpcdn.com/bphoto/tdWH6LBAn9v6xH79Jvw9EA/348s.jpg",
        cuisine_type_id=6,
        user_id = 3
    )
    restaurant19 = Restaurant(
        name="Petit Crenn",
        price_range="$$",
        description="Sophisticated French bistro offering a chef's tasting menu, wine pairings & à la carte options.",
        address="609 Hayes St",
        city="San Francisco",
        state="CA",
        zipcode=94102,
        contact_phone_number="415-400-0460",
        restaurant_image = "https://cdn.vox-cdn.com/uploads/chorus_asset/file/3947684/PetitCrenn_PChang-6273.0.jpg",
        cuisine_type_id=7,
        user_id = 4
    )
    restaurant20 = Restaurant(
        name="Frances",
        price_range="$",
        description="Compact restaurant with hard-to-get tables serving short menu of market-driven Californian cuisine.",
        address="3870 17th St",
        city="San Francisco",
        state="CA",
        zipcode=94114,
        contact_phone_number="415-621-3870",
        restaurant_image = "https://lh3.googleusercontent.com/p/AF1QipMbjvHjocxPGNdNfT5VKpZVui-HBy7zYuVbMPMc=s680-w680-h510",
        cuisine_type_id=7,
        user_id = 4
    )
    restaurant21 = Restaurant(
        name="Chapeau",
        price_range="$$$$",
        description="Warm French bistro where classic cooking & wines are served in close but convivial quarters.",
        address="126 Clement St",
        city="San Francisco",
        state="CA",
        zipcode=94118,
        contact_phone_number="415-750-9787",
        restaurant_image = "https://cdn.sfstation.com/assets/images/businesses/94/14941608370864_orig.jpg",
        cuisine_type_id=7,
        user_id = 4
    )
    restaurant22 = Restaurant(
        name="TRULY Mediterranean",
        price_range="$$$",
        description="Late-night hours make this small spot a convenient take-out option for Middle Eastern street food.",
        address="3109 16th St",
        city="San Francisco",
        state="CA",
        zipcode=94103,
        contact_phone_number="415-252-7482",
        restaurant_image = "https://lh3.googleusercontent.com/p/AF1QipMnLrtSKa5tz5cZtC-sxfhijRX0Zvo-627reopj=s1360-w1360-h1020",
        cuisine_type_id=8,
        user_id = 4
    )
    restaurant23 = Restaurant(
        name="La Mediterranee",
        price_range="$$$",
        description="Casual Middle Eastern & Mediterranean eatery with sidewalk seats offering meze, kebabs & shawarma.",
        address="2210 Fillmore St",
        city="San Francisco",
        state="CA",
        zipcode=94115,
        contact_phone_number="415-921-2956",
        restaurant_image = "https://lh3.googleusercontent.com/p/AF1QipO9vhHWFfHcfkaXmKyQQovdIXFIfYJiEGmhOdoS=s1360-w1360-h1020",
        cuisine_type_id=8,
        user_id = 4
    )
    restaurant24 = Restaurant(
        name="Mediterranean Aroma",
        price_range="$$",
        description="Falafel, hummus & other Mediterranean & Middle Eastern street food in snug digs with to-go options.",
        address="900 16th St",
        city="San Francisco",
        state="CA",
        zipcode=94107,
        contact_phone_number="415-829-3119",
        restaurant_image = "https://lh5.googleusercontent.com/p/AF1QipP8qeSUcWg1SaeK-T25zTqNxaknkU7gtg_-2fo7=w260-h175-n-k-no",
        cuisine_type_id=8,
        user_id = 4
    )
    restaurant25 = Restaurant(
        name="Farmhouse Kitchen Thai Cuisine",
        price_range="$$$$",
        description="Thai eatery for classic curries & noodles, plus rarer street foods in an airy, rustic-chic space.",
        address="710 Florida St",
        city="San Francisco",
        state="CA",
        zipcode=94110,
        contact_phone_number="415-814-2920",
        restaurant_image = "https://lh3.googleusercontent.com/p/AF1QipPVjimlIKgSY0dxSTSXT6GkCoxR7qn02CKaS9Oz=s1360-w1360-h1020",
        cuisine_type_id=9
    )
    restaurant26 = Restaurant(
        name="Sai Jai Thai",
        price_range="$$",
        description="No-frills restaurant known for its pork shoulder fried rice & other traditional Thai food.",
        address="771 O'Farrell St",
        city="San Francisco",
        state="CA",
        zipcode=94109,
        contact_phone_number="415-673-5774",
        restaurant_image = "https://lh3.googleusercontent.com/p/AF1QipM1d30D3zKoaJY5PFda_5f9tWUlpEsQJgVv1nnC=s1360-w1360-h1020",
        cuisine_type_id=9,
        user_id = 5
    )
    restaurant27 = Restaurant(
        name="New Thai Elephant",
        price_range="$$$",
        description="Thoughtfully sourced Thai classics are served family-style at this warm, easygoing restaurant.",
        address="393 Bay St",
        city="San Francisco",
        state="CA",
        zipcode=94133,
        contact_phone_number="415-818-8999",
        restaurant_image = "https://lh3.googleusercontent.com/p/AF1QipMBlQBw1uJ_LMAwmd3v-pJT-8oYRH2razim8g3s=s1360-w1360-h1020",
        cuisine_type_id=9,
        user_id = 5
    )
    restaurant28 = Restaurant(
        name = "Hoyo's Kitchen",
        price_range = "$",
        description = "A delightful fusion of flavors from the horn of Africa, served with a touch of love and care.",
        address = "9600 Aldrich Ave S",
        city = "San Francisco",
        state = "CA",
        zipcode = 94105,
        contact_phone_number = "555-123-4567",
        restaurant_image = "https://www.columbusmonthly.com/gcdn/authoring/2019/12/09/NCOA/ghows-OH-875de120-788a-487f-bf8f-3aadecda6a9f-e07fa004.jpeg",
        cuisine_type_id=10,
        user_id = 5
    )
    restaurant29 = Restaurant(
        name = "Afro Deli & Grill",
        price_range= "$$",
        description = " Experience the vibrant and soulful flavors of Africa, carefully crafted to tantalize your taste buds and leave you craving for more.",
        address = "123 Main Street",
        city = "San Francisco",
        state = "CA",
        zipcode = 94102,
        contact_phone_number = "555-987-6543",
        restaurant_image = "https://media-cdn.tripadvisor.com/media/photo-s/13/56/7c/bf/i-forgot-the-name-but.jpg",
        cuisine_type_id=10,
        user_id = 5
    )
    restaurant30 = Restaurant(
        name = "Banadir Somali Restaurant",
        price_range= "$$",
        description = ": Embark on a culinary journey that celebrates the rich and diverse heritage of African cuisine, where every bite tells a unique story of tradition and passion",
        address = "456 Oak Avenue",
        city = "San Francisco",
        state = "CA",
        zipcode = 94110,
        contact_phone_number = "512-457-2543",
        restaurant_image = "https://tinyurl.com/4f3ch2hu",
        cuisine_type_id=10,
        user_id = 5
    )
    restaurant31 = Restaurant(
        name = "Negril Village",
        price_range = "$$",
        description = "Indulge in the enchanting ambiance and savory delights of Negril Village, where the spirit of Jamaica meets the essence of the Caribbean, creating a one-of-a-kind dining experience that will transport you to the tropics",
        address = "56 Mango Avenue",
        city = "San Francisco",
        state = "CA",
        zipcode = 94103,
        contact_phone_number = "415-555-5678",
        restaurant_image = "https://res.cloudinary.com/the-infatuation/image/upload/v1656121917/cms/reviews/negril-1/DavidALee_NYC_Negril_BK_All_Dishes_004.jpg",
        cuisine_type_id=11,
        user_id = 5
    )
    restaurant32 = Restaurant(
        name = "Flavas Jamaican Grill",
        price_range= "$",
        description = " Dive into a symphony of bold and tantalizing flavors at Flavas Jamaican Grill, where traditional Jamaican recipes are infused with a contemporary twist, creating a fusion of taste that will leave you craving more.",
        address = "789 Calypso Street",
        city = "San Francisco",
        state = "CA",
        zipcode = 94107,
        contact_phone_number = "415-555-6789",
        restaurant_image = "https://flavasjamaicangrillsf.com/wp-content/uploads/2019/10/authenticjamaican.jpg",
        cuisine_type_id=11,
        user_id = 5
    )
    restaurant33  = Restaurant(
        name = "Miss Lily's",
        price_range= "$$",
        description = "Step into Miss Lilly's, where the warmth of home cooking and the excitement of bold flavors come together in a delightful culinary experience that will make you feel like part of the family.",
        address = "123 Bayview Avenue",
        city = "San Francisco",
        state = "CA",
        zipcode = 94124,
        contact_phone_number = "415-555-9876",
        restaurant_image = "https://images.squarespace-cdn.com/content/v1/5d9a6c4434030a6df9f05729/1572062929178-PROV4UVH5ZKD3LNKCTY0/RedHouseSF-28.jpg",
        cuisine_type_id=11,
        user_id = 5
    )
    restaurant34 = Restaurant (
        name = "Amber India",
        price_range= "$$",
        description = "Indulge in the opulence of Indian cuisine at Amber India, where traditional recipes and aromatic spices blend seamlessly to create a dining experience that's as rich as the country's cultural heritage.",
        address = "456 Curry Lane",
        city = "San Francisco",
        state = "CA",
        zipcode = 41056,
        contact_phone_number = "415-555-4321",
        restaurant_image = "https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/66983283-3c06-47cc-8181-16693a11af2e.jpg",
        cuisine_type_id=12,
        user_id = 4
    )
    restaurant35 = Restaurant(
        name = "Copra",
        price_range= "$$",
        description = "Experience an exquisite culinary journey through the royal flavors of India, where every dish is an artful masterpiece of rich spices and elegant presentations",
        address = "1700 Fillmore Street",
        city = "San Francisco",
        state = "CA",
        zipcode = 94107,
        contact_phone_number = "515-555-4321",
        restaurant_image = "https://whatnowsf.com/wp-content/uploads/sites/6/2022/10/copra2.jpeg",
        cuisine_type_id=12,
        user_id = 3
    )
    restaurant36  = Restaurant(
        name = "Star India",
        price_range= "$$",
        description = "Immerse yourself in the refined elegance of Indian gastronomy, where time-honored recipes meet contemporary flair, elevating your dining experience to a symphony of luxurious tastes.",
        address = "3721 Geary Blvd",
        city = "San Francisco",
        state = "CA",
        zipcode = 94102,
        contact_phone_number = "415-555-4322",
        restaurant_image = "https://www.thebollywoodbites.com/wp-content/uploads/2018/09/Buffet.jpg",
        cuisine_type_id=12,
        user_id = 5
    )



    restaurant_list = [restaurant1, restaurant2, restaurant3, restaurant4, restaurant5, restaurant6, restaurant7, restaurant8, restaurant9, restaurant10, restaurant11, restaurant12, restaurant13, restaurant14, restaurant15, restaurant16, restaurant17, restaurant18, restaurant19, restaurant20, restaurant21, restaurant22, restaurant23, restaurant24, restaurant25, restaurant26, restaurant27, restaurant28, restaurant29, restaurant30, restaurant31, restaurant32, restaurant33, restaurant34, restaurant35, restaurant36]
    single_restaurant = [db.session.add(restaurant) for restaurant in restaurant_list]
    db.session.commit()

def undo_restaurants():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.restaurants RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM restaurants"))

    db.session.commit()

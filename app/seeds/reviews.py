from app.models import db, Review, environment, SCHEMA
from sqlalchemy.sql import text

def seed_reviews():
    review1 = Review(
        comment="The delivery was quick, and the food was absolutely delicious! Fresh ingredients and perfect seasoning. A delightful experience!",
        rating=5,
        user_id=1,
        restaurant_id=1
    )
    review2 = Review(
        comment="Though the delivery took a bit longer than expected, the food was worth the wait. Flavorful and well-cooked dishes!",
        rating=4,
        user_id=2,
        restaurant_id=1
    )
    review3 = Review(
        comment="Disappointing delivery experience with cold food, which affected the taste. The restaurant needs to work on its packaging.",
        rating=2,
        user_id=3,
        restaurant_id=1
    )
    review4 = Review(
        comment="The delivery service was outstanding! The food arrived hot and presented beautifully. A gastronomic treat!",
        rating=5,
        user_id=3,
        restaurant_id=2
    )
    review5 = Review(
        comment="Average delivery experience, and the food tasted decent. It didn't blow me away, but it was satisfactory.",
        rating=3,
        user_id=4,
        restaurant_id=2
    )
    review6 = Review(
        comment="The food was amazing, but the delivery took longer than expected. I recommend picking up the order if possible.",
        rating=4,
        user_id=5,
        restaurant_id=2
    )
    review7 = Review(
        comment="The restaurant's signature dishes were excellent, but the delivery was slightly delayed. Still, a good choice for a delicious meal.",
        rating=4,
        user_id=1,
        restaurant_id=3
    )
    review8 = Review(
        comment="Terrible delivery service. Missing items, and the food arrived cold, compromising the flavors.",
        rating=1,
        user_id=2,
        restaurant_id=3
    )
    review9 = Review(
        comment="Impressed with the quick and efficient delivery. The food tasted just as great as dining in at the restaurant!",
        rating=5,
        user_id=3,
        restaurant_id=3
    )
    review10 = Review(
        comment="Average delivery experience. The food was warm and tasty, but it lacked the restaurant's usual flair.",
        rating=3,
        user_id=4,
        restaurant_id=4
    )
    review11 = Review(
        comment="Disappointed with the delivery service and the lukewarm food. It didn't do justice to the restaurant's reputation.",
        rating=2,
        user_id=5,
        restaurant_id=4
    )
    review12 = Review(
        comment="The delivery service was flawless, and the food was divine! A delightful treat for my taste buds.",
        rating=5,
        user_id=1,
        restaurant_id=4
    )
    review13 = Review(
        comment="Satisfactory delivery time, but the food was outstanding. Highly recommend trying their chef's specials!",
        rating=4,
        user_id=2,
        restaurant_id=5
    )
    review14 = Review(
        comment="The order was incomplete, and resolving the issue with customer support was frustrating. The food was average at best.",
        rating=2,
        user_id=3,
        restaurant_id=5
    )
    review15 = Review(
        comment="The food arrived promptly, and every dish was a flavor explosion! Can't wait to order again!",
        rating=5,
        user_id=4,
        restaurant_id=5
    )
    review16 = Review(
        comment="Unfortunately, the delivery was delayed, and the food was cold. It didn't live up to my expectations.",
        rating=2,
        user_id=5,
        restaurant_id=6
    )
    review17 = Review(
        comment="Efficient and friendly delivery. The food was scrumptious, and the portions were generous.",
        rating=4,
        user_id=1,
        restaurant_id=6
    )
    review18 = Review(
        comment="The delivery service was a disaster. Missing items, wrong order, and an overall unpleasant experience.",
        rating=1,
        user_id=2,
        restaurant_id=6
    )
    review19 = Review(
        comment="Good delivery experience, and the food tasted fresh and delightful. Will order from them again!",
        rating=4,
        user_id=3,
        restaurant_id=7
    )
    review20 = Review(
        comment="The delivery person was rude, and the food seemed rushed and overcooked. Not the best experience.",
        rating=2,
        user_id=4,
        restaurant_id=7
    )
    review21 = Review(
        comment="Kudos to the delivery team! The food arrived perfectly hot and was a mouthwatering feast!",
        rating=5,
        user_id=5,
        restaurant_id=7
    )
    review22 = Review(
        comment="The delivery was on time, but the food was just average. Expected more in terms of taste and presentation.",
        rating=3,
        user_id="1",
        restaurant_id=8
    )
    review23 = Review(
        comment="The delivery took longer due to bad weather, but the food was worth the wait! Excellent flavors and variety.",
        rating=4,
        user_id=2,
        restaurant_id=8
    )
    review24 = Review(
        comment="Awful delivery service. Cold and unappetizing food. Will not be ordering from them again.",
        rating="1",
        user_id=3,
        restaurant_id=8
    )
    review25 = Review(
        comment="The delivery was prompt, and the food was enjoyable. A solid option for a hassle-free meal.",
        rating=4,
        user_id=4,
        restaurant_id=9
    )
    review26 = Review(
        comment="Unfortunately, the delivery took forever, and the food was barely warm. Disappointing overall.",
        rating=2,
        user_id=5,
        restaurant_id=9
    )
    review27 = Review(
        comment="The delivery was impressively quick, and the food was still steaming hot. Highly recommend this restaurant!",
        rating=5,
        user_id="1",
        restaurant_id=9
    )
    review28 = Review(
        comment="My favorite Vietnamese place in the area. The pho is great, and the spring rolls are some of the best I’ve had. If the place is too crowded though, there are a few other Vietnamese places very close by, and I wouldn’t feel bad at all about going to those instead.",
        rating=5,
        user_id=1,
        restaurant_id=10
    )
    review29 = Review(
        comment="My personal favorite pho place in the city.",
        rating=5,
        user_id=2,
        restaurant_id=10
    )
    review30 = Review(
        comment="I was so hungry going in, and I left happy and full with such delicious and homey food.",
        rating=4,
        user_id=3,
        restaurant_id=10
    )
    review31 = Review(
        comment="Pretty cool little spot with a solid menu and a few great options.",
        rating=4,
        user_id=4,
        restaurant_id=11
    )
    review32 = Review(
        comment="Good Vietnamese restaurant offering a great variety of dishes. ",
        rating=4.5,
        user_id=5,
        restaurant_id=11
    )
    review33 = Review(
        comment="Pretty standard. None of the food blew me away, but I also was not unsatisfied",
        rating=4,
        user_id=1,
        restaurant_id=11
    )
    review34 = Review(
        comment="I like simple and tasty. We enjoyed our time and food. ",
        rating=4,
        user_id=2,
        restaurant_id=12
    )
    review35 = Review(
        comment="I got the 5 spice chicken garlic noodles. The chicken itself was cooked pretty well although the flavor of the skin kinda overpowered the flavor of the actual chicken. ",
        rating=3,
        user_id=3,
        restaurant_id=12
    )
    review36 = Review(
        comment="I've had better",
        rating=2,
        user_id=4,
        restaurant_id=12
    )
    review37 = Review(
        comment="Great place for mexican food. The portions were generous and the food tasted good.",
        rating=4,
        user_id=5,
        restaurant_id=13
    )
    review38 = Review(
        comment="Huge portions, not authentic of course (didn’t expect it to be) but, is is also not good.",
        rating=3,
        user_id=1,
        restaurant_id=13
    )
    review39 = Review(
        comment="Absolutely delicious! We will definitely come back.",
        rating=5,
        user_id=2,
        restaurant_id=13
    )
    review40 = Review(
        comment="Authentic Mexican restaurant located in the mission district. Very friendly staff and food was delicious.",
        rating=5,
        user_id=3,
        restaurant_id=14
    )
    review41 = Review(
        comment="SanJalisco was a great surprise. This is by far the BEST and Authentic Jalisco Mexican food in San Francisco. ",
        rating=5,
        user_id=4,
        restaurant_id=14
    )
    review42 = Review(
        comment="Amazing Mexican eats.",
        rating=5,
        user_id=5,
        restaurant_id=14
    )
    review43 = Review(
        comment="Definite no. Not sure if it was a blip.",
        rating=2,
        user_id=1,
        restaurant_id=15
    )
    review44 = Review(
        comment="Though the pricing just seemed irrational for the portions, I have to say, the food was so good.",
        rating=3,
        user_id=2,
        restaurant_id=15
    )
    review45 = Review(
        comment="Nice vibe but food is nothing to write home about, especially at this price.",
        rating=2,
        user_id=3,
        restaurant_id=15
    )
    review46 = Review(
        comment="Simply outstanding service and food.  Everyone was personable and remembered we had been there previously.",
        rating=5,
        user_id=4,
        restaurant_id=16
    )
    review47 = Review(
        comment="Good food but I've definitely had better paella elsewhere.",
        rating=4,
        user_id=5,
        restaurant_id=16
    )
    review48 = Review(
        comment="I've been to Bellota a couple times and celebrated my birthday here twice already! I love that the staff is very welcoming, accommodating and friendly, especially the host.",
        rating=5,
        user_id=1,
        restaurant_id=16
    )
    review49 = Review(
        comment="The food was ok.",
        rating=3,
        user_id=2,
        restaurant_id=17
    )
    review50 = Review(
        comment="Personally, I think it was okay. We ordered the Paella but I have definitely have had better",
        rating=3,
        user_id=3,
        restaurant_id=17
    )
    review51 = Review(
        comment="Decent food but not amazing. We only came for the paella but to our disappointment, the waiter said the oven was broken.",
        rating=2.5,
        user_id=4,
        restaurant_id=17
    )
    review52 = Review(
        comment="An absolute favorite for my family. I am obsessed with their pasta!",
        rating=5,
        user_id=1,
        restaurant_id=19
    )
    review53 = Review(
        comment="A place that I will always come back to. Great service every time.",
        rating=4,
        user_id=2,
        restaurant_id=19
    )
    review54 = Review(
        comment="Horrible service. Waitress was so rude and the place is overpriced.",
        rating=1,
        user_id=3,
        restaurant_id=19
    )
    review55 = Review(
        comment="Came here for my birthday and they did not dissapoint",
        rating=5,
        user_id=4,
        restaurant_id=20
    )
    review56 = Review(
        comment="Excellent service and delicious food! The staff was attentive and friendly. The dishes were full of flavor, and the presentation was impressive.",
        rating=5,
        user_id=5,
        restaurant_id=20
    )
    review57 = Review(
        comment="Disappointing experience. The restaurant was crowded and noisy. The food tasted bland and lacked seasoning. The only saving grace was the dessert, which was quite enjoyable.",
        rating=3,
        user_id=1,
        restaurant_id=20
    )
    review58 = Review(
        comment="A hidden gem! The ambiance was cozy and inviting. The chef's special was a culinary delight, bursting with unique flavors. I can't wait to go back!",
        rating=4.5,
        user_id=2,
        restaurant_id=21
    )
    review59 = Review(
        comment="An unforgettable experience! From the moment we stepped in, we were treated like royalty. Each dish was a work of art, and the fusion of flavors was divine.",
        rating=5,
        user_id=3,
        restaurant_id=21
    )
    review60 = Review(
        comment="A hidden gem! The ambiance was cozy and inviting. The chef's special was a culinary delight, bursting with unique flavors. I can't wait to go back!",
        rating=4.5,
        user_id=4,
        restaurant_id=21
    )
    review61 = Review(
        comment="An unforgettable experience! From the moment we stepped in, we were treated like royalty. Each dish was a work of art, and the fusion of flavors was divine.",
        rating=5,
        user_id=5,
        restaurant_id=22
    )
    review63 = Review(
        comment="Average at best. The service was slow, and the food was just okay. Nothing stood out as exceptional, and the prices didn't match the quality.",
        rating=2.5,
        user_id=1,
        restaurant_id=22
    )
    review64 = Review(
        comment="Delicious food and warm ambiance. I had a wonderful dining experience.",
        rating=5,
        user_id=2,
        restaurant_id=22
    )
    review65 = Review(
        comment="The ambiance was cozy, but the service could have been faster.",
        rating=4,
        user_id=3,
        restaurant_id=23
    )
    review66 = Review(
        comment="Outstanding flavors and excellent service. Definitely coming back!",
        rating=5,
        user_id=4,
        restaurant_id=23
    )
    review67 = Review(
        comment="The ambiance was lovely, but the food lacked seasoning. Could be better.",
        rating=3,
        user_id=5,
        restaurant_id=23
    )
    review68 = Review(
        comment="One of the best Mediterranean restaurants I've been to. Loved every dish!",
        rating=5,
        user_id=1,
        restaurant_id=24
    )
    review69 = Review(
        comment="Average food, nothing special. The prices seemed a bit high for what we got.",
        rating=3,
        user_id=2,
        restaurant_id=24
    )
    review70 = Review(
        comment="Friendly staff and a nice variety of vegetarian options. Great experience!",
        rating=4,
        user_id=3,
        restaurant_id=24
    )
    review71 = Review(
        comment="Overpriced for the portion sizes, but the taste was good overall.",
        rating=3,
        user_id=4,
        restaurant_id=25
    )
    review72 = Review(
        comment="Incredible Mediterranean flavors! This place exceeded my expectations.",
        rating=5,
        user_id=5,
        restaurant_id=25
    )
    review73 = Review(
        comment="Absolutely love this Thai restaurant! The green curry chicken was outstanding.",
        rating=5,
        user_id=1,
        restaurant_id=25
    )
    review74 = Review(
        comment="The pad thai was delicious, but the service was a bit slow.",
        rating=4,
        user_id=1,
        restaurant_id=26
    )
    review75 = Review(
        comment="One of the best Thai restaurants in town! The tom yum goong is a must-try.",
        rating=5,
        user_id=2,
        restaurant_id=26
    )
    review76 = Review(
        comment="The ambiance was cozy, but the pad see ew could have used more flavor.",
        rating=3,
        user_id=3,
        restaurant_id=26
    )
    review77 = Review(
        comment="Tried the mango sticky rice dessert, and it was heavenly!",
        rating=5,
        user_id=4,
        restaurant_id=27
    )
    review78 = Review(
        comment="Decent Thai food, but the portion sizes were smaller than expected.",
        rating=3,
        user_id=5,
        restaurant_id=27
    )
    review79 = Review(
        comment="The massaman curry lamb was divine. Will definitely come back for more!",
        rating=5,
        user_id=1,
        restaurant_id=27
    )
    review80 = Review(
        comment="The tom kha gai soup was perfect for the chilly weather.",
        rating=4,
        user_id=2,
        restaurant_id=28
    )
    review81 = Review(
        comment="Good selection of Thai teas, but the green papaya salad was too spicy for my taste.",
        rating=3,
        user_id=3,
        restaurant_id=28
    )
    review82 = Review(
        comment="Wonderful food",
        rating=4,
        user_id=1,
        restaurant_id=28
    )
    review83 = Review(
        comment="Such a great ambience",
        rating=5,
        user_id=4,
        restaurant_id=28
    )
    review84 = Review(
        comment="Food was cold, but staff was nice",
        rating=3,
        user_id=2,
        restaurant_id=28
    )
    review85 = Review(
        comment="Gave me the wrong order",
        rating=2,
        user_id=1,
        restaurant_id=29
    )
    review86 = Review(
        comment="Loved the food, would recommend",
        rating=5,
        user_id=4,
        restaurant_id=29
    )
    review87 = Review(
        comment="Told all my friends about this place",
        rating=5,
        user_id=2,
        restaurant_id=29
    )
    review88 = Review(
        comment="Didn't like the food at all ",
        rating=2,
        user_id=1,
        restaurant_id=30
    )
    review89 = Review(
        comment="it was okay",
        rating=3,
        user_id=4,
        restaurant_id=30
    )
    review90 = Review(
        comment="Amazing customer service",
        rating=5,
        user_id=2,
        restaurant_id=30
    )
    review91 = Review(
        comment="Love coming here with my family",
        rating=5,
        user_id=1,
        restaurant_id=31
    )
    review92 = Review(
        comment="The food is bussin",
        rating=4,
        user_id=3,
        restaurant_id=31
    )
    review93 = Review(
        comment="Love the food ",
        rating=4,
        user_id=2,
        restaurant_id=31
    )
    review94 = Review(
        comment="Great atmosphere",
        rating=5,
        user_id=1,
        restaurant_id=32
    )
    review95 = Review(
        comment="Food's okay location's nice",
        rating=3,
        user_id=3,
        restaurant_id=32
    )
    review96 = Review(
        comment="It was alright",
        rating=3,
        user_id=5,
        restaurant_id=32
    )
    review97 = Review(
        comment="super cold food",
        rating=2,
        user_id=1,
        restaurant_id=33
    )
    review98 = Review(
        comment="rude staff but food is amazing",
        rating=3,
        user_id=3,
        restaurant_id=33
    )
    review99 = Review(
        comment="to die for",
        rating=5,
        user_id=5,
        restaurant_id=33
    )
    review100 = Review(
        comment="it's fine, pretty decent",
        rating=3,
        user_id=4,
        restaurant_id=34
    )
    review101 = Review(
        comment="obsessed with this place",
        rating=5,
        user_id=3,
        restaurant_id=34
    )
    review102 = Review(
        comment="first time here and never coming back",
        rating=2,
        user_id=5,
        restaurant_id=34
    )
    review103 = Review(
        comment="One of my fav spots in san fran",
        rating=4,
        user_id=4,
        restaurant_id=35
    )
    review104 = Review(
        comment="Food was aight",
        rating=3,
        user_id=3,
        restaurant_id=35
    )
    review105 = Review(
        comment="Love the staff, food, and enviroment. this place is awesome",
        rating=5,
        user_id=5,
        restaurant_id=35
    )
    review106 = Review(
        comment="Love coming here with all my friends",
        rating=5,
        user_id=4,
        restaurant_id=36
    )
    review107 = Review(
        comment="My favorite restaurant in california",
        rating=5,
        user_id=3,
        restaurant_id=36
    )
    review108 = Review(
        comment="messed up my order twice",
        rating=2,
        user_id=5,
        restaurant_id=36
    )


    review_list = [review1, review2, review3, review4, review5, review6, review7, review8, review9, review10, review11, review12, review13, review14, review15, review16, review17, review18, review19, review20, review21, review22, review23, review24, review25, review26, review27, review28, review29, review30, review31, review32, review33, review34, review35, review36, review37, review38, review39, review40, review41, review42, review43, review44, review45, review46, review47, review48, review49, review50, review51, review52, review53, review54, review55, review56, review57, review58, review59, review60, review61, review63, review64, review65, review66, review67, review68, review69, review70, review71, review72, review73, review74, review75, review76, review77, review78, review79, review80, review81, review82, review83, review84, review85, review86, review87, review88, review89, review90, review91, review92, review93, review94, review95, review96, review97, review98, review99, review100, review101, review102, review103, review104, review105, review106, review107, review108]
    single_review = [db.session.add(review) for review in review_list]
    db.session.commit()

def undo_reviews():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.reviews RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM reviews"))

    db.session.commit()

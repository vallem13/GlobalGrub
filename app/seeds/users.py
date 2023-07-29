from app.models import db, User, environment, SCHEMA
from sqlalchemy.sql import text


# Adds a demo user, you can add other users here if you want
def seed_users():
    demo = User(
        username='DemoLition',
        email='demo@aa.io',
        password='password',
        first_name='Demo',
        last_name='Lition',
        address='123 Disney Lane',
        city='San Francisco',
        state='CA',
        zipcode=94110,
        phone_number='412-333-4444'
    )
    brad = User(
        username='BradSimmons',
        email='brad.simmons@aa.io',
        password='password',
        first_name='Brad',
        last_name='Simmons',
        address='456 Disney Lane',
        city='San Francisco',
        state='CA',
        zipcode=94110,
        phone_number='412-333-5555'
    )
    david = User(
        username='DavidNash',
        email='david.nash@aa.io',
        password='password',
        first_name='David',
        last_name='Nash',
        address='789 Disney Lane',
        city='San Francisco',
        state='CA',
        zipcode=94110,
        phone_number='412-333-6666'
    )
    andrew = User(
        username='AndrewTran',
        email='andrew.tran@aa.io',
        password='password',
        first_name='Andrew',
        last_name='Tran',
        address='123 Universal Lane',
        city='San Francisco',
        state='CA',
        zipcode=94110,
        phone_number='412-333-7777'
    )
    keegan = User(
        username='KeeganAbley',
        email='keegan.abley@aa.io',
        password='password',
        first_name='Keegan',
        last_name='Abley',
        address='456 Universal Lane',
        city='San Francisco',
        state='CA',
        zipcode=94110,
        phone_number='412-333-8888'
    )

    db.session.add(demo)
    db.session.add(brad)
    db.session.add(david)
    db.session.add(andrew)
    db.session.add(keegan)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE or DELETE the users table. SQLAlchemy doesn't
# have a built in function to do this. With postgres in production TRUNCATE
# removes all the data from the table, and RESET IDENTITY resets the auto
# incrementing primary key, CASCADE deletes any dependent entities.  With
# sqlite3 in development you need to instead use DELETE to remove all data and
# it will reset the primary keys for you as well.
def undo_users():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.users RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM users"))

    db.session.commit()

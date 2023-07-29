from app.models import db, CuisineType, environment, SCHEMA
from sqlalchemy.sql import text


def seed_cuisine_types():
    korean = CuisineType(
        type="Korean"
    )
    japanese = CuisineType(
        type="Japanese"
    )
    peruvian = CuisineType(
        type="Peruvian"
    )
    vietnamese = CuisineType(
        type="Vietnamese"
    )
    mexican = CuisineType(
        type="Mexican"
    )
    spanish = CuisineType(
        type="Spanish"
    )
    french = CuisineType(
        type="French"
    )
    mediterranean = CuisineType(
        type="Mediterranean"
    )
    thai = CuisineType(
        type="Thai"
    )
    somali = CuisineType(
        type="Somali"
    )
    jamaican = CuisineType(
        type="Jamaican"
    )
    indian = CuisineType(
        type="Indian"
    )

    cuisine_type_list = [korean, japanese, peruvian, vietnamese, mexican, spanish, french, mediterranean, thai, somali, jamaican, indian]
    single_cuisine_type = [db.session.add(cuisine_type) for cuisine_type in cuisine_type_list]
    db.session.commit()

def undo_cuisine_types():
    if environment == "production":
        db.session.execute(f"TRUNCATE table {SCHEMA}.cuisine_types RESTART IDENTITY CASCADE;")
    else:
        db.session.execute(text("DELETE FROM cuisine_types"))

    db.session.commit()

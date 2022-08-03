from app.models import db, Listing


def seed_listings():
    listing1 = Listing(
        user_id = 1,
        address = "123 Main St",
        city = "Los Angeles",
        state = "CA",
        zip = "90000",
        category = "Townhouse",
        description = "Quiet and clean",
        price = 200
    )
    listing2 = Listing(
        user_id = 2,
        address = "1 Main St",
        city = "Los Angeles",
        state = "CA",
        zip = "90000",
        category = "House",
        description = "Quiet and clean",
        price = 400
    )

    db.session.add(listing1)
    db.session.add(listing2)


    db.session.commit()

def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()

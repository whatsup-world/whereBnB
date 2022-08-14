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
        price = 200,
        cover_img = "https://a0.muscache.com/im/pictures/miso/Hosting-48014396/original/959b172e-fa78-419e-a987-36fef265133e.jpeg?im_w=1200"
    )
    listing2 = Listing(
        user_id = 2,
        address = "1 Main St",
        city = "Los Angeles",
        state = "CA",
        zip = "90000",
        category = "House",
        description = "Quiet and clean",
        price = 400,
        cover_img = "https://a0.muscache.com/im/pictures/18848008-1744-4051-a1be-939c2de1ebcc.jpg?im_w=720"
    )
    listing3 = Listing(
        user_id = 1,
        address = "2 Main St",
        city = "Los Angeles",
        state = "CA",
        zip = "90000",
        category = "House",
        description = "Quiet and clean",
        price = 350,
        cover_img = "https://a0.muscache.com/im/pictures/miso/Hosting-42637728/original/f7bfd23a-2b60-49a0-a6fb-5680eccf1ba1.jpeg?im_w=1200"
    )
    listing4 = Listing(
        user_id = 2,
        address = "6 Main St",
        city = "Los Angeles",
        state = "CA",
        zip = "90000",
        category = "House",
        description = "Quiet and clean",
        price = 350,
        cover_img = "https://a0.muscache.com/im/pictures/miso/Hosting-582573931021615910/original/5e56aff5-969c-4994-aab5-fc0d6b8a2b33.jpeg?im_w=1200"
    )

    db.session.add(listing1)
    db.session.add(listing2)
    db.session.add(listing3)
    db.session.add(listing4)


    db.session.commit()

def undo_listings():
    db.session.execute('TRUNCATE listings RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db, Listing_Image

def seed_listing_images():
    listing_image1 = Listing_Image(
        listing_id = 1,
        image_url = 'https://wherebnb1.s3.us-west-1.amazonaws.com/1efccf3e-b6ba-4ae2-b1da-4a124333898a.jpeg'
    )

    db.session.add(listing_image1)

    db.session.commit()

def undo_listing_images():
    db.session.execute('TRUNCATE listing_images RESTART IDENTITY CASCADE;')
    db.session.commit()

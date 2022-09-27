from app.models import db, Like, listing

def seed_likes():
    like1 = Like(
        user_id = 2,
        listing_id = 1,
    )
    like2 = Like(
        user_id = 3,
        listing_id = 1,
    )
    like3 = Like(
        user_id = 1,
        listing_id = 2,
    )
    like4 = Like(
        user_id = 3,
        listing_id = 2,
    )

    db.session.add(like1)
    db.session.add(like2)
    db.session.add(like3)
    db.session.add(like4)

    db.session.commit()

def undo_likes():
    db.session.execute('TRUNCATE likes RESTART IDENTITY CASCADE;')
    db.session.commit()

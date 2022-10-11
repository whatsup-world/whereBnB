from app.models import db, Booking

def seed_bookings():
    booking1 = Booking(
        user_id = 2,
        listing_id = 1,
        start_date = '2022-09-01',
        end_date = '2022-10-01',
        cost = 9000,
    )
    booking2 = Booking(
        user_id = 3,
        listing_id = 1,
        start_date = '2022-08-18',
        end_date = '2022-08-31',
        cost = 3900,
    )
    booking3 = Booking(
        user_id = 1,
        listing_id = 2,
        start_date = '2022-08-10',
        end_date = '2022-09-05',
        cost = 10400,
    )
    booking4 = Booking(
        user_id = 3,
        listing_id = 2,
        start_date = '2022-09-07',
        end_date = '2022-09-10',
        cost = 1200,
    )
    booking5 = Booking(
        user_id = 2,
        listing_id = 3,
        start_date = '2022-09-07',
        end_date = '2022-09-10',
        cost = 1050,
    )
    booking6 = Booking(
        user_id = 1,
        listing_id = 4,
        start_date = '2022-09-07',
        end_date = '2022-09-10',
        cost = 1200,
    )

    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)
    db.session.add(booking4)
    db.session.add(booking5)
    db.session.add(booking6)

    db.session.commit()

def undo_bookings():
    db.session.execute('TRUNCATE bookings RESTART IDENTITY CASCADE;')
    db.session.commit()

from app.models import db, Booking

def seed_bookings():
    booking1 = Booking(
        user_id = 2,
        listing_id = 1,
        start_date = '2022-04-01',
        end_date = '2022-05-01',
        cost = 2900.00,
    )
    booking2 = Booking(
        user_id = 3,
        listing_id = 1,
        start_date = '2022-05-02',
        end_date = '2022-05-31',
        cost = 3000.00,
    )
    booking3 = Booking(
        user_id = 1,
        listing_id = 2,
        start_date = '2022-05-02',
        end_date = '2022-05-31',
        cost = 2800.00,
    )
    booking4 = Booking(
        user_id = 3,
        listing_id = 2,
        start_date = '2022-06-01',
        end_date = '2022-07-1',
        cost = 3000.00,
    )

    db.session.add(booking1)
    db.session.add(booking2)
    db.session.add(booking3)
    db.session.add(booking4)

    db.session.commit()

def undo_bookings():
    db.session.execute('TRUNCATE bookkings RESTART IDENTITY CASCADE;')
    db.session.commit()

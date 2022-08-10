from .db import db
from sqlalchemy.sql import func
from sqlalchemy import DateTime, Date
from datetime import timezone


class Booking(db.Model):
    __tablename__ = 'bookings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    start_date = db.Column(db.Date(), nullable=False)
    end_date = db.Column(db.Date(), nullable=False)
    cost = db.Column(db.Integer, nullable=False)
    created_at = db.Column(db.DateTime(timezone=False), server_default=func.now())

    user = db.relationship("User", back_populates="bookings")
    listings = db.relationship("Listing", back_populates="bookings")


    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "booking_owner": self.user.to_dict(),
            "listing_id": self.listing_id,
            "start_date": self.start_date,
            "end_date": self.end_date,
            "cost": self.cost,
            "created_at": self.created_at,
        }

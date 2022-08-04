from .db import db


class Listing(db.Model):
    __tablename__ = 'listings'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    address = db.Column(db.String(80), nullable=False)
    city = db.Column(db.String(50), nullable=False)
    state = db.Column(db.String(50), nullable=False)
    zip = db.Column(db.Integer, nullable=False)
    category = db.Column(db.String(50))
    description = db.Column(db.String(1000))
    price = db.Column(db.Integer, nullable=False)

    user = db.relationship("User", back_populates="listings")
    bookings = db.relationship("Booking", back_populates="listings")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "zip": self.zip,
            "category": self.category,
            "description": self.description,
            "price": self.price,
        }

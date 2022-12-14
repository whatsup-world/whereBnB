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
    cover_img = db.Column(db.String(255), nullable=False)

    user = db.relationship("User", back_populates="listings")
    bookings = db.relationship("Booking", back_populates="listings", cascade="all, delete-orphan")
    listing_images = db.relationship("Listing_Image", back_populates="listings", cascade="all, delete-orphan")

    def to_dict(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "listing_owner": self.user.to_dict(),
            "address": self.address,
            "city": self.city,
            "state": self.state,
            "zip": self.zip,
            "category": self.category,
            "description": self.description,
            "price": self.price,
            "cover_img": self.cover_img,
            "bookings": [booking.to_dict() for booking in self.bookings],
            "listing_images": [listing_image.to_dict() for listing_image in self.listing_images]
        }

from .db import db


class Listing_Image(db.Model):
    __tablename__ = 'listing_images'

    id = db.Column(db.Integer, primary_key=True)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)
    image_url = db.Column(db.Text, nullable=False)

    listings = db.relationship("Listing", back_populates="listing_images")

    def to_dict(self):
        return {
            "id": self.id,
            "listing_id": self.listing_id,
            "image_url": self.image_url,
        }

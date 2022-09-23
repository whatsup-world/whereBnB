from .db import db

class Like(db.Model):
    __tablename__ = 'likes'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    listing_id = db.Column(db.Integer, db.ForeignKey('listings.id'), nullable=False)

    user = db.relationship("User")
    listing = db.relationship("Listing")

    def to_dict(self):
        return {
            "id": self.id,
            # "userId": self.user_id,
            # "listingId": self.listing_id,
        }

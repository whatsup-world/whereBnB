from distutils.command.upload import upload
from flask import Blueprint, request
from flask_login import login_required
from app.forms import ListingImageForm
from app.models import Listing_Image, db
from app.awsS3 import upload_file_to_s3, allowed_file, get_unique_filename

listing_images_routes = Blueprint("listing_images", __name__)


def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f"{field} : {error}")
    return errorMessages


@listing_images_routes.route("")
def get_all_images():
    images = Listing_Image.query.all()
    return {"Listing_Images": [image.to_dict() for image in images]}


@listing_images_routes.route("/listings/<id>")
def get_listing_images(id):
    images = Listing_Image.query.filter(Listing_Image.listing_id == id).all()
    return {"Listing_Images": [image.to_dict() for image in images]}


@listing_images_routes.route("", methods=["POST"])
@login_required
def add_listing_images():
    form = ListingImageForm()
    form["csrf_token"].data = request.cookies["csrf_token"]
    print("hitting print listing route")
    if form.validate_on_submit():
        print("hitting form validate")
        if 'image_url' in request.files:
            print("hitting request file")
            image = request.files["image_url"]

            if not allowed_file(image.filename):
                print("hit not allowed file")
                return {"errors": "file type not permitted"}, 400

            image.filename = get_unique_filename(image.filename)

            upload = upload_file_to_s3(image)
            print("hitting upload")
            print("++++++upload+++++++",upload)

            if "url" not in upload:
                print("hitting not in upload")
                return upload, 400

            image_url = upload["url"]

        image = Listing_Image (
            listing_id=form.data["listing_id"],
            image_url=image_url
        )

        db.session.add(image)
        db.session.commit()
        return image.to_dict()

    return {"errors": validation_errors_to_error_messages(form.errors)}, 401

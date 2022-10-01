from app.models import db, Listing_Image

def seed_listing_images():
    listing_image1 = Listing_Image(
        listing_id = 1,
        image_url = 'https://wherebnb1.s3.us-west-1.amazonaws.com/1efccf3e-b6ba-4ae2-b1da-4a124333898a.jpeg?response-content-disposition=inline&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMSJHMEUCIEaApr7L82OSxMIoncM6SfxFlnAyG3QYV2Ug%2FYphfYybAiEAnmlEnfaOPdm3QzFdGHheG3KJo%2BYEkK9yFmUmxIFScGwq5AIITRAAGgwwOTY4NTI1ODcwNzgiDB32q0Om9tveSbES6yrBAqlalxLiVJcj0eXPJODZrRqKYpbm8eCQZVeiP6CthcVUmXktqHtTe7XTg5d1sU7Kw5G4M%2B2NK%2FRRdEzK6vkR7DWKkY8kT8%2BCP%2B9O%2F5TVwBdB5X%2FOUnQWxRVMHYuflwn7EQ8RU8Uts6Bpp4OLm%2BA9aXwmcbY9u1ugyy2TlIQhQOihQyLFJNIxpB6dh66NCQ09IVEwOd23%2BFmjbUfNND3XaS4IBMpD45n4se1jEj3rVsfo%2B%2FZ2yw%2FXuwRe%2BzMBSNWxIGV3%2B8%2B9O5IC09f4Pgk6O32FFvz%2FKynKxrNys7dNOZy3i0vrJIM5JN8uQk7OMdE43G%2BTihgtRutvTSyWf%2BJUbm2vjti7LEsLxOoRPJyl0kJGXedHQJzGbBRsTqt9OuFrapwxeguE%2Fz26XpmgNvuUr%2FnfwqTFZ5QmmMsz3PKk698cwzDS8deZBjqzAjuQiVDDpsa%2BE90buo3YgXp9pVkgL7vKykktkZ40ltAOwXQljC9r43MT17rLJsvAm8XwxCue%2Bp%2B6cSS%2BzHi0%2FVIFczd8HtKGOeSy6PP8aazVLNAmq6NCd79digpngn7UDqBNCmWuRe126s1eWuEboRGzc0sU7hAM%2F%2B4SJYM75t%2BXNvJc%2FZH69LJJ4aGTIitipHZI8enmvsaA2%2B4lWU10tCf22gxmWKghWQtE8MNE%2FYN%2FLpM5tCKGnYTkr23BFkiGAZbhfJBLaPo5hHw7HcbrMxocuAs7qcReeTKOlTADtZov0pVaC12D0tB0UcLotBBQyRlyNS10PxXxxkfJw7C%2Fkj7aAlIiJjL2Bz0cdqfbwAg7JrscVKNI%2FoYrnbGldYbPXweGeqwFqfC2VafaG%2BjLw3zT8Hk%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220930T001340Z&X-Amz-SignedHeaders=host&X-Amz-Expires=300&X-Amz-Credential=ASIARNDG5GJDKS35ESV4%2F20220930%2Fus-west-1%2Fs3%2Faws4_request&X-Amz-Signature=6bfdc6a03d7be132c08eef98f4d010004d8da6ced2c4d912b4fe4dd8d3645966'
    )

    db.session.add(listing_image1)

    db.session.commit()

def undo_listing_images():
    db.session.execute('TRUNCATE listing_images RESTART IDENTITY CASCADE;')
    db.session.commit()

from flask import Blueprint, request
from flask_login import current_user, login_required
from app.models import Review, db
from app.forms import ReviewForm, EditReviewForm

review_routes = Blueprint('review', __name__)

# Create a New Review
@review_routes.route('', methods=['POST'])
@login_required
def create_review():

    form = ReviewForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        new_review = Review(
            comment=form.data['comment'],
            rating=form.data['rating'],
            user_id=form.data['user_id'],
            restaurant_id=form.data['restaurant_id']
        )
        db.session.add(new_review)
        db.session.commit()
        return {"message":f"Successfully added review for user {data['user_id']}"}
    return {'errors': "Could not create new review"}, 500

# Edit a Review
@review_routes.route('/edit/<int:review_id>', methods=['PUT'])
@login_required
def edit_review(review_id):

    current_user_id = current_user.to_dict()['id']
    review = Review.query.get(review_id)
    #Make sure to check that user owns the review!!
    if (current_user_id != review.user_id):
        return {'errors': "You do not own this review"}, 401

    form = ReviewEditForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():
        review.comment=form.data['comment']
        review.rating=form.data['rating']

        db.session.add(review)
        db.session.commit()
        return {"message":f"Successfully edited review for user {review.user_id}"}
    return {'errors': "Could not edit review"}, 500

# Delete a Review
@review_routes.route('/<int:review_id>', methods=['DELETE'])
@login_required
def delete_review(review_id):

    current_user_id = current_user.to_dict()['id']
    owner_review = Review.query.get(review_id)

    if not owner_review:
        return {'errors': "review not found"}, 400
    if (current_user_id != owner_review.user_id):
        return {'errors': "can only delete your own review"}, 401

    db.session.delete(owner_review)
    db.session.commit()

    return {"message":f"Successfully deleted review {review_id}"}

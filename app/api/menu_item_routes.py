from flask import Blueprint, request
from app.models import MenuItem, db
from flask_login import login_required
from .aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3
from app.forms import MenuItemForm, EditMenuItemForm

menu_item_routes = Blueprint('menu_item', __name__)



@menu_item_routes.route('/')
@login_required
def get_menu_items():

    all_menu_items = MenuItem.query.all()

#loop through the list of posts and return each post as a dictionary 
    menu_item = [item.to_dict() for item in all_menu_items]

    return menu_item



@menu_item_routes.route('/<int:menu_item_id>')
@login_required
def get_menu_item_by_id(menu_item_id):
    
    single_menu_item = MenuItem.query.get(menu_item_id)
    return single_menu_item.to_dict(), 201


@menu_item_routes.route('/<int:restaurant_id>', methods=['POST'])
def create_menu_item(restaurant_id):
    form = MenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    upload = {'url': None} 

    print("-----REQUEST FILE----->",request.files)  # Debug: print the files in the request
    if form.validate_on_submit():


        image = form.data["menu_item_image"] 
        if image:
            image.filename = get_unique_filename(image.filename)
            upload = upload_file_to_s3(image)
            print("-----UPLOAD----->",upload)
            print("-----IMAGE FILE NAME----->",image.filename)
            print("-----IMAGE----->",image)

            if "url" not in upload:
                return upload['errors']
         
    



        new_menu_item = MenuItem(
            name=form.data['name'],
            description=form.data['description'],
            price=form.data['price'],
            menu_item_image=upload['url'],
            restaurant_id=restaurant_id,
        )
        db.session.add(new_menu_item)
        db.session.commit()
        return new_menu_item.to_dict(), 201
    else:
        return {'errors': form.errors}, 400
    

@menu_item_routes.route('/edit/<int:menu_items_id>', methods=['PUT'])
@login_required
def edit_menu_item(menu_items_id):

    form = EditMenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']

    if form.validate_on_submit():

        menu_item = MenuItem.query.get(menu_items_id)
        menu_item.name=form.data['name']
        menu_item.description=form.data['description']
        menu_item.price=form.data['price']
        menu_item.menu_item_image=form.data['menu_item_image']



        db.session.commit()
        return menu_item.to_dict(), 201
    else:
        return {'errors': form.errors}, 400

@menu_item_routes.route('/<int:menu_items_id>', methods=['DELETE'])
@login_required
def delete_menu_item(menu_items_id):

    menu_item = MenuItem.query.get(menu_items_id)

    db.session.delete(menu_item)
    db.session.commit()

    return {"message":f"Successfully deleted menu item with id {menu_items_id}"}


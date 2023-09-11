from flask import Blueprint, request
from app.models import MenuItem, db
from flask_login import login_required
from .aws_helpers import get_unique_filename, upload_file_to_s3, remove_file_from_s3
from app.forms import MenuItemForm, EditMenuItemForm

menu_item_routes = Blueprint('menu_item', __name__)



@menu_item_routes.route('restaurant/<int:restaurant_id>')
@login_required
def get_menu_items(restaurant_id):



    all_menu_items = MenuItem.query.filter(MenuItem.restaurant_id == restaurant_id).all()
    menu_items = [item.to_dict() for item in all_menu_items]

    return menu_items

@menu_item_routes.route('/')
@login_required
def get_menu_all():



    all_menu_items = MenuItem.query.all()
    menu_items = [item.to_dict() for item in all_menu_items]

    return menu_items



@menu_item_routes.route('menu/<int:id>')
def get_menu(id):
    menu_item = MenuItem.query.get(id)
    return menu_item.to_dict()


@menu_item_routes.route('/new/<int:restaurant_id>', methods=['POST'])
def create_menu_item(restaurant_id):
    print(" ------------> Entered create_menu_item route", restaurant_id) 
    form = MenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
   

    print("-----REQUEST FILE----->",request.files)  # Debug: print the files in the request
    if form.validate_on_submit():


        # image = form.data["menu_item_image"]
        # image.filename = get_unique_filename(image.filename)
        # upload = upload_file_to_s3(image)
        # print(upload)
        # print("-------->", image.filename)
        # print("-------->", image)

        # if 'url' not in upload:
        #     return upload['errors']
         
    



        new_menu_item = MenuItem(
            name=form.name.data,
            description=form.description.data,
            price=form.price.data,
            menu_item_image=form.menu_item_image.data,
            restaurant_id=restaurant_id,
        )
        db.session.add(new_menu_item)
        db.session.commit()
        return new_menu_item.to_dict(), 201
    else:
        return {'errors': form.errors}, 400
    

@menu_item_routes.route('/edit/<int:id>', methods=['PUT'])
@login_required
def edit_menu_item(id):

    


    menu_item = MenuItem.query.get(id)
    data = request.form
    name = data.get('name')
    price = data.get('price')
    description = data.get('description')
    menu_item_image = data.get('menu_item_image')

    form = EditMenuItemForm()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        menu_item.name = name
        menu_item.price = price
        menu_item.description = description
        menu_item.menu_item_image = menu_item_image

    db.session.commit()
    return menu_item.to_dict(), 201
        # image = form.data["menu_image_ item"]
        # image.filename = get_unique_filename(image.filename)
        # upload = upload_file_to_s3(image)
        # print(upload)

        # if 'url' not in upload:
        #     return upload['errors']

        # menu_item.name=form.data['name']
        # menu_item.description=form.data['description']
        # menu_item.price=form.data['price']
        # menu_item.menu_item_image=form.data['menu_item_image']



   

@menu_item_routes.route('/delete/<int:id>', methods=['DELETE'])
@login_required
def delete_menu_item(id):

    menu_item = MenuItem.query.get(id)

    db.session.delete(menu_item)
    db.session.commit()

    return {"message":f"Successfully deleted menu item with id {id}"}


// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getOrderThunk } from '../../store/cart';

// export default function UsersOrders() {
//   const dispatch = useDispatch();
//   const orders = useSelector((state) => state.cart.orders);

//   useEffect(() => {
//     dispatch(getOrderThunk());
//   }, [dispatch]);

//   return (
//     <div>
//       <h1>Orders</h1>
//       {Object.entries(orders).map(([orderCartId, orderItems]) => (
//         <div key={orderCartId}>
//           <h2>Order Cart ID: {orderCartId}</h2>
//           {orderItems.map((order) => (
//             <div key={order.order_id}>
//               <h3>Order ID: {order.order_id}</h3>
//               <p>User ID: {order.user_id}</p>
//               <p>Menu Item ID: {order.menu_item_id}</p>
//               <p>Menu Item Name: {order.menu_item_name}</p>
//               <p>Menu Item Price: {order.menu_item_price}</p>
//               {/* <p>Restaurant Name: {order.restaurant_name}</p> */}
//             </div>
//           ))}
//         </div>
//       ))}
//     </div>
//   );
// }


// import React, { useState, useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { useParams } from 'react-router-dom';
// import { getOrderThunk } from '../../store/cart'

// export default function UsersOrders() {
//     const dispatch = useDispatch();
//     const orders = useSelector((state) => state.cart.orders);
//     console.log("------> 1", orders);
//     const orders_list = Object.values(orders);
//     console.log("------> 2", orders_list);

//     useEffect(() => {
//       dispatch(getOrderThunk());
//     }, [dispatch]);

//     return (
//       <div>
//         <h1>Orders</h1>
//         {orders_list.map((order) => (
//           <div key={order.order_cart_id}>
//             {/* Render the order details */}
//             <h3>Order ID: {order.order_cart_id}</h3>
//             <p>Menu Item Name: {order.menu_item_name}</p>
//             <p>Menu Item Price: {order.menu_item_price}</p>
//             <p>Restaurant Name: {order.restaurant_name}</p>
//           </div>
//         ))}
//       </div>
//     );
//   }

// export default function UsersOrders() {

//     const dispatch = useDispatch();
//     const orders = useSelector(state => state.cart.orders)
//     console.log(" ------> 1",orders)
//     const orders_list = Object.values(orders)
//     console.log(" ------> 2",orders_list)
//     const restaurant_ids = Object.keys(orders)
//     console.log(" ------> 3",restaurant_ids)


//     useEffect(() => {
//         dispatch(getOrderThunk());
//     }, [dispatch]);

//     return (
//         <div>
//         <h1>Orders</h1>
//         {/* {orders_list.map((order) => (
//             <div key={item.id}>
//               <img className="menu-image" src={item.menu_item_image} alt={item.name} style={{ width: '100px', height: '100px' }}></img>
//               <h3>{item.name}</h3>
//               <p>{item.description}</p>
//               <p>${item.price.toFixed(2)}</p>
//               <button onClick={(e) => {
//                 e.preventDefault();
//                 dispatch(addItem(item));
//               }}>Add to Cart</button>
//             </div>
//           ))} */}
//         </div>
//     )
// }

import React, { useState } from 'react';
import "./User.css";
import { Link } from 'react-router-dom';

function User() {
    const [products, setProducts] = useState([
      {
        "id": 1,
        "title": "A-159W-N1DF",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2021/11/A159W-N1DF-Main-265x265_c.webp",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "A100WE-1ADF ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2021/11/download-3-265x265_c.webp",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "A100WEG-9ADF",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2021/11/download-1-4-265x265_c.webp",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "A159WGEA-1DF",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2021/06/A159WGEA-1DF-265x265_c.webp",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "A168WA-1WDF",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://icasiostore.pk/wp-content/uploads/2021/11/download-1-5-265x265_c.webp",
        "rating": {
            "rate": 4.6,
            "count": 400
        }

    },
    {
        "id": 1,
        "title": "A168WEMB-1BDF",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2021/11/download-5-265x265_c.webp",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "A168WG-9WDF ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2023/03/casio-sample-5-1-265x265_c.webp",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    {
        "id": 3,
        "title": "A168WGG-1A",
        "price": 55.99,
        "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2023/05/casio-sample-265x265_c.webp",
        "rating": {
            "rate": 4.7,
            "count": 500
        }
    },
    {
        "id": 4,
        "title": "A168WGG-1BDF",
        "price": 15.99,
        "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2022/04/A168WG-9VT-265x265_c.webp",
        "rating": {
            "rate": 2.1,
            "count": 430
        }
    },
    {
        "id": 5,
        "title": "A171WE-1ADF",
        "price": 695,
        "description": "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
        "category": "jewelery",
        "image": "https://icasiostore.pk/wp-content/uploads/2022/08/image-265x265_c.webp",
        "rating": {
            "rate": 4.6,
            "count": 400
        }

    },
    {
        "id": 1,
        "title": "A159WGEA-1DF",
        "price": 109.95,
        "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2022/10/a168wgg-1bvt-265x265_c.webp",
        "rating": {
            "rate": 3.9,
            "count": 120
        }
    },
    {
        "id": 2,
        "title": "A168WGG-1A ",
        "price": 22.3,
        "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
        "category": "men's clothing",
        "image": "https://icasiostore.pk/wp-content/uploads/2021/07/A171WE-1ADF-265x265_c.webp",
        "rating": {
            "rate": 4.1,
            "count": 259
        }
    },
    ]);

    return (
        <>
            <h1 className="ftr text-center text-muted mt-3 ">OK, SO WHY CASIO STORE?</h1><br />
            <h6 className='text-center text-muted'>We bring you one step closer to buying all the products from Casio. Enjoy shopping with Pakistan's largest online Casio Product Store.<br></br> We offer a wide range of favorite timepieces to our customers. Moreover, we provide you these products at your doorstep through<br></br> easy and renowned payment methods.</h6><br />
            <h5 className='text-center text-muted'>So why wait? Place your <span className='text-danger mb-3'>Order Now!</span></h5>
            <div className="qq">
                {products.map((item) => (
                   <center> <div className="card " style={{ width: "18rem" }} key={item.id}>
                  <center> <img src={item.image} className="card-img-top w-50 h-50" alt="..." /></center>
                   <div className="card-body">
                       <h5 className="card-title "> {item.title.slice(0, 30)}</h5>
                       <p className="card-text ">{item.description.slice(0, 30)}</p>
                       <button className="btn btn-dark  rounded-pill">
                           ${item.price.toFixed(2)}
                       </button>
                   </div>
               </div></center>
                ))}
            </div>
            <hr />
 
        </>
    );
}

export default User;



import React from 'react';
import { Link } from 'react-router-dom';

const BtnProducts = () => (

    <Link to="/ProductList">
        <button className="btn btn-outline-light  btn-xs-block" type="button">
            Productos
        </button>
    </Link>

)

export default BtnProducts;
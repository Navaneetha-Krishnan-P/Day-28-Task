import React from 'react'

import { Link } from "react-router-dom"

export const Navbar = ({ cart }) => {
    return (

        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link to={"/"} className="btn btn-outline-dark"><b>Products</b></Link>
                    </li>
                    <li className="nav-item">
                        <div className="d-flex">
                            <Link to={"/Cart"} className="btn btn-outline-dark" type="submit">
                                <div className='text'><b>Cart</b>&nbsp;&nbsp;<div className="badge bg-dark text-white ms-1 rounded-pill">{cart.length}</div></div>
    

                            </Link>
                        </div>
                    </li>
                </ul>
            </div>
        </nav>

    )

}
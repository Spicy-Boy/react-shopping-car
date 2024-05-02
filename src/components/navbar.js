import React, { Component } from 'react';
import ShoppingCart from './shoppingCart';

class Navbar extends Component {
    render()
    {
        return (
            <nav className='navbar navbar-light bg-light'>
                <div className='container-fluid'>
                    <a className='navbar-brand' href='#'>
                        Shopping Cart
                        <span className="badge rounded-pill bg-danger m-2">
                            {this.props.totalItems}
                        </span>
                    </a>
                </div>

            </nav>
        );
    }
}

export default Navbar;

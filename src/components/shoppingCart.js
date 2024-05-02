import React, { Component } from 'react';
import Item from './item';

class ShoppingCart extends Component {
    state = {};
    render() 
    {
        const {items} = this.props;
        console.log(items);
        return (
            <div>
                <button onClick={()=>this.props.handleReset()} className="">Reset Cart</button>
                {items.map((item) => {
                    // return <h1 key={item.id}>{item.title}</h1>
                    return <Item
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        value={item.value}
                        itemObj = {item}

                        addProduct={this.props.addProduct}
                        removeProduct={this.props.removeProduct}
                        removeAllProduct={this.props.removeAllProduct}
                        handleDelete={this.props.handleDelete}
                    />
                }
                )}
            </div>
        );
    };
}

export default ShoppingCart;
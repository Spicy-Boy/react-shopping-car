import React, { Component } from 'react';
import ShoppingCart from './shoppingCart';
import Navbar from './navbar';

class Layout extends Component {
    constructor()
    {
        super();
        this.state = {
            items : [
                { id: 1, value: 4, title : "Handsoap"},
                { id: 2, value: 5, title : "Duckling"},
                { id: 3, value: 1, title : "Used Fishing Rod"},
                { id: 4, value: 0, title : "Watermelon"},
            ]
        }

        this.addProduct = this.addProduct.bind(this);
        this.removeProduct = this.removeProduct.bind(this);
        this.removeAllProduct = this.removeAllProduct.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
        this.handleReset = this.handleReset.bind(this);
    }

    addProduct(itemObj)
    {
        //tester vvv
        // console.log('HI CLICK:',itemObj);

        const items = [...this.state.items];
        const index = items.indexOf(itemObj);
        items[index].value++;

        this.setState({items:items});
    }
    removeProduct(itemObj)
    {
        const items = [...this.state.items];
        const index = items.indexOf(itemObj);
        if (items[index].value > 0)
        {
            items[index].value--;
            this.setState({items:items});
        }
    }
    removeAllProduct(itemObj)
    {
        const items = [...this.state.items];
        const index = items.indexOf(itemObj);
        if (items[index].value > 0)
        {
            items[index].value = 0;
            this.setState({items:items});
        }
    }
    handleDelete(itemID)
    {
        if (window.confirm("You are about to delete this product.. are you sure?")) 
        {
            const newItems = this.state.items.filter((i) => i.id !==itemID)

            this.setState({items:newItems})
        }
        else
        {
            console.log('NVM lol');
        }
    }
    handleReset(){
        const items = this.state.items.map((i)=> {
            i.value = 0;
            return i;
        });
        this.setState({items: items});
    }

    render() { 
        return (
            <React.Fragment>
                <Navbar 
                    totalItems={this.state.items.filter((i)=> i.value > 0).length}
                />
                <main className='container'>
                    <ShoppingCart 
                        items={this.state.items}
                        addProduct={this.addProduct}
                        removeProduct={this.removeProduct}
                        removeAllProduct={this.removeAllProduct}
                        handleDelete={this.handleDelete}
                        handleReset={this.handleReset}
                    />
                </main>
            </React.Fragment>
        );
    }
}
 
export default Layout;
import React, { Component } from 'react';

class Item extends Component {

    render() {
        const {addProduct, removeProduct, removeAllProduct, handleDelete} = this.props;

        return (
            <div className='row align-items-start m-2'>
                <div className="col">
                    <h1>{this.props.title}</h1>
                    <h5>{this.props.value}</h5>
                </div>
                <div className="col">

                    <button onClick={()=>addProduct(this.props.itemObj)} className="btn btn-success m-2">+</button>

                    <button onClick={()=>removeProduct(this.props.itemObj)} className="btn btn-danger m-2">-</button>

                    &nbsp;&nbsp;
                    {/* <button onClick={()=>removeAllProduct(this.props.itemObj)} className="btn btn-danger m-2">X</button> */}
                    <button onClick={()=>handleDelete(this.props.id)} className="btn btn-danger m-2">X</button>


                </div>

            </div>
        );
    }
}

export default Item;
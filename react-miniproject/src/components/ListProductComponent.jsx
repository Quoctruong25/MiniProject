import React, { Component } from 'react';
import ProductService from '../services/ProductService';

export default class ListProductComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
        this.addProduct = this.addProduct.bind(this);
        this.deleteProduct = this.deleteProduct.bind(this);
    }

    deleteProduct(id){
        ProductService.deleteProduct(id).then( res =>{
            this.setState({products: this.state.products.filter(product => product.id !== id)});
        });
    }

    componentDidMount() {
        ProductService.getProducts().then((res) => {
            this.setState({ products: res.data });
        });
    }

    addProduct() {
        this.props.history.push('addproducts');
    }

    render() {
        return (
            <div>
                <h2 className='text-center'>Product List</h2>
                <div className="row" style={{ maxWidth: '150px' }}>
                    <button className='btn btn-primary' onClick={this.addProduct}> Create Product</button>
                </div>
                <div className="row" style={{ overflowY: 'scroll', maxHeight: '400px' }}>
                    <table className='table table-striped table-bordered'>
                        <thead>
                            <tr>
                                <th>Product Name</th>
                                <th>Image</th>
                                <th>Price</th>
                                <th>Description</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.products.map(
                                    product =>
                                        <tr key={product.id}>
                                            <td>{product.name}</td>
                                            <td style={{ textAlign: 'center', verticalAlign: 'middle' }}>
                                                <img src={product.image} alt="Product" style={{ maxWidth: '150px', maxHeight: '150px', display: 'inline-block', verticalAlign: 'middle' }} />
                                            </td>
                                            <td>{product.price}</td>
                                            <td>{product.description}</td>
                                            <td>
                                                <button onClick={ () => this.deleteProduct(product.id)} className='btn btn-danger'>Delete</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

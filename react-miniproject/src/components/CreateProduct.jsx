import React, { Component } from 'react'
import ProductService from '../services/ProductService';

export default class CreateProduct extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            image: '',
            price: '',
            description: ''
        }
        this.changeFoodNameHandle = this.changeFoodNameHandle.bind(this);
        this.changeFoodImageHandle = this.changeFoodImageHandle.bind(this);
        this.changePriceHandle = this.changePriceHandle.bind(this);
        this.changeDescriptionHandle = this.changeDescriptionHandle.bind(this);
        this.saveProduct = this.saveProduct.bind(this);
    }

    saveProduct =(e) =>{
        e.preventDefault();
        let product = {name: this.state.name, image: this.state.image, price: this.state.price, description: this.state.description};
        console.log('product =>' + JSON.stringify(product));

        ProductService.createProduct(product).then(res =>{
            this.props.history.push('/products');
        });
    }
    changeFoodNameHandle = (event) =>{
        this.setState({name: event.target.value});
    }
    changeFoodImageHandle = (event) =>{
        this.setState({image: event.target.value});
    }
    changePriceHandle = (event) =>{
        this.setState({price: event.target.value});
    }
    changeDescriptionHandle = (event) =>{
        this.setState({description: event.target.value});
    }
    cancel(){
        this.props.history.push('/products')
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            <h3 className="text-center">Add Product</h3>
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> Food Name: </label>
                                        <input  name='foodname' className='form-control'
                                            value={this.state.name} onChange={this.changeFoodNameHandle} />
                                    </div>
                                    <div className="form-group">
                                        <label> Food Image: </label>
                                        <input  name='foodimage' className='form-control'
                                            value={this.state.image} onChange={this.changeFoodImageHandle} />
                                    </div>
                                    <div className="form-group">
                                        <label> Price: </label>
                                        <input  name='price' className='form-control'
                                            value={this.state.price} onChange={this.changePriceHandle} />
                                    </div>
                                    <div className="form-group">
                                        <label> Description: </label>
                                        <input  name='description' className='form-control'
                                            value={this.state.description} onChange={this.changeDescriptionHandle} />
                                    </div>

                                    <button className='btn btn-success'onClick={this.saveProduct} style={{marginTop:"10px"}}>Save</button>
                                    <button className='btn btn-danger' onClick={this.cancel.bind(this)} style={{marginLeft:"10px",marginTop: '10px'}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

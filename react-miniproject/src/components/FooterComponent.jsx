import React, { Component } from 'react'

export default class FooterComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render() {
        return (
            <div>
                <footer className='foot'>
                    <span className='text-white-muted'>All Rights Reserved 2023 @QuocTruong</span>
                </footer>
            </div>
        )
    }
}

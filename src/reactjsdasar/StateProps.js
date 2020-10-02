import React, { Component } from 'react'
import Operan from './Operan';

export default class StateProps extends Component {

    constructor(props) {
        super(props);

        this.state = {
            makanan : 'Bakso'
        }

    }

    gantiMakanan = (makananBaru) => {
        this.setState({     
            makanan: makananBaru
        })
    }

    render() {
        return (
            <div> 
                <h2>{this.state.makanan}</h2>
                <button onClick={ () => this.gantiMakanan("sito") }>Ganti</button>
                <Operan makanan={this.state.makanan} gantiMakanan={this.gantiMakanan}/>
            </div>
        )
    }
}

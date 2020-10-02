import React, { Component } from 'react'
import FormTest from './FormTest'
import NavbarComponent from './NavbarComponent'
import TableTest from './TableTest'
import cssCustom from './css/style.css'

export default class Crud extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             makanans : [],
             nama : "",
             deskripsi : "",
             harga : 0,
             id : ""
        }
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }
    
    handleSubmit = (event) => {
        // mencegah page ter reload
        event.preventDefault();
        console.log("Data: ", this.state);
        
        // jika makanan id kosong maka add data
        if( this.state.id === "") {
            this.setState({
                makanans : [
                    ...this.state.makanans,
                    {
                        id : this.state.makanans.length+1,
                        nama : this.state.nama,
                        deskripsi : this.state.deskripsi,
                        harga : this.state.harga
                    }
                ]
            });
        } else {
        
        // jika makanan id di state ada. maka update data
        // cari makanan yang tidak dipilih lalu masukan kedalam array baru
        // jadi array dibawah ini berisi makanan yang tidak dipilih oleh user | cari yang bukan sama dengan id state sekarang
            const makananYangSelainDipilih = this.state.makanans
            .filter(( makanan ) => makanan.id !== this.state.id)
            .map(( filterMakanan ) => {
                return filterMakanan
            });

            console.log("makananYangSelainDipilih", makananYangSelainDipilih);

            this.setState({
                makanans : [
                    ...makananYangSelainDipilih,
                    {
                        id : this.state.makanans.length+1,
                        nama : this.state.nama,
                        deskripsi : this.state.deskripsi,
                        harga : this.state.harga
                    }
                ]
            });
        }
        

        this.setState({
            id : "",
            nama : "",
            deskripsi : "",
            harga : 0
        })
    }

    editData = (id) => {
        console.log("ID: ", id);
        const makananYangDipilih = this.state.makanans
        .filter(( makanan ) => makanan.id === id)
        .map(( filterMakanan ) => {
            return filterMakanan
        })

        this.setState({
            id : makananYangDipilih[0].id,
            nama : makananYangDipilih[0].nama,
            deskripsi : makananYangDipilih[0].deskripsi,
            harga : makananYangDipilih[0].harga
        })
    }

    hapusData = (id) => {
        console.log("hapusID", id);
        
        const makananBaru = this.state.makanans
        .filter(( makanan ) => makanan.id !== id)
        .map(( filterMakanan ) => {
            return filterMakanan
        });

        this.setState({
            makanans : makananBaru
        });

    }

    render() {
        console.log("banyakmakanan: ", this.state.makanans);
        return (
            <div>
                <NavbarComponent />
                <div className="container mt-4 paddingbottomcustom">
                    <h1>CRUD</h1>
                    <TableTest makanans = { this.state.makanans } editData={ this.editData } hapusData={ this.hapusData }/>
                    <FormTest { ...this.state } handleChange= {this.handleChange } handleSubmit={this.handleSubmit} />
                </div>
            </div>
        )
    }
}

import React from 'react'

const makanans = [
    {
        nama: 'soto',
        harga: 12000
    },
    {
        nama: 'bakso',
        harga: 10000
    },
    {
        nama: 'mie',
        harga: 7000
    },
    {
        nama: 'nasgor',
        harga: 18000
    }
]

const Map = () => {
    return (
        <div>
            <h2>Map</h2>
            <ul>
                {makanans.map( (makanan, index) => (
                    <li>no.{index+1} {makanan.nama} - {makanan.harga}</li>
                ))}
            </ul>

            <h2>Filter harga</h2>
            <ul>
                {makanans
                .filter( (makanan) => makanan.harga > 15000)
                .map( (makanan, index) => (
                    <li>no.{index+1} {makanan.nama} - {makanan.harga}</li>
                ))}
            </ul>

        </div>
    )
}

export default Map

import React from 'react';
import { Table } from 'react-bootstrap'

const TableTest = ({ makanans, editData, hapusData }) => {
    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>No.</th>
                    <th>Nama Makanan</th>
                    <th>Deskripsi Makanan</th>
                    <th>Harga Makanan</th>
                    <th>Aksi</th>
                </tr>
            </thead>
            <tbody>
                { makanans.map((makanan, index) => {
                    return (
                        <tr key={ index }>
                            <td>{ index+1 }</td>
                            <td>{ makanan.nama }</td>
                            <td>{ makanan.deskripsi }</td>
                            <td>Rp. { makanan.harga }</td>
                            <td>
                                <button className="btn btn-warning mr-2" onClick={ () => editData(makanan.id) }>Edit</button>
                                <button className="btn btn-danger" onClick={ () => hapusData(makanan.id) }>Hapus</button>
                            </td>
                        </tr>
                    )
                }) }
            </tbody>
        </Table>
    )
}

export default TableTest

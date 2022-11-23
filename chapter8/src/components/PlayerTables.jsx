import { Component } from "react";
import { Container, Table, Button } from 'react-bootstrap'
import PlayerDetails from "./PlayerDetails";

// export default function PlayerTables(props) {

//     const {dataTable} = props
//     // console.log(dataTable,"==nyobain")
//     return (
//         <div className="players-table">
//             <Container>
//                 <h1>Hello Admin</h1>
//                 <Table striped bordered hover>
//                     <thead>
//                         <tr>
//                             <th>No</th>
//                             <th>ID</th>
//                             <th>Username</th>
//                             <th>Email</th>
//                             <th></th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                         {/* {
//                             console.log(this.state.dataTable,"==test3")
//                         } */}
//                         {
//                             dataTable.data.map((ply, index) => (
//                                 <tr key={ply.id}>
//                                     <td>{index + 1}</td>
//                                     <td>{ply.id}</td>
//                                     <td>{ply.username}</td>
//                                     <td>{ply.email}</td>
//                                 </tr>
//                             ))
//                         }
//                     </tbody>
//                 </Table>
//             </Container>
//         </div>
//     )
// }

// class PlayerTables extends Component {

//     state = {
//         dataPlayers: []
//     }
//     componentDidMount() {
//         console.log(this.props.players,"==test4")
//         this.setState({
//             dataPlayers: this.props.players 
//         })
//     }
//     render() {
//         return (
//             <div className="players-table">
//                 <Container>
//                     <h1>Hello Admin</h1>
//                     <Table striped bordered hover>
//                         <thead>
//                             <tr>
//                                 <th>No</th>
//                                 <th>ID</th>
//                                 <th>Username</th>
//                                 <th>Email</th>
//                                 <th></th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {
//                                 console.log(this.state.dataPlayers.data,"==test3")
//                             }
//                             {
//                                 this.state.dataPlayers.data.map((ply, index) => (
//                                     <tr key={ply.id}>
//                                         <td>{index + 1}</td>
//                                         <td>{ply.id}</td>
//                                         <td>{ply.username}</td>
//                                         <td>{ply.email}</td>
//                                     </tr>
//                                 ))
//                             }
//                         </tbody>
//                     </Table>
//                 </Container>
//             </div>
//         )
//     }
// }

// export default PlayerTables

class PlayerTables extends Component {
    render() {
        return (
            <>
                <h1>Welcom to the Dashboard</h1>
                <div className="players-table">
                    <Container>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>ID</th>
                                    <th>Username</th>
                                    <th>Email</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* {
                                console.log("Cek Pengiriman Data", this.props.players)
                            } */}
                                {
                                    this.props.players.map((ply, index) => (
                                        <tr key={ply.id}>
                                            <td>{index + 1}</td>
                                            <td>{ply.id}</td>
                                            <td>{ply.username}</td>
                                            <td>{ply.email}</td>
                                            <td>
                                                <Button variant="success m-2" onClick={() => {
                                                    this.props.getPlayerId(ply.id)
                                                }}>Details</Button>
                                                <Button variant="danger" onClick={() => {
                                                    this.props.deleteFunc(ply.id)
                                                }}>Delete</Button>
                                            </td>
                                        </tr>
                                    ))
                                }

                            </tbody>
                        </Table>
                    </Container>
                    <PlayerDetails
                        showDetails={this.props.showDetails}
                        toggleDetails={this.props.toggleDetails}
                        playerId={this.props.playerId}
                        handleChange={this.props.handleChange}
                        handleUpdate={this.props.handleUpdate}
                        handleExp={this.props.handleExp}
                    />
                </div>
            </>
        )
    }
}

export default PlayerTables
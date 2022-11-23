import { Component } from "react";
import PlayerTables from "../components/PlayerTables";
import { Container, Button } from 'react-bootstrap'
import CreatePlayer from "../components/CreatePlayer";
import SearchPlayer from "../components/SearchPlayer";
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
}
    from 'mdb-react-ui-kit';

// export default function Home() {

//     const [dataTable, setDataTable] = useState([])

//     useEffect(() => {
//         getPlayer()
//     }, [])

//     const getPlayer = async() => {
//         const resp = await fetch('http://localhost:5000/api/v1/players')
//         const data = await resp.json()
//         setDataTable(data)
//     }

//     return (
//         <PlayerTables
//         dataTable={dataTable}
//         />
//     )
// }
class Home extends Component {
    state = {
        players: [],
        showModal: false,
        showDetails: false,
        playerId: [],
        searching: "",
        showSearch: false,
        username: "",
        email: "",
        password: "",
        exp: 0

    }

    getPlayersAll = async () => {
        const resp = await fetch('http://localhost:5000/api/v1/players')
        const data = await resp.json()
        const dataArray = data.data

        this.setState({
            players: dataArray
        })
    }

    componentDidMount() {
        this.getPlayersAll()
    }

    getPlayerId = async (id) => {
        const resp = await fetch(`http://localhost:5000/api/v1/players/${id}`)
        const data = await resp.json()
        const dataArray = data.data

        this.setState({
            playerId: dataArray,
            username: dataArray.username,
            email: dataArray.email,
            password: dataArray.password
        })
        this.toggleDetails()
    }

    toggleModal = () => {
        this.setState({
            showModal: !this.state.showModal
        })
        this.getPlayersAll()
    }

    toggleDetails = () => {
        this.setState({
            showDetails: !this.state.showDetails
        })
        this.getPlayersAll()
    }

    toggleSearch = () => {
        this.setState({
            showSearch: !this.state.showSearch
        })
        this.getPlayersAll()
    }

    handleExp = async (id) => {
        const data = {
            exp: this.state.exp,
        }

        const resp = await fetch(`http://localhost:5000/api/v1/players/exp/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (resp.status === 200) {
            this.toggleDetails()
            alert(`${this.state.exp} EXP ditambahkan ke ${this.state.playerId.username}`)
        }
    }

    handleUpdate = async (id) => {
        const data = {
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }
        const resp = await fetch(`http://localhost:5000/api/v1/players/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (resp.status === 200) {

            this.toggleDetails()
        } else {
            alert("Update Failed")
        }
    }

    handleChange = (event) => {

        this.setState({
            [event.target.id]: event.target.value
        })

    }

    handleDelete = async (id) => {
        const resp = await fetch(`http://localhost:5000/api/v1/players/${id}`, {
            method: 'DELETE'
        })

        if (resp.status === 200) {
            this.getPlayersAll()
        }
    }

    render() {
        return (
            <MDBContainer fluid>
                <MDBRow className='d-flex justify-content-center align-items-center h-100'>
                    <MDBCol>
                       <MDBCard className='bg-light text-dark mx-auto card-dashboard' style={{ borderRadius: '1rem', maxWidth: '750px' }}>
                            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>
                                <PlayerTables
                                    players={this.state.players}
                                    deleteFunc={this.handleDelete}
                                    updateFunc={this.handleUpdate}
                                    showDetails={this.state.showDetails}
                                    toggleDetails={this.toggleDetails}
                                    playerId={this.state.playerId}
                                    getPlayerId={this.getPlayerId}
                                    handleExp={this.handleExp}
                                    handleChange={this.handleChange}
                                    handleUpdate={this.handleUpdate}
                                />
                                <CreatePlayer
                                    showModal={this.state.showModal}
                                    toggleFunc={this.toggleModal}
                                />
                                <div className="CreateSearchbt">
                                    <Button variant="primary" onClick={this.toggleModal}>Create New Player</Button>
                                    <Button variant="warning m-2" onClick={this.toggleSearch}>Search Player</Button>
                                </div>
                                <SearchPlayer
                                    showSearch={this.state.showSearch}
                                    players={this.state.players}
                                    toggleSearch={this.toggleSearch}
                                />
                            </MDBCardBody>
                        </MDBCard>

                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        )
    }
}

export default Home
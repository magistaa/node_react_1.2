import React from 'react'
import axios from 'axios'
import Navbarr from '../components/navbar'
import { Card} from 'react-bootstrap'


class Home extends React.Component{
    constructor(){
        super()
        this.state = {
            token: "",
            userName: null,
            pegawaiCount:0
            
        }
        if (localStorage.getItem("token")) {
            this.state.token = localStorage.getItem("token")
        } else {
            window.location = "/login"
        }
    }

    headerConfig = () => {
        let header = {
            headers: { Authorization: `Bearer ${this.state.token}` }
        }
        return header
    }

    getUser = () => {
        let user = JSON.parse(localStorage.getItem('user'))
        this.setState({userName: user[0].username})
    }

    getPegawai = () => {
        let url = "http://localhost:2000/pegawai";
        // mengakses api untuk mengambil data pegawai
        axios.get(url, this.headerConfig())
        .then(response => {
          // mengisikan data dari respon API ke array pegawai
          this.setState({pegawaiCount: response.data.count});
        })
        .catch(error => {
          console.log(error);
        });
    }
    getSiswa = () => {
        let url = "http://localhost:2000/siswa";
        
        axios.get(url, this.headerConfig())
        .then(response => {
         
          this.setState({siswaCount: response.data.count});
        })
        .catch(error => {
          console.log(error);
        });
    }
    getPelanggaran = () => {
        let url = "http://localhost:2000/pelanggaran";
        
        axios.get(url, this.headerConfig())
        .then(response => {
         
          this.setState({pelanggaranCount: response.data.count});
        })
        .catch(error => {
          console.log(error);
        });
    }

    componentDidMount(){
        this.getUser()
        this.getPegawai()
        this.getSiswa()
        this.getPelanggaran()
    }

    render(){
        return(
            <div>
                <Navbarr />
                <div className="container mt-2">
                    <h3 className="my-2">
                    <marquee><strong>Welcome back, {this.state.userName}</strong></marquee>
                    </h3>
                
                    <div class="container">
                    <div class="row mt-4">
                    <div class="col-md">
                    <Card bg="danger" style={{ width: '18rem' }} text="white">
                    <Card.Header><h4>Pegawai</h4></Card.Header>
                    <Card.Body>
                    <Card.Title>Jumlah pegawai : 2</Card.Title>
                    <Card.Link class="text-white" href="pegawai">Cek pegawai</Card.Link>
                    </Card.Body>
                    </Card>
                    <br/>
                    <br/>
                    <Card bg="warning" style={{ width: '18rem' }} text="white">
                    <Card.Header><h4>Siswa</h4></Card.Header>
                    <Card.Body>
                    <Card.Title>Jumlah siswa : 0</Card.Title>
                    <Card.Link class="text-white" href="siswa">Cek siswa</Card.Link>
                    </Card.Body>
                    </Card>
                    <br/>
                    <br/>
                    <Card bg="success" style={{ width: '18rem' }} text="white">
                    <Card.Header><h4>Pelanggaran</h4></Card.Header>
                    <Card.Body>
                    <Card.Title>Jumlah pelanggar : 0</Card.Title>
                    <Card.Link class="text-white" href="pelanggaran">Cek pelanggar</Card.Link>
                    </Card.Body>
                    </Card>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
        )
    }


    
}

export default Home

import React from 'react'
import {Switch, Route} from 'react-router-dom'

import Home from './home'
import Login from './login'
import Pegawai from './pegawai'
import Siswa from './siswa'
import Register from './register'
import Pelanggaran from './pelanggaran'

const Pages = () => (
    <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/pegawai' component={Pegawai} />
        <Route path='/siswa' component={Siswa} />
        <Route path='/pelanggaran' component={Pelanggaran} />
        <Route path='/register' component={Register} />
    </Switch>
)

export default Pages

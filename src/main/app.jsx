import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../template/custom.css'

import React from 'react'
import Menu from '../template/menu'
import Routes from './routes'

export default props => (
    //em react não utilize class para se referir ao css e sim className para não conflitar com o class do javascript
    <div className='container'>
        <Menu/>
        <Routes/>
    </div>
)
import './App.css'
import React from 'react'

import Primeiro from './components/Primeiro'
import ComParametro from './components/ComParametro'
import ComFilhos from './components/ComFilhos'
import Card from './components/layout/Card'
import Reposicao from './components/Reposicao'
import Condicional from './components/Condicional'
import CondicionalIf from './components/CondicionalIf'

export default props => (
    <div className="App">
        <Card titulo="#06 - Condicional V2">
            <CondicionalIf numero="10"></CondicionalIf>
        </Card>
        <Card titulo="#05 - Condicional V1">
            <Condicional numero="19"></Condicional>
        </Card>
        <Card titulo="#04 - Repetição">
            <Reposicao></Reposicao>
        </Card>
        <Card titulo="#03 - Componente com Filhos">
            <ComFilhos>
                <ul>
                    <li>Ana</li>
                    <li>Bia</li>
                    <li>Carlos</li>
                    <li>Daniel</li>
                </ul>
            </ComFilhos>
            <Primeiro></Primeiro>
        </Card>  
        <Card titulo="#02 - Componente com Parametro">
            <Primeiro></Primeiro>
        </Card>
        <Card titulo="#01 - Primeiro Componente">
            <Primeiro>Primeiro Componente</Primeiro>
            <ComParametro titulo="Esse é p título" subtitulo="Esse é o sub-título"></ComParametro>
        </Card>              
    </div>
)
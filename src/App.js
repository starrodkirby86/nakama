import React from 'react';
import AppNavbar from "./components/AppNavbar/components/index";

class App extends React.Component {
    render() {
        return (
            <AppNavbar navbarItems={SAMPLES}/>
        );
    }
}


const SAMPLES = [
    {name: 'Megumin'},
    {name: 'Hifumi'},
    {name: 'Aoba'}
    ]

export default App;

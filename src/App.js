import React, {useState} from "react";
import Header from "./components/header/Header";
import Card from "./components/main/Card";
import './styles/App.scss';


const database = [
    {
        id: 1,
        title: 'Blouse',
        price: 500,
        description: 'Lorem123',
    },
    {
        id: 2,
        title: 'T-shirt',
        price: 200,
        description: 'Lorem456',
    },
    {
        id: 3,
        title: 'Pants',
        price: 1000,
        description: 'Lorem789',
    },
]

function App() {



    return (
        <div className="App">
            <Header/>
            <main className="main">
                <div className="container">
                    <div className="cards">
                        {database.map((cardElement)=>{
                            return(
                                <Card key={cardElement.title}
                                    title={cardElement.title}
                                    price={cardElement.price}
                                    description={cardElement.description}/>
                            )
                        })}
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;

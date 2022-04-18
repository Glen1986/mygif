import './App.css'
import SearchResults from 'pages/SearchResults'
import Detail from 'pages/Detail'
import Home from 'pages/Home'
import StaticContext from 'context/StaticContext'
import { GifsContextProvider } from 'context/GifsContext'

import { Link, Route } from 'wouter'

function App() {
    return (
        <StaticContext.Provider value={{ name: 'Gdev', suscribete: true }}>
            <div className="App">
                <section className="App-content">
                    <Link to="/">
                        <h1>App</h1>
                    </Link>
                    <GifsContextProvider>
                        <Route
                            path="/search/:keyword"
                            component={SearchResults}
                        />
                        <Route path="/gif/:id" component={Detail} />
                        <Route path="/" component={Home} />
                    </GifsContextProvider>
                </section>
            </div>
        </StaticContext.Provider>
    )
}

export default App

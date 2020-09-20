import React from 'react'
import TopBar from './components/TopBar.js'
import BottomBar from './components/BottomBar.js'
import './App.css'
import { HashRouter as Router, Switch, Route } from "react-router-dom"
import HomePage from './pages/HomePage.js'
import CommentsPage from './pages/CommentsPage.js'
import ScrollToTop from './components/ScrollToTop.js'

function App() {
    return (
        <Router>
            <ScrollToTop/>
            <div className="app">
                <TopBar/>
                <Switch>
                    <Route exact path="/">
                        <HomePage/>
                    </Route>
                    <Route path="/post/:id/comments">
                        <CommentsPage/>
                    </Route>
                </Switch>
                <BottomBar/>
            </div>
        </Router>
    )
}

export default App

import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ContactPage from '../components/ContactPage';
import HomePage from '../components/HomePage';
import PortfolioPage from '../components/PortfolioPage';
import PortfolioItemPage from '../components/PortfolioItemPage';
import NotFoundPage from '../components/NotFoundPage';
import Header from './components/Header';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header/>
            <main className="main-container">
                <Switch>
                    <Route path="/" component={HomePage} exact={true}/>
                    <Route path="/portfolio/:id" component={PortfolioItemPage}/>
                    <Route path="/portfolio" component={PortfolioPage}/>
                    <Route path="/contact" component={ContactPage}/>
                    <Route component={NotFoundPage}/>
                </Switch>
            </main>
        </div>
    </BrowserRouter>
);

export default AppRouter;
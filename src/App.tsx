import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {  Header} from './components/Header';
import { LeagueContainer } from './components/LeagueContainer';
import { Footer } from './components/Footer';
import { MatchDetail } from './components/MatchDetail';
import { Home } from './components/Home';


function App() {
	return (
		<Router>
			<div className="App">
				<Header />

				<Switch>
					<Route exact path="/">
						<Home />
					</Route>
					<Route exact path="/PL">
						<LeagueContainer league="PL" />
					</Route>
					<Route path="/FL1">
						<LeagueContainer league="FL1" />
					</Route>
					<Route path="/BL1">
						<LeagueContainer league="BL1" />
					</Route>
					<Route path="/SA">
						<LeagueContainer league="SA" />
					</Route>
					<Route path="/PD">
						<LeagueContainer league="PD" />
					</Route>
					<Route path="/CL">
						<LeagueContainer league="CL" />
					</Route>
					<Route path="/matchDetail/:matchId" component={MatchDetail}>
					</Route>

				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;

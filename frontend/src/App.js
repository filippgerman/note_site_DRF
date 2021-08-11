import AuthorsList from './components/DataList/AuthorsList';
import ProjectsList from './components/DataList/ProjectsList';
import TodoList from './components/DataList/TodoList';

import Footer from './components/footer/footer';
import Header from './components/header/header';

import React from 'react';
import axios from 'axios';

import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';


const NotFound404 = ({ location }) => {
  return (
    <div>
        <h1>Страница по адресу '{location.pathname}' не найдена</h1>
    </div>
  )
}
class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			'authors': {},
			'project': {},
			'todo': {}
		}
	}

	componentDidMount() {
		axios.get('http://127.0.0.1:8000/api/authors')
			.then(response => {
				const authors = response.data
				this.setState(
					{
						'authors': authors
					}
				)
			}).catch(error => console.log(error))

		axios.get('http://127.0.0.1:8000/api/projects')
			.then(response => {
				const project = response.data
				this.setState(
					{
						'project': project
					}
				)
			}).catch(error => console.log(error))

		axios.get('http://127.0.0.1:8000/api/todo')
			.then(response => {
				const todo = response.data
				this.setState(
					{
						'todo': todo
					}
				)
			}).catch(error => console.log(error))
	}

	render() {
		return (
			<div>
				<Header />
				<BrowserRouter>
					<nav>
						<ul>
							<li>
								<Link to='/'>Authors</Link>
							</li>
							<li>
								<Link to='/project'>Project</Link>
							</li>
							<li>
								<Link to='/todo'>Todo</Link>
							</li>
						</ul>
					</nav>
					<Switch>
						<Route exact path='/' component={() => <AuthorsList authors={this.state.authors} />} />
						<Route exact path='/project' component={() => <ProjectsList projects={this.state.project} />} />
						<Route exact path='/todo' component={() => <TodoList todo={this.state.todo} />} />
						<Route component={NotFound404} />
					</Switch>
				</BrowserRouter>
				<Footer />
			</div>
		)
	}
}
export default App;

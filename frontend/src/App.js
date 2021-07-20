import AuthorList from './components/list_authors';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import React from 'react';
import axios from 'axios';


class App extends React.Component {
   constructor(props) {
       super(props)
       this.state = {
           'authors': []
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
	}

   render () {
       return (
           <div>
			   <Header/>
               <AuthorList authors={this.state.authors}/>
			   <Footer/>
           </div>
       )
   }
}
export default App;

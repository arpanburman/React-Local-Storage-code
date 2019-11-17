import React, { Component }  from 'react';
import './App.css';
import './bootstrap.css';

class App extends Component {
  documentData;
  constructor(props) {
      super(props);
      this.handleChange = this.handleChange.bind(this);
      this.handleFormSubmit = this.handleFormSubmit.bind(this);
      this.state = {
          title: '',
          description: '',
          price: ''
      }
  }

handleChange= (e)=> {
  this.setState({[e.target.name]:e.target.value});
}
// on form submit...
handleFormSubmit(e) {
  e.preventDefault()
 localStorage.setItem('document',JSON.stringify(this.state));
}

componentDidMount() {
  this.documentData = JSON.parse(localStorage.getItem('document'));

  if (localStorage.getItem('document')) {
      this.setState({
         title: this.documentData.title,
         description: this.documentData.description,
         price: this.documentData.price
  })
} else {
  this.setState({
      title: '',
      description: '',
      price: ''
  })
}
}

render() {
  return (
      <div className="container">
        <div class="jumbotron">
            <h1 class="display-4">Store Data Using Local Storage React!!</h1>
            <hr class="my-4"></hr>
        </div>
        <div class="card">
        <div class="card-body">
          <form onSubmit={this.handleFormSubmit}>
              <div className="form-group row">
                  <label class="col-sm-2 col-form-label">Title</label>
                  <div class="col-sm-9">
                  <input type="text" name="title" className="form-control" value={this.state.title} onChange={this.handleChange} />
                  </div>
              </div>
              <div className="form-group row">
                  <label class="col-sm-2 col-form-label">Description</label>
                  <div class="col-sm-9">
                  <input type="text" name="description" className="form-control" value={this.state.description} onChange={this.handleChange} />
                  </div>
              </div>
              <div className="form-group row">
                  <label class="col-sm-2 col-form-label">Price</label>
                  <div class="col-sm-9">
                  <input type="number" name="price" className="form-control" value={this.state.price} onChange={this.handleChange} />
                  </div>
              </div>
              <div className="form-group row">
              <div class="col-sm-2"></div>
              <div class="col-sm-9">
              <button  type="submit" className="btn btn-primary">Submit</button>
              </div>
              </div>
          </form>
        </div>
        </div>
        
        <footer class="page-footer font-small blue">
          <div class="footer-copyright text-center py-3">© 2019 Copyright: 
            <a href="https://github.com/arpanburman/localStorageReact/"> Arpan Burman </a>
          </div>
        </footer>
      </div>
  )
}
}

export default App;

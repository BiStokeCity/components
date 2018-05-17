import React, { Component } from 'react';
import Button from './components/Button';
class App extends Component {
  render() {
    return (
      <div>
      <Button type="submit" height="100px" color="orange" width="100%" fontsize="20px" background="green" borderRadius="10px">
        Login
      </Button>

      <br/>

      <Button type="submit" height="100px" color="orange" width="50%" fontsize="20px" background="green" borderRadius="10px">
        Login
      </Button>
      <br/>

      <Button type="submit" borderRadius="10px">
        Login
      </Button>
      <br/>
      <Button type="submit" background="orange" color="white" width="170px" height="30px" borderRadius="5px">
        Login
      </Button>

      <Button>ggg</Button>
      </div>
    );
  }
}

export default App;

import React from "react";

export class Items extends React.Component {

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = { message: '', name: '', role: true};
    }

    componentDidMount() {
        //this.setState({ name: "Olá!" })
        //console.log("name: " + this.state.name)  
    }

    componentWillUnmount(){
       
    }

    handleChange(e) {
        this.setState({ message: e.target.value });
        console.log("name: " + this.state.message) 
    }

    render() {
        let security = ''
        if(this.state.role){
            security = <li>Security</li>
        }
        
        const items = ["Instagram", "Whatsapp", "Facebook"]
        const listItems = items.map((item, id) =>
            <li id={id}>{item}</li>
        );

      return (
        <div className="list">
          <h1>Lista de compras para {this.props.name}</h1>
          <ul>
            {listItems}
            {security}
          </ul>
          <textarea
          id="content"
          onChange={this.handleChange}
          defaultValue={this.state.message}
        />
        </div>
      );
    }

  }
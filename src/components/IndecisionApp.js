import React from "react";
import AddOption from "./AddOption";
import Options from "./Options";
import Action from "./Action";
import Header from "./Header";
import OptionModal from "./OptionModal";


export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  };

  handleClear = () => {
    this.setState(() => ({selectedOption: undefined}))
  }
  
  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);

      if (options) {
        this.setState(() => ({options}));
      }
    } catch (e) {
      //do nothing
    }  
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentWillUnmount() {
    
  }

  handleDeleteOptions = () => {
    this.setState(() => ({options: []}));
  }

  handleDeleteOption = (optionToRemove) => {
    this.setState((prevState) => ({
      options: prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  handlePick = () => {
      const rng = Math.floor(Math.random() * this.state.options.length);
      const option = this.state.options[rng];
      this.setState(() => ({
        selectedOption: option
      }));
  }

  handleAddOption = (option) => {
    if (!option) {
      return "Enter a valid option."
    }
    else if (this.state.options.indexOf(option) > -1) {
        return "This option already exists."
      }

    this.setState((prevState) => ({options: prevState.options.concat(option)}));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer";
    return (
      <div>
        <Header subtitle={subtitle} />
        <div className="container">
          <Action 
            hasOptions = {this.state.options.length > 0} 
            handlePick = {this.handlePick}
          />
          <div className="widget">
            <Options 
              options = {this.state.options}
              handleDeleteOption = {this.handleDeleteOption}
              handleDeleteOptions = {this.handleDeleteOptions}
            />
            <AddOption 
              handleAddOption = {this.handleAddOption}
            />
            <OptionModal 
              selectedOption = {this.state.selectedOption}
              handleClear = {this.handleClear}
            />
          </div>
          
        </div>
        
      </div>
    );
  }
}
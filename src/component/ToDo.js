import React from 'react';


export default class ToDo extends React.Component{
    constructor(props){
        super(props);
            this.state = {
                edit : true,
                areaValue : '',
                add : false
            }
        }
        editClick = () => {
            this.setState({edit : !this.state.edit });
        }
        saveClick = () => {
            this.setState({edit : !this.state.edit});
        }
        deleteClick = (event) => {
            this.setState({areaValue : ""})
        }
        rendNormal = () => {
            return (
                <div className="todo-list">
                <h2>To do:</h2>
                <div className="this-task" onClick={this.editClick}>{this.state.areaValue}</div>
                <div className="buttons">
                <button className="btn-edit" onClick={this.editClick} >Edit</button>
                <button className="btn-delete" onClick={this.deleteClick}>Delete</button>
            </div>
            </div>
            )
        }
        rendEdit = () => {
            return(
                <div className="todo-list">
                <div className="save-list">
                <textarea onChange={this.saveHandleChange}></textarea>
                <button onClick={this.saveClick} className="btn-save">Save</button>
                </div>
                </div>
            )
        }
        saveHandleChange = (event) => {
            this.setState({areaValue : event.target.value})
        }
        render(){
              if(this.state.edit){
            return this.rendNormal();
            }else{
            return this.rendEdit();
             }        
    }
}
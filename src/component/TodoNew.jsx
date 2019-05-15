import React from 'react';
import style from '../css/all.css';

class TodoNew extends React.Component{
    render(){
      return(
        <div className={style.newItemWrap}>
          <h2 className={style.newTitle}>新增備忘錄</h2>
          <div className={style.fc}>
            <textarea placeholder={this.props.place} className={style.newcont} id="newcont">
              
            </textarea>
            <button className={style.newItemBtn} onClick={this.props.newItem} >新增備忘錄</button>
          </div>
        </div>
      );
    }
  }

export default TodoNew;
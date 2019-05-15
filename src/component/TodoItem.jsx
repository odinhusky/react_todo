import React from 'react';
import style from '../css/all.css';


class TodoItem extends React.Component{
  
    render(){
      const thisTodoItem = this.props;
      let topBtnClass = style.topBtn;
      if(thisTodoItem.top){
        // topBtnClass += " top"
        topBtnClass = [style.topBtn, style.top].join(' ');
      }
      return(
        <div className={[style.todoItemWrap, style.fc].join(' ')}>
          
          <div className={topBtnClass} onClick={thisTodoItem.clickTop}>置頂</div>
          <input className={style.todoCheck} type="checkbox" checked={thisTodoItem.done} onClick={thisTodoItem.chktoggle}/>
          <div className={style.timeLineWrap}>
            <span className={style.timeLine}>{thisTodoItem.time}</span>
          </div>
          <textarea className={style.todoTextarea}>
            {thisTodoItem.cont}
          </textarea>
          <button className={style.sendedit} onClick={thisTodoItem.sendEdit}>送出編輯</button>
          <button type="button" className={style.delete} index={thisTodoItem.index} onClick={thisTodoItem.delete}>
            <span className={style.line1}></span>
            <span className={style.line2}></span> 
          </button>
        </div>
      );
    }
  }

export default TodoItem;

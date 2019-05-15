import React from 'react';
import ReactDOM from 'react-dom';

import TodoListTitle from './TodoListTitle.jsx';
import TodListTitleContent from './TodListTitleContent.jsx';
import TodoNew from './TodoNew.jsx';
import TodoList from './TodoList.jsx';

class TodoApp extends React.Component{
    constructor(props){
      super(props);
      this.state = {
        todoArray : [
          {
            id: 0,
            cont: "記得買牛奶",
            done: false,
            time: "2019/5/13 下午3:39:05",
            top: false
          },
          {
            id: 1,
            cont: "寫作業",
            done: true,
            time: "2019/5/13 下午3:43:39",
            top: false
          },
          {
            id: 2,
            cont: "餵狗",
            done: false,
            time: "2019/5/13 下午1:37:39",
            top: false
          }
        ]
      }
      this.newItem = this.newItem.bind(this);
      this.sendEdit = this.sendEdit.bind(this);
      this.delete = this.delete.bind(this);
      this.chktoggle = this.chktoggle.bind(this);
      this.firstArrFalse = this.firstArrFalse.bind(this);
      this.clickTop = this.clickTop.bind(this);
    }
    
    // 新增備忘錄
    newItem(){
      const todoArray = this.state.todoArray;
      const cont = document.getElementById('newcont').value;
      const id = this.state.todoArray.length;
      const nowDate = new Date().toLocaleString();
      
      const cont_trim = cont.trim();
      
      if(cont_trim !== ''){
      
        todoArray.push({
          id,
          cont,
          done: false,
          time: nowDate,
          top: false
        });
  
        this.setState({
          todoArray
        });
      
        // 清空資料
        document.getElementById('newcont').value = "";
      }
    }
    
    // 編輯
    sendEdit(e){
      const todoArray = this.state.todoArray;
      const nowDate = new Date().toLocaleString();
      
      const index = parseInt(e.target.nextSibling.getAttribute("index"));
      const cont = e.target.previousSibling.value;
      const cont_trim = cont.trim();
      
      if(cont_trim !== ''){
        todoArray.map((todoArrayItem) => {
          if(todoArrayItem.id === index){
            console.log(todoArrayItem);
            todoArrayItem.cont = cont_trim;
            todoArrayItem.time = nowDate;
          }
        });
        
        console.log(todoArray);
        
        this.setState({
          todoArray
        });
      }
  
    }
    
    // 刪除
    delete(e){
      const todoArray = this.state.todoArray;
      const index = parseInt(e.target.getAttribute("index"));
      let nowArrindex = null;
      todoArray.map((todoArrayItem, i) => {
        if(todoArrayItem.id === index){
          nowArrindex = i
        }
      });
      
      let c = confirm("確認刪除該備忘錄?");
      if (c == true) {
        todoArray.splice(nowArrindex, 1);
        
        console.log(todoArray);
        
        this.setState({
          todoArray
        });
      }
      
    }
    
    // 更改完成狀態
    chktoggle(e){
      const todoArray = this.state.todoArray;
      const parentNode = e.target.parentNode;
      const index = parseInt(parentNode.lastElementChild.getAttribute("index"));
      let nowArrindex = null;
      todoArray.map((todoArrayItem, i) => {
        if(todoArrayItem.id === index){
          nowArrindex = i
        }
      });
      
      todoArray.map((todoArrayItem) => {
          if(todoArrayItem.id === index){
            todoArrayItem.done = !todoArrayItem.done;
          }
      });
      
      this.setState({
        todoArray
      });
    }
    
    // 更改陣列第一個的top為false
    firstArrFalse(){
      const todoArray = this.state.todoArray.map((todoArrayItem, i, arr) => {
        if(i === 0){
          todoArrayItem.top = true;
        }else{
          todoArrayItem.top = false;
        }
      });
    }
    
    // 點選置頂
    clickTop(e){
      const todoArray = this.state.todoArray;
      const parentNode = e.target.parentNode;
      const index = parseInt(parentNode.lastElementChild.getAttribute("index"));
      
      let nowArrindex = null;
      todoArray.map((todoArrayItem, i) => {
        if(todoArrayItem.id === index){
          nowArrindex = i
          console.log("陣列現在的index", nowArrindex);
        }
      });
      const moveObject = todoArray.find(todoArrayItem => todoArrayItem.id === index); 
      console.log("外面index", nowArrindex);
      todoArray.splice(nowArrindex, 1); // 拿掉原本那個物件
      todoArray.splice(0,0,moveObject); // 把那個物件置頂
      
      this.setState({
        todoArray
      });
      
      console.log("123", todoArray);
    }
    
    render(){
      
      this.firstArrFalse();
      
      return(
        <div>
            <TodoListTitle />
            <TodoNew 
                newItem={this.newItem}
                place="請輸入備註內容"
            />
            <TodListTitleContent />
            <TodoList 
                todoArray={this.state.todoArray} 
                sendEdit={this.sendEdit} 
                delete={this.delete} 
                chktoggle={this.chktoggle} 
                clickTop={this.clickTop}
            />
        </div>
      )
    }
  }

ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
);
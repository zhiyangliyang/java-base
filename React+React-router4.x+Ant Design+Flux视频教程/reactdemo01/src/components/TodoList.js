import React from "react";
import "../assets/css/index.css";

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        // {
        //   title: "录制ionic",
        //   checked: true,
        // },
        // {
        //   title: "录制nodejs",
        //   checked: false,
        // },
        // {
        //   title: "录制egg.js",
        //   checked: true,
        // },
        // {
        //   title: "录制vue",
        //   checked: false,
        // },
      ],
    };
  }

  title = React.createRef("");
  addData = (event) => {
    // 按下回车时增加
    if (event.keyCode == 13) {
      var tempList = this.state.list;
      tempList.push({
        title: this.title.current.value,
        checked: false,
      });
      this.title.current.value = "";
      this.setState({
        list: tempList,
      });
    }
  };
  removeData = (key) => {
    var tempList = this.state.list;
    tempList.splice(key, 1);
    this.setState({
      list: tempList,
    });
  };
  checkboxChange = (key) => {
    var list = this.state.list;
    this.state.list[key].checked = !this.state.list[key].checked;
    this.setState({
      list: list,
    });
  };

  render() {
    return (
      <div className="TodoList">
        <header>
          TodeList:
          <input ref={this.title} onKeyUp={this.addData} />
        </header>
        <h2>待办事项</h2>
        <hr />
        <ul>
          {this.state.list.map((value, key) => {
            if (!value.checked) {
              return (
                <li key={key}>
                  <input
                    type="checkbox"
                    checked={value.checked}
                    onChange={this.checkboxChange.bind(this, key)}
                  />
                  {value.title}-------------
                  <button onClick={this.removeData.bind(this, key)}>
                    删除
                  </button>
                </li>
              );
            }
          })}
        </ul>
        <h2>已完成事项</h2>
        <hr />
        <ul>
          {this.state.list.map((value, key) => {
            if (value.checked) {
              return (
                <li key={key}>
                  <input
                    key={key}
                    type="checkbox"
                    checked={value.checked}
                    onChange={this.checkboxChange.bind(this, key)}
                  />
                  {value.title}-------------
                  <button onClick={this.removeData.bind(this, key)}>
                    删除
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default TodoList;

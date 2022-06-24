import React from "react";

import Header from "./Header";
import Footer from "./Footer";

class NewsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "这是一个新闻组件",
      title: "新闻组件",
    };
  }

  footer = React.createRef();
  run = () => {
    alert("我是父组件的run方法");
  };
  //   获取子组件里面传过来的数据
  getChildData = (result) => {
    alert(result);
    this.setState({
      msg: result,
    });
  };
  getData = () => {
    alert(this.state.title + "getData");
  };
  //   父组件主动调用子组件的数据和方法
  getFooter = () => {
    // alert(this.footer.current.state.msg); //获取子组件的数据
    this.footer.current.run();
  };

  render() {
    return (
      <div>
        <Header title={this.state.title} run={this.run} news={this}></Header>
        <br />
        <hr />
        <h2>这是新闻组件的内容---------{this.state.msg}</h2>
        <br />
        <button onClick={this.getFooter}>获取整个底部组件</button>
        <Footer ref={this.footer}></Footer>
      </div>
    );
  }
}

export default NewsPage;

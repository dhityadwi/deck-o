import React, { Component } from "react";
import Navbar from "../../../Components/Header/Header";

class DetailPage extends Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, newWidth: 0, showSearchBox: false, isOpen: false };

    window.addEventListener("resize", this.update);
  }

  componentWillMount() {
    this.update();
    this.setState({
      newWidth: window.innerWidth > 0 ? window.innerWidth : 0,
      width: window.innerWidth,
    });
  }

  update = () => {
    this.setState({
      newWidth: window.innerWidth > 0 ? window.innerWidth : 0,
    });
  };

  toggleSearchBox = () => {
    this.setState((state) => ({
      showSearchBox: !this.state.showSearchBox,
      searchWidth: "100%",
    }));
  };

  setIsOpen = (isOpen) => this.setState({ isOpen });

  render() {
    const { isOpen, showSearchBox, width, newWidth } = this.state;
    // let width = this.state.width - this.state.newWidth;
    let searchWidth = width - 350 / 5;
    return (
      <div style={{ overflowX: "hidden" }}>
        <div className="mx-auto fixed-top">
          <Navbar
            isOpen={isOpen}
            setIsOpen={(val) => this.setIsOpen(val)}
            showSearchBox={showSearchBox}
            searchWidth={searchWidth}
            toggleSearchBox={() => this.toggleSearchBox()}
            screenWidth={newWidth}
            // width={width}
            {...this.props}
          />
        </div>
        <div style={{ marginTop: 50 }} />
        {this.props.children}
      </div>
    );
  }
}

export default DetailPage;

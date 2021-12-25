import React, { Component } from "react";

export default class ShelfControl extends Component {
  // constructor(props) {
  //     super(props);
  //   }

  // constructor() {
  //     super();
  //     this.handleShelfUpdate = this.handleShelfUpdate.bind(this);

  //   }

  state = {
    shelf: this.props.shelf,
  };

  handleShelfUpdate = (event) => {
    this.setState({ shelf: event.target.value });
    this.props.reArrangeBooks(this.props.book, event.target.value);
  };

  render() {
    // const {id, shelf, book, reArrangeBooks} = this.props;
    return (
      <div className="book-shelf-changer">
        <select value={this.state.shelf} onChange={this.handleShelfUpdate}>
          <option value="move" disabled>
            {" "}
            Move to...
          </option>
          <option value="currentlyReading">Currently Reading</option>
          <option value="wantToRead">Want to Read</option>
          <option value="read">Read</option>
          <option value="none">None</option>
        </select>
      </div>
    );
  }
}

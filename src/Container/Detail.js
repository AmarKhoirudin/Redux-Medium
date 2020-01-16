import React, { Component } from "react";
import { connect } from "react-redux";
import { changedName } from "../redux/action/homeActions";

class Home extends Component {
  render() {
    const { data } = this.props.home;
    return (
      <div>
        <div className="kanan">
          <h3 className="h3">Popular in Medium </h3>
          <p className="contoh">contoh</p>
        </div>

        {data.map(a => (
          <div key={a.id}>
            <div className="content">
              <hr className="hr"></hr>
              <img alt="" src={a.gambar} className="img" />
              <h2>
                {a.id}. {a.title}
              </h2>
              <p>{a.deskripsi}</p>
              <h3>Author: {a.pembuat}</h3>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    home: state.homeReducer
  };
};

export default connect(
  mapStateToProps,
  { changedName }
)(Home);

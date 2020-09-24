import React, { Component } from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import ProverbsDetail from './components/proverbs_detail';
import ProverbsList from './components/proverbs_index';

class Proverbs extends Component {

  state = {
    text: "",
    proverb: null
  }

  onChange = (event) => {
    this.setState({ text: event.target.value })
  }

  onSelectProverb = (data) => {
    this.setState({ proverb: data })
  }

  render() {
    const { data } = this.props;
    if (data === undefined) {
      return <div>Loading</div>
    }
    return (
      <div>
        <div className="ui grid center aligned">
          <div className="twelve wide column header">
            <div className="ui action input">
              <input
                onChange={this.onChange}
                type="text" placeholder="Search..."
              />
              <button className="ui button">Search</button>
            </div>
          </div>
          <div className="six wide column">
            <ProverbsList data={data} selectProverb={this.onSelectProverb} />
          </div>
          <div className="ten wide column">
            <ProverbsDetail proverb={this.state.proverb} />
          </div>
        </div>
        <style global jsx>
          {`
          @font-face{
            font-family: MMfont;
            src: url('../NotoSansMyanmar-Regular.ttf');
          }
          body{
            font-family: 'MMtfont',sans-serif !important;
          }
        `}
        </style>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  console.log(state);
  return {
    data: state.firestore.ordered.proverbs
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    { collection: 'proverbs' },
  ])
)(Proverbs)

import React from 'react';

const proverbsList = ({ data, selectProverb }) => {
  let i = 1;
  return (
    <div>
      {data.map(d => (
        <div className="ui huge list" key={i++}>
          <div className="item">
            <a className="header"
              onClick={() => selectProverb(d)}>
              {d.short}
            </a>
          </div>
        </div>
      )
      )}
    </div>
  )
}

export default proverbsList;
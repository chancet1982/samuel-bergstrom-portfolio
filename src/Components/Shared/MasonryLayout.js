/* eslint-disable no-plusplus */
import React from "react";
import PropTypes from "prop-types";

function MasonryLayout({ columns, children, gap }) {
  const columnWrapper = {};
  const result = [];

  // create columns
  for (let i = 0; i < columns; i++) {
    columnWrapper[`column${i}`] = [];
  }

  // divide children into columns
  for (let i = 0; i < children.length; i++) {
    const columnIndex = i % columns;
    columnWrapper[`column${columnIndex}`].push(
      <div style={{ marginBottom: `${gap}px` }}>{children[i]}</div>
    );
  }

  // wrap children in each column with a div
  for (let i = 0; i < columns; i++) {
    result.push(
      <div
        style={{
          marginLeft: `${i > 0 ? gap : 0}px`,
          flex: 1,
        }}
      >
        {columnWrapper[`column${i}`]}
      </div>
    );
  }

  return <div style={{ display: "flex" }}>{result}</div>;
}

MasonryLayout.propTypes = {
  columns: PropTypes.number,
  gap: PropTypes.number,
  children: PropTypes.arrayOf(PropTypes.node),
};

MasonryLayout.defaultProps = {
  columns: 2,
  gap: 20,
  children: [],
};

export default MasonryLayout;

// component usage

/* ReactDOM.render(
  <MasonryLayout columns={3} gap={25}>
      {
      [...Array(12).keys()].map(key => {
        const height = 200 + Math.ceil(Math.random() * 300);

        return (
          <div style={{height: `${height}px`}} />
        )
      })
    }
  </MasonryLayout>, 
  document.body
); */

// https://medium.com/the-andela-way/how-to-create-a-masonry-layout-component-using-react-f30ec9ca5e99#:~:text=Masonry%20layout%20is%20a%20kind,a%20uniform%20gap%20between%20elements.&text=In%20this%20tutorial%2C%20we%20shall,in%20this%20pen%20I%20created.

// https://codepen.io/john555/pen/GYoyNd

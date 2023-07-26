import React from "react";

function ImageList({ images }) {
  //   console.log(images);
  return (
    <div className="image-list">
      {images?.map((image, i) => {
        // Check if the current index is less than the length of the array minus one
        if (i < images.length - 1) {
          return (
            <img
              src={image.urls.small}
              alt={image.alt_description}
              key={i}
              // style={{ height: "200px", width: "200px" }}
            />
          );
        } else {
          return null; // Return null for the last element to skip rendering it
        }
      })}
    </div>
  );
}

export default ImageList;

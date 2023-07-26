import React, { useEffect } from "react";
import { useState } from "react";
// import { debounce } from "lodash";
import axios from "axios";
import ImageList from "./imageList";
import { Loader, Placeholder } from "rsuite";

function Searchbar({ setImagepresent }) {
  const [image, setImage] = useState("");
  const [term, setTerm] = useState("");
  const [photos, setPhotos] = useState("");
  const [load, setLoad] = useState(false);
  //   const debouncedSearch = debounce(async (value) => {
  //     setImage(value);
  //     setTerm(value);
  //     // await searchImages();
  //   }, 500);
  const handelesubmit = (e) => {
    e.preventDefault();
    setTerm(image);
    // searchImages(term);
    setImagepresent(true);
  };

  useEffect(() => {
    searchImages(term);
  }, [term]);

  //   console.log(term);
  const searchImages = async (term) => {
    // console.log(term);
    setLoad(true);
    const response = await axios.get("https://api.unsplash.com/search/photos", {
      headers: {
        Authorization: " Client-ID L0Cpaghcj5AOIiGXmuMS7mQ3_2mMxCdA2RQ-Cx1Gjd4",
      },
      params: {
        query: term,
      },
    });
    setLoad(false);
    // console.log(response.data);
    setPhotos(response.data.results);
  };

  //   console.log(photos);
  return (
    <>
      <form
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
        onSubmit={handelesubmit}
      >
        <input
          type="text"
          style={{
            width: "70%",
            padding: "10px",
            borderRadius: "10px",
            border: "1px solid grey",
          }}
          onChange={(e) => setImage(e.target.value)}
        />
        <button
          style={{
            padding: "10px 15px 10px 15px",
            background: "#1D5B79",
            marginLeft: "10px",
            borderRadius: "10px",
            border: "none",
            color: "white",
          }}
        >
          Search
        </button>

        {/*  */}
      </form>
      {/* {load ? (
        <Loading loading background="#2ecc71" loaderColor="#3498db" />
      ) : (
        ""
      )} */}

      {term && photos.length ? (
        <ImageList images={photos} />
      ) : (
        <div
          style={{
            alignItems: "center",
            display: "flex",
            justifyContent: "center",
            padding: "20px",
          }}
        >
          Search Photo....
        </div>
      )}
    </>
  );
}

export default Searchbar;

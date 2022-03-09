import React, { useState, useEffect } from "react";
import Photo from "./Photo";
import { useParams } from "react-router-dom";
import axios from "axios";
import NotFound from "./NotFound";
const PhotoContainer = (props) => {
  const [results, setResults] = useState([]);

  let { search } = useParams();

  useEffect(() => {
    const FetchData = (query) => {
      axios
        .get(
          `https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=${props.apiKey}&text=${query}&media=photos&extras=url_m&per_page=24&format=json&nojsoncallback=1`
        )
        .then((response) => setResults(response.data.photos.photo))
        .catch((err) => console.error("Error fetching and parsing data", err));
    };
    FetchData(search);
  }, [search, props.apiKey]);

  return (
    <div className="photo-container">
      {results.length > 0 ? (
        <>
          <h2>Results For: {search}</h2>
          <ul>
            {results.map((picture) => (
              <Photo
                key={picture.id}
                url={picture.url_m}
                desc={picture.title}
              />
            ))}
          </ul>
        </>
      ) : (
        <NotFound />
      )}
    </div>
  );
};

export default PhotoContainer;

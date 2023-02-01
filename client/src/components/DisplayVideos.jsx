import React from "react";
import CountLike from "./CountLike";
import "./DisplayVideos.css";

function DisplayVideos({ videos, setVideos, upVote, setRating }) {
  const deleteVideo = (e) => {
    const id = parseInt(e.target.id);
    fetch(`/videos/${id}`, {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
    let updatedVideos = [...videos];
    const newArray = updatedVideos.filter((video) => video.id !== id);
    setVideos(newArray);
  };
  return (
    <div className="container">
      {videos &&
        videos.map((vid, key) => {
          return (
            <div className="card" key={key}>
              <h3>{vid.title}</h3>
              <div key={key} id={vid.id} className="Video-container">
                <iframe
                  width="450"
                  height="315"
                  src={vid.url.replace("watch?v=", "embed/")}
                  title={vid.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>Rating: {vid.rating}</p>
              <CountLike upVote={upVote} rating={vid.rating} setRating={setRating} />
              <button
                className="buttons delete"
                id={vid.id}
                onClick={deleteVideo}
              >
                Delete
              </button>
            </div>
          );
        })}
    </div>
  );
}

export default DisplayVideos;

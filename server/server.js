const express = require("express");
const uuid = require("uuid");
const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());

app.listen(port, () => console.log(`Listening on port ${port}`));

// Store and retrieve your videos from here
// If you want, you can copy "exampleresponse.json" into here to have some data to work with
let videos = [
  {
    id: 523523,
    title: "Never Gonna Give You Up",
    url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    rating: 23,
  },
  {
    id: 523427,
    title: "The Coding Train",
    url: "https://www.youtube.com/watch?v=HerCR8bw_GE",
    rating: 230,
  },
  {
    id: 82653,
    title: "Mac & Cheese | Basics with Babish",
    url: "https://www.youtube.com/watch?v=FUeyrEN14Rk",
    rating: 2111,
  },
  {
    id: 858566,
    title: "Videos for Cats to Watch - 8 Hour Bird Bonanza",
    url: "https://www.youtube.com/watch?v=xbs7FT7dXYc",
    rating: 11,
  },
  {
    id: 453538,
    title:
      "The Complete London 2012 Opening Ceremony | London 2012 Olympic Games",
    url: "https://www.youtube.com/watch?v=4As0e4de-rI",
    rating: 3211,
  },
  {
    id: 283634,
    title: "Learn Unity - Beginner's Game Development Course",
    url: "https://www.youtube.com/watch?v=gB1F9G0JXOo",
    rating: 211,
  },
  {
    id: 562824,
    title: "Cracking Enigma in 2021 - Computerphile",
    url: "https://www.youtube.com/watch?v=RzWB5jL5RX0",
    rating: 111,
  },
  {
    id: 442452,
    title: "Coding Adventure: Chess AI",
    url: "https://www.youtube.com/watch?v=U4ogK0MIzqk",
    rating: 671,
  },
  {
    id: 536363,
    title: "Coding Adventure: Ant and Slime Simulations",
    url: "https://www.youtube.com/watch?v=X-iSQQgOd1A",
    rating: 76,
  },
  {
    id: 323445,
    title: "Why the Tour de France is so brutal",
    url: "https://www.youtube.com/watch?v=ZacOS8NBK6U",
    rating: 73,
  },
 
];

// const maxID = uuid.v4();
// console.log(maxID);
const maxID = Math.max(...videos.map((video) => video.id));
// GET "/"
app.get("/", (req, res) => {
  res.json(videos);
});

app.get("/:id", (req, res) => {
  const vidId = parseInt(req.params.id);

  let video = videos.find((v) => v.id === vidId);
  if (!video) {
    res.status(404).send("Not Found");
  }
  res.send(video);
});

//POST "/videos"

app.post("/", (req, res) => {
  if (!req.body.title || !req.body.url) {
    res.status(400).send({ result: "error", message: "Bad Request" });
    return;
  }
  const newVideo = {
    id: maxID + 1,
    title: req.body.title,
    url: req.body.url,
    rating: req.body.rating,
  };
  videos.push(newVideo);

  res.status(201).send({ id: newVideo.id, message: "success" });
});

app.delete('/:id', (req, res) => {
  const vidId = parseInt(req.params.id);
  let vidIndex = videos.findIndex((v) => v.id === vidId);
  if (vidIndex < 0) {
    res.status(404).send("Video not found");
  }
  videos.splice(vidIndex, 1);
  res.send({ id: vidId, message: "Video deleted" });
})
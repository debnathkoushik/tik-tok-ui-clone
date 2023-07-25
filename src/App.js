import React, { useEffect, useState } from "react";
import Video from "./Video";
import "./App.css";

const API_URL =
  "https://raw.githubusercontent.com/codedamn-classrooms/tiktok-react-material/main/data.json";

export default function App() {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // TODO: Get the data from API_URL above
    // Store it inside videos state variable
    var xhr = new XMLHttpRequest();
    xhr.open("GET", API_URL, true);
    xhr.send();
    xhr.onload = () => {
      if (xhr.readyState === 4 && xhr.status === 200) {
        setVideos(JSON.parse(xhr.responseText));
        //console.log(JSON.parse(xhr.responseText));
      } else {
        console.log(xhr.status);
      }
    };
  });

  return (
    <div className="app">
      <div className="container">
        {videos.map((video, index) => {
          //console.log("" + index + array);
          return <Video url={video.url} />;
        })}
      </div>
    </div>
  );
}

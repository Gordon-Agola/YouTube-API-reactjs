import React from "react";
import axios from "axios";
class WatchArea extends React.Component {
  constructor() {
    super();
    this.state = { loading: true };
  }
  componentDidMount() {
    axios
      .get(
        `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,statistics,status,player&key=${process.env.API_KEY}&id=${this.props.id}`
      )
      .then((res) => {
        const item = res.data.items[0];
        this.setState({
          title: item.snippet.title,
          views: item.statistics.viewCount,
          description: item.snippet.description,
          channel: item.snippet.channelTitle,
          like: item.statistics.like,
          url: item.id,
          loading: false,
        });
        console.log(res);
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { title, views, description, channel, like, url } = this.state;
    return (
      <div className="watch-area">
        <div className="player">
          <iframe
            src={`//www.youtube.com/embed/${url}`}
            width="1080"
            height="450"
            frameBorder="0"
            allow="autoplay encrypted-media"
            title={title}
          >
            {" "}
          </iframe>{" "}
        </div>{" "}
        <h1> {title} </h1>{" "}
        <div className="video-inf">
          <div className="">
            {" "}
            {views}
            Views{" "}
          </div>{" "}
          <div className="">
            {" "}
            {like}
            Likes{" "}
          </div>{" "}
        </div>{" "}
        <div className="channel-name">
          {" "}
          {channel}
          Channel{" "}
        </div>{" "}
        <p> {description} </p>{" "}
      </div>
    );
  }
}
export default WatchArea;

export default function Video(props) {
  const { url } = props;
  //const [counter, setCount] = useState(0);

  return (
    <div className="video">
      <video className="player" loop src={url}></video>
    </div>
  );
}

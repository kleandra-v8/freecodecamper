function DrumPad(props) {
  const handleClick = (e) => {
    props.onHit(props.index);
    e.target.classList.add('active-pad');
    const sound = e.target.firstChild;
    sound.currentTime = 0;
    sound.play();
    setTimeout(() => {
      e.target.classList.remove('active-pad');
    }, 250);
  };
  return (
    <button
      id={"Key" + props.letter}
      className="drum-pad"
      onClick={handleClick}
      disabled={props.power}
    >
      <audio
        id={props.letter}
        className="clip"
        src={props.url}
        type="audio/wav"
      />
      {props.letter}
    </button>
  );
}

export default DrumPad;

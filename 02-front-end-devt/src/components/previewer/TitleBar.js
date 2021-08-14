function TitleBar(props) {
  return (
    <h2 className="title-bar">
      <span className="symbols">&lt; </span>
      {props.text}
      <span className="symbols"> /&gt;</span>
    </h2>
  );
}

export default TitleBar;

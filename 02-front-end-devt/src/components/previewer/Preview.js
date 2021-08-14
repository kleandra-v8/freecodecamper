import TitleBar from "./TitleBar";

function Preview(props) {
  return (
    <section className="preview-box">
      <TitleBar text="Previewer" />
      <div id="preview" dangerouslySetInnerHTML={{ __html: props.content }} />
    </section>
  );
}

export default Preview;

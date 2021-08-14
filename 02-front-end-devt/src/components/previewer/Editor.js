import TitleBar from "./TitleBar";

function Editor(props) {
  return (
    <section className="editor-box">
      <TitleBar text="Editor" />
      <textarea id="editor" onChange={props.onEdit}>
        {props.content}
      </textarea>
    </section>
  );
}

export default Editor;

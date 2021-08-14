import { useState } from 'react';
import marked from 'marked';
import insane from 'insane';
import './app.scss';
import Editor from './Editor';
import Preview from './Preview';
import placeholder from './placeholder';

// allow <br> and self-close html tags
marked.setOptions({ breaks: true, xhtml: true });

const getHtml = (markdown) => {
    const dirty = marked(markdown); // convert markdown to html
    const clean = insane(dirty); // sanitize dirty html
    console.log(clean);
    return clean;
};

function App() {
    const [editorText, setEditorText] = useState(placeholder);
    const [previewText, setPreviewText] = useState(getHtml(placeholder));

    const onEdit = (event) => {
        const markdown = event.target.value;
        setEditorText(markdown);
        const html = getHtml(markdown);
        setPreviewText(html);
    };

    return (
        <div className='app'>
            <h1 className='title'>React Markdown Previewer</h1>
            <div className='container'>
                <Editor onEdit={onEdit} content={editorText} />
                <Preview content={previewText} />
            </div>
        </div>
    );
}

export default App;

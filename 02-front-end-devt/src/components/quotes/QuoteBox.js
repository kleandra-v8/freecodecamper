import { useState } from 'react';
import { Grow } from '@material-ui/core';
import './QuoteBox.css';

function QuoteBox(props) {
    const [zoomIn, setZoomIn] = useState(true);

    return (
        <section
            id='wrapper'
            className='d-flex flex-column justify-content-center align-items-center'
        >
            <Grow in={zoomIn}>
                <article id='quote-box' className='p-4'>
                    <div id='text' className='lead mb-2'>
                        {props.text}
                    </div>
                    <div id='author'>{props.author}</div>
                    <div
                        id='buttons'
                        className='d-flex justify-content-between mt-3'
                    >
                        <div>
                            <a
                                id='tweet-quote'
                                href={props.tweet}
                                target='_blank'
                                rel='noreferrer'
                                className='btn btn-outline-info m-1'
                                title='Tweet this quote!'
                            >
                                <i className='bi bi-twitter'></i>
                            </a>
                            <a
                                id='tumblr-quote'
                                href={props.tumblr}
                                className='btn btn-outline-primary m-1 px-3'
                                title='Post this quote on Tumblr!'
                                target='_blank'
                                rel='noreferrer'
                            >
                                <i className='fa fa-tumblr'></i>
                            </a>
                        </div>
                        <button
                            id='new-quote'
                            className='btn btn-outline-info m-1'
                            onClick={async () => {
                                setZoomIn(false);
                                await props.onNew();
                                setZoomIn(true);
                            }}
                        >
                            New Quote
                        </button>
                    </div>
                </article>
            </Grow>
        </section>
    );
}

export default QuoteBox;

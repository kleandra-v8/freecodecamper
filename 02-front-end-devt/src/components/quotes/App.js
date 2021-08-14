import { useState } from 'react';
import axios from 'axios';
import QuoteBox from './QuoteBox';
import './App.css';
import HomeButton from '../HomeButton';

export default function App() {
    const [quote, setQuote] = useState({
        text: 'You are the sky. Everything else is just the weather.',
        author: 'Pema Chödrön',
    });

    let tweetUrl =
        'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=';
    tweetUrl += encodeURIComponent(`"${quote.text}" – ${quote.author}`);

    let tumblrUrl =
        'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=';
    tumblrUrl +=
        encodeURIComponent(quote.author) +
        '&content=' +
        encodeURIComponent(quote.text);
    tumblrUrl +=
        '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button';

    async function getNewQuote() {
        try {
            // get a new quote
            const reply = await axios.get('https://api.quotable.io/random');
            const newQuote = {
                text: reply.data.content,
                author: reply.data.author,
            };
            await setQuote(newQuote);
        } catch (error) {
            console.log('Oops, something went wrong!');
            console.error(error);
        }
    }

    return (
        <div id='app'>
            <HomeButton />
            <QuoteBox
                text={quote.text}
                author={quote.author}
                onNew={getNewQuote}
                tweet={tweetUrl}
                tumblr={tumblrUrl}
            />
        </div>
    );
}

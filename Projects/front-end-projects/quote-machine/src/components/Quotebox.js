import React, { Component } from 'react';
import { TwitterShareButton, } from 'react-twitter-embed';



const TumblrButton = () => {
    return <a href="http://www.tumblr.com/share/link?url=https://simplesharebuttons.com&amp;title=Simple Share Buttons" target="_blank">
    <img src="https://simplesharebuttons.com/images/somacro/tumblr.png" alt="Tumblr" />
  </a>
}

class Quotebox extends Component {
    constructor(props) {
        super(props);
        this.state = {
            quotes: [],
            loaded: false,
            randomizedQuote: null,
            number: 0
        }
    }

    componentDidMount() {
        fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    loaded: true,
                    quotes: json
                })
            })

    }
    showQuote = item => {
        this.setState({
            randomizedQuote: item,
            number: item.number
        })
    }

    nextQuote = () => {
        return Math.floor(Math.random() * this.state.quotes.quotes.length);
    }

   

    render() {
        return (
            <div id="wrapper">
                {this.state.quotes.length !== 0 ? this.state.quotes.quotes.splice(0, 1).map(item => (
                    <div id="quote-box" key={item.quote} onClick={() => this.showQuote(item)}>
                        <div className="quote-text"><h1 className="H1">"{item.quote}</h1></div>
                        <div className="author"><p><strong>-</strong>{item.author}</p></div>
                        <div className="Buttons">
                            <TwitterShareButton
                                url={'https://facebook.com/saurabhnemade'}
                                options={{ text: `${item.quote}`, via: 'saurabhnemade' }}
                            />
                           <TumblrButton />
                            <br />
                        </div>
                        <button onClick={() => this.nextQuote()} value='Submit' className="Next">New quote</button>
                    </div>
                )) : <div className="Loader"></div>
                }
            </div>
        );
    }
}

export default Quotebox;
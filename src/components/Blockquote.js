import Axios from "axios";
import React, { useEffect, useState } from "react";

 const Blockquote = (props) => {
    const [quote, setQuote] = useState([]);
    
    useEffect(()=>{ // componentDidMount
      // getting json with this method as render method is called every sec.
      Axios.get(
        "https://programming-quotes-api.herokuapp.com/quotes/random"
      ).then((res) => setQuote(res.data));
    },[]);
  
      return (
        <div>
          <blockquote className="blockquote text-center">
            <p className="mt-1" id="quote">
              {quote.en}
            </p>
            <footer className="blockquote-footer mt-2" id="author">
              <cite title="Source Title">{quote.author}</cite>
            </footer>
          </blockquote>
        </div>
      );
  
}
export default Blockquote;
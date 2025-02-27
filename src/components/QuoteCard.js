import React from 'react';

const QuoteCard = (props) =>{
  console.log("props are", props);
  return <div>
    <div className="card card-inverse card-success card-primary mb-3 text-center">
      <div className="card-block">
        <blockquote className="card-blockquote">
          <p>{props.quote.content}</p>
          {/* <p>{Render Quote Content}</p>  OK*/}
          <footer>- author <cite title="Source Title">{props.quote.author}</cite></footer>
          {/* <footer>- author <cite title="Source Title">{Render Quote Author}</cite></footer> OK */ }
        </blockquote>
      </div>
      <div className="float-right">
        <div className="btn-group btn-group-sm" role="group" aria-label="Basic example">
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => props.handleUpvoteQuote(props.quote.id)}
          >
            Upvote
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => props.handleDownvoteQuote(props.quote.id)}
          >
            Downvote
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.handleRemoveQuote(props.quote.id)}
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        {/* <div>Votes: {Render Quote Votes}</div> */}
        { <div>Votes: {props.quote.votes}</div> }
      </div>
    </div>
  </div>;
}
export default QuoteCard;

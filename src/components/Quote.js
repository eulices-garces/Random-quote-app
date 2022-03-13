import React from 'react'

function Quote({ quote }) {
    return (
        <div className="quote">

            <blockquote>
                { quote.text }
            </blockquote>

            <div className="character" title={quote.author}>
                { quote.author }
            </div>
        </div>
    )
}

export default Quote;

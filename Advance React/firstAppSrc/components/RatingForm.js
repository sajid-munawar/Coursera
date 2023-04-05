import React from 'react'

const RatingForm = () => {
    const [rating, setRating] = React.useState(5)
    const [comment, setComment] = React.useState('')
    const handleSubmit = (event) => {
        event.preventDefault()
        const form = event.target
        const rating = form.rating.value
        const comment = form.comment.value
        form.comment.value=''
        console.log({ rating, comment })
    }
  return (
    <div>
        <h2>Rate your experience : {rating} </h2>
        <h2>Comment : {comment} </h2>
        <form  onSubmit={handleSubmit}>
            <label htmlFor="rating">Rating</label>
            <input type="range" id="rating" name="rating" value={rating} min="1" max="5" onChange={e=>setRating(e.target.value)}/>
            <label htmlFor="comment">Comment</label>
            <textarea id="comment" name="comment" value={comment} onChange={e=>setComment(e.target.value)}/>
            <button type="submit">Submit</button>
        </form>
    </div>
  )
}

export default RatingForm;
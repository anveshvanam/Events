// Write your code here
import './index.css'

const EventItem = props => {
  const {eventDetails, displayEventStatus} = props
  const {imageUrl, name, location} = eventDetails

  const onClickEvent = () => {
    displayEventStatus(eventDetails)
  }
  return (
    <li className="event-item">
      <button type="button" className="button" onClick={onClickEvent}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>
      <p className="event-name">{name}</p>
      <p className="desc">{location}</p>
    </li>
  )
}

export default EventItem

// Write your code here

import './index.css'

const EventItem = props => {
  const {item, eventSelected} = props
  const {imageUrl, name, location, registrationStatus} = item

  const eventClicked = () => {
    eventSelected(registrationStatus)
  }

  return (
    <li className="event-display">
      <button type="button" className="image-button" onClick={eventClicked}>
        <img src={imageUrl} alt="event" className="event-image" />
      </button>

      <p className="event-title">{name}</p>
      <p className="event-location">{location}</p>
    </li>
  )
}
export default EventItem

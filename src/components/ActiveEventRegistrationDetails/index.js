import './index.css'

const registrationStatusVariables = {
  initial: 'INITIAL',
  yetToRegister: 'YET_TO_REGISTER',
  registered: 'REGISTERED',
  registrationsClosed: 'REGISTRATIONS_CLOSED',
}
const ActiveEventRegistrationDetails = props => {
  const {eventStatus} = props

  const yetToRegisterView = () => (
    <div className="yettoregister-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-register-img.png"
        alt="yet to register"
        className="yettoregister-image"
      />
      <p className="yettoregister-description">
        A live performance brings so much to your relationship with dance.
        Seeing dance live can often make you fall totally in love with this
        beautiful art form.
      </p>
      <button className="yettoregister-button" type="button">
        Register Here
      </button>
    </div>
  )

  const registeredView = () => (
    <div className="registered-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-regestered-img.png"
        alt="registered"
        className="registered-image"
      />
      <h1 className="registered-description">
        You have already registered for the event
      </h1>
    </div>
  )
  const registrationsClosedView = () => (
    <div className="yettoregister-view">
      <img
        src="https://assets.ccbp.in/frontend/react-js/events-registrations-closed-img.png"
        alt="registrations closed"
        className="yettoregister-image"
      />
      <h1 className="yettoregister-description">
        Registrations Are Closed Now!
      </h1>
      <p className="yettoregister-description">
        Stay tuned. We will reopen the registrations soon!
      </p>
    </div>
  )
  const noActiveEventView = () => (
    <div className="noactiveevent-container">
      <p className="noactiveevent-description">
        Click on an event, to view its registration details
      </p>
    </div>
  )

  switch (eventStatus) {
    case registrationStatusVariables.yetToRegister:
      return yetToRegisterView()
    case registrationStatusVariables.registered:
      return registeredView()
    case registrationStatusVariables.registrationsClosed:
      return registrationsClosedView()
    case registrationStatusVariables.initial:
      return noActiveEventView()
    default:
      return null
  }
}

export default ActiveEventRegistrationDetails

import './index.css'

const ShowCase = props => {
  const {
    emojiDetails,
    daysList,
    activeDay,
    activeImage,
    onClickActiveDay,
    onClickActiveImage,
  } = props
  const onChangeDay = () => {
    onClickActiveDay(activeDay)
  }
  const onChangeImage = () => {
    onClickActiveImage(activeImage)
  }
  return (
    <div>
      <select value={activeDay} onChange={onChangeDay} className="select">
        {emojiDetails.map(emoji => (
          <option key={emoji.id} value={emoji.emojiName}>
            {emoji.emojiName}
          </option>
        ))}
      </select>
      <select
        value={activeImage}
        onChange={onChangeImage}
        className="select-day"
      >
        {daysList.map(day => (
          <option key={day.id} value={day.day}>
            {day.day}
          </option>
        ))}
      </select>
    </div>
  )
}
export default ShowCase

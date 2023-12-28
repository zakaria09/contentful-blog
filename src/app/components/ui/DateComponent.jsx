
const DateComponent = ({ dateString, options, ...rest }) => {
  return (
    <time dateTime={dateString} {...rest}>
      {dateString}
    </time>
  )
}

export default DateComponent
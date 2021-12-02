const AppItem = props => {
  const {details} = props
  const {appName, imageUrl} = details

  return (
    <li>
      <img src={imageUrl} alt="appName" />

      <p>{appName}</p>
    </li>
  )
}
export default AppItem

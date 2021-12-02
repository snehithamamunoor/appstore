const TabItem = props => {
  const {details, setActiveTabId} = props
  const {tabId, displayText} = details

  const onSetTabId = () => {
    setActiveTabId(tabId)
  }

  return (
    <div>
      <button type="button" onClick={onSetTabId}>
        {displayText}
      </button>
    </div>
  )
}
export default TabItem

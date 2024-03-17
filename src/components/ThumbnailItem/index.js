import './index.css'

const ThumbnailItem = props => {
  const {thumbnailDetails, thumbnailImage} = props
  const {thumbnailUrl, thumbnailAltText, id} = thumbnailDetails
  const onClickThumbnailImg = () => {
    thumbnailImage(id)
  }
  return (
    <li className="list-item">
      <button type="button" onClick={onClickThumbnailImg}>
        <img src={thumbnailUrl} alt={thumbnailAltText} />
      </button>
    </li>
  )
}

export default ThumbnailItem

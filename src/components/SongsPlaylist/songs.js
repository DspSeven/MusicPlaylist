import {AiOutlineDelete} from 'react-icons/ai'

const SongsPlaylist = props => {
  const {trackDetails, conformedDelete} = props
  const {id, imageUrl, name, genre, duration} = trackDetails
  const confirmToDelete = () => {
    conformedDelete(id)
  }

  return (
    <li key={id}>
      <img src={imageUrl} alt="track" />
      <div>
        <p>{name}</p>
        <p>{genre}</p>
      </div>
      <p>{duration}</p>
      <button type="button" data-testid="delete" onClick={confirmToDelete}>
        <AiOutlineDelete />
      </button>
    </li>
  )
}
export default SongsPlaylist

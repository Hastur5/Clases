import { useSongContext } from '@/Context/SongContext'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  const nextSong = () => {

  }

  const previousSong = () => {

  }

  return (
    song.title
      ? (
        <div>
          Now playing... {song.title} - {song.artist}
          <input type='search' onChange={() => {}} />
          <button>Prev</button>
          <button>Next</button>
        </div>
        )
      : <div> Selecciona una canción... </div>
  )
}

export default Header

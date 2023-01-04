import { useSongContext } from '@/Context/SongContext'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  const nextSong = () => {
    const songIndex = context.list.findIndex(s => s.id === song.id)
    context.list.length > songIndex + 1
      ? context.setSelectedSong(context.list[songIndex + 1])
      : context.setSelectedSong(context.list[0]) // Hace que salte de la última canción a la primera.
  }

  const previousSong = () => {
    const songIndex = context.list.findIndex(s => s.id === song.id)
    songIndex > 0
      ? context.setSelectedSong(context.list[songIndex - 1])
      : context.setSelectedSong(context.list[context.list.length - 1]) // Hace que salte de la primera canción a la última.
  }

  const handleSearch = (e) => {
    context.setSearch(e.target.value)
  }

  return (
    song.title
      ? (
        <div>
          Now playing... {song.title} - {song.artist}
          <input type='search' onChange={handleSearch} />
          <button onClick={previousSong}>Prev</button>
          <button onClick={nextSong}>Next</button>
        </div>
        )
      : <div> Selecciona una canción... </div>
  )
}

export default Header

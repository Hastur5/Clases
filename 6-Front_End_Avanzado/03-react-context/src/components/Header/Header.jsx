import { useSongContext } from '@/context/SongContext'

const Header = () => {
  const context = useSongContext()
  const song = context.selectedSong

  const nextSong = () => {

  }

  const previousSong = () => {

  }
  
  return (
    <div>Header</div>
  )
}

export default Header

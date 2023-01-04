import './songlist.css'
import { useSongContext } from '@/Context/SongContext'

const SongList = () => {
  const context = useSongContext()
  return (
    <div>
      {
        context.loading
          ? <h1>Cargando...</h1>
          : context.list.filter(song => { // Se están encadenado las funciones. Se usa Filter y después map.
            if (context.search === '') {
              return song // si la búsqueda es vacía, vamos a retornar todas las canciones.
            } else if (song.title.toLowerCase().includes(context.search.toLowerCase())) {
              return song // Retorno la canción que cumple con el criterio de búsqueda. Si no vamos a retornar, nulo.
            }
            return null // Ninguna canción coincide
          }).map((song) => (
            <div
              className='row-song' key={song.id} onClick={() => {
                context.setSelectedSong(song)
              }}
            >
              <h4>{song.title}</h4>
              <p>{song.artist}</p>
            </div>
          ))
      }
    </div>
  )
}

export default SongList

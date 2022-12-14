/* eslint-disable react/jsx-indent */
import React from 'react'
import './songdetails.css'
import { useSongContext } from '@/Context/SongContext'

const SongDetails = () => {
  const context = useSongContext()
  return (
    <>
      {
        context.selectedSong.title
          ? <div>
            <img src={`http://picsum.photos/seed/${context.selectedSong.id}/400/400`} alt='Portada de Disco' />
            <h1>{context.selectedSong.title}</h1>
            <h4>{context.selectedSong.artist}</h4>
            <h6>{context.selectedSong.year}</h6>
            </div>
          : <h1>Selecciona una canción</h1>
      }
    </>
  )
}

export default SongDetails

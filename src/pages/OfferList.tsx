import { ChangeEvent, useEffect, useState } from "react"
import Offer from "../models/Offer"
import { OfferService } from "../services/offer.service"
import { Link, useSearchParams } from "react-router-dom"
import toast from "react-hot-toast"

function OfferList() {
  
  const [offers, setOffers] = useState<Offer[]>()
  const [error, setError] = useState<string | null> (null)
  const [loading, setLoading] = useState(true)
  //const [titleQuery, setTitleQuery] = useState(null)

  const [queryParams, setQueryParams] = useSearchParams()
  const titleQuery = queryParams.get('title') || ''

  useEffect(() => {
    OfferService.search(titleQuery)
                .then(setOffers)
                .catch((error) => setError(error.mesage))
                .finally(()=>setLoading(false))
  },[titleQuery])//Cada vez que cambie el titulo, va a buscar

  const handleSearchChange = (e:ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value
    setQueryParams(newTitle ? {title:newTitle} : {})
  }

  const handleDelete = async (id:number) => {
    if (!window.confirm('Estas seguro de que quieres borrar la oferta?')) return 
    try {
      
      await OfferService.delete(id)
      //borramos ofertas del array para no hacer muchas llamadas a la API
      //refrescamos el array no hacemos llamada al API para refrescar
      setOffers(offers?.filter(offer => offer.id !== id))
      toast.success('Oferta borrada correctamente')
    } catch (error) {
      setError(error instanceof Error ? error.message : 'Error desconocido')
    }
  }

  return (
    <div className="text-white">
      <h1>Listado de ofertas</h1>
      <Link to="/offers/new">Añadir nueva oferta</Link>

      <input value={titleQuery} onChange={handleSearchChange} placeholder="Buscar por título"/>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {offers?.length===0 && <p>No hay ofertas disponibles</p>}
      {offers?.map(offer => 
        <div key={offer.id}>
          {offer.title}
          <Link to={`/offers/${offer.id}`}>Ver</Link>
          <Link to={`/offers/edit/${offer.id}`}>Editar</Link>
          <button onClick={() => handleDelete(offer.id)}>Borrar</button>
        </div>
      )}
    </div>
  )
}

export default OfferList
import { useParams } from "react-router-dom"
import { useQuery } from "../../Hooks/useQuery"

const Detail = () => {

	// MEMANGGIL VALUE PARAM DARI ROUTER MENGGUNAKAN USE PARAMS
	const { id } = useParams()

	// MEMANGGIL QUERY PARAMS
	const currpage = useQuery("currpage")

	return (
		<>
			<h1>INI DETAIL ARTICLE {id} {currpage}</h1>
		</>
	)
}

export default Detail

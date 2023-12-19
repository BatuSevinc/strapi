import {useParams} from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import Review from '../components/Review';

const ProductDetails = () => {

  const {id} = useParams();
  const {isLoading,error,data} = useFetch(
    "http://localhost:1337/api/products/" + id
  );

  if(isLoading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>

    console.log(data)
  return (

    <div className='container mx-auto p-12'>
      <h1 className='text-3xl'>{data.data.attributes.name}</h1>
      <code className='text-blue-500 mt-2 block'>
      {data.data.attributes.price.toLocaleString("tr-TR",{
        style: "currency",
        currency: "TRY",
      })}
      </code>
      <p className='mt-4 text-gray-700'>{data.data.attributes.details[0].children[0].text}</p>
      <Review productId={id}/>
    </div>
  )
}

export default ProductDetails
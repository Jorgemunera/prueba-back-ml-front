import { useContext } from "react"
import { MarketContext } from "../../Context"

const Card = (data) => {
    const context = useContext(MarketContext);

    return (
        <div className='bg-white cursor-pointer w-52 h-60 bottom-4 rounded-lg'>
            <figure className="relative mb-4 w-full h-2/3">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{data.data.amount}</span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/4246120/pexels-photo-4246120.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt={data.data.name} />
                <div
                    className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h6 rounded-full m-2 p-1"
                    onClick={() => console.log('mandar peticion a la api con add-item con cantidad 1, osea que debo armar un json con la data')}
                >
                    +
                </div>
            </figure>
            <p className="flex flex-col items-center">
               <span className="text-lg font-normal">{data.data.name}</span>
               <span className="text-lg font-normal">{data.data.sku}</span>
               <span className="text-lg font-bold">${data.data.price}</span>
            </p>
        </div>
    )
}

export {Card}

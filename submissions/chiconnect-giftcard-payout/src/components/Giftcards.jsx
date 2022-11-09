import { useEffect, useState } from 'react'
import { getGiftcards } from '../service/fetchApi'
import Giftcard from './Giftcard'

const Giftcards = ({ handleCardClick }) => {

    const [searchTerm, setSearchTerm] = useState('')
    const [countryCode, setCountryCode] = useState('')
    const [giftcards, setGiftcards] = useState([])
    const [originalCards, setOriginalCards] = useState([])
    const [productId, setProductId] = useState(null)
    const [loading, setLoading] = useState(false)
    const [selected, setSelected] = useState(null)

    const handleSearchChange = (event) => {
        const searchQuery = event.target.value
        setSearchTerm(searchQuery)
        let filteredCards = []
        if (searchQuery.length > 0) {
            filteredCards = originalCards.filter((item) =>
                item.name.toLowerCase().startsWith(searchQuery.toLowerCase()))
            setGiftcards(filteredCards)
        } else {
            setGiftcards(originalCards)
        }
    }

    const handleClick = (productId, name, countryCode, max, min, denominations) => {
        setProductId(productId)
        setSelected(productId)
        handleCardClick(productId, name, countryCode, max, min, denominations)
    }

    const fetchGiftcards = async (countryCode = 'US') => {
        setLoading(true)

        const data = await getGiftcards(countryCode)
        const newData = data.data.benefitsList.filter(
            (asset) => asset.code === 'giftcard'
        )

        setGiftcards(newData)
        setOriginalCards(newData)
        setLoading(false)
    }

    useEffect(() => {
        fetchGiftcards()
    }, [])

    return (
        <div className='flex flex-col'>
            <div className='flex flex-col justify-end mt-6 space-y-4 md:space-y-0 md:space-x-6 md:flex-row'>
                <input name='bank' placeholder={'Filter by country code e.g: US, NG'} value={countryCode}
                    onChange={(e) => setCountryCode(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && fetchGiftcards(countryCode)}
                    className='px-3 py-2 bg-white border max-w-xs shadow-sm border-slate-300 focus:outline-none
                     focus:border-purple-500 w-full rounded-md sm:text-sm focus:ring-1'/>

                <input placeholder='Search gift cards' onChange={handleSearchChange}
                    value={searchTerm}
                    className='px-3 py-2 max-w-xs bg-white border shadow-sm border-slate-300 
                    focus:outline-none focus:border-purple-500 w-full rounded-md sm:text-sm focus:ring-1' />
            </div>

            <div className='flex flex-col mt-6 justify-between items-start md:flex-row'>
                <div>
                    <h3 className='text-2xl text-slate-700 font-medium'>
                        Send Gift Card
                    </h3>
                    <p className='text-slate-500 text-sm max-w-[250px]'>
                        Select what kind of gift card you want to send
                    </p>
                </div>

                {
                    loading &&
                    <div className='flex flex-col ml-20 justify-around items-center md:ml-72'>
                        <svg className="inline w-8 h-8 text-gray-200 animate-spin dark:text-gray-300 fill-purple-500" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>

                        <p className='text-purple-500 text-center mt-2 text-md font-semibold'>
                            Fetching Gift Cards
                        </p>
                    </div>
                }
                {
                    !loading && giftcards.length === 0 &&
                    <p className='text-purple-500 text-center mt-2 text-md font-semibold'>
                        No giftcards available for this country :(
                    </p>
                }

                <div className='grid grid-cols-1 mt-4 p-px gap-6 min-h-[150px] max-h-[450px] overflow-y-scroll 
                    justify-center items-center md:grid-cols-2 md:p-3 md:mt-0 lg:grid-cols-3'>
                    {
                        !loading && giftcards.map((item) =>
                            <Giftcard
                                key={item.productId}
                                cardImg={item.logoUrls[0]}
                                name={item.name}
                                selected={item.productId === selected ? true : false}
                                handleClick={() => 
                                    handleClick(
                                        item.productId, 
                                        item.name,
                                        item.countryCode,
                                        item.maxSenderDenomination,
                                        item.minSenderDenomination,
                                        item.fixedSenderDenominations)}
                            />
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Giftcards
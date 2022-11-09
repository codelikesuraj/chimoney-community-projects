import { Bank, Cards, DeviceMobile, Phone, Users, UsersThree } from 'phosphor-react'

const Feature = () => {
    return (
        <section className='bg-gradient-to-bl from-purple-50 to-blue-100'>
            <div className='container mx-auto flex flex-col px-5 py-14 justify-center items-center md:px-12 lg:px-20'>
                <h3 className='font-epilogue font-semibold text-xl text-center text-slate-900 md:text-4xl'>
                    Make frictionless payments now
                </h3>
                <p className='font-epilogue text-sm text-slate-600 text-center mt-2 md:text-base'>
                    Instantly unlock access to varieties of payment possibilites
                </p>

                {/* FEATURE DATA */}
                <div className='grid grid-cols-1 mt-4 md:mt-14 md:grid-cols-3'>
                    {/* CELL 1 */}
                    <div className='flex flex-col justify-between items-center p-8 border-b-2 
                        border-purple-500/20 md:border-r-2'>
                        <Bank weight='duotone'
                            color='hsl(240, 0%, 25%)'
                            size={36}
                            alt={'Bank icon'}
                        />

                        <h4 className='font-epilogue font-semibold mt-4 text-xl text-slate-900'>
                            Bank
                        </h4>

                        <p className='font-epilogue text-base text-slate-600 text-center mt-2'>
                            Supercharge bank transfers with our bank payout option
                        </p>
                    </div>

                    {/* CELL 2 */}
                    <div className='flex flex-col justify-between items-center p-8 border-b-2
                     border-purple-500/20 md:border-r-2'>
                        <Phone weight='duotone'
                            color='hsl(240, 0%, 25%)'
                            size={36}
                            alt={'Phone icon'}
                        />

                        <h4 className='font-epilogue font-semibold mt-4 text-xl text-slate-900'>
                            Airtime
                        </h4>

                        <p className='font-epilogue text-base text-slate-600 text-center mt-2'>
                            Supercharge airtime transfers with our airtime payout option
                        </p>
                    </div>

                    {/* CELL 3 */}
                    <div className='flex flex-col justify-between items-center p-8 border-b-2 border-purple-500/20'>
                        <DeviceMobile weight='duotone'
                            color='hsl(240, 0%, 25%)'
                            size={36}
                            alt={'Mobile Money icon'}
                        />

                        <h4 className='font-epilogue font-semibold mt-4 text-xl text-slate-900'>
                            Mobile Money
                        </h4>

                        <p className='font-epilogue text-base text-slate-600 text-center mt-2'>
                            Conveniently make mobile money payouts across Africa
                        </p>
                    </div>

                    {/* CELL 4 */}
                    <div className='flex flex-col justify-between items-center p-8 border-b-2 border-purple-500/20
                        md:border-r-2 md:border-b-0'>
                        <Cards weight='duotone'
                            color='hsl(240, 0%, 25%)'
                            size={36}
                            alt={'Giftcards icon'}
                        />

                        <h4 className='font-epilogue font-semibold mt-4 text-xl text-slate-900'>
                            Giftcard
                        </h4>

                        <p className='font-epilogue text-base text-slate-600 text-center mt-2'>
                            Send giftcards as payments or rewards to anyone with ease
                        </p>
                    </div>

                    {/* CELL 5 */}
                    <div className='flex flex-col justify-between items-center p-8 border-b-2 border-purple-500/20
                        md:border-r-2 md:border-b-0'>
                        <Users weight='duotone'
                            color='hsl(240, 0%, 25%)'
                            size={36}
                            alt={'Accounts icon'}
                        />

                        <h4 className='font-epilogue font-semibold mt-4 text-xl text-slate-900'>
                            Account
                        </h4>

                        <p className='font-epilogue text-base text-slate-600 text-center mt-2'>
                            Transfer payment to another paypaddy user
                        </p>
                    </div>

                    {/* CELL 6 */}
                    <div className='flex flex-col justify-between items-center p-8 border-purple-500/20'>
                        <UsersThree weight='duotone'
                            color='hsl(240, 0%, 25%)'
                            size={36}
                            alt={'Escrow icon'}
                        />

                        <h4 className='font-epilogue font-semibold mt-4 text-xl text-slate-900'>
                            Escrow
                        </h4>

                        <p className='font-epilogue text-base text-slate-600 text-center mt-2'>
                            Ease the friction when making payments to merchants
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Feature
import React, { useState } from 'react'

const RevenueSlider = () => {
  // State for the number of users (subscribers/followers)
  const [users, setUsers] = useState(100) // Default value 100 users (this can represent both subscribers and followers)

  // Exponential growth calculation for subscribers (5€ base, increases with number of subscribers)
  const subscriberRevenue = (Math.pow(users / 100, 1.2) * 5).toFixed(2) // Exponentially increases the price per subscriber

  // Exponential growth calculation for followers (base of 800€ for 1000 followers)
  const followersRevenue = (Math.pow(users / 1000, 1.2) * 800).toFixed(2) // Exponentially increases the price per follower

  // Total combined estimated revenue
  const totalRevenue = (
    parseFloat(subscriberRevenue) + parseFloat(followersRevenue)
  ).toFixed(2)

  return (
    <div className='max-w-4xl mx-auto py-12'>
      <div className='text-center'>
        <h2 className='text-3xl font-semibold mb-4'>Estimate Your Earnings</h2>
        <p className='text-xl mb-8'>
          Adjust the slider to see how much you can earn from both subscribers
          and PPV messages.
        </p>
      </div>

      {/* Revenue Slider */}
      <div className='mb-12'>
        <label htmlFor='users' className='block text-lg font-semibold mb-2'>
          Number of Subscribers/Followers
        </label>
        <input
          id='users'
          type='range'
          min='0'
          max='10000'
          value={users}
          onChange={e => setUsers(Number(e.target.value))}
          className='w-full h-3 bg-blue-200 rounded-lg appearance-none cursor-pointer'
        />
        <div className='flex justify-between mt-2'>
          <span className='text-sm'>0</span>
          <span className='text-sm'>10,000</span>
        </div>
        <p className='text-xl mt-2'>Current Number: {users}</p>
        <p className='text-2xl font-bold mt-4'>
          Total Estimated Revenue: €{totalRevenue}
        </p>

        {/* Red asterisk note about monthly revenue */}
        <p className='text-sm text-red-500 mt-2'>
          * Estimated earnings are based on monthly revenue.
        </p>
      </div>
    </div>
  )
}

export default RevenueSlider

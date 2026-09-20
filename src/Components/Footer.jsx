import React from 'react'
import { useTheme } from '../Context/ThemeContext'

function Footer() {
  const { isLightTheme } = useTheme();
  return (
    <div id="footer" className='w-full'>
        <hr className={isLightTheme ? 'border-t border-gray-300' : 'border-t border-gray-600'} />
       <div className={`flex items-center justify-between py-5 ${
         isLightTheme ? 'text-gray-600' : 'text-gray-600'
       }`}>
        <div>
            © 2026 Arun yadav. All rights reserved.
        </div>
        <h2>Keep Coding</h2>
       </div>
        
    </div>
  )
}

export default Footer
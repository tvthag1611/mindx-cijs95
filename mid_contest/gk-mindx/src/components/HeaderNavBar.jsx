import React from 'react'

const HeaderNavBar = () => {
  return (
    <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    }}>
        <h1 style={{
            fontSize: '36px',
            color: 'white',
            cursor: 'pointer'
        }}>
            Anonime
        </h1>

        <div style={{
            fontSize: '18px',
            color: '#868686',
            cursor: 'pointer'
        }}>
            Home
        </div>
        <div style={{
            fontSize: '18px',
            color: '#868686',
            cursor: 'pointer'
        }}>
            List anime
        </div>
        <div>
            <input type="text" placeholder='Search anime or movie' style={{fontSize: '18px', backgroundColor: '#374151', borderRadius: '37px', padding: '8px 100px 8px 18px'}} />
        </div>
    </div>
  )
}

export default HeaderNavBar
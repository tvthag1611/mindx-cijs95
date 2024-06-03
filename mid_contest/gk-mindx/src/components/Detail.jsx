import React from 'react'

const Detail = ({data}) => {
  return (
    <div style={{width: '100%', position: 'relative', marginTop: '30px' }}>
        <img src={data.image} alt="" style={{width: '100%', height: '400px', borderRadius: '12px',objectFit: 'cover',objectPosition:'0% 30%'}}/>
        <div style={{position: 'absolute', top: '45%', left: '5%'}}>
            <h1 style={{textAlign: 'left', fontSize: '36px', fontWeight: '600'}}>{data.movieName}</h1>
            <div style={{textAlign: 'left',maxWidth: '60%', fontSize: '14px'}}>{data.description}</div>
        </div>  
    </div>
  )
}

export default Detail
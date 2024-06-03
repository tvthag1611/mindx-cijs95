import React from 'react'

const CardComponent = ({data}) => {
  return (
    <div style={{borderRadius: '12px', overflow: 'hidden',width: '170px'}}>
        <div style={{position: 'relative'}}>
          <img src={data.image} alt="" style={{width: '170px', height: '254px',borderRadius: '12px'}}/>
          <div style={{fontSize: '16px',width: '100%',textAlign: 'center',position:'absolute',bottom:'20px'}}>Episode {data.episode}</div>
        </div>
        <div style={{fontSize: '16px',fontWeight: '600',width: '100%',textAlign:'center'}}>{data.movieName}</div>
    </div>
  )
}

export default CardComponent
import React from 'react'
import PropTypes from 'prop-types'
class Grid extends React.Component{
    
    
    
render(){
    let style = { backgroundColor: 'grey', height: '100px', marginLeft: '3%', marginBottom: '5%' }
    if(this.props.a.ability!='hidden')
    {
        style = { backgroundColor: this.props.a.color, height: '100px', marginLeft: '3%', marginBottom: '5%' }
    }
    
  
    return(
        
            
        <div ud='this.props.a.id' className='col-md-1' style={style} onClick={this.props.onClick}>
        </div>
      
    )
}





}
Grid.propTypes = {
    onClick: PropTypes.func
}

export default Grid;
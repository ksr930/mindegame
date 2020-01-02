import React from 'react'
import PropTypes from 'prop-types'
class Nav extends React.Component{
    render(){
        return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
            <a class="navbar-brand" href="#">MATCHING</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup" >
                <div class="navbar-nav">
                    <a class="nav-item nav-link active" href="#" onClick={this.props.restart}>New game<span class="sr-only">(current)</span></a>
                    
                </div>
            </div>
        </nav>
        )
    }
}
Nav.propTypes={
    restart:PropTypes.func
}
export default Nav;
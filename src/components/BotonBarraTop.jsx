import React from 'react'

const BotonBarraTop = (props) => (
        <React.Fragment>
            <button type="button" 
                    className="btn btn-primary mt-3" 
                    data-toggle="collapse" 
                    data-target="#demo">
                       
            </button>
            <div id="demo" className="collapse">
            <div class="card">
                    <div class="card-header">Header</div>
                    <div class="card-body">Content</div> 
                    <div class="card-footer">Footer</div>
                    </div>
            </div>
        </React.Fragment>

    
    )


export default BotonBarraTop
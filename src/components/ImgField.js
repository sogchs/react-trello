import React from 'react';

export default (props) => (

    <div className="custom-file ccff">
        {/* <input 
            type={props.type || 'text'}
            value={props.value}
            onChange={props.onChange}
            autoComplete="off"
            onBlur={props.onBlur}
            class="custom-file-input" 
            id="customFileLang" 
            lang="es"/>
        <label class="custom-file-label" for="customFileLang">Seleccionar Archivo</label> */}
        <button type="button" className="bot btn btn-outline-primary">
        <input 
            type={props.type || 'text'}
            value={props.value}
            onChange={props.onChange}
            autoComplete="off"
            onBlur={props.onBlur}
            className="custom-file-input" 
            // id="customFileLang" 
            lang="es"/> <i className="abc fas fa-plus"></i>
        </button>
        
        
    </div>
);
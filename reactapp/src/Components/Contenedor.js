import React from 'react'
import {makeStyles} from '@mui/styles'
import MenuAppbar from './MenuAppbar'

const estilos = makeStyles(theme => ({
    root: {
        display:'flex'
    }, 
    toolbar: theme.mixins.toolbar,
    content:{
        flexGrow:1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}))

const Contenedor = () => {

    const classes = estilos()
    return (
        <>  
        <div className={classes.root}>               
          <MenuAppbar/>                      
           <div className={classes.content}>
               <div className={classes.toolbar}></div>
           </div>                    
        </div>   
        </>
    )
}

export default Contenedor

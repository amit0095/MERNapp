import { AddShoppingCartRounded, Cancel, Apps,ClassSharp, Mail, Search } from "@mui/icons-material";
import { alpha, AppBar,   Avatar,   Badge,   InputBase,   Toolbar, Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";
import React from "react";
const usestyle=makeStyles((theme)=>/*console.log(theme)||*/({
    toolbar:{
        display:'flex',
        justifyContent:'space-between',
    },
    logoLg:{
        display:'none',
        [theme.breakpoints.up('sm') ]:{
            display:'block',
        }
    },
    logoSm:{
        display:'block',
        [theme.breakpoints.up('sm') ]:{
            display:'none'
        }
    },
    search:{
        display:'flex',
        alignItems:'center',
        backgroundColor:alpha(theme.palette.common.white,.15),
        '&:hover':{backgroundColor:alpha(theme.palette.common.white,.25),},
        borderRadius:theme.shape.borderRadius,
        width:'30%',
        color:'white',
        [theme.breakpoints.down('sm') ]:{
            display:(props)=>(props.open?'flex':'none')
        }
        
    },
    cancel:{
        [theme.breakpoints.up('sm') ]:{
            display:'none'
        },
        paddingTop:'3px',
        paddingRight:'3px'
    },
    menu:{
        display: (props)=>(props.open?'none':'flex'),
        alignItems:'center',
    },
    s:{
        marginRight:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            display:'none'
        },
    },
    input:{
        color:'white',
        marginLeft:theme.spacing(2)
    },
    badge:{
        marginRight:theme.spacing(2),
        [theme.breakpoints.down('sm')]:{
            display:'none'
        },
        
    },
    appicon:{
        marginRight:theme.spacing(1),
        [theme.breakpoints.up('sm')]:{
            display:'none'
        },
        
    }
}))

export default function MUIheader(){
    
    const [open, setopen] = React.useState(false)
    const classes=usestyle({open})
    // console.log(open);
return(

    <>
    <AppBar  position='sticky' >
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>Application</Typography>
            <Typography variant="h6" className={classes.logoSm}>App</Typography>
            <div className={classes.search}> 
                <Search/>   
                <InputBase size="md" sx={{color:'white'}} className={classes.input} placeholder="Search..."/>
                <div className={classes.cancel}><Cancel  onClick={()=>setopen(false)}/></div>
            </div>
            <div className={classes.menu} >
                <div className={classes.s}><Search  onClick={()=>setopen(true)}/></div>
                <div className={classes.appicon}   ><Apps className={classes.appicon} ></Apps></div>
                <div className={classes.badge} ><Badge color="secondary" badgeContent={30} ><AddShoppingCartRounded/></Badge></div>
                <div className={classes.badge} ><Badge color='warning' badgeContent={10}  max={6} ><Mail/></Badge></div>
                <Avatar src="https://images.unsplash.com/photo-1644624814431-0aa7a073e329?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="no img" ></Avatar>
            </div>
        </Toolbar>
    </AppBar>

    </>
)

}
import { makeStyles } from '@mui/styles'
import { Container, IconButton, Typography, } from '@mui/material'
import {Audiotrack, Bookmark, CellTower, Chair, Chat, FormatListBulleted, HeadsetMic, Home, LaptopMac, Logout} from '@mui/icons-material';
import React from 'react'
import { Link } from 'react-router-dom';
import { Person } from '@material-ui/icons';


const usestyle = makeStyles(( theme ) => ({

    container: {
        position:'sticky',
        top:0,
        left:0,
        color:'white',
        backgroundColor:theme.palette.info.light,
        paddingTop:theme.spacing(2),
        paddingLeft:theme.spacing(1.5),
        paddingRight:theme.spacing(2),
        marginLeft:0,
        height:'100%',
        width:'15%',
        [theme.breakpoints.up('sm')]:{
           backgroundColor:theme.palette.background.default,
           color:'#555',
           paddingLeft:theme.spacing(4),
           
         },
    },
    item: {
        display:'flex',
        alignItems:'center',
        minWidth:50,
        marginBottom:theme.spacing(3),
        [theme.breakpoints.up('sm')]:{
           marginBottom:theme.spacing(4),
           cursor:'pointer',   
         },
      },
      icon: {
         marginRight:20,
      },
      text: {
         fontWeight:700,
         [theme.breakpoints.down('sm')]:{
            display:'none',   
         },
      },
      link: {
         display:'flex',
         alignItems:'center'
      },


}))

export default function LeftContainer1() {

    const classes = usestyle()
    console.log(classes.text)
    return (
        <Container  className={classes.container} sx={{position:'fixed',top:50,left:0,width:'14%',}}>
            <div className={classes.item}>
               <Link to='/'  className={classes.link}>
               <IconButton  className={classes.icon} sx={{marginLeft:-1}}><Home ></Home></IconButton>
               <Typography className={classes.text}>Home sds</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/User2Api'  className={classes.link}>
               <IconButton  className={classes.icon} sx={{marginLeft:-1}}><Chair/></IconButton>
               <Typography className={classes.text}>Home sds</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/about'  className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><FormatListBulleted ></FormatListBulleted></IconButton>
               <Typography className={classes.text}>Home</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/contact' className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><Audiotrack ></Audiotrack></IconButton>
               <Typography className={classes.text}>Home</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/empty' className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><Chat  ></Chat ></IconButton>
               <Typography className={classes.text}>Home</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/search' className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><LaptopMac ></LaptopMac></IconButton>
               <Typography className={classes.text}>Home</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/signin' className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><CellTower ></CellTower></IconButton>
               <Typography className={classes.text}>Signin</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/userinfo' className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><Bookmark ></Bookmark></IconButton>
               <Typography className={classes.text}>Account</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/signup' className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}><Logout ></Logout></IconButton>
               <Typography className={classes.text}>signup</Typography></Link>
            </div>
            <div className={classes.item}>
               <Link to='/localuserinfo' className={classes.link}>
               <IconButton className={classes.icon} sx={{marginLeft:-1}}>
                  <Person/>
               </IconButton>
               <Typography className={classes.text}>signup</Typography></Link>
            </div>
        </Container>
    )

}
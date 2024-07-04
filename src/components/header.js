import React from "react";
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Divider,
} from "@mui/material";
import { Link } from '@mui/material';
import { FaTh } from "react-icons/fa";
import { TbButterfly } from "react-icons/tb";
import { FiMoreHorizontal } from "react-icons/fi";
import { LuHome } from "react-icons/lu";
import { GrCube } from "react-icons/gr";
import { FaRegStar } from "react-icons/fa6";
import { MdOutlineNotifications } from "react-icons/md";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { makeStyles } from '@mui/styles';


const useStyles = makeStyles({
    fimorehorizontal: {
        '&:hover': {
            backgroundColor: 'grey'
        },
        padding: "6px",
        borderRadius: "12px",
    },
    luhom: {
        '&:hover': {
            backgroundColor: 'grey'
        },
        padding:
            "10px",
        borderRadius: "12px",

    },
    grcube: {
        '&:hover': {
            backgroundColor: 'grey'
        },
        padding:
            "10px",
        borderRadius: "12px",
        color: "white",
    },
    faregstar: {
        '&:hover': {
            backgroundColor: 'grey'
        },
        padding:
            "10px",
        borderRadius: "12px"
    },
    mdoutlinenotifications: {
        '&:hover': {
            backgroundColor: 'grey'
        },
        padding:
            "10px",
        borderRadius: "12px"
    },
    iomdhelpcircleoutline: {
        '&:hover': {
            backgroundColor: 'grey'
        },
        padding:
            "10px",
        borderRadius: "12px"
    }
});


const Header = () => {
    const classes = useStyles();

    return (
        <AppBar position="static" sx={{ backgroundColor: "#13121D", }}>

            <Toolbar>
                <IconButton edge="start" color="inherit" aria-label="menu" style={{ marginRight: "13px", fontSize: "15px" }}>
                    <FaTh />
                </IconButton>


                <TbButterfly style={{
                    backgroundColor: '#4E8AFF'
                    , padding: "6px", fontSize: "18px", borderRadius: "7px", marginRight: "5px",
                }} />
                <Typography style={{ fontSize: "20px", fontFamily: "sans-serif", color: "#F2F2F8FD" }}>slaky</Typography>
                <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                        height: "45px",
                        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
                        marginTop: "10px",
                        marginLeft: "20px",
                        marginRight: "20px",
                    }}
                />

                <Typography style={{ color: "#F2F2F8FD", fontFamily: "sans-serif", fontSize: "15px", }}>
                    Lotus Wireless
                </Typography>

                <FiMoreHorizontal className={classes.fimorehorizontal} style={{ marginLeft: "20px", marginRight: "680px", fontSize: "25px", }} />
                <Link href="/Mainspace">
                <LuHome className={classes.luhom} style={{ fontSize: "20px" ,color:"white"}} />
                </Link>
                <Link href="/Homepagecontent">
                    <GrCube className={classes.grcube} style={{ marginLeft: "20px", fontSize: "20px" }} />
                    </Link>

                <FaRegStar className={classes.faregstar} style={{ marginLeft: "20px", fontSize: "20px" }} />

                <MdOutlineNotifications className={classes.mdoutlinenotifications} style={{ marginLeft: "20px", fontSize: "20px" }} />

                <Divider
                    orientation="vertical"
                    flexItem
                    style={{
                        height: "45px",
                        borderLeft: "1px solid rgba(255, 255, 255, 0.5)",
                        marginTop: "10px",
                        marginLeft: "20px",
                        marginRight: "20px",
                    }}
                />
                <IoMdHelpCircleOutline className={classes.iomdhelpcircleoutline} style={{ fontSize: "20px" }} />
            </Toolbar>
        </AppBar>
    );
};

export default Header;
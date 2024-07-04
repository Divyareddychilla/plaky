import { React, useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { MdComment } from "react-icons/md";
import { FaEllipsisH, FaRegClipboard, FaRegStar } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import './Homepagecontent.css';
import { IoInformationCircleOutline } from "react-icons/io5";
import { Link } from '@mui/material';
import { MdOutlineEdit } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { LuHome } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";
import { LuImport } from "react-icons/lu";
import { BiShieldPlus } from "react-icons/bi";


const HomePageContent = () => {
    const [showDropdown, setShowDropdownnew] = useState(false);
    const [showDropdownplus, setShowDropdownnewplus] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [boardName, setBoardName] = useState('');
    const [isActive, setIsActive] = useState(false);


    const handleDropdownTogglenew = () => {
        setShowDropdownnew(!showDropdown);
    }

    const handleDropdownClose = () => {
        setShowDropdownnew(false);
    }


    const handleDropdownToggleplus = () => {
        setShowDropdownnewplus(!showDropdownplus);
    }

    const handleDropdownCloseplus = () => {
        setShowDropdownnewplus(false);
    }

    const handleInnerDropdown1Click = () => {
        setShowDialog(true);
    };

    const handleCreateBoard = () => {
        const newBoard = {
            path: '/' + boardName.replace(/\s/g, ''),
            name: boardName,
            icon: <FaRegClipboard />,
            className: 'scroll-item',
        };
        setMenuItem(menuItem => [...menuItem, newBoard]);
        setShowDialog(false);
        setBoardName('');
    };

    const handleCancelCreateBoard = () => {
        setShowDialog(false);
    };

    const handleMouseEnter = () => {
        setIsActive(true);
    };

    const handleMouseLeave = () => {
        setIsActive(false);
    };

    const [menuItem, setMenuItem] = useState([
    ]);


    return (
        <div
            className="container"
            style={{
                height: '80vh', overflowY: 'auto', backgroundColor: '#272638', maxHeight: "95%",
                paddingRight: "10px",
                scrollbarWidth: "thin",
                scrollbarColor: " #BB86FC #35344D",
            }}
        >
            <div className="main" style={{ display: "flex", alignItems: "center", height: '20vh' }}>
                <Avatar
                    variant="square"
                    sx={{ bgcolor: '#4E8AFF', width: 27, height: 22, borderRadius: '9px', marginLeft: '5px', fontSize: '30px', textAlign: 'center', padding: '22px' }}
                >
                    M
                </Avatar>
                <div style={{ marginLeft: "10px", color: "#F2F2F8DE" }}>
                    <Typography variant="h5">Main Space</Typography>
                    <Typography variant="body2">Use the main space to manage and collaborate on all compant wide-boards. all team memebers <br />are in this space.</Typography>
                </div>
                <MdComment style={{ marginLeft: "30px", marginBottom: "35px", color: "#F2F2F8DE", fontSize: "22px" }} />
                <Typography style={{ marginBottom: "35px", marginLeft: "3px", color: "#F2F2F8DE", fontSize: "14px" }}>Give feedback</Typography>
                <Typography style={{ marginBottom: "35px", marginLeft: "20px", color: "#F2F2F8DE", backgroundColor: "#7573a033", padding: "8px", borderRadius: "7px", fontSize: "14px" }}>Leave Space</Typography>

                <FaEllipsisH className="leavespaceicon" onClick={handleDropdownTogglenew} style={{ marginBottom: "35px", marginLeft: "20px", fontSize: "20px", color: "#F2F2F8DE", padding: "5px", cursor: "pointer" }} />
                {showDropdown && (


                    <div style={{ position: 'absolute', top: '145px', left: '1100px', width: '170px', height: "140px", padding: '15px', zIndex: 2, borderRadius: "15px", backgroundColor: "#464564", marginTop: "10px", color: "#F2F2F8DE" }} onMouseLeave={handleDropdownClose}>

                        <div className='spacedropdownnew1' style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "5px" }}>
                            <MdOutlineEdit style={{ marginRight: "10px", fontSize: "20px" }} />
                            <Typography style={{ fontSize: "12px" }}>Rename Space</Typography>
                        </div>
                        <div className='spacedropdownnew1' style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "5px" }}>
                            <FaLaptop style={{ marginRight: "10px", fontSize: "20px" }} />
                            <Typography style={{ fontSize: "12px" }}>Change Space Type</Typography>
                        </div>
                        <div className='spacedropdownnew1' style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "5px" }}>
                            <LuHome style={{ marginRight: "10px", fontSize: "20px" }} />
                            <Typography style={{ fontSize: "12px" }}>Select as default Space</Typography>
                        </div>
                        <div className="horizontal_line_new" />
                        <div className='spacedropdownnew1' style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "5px" }}>
                            <RiDeleteBin6Line style={{ marginRight: "10px", fontSize: "20px" }} />
                            <Typography style={{ fontSize: "12px" }}>Delete Space</Typography>
                        </div>
                    </div>
                    
                )}
            </div>

            <div style={{ display: 'flex', color: "#F2F2F8DE" }}>

                <div style={{ width: '50%' }}>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Typography style={{ fontSize: "20px" }}>Space Boards</Typography>
                        <CiCirclePlus onClick={handleDropdownToggleplus} style={{ fontSize: "25px", marginLeft: "300px", backgroundColor: "#464564", padding: "5px", borderRadius: "10px" ,cursor:"pointer"}} />
                        <div
                                                className={`dropdown-container ${isActive ? "active" : ""}`}
                                                onMouseEnter={handleMouseEnter}
                                                onMouseLeave={handleMouseLeave}
                                            >
                        {showDropdownplus && (


                            <div style={{ position: 'absolute', top: '240px', left: '570px', width: '170px', height: "100px", padding: '15px', zIndex: 2, borderRadius: "15px", backgroundColor: "#464564", marginTop: "10px", color: "#F2F2F8DE" }} onMouseLeave={handleDropdownCloseplus}>

                                <div  onClick={handleInnerDropdown1Click} className='spacedropdownnewplus' style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "5px" }}>
                                    <FaRegClipboard style={{ marginRight: "10px", fontSize: "20px" }} />
                                    <Typography style={{ fontSize: "12px" }}>Create From Scratch</Typography>
                                </div>
                                {showDialog && (
                                <div className="dialog">
                                    <div className="dialog-content">
                                        <div className="dialog-header">
                                            <Typography variant="h6" style={{ fontWeight: 'bold' }}>Create Board</Typography>
                                        </div>
                                        <div className="horizontal_linenew" />
                                        <div className="dialog-body">
                                            <div className="dialog-label">Board Name</div>
                                            <input type="text" style={{ backgroundColor: "transparent", padding: "8px 15px", border: "1px solid #4E8AFF", borderRadius: "5px", width: "450px", marginTop: "10px" }} value={boardName} onChange={(e) => setBoardName(e.target.value)} />
                                        </div>
                                        <div className="horizontal_linenew" />
                                        <div className="dialog-actions">
                                            <button onClick={handleCancelCreateBoard} style={{ backgroundColor: "transparent", color: "white", padding: "8px 15px", border: "1px solid #464564", borderRadius: "5px", cursor: "pointer", transition: "background 0.3s" }}>Cancel</button>
                                            <button onClick={handleCreateBoard} style={{ cursor: "pointer", marginLeft: '50px', width: "110px", padding: "12px", backgroundColor: "#4E8AFF", borderRadius: "10px", }}>Create Board</button>
                                        </div>
                                    </div>
                                </div>
                            )}

                                <div className='spacedropdownnewplus' style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "5px" }}>
                                    <BiShieldPlus style={{ marginRight: "10px", fontSize: "20px" }} />
                                    <Typography style={{ fontSize: "12px" }}>Create From Template</Typography>
                                </div>
                                <div className='spacedropdownnewplus' style={{ display: "flex", alignItems: "center", cursor: "pointer", padding: "5px" }}>
                                    <LuImport style={{ marginRight: "10px", fontSize: "20px" }} />
                                    <Typography style={{ fontSize: "12px" }}>Create From File</Typography>
                                </div>
                            </div>


                        )}
                    </div>
                    </div>
                    <div class="table-wrapper">



                        <table style={{ borderCollapse: "collapse", marginTop: "15px", width: "95%", }}>
                            <tbody style={{}}>
                                <tr>
                                    <Link href="/Oaplanning" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>OA Planning</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto", }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Oadate" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>OA Date</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Design" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>Design</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Development" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>Development</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Scrumboard" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>Scrum Board</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Newscrumboard" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>New Scrum Board</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Hrrequests" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>Hr Request</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>

                                </tr>
                                <tr>
                                    <Link href="/Ss" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>SS</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Socialmediacalender" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>

                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>Social Media Calender</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Scrumboard1" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>Scrum Board</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>
                                </tr>
                                <tr>
                                    <Link href="/Oaplanning" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>New one</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>

                                </tr>
                                <tr>
                                    <Link href="/Oaplanning" style={{ textDecoration: "none" }}>
                                        <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", cursor: "pointer", color: "#F2F2F8DE" }}>
                                            <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                            <Typography style={{ fontSize: "13px" }}>Add</Typography>
                                            <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                        </td>
                                    </Link>

                                </tr>


                            </tbody>
                        </table>
                    </div>

                </div>



                <div style={{ width: '50%', }}>
                    <Typography style={{ marginBottom: "15px", marginTop: "5px", fontSize: "20px" }}>Space Subcriptions</Typography>
                    <div style={{ display: "flex", alignItems: "center", backgroundColor: "#CFE2FF", width: "91%", padding: "10px", borderRadius: "10px", color: "black" }}>

                        <IoInformationCircleOutline style={{ fontSize: "23px", marginRight: "10px" }} />

                        <Typography style={{ fontSize: "13px", }}>All users are the members of the intial space</Typography>
                    </div>



                    <div class="table-wrapper">



                        <table style={{ borderCollapse: "collapse", marginTop: "15px", width: "95%", }}>
                            <tbody style={{}}>
                                <tr>
                                    <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", }}>
                                        <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                        <Typography style={{ fontSize: "15px" }}>Link Account</Typography>
                                        <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", }}>
                                        <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                        <Typography style={{ fontSize: "15px" }}>Link Account</Typography>
                                        <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", }}>
                                        <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                        <Typography style={{ fontSize: "15px" }}>Link Account</Typography>
                                        <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", }}>
                                        <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                        <Typography style={{ fontSize: "15px" }}>Link Account</Typography>
                                        <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", }}>
                                        <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                        <Typography style={{ fontSize: "15px" }}>Link Account</Typography>
                                        <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", }}>
                                        <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                        <Typography style={{ fontSize: "15px" }}>Link Account</Typography>
                                        <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                    </td>
                                </tr>
                                <tr>
                                    <td style={{ padding: "10px", display: "flex", alignItems: "center", border: "0.5px solid #464564", }}>
                                        <FaRegClipboard style={{ fontSize: "20px", marginRight: "10px" }} />
                                        <Typography style={{ fontSize: "15px" }}>Link Account</Typography>
                                        <FaRegStar style={{ textAlign: "right", paddingRight: "10px", fontSize: "15px", marginLeft: "auto" }} />
                                    </td>
                                </tr>




                            </tbody>
                        </table>

                    </div>

                </div>







            </div>



        </div>

    );
}

export default HomePageContent;

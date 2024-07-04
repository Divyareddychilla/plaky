import React, { useState } from 'react';
import { FiMoreHorizontal } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { IoMdAddCircleOutline } from 'react-icons/io';
import { FaSearch, FaRegClipboard, FaAngleDown, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { LuClipboardList } from "react-icons/lu";
import { VscNewFolder } from "react-icons/vsc";
import { AiOutlineCaretRight } from "react-icons/ai";
import { LuImport } from "react-icons/lu";
import { BiShieldPlus } from "react-icons/bi";
import { IoSettingsOutline } from "react-icons/io5";
import { MdOutlineEdit } from "react-icons/md";
import { FaLaptop } from "react-icons/fa";
import { LuHome } from "react-icons/lu";
import { RiDeleteBin6Line } from "react-icons/ri";

const Sidebar = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isLeft, setIsLeft] = useState(true);
    const [addDropdownOpen, setAddDropdownOpen] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [boardName, setBoardName] = useState('');
    const [isActive, setIsActive] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const searchIcon = <FaSearch style={{ marginRight: '7px' }} />;
    const [isSearchFocused, setIsSearchFocused] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);


    const handleDropdownToggle = () => {
        setShowDropdown(!showDropdown);
    }

    const handleDropdownClose = () => {
        setShowDropdown(false);
    }


    const handleSearchFocus = () => {
        setIsSearchFocused(true);
    };

    const handleSearchBlur = () => {
        setIsSearchFocused(false);
    };


    const [menuItem, setMenuItem] = useState([
        
    ]);

    const filteredItems = menuItem.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    const sortedItems = filteredItems.sort((a, b) => {
        if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
        if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
        return 0;
    });



    const handleArrowClick = () => {
        setIsLeft(isLeft => !isLeft);
        setIsOpen(isOpen => !isOpen);
    };

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

    return (
        <Container>
            <Row>
                <Col>
                    <div className="bg_container">
                        <div className="container_con">

                            <div className="container_sub" style={{ position: 'relative' }}>
                                <div className={`sidebar ${isOpen ? 'sidebar-open' : ''}`}

                                >




                                    <div className="top_section">
                                        <h3 className={`space-heading ${isOpen ? 'space-heading--open' : ''}`}>Space</h3>
                                        <FiMoreHorizontal className={`spacemoree ${isOpen ? 'spacemoree--open' : ''}`} onClick={handleDropdownToggle} />

                                        {showDropdown && (
                                            <div className="main_spacedropdown" onMouseLeave={handleDropdownClose}>
                                                <div className='spacedropdown1'>
                                                    <IoSettingsOutline className="spacedropdownicon1" />
                                                    <h3 className="spacedropdowntext1" >Main Space</h3>
                                                </div>
                                                <div className='spacedropdown1'>
                                                    <MdOutlineEdit className="spacedropdownicon1" />
                                                    <h3 className="spacedropdowntext1" >Rename Space</h3>
                                                </div>
                                                <div className='spacedropdown1'>
                                                    <FaLaptop className="spacedropdownicon1" />
                                                    <h3 className="spacedropdowntext1" >Change Space Type</h3>
                                                </div>
                                                <div className='spacedropdown1'>
                                                    <LuHome className="spacedropdownicon1" />
                                                    <h3 className="spacedropdowntext1" >Select as default Space</h3>
                                                </div>
                                                <div className="horizontal_line_new" />
                                                <div className='spacedropdown1'>
                                                    <IoMdAddCircleOutline className="spacedropdownicon1" />
                                                    <h3 className="spacedropdowntext1" >Add New Space</h3>
                                                </div>
                                                <div className="horizontal_line_new" />
                                                <div className='spacedropdown1'>
                                                    <RiDeleteBin6Line className="spacedropdownicon1" />
                                                    <h3 className="spacedropdowntext1" >Delete Space</h3>
                                                </div>
                                            </div>
                                        )}
                                    </div>







                                    <div className="mainsection">



                                        <h5 className="m_avatar" style={{ display: isOpen ? 'block' : 'none' }}>M</h5>



                                        <h3 className="mainspace_heading" style={{ display: isOpen ? 'block' : 'none' }}>
                                            Main Space
                                        </h3>


                                        <FaAngleDown className="FaAngleDownicon" style={{ display: isOpen ? 'block' : 'none' }} />

                                        
                                    </div>
                                    <div className="addsection" onClick={() => setAddDropdownOpen(true)} onMouseLeave={() => setAddDropdownOpen(false)}>
                                        <div className="plusadd" style={{ display: isOpen ? 'flex' : 'none', alignItems: 'center', justifyContent: 'center' }}>
                                            <IoMdAddCircleOutline style={{ display: isOpen ? 'block' : 'none', fontSize: '25px', marginRight: "15px" }} />
                                            <h3 style={{ display: isOpen ? 'block' : 'none', fontSize: '13px', marginRight: "145px" }}>Add</h3>
                                        </div>
                                        {addDropdownOpen && (
                                            <div className="add-dropdown-container">
                                                <NavLink to="" className="link" activeClassName="active">
                                                    <div className="droponelink">
                                                        <LuClipboardList style={{ marginRight: "10px", fontSize: "14px" }} />
                                                        <h3 style={{ fontSize: "14px", marginRight: "70px" }}>New Board</h3>
                                                        <AiOutlineCaretRight />
                                                        <div
                                                            className={`dropdown-container ${isActive ? "active" : ""}`}
                                                            onMouseEnter={handleMouseEnter}
                                                            onMouseLeave={handleMouseLeave}
                                                        >
                                                            <div className='maininnercontainer'>
                                                                <div className='innerdropdown1' onClick={handleInnerDropdown1Click}>
                                                                    <FaRegClipboard style={{ fontSize: "14px", marginRight: "10px", marginLeft: "10px" }} />
                                                                    <h3 style={{ fontSize: "14px" }}>Create From Scratch</h3>
                                                                </div>
                                                                <div className='innerdropdown2'>
                                                                    <BiShieldPlus style={{ fontSize: "14px", marginRight: "10px", marginLeft: "5px" }} />
                                                                    <h3 style={{ fontSize: "14px" }}>Create From Template</h3>
                                                                </div>
                                                                <div className='innerdropdown3'>
                                                                    <LuImport style={{ fontSize: "14px", marginRight: "10px", marginLeft: "5px" }} />
                                                                    <h3 style={{ fontSize: "14px" }}>Create From File</h3>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </NavLink>
                                                <NavLink to="" className="link" activeClassName="active">
                                                    <div className='droponelink1'>
                                                        <VscNewFolder style={{ marginRight: "10px", fontSize: "14px" }} />
                                                        <h3 style={{ fontSize: "14px" }}>New Folder</h3>
                                                    </div>
                                                </NavLink>
                                            </div>
                                        )}
                                        {showDialog && (
                                            <div className="dialog">
                                                <div className="dialog-content">
                                                    <div className="dialog-header">
                                                        <h3 variant="h6" style={{ fontWeight: 'bold' }}>Create Board</h3>
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
                                    </div>


                                    <div className="searchsection" style={{ display: isOpen ? 'flex' : 'none', alignItems: 'center', fontSize: '13px' }}>
                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                            <FaSearch style={{ fontSize: '20px', marginRight: "-25px", marginLeft: "5px" }} />
                                            <input
                                                type="text"
                                                value={searchTerm}
                                                onChange={(e) => setSearchTerm(e.target.value)}
                                                placeholder="Search"
                                                style={{
                                                    backgroundColor: 'transparent',
                                                    padding: '8px 15px 8px 40px',
                                                    borderRadius: '5px',
                                                    color: 'white',
                                                    border: `1px solid ${isSearchFocused ? '#4E8AFF' : 'transparent'}`,
                                                    outline: 'none',
                                                    transition: 'border-color 0.3s',
                                                    width: '70%',
                                                    backgroundImage: `url(${searchIcon.props.icon})`,
                                                    backgroundRepeat: 'no-repeat',
                                                    backgroundPosition: 'left center',
                                                }}
                                                onFocus={handleSearchFocus}
                                                onBlur={handleSearchBlur}
                                                className={isSearchFocused ? 'search-focused' : ''}
                                            />
                                        </div>
                                    </div>



                                    
                                    <div className="horizontal_line" />
                                    <div style={{ display: isOpen ? 'block' : 'none', }} className="menu_items">
                                        {sortedItems.map((item, index) => {
                                            if (item.type === 'line') {
                                                return <div className="horizontal_line" key={index} />
                                            }
                                            const itemClass = item.className || ''
                                            // Check if item name contains the search term
                                            const isMatch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
                                            // Highlight matched characters in the item name with a yellow color
                                            const nameParts = isMatch ? item.name.split(new RegExp(`(${searchTerm})`, 'gi')) : [item.name]
                                            const highlightedName = nameParts.map((part, i) =>
                                                part.toLowerCase() === searchTerm.toLowerCase() ? (
                                                    <span key={i} style={{ backgroundColor: 'yellow' }}>
                                                        {part}
                                                    </span>
                                                ) : (
                                                    <span key={i}>{part}</span>
                                                )
                                            )
                                            return (
                                                <NavLink to={item.path} key={index} className={`link ${itemClass} ${isMatch ? 'selected' : ''}`} activeClassName="active">
                                                    <div className="icon" style={{ fontSize: '16px', color: 'white' }}>
                                                        {item.icon}
                                                    </div>
                                                    <div style={{ display: isOpen ? 'flex' : 'none', alignItems: 'center' }} className="link_text">
                                                        <div style={{ display: 'flex', alignItems: 'center' }}>
                                                            <div style={{ fontSize: '14px', color: 'white' }}>{highlightedName}</div>
                                                         
                                                        </div>
                                                    </div>
                                                </NavLink>
                                            )
                                        })}
                                    </div>
                                    <div className="horizontal_line" />
                                </div>
                                <div
                                    style={{
                                        position: 'absolute',
                                        top: '250px',
                                        left: isOpen ? '250px' : '0px',
                                        width: '20px',
                                        height: '20px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        color: 'white',
                                        borderRadius: '7px',
                                        border: '1px solid #464564',
                                        cursor: 'pointer',
                                    }}
                                    onClick={handleArrowClick}
                                >
                                    {isLeft ? <FaChevronRight /> : <FaChevronLeft />}
                                </div>
                            </div>
                            <main>{children}</main>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};
export default Sidebar;
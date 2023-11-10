import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SettingsIcon from '@mui/icons-material/Settings';

export default function NavBar() {
  return (
    <div className="navBarBox">
        <div className="navBarLeft">
            <span className='logo'>Facebook</span>
        </div>
        <div className="navBarCenter">
            <div className="searchBarBox">
                <SearchIcon className='searchIcon'/>
                <input placeholder='search for your friend' className='searchInput' />
            </div>
        </div>
        <div className="navBarRight">
            <div className="navBarLinks">
                <span className='navBarLink'>Home</span>
                <span className='navBarLink'>Profile</span>
            </div>
            <div className="navBarIcons">
                <div className="navBarIcon">
                    <PersonIcon/>
                </div>
                <div className="navBarIcon">
                    <MessageIcon/>
                </div>
                <div className="navBarIcon">
                    <SettingsIcon/>
                </div>
            </div>
        </div>
    </div> 
  )
}

import React from 'react'
import WidgetsIcon from '@mui/icons-material/Widgets';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import QuizIcon from '@mui/icons-material/Quiz';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import "../sideNavbar/SideNavbar"
const SideNavbar = () => {
    const nav= [{
        icon: <WidgetsIcon />,
        name: "Dashboard"
      },
      {
        icon: <AddBusinessIcon  />,
        name: "Pearks"
      },
      {
        icon: <BookmarkAddIcon />,
        name: "Addons"
      },
      {
        icon: <QuizIcon />,
        name: "FAQ"
      },
      {
        icon: <ContactMailIcon />,
        name: "Support"
      }
      ]
      return (
        <div className="App">
          {
            nav?.map((item, index) =>(
              <p key={index}>{item.icon}{item.name}</p>
             
            ))
          }
        </div>
  )
}

export default SideNavbar

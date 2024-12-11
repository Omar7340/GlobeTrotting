import backgroundimg from '@/assets/cat-bg.png'
import { useEffect, useState } from "react"
import Logo from './Logo'
import MenuLinksDisconnected from './MenuLinksDisconnected'
import MenuToggle from './MenuToggle'
import NavBarContainer from './NavBarContainer'
import MenuLinksConnected from './MenuLinksConnected'

export default function NavBar({ ...props }) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  const token = localStorage.getItem("travelplanner-token")

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgroundimg}')`
  })

  return (
    <NavBarContainer {...props}>
      <Logo w="70px" />
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      {token ?
        <MenuLinksConnected isOpen={isOpen} />
        : <MenuLinksDisconnected isOpen={isOpen} />
      }
    </NavBarContainer>
  )
}
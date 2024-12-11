import backgroundimg from '@/assets/cat-bg.png'
import { useEffect, useState } from "react"
import Logo from './Logo'
import MenuLinks from './MenuLinks'
import MenuToggle from './MenuToggle'
import NavBarContainer from './NavBarContainer'

export default function NavBar ({...props}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  useEffect(() => {
    document.body.style.backgroundImage = `url('${backgroundimg}')`
  })

  return (
    <NavBarContainer {...props}>
      <Logo w="70px"/>
      <MenuToggle toggle={toggle} isOpen={isOpen} />
      <MenuLinks isOpen={isOpen} />
    </NavBarContainer>
  )
}
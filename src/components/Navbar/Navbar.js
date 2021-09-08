import React, {useState, useEffect} from 'react'
import { Nav, 
    NavbarContainer, 
    NavLogo, 
    NavIcon, 
    HamburgerIcon,
    NavMenu,
    NavItem,
    NavLinks,
    NavItemBtn,
    NavBtnLink
 } from './Navbar.elements'
import { FaTimes, FaBars } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib'
import { Button } from '../../globalStyles';


function Navbar() {

    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const [homeClick, setHomeClick] = useState(false);
    const [industryClick, setIndustryClick] = useState(false);
    const [investigatorsClick, setInvestigatorsClick] = useState(false);
    const [patientsClick, setPatientsClick] = useState(false);

    const handleHomeClick = () => {
        setHomeClick(true);
        setIndustryClick(false);
        setInvestigatorsClick(false);
        setPatientsClick(false);
    }
    const handleIndustryClick = () => {
        setHomeClick(false);
        setIndustryClick(true);
        setInvestigatorsClick(false);
        setPatientsClick(false);
    }
    const handleInvestigatorsClick = () => {
        setHomeClick(false);
        setIndustryClick(false);
        setInvestigatorsClick(true);
        setPatientsClick(false);
    }
    const handlePatientsClick = () => {
        setHomeClick(false);
        setIndustryClick(false);
        setInvestigatorsClick(false);
        setPatientsClick(true);
    }

    const handleClick = () =>  setClick(!click);
    
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        // if the screensize is <= 960px then set button state to false
        if(window.innerwidth <= 960) {
            setButton(false)
        } else {
            setButton(true)
        }
    }

    useEffect(() => {
        showButton();
    }, [])

    window.addEventListener('resize', showButton);

    return (
        <React.Fragment>
        <IconContext.Provider value={{ color: '#fff' }}>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'> 
                        <NavIcon />
                            NoStressTrial
                    </NavLogo>
                    <HamburgerIcon onClick={handleClick}>
                        {click ? <FaTimes /> : <FaBars />}
                    </HamburgerIcon>
                    <NavMenu onClick={handleClick} click={click} >
                        <NavItem onClick={handleHomeClick} homeClick={homeClick}>
                            <NavLinks to='/' onClick={closeMobileMenu}>
                                Home
                            </NavLinks>
                        </NavItem>
                    
                    
                        <NavItem onClick={handleIndustryClick} industryClick={industryClick}>
                            <NavLinks to='/industry' onClick={closeMobileMenu}>
                                For Sponsors and CROs
                            </NavLinks>
                        </NavItem>

                        <NavItem onClick={handleInvestigatorsClick} investigatorsClick={investigatorsClick}>
                            <NavLinks to='/investigators' onClick={closeMobileMenu}>
                                For Site Investigators
                            </NavLinks>
                        </NavItem>
                    
                        <NavItem onClick={handlePatientsClick} patientsClick={patientsClick}>
                            <NavLinks to='/patients' onClick={closeMobileMenu}>
                                For Patients
                            </NavLinks>
                        </NavItem>

                        <NavItemBtn >
                            {button ? (
                                <NavBtnLink to='/login'>
                                    <Button primary>LOG IN</Button>
                                </NavBtnLink>
                            ) : (
                                <NavBtnLink to='/login'>
                                    <Button onClick={closeMobileMenu} fontBig primary>LOG IN</Button>
                                </NavBtnLink>
                            )}
                            
                        </NavItemBtn>

                    </NavMenu>
                </NavbarContainer>
            </Nav>
        </IconContext.Provider>    
        </React.Fragment>
    )
}

export default Navbar

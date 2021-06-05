import React from 'react'
import { Button, Drawer, Icon } from 'rsuite'
import DashBoard from '.'
import { useMediaQuery, useModalState } from '../../misc/custom-hooks'

const DashboardToggle = () => {

 const {isOpen ,close , open} = useModalState();
 const isMobile = useMediaQuery('max-width: 998px');


  return (
    <>
     <Button block color="blue" onClick={open}>
       <Icon icon="dashboard"/> DashBoard
       </Button> 
       <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
         <DashBoard />

       </Drawer>
    </>
  )
}

export default DashboardToggle

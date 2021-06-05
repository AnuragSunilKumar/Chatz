import React , {useCallback} from 'react'
import { Alert, Button, Drawer, Icon } from 'rsuite'
import DashBoard from '.'
import { useMediaQuery, useModalState } from '../../misc/custom-hooks'
import { auth } from '../../misc/Firebase'

const DashboardToggle = () => {

 const {isOpen ,close , open} = useModalState();
 const isMobile = useMediaQuery('max-width: 998px');

 const onSignOut = useCallback(() => {
     auth.signOut();

     Alert.info('Signed out',4000);

     close();
   },[close])


  return (
    <>
     <Button block color="blue" onClick={open}>
       <Icon icon="dashboard"/> DashBoard
       </Button> 
       <Drawer full={isMobile} show={isOpen} onHide={close} placement="left">
         <DashBoard onSignOut={onSignOut} />

       </Drawer>
    </>
  )
}

export default DashboardToggle

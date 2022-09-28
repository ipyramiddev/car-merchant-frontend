import * as React from 'react';
import Typography from '@mui/material/Typography';
import Popover from '@mui/material/Popover';
import { Box, Divider } from '@mui/material';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import logo from "../assets/logo.png"
export default function PopoverComponant() {
  return (
    <PopupState variant="popover" popupId="demo-popup-popover">
      {(popupState) => (
        <div>
          <Box display="flex" justifyContent="end">
            <a className="contact" {...bindTrigger(popupState)}><WhatsAppIcon />&nbsp;&nbsp;¿Podemos ayudarte?</a>
          </Box>
          <Popover
          sx={{}}
            {...bindPopover(popupState)}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'right',
            }}
            transformOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
          >
            <Box >
              <Box sx={{background:"#f29f25"}}>
                <Typography fontSize="20px" fontWeight="500" sx={{ p: 2, pb:0 }}>Hola!</Typography>
              <Typography sx={{ p: 2 }}>Pinche para hablar con nosotros o escríbanos a <br/>info@vtc-toledo.com</Typography>
              </Box>
              <a href="https://web.whatsapp.com/send?phone=34622151560&text=asdfasdfasdf" style={{textDecoration:"none", color:"black"}}>
              <Box display="flex" sx={{alignItems:"center", ml:"20px"}}>
                <img src={logo} width="100px"/>
                <WhatsAppIcon/>
                <Typography sx={{ p: 2 }}>VTC-TOLEDO</Typography>
              </Box>
              </a>
              <Divider />
              <a href="https://web.whatsapp.com/send?phone=34622151560&text=asdfasdfasdf" style={{textDecoration:"none", color:"black"}}>
              <Box display="flex" sx={{alignItems:"center", ml:"20px"}}>
                <img src={logo} width="100px"/>
                <WhatsAppIcon/>
                <Typography sx={{ p: 2 }}>VTC-TOLEDO</Typography>
              </Box>
              </a>
            </Box>
            
          </Popover>
        </div>
      )}
    </PopupState>
  );
}

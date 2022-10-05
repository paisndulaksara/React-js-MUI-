import { Notifications, Pets, } from '@mui/icons-material'
import { AppBar, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material'
import Badge from '@mui/material/Badge';
import React from 'react';
import Mail from '@mui/icons-material/Mail';
import Avatar from '@mui/material/Avatar';
import { useState } from 'react';

const StyledToolBar = styled(Toolbar)({
    display: "flex",
    justifyContent: 'space-between'

})

const Search = styled("div")(({ theme }) => ({
    backgroundColor: "white",
    padding: "0 10px",
    borderRadius: theme.shape.borderRadius,
    width: '40%',
}));

const Icons = styled(Box)(({ theme }) => ({
    display: "none",
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'flex'
    }
}));

const Userbox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up("sm")]: {
        display: 'none'
    }

}));

const Navbar = () => {
    const [open, setOpen] = useState(false)
    return (
        <AppBar position='sticky'>
            <StyledToolBar >
                <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>Navar</Typography>
                <Pets sx={{ display: { xs: "block", sm: "none" } }} />
                <Search> <InputBase placeholder='search..'></InputBase></Search>
                <Icons>
                    <Badge badgeContent={4} color="error">
                        <Mail />
                    </Badge>
                    <Badge badgeContent={2} color="error">
                        <Notifications />
                    </Badge>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?cs=srgb&dl=pexels-alexander-grey-1148998.jpg&fm=jpg'
                        onClick={e => setOpen(true)}
                    />
                </Icons>
                <Userbox onClick={e => setOpen(true)}>
                    <Avatar sx={{ width: 30, height: 30 }} src='https://images.pexels.com/photos/1148998/pexels-photo-1148998.jpeg?cs=srgb&dl=pexels-alexander-grey-1148998.jpg&fm=jpg' />
                    <Typography variant='span'>Pasindu</Typography>
                </Userbox>

            </StyledToolBar>
            <Menu
                id="demo-positioned-menu"
                aria-labelledby="demo-positioned-button"

                open={open}
                onClose={e => setOpen(false)}
                anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
                transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                }}
            >
                <MenuItem>Profile</MenuItem>
                <MenuItem>My account</MenuItem>
                <MenuItem>Logout</MenuItem>
            </Menu>
        </AppBar>
    )
}

export default Navbar
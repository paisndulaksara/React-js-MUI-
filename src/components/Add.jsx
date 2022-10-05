import { Avatar, Box, Button, ButtonGroup, Fab, Modal, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import { Add as AddIcon, Image, EmojiEmotions, PersonAdd, VideoCameraBack, DateRange } from "@mui/icons-material"
import { useState } from 'react'
import { Stack, styled } from '@mui/system'

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
})

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "20px"
})

export const Add = () => {
    const [open, setOpen] = useState(false)
    return (
        <>
            <Tooltip onClick={e => setOpen(true)} title="Delete" sx={{
                position: "fixed",
                bottom: 20,
                left: { xs: "calc(50% -25px)", md: 30 },
            }}>
                <Fab color="primary" aria-label="add">
                    <AddIcon />
                </Fab>
            </Tooltip>
            <StyledModal
                open={open}
                onClose={e => setOpen(false)}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box width={400} height={280}  p={3} borderRadius={5} bgcolor={"background.default"} color={"text.primary"} >
                    <Typography variant='h6' color="gray" textAlign="center">Create Post</Typography>

                    <UserBox>
                        <Avatar alt="Remy Sharp" src="https://mui.com/static/images/avatar/1.jpg" sx={{ width: 30, height: 30 }} />
                        <Typography fontWeight={500} variant="span">John Doe</Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="WHat's on your mind"
                        variant="standard"
                    />
                    <Stack direction="row" gap={1} mt={2} mb={4}>
                        <EmojiEmotions />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup 
                    fullWidth
                    variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{width:"100px"}}> 
                        <DateRange/>
                        </Button>
                        
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

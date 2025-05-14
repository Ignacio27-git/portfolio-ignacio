import React from 'react'

import { Avatar, List, ListItem, ListItemAvatar } from '@mui/material'
import { Code, EnvelopeSimple, House, ReadCvLogo } from '@phosphor-icons/react'

import './Header.scss'

const Header = () => {
    return (
        <List className='header'>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <House size={32} />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <ReadCvLogo size={32} />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <Code size={32} />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
            <ListItem>
                <ListItemAvatar>
                    <Avatar>
                        <EnvelopeSimple size={32} />
                    </Avatar>
                </ListItemAvatar>
            </ListItem>
        </List>
    )
}

export default Header

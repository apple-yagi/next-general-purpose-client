import {
  Drawer, IconButton, List, ListItem, ListItemIcon
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import { AccountCircle, HomeOutlined, ListOutlined } from "@material-ui/icons";
import { FC, useState } from "react";
import NextLink from 'next/link'

const useStyles = makeStyles({
  header: {
    height: 50
  },
  li: {
    display: 'inline',
    marginRight: 10,
    marginLeft: 10
  }
});

const Header: FC = () => {
  const classes = useStyles()
  const [isOpen, setIsOpen] = useState<boolean>(false)

  const pages = [{ name: 'Home', link: '/', icon: <HomeOutlined /> }, { name: 'Users', link: '/users', icon: <AccountCircle /> }]
  const ListItemLink = (props) => {
    return <ListItem button component="a" {...props} />
  }

  const list = () =>
    (
      <div className="w-40 md:w-48" role="presentation" onClick={(e) => setIsOpen(false)}
        onKeyDown={e => setIsOpen(false)} >
        <List>
          {pages.map(page => (
            <ListItemLink key={page.name} href={page.link}>
              <ListItemIcon>{page.icon}</ListItemIcon>
              <ListItemIcon>{page.name}</ListItemIcon>
            </ListItemLink>
          ))}
        </List>
      </div>
    )

  return (
    <div>
      <Drawer anchor="left" className="md:w-20" open={isOpen} onClose={(e) => setIsOpen(false)} >
        {list()}
      </Drawer>
      <header className={`shadow flex justify-between ${classes.header}`}>
        <NextLink href="/"><a className="flex items-center"><img className="h-6 w-6 md:h-8 md:w-8" src="purpose.png" alt="purpose icon" />
          <span className="text-lg md:text-2xl">Purpose Client</span></a></NextLink>
        <div className="md:hidden mr-5">
          <IconButton onClick={(e) => (setIsOpen(true))}><ListOutlined /></IconButton>
        </div>
        <ul className="hidden pt-3 md:block">
          <li className={classes.li}><NextLink href="/"><a>ホーム</a></NextLink></li>
          <li className={classes.li}><NextLink href="/users" ><a>ユーザ</a></NextLink></li>
        </ul>
      </header>
    </div>
  )
}

export default Header
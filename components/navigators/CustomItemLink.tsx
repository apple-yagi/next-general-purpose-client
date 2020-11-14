import React, { FC, forwardRef, RefObject, useRef } from "react";
import { PageItem } from "../../types/list-link-item";
import NextLink from 'next/link'
import { ListItem, ListItemIcon, ListItemProps } from "@material-ui/core";

type PropsType = {
  page: PageItem
}

type CustomLinkProps = Omit<ListItemProps<'a', { href: string }>, 'component' | 'button'>

const CustomLink = forwardRef<HTMLAnchorElement, CustomLinkProps>((props, ref) => {
  const {
    href,
    ...other
  } = props

  return (
    <NextLink href={href}>
      <ListItem button ref={ref} component="a" {...other} />
    </NextLink>
  )
})

const CustomItemLink: FC<PropsType> = ({ page }) => {
  return (
    <CustomLink href={page.link}>
      <ListItemIcon>{page.icon}</ListItemIcon>
      <ListItemIcon>{page.name}</ListItemIcon>
    </CustomLink>
  )
}

export default CustomItemLink
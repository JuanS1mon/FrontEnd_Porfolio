/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, isTrue, refs } from "/utils/state"
import { CoinsIcon as LucideCoinsIcon, HomeIcon as LucideHomeIcon, LayersIcon as LucideLayersIcon, MailIcon as LucideMailIcon, MenuIcon as LucideMenuIcon, MoonIcon as LucideMoonIcon, SmileIcon as LucideSmileIcon, SunIcon as LucideSunIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Box as RadixThemesBox, Button as RadixThemesButton, Code as RadixThemesCode, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Text as RadixThemesText } from "@radix-ui/themes"
import NextLink from "next/link"
import NextHead from "next/head"



const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Toaster_6e90e5e87a1cac8c96c683214079bef3 () {
  const { resolvedColorMode } = useContext(ColorModeContext)


  refs['__toast'] = toast
  const [addEvents, connectErrors] = useContext(EventLoopContext);
  
const toast_props = {"description": `Check if server is reachable at ${getBackendURL(env.EVENT).href}`, "closeButton": true, "duration": 120000, "id": "websocket-error"};
const [userDismissed, setUserDismissed] = useState(false);
useEffect(() => {
    if (connectErrors.length >= 2) {
        if (!userDismissed) {
            toast.error(
                `Cannot connect to server: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}.`,
                {...toast_props, onDismiss: () => setUserDismissed(true)},
            )
        }
    } else {
        toast.dismiss("websocket-error");
        setUserDismissed(false);  // after reconnection reset dismissed state
    }
}, [connectErrors]);

  return (
    <Toaster closeButton={false} expand={true} position={`bottom-right`} richColors={true} theme={resolvedColorMode}/>
  )
}

export function Iconbutton_126c1207e75571062288a84458b7ab68 () {
  const { toggleColorMode } = useContext(ColorModeContext)
  const [addEvents, connectErrors] = useContext(EventLoopContext);

  const on_click_9922dd3e837b9e087c86a2522c2c93f8 = useCallback(toggleColorMode, [addEvents, Event, toggleColorMode])


  return (
    <RadixThemesIconButton css={{"padding": "6px", "position": "fixed", "top": "2rem", "right": "2rem", "background": "transparent", "color": "inherit", "zIndex": "20", "&:hover": {"cursor": "pointer"}}} onClick={on_click_9922dd3e837b9e087c86a2522c2c93f8}>
  <Fragment_2e0e6a4a3aec4136eedf42fc142b7aae/>
</RadixThemesIconButton>
  )
}

export function Fragment_2e0e6a4a3aec4136eedf42fc142b7aae () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <Fragment>
  {isTrue(((resolvedColorMode) === (`light`))) ? (
  <Fragment>
  <LucideSunIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
) : (
  <Fragment>
  <LucideMoonIcon css={{"color": "var(--current-color)"}}/>
</Fragment>
)}
</Fragment>
  )
}

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Fragment_cf53a535ae2e610a113dd361eb6ac95b () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <Fragment>
  {isTrue(connectErrors.length > 0) ? (
  <Fragment>
  <LucideWifiOffIcon css={{"color": "crimson", "zIndex": 9999, "position": "fixed", "bottom": "33px", "right": "33px", "animation": `${pulse} 1s infinite`}} size={32}/>
</Fragment>
) : (
  <Fragment/>
)}
</Fragment>
  )
}

export function Link_7d0bb5237df999b20f279635c15c7e4d () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://reflex.dev/docs/getting-started/introduction/`} passHref={true}>
  <RadixThemesButton>
  {`Check out our docs!`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}

export default function Component() {

  return (
    <Fragment>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_6e90e5e87a1cac8c96c683214079bef3/>
</Fragment>
  <RadixThemesContainer css={{"padding": "16px"}} size={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <Iconbutton_126c1207e75571062288a84458b7ab68/>
  <RadixThemesBox css={{"background": "var(--accent-3)", "padding": "1em", "width": "100%"}}>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <img css={{"width": "2.25em", "height": "auto", "borderRadius": "25%"}} src={`/logo.jpg`}/>
  <RadixThemesHeading size={`7`} weight={`bold`}>
  {`Reflex`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`6`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideHomeIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`inicio`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideSmileIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`quien soy`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideMailIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Contact`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideLayersIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Proyectos`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesFlex>
</RadixThemesBox>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "block"}, "@media screen and (min-width: 30em)": {"display": "block"}, "@media screen and (min-width: 48em)": {"display": "block"}, "@media screen and (min-width: 62em)": {"display": "none"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} justify={`between`} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <img css={{"width": "2em", "height": "auto", "borderRadius": "25%"}} src={`/logo.jpg`}/>
  <RadixThemesHeading size={`6`} weight={`bold`}>
  {`Reflex`}
</RadixThemesHeading>
</RadixThemesFlex>
  <RadixThemesDropdownMenu.Root css={{"justify": "end"}}>
  <RadixThemesDropdownMenu.Trigger>
  <LucideMenuIcon css={{"color": "var(--current-color)"}} size={30}/>
</RadixThemesDropdownMenu.Trigger>
  <RadixThemesDropdownMenu.Content>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideHomeIcon css={{"color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`} size={`3`} weight={`medium`}>
  {`Home`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideCoinsIcon css={{"color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`} size={`3`} weight={`medium`}>
  {`Pricing`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideMailIcon css={{"color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`} size={`3`} weight={`medium`}>
  {`Contact`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideLayersIcon css={{"color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`} size={`3`} weight={`medium`}>
  {`Services`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
</RadixThemesDropdownMenu.Content>
</RadixThemesDropdownMenu.Root>
</RadixThemesFlex>
</RadixThemesBox>
</RadixThemesBox>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"minHeight": "85vh"}} direction={`column`} justify={`center`} gap={`5`}>
  <RadixThemesHeading size={`9`}>
  {`Desarrollador Backend en Python`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} size={`5`}>
  {`Soy analista de sistemas y programador. Actualmente, me estoy enfocando en Python para desarrollar tanto el backend como el frontend, con un enfoque especial en la creación de APIs para el análisis de sistemas y datos. Además, he trabajado con Visual Basic y tengo conocimientos avanzados de SQL y modelado de bases de datos `}
  <RadixThemesCode>
  {`FrontEnd/FrontEnd.py`}
</RadixThemesCode>
</RadixThemesText>
  <Link_7d0bb5237df999b20f279635c15c7e4d/>
</RadixThemesFlex>
</RadixThemesContainer>
  <NextHead>
  <title>
  {`Frontend | Index`}
</title>
  <meta content={`favicon.ico`} property={`og:image`}/>
</NextHead>
</Fragment>
  )
}

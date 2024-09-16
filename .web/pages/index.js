/** @jsxImportSource @emotion/react */


import { Fragment, useCallback, useContext, useEffect, useRef, useState } from "react"
import { ColorModeContext, EventLoopContext } from "/utils/context"
import { Event, getBackendURL, getRefValue, getRefValues, isTrue, refs } from "/utils/state"
import { ArrowUpFromLineIcon as LucideArrowUpFromLineIcon, LayersIcon as LucideLayersIcon, MailIcon as LucideMailIcon, MailPlusIcon as LucideMailPlusIcon, MenuIcon as LucideMenuIcon, MoonIcon as LucideMoonIcon, SmileIcon as LucideSmileIcon, SunIcon as LucideSunIcon, WifiOffIcon as LucideWifiOffIcon } from "lucide-react"
import { keyframes } from "@emotion/react"
import { toast, Toaster } from "sonner"
import env from "/env.json"
import { Avatar as RadixThemesAvatar, Badge as RadixThemesBadge, Box as RadixThemesBox, Button as RadixThemesButton, Card as RadixThemesCard, Container as RadixThemesContainer, DropdownMenu as RadixThemesDropdownMenu, Flex as RadixThemesFlex, Heading as RadixThemesHeading, IconButton as RadixThemesIconButton, Link as RadixThemesLink, Text as RadixThemesText, TextArea as RadixThemesTextArea, TextField as RadixThemesTextField } from "@radix-ui/themes"
import NextLink from "next/link"
import { PrismAsyncLight as SyntaxHighlighter } from "react-syntax-highlighter"
import oneLight from "react-syntax-highlighter/dist/cjs/styles/prism/one-light"
import oneDark from "react-syntax-highlighter/dist/cjs/styles/prism/one-dark"
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python"
import { Control as RadixFormControl, Field as RadixFormField, Label as RadixFormLabel, Root as RadixFormRoot, Submit as RadixFormSubmit } from "@radix-ui/react-form"
import NextHead from "next/head"



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

export function Link_f1af73235861d48dfd55b4475d3e158e () {



  return (
    <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}} target={isTrue(true) ? `_blank` : ``}>
  <NextLink href={`https://github.com/JuanS1mon`} passHref={true}>
  <RadixThemesButton>
  {`Revisar mi Git!`}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
  )
}
SyntaxHighlighter.registerLanguage('python', python)

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

export function Div_ac2a89ea84667d600a059f034bd91dfe () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);



  return (
    <div css={{"position": "fixed", "width": "100vw", "height": "0"}} title={`Connection Error: ${(connectErrors.length > 0) ? connectErrors[connectErrors.length - 1].message : ''}`}>
  <Fragment_cf53a535ae2e610a113dd361eb6ac95b/>
</div>
  )
}

export function Root_5d639a3b2fc627d8b3c4a41dcbb66874 () {
  const [addEvents, connectErrors] = useContext(EventLoopContext);


  
    const handleSubmit_b5fc70df32ee237e6e8f31dcf22b83d1 = useCallback((ev) => {
        const $form = ev.target
        ev.preventDefault()
        const form_data = {...Object.fromEntries(new FormData($form).entries()), ...{}}

        addEvents([Event("_alert", {message:JSON.stringify(form_data)})])

        if (false) {
            $form.reset()
        }
    })
    

  return (
    <RadixFormRoot className={`Root `} css={{"width": "100%"}} onSubmit={handleSubmit_b5fc70df32ee237e6e8f31dcf22b83d1}>
  <RadixThemesFlex css={{"width": "100%"}} direction={`column`} gap={`2`}>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "@media screen and (min-width: 48em)": {"flexDirection": "row"}}} gap={`3`}>
  <RadixFormField className={`Field `} css={{"display": "grid", "marginBottom": "10px", "width": "100%"}} name={`first_name`}>
  <RadixThemesFlex direction={`column`} gap={`1`}>
  <RadixFormLabel className={`Label `} css={{"fontSize": "15px", "fontWeight": "500", "lineHeight": "35px"}}>
  {`First Name`}
</RadixFormLabel>
  <RadixFormControl asChild={true} className={`Control `}>
  <RadixThemesTextField.Root placeholder={`First Name`} type={`text`}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
  <RadixFormField className={`Field `} css={{"display": "grid", "marginBottom": "10px", "width": "100%"}} name={`last_name`}>
  <RadixThemesFlex direction={`column`} gap={`1`}>
  <RadixFormLabel className={`Label `} css={{"fontSize": "15px", "fontWeight": "500", "lineHeight": "35px"}}>
  {`Last Name`}
</RadixFormLabel>
  <RadixFormControl asChild={true} className={`Control `}>
  <RadixThemesTextField.Root placeholder={`Last Name`} type={`text`}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
</RadixThemesFlex>
  <RadixThemesFlex css={{"@media screen and (min-width: 0)": {"flexDirection": "column"}, "@media screen and (min-width: 30em)": {"flexDirection": "row"}, "@media screen and (min-width: 48em)": {"flexDirection": "row"}}} gap={`3`}>
  <RadixFormField className={`Field `} css={{"display": "grid", "marginBottom": "10px", "width": "100%"}} name={`email`}>
  <RadixThemesFlex direction={`column`} gap={`1`}>
  <RadixFormLabel className={`Label `} css={{"fontSize": "15px", "fontWeight": "500", "lineHeight": "35px"}}>
  {`Email`}
</RadixFormLabel>
  <RadixFormControl asChild={true} className={`Control `}>
  <RadixThemesTextField.Root placeholder={`user@reflex.dev`} type={`email`}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
  <RadixFormField className={`Field `} css={{"display": "grid", "marginBottom": "10px", "width": "100%"}} name={`phone`}>
  <RadixThemesFlex direction={`column`} gap={`1`}>
  <RadixFormLabel className={`Label `} css={{"fontSize": "15px", "fontWeight": "500", "lineHeight": "35px"}}>
  {`Phone`}
</RadixFormLabel>
  <RadixFormControl asChild={true} className={`Control `}>
  <RadixThemesTextField.Root placeholder={`Phone`} type={`tel`}/>
</RadixFormControl>
</RadixThemesFlex>
</RadixFormField>
</RadixThemesFlex>
  <RadixThemesFlex direction={`column`} gap={`1`}>
  <RadixThemesText as={`p`} css={{"font-size": "15px", "font-weight": "500", "line-height": "35px"}}>
  {`Message`}
</RadixThemesText>
  <RadixThemesTextArea name={`message`} placeholder={`Message`} resize={`vertical`}/>
</RadixThemesFlex>
  <RadixFormSubmit asChild={true} className={`Submit `}>
  <RadixThemesButton>
  {`Submit`}
</RadixThemesButton>
</RadixFormSubmit>
</RadixThemesFlex>
</RadixFormRoot>
  )
}

const pulse = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`


export function Prismasynclight_047286501572b30abd95febe06e81526 () {
  const { resolvedColorMode } = useContext(ColorModeContext)



  return (
    <SyntaxHighlighter language={`python`} showLineNumbers={true} style={isTrue(((resolvedColorMode) === (`light`))) ? oneLight : oneDark} children={`def fib(n):
    if n <= 1:
        return n
    else:
        return(fib(n-1) + fib(n-2))`}/>
  )
}

export default function Component() {
  const ref_navbar = useRef(null); refs['ref_navbar'] = ref_navbar;
  const ref_quien_soy = useRef(null); refs['ref_quien_soy'] = ref_quien_soy;
  const ref_proyectos = useRef(null); refs['ref_proyectos'] = ref_proyectos;
  const ref_contacto = useRef(null); refs['ref_contacto'] = ref_contacto;

  return (
    <Fragment>
  <Fragment>
  <Div_ac2a89ea84667d600a059f034bd91dfe/>
  <Toaster_6e90e5e87a1cac8c96c683214079bef3/>
</Fragment>
  <RadixThemesContainer css={{"padding": "16px"}} size={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`5`}>
  <RadixThemesBox css={{"background": "var(--accent-3)", "padding": "1em", "width": "100%"}}>
  <RadixThemesBox css={{"@media screen and (min-width: 0)": {"display": "none"}, "@media screen and (min-width: 30em)": {"display": "none"}, "@media screen and (min-width: 48em)": {"display": "none"}, "@media screen and (min-width: 62em)": {"display": "block"}}}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} id={`navbar`} justify={`between`} ref={ref_navbar} gap={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"alignItems": "center"}} direction={`row`} gap={`3`}>
  <RadixThemesAvatar color={`cyan`} fallback={`Juan Simon`} radius={`large`} size={`4`}/>
</RadixThemesFlex>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`6`}>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#quien soy`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideSmileIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`quien soy`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#proyectos`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideLayersIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Proyectos`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#contacto`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideMailIcon css={{"color": "var(--current-color)"}}/>
  <RadixThemesText as={`p`} size={`4`} weight={`medium`}>
  {`Contacto`}
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
  <NextLink href={`/#quien soy`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideSmileIcon css={{"color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`} size={`3`} weight={`medium`}>
  {`quien soy`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#proyectos`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideLayersIcon css={{"color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`} size={`3`} weight={`medium`}>
  {`Proyectos`}
</RadixThemesText>
</RadixThemesFlex>
</NextLink>
</RadixThemesLink>
  <RadixThemesLink asChild={true} css={{"&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`/#contacto`} passHref={true}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} direction={`row`} gap={`3`}>
  <LucideMailIcon css={{"color": "var(--current-color)"}} size={16}/>
  <RadixThemesText as={`p`} size={`3`} weight={`medium`}>
  {`Contacto`}
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
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <Iconbutton_126c1207e75571062288a84458b7ab68/>
  <RadixThemesBox>
  <RadixThemesContainer css={{"padding": "16px"}} size={`3`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"minHeight": "85vh", "zIndex": "9999999"}} direction={`column`} justify={`center`} gap={`5`}>
  <RadixThemesHeading as={`h1`} id={`quien soy`} ref={ref_quien_soy} size={`9`}>
  {`Desarrollador Backend en Python`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} size={`5`}>
  {`Soy analista de sistemas y desarrollador backend, con especialización en Python, SQL, FastAPI y Docker. Me enfoco en la creación de APIs y el análisis de datos, con un fuerte énfasis en el desarrollo de sistemas escalables y optimización de bases de datos.

He trabajado en proyectos de análisis de ventas mensuales para el sector freelance, desarrollando soluciones web para pequeños emprendimientos. Mi preferencia es trabajar con tecnologías actuales, y aunque mi enfoque principal es el backend, también desarrollo frontend para visualizar los datos, ya que considero que ambas áreas deben complementarse.

Uno de mis proyectos favoritos es un dashboard que he desarrollado para facilitar la creación rápida de APIs, el cual sigo mejorando y adaptando. También estoy trabajando en varios proyectos desafiantes, como una API que conecta dos sistemas con bases de datos distintas y otra API que integra datos de un sistema con una plataforma e-commerce.

Mi portafolio refleja mi evolución tanto en el backend como en el frontend, y está diseñado para mostrar mis conocimientos en desarrollo web completo.
    
    `}
</RadixThemesText>
  <Prismasynclight_047286501572b30abd95febe06e81526/>
  <Link_f1af73235861d48dfd55b4475d3e158e/>
  <RadixThemesLink asChild={true} css={{"position": "fixed", "bottom": "20px", "right": "20px", "zIndex": "1000", "&:hover": {"color": "var(--accent-8)"}}}>
  <NextLink href={`#navbar`} passHref={true}>
  <RadixThemesButton color={`cyan`} radius={`full`} size={`1`} variant={`surface`}>
  <LucideArrowUpFromLineIcon css={{"color": "var(--current-color)"}}/>
  {``}
</RadixThemesButton>
</NextLink>
</RadixThemesLink>
</RadixThemesFlex>
</RadixThemesContainer>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesCard id={`proyectos`} ref={ref_proyectos}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"minHeight": "85vh"}} direction={`column`} justify={`center`} gap={`5`}>
  <RadixThemesHeading size={`9`}>
  {`Ejemplos de Proyectos`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} size={`5`}>
  {`Aquí hay algunos ejemplos de los servicios que ofrezco:`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`}>
  {`- Desarrollo de APIs en Python`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`}>
  {`- Análisis de sistemas y datos`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`}>
  {`- Modelado de bases de datos`}
</RadixThemesText>
  <RadixThemesText as={`p`} size={`5`}>
  {`- Desarrollo de aplicaciones backend y frontend`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesCard>
  <RadixThemesCard id={`contacto`} ref={ref_contacto}>
  <RadixThemesHeading as={`h2`} size={`8`}>
  {`Contacto`}
</RadixThemesHeading>
  <RadixThemesFlex css={{"flex": 1, "justifySelf": "stretch", "alignSelf": "stretch"}}/>
  <RadixThemesCard size={`3`}>
  <RadixThemesFlex css={{"width": "100%"}} direction={`column`} gap={`4`}>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"height": "100%", "alignItems": "center", "width": "100%"}} direction={`row`} gap={`4`}>
  <RadixThemesBadge color={`blue`} css={{"padding": "0.65rem"}} radius={`full`}>
  <LucideMailPlusIcon css={{"color": "var(--current-color)"}} size={32}/>
</RadixThemesBadge>
  <RadixThemesFlex align={`start`} className={`rx-Stack`} css={{"height": "100%"}} direction={`column`} gap={`1`}>
  <RadixThemesHeading size={`4`} weight={`bold`}>
  {`Send us a message`}
</RadixThemesHeading>
  <RadixThemesText as={`p`} size={`2`}>
  {`Fill the form to contact us`}
</RadixThemesText>
</RadixThemesFlex>
</RadixThemesFlex>
  <Root_5d639a3b2fc627d8b3c4a41dcbb66874/>
</RadixThemesFlex>
</RadixThemesCard>
</RadixThemesCard>
</RadixThemesBox>
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

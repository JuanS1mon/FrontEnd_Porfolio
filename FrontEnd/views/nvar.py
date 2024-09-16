import reflex as rx 

def navbar_icons_item(
    text: str, icon: str, url: str
) -> rx.Component:
    return rx.link(
        rx.hstack(
            rx.icon(icon),
            rx.text(text, size="4", weight="medium"),
        ),
        href=url,
    )


def navbar_icons_menu_item(
    text: str, icon: str, url: str
) -> rx.Component:
    return rx.link(
        rx.hstack(
            rx.icon(icon, size=16),
            rx.text(text, size="3", weight="medium"),
        ),
        href=url,
    )


def navbar_icons() -> rx.Component:
    return rx.box(
        rx.desktop_only(
            rx.hstack(
                rx.hstack(
                    rx.avatar(fallback="Juan Simon", color_scheme="cyan",size="4",radius ="large"),
                   
                    #rx.heading("", size="7", weight="bold"),, 
                    align_items="center",
                ),
                rx.hstack(
                    navbar_icons_item("quien soy", "smile", "/#quien soy"),
                    navbar_icons_item("Proyectos", "layers", "/#proyectos"),
                    navbar_icons_item("Contacto", "mail", "/#contacto"),
                    
                    spacing="6",
                ),
                justify="between",
                align_items="center",
                id="navbar",
            ),
        ),
        rx.mobile_and_tablet(
            rx.hstack(
                rx.hstack(
                    rx.image(
                        src="/logo.jpg",
                        width="2em",
                        height="auto",
                        border_radius="25%",
                    ),
                    rx.heading(
                        "Reflex", size="6", weight="bold"
                    ),
                    align_items="center",
                ),
                rx.menu.root(
                    rx.menu.trigger(
                        rx.icon("menu", size=30)
                    ),
                    rx.menu.content(
                        navbar_icons_menu_item("quien soy", "smile", "/#quien soy"),
                        navbar_icons_menu_item("Proyectos", "layers", "/#proyectos"),
                        navbar_icons_menu_item("Contacto", "mail", "/#contacto"),
                        
                    ),
                    justify="end",
                ),
                justify="between",
                align_items="center",
            ),
        ),
        bg=rx.color("accent", 3),
        padding="1em",
        # position="fixed",
        # top="0px",
        # z_index="5",
        width="100%",
    )
"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from FrontEnd.views import nvar

from rxconfig import config


class State(rx.State):
    """The app state."""

    ...


def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.container(
        rx.hstack(
            rx.color_mode.button(position="top-right"),
            nvar.navbar_icons(),
        ),
        rx.vstack(

            rx.heading("Desarrollador Backend en Python", size="9"),
            rx.text(
                "Soy analista de sistemas y programador. Actualmente, me estoy enfocando en Python para desarrollar tanto el backend como el frontend, con un enfoque especial en la creación de APIs para el análisis de sistemas y datos. Además, he trabajado con Visual Basic y tengo conocimientos avanzados de SQL y modelado de bases de datos ",
                rx.code(f"{config.app_name}/{config.app_name}.py"),
                size="5",
            ),
            rx.link(
                rx.button("Check out our docs!"),
                href="https://reflex.dev/docs/getting-started/introduction/",
                is_external=True,
            ),
            spacing="5",
            justify="center",
            min_height="85vh",
        ),
    )
app = rx.App()
app.add_page(index)

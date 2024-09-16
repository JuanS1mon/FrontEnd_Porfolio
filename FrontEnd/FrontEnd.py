"""Welcome to Reflex! This file outlines the steps to create a basic app."""

import reflex as rx
from FrontEnd.views import nvar,contenido

from rxconfig import config


class State(rx.State):
    """The app state."""

    ...


def index() -> rx.Component:
    # Welcome Page (Index)
    return rx.container(
        rx.hstack(
            nvar.navbar_icons(),

            spacing="5",),
            rx.spacer(),
            rx.color_mode.button(position="top-right"),
            contenido.principal(),
    )
app = rx.App()
app.add_page(index)

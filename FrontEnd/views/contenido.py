import reflex as rx
from FrontEnd.components import formulario_mensaje,texto

def principal() -> rx.Component:
    return rx.box(
        rx.container(
            rx.vstack(
                rx.heading("Desarrollador Backend en Python", size="9", as_="h1", id="quien soy"),
                texto.text_presentacion(),
                rx.code_block(
    """def fib(n):
    if n <= 1:
        return n
    else:
        return(fib(n-1) + fib(n-2))""",
    language="python",
    show_line_numbers=True,
),
                rx.link(
                    rx.button("Revisar mi Git!"),
                    href="https://github.com/JuanS1mon",  # Asegúrate de actualizar el enlace con tu URL de GitHub
                    is_external=True,
                ),
                    rx.link( 
                        rx.button(rx.icon(tag="arrow-up-from-line"),"",color_scheme="cyan",size="1",variant="surface",radius="full"),
                        href="#navbar", 
                    style={"position": "fixed", "bottom": "20px", "right": "20px", "z_index": "1000"}
                ),
             
                spacing="5",
                justify="center",
                min_height="85vh",
                z_index="9999999"
            )
        ),
        rx.spacer(),
            rx.card(
                rx.vstack(
                    rx.heading("Ejemplos de Proyectos", size="9"),
                    rx.text("Aquí hay algunos ejemplos de los servicios que ofrezco:", size="5"),
                    rx.text("- Desarrollo de APIs en Python", size="5"),
                    rx.text("- Análisis de sistemas y datos", size="5"),
                    rx.text("- Modelado de bases de datos", size="5"),
                    rx.text("- Desarrollo de aplicaciones backend y frontend", size="5"),
                    spacing="5",
                    justify="center",
                    min_height="85vh"
                ),
                id="proyectos"
            ),  
         rx.card(
                rx.heading("Contacto", size="8", as_="h2"),
                rx.spacer(),
                formulario_mensaje.contact_form(),
                id="contacto"
            ),
    )
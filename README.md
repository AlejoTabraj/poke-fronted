# Proyecto Vue 3 con TypeScript, Pinia y Tailwind

Este proyecto está desarrollado con **Vue 3** y **TypeScript**, utilizando principalmente la **Composition API** en lugar de la Option API. Decidí emplear la Composition API porque me permite organizar mejor el código y reutilizar la lógica de manera más eficiente, lo que es especialmente útil en aplicaciones de gran tamaño y con lógica compleja.

## Arquitectura

### Domain-Driven Design (DDD) sobre MVVM

Opté por utilizar **Domain-Driven Design (DDD)** en lugar del enfoque **Model-View-ViewModel (MVVM)** que Vue sugiere por defecto. La razón principal es que DDD me permite identificar y trabajar de manera más clara con entidades complejas dentro del dominio, separando las responsabilidades de una forma que hace que la aplicación sea más:

- **Escalable**: Es mucho más fácil de ampliar conforme crece el proyecto sin que el código se vuelva inmanejable.
- **Mantenible**: La separación de la lógica de negocio de la lógica de la UI es más clara, lo que facilita la modificación de una sin afectar la otra.
- **Comprensible**: La estructura del proyecto es más lógica y está mejor organizada, lo que ayuda a que sea fácil de entender, incluso para nuevos desarrolladores que se unan al equipo.

En comparación, MVVM es adecuado para proyectos más pequeños, pero puede volverse confuso y difícil de mantener a medida que la complejidad de la aplicación aumenta.

### Manejo del estado con Pinia

Para gestionar el estado global de la aplicación, decidí utilizar **Pinia** en lugar de Vuex. Esta decisión se basa en varios beneficios que Pinia ofrece:

- **Simplicidad**: Pinia tiene una API mucho más intuitiva, lo que reduce la cantidad de configuración necesaria y facilita el uso.
- **Compatibilidad con TypeScript**: Pinia está optimizado para trabajar con TypeScript, lo que mejora el tipado y la autocompletación en los editores, minimizando errores.
- **Modularidad**: Pinia permite dividir el estado en stores modulares, lo que hace que el código sea más organizado y fácil de escalar.

### Atomic Design para los componentes

Para la organización de los componentes, decidí usar **Atomic Design**, una metodología que me permite:

- **Mejorar la comunicación vertical**: La jerarquía de componentes (átomos, moléculas, organismos, etc.) facilita la transmisión de datos sin tener que recurrir a patrones complicados como prop drilling.
- **Reutilización**: Cada componente es reutilizable y modular, lo que ayuda a reducir la duplicación de código.
- **Simplificación**: Al separar los componentes en piezas más pequeñas y manejables, es más fácil mantener y extender el código.

Además, el uso de **Pinia** para la gestión del estado ayuda a evitar una sobrecarga de estructuras y facilita la comunicación entre los diferentes niveles de componentes.

## Tecnologías utilizadas

- **Vue 3**: El framework principal para la construcción de la interfaz de usuario.
- **Pinia**: Para la gestión del estado global de la aplicación.
- **Tailwind CSS**: Utilizo este framework CSS para crear estilos rápidos y consistentes, lo que agiliza el desarrollo y mantiene una estética uniforme en toda la aplicación.

## Beneficios de estas decisiones

- **Escalabilidad y mantenibilidad**: La elección de DDD y Atomic Design asegura que el código pueda crecer sin volverse inmanejable.
- **Gestión de estado sencilla**: Pinia facilita la modularización y mejora la integración con TypeScript.
- **Modularidad**: Atomic Design asegura componentes reutilizables y organizados de manera lógica.

Todas estas decisiones están orientadas a construir una aplicación robusta, escalable y fácil de mantener, preparada para adaptarse a futuras necesidades del proyecto.

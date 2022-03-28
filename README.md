# Pokedex Challenge

### Setup del proyecto:

Una vez clonado el proyecto correr los siguientes comandos.

```bash
npm install
npm start
```

### Setup del proyecto:

Una vez clonado el proyecto correr los siguientes comandos.

```bash
npm install
npm start
```

### Test del proyecto:

Se puede ejecutar todos a la vez o de a uno.

```bash
npm test
```

```bash
npm test PokemonList
```

### Tecnologias

---

- Entorno de ejecucion:
  - Node:
- Lenguaje:
  - Typescript
- Frameworks:
  - React
  - Styled-components
- Herramientas:
  - Babel
  - TS-Jest

Url de acceso http://localhost:3000/

### Estructura de proyecto:

- Assets: Esta es la carpeta donde se situan los recursos de la aplicacion, como los iconos, los estilos y los datos para testing.
- Components: En esta carpeta se situan los componentes de la aplicacion.
- Config: En esta carpeta se situan las configuraciones tanto de la aplicacion en si, como el lenguaje de la aplicacion.
- Core: Es la carpeta donde se concentra el nucleo de la aplicacion, en resumidas palabras, la logica de negocios y los servicios que consume la aplicacion.
- HOC: En esta carpeta se situan los componentes de alto orden, osea los componentes que modifican el comportamiento global de la aplicacion.
- Pages: En esta carpeta se situan las paginas de la aplicacion, por modulo.
- Utils: En esta carpeta se encuentran las utilidades globales, osea funciones que se usan en muchos lugares de la aplicacion y por lo general suelen ser algo "desprolijas".
- View: En esta carpeta se encuentra el archivo view, que es el que se encarga de ensamblar toda la vista de la aplicacion.

### Estructura de componentes:

- Nombre de componente.ts: Este es el archivo que se encarga de renderizar la vista del componente.
- nombre de componente.styled.ts: En este archivo se encuentran los componentes estilizados que utiliza nuestro componente.
- nombre de component.test.ts: En este archivo se encuentran los tests del componente.
- Config.ts: En este archivo se encuentran configuraciones del componente o de los componentes reutilizables que se utilizan en el mismo, como pueden ser una Tabla o Botones.
- Utils.ts: En este archivo se situan utilidades/funciones que son necesarias pero pueden ser algo desprolijas y pueden ensuciar el codigo del componente.
- Data.ts: En este archivo se situa los datos que van a ser utilizados en testing.

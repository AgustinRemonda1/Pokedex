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
npm run test:jest
```

```bash
npm run test:jest PokemonList
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
  - Webpack
  - Babel
  - Jest
  - Enzyme

Url de acceso http://localhost:3000/

### Estructura de proyecto:

- Assets: Esta es la carpeta donde se situan los iconos y tambien los datos de testing de la aplicacion.
- Components: En esta carpeta se situan los componentes de la aplicacion.
- Config: En esta carpeta se situan las configuraciones tanto de la aplicacion en si, como el lenguaje de la aplicacion.
- Enzyme: En esta carpeta se situa el adaptador de Enzyme para poder usarse en los test, junto con Jest.
- HOC: En esta carpeta se situan los componentes de alto orden, osea los componentes que modifican el comportamiento global de la aplicacion.
- Interfaces: En esta carpeta se situan las interfaces de la aplicacion.
- Services: En esta carpeta se encuentra el servicio de PokeApi.
- Styles: En esta carpeta se situa tanto el estilo base de la aplicacion como los colores de la misma.
- Utils: En esta carpeta se encuentran las utilidades globales, osea funciones que se usan en muchos lugares de la aplicacion y por lo general suelen ser algo "desprolijas".
- View: En esta carpeta se encuentra el archivo view, que es el que se encarga de ensamblar toda la vista de la aplicacion.

### Estructura de componentes:

Si bien hay dos tipos de componentes, los componentes compartidos y los componentes que son una vista como PokemonList y PokemonDetails, los componentes suelen tener la siguiente estructura.

- .component: Este es el archivo donde radica la funcionalidad del componente.
- .content: Este es el archivo que se encarga de renderizar la vista del componente.
- .config: En este archivo se encuentran configuraciones del componente o de los componentes reutilizables que se utilizan en el mismo, como pueden ser una Tabla o Botones.
- .interface: En este archivo se encuentran interfaces del componente, tanto de las props que recibe como de los objetos que puede utilizar en el codigo.
- .utils: En este archivo se situan utilidades/funciones que son necesarias pero pueden ser algo desprolijas y pueden ensuciar el codigo del componente.
- .service: En este archivo se situan las funciones que van a llamar a la API.
- .styles: En este archivo se encuentran los componentes estilizados que utiliza nuestro componente.
- .data: En este archivo se situa los datos que van a ser utilizados en testing.
- .test: En este archivo se encuentran los tests del componente.

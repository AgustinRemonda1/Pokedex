# Pokedex Challenge

### Setup del proyecto:

Una vez clonado el proyecto correr los siguientes comandos.

```bash
npm install
cp env.template env.local
npm run dev
```

o ejecutar

```bash
./dev-setup.sh
npm run dev
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
  - next-js
  - React
  - Styled-components
- Herramientas:
  - react-testing-library
  - babel

Url de acceso http://localhost:3000/

### Estructura de proyecto:

- Assets: Esta es la carpeta donde se situan los recursos de la aplicacion, como los iconos, los estilos, el wording de la aplicacion y los datos para testing.
- Components: En esta carpeta se situan los componentes de la aplicacion.
- Core: Es la carpeta donde se concentra el nucleo de la aplicacion, en resumidas palabras, la logica de negocios y los servicios que consume la aplicacion.
- Pages: En esta carpeta se situan las paginas de la aplicacion, por modulo.
- Utils: En esta carpeta se encuentran las utilidades globales, osea funciones que se usan en muchos lugares de la aplicacion y por lo general suelen ser algo "desprolijas".

### Estructura de componentes:

- Nombre de componente.ts: Este es el archivo que se encarga de renderizar la vista del componente.
- nombre de componente.styled.ts: En este archivo se encuentran los componentes estilizados que utiliza nuestro componente.
- nombre de componente.test.ts: En este archivo se encuentran los tests del componente.
- nombre de componente.config.ts: En este archivo se encuentran configuraciones del componente o de los componentes reutilizables que se utilizan en el mismo, como pueden ser una Tabla o Botones.
- nombre de componente.utils.ts: En este archivo se situan utilidades/funciones que son necesarias pero pueden ser algo desprolijas y pueden ensuciar el codigo del componente.
- nombre de componente.data.ts: En este archivo se situa los datos que van a ser utilizados en testing.

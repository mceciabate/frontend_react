const state ={
    datosPersonales:{
        nombre: "Cecilia",
        apellido:"Abate",
        edad: 34,
        nacionalidad: "arg",
        residencia: "arg",
        ocupacion: "estudiante",
        avatar: "https://sp.depositphotos.com/vector-images/chica-avatar.html"
    },
        experiencia: [
            {id: 1, peli:"una"},
            {id: 2, peli:"dos"},
        ],

        educacion: [
            {id: 1, instituto: "bla bla"},
            {id: 2, instituto: "bla bla"},

        ],

        bio: "no se que",
}

const Header = ()=>{
    return(
        <header style={{width: "100%", height: "30px"}}>
            <nav style={{width:"100%"}}>
                <ul style= {{display: "flex", justifyContent: "space-evenly", listStyle: "none"}}>
                    <li>Home</li>
                    <li>About</li>
                    <li>experiencia</li>
                    <li>pelis</li>

                </ul>
            </nav>

        </header>
    )
};

const Info =({nombre, nacionalidad, edad, ocupacion, avatar}) =>{
    return(
        <main>
            <section>
                <h1>Nombre: {nombre}</h1>
                <p>Nacionalidad: {nacionalidad}</p>
                <p>Edad: {edad}</p>
                <p>Ocupacion: {ocupacion}</p>
            </section>
            <section style={{width: "300px"}}>
                <img style={{ width: "160px", height: "160px"}}
                    src={avatar} alt="profile picture"/></section>
        </main>
    )
}

const Education = ({instituto})=>{
    return(
        <li>{instituto}</li>
    )
}

const {educacion} = state;

const App =(
    <div>
        <Header/>
        <Info 
        nombre={state.datosPersonales.nombre}
        nacionalidad={state.datosPersonales.nacionalidad}
        edad={state.datosPersonales.edad}
        ocupacion={state.datosPersonales.occupation}
        avatar={state.datosPersonales.avatar}/>
    <ul>
        {
            educacion.map(item=>
                <Education
                key={item.id}
                instituto={item.instituto}/>)
        }
    </ul>
    </div>
);

const htmlElement = document.getElementById("root");
ReactDOM.render(App, htmlElement)


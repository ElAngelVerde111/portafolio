const terminal = document.getElementById("terminal");
const input = document.getElementById("input");
const portfolioWindow = document.getElementById("portfolioWindow");
const detailWindow = document.getElementById("detailWindow");

// Datos de proyectos para ventana detalle
const projectDetails = {
    fin: {
    title: "F.I.N - Página Web",
    description: "Página web para el colectivo F.I.N. con diseño minimalista y estilo clandestino. Se puede encontrar la version 1.0 en https://fin-noreste.org/. Es una practica de programación ocultista y experimental. Utilizando numeros cuanticos, algoritmos de inteligencia articial y Mind Oriented Randomness. Programado en Vue.js, Flask y Python.",
    images: [
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/fin/one.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/fin/two.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/fin/three.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/fin/four.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/fin/five.PNG?raw=true"
    ]
    },
    sicariato: {
    title: "Librería Sicariato",
    description: "Marketplace alternativo para beats, trabajos, merch y productos digitales. Tomando inspiracion de la cultura del clandestina de market sites de drogras, y el trap. Con un enfoque en la privacidad y la descentralización. Aun en desarrollo, pero con una base sólida. Utilizando Flask, Python y Jinja2.",
    images: [
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/sicariato/one.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/sicariato/two.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/sicariato/three.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/sicariato/four.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/sicariato/five.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/sicariato/six.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/sicariato/seven.PNG?raw=true"
    ]
    },
    alejo: {
    title: "Bleogo",
    description: "Proyecto personal de seguridad informatica. Herramienta de análisis de seguridad y pruebas de penetración. Utilizando técnicas avanzadas de hacking ético y análisis de OSINT.",
    images: [
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/bleogo/one.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/bleogo/two.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/bleogo/three.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/bleogo/four.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/bleogo/five.PNG?raw=true"
    ]
    },
    intumind: {
    title: "Intu-mind",
    description: "Aplicación web para visualización y análisis de datos cognitivos con interfaz innovadora. Hecho cuando tenia 12 años.",
    images: [
        "https://intumind.github.io/favicon.ico",
        "https://intumind.github.io/favicon.ico"
    ]
    },
    finex: {
    title: "FINEX",
    description: "FINEX es un CLI privado del colectivo F.I.N. que permite interactuar con la plataforma web de forma segura y privada. Permite subir albumes, archivos, articulos y tiene una IA personalizada apodada el 9:9. Utiliza técnicas avanzadas de ofuscación y cifrado para proteger la información del usuario.",
    images: [
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/one.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/two.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/three.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/four.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/five.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/six.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/seven.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/eight.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/findex/nine.PNG?raw=true"
    ]
    },
    burst: {
    title: "BURST.gg",
    description: "Burst.gg era una herramienta de análisis y coaching para jugadores de League of Legends. Permitía analizar partidas, mejorar habilidades y recibir recomendaciones personalizadas. Aunque el proyecto fue cerrado, dejó un legado en la comunidad de jugadores. Actualmente los servidores fueron apagados, pero el proyecto sigue vivo en GitHub. Programado a los 14 años, es un ejemplo de mi pasión por la programación y los videojuegos.",
    images: [
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/burst/home.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/burst/login.PNG?raw=true",
        "https://github.com/ElAngelVerde111/portafolio/blob/main/PNG/burst/signup.PNG?raw=true"
    ]
    }
};

const commands = {
    help: `
    <pre style="color:#33ff33;">
    > help - Muestra este menú
    > contacto - Datos para comunicarte
    > portafolio - Muestra los proyectos
    > acerca - Aprende más sobre mí
    </pre>
    `,

    contacto: `
    <pre style="color:#33ff33;">
    Email: angelverde@tutamail.com
    Web:<a href="https://fin-noreste.org" target="_blank" style="color:#33ff33;">fin-noreste.org</a>
    GitHub: <a href="https://github.com/ElAngelVerde111" target="_blank" style="color:#33ff33;">ElAngelVerde111</a>
    </pre>
    `,
    paquetes: `
    <b style="color:#33ff33;">💼 Paquetes disponibles:</b><br><br>
    <b>Básico</b>: Sitio estático de 1-2 secciones<br>
    <b>Profesional</b>: Hasta 5 secciones, contacto, portafolio<br>
    <b>Premium</b>: Integración backend, CMS, API, IA personalizada<br><br>
    Solicita más info con: <i>'contacto'</i>
    `,

    portafolio: () => {
        openWindow('portfolioWindow');
        return `
    <b style="color:#00ff00;">Cargando portafolio...</b><br>
    Abriendo ventana de proyectos...
    `;
    },

    acerca: () => {
        openWindow('aboutWindow');
        return `
    Abriendo acerca de...`
    }
};

input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
    const value = input.value.trim();
    const output = document.createElement("div");
    output.textContent = "> " + value;
    terminal.appendChild(output);

    let result;
    if (commands[value]) {
        result = typeof commands[value] === "function" ? commands[value]() : commands[value];
    } else {
        result = "Comando no reconocido. Escribe 'help' para ver opciones.";
    }

    const response = document.createElement("div");
    if (["help", "contacto", "paquetes", "portafolio"].includes(value)) {
        response.innerHTML = result;
    } else {
        response.textContent = result;
    }
    terminal.appendChild(response);
    input.value = "";
    terminal.scrollTop = terminal.scrollHeight;
    }
});

// Abrir ventana por id
function openWindow(id) {
    const win = document.getElementById(id);
    win.style.top = id === 'portfolioWindow' ? "10%" : "15%";
    win.style.left = id === 'portfolioWindow' ? "10%" : "20%";
    win.classList.add("show");
    win.setAttribute("aria-hidden", "false");
    win.focus();
}


function closeWindow(id) {
    const win = document.getElementById(id);
    win.classList.remove("show");
    win.setAttribute("aria-hidden", "true");


    if(id === 'detailWindow') {
        portfolioWindow.focus();
    } else {
        input.focus();
    }
}

function makeDraggable(dragHandleId, windowId) {
    const dragHandle = document.getElementById(dragHandleId);
    const win = document.getElementById(windowId);
    let isDragging = false;
    let offsetX, offsetY;

    dragHandle.addEventListener("mousedown", function(e) {
    isDragging = true;
    const rect = win.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.body.style.userSelect = 'none';
    });

    document.addEventListener("mouseup", function() {
        isDragging = false;
        document.body.style.userSelect = '';
    });

    document.addEventListener("mousemove", function(e) {
    if (isDragging) {
        let newLeft = e.clientX - offsetX;
        let newTop = e.clientY - offsetY;

        const maxLeft = window.innerWidth - win.offsetWidth;
        const maxTop = window.innerHeight - win.offsetHeight;
        if (newLeft < 0) newLeft = 0;
        if (newTop < 0) newTop = 0;
        if (newLeft > maxLeft) newLeft = maxLeft;
        if (newTop > maxTop) newTop = maxTop;

        win.style.left = newLeft + "px";
        win.style.top = newTop + "px";
    }
    });
}
makeDraggable("dragHandleMain", "portfolioWindow");
makeDraggable("dragHandleMain", "aboutWindow");

makeDraggable("dragHandleDetail", "detailWindow");

const projects = document.querySelectorAll(".project");
projects.forEach(proj => {
    proj.addEventListener("dblclick", () => {
    const id = proj.getAttribute("data-id");
    if (!projectDetails[id]) return;
    const detail = projectDetails[id];

    const detailContent = document.getElementById("detailContent");
    detailContent.innerHTML = `
        <h2>${detail.title}</h2>
        <p class="description">${detail.description}</p>
        <div>
        ${detail.images.map(src => `<img src="${src}" alt="${detail.title} screenshot" />`).join('')}
        </div>
    `;
    openWindow('detailWindow');
    });

    proj.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        proj.dispatchEvent(new Event('dblclick'));
    }
    });
});
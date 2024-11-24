/* Reset CSS */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

/* Fuentes y estilos generales */
body {
    font-family: 'Roboto', sans-serif;
    background-color: #f4f4f4;
    color: #333;
}

/* Cabecera */
.header {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    color: white;
    padding: 10px 0;
    z-index: 1000;
}
.header-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}
.header h1 {
    font-family: 'Montserrat', sans-serif;
    font-size: 24px;
}
.header nav ul {
    list-style: none;
    display: flex;
}
.header nav ul li {
    margin-left: 20px;
}
.header nav ul li a {
    color: white;
    text-decoration: none;
    font-size: 18px;
    transition: color 0.3s ease;
}
.header nav ul li a:hover {
    color: #ff6f61;
}

/* Sección Hero */
.hero {
    background: url('background.jpg') no-repeat center center/cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    text-align: center;
    animation: fadeIn 2s ease-in-out;
}
.hero-text h2 {
    font-size: 48px;
    font-family: 'Montserrat', sans-serif;
    margin-bottom: 10px;
}
.hero-text p {
    font-size: 24px;
}

/* Sección de sobre mí */
.about {
    padding: 50px 20px;
    text-align: center;
    background-color: #fff;
}

/* Sección de habilidades */
.skills {
    background: #f9f9f9;
    padding: 50px 20px;
    text-align: center;
}
.skills h2 {
    margin-bottom: 30px;
}
.skills-container {
    display: flex;
    justify-content: center;
    gap: 20px;
}
.skill-card {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease;
}
.skill-card:hover {
    transform: translateY(-10px);
}

/* Sección de proyectos */
.projects {
    padding: 50px 20px;
    text-align: center;
    background-color: #fff;
}
.slider {
    display: flex;
    overflow: hidden;
    gap: 20px;
    justify-content: center;
}
.slider-item {
    flex: 0 0 30%;
    position: relative;
    overflow: hidden;
}
.slider-item img {
    width: 100%;
    border-radius: 8px;
}
.slider-item p {
    position: absolute;
    bottom: 20px;
    left: 20px;
    font-size: 18px;
    color: white;
    text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.7);
}

/* Sección de contacto */
.contact {
    padding: 50px 20px;
    text-align: center;
    background-color: #ff6f61;
    color: white;
}
.contact-btn {
    background-color: #fff;
    color: #ff6f61;
    padding: 15px 30px;
    border-radius: 25px;
    text-decoration: none;
    font-size: 20px;
    font-weight: bold;
    transition: background-color 0.3s ease;
}
.contact-btn:hover {
    background-color: #ff4e41;
}

/* Footer */
footer {
    background-color: #333;
    color: white;
    padding: 20px 0;
    text-align: center;
}
.social-icons a {
    margin: 0 10px;
}
.social-icons img {
    width: 30px;
    transition: transform 0.3s ease;
}
.social-icons img:hover {
    transform: scale(1.2);
}

/* Animaciones */
@keyframes fadeIn {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}

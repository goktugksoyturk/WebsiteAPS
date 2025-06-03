import { useState, useEffect } from "react";
import { Head, Link } from "@inertiajs/react";
import logo from "../assets/image.png";
import img1 from "../assets/1.png";
import img2 from "../assets/2.png";
import img3 from "../assets/3.png";

export default function Welcome({ auth, laravelVersion, phpVersion }) {
    const [currentImage, setCurrentImage] = useState(img1);

    // Função para alternar as imagens
    const changeImage = () => {
        setCurrentImage((prevImage) => {
            if (prevImage === img1) return img2;
            if (prevImage === img2) return img3;
            return img1;
        });
    };

    // Configurar o intervalo de mudança de imagem
    useEffect(() => {
        const interval = setInterval(changeImage, 5000); // Troca a imagem a cada 5 segundos

        // Limpar o intervalo quando o componente for desmontado
        return () => clearInterval(interval);
    }, []);

    const handleImageError = () => {
        document
            .getElementById("screenshot-container")
            ?.classList.add("!hidden");
        document.getElementById("docs-card")?.classList.add("!row-span-1");
        document
            .getElementById("docs-card-content")
            ?.classList.add("!flex-row");
        document.getElementById("background")?.classList.add("!hidden");
    };

    return (
        <>
            <Head title="Welcome" />
            <div className="font-sans bg-[#f5ecd8]">
                <div className="h-screen bg-[#f5ecd8]">
                    <nav className="flex justify-between items-center p-6 bg-[#0A654A] shadow-lg">
                        <div className="text-white text-xl font-semibold">
                            <Link href="/" className="hover:text-[#ffffff]">
                                <img className="w-14 h-14" src={logo} alt="" />
                            </Link>
                        </div>
                    </nav>

                    <main className="flex items-center justify-center h-screen bg-gradient-to-b from-[#f5ecd8] to-[#e0d0b8]">
                        <div className="w-full max-w-4xl  flex flex-col md:flex-row justify-between items-center px-6">
                            <div className="w-full md:w-1/2 space-y-6 text-center md:text-left">
                                <h1 className="text-3xl font-semibold text-[#333]">
                                    Pronto estaremos listos para el
                                    ¡lanzamiento! Estén atentos, estamos muy
                                    ¡pensando en el futuro!
                                </h1>
                                <p className="text-lg text-gray-600">
                                    La aplicación se encuentra en fase de prueba
                                    Beta para corregir posibles errores. Pronto
                                    lanzaremos nuestra aplicación en Play Store
                                    y App Store.
                                </p>
                            </div>
                            <div className="w-64 mt-6 md:mt-0">
                                <img
                                    src={currentImage} // Usa o estado currentImage para exibir a imagem atual
                                    alt="App Screenshot"
                                    className="w-full h-auto rounded-3xl shadow-lg"
                                    onError={handleImageError}
                                />
                            </div>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

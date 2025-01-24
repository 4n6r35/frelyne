// import { NavbarComponent } from "../../../shared/components/navbar.component"

// export const HomeViewComponent = () => {
//     return <>
//         <section className="grid grid-cols-[1.5fr_1fr] select-none">
//             <section className="relative w-full h-screen">
//                 <img className="absolute object-cover -z-10 w-full h-screen opacity-90"
//                     src="../../../../src/assets/img/guia para ser freelancer.webp" alt="freelancer/img" />
//                 <h1 className="p-5 text-4xl text-blue-300 italic">Freelyne</h1>
//             </section>
//             <section className="text-black">
//                 <NavbarComponent />
//                 <div className="px-14 lg:py-20 2xl:py-36">
//                     <div className="w-full h-32 grid place-content-center">
//                         <p className="text-3xl italic text-center">"Un puente entre grandes ideas y quienes pueden hacerlas realidad."</p>
//                     </div>
//                     <p className="text-xl mt-14">Crea tu perfil y conecta con empresas que buscan tu talento y habilidades para hacer realidad sus grandes ideas </p>
//                 </div>
//                 <div className="flex justify-items-center justify-center space-x-9 m-5 gap-3">
//                     <button className="border border-solid border-gray-500 rounded-md w-40 h-12 hover:bg-gray-100 hover:text-gray-800 cursor-pointer active:shadow-lg active:bg-gray-200 active:text-gray-900 active:translate-y-1 transition-all">Iniciar sesión</button>
//                     <button className="border border-solid border-gray-500 rounded-md w-40 h-12 hover:bg-gray-100 hover:text-gray-800 cursor-pointer active:shadow-lg active:bg-gray-200 active:text-gray-900 active:translate-y-1 transition-all">Registarse</button>
//                 </div>
//             </section>
//         </section>
//     </>
// }


// export const HomeViewComponent = () => {
//     return <>
//         <section className="text-black">
//             <h1 className="p-5 text-4xl text-blue-600 italic">Freelyne</h1>
//             <div className="px-14 lg:py-20 2xl:py-36">
//                 <div className="w-full h-32 grid place-content-center">
//                     <p className="text-3xl italic text-center">"Un puente entre grandes ideas y quienes pueden hacerlas realidad."</p>
//                 </div>
//                 <p className="text-xl mt-14">Crea tu perfil y conecta con empresas que buscan tu talento y habilidades para hacer realidad sus grandes ideas </p>
//             </div>
//             <div className="flex justify-items-center justify-center space-x-9 m-5 mb-10 gap-3">
//                 <button className="border border-solid font-bold border-gray-500 rounded-md w-40 h-12 hover:bg-gray-100 hover:text-gray-800 cursor-pointer active:shadow-lg active:bg-gray-200 active:text-gray-900 active:translate-y-1 transition-all">Iniciar sesión</button>
//                 <button className="w-40 h-12 bg-blue-50 font-bold text-blue-800 border border-solid border-blue-600 rounded-md 
//                     hover:text-blue-600 
//                     active:shadow-lg active:bg-blue-200 active:text-blue-900 active:translate-y-1 
//                     transition-all">Registarse</button>
//             </div>
//         </section>
//         <section className="relative w-full h-screen justify-items-end">
//             <img className="absolute object-cover -z-10 w-full h-screen opacity-90"
//                 src="../../../../src/assets/img/guia para ser freelancer.webp" alt="freelancer/img" />
//             {/* <NavbarComponent /> */}
//         </section>
//     </>
// }


export const HomeViewComponent = () => {
    return (
        <>
            <section className="relative w-full h-screen text-black grid place-content-center select-none">
                {/* Contenedor de la imagen con gradiente */}
                <div className="absolute inset-0 -z-10">
                    <img
                        className="w-full h-full object-cover opacity-65"
                        src="../../../../src/assets/img/guia para ser freelancer.webp"
                        alt="freelancer/img"
                    />
                    {/* Gradiente superpuesto */}
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-50/30 via-purple-50/30 to-pink-50/30"></div>
                </div>

                {/* Contenido */}
                <p className="text-3xl italic text-center">
                    "Un puente entre grandes ideas y quienes pueden hacerlas realidad."
                </p>
                <p className="text-xl mt-14">
                    Crea tu perfil y conecta con empresas que buscan tu talento y habilidades para hacer realidad sus grandes ideas.
                </p>
                <div className="flex justify-items-center justify-center space-x-9 m-5 mt-16 gap-3">
                <button className="w-40 h-12 font-bold text-black border border-black rounded-sm hover:shadow-md 
               active:shadow-lg active:translate-y-0.5 
                transition-all duration-200 ease-in-out">
                        Iniciar sesión
                    </button>

                    {/* Botón "Registrarse" */}
                    <button className="w-40 h-12 font-bold text-white bg-gradient-to-r from-blue-600 to-blue-500 border border-blue-600 rounded-lg shadow-sm hover:shadow-md hover:from-blue-700 hover:to-blue-600 active:from-blue-800 active:to-blue-700 active:shadow-lg active:translate-y-0.5 transition-all duration-200 ease-in-out">
                        Registrarse
                    </button>
                </div>
            </section>
        </>
    );
};
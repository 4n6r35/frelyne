
export const NavbarComponent = () => {

    // const aboutUsOptions = [
    //     {
    //         id: 1,
    //         option: 'Misión',
    //         redirect: ''
    //     },
    //     {
    //         id: 2,
    //         option: 'Visión',
    //         redirect: ''
    //     }
    // ]
    return <>
        <div className="flex flex-row p-2 justify-end items-center gap-8 text-black m-5 cursor-pointer select-none">
            {/* <DropdownComponent title="Sobre nosotros" options={aboutUsOptions} /> */}
            <h1 className="text-lg font-bold">Inciar sesión</h1>
        </div>
    </>
}
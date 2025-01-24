import { DropdownComponent } from "./dropdown.component"

export const NavbarComponent = () => {

    const aboutUsOptions = [
        {
            option: 'Misión',
            redirect: ''
        },
        {
            option: 'Visión',
            redirect: ''
        }
    ]
    return <>
        <div className="text-black m-20">
            <h1>Inciar sesión</h1>
            <DropdownComponent title="Sobre nosotros" options={aboutUsOptions} />
        </div>
    </>
}
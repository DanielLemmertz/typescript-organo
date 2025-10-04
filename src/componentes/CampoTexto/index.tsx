import './CampoTexto.css'
import React from 'react'

interface CampoTextoProps {
    placeholder: string
    label: string
    valor: string
    obrigatorio: boolean
    aoAlterado: (value: string) => void
}

const CampoTexto = ({ placeholder, label, valor, obrigatorio, aoAlterado }: CampoTextoProps) => {

    const placeholderModificada = `${placeholder}...`

    const aoDigitado = (evento: React.InputHTMLAttributes<HTMLInputElement>) => {
        aoAlterado(evento.target.value)
    }

    return (
        <div className="campo-texto">
            <label>
                {label}
            </label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} placeholder={placeholderModificada} />
        </div>
    )
}

export default CampoTexto
import React from 'react'

type Props = {
    label: any
    inputProps: any
    onChange: any
    value: any
}
const TextField = ({ label, inputProps, onChange, value }: Props) => {
    return (
        <div>
            <label>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default TextField
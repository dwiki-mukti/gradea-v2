'use client'

import { useEffect, useState } from "react"
import { typeInputProps } from "./Input"

export default function InputCheck({
    label,
    noLabel,
    stateHandler,

    defaultChecked,
    className,
    onChange,
    checked,
    style,
    name,
    id,

    ...props
}: Omit<typeInputProps, 'validations' | 'aspectRatio' | 'options' | 'path' | 'onSearch' | 'noSearch' | 'noUnset' | 'type'>) {
    const [getter, setter] = stateHandler ?? useState<typeStateInput>({})


    useEffect(() => {
        if (defaultChecked != undefined && getter.values?.[name] == undefined) {
            setter((prev: typeStateInput) => {
                return ({
                    ...prev,
                    values: {
                        ...(prev.values ?? {}),
                        [name]: (defaultChecked) ? 'on' : ''
                    }
                })
            })
        }
    }, [defaultChecked])


    return (
        <>
            <div className={`input-checkbox ${className}`}>
                <input
                    {...props}
                    id={id ?? name}
                    name={name}
                    type={'checkbox'}
                    onChange={(e) => {
                        if (onChange) onChange(e)
                        setter((prev: typeStateInput) => {
                            return ({
                                ...prev,
                                values: {
                                    ...(prev.values ?? {}),
                                    [name]: (e.target.checked) ? 'on' : ''
                                }
                            })
                        })
                    }}
                    checked={Boolean(checked ?? getter?.values?.[name])}
                    style={{ cursor: 'pointer', ...(style) }}
                />
                {!noLabel && (<label htmlFor={id ?? name}>{label ?? name}</label>)}
            </div>
        </>
    )
}

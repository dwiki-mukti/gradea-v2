'use client'

import React, { useEffect, useRef, useState } from 'react'
import { typeInputProps } from './Input'
import { epoch10to13, formatValueInputDate, formatValueInputDateTime } from '@/externals/utils/general'
import { inputValidator } from '@/externals/utils/frontend'

export default function InputDate({
    label,
    noLabel,
    isCleanup,
    validations,
    stateHandler,

    className,
    onInput,
    value,
    name,
    type,

    ...props
}:
    Omit<typeInputProps, 'aspectRatio' | 'options' | 'path' | 'onSearch' | 'noSearch' | 'noUnset' | 'type'>
    & { type?: 'date' | 'datetime-local' }
) {
    const refInput = useRef<HTMLInputElement>(null)
    const [getter, setter] = stateHandler ?? useState<typeStateForm>({})
    function sanitizeValue(newVal: any) {
        if (newVal) {
            return (type == 'datetime-local') ? formatValueInputDateTime(newVal) : formatValueInputDate(newVal)
        } else {
            return undefined;
        }
    }
    if (value) value = sanitizeValue(value);



    /**
     * useEffect
     */
    useEffect(() => {
        const currentValue = getter?.values?.[name];

        // adjust list uncompleteds column
        const addToUncompleteds = validations?.required && !currentValue && !getter?.uncompleteds?.includes(name);
        const removeFromUncompleteds = validations?.required && currentValue && getter?.uncompleteds?.includes(name);

        // adjust invalid
        const invalidMessages: string[] = inputValidator({ validations, fieldName: name, formControl: getter })
        const invalidMessagesIsChange = JSON.stringify(invalidMessages) != JSON.stringify(getter?.invalids?.[name])

        // sync value
        const isSyncPropsValue = ![undefined, getter.values?.[name]].includes(value);
        const isSyncValueElement = getter.values?.[name] != undefined && refInput.current?.value != (getter.values?.[name] ?? '');

        // push to state
        if (addToUncompleteds || removeFromUncompleteds || invalidMessagesIsChange || isSyncPropsValue || isSyncValueElement) {
            setter((prev: typeStateForm) => {
                const uncompleteds = (prev?.uncompleteds ?? []).filter((uncompleted) => (uncompleted != name))
                if (addToUncompleteds) uncompleteds.push(name)

                const values = { ...(prev?.values ?? {}) }
                if (isSyncPropsValue) values[name] = value
                if (!isNaN(values?.[name])) values[name] = epoch10to13(values?.[name]);
                values[name] = Number(new Date(values?.[name]));
                if (isNaN(values[name])) {
                    delete values[name];
                } else {
                    values[name] = sanitizeValue(values?.[name]);
                }

                if (refInput.current && isSyncValueElement) refInput.current.value = String(values[name] ?? '');
                return ({
                    ...(prev ?? {}), uncompleteds, values,
                    invalids: { ...(prev?.invalids ?? {}), [name]: invalidMessages },
                })
            })
        }
    }, [getter?.values, value])

    useEffect(() => () => {
        if (isCleanup) {
            setter((prev) => {
                const result = { ...prev };
                delete result?.invalids?.[name];
                delete result?.labels?.[name];
                delete result?.values?.[name];
                result.uncompleteds = (result.uncompleteds ?? []).filter((res) => res != name)
                return result;
            })
        }
    }, [])



    /**
     * Render JSX
     */
    return (
        <div className={`input-group ${className} ${getter?.invalids?.[name]?.length ? 'input-group-invalid' : ''}`}>
            {(!noLabel) && (
                <label onClick={() => (refInput.current?.focus())} className='label-input-form'>
                    {label ?? name}
                </label>
            )}
            <input
                ref={refInput}
                // value={getter?.values?.[name] ?? ''}
                onInput={(e) => {
                    if (onInput) onInput(e)
                    setter((prev: typeStateForm) => ({
                        ...prev,
                        values: { ...(prev.values), [name]: (e.target as HTMLInputElement).value }
                    }))
                }}
                name={name}
                className={`input-form`}
                type={type ?? 'date'}
                {...props}
            />
            {Boolean(getter?.invalids?.[name]?.length) && (
                <div className='invalid-message'>{getter?.invalids?.[name][0]}</div>
            )}
        </div>
    )
}
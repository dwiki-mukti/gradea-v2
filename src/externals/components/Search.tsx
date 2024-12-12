import { MagnifyingGlassIcon } from "@heroicons/react/24/solid"
import { useRef, useState } from "react"

export default function Search({
    onSubmit,
    className
}: {
    onSubmit?: (value: string) => void,
    className?: string
}) {
    const refSearch = useRef<HTMLInputElement>(null)
    const [DelaySearch, setDelaySearch] = useState<ReturnType<typeof setTimeout>>()
    return (
        <div className={`flex items-center grow md:grow-0`}>
            <input
                ref={refSearch}
                className={`input-form h-[2.25rem] text-xs px-4 shadow-sm ${className ?? ''}`}
                placeholder='Search...'
                onInput={(e) => {
                    const value = e.currentTarget.value
                    clearTimeout(DelaySearch)
                    setDelaySearch(
                        setTimeout(() => {
                            if (onSubmit) onSubmit(value);
                        }, 1000)
                    )
                }}
            />
            <div
                onClick={() => {
                    if (onSubmit) onSubmit(refSearch.current?.value ?? '');
                    clearTimeout(DelaySearch);
                }}
                className='my-auto ml-[-2rem] w-[1.5rem] cursor-pointer text-[1.25rem] text-gray-400'
            >
                <MagnifyingGlassIcon className="w-5" />
            </div>
        </div>
    )
}



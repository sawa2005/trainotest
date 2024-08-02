'use client'

import { useState, useEffect } from 'react'

export default function Form() {
    const [check, setCheck] = useState(false);
    const [formData, setFormData] = useState();

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const { title, role, desc } = e.target;

        setFormData({
            ...formData,
            title: title.value,
            role: role.value,
            desc: desc.value,
            check: check
        });
    };

    useEffect(() => { (formData) ? console.log(formData) : null }, [formData]);

    return (
        <form onSubmit={handleSubmit} className='flex flex-col size-3/4 bg-white/50 items-center rounded-lg p-6 gap-6 max-w-2xl'>
            <label htmlFor="title" className="flex flex-col text-sm font-semibold uppercase w-full">Titel
                <input type="text" name="title" className='block border-2 rounded h-12 mt-2 font-normal text-base p-2' />
            </label>
            <label htmlFor="role" className="flex flex-col text-sm font-semibold uppercase w-full"> Roll
                <select name="role" className="block border-2 rounded h-12 mt-2 font-normal text-base p-2">
                    <option>Trainee</option>
                    <option>Tränare</option>
                </select>
            </label>
            <label htmlFor="desc" className="flex flex-col text-sm font-semibold uppercase w-full"> Beskrivning
                <textarea name="desc" className="block border-2 rounded min-h-40 mt-2 font-normal text-base p-2"></textarea>
            </label>
            <label htmlFor="check" className="flex text-sm font-semibold uppercase gap-2"> Checkbox
                <input type="checkbox" name="check" onChange={(e) => {setCheck(e.target.checked)}} />
            </label>
            <input type="submit" value="Skicka" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold uppercase py-2 px-4 rounded cursor-pointer" />
        </form>
    )
}
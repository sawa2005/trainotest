'use client'

import { useState } from 'react'

export default function Form() {
    // Standardvärden för formuläret
    const [formData, setFormData] = useState({ role: 'Trainee', check: false });

    // Uppdaterar datan när formuläret ändras
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Skickar formulärdata med fetch
    const handleSubmit = async (e) => {
        e.preventDefault();
        
        const { title, role, desc } = e.target;

        setFormData({
            ...formData,
            title: title.value,
            role: role.value,
            desc: desc.value
        });

        const response = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json();
        console.log(result);
    };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col size-3/4 bg-white/50 items-center rounded-lg p-6 gap-6 max-w-2xl'>
            <label htmlFor="title" className="flex flex-col text-sm font-semibold uppercase w-full">Titel
                <input type="text" id="title" name="title" onChange={handleChange} className='block border-2 border-gray-300 rounded h-12 mt-2 font-normal text-base p-2' />
            </label>
            <label htmlFor="role" className="flex flex-col text-sm font-semibold uppercase w-full"> Roll
                <select name="role" id="role" onChange={handleChange} className="block border-2 border-gray-300 rounded h-12 mt-2 font-normal text-base p-2">
                    <option>Trainee</option>
                    <option>Tränare</option>
                </select>
            </label>
            <label htmlFor="desc" className="flex flex-col text-sm font-semibold uppercase w-full"> Beskrivning
                <textarea name="desc" id="desc" onChange={handleChange} className="block border-2 border-gray-300 rounded min-h-40 mt-2 font-normal text-base p-2"></textarea>
            </label>
            <label htmlFor="check" className="flex text-sm font-semibold uppercase gap-2"> Checkbox
                <input type="checkbox" id="check" name="check" onChange={(e) => {setFormData({ ...formData, check: e.target.checked })}} />
            </label>
            <input type="submit" value="Skicka" className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold uppercase py-2 px-4 rounded cursor-pointer" />
        </form>
    )
}
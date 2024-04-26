import { ExternalLink } from 'lucide-react';
import list from '../config/links';

export default function List() {
    return (
        <ul className='w-full flex flex-col gap-2 overflow-y-scroll h-[32rem] px-2 '>
            {list.map((link) => {
                return (
                    <li key={link.url} className='w-full flex text-white justify-between group py-6 bg-zinc-600/40 items-center px-4 rounded-lg'>
                        <a href={link.url} className='w-full h-full flex justify-between' target='_blank'>
                            <p className='text-xl font-semibold tracking-wider uppercase group-hover:opacity-50 transition-all duration-300'>{link.name}</p>
                            <ExternalLink className='h-6 w-6 group-hover:opacity-50 transition-all duration-300' />
                        </a>
                    </li>         
                )
            })}
        </ul>
    )
}
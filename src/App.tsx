export default function () {
    return (
        <div className="flex items-center justify-center w-[100vw] h-[100vh] bg-[#333] ">
            <div className="flex gap-5 items-center h-fit animate-show-animation">
                <div className="text-yellow2 text-[5rem] font-black h-fit gilroy-bold">NAPED</div>
                <div className="w-1 h-32 bg-yellow2"></div>
                <div className="flex h-full flex-col">
                    <p className="text-white akrobat font-medium text-3xl">Coming SOON</p>
                    <div className="flex items-center gap-3" >
                        <a href={"https://discord.naped.store"} >
                            <svg role="img" className="w-10 text-white hover:text-yellow2 cursor-pointer  transition-all duration-250 " fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <title>Discord</title>
                                <path color="currentColor" d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z"></path>
                            </svg>
                        </a>

                        <a href="https://instagram.naped.store" >
                            <svg className="w-10 text-white hover:text-yellow2 cursor-pointer transition-all duration-250" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 36 36" fill="none">
                                <title>Instagram</title>
                                <path d="M25.5 3H10.5C6.35786 3 3 6.35786 3 10.5V25.5C3 29.6421 6.35786 33 10.5 33H25.5C29.6421 33 33 29.6421 33 25.5V10.5C33 6.35786 29.6421 3 25.5 3Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M24 17.055C24.1851 18.3033 23.9719 19.5783 23.3906 20.6985C22.8094 21.8187 21.8897 22.7271 20.7624 23.2945C19.6351 23.8619 18.3577 24.0594 17.1117 23.8589C15.8657 23.6584 14.7146 23.0701 13.8222 22.1777C12.9299 21.2853 12.3416 20.1343 12.1411 18.8883C11.9406 17.6423 12.1381 16.3648 12.7055 15.2375C13.2729 14.1102 14.1813 13.1906 15.3015 12.6093C16.4217 12.0281 17.6966 11.8148 18.945 12C20.2184 12.1888 21.3973 12.7822 22.3075 13.6924C23.2178 14.6027 23.8112 15.7816 24 17.055Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M26.25 9.75H26.265" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>

                        <a href="mailto:contato@naped.store" >
                            <svg className="w-10 text-white hover:text-yellow2 cursor-pointer transition-all duration-250" xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
                                <path d="M6 6H30C31.65 6 33 7.35 33 9V27C33 28.65 31.65 30 30 30H6C4.35 30 3 28.65 3 27V9C3 7.35 4.35 6 6 6Z" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M33 9L18 19.5L3 9" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

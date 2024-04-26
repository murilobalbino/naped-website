import { Coffee, Github, Link } from "lucide-react";
import List from "./list";

export default function App() {
    
    return (
        <div className="flex flex-col items-center justify-center w-[100vw] min-h-screen bg-[#333] ">
            <div className="max-w-2xl space-y-4 flex flex-col items-center">
                <div className="text-yellow2 text-[5rem] font-black gilroy-bold">LISTA DE SCANS</div>
                <div className="w-full  h-1 bg-yellow2"></div>
                <List />
                
                <a target="_blank" href="https://livepix.gg/murilobalbino" className="w-fit flex justify-center items-center gap-2 text-yellow2"><Coffee /> Apoie o website a se manter online doando um pix</a>
                <a target="_blank" href="https://github.com/murilobalbino/naped-website/pulls" className="w-fit flex justify-center items-center gap-2 text-yellow2"><Github /> Quer adicionar uma scan? abra um pull-request</a>
                <a target="_blank" href="https://discord.gg/zZ5kDHq9br" className="w-fit flex justify-center items-center gap-2 text-yellow2"><Link /> Discord da Comunidade</a>
            </div>
        </div>
    );
}

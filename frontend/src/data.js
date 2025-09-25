import logo from "./assets/logo.png";
import brigadeiro from "./assets/brigadeiro.jpg"
import brigadeiro_embalado from "./assets/brigadeiro_embalado.jpg"
import doce_leite from "./assets/doce_de_leite.jpg"
import doce_leite_embalado from "./assets/doce_de_leite_embalado.jpg"
import doce_leite_coco from "./assets/doce_de_leite_coco.jpg"
import doce_leite_coco_embalado from "./assets/doce_leite_coco_embalado.jpg"
import prestigio from "./assets/prestigio.jpg"
import prestigio_embalado from "./assets/prestigio_embalado.jpg"


export const product = [
    {
        id: 1,
        name: "Pão de Mel - Brigadeiro",
        description: "Massa deliciosa sabor brigadeiro",
        price: "R$ 8,00",
        image: brigadeiro_embalado,
    },
    {
        id: 2,
        name: "Pão de Mel - Doce de leite",
        description: "Massa deliciosa sabor doce de leite",
        price: "R$ 7,00",
        image: doce_leite_embalado,
    },
    {
        id: 3,
        name: "Pão de Mel - Prestígio",
        description: "Massa deliciosa sabor prestígio",
        price: "R$ 8,00",
        image: prestigio_embalado,
    },
    {
        id: 4,
        name: "Pão de Mel - Doce de leite com Coco",
        description: "Massa deliciosa sabor doce de leite com Coco",
        price: "R$ 8,00",
        image: doce_leite_coco_embalado,
    }
];
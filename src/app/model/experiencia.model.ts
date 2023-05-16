export class Experiencia {
    id?:number
    nombre_de_empresa: string;
    nombre_del_puesto: string;
    fecha_inicio: string;
    fecha_fin: string;
    img_empresa: string;
    descripcion_empresa: string;

    constructor(nombre_de_empresa: string,nombre_del_puesto: string,fecha_inicio: string,fecha_fin: string,img_empresa: string,descripcion_empresa: string,){
        this.nombre_de_empresa = nombre_de_empresa;
        this.nombre_del_puesto = nombre_del_puesto;
        this.fecha_inicio= fecha_inicio;
        this.fecha_fin = fecha_fin;
        this.img_empresa= img_empresa;
        this.descripcion_empresa= descripcion_empresa;
    }
}
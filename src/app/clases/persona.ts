export class Persona {
    public nombre:string;
    public sexo:string;
    public email:string;
    public clave:string;
    public foto:string;

    constructor(nombre:string,sexo:string,email:string,clave:string,foto:string){
        this.nombre = nombre;
        this.sexo = sexo;
        this.email = email;
        this.clave = clave;
        this.foto = foto;
    }
}

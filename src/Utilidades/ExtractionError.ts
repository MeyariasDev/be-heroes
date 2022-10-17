import { IHeroes } from "src/Interface/IHeroes";

interface Ierror {
    errors:any
}
export const extractionError = (e:Ierror) => {
  const { errors } = e;
  if (Object.keys(errors).length === 1) {
    return errors[Object.keys(errors)[0]].message;
  }
  return `Los campos siguientes son requeridos: "${Object.keys(
    errors,
  ).toString()}" por favor verifique que esten llenos`;
};

export const ArrayNotEmpty = (data:IHeroes) => {
    if (
      data.img.length > 0 &&
      data.superPoder.length > 0 &&
      data.enemigo.length > 0 &&
      data.colaboradores.length > 0
    ) {
        return false
    }
}
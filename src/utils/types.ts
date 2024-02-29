export type StyleSpan = 'Text' | 'Input';
export type InputType = 'email' | 'text' | 'password' | 'number';
export type MaskTypes = 'phone' | 'cpf' | 'cep';
export interface PropsAtomSpan {
    styleType?: StyleSpan;
}

export interface MaskObject {
    cpf: string;
    cep: string;
    phone: string;
}

export interface PropsAtomInput {
    mask?: string;
}

export interface PropsMoleculeInput {
    label: string;
    inputType: InputType;
    required?: boolean;
    mask?: MaskTypes;
}

export interface PropsAtomLink {
    text: string;
}

export interface FormDataInterface {
    [key: string]: string | number | undefined;
    id?: number;
    cep?: string;
    password?: string;
    cpf?: string;
    phone?: string;
    name?: string;
    lastName?: string;
    email?: string;
    address?: string;
    city?: string;
    neighborhood?: string;
    uf?: string;
}
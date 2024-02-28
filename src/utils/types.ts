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
    name: string;
    type: InputType;
    mask?: string | null;
}

export interface PropsMoleculeInput {
    label: string;
    inputType: InputType;
    mask?: MaskTypes;
}

export interface PropsAtomLink {
    text: string;
}
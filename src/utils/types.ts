export type StyleSpan = 'text' | 'input';
export type InputType = 'text' | 'password';

export interface PropsAtomSpan {
    styleType?: StyleSpan;
}

export interface PropsAtomInput {
    name: string;
    type: InputType;
}

export interface PropsMoleculeInput {
    label: string;
    inputType: InputType;
}

export interface PropsAtomLink {
    text: string;
}
export type StyleSpan = 'text' | 'input';
export type InputType = 'text' | 'password';

export interface PropsAtomSpan {
    text: string;
    style?: StyleSpan;
}

export interface PropsAtomInput {
    name: string;
    type: InputType;
}

export interface PropsMoleculeInput {
    label: string;
    inputType: InputType;
}
export type LineProps = {
    id: string,
    to?: string[],
    from?: string,
}

export interface DragItem extends LineProps{
    label: string,
    defaultTop?: number,
    defaultLeft?: number,
}

export enum ACTION_TYPES {
    CHANGE_ITEM_POSITION = "CHANGE_ITEM_POSITION"
}

export const dataItems: DragItem[] = [
    {
        id: "html",
        to: ["css"],
        label: "HTML",
    },
    {
        id: "css",
        to: ["js"],
        from: 'html',
        label: "CSS",
        defaultTop: 400,
        defaultLeft: 400,
    },
    {
        id: "js",
        label: "JS",
        to: ["react", 'git'],
        from: 'css',
        defaultTop: 550
    },
    {
        id: "git",
        from: 'js',
        label: "GIT",
        defaultTop: 800,
        defaultLeft: 600,
    },
    {
        id: "react",
        from: 'js',
        label: "React",
        defaultTop: 700,
        defaultLeft: 450,
    }
]

type InitialState = {
    items: DragItem[],
    lastChangedId: string | null
}

export const initialState = {
    items: dataItems,
    lastChangedId: null
}

export const Reducer = (state: InitialState, action: { type: string, payload: number }) => {
    const { payload, type } = action
    switch (type) {
        case ACTION_TYPES.CHANGE_ITEM_POSITION:
            return Object.assign({}, state, { lastChangedId: payload })
        default:
            return state
    }
};
export type DragItem = {
    label: string,
    id: string,
    to?: string,
    from?: string,
    defaultTop?: number,
    defaultLeft?: number,
    dragCallback?: any,
}

export enum ACTION_TYPES {
    CHANGE_ITEM_POSITION = "CHANGE_ITEM_POSITION"
}

export const dataItems: DragItem[] = [
    {
        id: "html",
        to: "css",
        label: "HTML",
    },
    {
        id: "css",
        to: "js",
        from: 'html',
        label: "CSS",
        defaultTop: 400,
        defaultLeft: 400,
    },
    {
        id: "js",
        label: "JS",
        to: "react",
        from: 'css',
        defaultTop: 550
    },
    {
        id: "react",
        from: 'js',
        to: "git",
        label: "React",
        defaultTop: 700,
        defaultLeft: 450,
    },
    {
        id: "git",
        from: 'react',
        label: "GIT",
        defaultTop: 800,
        defaultLeft: 600,
    },
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
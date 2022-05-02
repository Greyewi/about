export type DragItem = {
    label: string,
    id: string,
    to?: string,
    from?: string,
    defaultTop?: number,
    defaultLeft?: number,
    dragCallback?: any,
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
        label: "React",
        defaultTop: 700,
        defaultLeft: 450,
    },
]

type initialState = {
    items: DragItem[],
    lastChangedId: string | null
}

export const initialState = {
    items: dataItems,
    lastChangedId: null
}

export const Reducer = (state: initialState, action: any) => {
    const { payload, type } = action;
    switch (type) {
        case "CHANGE_ITEM_POSITION":
            return Object.assign({}, state, { lastChangedId: payload });
        default:
            return state;
    }
};
const initState: InitStateType = {
    themeId: 1,
}

export const themeReducer = (state = initState, action: ActionType): InitStateType => {
    switch (action.type) {
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const)

// Types
type InitStateType = {
    themeId: number
}

type ChangeThemeType = ReturnType<typeof changeThemeId>
type ActionType = ChangeThemeType

const initialState = {
  items: [],
  files: [],
  isLoading: false,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case 'MESSAGES:ADD_MESSAGE':
      return {
        ...state,
        items: [...state.items, payload],
      };
    case 'MESSAGES:SET_ITEMS':
      return {
        ...state,
        items: payload,
        isLoading: false,
      };
      case "ATTACHMENTS:SET_ITEMS":
        return {
          ...state,
          files: payload
        };
    case 'DIALOGS:LAST_MESSAGE_READED_STATUS':
      console.log('тут')
      return {
        ...state,
        items: state.items.map(message => {
          if (message.dialog._id === payload.dialogId) {
            message.readed = true;
          }
          return message;
        }),
      };
    case 'MESSAGES:REMOVE_MESSAGE':
      return {
        ...state,
        items: state.items.filter(message => message._id !== payload),
      };
    case 'MESSAGES:SET_IS_LOADING':
      return {
        ...state,
        isLoading: payload,
      };
    default:
      return state;
  }
};

export const initialState={
    task:'Hello from the Reducer',
    _complete:false,
    id:Math.floor(Math.random()*999999),
    complete(){
        if(this._complete===false){
            this._complete=true;
        }else if(this._complete===true){
             this._complete=false;
        }
    }
};


export const reducer=(state, action)=>{
    switch(action.type){
        case 'Add_Item':
            return {
                ...state,
                task:action.payload,
                id:Math.floor(Math.random()*999999),   
            }
            case 'Remove_Item':
                return{
                    ...state,
                    task:action.payload,   
                }

        default:
            return state;
    }
}
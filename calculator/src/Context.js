import { createContext, useContext, useReducer } from "react";

const myContext=createContext();
const initial={
    input:"0",
    output:"0",
    val1:'',
    val2:'',
    type:'',
    case:false,
    point:false,
    point2:false,
    op:false,
}
const calculate=(val1,val2,type)=>{
if(val1.length===0 || val2.length===0 || type.length===0)return "ERROR"
val1=Number(val1);
val2=Number(val2);
if(type==='-')return val1-val2;
if(type==='/')return val1/val2;
if(type==='+')return val1+val2;
if(type==='*')return val1*val2;
if(type==='%')return val1%val2;
}
const reducer=(state,action)=>{
    
    if(((action>='0' && action<='9' )|| (action==='.' && !state.point))  && !state.case){
    return {
        ...state,
        input:state.val1+action,
        val1:state.val1+action,
        output:state.val1+action,
        point:(action==='.')?true:false
    }}
    else if(action==='-'  && !state.case && state.val1.length===0){
        return {
            ...state,
            input:state.val1+action,
            val1:state.val1+action,
            output:state.val1+action,
            point:(action==='.')?true:false
        }}
    else if( action==='-'  && state.case && state.val2.length===0){
        let t=state.type
        for(let i=state.input.length-1;i>=0;i--) if( (!(i>='0' && i<='9')) && i!=='.'){t=i;break;}
        
        return {
        ...state,
        input:state.input+action,
        val2:state.val2+action,
        output:state.val2+action,
        point2:(action==='.')?true:false,
        val1:state.op?state.output:state.val1,
        type:t
    }
    }
    else if(( (action>='0' && action<='9' )|| (action==='.' && !state.point2) )  && state.case){
        let t=state.type
        for(let i=state.input.length-1;i>=0;i--) if( (!(i>='0' && i<='9')) && i!=='.'){t=i;break;}
        
        return {
        ...state,
        input:state.input+action,
        val2:state.val2+action,
        output:state.val2+action,
        point2:(action==='.')?true:false,
        val1:state.op?state.output:state.val1,
        type:t
    }
    }
    else if((action==='*' || action==='/' || action==='+' || action ==='%') && state.val1.length===0 )
    return {
        ...state,
        output:"ERROR"
    }
    else if((action==='*' || action==='-' || action==='/' || action==='+' || action ==='%') && state.val2.length===0 )
    return {
        ...state,
        type:action,
        input:state.val1+action,
        case:true
    }
    else if((action==='*' || action==='-' || action==='/' || action==='+' || action ==='%') && state.val2.length!==0){
    const ans=calculate(state.val1,state.val2,state.type)
    return {
        ...state,
        output:ans,
        input:state.val1+state.type+state.val2+action,
        val2:'',
        op:true
    }
    }
    else if(action==='-+' && !state.case ){
        let val=Number(state.val1);
        if(val>=0)
        val=(-val).toString();
        else 
        val=Math.abs(val).toString();
        return {
            ...state,
            val1:val,
            input:val,
            output:val
        }
    }
    else if(action==='-+' && state.case ){
        let val=Number( state.val2);
        if(val>=0)
        val=(-val).toString();
        else 
        val=Math.abs(val).toString();
      
        return {
            ...state,
            val2:val,
            input:state.val1+state.type+val,
            output:val
        }
    }
else if(action==="ENTER"){
    const ans=calculate(state.val1,state.val2,state.type)
    return {
          input:'',
    output:ans,
    val1:'',
    val2:'',
    type:'',
    case:false,
    point:false,
    point2:false,
    op:false,
    last:{...state,output:ans}
    }
    }
    
    else if(action==='clear')
    return {
     ...initial   
    }
}
const Provider=({children})=>{
      const [state,dispatch] = useReducer(reducer,initial)
    function getValue(data){
        dispatch(data);
    }

    return <myContext.Provider value={{...state,getValue}} >{children}</myContext.Provider>
}
const Consumer=()=>{
    return useContext(myContext)
}

export {Provider,myContext,Consumer}

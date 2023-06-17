var count=0;
export function addTodo(data,des){
    return {
        type : "add",
        payload:{
            id:count++,
            data:data,
            des:des
        }
    }
}
export function Clear(){
    return {
        type:"clear all"
    }
}
export function Delete(id){
    return {
        type:"delete",
        id:id
    }
}
function ClassDecoratorParam(Param:number){
    console.log("------ClassDecorator with Parameter");
    console.log(`\n Param:${Param}`);
    return function(target){
        console.log("target");
        console.log(target);
        console.log("\n");
    }
}
function MethodDecoratorParam(param:string){
    console.log("-----Method Decorator with Param");
    console.log(`param:${param}`);
    return function(target,propertyKey,descriptor){
        console.log("target");
        console.log(target);
        console.log("propertyKey:");
        console.log(propertyKey);
        console.log("descriptor:");
        console.log(descriptor);
        console.log("\n");
    }
}
@ClassDecoratorParam(78)
class DecoratorExample{
    value:number;
    constructor(){
        this.value=100;
        console.log("Decorator Example Constructor Called");
        }
    @MethodDecoratorParam("My Name is ABC")
    print(){
        alert("Hello");
    }
}
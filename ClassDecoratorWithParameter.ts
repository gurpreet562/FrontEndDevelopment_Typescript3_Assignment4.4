function ClassDecoratorParam(Param:number){
    console.log("------ClassDecorator with Parameter");
    console.log(`\n Param:${Param}`);
    return function(target){
        console.log("target");
        console.log(target);
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
}